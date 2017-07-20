import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import settings from './settings.scss';
import icon from '../../../../assets/icons/circle-loading-black.png';

const PrimaryButton = ({text, onClick, className='', disabled = false, processing = false}) => {
  
  return (
    <Button text={text}
            onClick={onClick}
            disabled={disabled}
            processing={processing}
            iconUri={icon}
            style={settings}
            className={`secondary-button ${className}`}
            />
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  className: PropTypes.string,
}

export default PrimaryButton;
