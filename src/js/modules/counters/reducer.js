import * as t from './actionTypes';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case t.INCREMENT:
      return state + 1;
    case t.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
