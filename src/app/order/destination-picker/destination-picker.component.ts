import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import langJSON from 'src/assets/lang.json'
import countriesJSON from 'src/assets/countries.json'
import allowedDirections from 'src/assets/allowedDirections.json'
import airportsJSON from 'src/assets/airports.json'
import citiesJSON from 'src/assets/cities.json'
import nationalities from 'src/assets/nationalities.json'
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Airport, Country, City } from 'src/app/mock.model';
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
  @Input() isDateValid: boolean = true
  @Input() isAirportValid: boolean = true
  @Input() isFrom: boolean = true
  @Output() airportEvent = new EventEmitter<Airport>()
  @Output() dateEvent = new EventEmitter<Date>()
  private airports: Airport[] = []
  private countries: Country[] = []
  private cities: City[] = []

  pageDict = langJSON.ru
  // autocompleteOptions = [...citiesJSON.filter(city => !city.isDeleted), ...countriesJSON.filter(counntry => !counntry.isDeleted)]
  autocompleteOptions: any

  minDate: Date;
  maxDate: Date;


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
    this.dataSource.data = this.generateTreeList()
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }


  generateTreeList(): any[] {
    let treeData = []
    for (let counntry of countriesJSON.filter(counntry => !counntry.isDeleted)) {
      let country_node: TreeItem = { name: counntry.name }
      let cities_array: any[] = []
      for (let city of citiesJSON.filter(city => !city.isDeleted && city.countryId == counntry.id)) {
        let city_node: TreeItem = { name: city.name }
        let airport_array: any[] = []
        for (let airport of airportsJSON.filter(airport => !airport.isDeleted && city.id == airport.cityId)) {
          let airport_node: TreeItem = { name: airport.name }
          airport_array.push(airport_node)
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

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(option => (option ? this._filter(option) : this.autocompleteOptions.slice())),
    );

    this.service.getAirports().subscribe(data => {
      this.airports = data.filter(item => !item.isDeleted)
    })
    this.service.getCities().subscribe(data => {
      this.cities = data.filter(item => !item.isDeleted)
    })
    this.service.getCountries().subscribe(data => {
      this.countries = data.filter(item => !item.isDeleted)
    })
    this.autocompleteOptions = [...this.cities, ...this.countries]

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
    this.isAirportValid = true
    this.airportEvent.emit(this.airports.filter(airport => airport.name == targetAirportName)[0]) 
  }
  setDate(date: Date){
    console.log(date)
    this.isDateValid = true
    this.dateEvent.emit(date)
  }

}
