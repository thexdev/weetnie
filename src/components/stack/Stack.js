import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Stack = ({ children, className, title }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {title !== '' && <h3 className="w-full text-lg">{title}</h3>}
      {children}
    </div>
  );
};

Stack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  className: PropTypes.string,
  title: PropTypes.string,
};

Stack.defaultProps = {
  className: '',
  title: '',
};

export default memo(Stack);
