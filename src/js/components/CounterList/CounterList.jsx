import React, { PropTypes } from 'react';
import Counter from 'components/Counter/Counter';

const CounterList = ({
  counters,
  onRemove,
  onIncrement,
  onDecrement
}) => (
  <div className="counter-list block">
    {counters.map((counter) => (
      <Counter
        key={counter.id}
        {...counter}
        onRemoveClick={() => onRemove(counter.id)}
        onIncrementClick={() => onIncrement(counter.id)}
        onDecrementClick={() => onDecrement(counter.id)}
      />
    ))}
  </div>
);

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  })),
  onRemove: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default CounterList;
