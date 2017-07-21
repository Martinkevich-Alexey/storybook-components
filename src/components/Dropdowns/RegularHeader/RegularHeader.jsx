import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RegularHeader.scss';


const RegularHeader = ({ text, className = '' }) => (
  <div className={classNames({
    'dropdown-regular-header': true,
    [className]: true,
  })}
  >
    {text}
  </div>
  );

RegularHeader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default RegularHeader;