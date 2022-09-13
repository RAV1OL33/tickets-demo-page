import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
import langJSON from 'src/assets/lang.json'

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  private future: Date;
  private futureString: string;
  private diff: number;
  private $counter: Observable<number>;
  private subscription: Subscription;
  pageDict = langJSON.ru
  @Input() arrivalDate: Date
  @Input() departureDate: Date
  months = [
    'Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
  ];
  cDateMillisecs: any;
  tDateMillisecs: any;
  year: number = 2023;
  month: number = 6;
  currentDate: any;
  targetDate: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  day: number = 31;





  constructor(elm: ElementRef) {
    this.futureString = elm.nativeElement.getAttribute('inputDate');
  }

  dhms() {
    this.currentDate = new Date();
    this.targetDate = this.departureDate
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
  }

  ngOnInit() {
    this.future = new Date(this.futureString);
    this.$counter = interval(1000)
    

    this.subscription = this.$counter
      .subscribe((x) => this.dhms());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
