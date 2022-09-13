import { Component, Input, OnInit } from '@angular/core';
import langJSON from 'src/assets/lang.json'
import { forkJoin, map, Observable, startWith } from 'rxjs';
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
  private _isLoadFrom: boolean


  @Input() isSubmit: boolean
  @Input()
  get isLoadFrom(): boolean { return this._isLoadFrom }
  set isLoadFrom(value: boolean) {
    this._isLoadFrom = value;
    if (this._isLoadFrom && localStorage.getItem('order') != null) {
      const inputSubscribe = this.serviceResult.subscribe(res => {
        const order = JSON.parse(localStorage.getItem('order') || '')
        if (order != '') {
          if (order.airportFrom && order.airportFrom.name) {
            const node = this.treeControlFrom.dataNodes.filter(node => node.name == order.airportFrom.name)[0]
            this.expandParent(node, this.treeControlFrom)
            this.setAirportFrom(order.airportFrom.name)
          }
          if (order.airportTo && order.airportTo.name) {
            const node = this.treeControlTo.dataNodes.filter(node => node.name == order.airportTo.name)[0]
            this.expandParent(node, this.treeControlTo)
            this.setAirportTo(order.airportTo.name)
          }
          if (order.departureDate != null) {
            this.setDepartureDate(new Date(order.departureDate))
            this.departureDateForm = new FormControl(order.departureDate)

          }
          if (order.arrivalDate != null) {
            this.setArrivalDate(new Date(order.arrivalDate))
            this.arrivalDateForm = new FormControl(order.arrivalDate)

          }
        }
      })

    }
  }

  serviceResult: Observable<{
    allowedDirections: AllowedDirection[],
    countries: Country[],
    airports: Airport[],
    cities: City[]
  }>

  maxDate = new Date
  arrivalDate: Date
  departureDate: Date
  departureDateForm = new FormControl()
  arrivalDateForm = new FormControl()
  selectedAirportTo = ''
  selectedAirportFrom = ''

  airportTo = <Airport>{}
  airportFrom = <Airport>{}

  pageDict = langJSON.ru
  autocompleteOptions: any

  myControl = new FormControl('');
  filteredOptions: Observable<any[]>;

  private cities: City[] = []
  private airports: Airport[] = []
  private countries: Country[] = []
  private countriesBase: Country[] = []
  private allowedDirections: AllowedDirection[] = []

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
  expandParent(node: TreeItem, treeControl: any) {
    const currentLevel = treeControl.getLevel(node)
    if (currentLevel < 1) return
    let startIndex = treeControl.dataNodes.indexOf(node) - 1
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = treeControl.dataNodes[i]
      if (treeControl.getLevel(currentNode) < currentLevel)
        treeControl.expand(currentNode)
      if (treeControl.getLevel(currentNode) == 0)
        break
    }
  }
  constructor(
    private service: MockService
  ) {
  }

  generateTreeList(isFrom = true, targetId = -1): any[] {
    let treeData = []
    for (let counntry of this.countries.filter(counntry => !counntry.isDeleted)) {
      let country_node: TreeItem = { name: counntry.name }
      let cities_array: any[] = []
      for (let city of this.cities.filter(city => !city.isDeleted && city.countryId == counntry.id)) {
        let city_node: TreeItem = { name: city.name }
        let airport_array: any[] = []
        for (let airport of this.airports.filter(airport => !airport.isDeleted && city.id == airport.cityId)) {
          let airport_node: TreeItem = { name: airport.name }
          if (isFrom) {
            if (this.allowedDirections.filter(direction => direction.cityFromId == airport.cityId).length > 0)
              if (targetId >= 0) {
                if (this.allowedDirections.filter(dir => dir.cityToId == targetId && dir.cityFromId == airport.cityId).length > 0)
                  airport_array.push(airport_node)
              } else {
                airport_array.push(airport_node)
              }
          }
          else {
            if (this.allowedDirections.filter(direction => direction.cityToId == airport.cityId).length > 0)
              if (targetId >= 0) {
                if (this.allowedDirections.filter(dir => dir.cityFromId == targetId && dir.cityToId == airport.cityId).length > 0)
                  airport_array.push(airport_node)
              } else {
                airport_array.push(airport_node)
              }
          }
        }
        city_node.children = airport_array
        if (airport_array.length > 0) cities_array.push(city_node)
      }
      country_node.children = cities_array
      if (cities_array.length > 0) treeData.push(country_node)
    }
    console.log(treeData)
    return treeData
  }
  selectCountry(node: TreeItem) {
    // if (node.level == 0)
    //   if (this.countries.length > 1) {
    //     console.log(this.countries.filter(country => country.name == node.name)[0])
    //     this.countriesBase = this.countries
    //     this.countries = this.countries.filter(country => country.name == node.name)
    //     // this.dataSource.data = this.generateTreeList()
    //     console.log(this.countriesBase)
    //   } else {
    //     this.countries = this.countriesBase
    //     // this.dataSource.data = this.generateTreeList()
    //   }

  }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(option => (option ? this._filter(option) : this.autocompleteOptions.slice())),
    );

    this.serviceResult = forkJoin(
      {
        allowedDirections: this.service.getAllowedDirections(),
        countries: this.service.getCountries(),
        airports: this.service.getAirports(),
        cities: this.service.getCities(),
      }
    )


    const initSubscribe = this.serviceResult.subscribe(res => {
      // console.log(res)
      this.countries = res.countries.filter(item => !item.isDeleted)
      this.airports = res.airports.filter(item => !item.isDeleted)
      this.cities = res.cities.filter(item => !item.isDeleted)
      this.allowedDirections = res.allowedDirections

      this.dataFrom.data = this.generateTreeList()
      this.dataTo.data = this.generateTreeList(false)
    })

    this.autocompleteOptions = [...this.cities, ...this.countries]
  }


  treeControlTo = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable
  )
  treeControlFrom = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable
  )
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  )

  dataFrom = new MatTreeFlatDataSource(this.treeControlFrom, this.treeFlattener)
  dataTo = new MatTreeFlatDataSource(this.treeControlTo, this.treeFlattener)



  setAirportFrom(airportFromName: string) {
    if (this.selectedAirportFrom != airportFromName) {
      if (this.selectedAirportFrom == '' && this.selectedAirportTo == '' || this.selectedAirportFrom != '' && this.selectedAirportTo != '') {
        this.dataTo.data = this.generateTreeList(false, this.airports.filter(airport => airport.name == airportFromName)[0].cityId)
        this.selectedAirportTo = ''
        this.service.setAirportTo(<Airport>{})
      }
      this.selectedAirportFrom = airportFromName
      this.service.setAirportFrom(this.airports.filter(airport => airport.name == airportFromName)[0])
    } else {
      this.selectedAirportFrom = ''
      this.service.setAirportFrom(<Airport>{})
      this.dataTo.data = this.generateTreeList(false)
    }
    this.service.setDestinationFrom(this.generateDestinationString(airportFromName))
  }
  setAirportTo(airportToName: string) {
    if (this.selectedAirportTo != airportToName) {
      if (this.selectedAirportFrom == '' && this.selectedAirportTo == '' || this.selectedAirportFrom != '' && this.selectedAirportTo != '') {
        this.dataFrom.data = this.generateTreeList(true, this.airports.filter(airport => airport.name == airportToName)[0].cityId)
        this.selectedAirportFrom = ''
        this.service.setAirportFrom(<Airport>{})
      }
      this.selectedAirportTo = airportToName
      this.service.setAirportTo(this.airports.filter(airport => airport.name == airportToName)[0])
    } else {
      this.selectedAirportTo = ''
      this.service.setAirportTo(<Airport>{})
      this.dataFrom.data = this.generateTreeList()
    }
    this.service.setDestinationTo(this.generateDestinationString(airportToName))

  }

  setArrivalDate(date: Date) {
    this.arrivalDate = date
    this.service.setArrivalDate(date)
  }
  setDepartureDate(date: Date) {
    this.departureDate = date
    this.service.setDepartureDate(date)
  }
  generateDestinationString(airportName: string) {
    let airport = this.airports.filter(a => a.name == airportName)[0]
    let city = this.cities.filter(c => c.id == airport.cityId)[0]
    let counntry = this.countries.filter(country => country.id == city.countryId)[0]
    return counntry.name + ' - ' + city.name + ' - ' + airport.name
  }
}
