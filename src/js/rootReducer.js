import { combineReducers } from 'redux';
import counters from './modules/counters';

export default combineReducers({
  [counters.constants.NAME]: counters.reducer,
});
