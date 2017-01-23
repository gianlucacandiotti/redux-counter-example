import React, { PropTypes } from 'react';

const Button = ({
  children,
  className,
  onClick,
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
