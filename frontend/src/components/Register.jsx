import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import './Register.scss';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleChange = (event) => {};

  return (
    <>
      <h1 style={{ color: '#001E6C', textAlign: 'center', marginTop: '20px' }}>
        Fortech
        <span style={{ color: 'red', fontSize: 28 }}>.</span>
      </h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3 style={{ color: '#4C4C66' }}>If you do not have an account</h3>
        <span style={{ color: '#6F6C99', fontWeight: '500' }}>
          Register with your email and password
        </span>
      </div>
      <form className='register-form' onSubmit={handleSubmit}>
        <div className='container'>
          <div>
            <label htmlFor='name' className='form-input-label'></label>
            <input
              className='form-input'
              type='text'
              name='username'
              id='name'
              onChange={handleChange}
              required
              placeholder='Username'
              pattern='^[a-zA-Z0-9]{4,10}$'
              maxLength='20'
              title='No special characters. e.g. @!$%'
            />
          </div>
          <div>
            <label htmlFor='email' className='form-input-label'></label>
            <input
              className='form-input'
              type='email'
              name='email'
              onChange={handleChange}
              required
              id='email'
              placeholder='Email'
            />
          </div>
          <div>
            <label htmlFor='password' className='form-input-label'></label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
              required
              minLength='6'
              maxLength='30'
              placeholder='Password'
              className='form-input'
            />
          </div>
          <div>
            <label
              htmlFor='confirmPassword'
              className='form-input-label'
            ></label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              onChange={handleChange}
              required
              minLength='6'
              maxLength='30'
              placeholder='Confirm Password'
              className='form-input'
            />
          </div>
          <Button
            variant='contained'
            type='submit'
            size='large'
            color='primary'
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Register;
