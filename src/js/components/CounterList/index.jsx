import React from 'react';
import Counter from 'components/Counter';

const CounterList = ({
  counters,
  onAddNew,
  onIncrement,
  onDecrement
}) => (
  <div>
    {counters.map((counter) => (
      <Counter
        key={counter.id}
        {...counter}
        onIncrementClick={() => onIncrement(counter.id)}
        onDecrementClick={() => onDecrement(counter.id)}
      />
    ))}
    <button onClick={onAddNew}>Add New Counter</button>
  </div>
);

export default CounterList;
