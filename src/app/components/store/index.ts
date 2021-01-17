import { combineReducers } from 'redux';
import { TimerReducer } from './timer.reducer';

export class IAppState {
  timer: any;   // you should create a custom type 
};

export const rootReducer = combineReducers<IAppState>({
  timer: TimerReducer
});
 