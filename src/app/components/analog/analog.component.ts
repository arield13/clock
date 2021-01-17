import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IAppState } from '../store/index';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-analog',
  templateUrl: './analog.component.html',
  styleUrls: ['./analog.component.less']
})
export class AnalogComponent implements OnInit {

   hours: any;
   minutes: any;
   seconds: any;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.ngRedux.select('timer').pipe(map(_date=>{
      this.setTime(_date)
    })).subscribe();

  }
  setTime(_date) {
    const hours = ((_date.value.getHours() + 11) % 12 + 1);
    const minutes = _date.value.getMinutes();
    const seconds = _date.value.getSeconds();
    
    const second = seconds * 6;
    const minute = (minutes * 6) + (second / 60);
    const hour = (hours * 30) + ((minute / 2)/ 6);
    this.hours = `rotate(${hour}deg)`;
    this.minutes = `rotate(${minute}deg)`;
    this.seconds = `rotate(${second}deg)`;
  }

}
