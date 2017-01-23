import { List, Map } from 'immutable';
import * as t from './actionTypes';

const initialState = List();

const findIndex = (state, id) => state.findIndex(e => e.get('id') === id);

const addCounter = (state) => {
  const id = state.size
    ? state.map(e => e.get('id')).max() + 1
    : 1;

  return state.push(Map({
    id,
    value: 0,
  }))
};

const removeCounter = (state, id) => state.delete(findIndex(state, id));

const incrementCounter = (state, id) => {
  const index = findIndex(state, id);
  return state.update(index, e => e.update('value', v => v += 1));
};

const decrementCounter = (state, id) => {
  const index = findIndex(state, id);
  return state.update(index, e => e.update('value', v => v -= 1));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD:
      return addCounter(state);
    case t.REMOVE:
      return removeCounter(state, action.payload.id);
    case t.INCREMENT:
      return incrementCounter(state, action.payload.id);
    case t.DECREMENT:
      return decrementCounter(state, action.payload.id);
    default:
      return state;
  }
};
