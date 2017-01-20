import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import counters from 'modules/counters';

export default combineReducers(Map({
  [counters.constants.NAME]: counters.reducer,
}));
