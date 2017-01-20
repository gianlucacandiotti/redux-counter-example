import { List, Map } from 'immutable';
import * as t from './actionTypes';

const initialState = List();

const addCounter = (state) => (
  state.push(Map({
    id: state.size + 1,
    value: 0,
  }))
);

const incrementCounter = (state, id) => {
  const index = state.findIndex(e => e.get('id') === id);
  return state.update(index, e => e.update('value', v => v += 1));
};

const decrementCounter = (state, id) => {
  const index = state.findIndex(e => e.get('id') === id);
  return state.update(index, e => e.update('value', v => v -= 1));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_NEW:
      return addCounter(state);
    case t.INCREMENT:
      return incrementCounter(state, action.payload.id);
    case t.DECREMENT:
      return decrementCounter(state, action.payload.id);
    default:
      return state;
  }
};
