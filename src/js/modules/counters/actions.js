import * as t from './actionTypes';

export const addNew = () => ({
  type: t.ADD_NEW,
});

export const increment = (id) => ({
  type: t.INCREMENT,
  payload: {
    id,
  },
});

export const decrement = (id) => ({
  type: t.DECREMENT,
  payload: {
    id,
  },
});
