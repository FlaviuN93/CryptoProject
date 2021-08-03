import React from 'react';
import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='container'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      <label className='form-input-label'>{label}</label>
    </div>
  );
};

export default FormInput;
