import reducer from './reducer';

it('increments the counter starting at 0', () => {
  expect(reducer(0, { type: 'INCREMENT' })).toEqual(1);
});

it('increments the counter starting at 1', () => {
  expect(reducer(1, { type: 'INCREMENT' })).toEqual(2);
});

it('decrements the counter starting at 2', () => {
  expect(reducer(2, { type: 'DECREMENT' })).toEqual(1);
});

it('decrements the counter starting at 1', () => {
  expect(reducer(1, { type: 'DECREMENT' })).toEqual(0);
});

it('handles unknown actions', () => {
  expect(reducer(1, { type: 'UNKNOWN' })).toEqual(1);
});

it('handles undefined initial state', () => {
  expect(reducer(undefined, {})).toEqual(0);
});
