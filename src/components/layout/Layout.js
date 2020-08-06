import React, { memo } from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className="grid grid-cols-12 grid-rows-6 gap-4">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default memo(Layout);
