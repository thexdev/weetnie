import React, { memo } from "react";
import PropTypes from "prop-types";

const Button = ({ children, className }) => {
  return (
    <button
      className={`px-3 py-2 text-center bg-blue-600 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

export default memo(Button);
