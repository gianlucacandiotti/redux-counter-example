import React from 'react';

const Counter = ({
  value,
  onIncrementClick,
  onDecrementClick,
}) => {
  console.log(value)
  return (
    <div>
      <span>{value}</span>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
    </div>
  )
};

export default Counter;