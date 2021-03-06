import * as t from './actionTypes';

export const add = () => ({
  type: t.ADD,
});

export const remove = (id) => ({
  type: t.REMOVE,
  payload: {
    id,
  },
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
