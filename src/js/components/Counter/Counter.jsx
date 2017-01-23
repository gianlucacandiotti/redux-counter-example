import React, { PropTypes } from 'react';
import './Counter.style.css';

const Counter = ({
  value,
  onRemoveClick,
  onIncrementClick,
  onDecrementClick,
}) => (
  <div className="counter card block">
    <button className="counter-remove delete" onClick={onRemoveClick}></button>
    <div className="card-content has-text-centered">
      <div className="content">
        {value}
      </div>
    </div>
    <footer className="card-footer">
      <a className="card-footer-item counter-increment" onClick={onIncrementClick}>Increment</a>
      <a className="card-footer-item counter-decrement" onClick={onDecrementClick}>Decrement</a>
    </footer>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
}

export default Counter;
