import React, { memo } from 'react';
import PropTypes from 'prop-types';

const StackItem = ({ children, className }) => {
  return <div className={`w-full ${className}`}>{children}</div>;
};

StackItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  className: PropTypes.string,
};

StackItem.defaultProps = {
  className: '',
};

export default memo(StackItem);
