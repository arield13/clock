import { SET_TIME, RESET_TIME, CHANGE_TIME } from '../actions/setting.action';
//const moment = require('moment');
const INITIAL_STATE = { value: new Date(), other: "" };

export function TimerReducer(state = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case SET_TIME:
      let date = new Date(state.value);
      date.setSeconds(date.getSeconds() + 1);
      return { value: date};
    break;

    case RESET_TIME:
      return { value: new Date()};
    break;

    case CHANGE_TIME:
        let time = action.newtime.split(":");
        let _time = new Date()
        _time.setHours(time[0])
        _time.setMinutes(time[1])
        return { value: _time};
    break;

    default:
      return state;
  }
}