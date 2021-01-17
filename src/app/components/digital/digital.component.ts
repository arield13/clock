import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IAppState } from '../store/index';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.less']
})
export class DigitalComponent implements OnInit {
  @select('timer') public timer$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

}
