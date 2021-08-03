import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import './Login.scss';
import { AuthContext } from '../context/data/auth-context';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const auth = useContext(AuthContext);

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    auth.login();
    history.push('/');
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

export default Login;
