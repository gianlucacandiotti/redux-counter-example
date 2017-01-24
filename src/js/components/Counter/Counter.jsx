import React, { PropTypes } from 'react';
import styles from './Counter.scssm';

const Counter = ({
  value,
  onRemoveClick,
  onIncrementClick,
  onDecrementClick,
}) => (
  <div className={`card block ${styles.root}`}>
    <button className={`delete ${styles.removeButton}`} onClick={onRemoveClick}></button>
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
