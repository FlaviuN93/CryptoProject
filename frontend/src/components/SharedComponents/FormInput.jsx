import React from 'react';
import './FormInput.scss';

const FormInput = ({ handleChange, label, placeholder, ...otherProps }) => {
  return (
    <div className='group'>
      <input
        className={`${placeholder ? 'form-input-lg' : 'form-input'} `}
        onChange={handleChange}
        placeholder={placeholder}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length || placeholder ? 'shrink' : ''} 
        form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
