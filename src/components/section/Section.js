import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, className, link, title }) => {
  return (
    <section className={className}>
      <div className="flex mb-4">
        <h1 className="text-2xl">{title}</h1>
        {typeof link === 'object' && (
          <span className="inline-block self-center ml-auto text-sm text-blue-500">
            {link.name}
          </span>
        )}
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string,
  link: PropTypes.object,
  title: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};

export default memo(Section);
