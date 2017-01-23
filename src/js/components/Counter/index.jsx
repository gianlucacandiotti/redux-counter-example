import React, { PropTypes } from 'react';
import './styles.scss';

const Counter = ({
  value,
  onIncrementClick,
  onDecrementClick,
}) => (
  <div className="counter card block">
    <div className="card-content has-text-centered">
      <div className="content">
        {value}
      </div>
    </div>
    <footer className="card-footer">
      <a className="card-footer-item" onClick={onIncrementClick}>Increment</a>
      <a className="card-footer-item" onClick={onDecrementClick}>Decrement</a>
    </footer>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
}

export default Counter;
