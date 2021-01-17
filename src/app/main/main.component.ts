import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../components/store/index';
import { SET_TIME, RESET_TIME, CHANGE_TIME } from '../components/actions/setting.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  _time: String;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.start();
    this.setInput();
  }

  start() {
    setInterval(() => {
      this.ngRedux.dispatch({ type: SET_TIME });
    }, 1000);
    
  }

  changeTime(){
    this.ngRedux.dispatch({ type: CHANGE_TIME, newtime : this._time  });
  }

  reset(){
    this.ngRedux.dispatch({ type: RESET_TIME });
    this.setInput();
  }

  setInput(){
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let str = hours + ':' + minutes;
    this._time = str;
  }

}
