import { List, Map } from 'immutable';
import reducer from './reducer';
import * as actions from './actions';

it('adds a counter', () => {
  const state = List.of(Map({
    id: 1,
    value: 0,
  }));

  const action = actions.addNew();

  const nextState = List.of(
    Map({
      id: 1,
      value: 0,
    }),
    Map({
      id: 2,
      value: 0,
    })
  );

  expect(reducer(state, action)).toEqual(nextState);
});

it('increments the counter', () => {
  const state = List.of(
    Map({
      id: 1,
      value: 0,
    },
  ));

  const action = actions.increment(1);

  const nextState = List.of(
    Map({
      id: 1,
      value: 1,
    },
  ));

  expect(reducer(state, action)).toEqual(nextState);
});

it('decrements the counter', () => {
  const state = List.of(
    Map({
      id: 1,
      value: 1,
    },
  ));

  const action = actions.decrement(1);

  const nextState = List.of(
    Map({
      id: 1,
      value: 0,
    },
  ));

  expect(reducer(state, action)).toEqual(nextState);
});

it('handles unknown actions', () => {
  const state = List.of(
    Map({
      id: 1,
      value: 1,
    },
  ));

  expect(reducer(state, { type: 'UNKNOWN' })).toEqual(state);
});

it('handles undefined initial state', () => {
  const nextState = List();

  expect(reducer(undefined, {})).toEqual(nextState);
});
