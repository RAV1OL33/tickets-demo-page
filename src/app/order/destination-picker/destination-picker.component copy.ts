import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import langJSON from 'src/assets/lang.json'
import { map, Observable, of, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Airport, Country, City, AllowedDirection } from 'src/app/mock.model';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MockService } from 'src/app/mock.service';

export class TreeItem {
  name: string;
  children?: TreeItem[]
}

@Component({
  selector: 'app-destination-picker',
  templateUrl: './destination-picker.component.html',
  styleUrls: ['./destination-picker.component.scss']
})
export class DestinationPickerComponent implements OnInit {
  private _data: { airports: Airport[], countries: Country[], cities: City[], allowedDirections: AllowedDirection[] }


  @Input() isValid: { isFrom: boolean, date: boolean, airport: boolean } = { isFrom: true, date: true, airport: true }
  @Input()
  get data(): { airports: Airport[], countries: Country[], cities: City[], allowedDirections: AllowedDirection[] } { return this._data }
  set data(value: { airports: Airport[], countries: Country[], cities: City[], allowedDirections: AllowedDirection[] }) {
    this._data = value;
    this.dataSource.data = this.generateTreeList()
    console.log('aa')
  }
  @Output() airportEvent = new EventEmitter<Airport>()
  @Output() dateEvent = new EventEmitter<Date>()
  private airports: Airport[] = []
  private airportsTo: Airport[] = []
  private airportsFrom: Airport[] = []
  private countries: Country[] = []
  private countriesBase: Country[] = []
  private cities: City[] = []
  private allowedDirections: AllowedDirection[] = []

  pageDict = langJSON.ru
  autocompleteOptions: any

  minDate: Date;
  maxDate: Date;

  airportTo = <Airport>{}
  airportFrom = <Airport>{}

  test1 = this.service.getAllowedAirportsFrom()

  myControl = new FormControl('');
  filteredOptions: Observable<any[]>;

  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    }
  }
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.autocompleteOptions.filter((option: { name: string; }) => option.name.toLowerCase().includes(filterValue))
  }
  hasChild = (_: number, node: any) => node.expandable;
  hasNoChild = (_: number, node: any) => node.expandable == false;

  constructor(
    private service: MockService
  ) {
  }

  generateTreeList(): any[] {
    let treeData = []
    let targetAirports = true
    if (this.airportFrom) {
      targetAirports = true
    }
    for (let counntry of this.countries.filter(counntry => !counntry.isDeleted)) {
      let country_node: TreeItem = { name: counntry.name }
      let cities_array: any[] = []
      for (let city of this.cities.filter(city => !city.isDeleted && city.countryId == counntry.id)) {
        let city_node: TreeItem = { name: city.name }
        let airport_array: any[] = []
        for (let airport of this.airports.filter(airport => !airport.isDeleted && city.id == airport.cityId)) {
          let airport_node: TreeItem = { name: airport.name }
          if (this.isValid.isFrom) {
            if (this.allowedDirections.filter(direction => direction.cityFromId == airport.cityId).length > 0)
              airport_array.push(airport_node)
          }
          else {
            if (this.allowedDirections.filter(direction => direction.cityToId == airport.cityId).length > 0)
              if (this.airportFrom) {
                if (this.allowedDirections.filter(direction => direction.cityFromId == this.airportFrom.cityId).length > 0)
                  airport_array.push(airport_node)
              }
              else {
                airport_array.push(airport_node)
              }
            }
          }

        }
        city_node.children = airport_array
        if (airport_array.length > 0) cities_array.push(city_node)
      }
      country_node.children = cities_array
      if (cities_array.length > 0) treeData.push(country_node)
    }
    // console.log(treeData)
    return treeData
  }
  selectCountry(node: any) {
    if (node.level == 0)
      if (this.countries.length > 1) {
        console.log(this.countries.filter(country => country.name == node.name)[0])
        this.countriesBase = this.countries
        this.countries = this.countries.filter(country => country.name == node.name)
        this.dataSource.data = this.generateTreeList()
        this.airportsTo = []
        console.log(this.countriesBase)
      } else {
        this.countries = this.countriesBase
        this.dataSource.data = this.generateTreeList()
      }

  }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(option => (option ? this._filter(option) : this.autocompleteOptions.slice())),
    );

    this.service.getCountries().subscribe(data => {
      this.countries = data.filter(item => !item.isDeleted)
      this.dataSource.data = this.generateTreeList()
    })
    this.service.getCities().subscribe(data => {
      this.cities = data.filter(item => !item.isDeleted)
      this.dataSource.data = this.generateTreeList()
    })
    this.service.getAirports().subscribe(data => {
      this.airports = data.filter(item => !item.isDeleted)
      this.dataSource.data = this.generateTreeList()
    })
    this.service.getAllowedDirections().subscribe(data => {
      this.allowedDirections = data
      this.dataSource.data = this.generateTreeList()
    })
    this.autocompleteOptions = [...this.cities, ...this.countries]
    if (this.isValid.isFrom) {
      this.minDate = new Date
    }
    this.service.getOrderData().subscribe(res => {
      this.airportTo = res.airportTo
      this.airportFrom = res.airportFrom
      this.dataSource.data = this.generateTreeList()

    })
  }


  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable
  )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  )

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)

  setAirport(targetAirportName: string) {
    this.isValid.airport = true
    if (this.isValid.isFrom)
      this.service.setAirportFrom(this.airports.filter(airport => airport.name == targetAirportName)[0])
    else
      this.service.setAirportTo(this.airports.filter(airport => airport.name == targetAirportName)[0])

    this.airportEvent.emit(this.airports.filter(airport => airport.name == targetAirportName)[0])
  }
  setDate(date: Date) {
    console.log(date)
    this.isValid.date = true
    this.dateEvent.emit(date)
  }

}
