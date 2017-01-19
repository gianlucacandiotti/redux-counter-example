import React from 'react';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <span>{value}</span>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);

export default Counter;
