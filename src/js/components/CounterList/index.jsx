import React, { PropTypes } from 'react';
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
    <button className="button is-primary" onClick={onAddNew}>Add New Counter</button>
  </div>
);

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  })),
  onAddNew: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default CounterList;
