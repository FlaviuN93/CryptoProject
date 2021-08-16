import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { UserContext } from '../context/data/user.context';
import FormInput from './FormInput';
import ErrorModal from './ErrorModal';

import LoadingSpinner from './LoadingSpinner';
import { useHttpClient } from '../shared/http-hook';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isLoading, sendRequest } = useHttpClient();

  const auth = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:5000/api/v1/users/login',
        'POST',
        JSON.stringify({ email, password }),
        { 'Content-Type': 'application/json' }
      );

      auth.login();
    } catch (err) {}
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {error ? <ErrorModal error={error} /> : null}{' '}
          <h1
            style={{
              color: '#001E6C',
              textAlign: 'center',
              marginTop: '50px',
            }}
          >
            Fortech
            <span style={{ color: 'red', fontSize: 28 }}>.</span>
          </h1>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ color: '#4C4C66' }}>If you do not have an account</h3>
            <span style={{ color: '#6F6C99', fontWeight: '500' }}>
              Press <Link to='/register'>here</Link> to register
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='auth-container'>
              <div>
                <FormInput
                  type='email'
                  name='email'
                  label='Email'
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <FormInput
                  type='password'
                  name='password'
                  label='Password'
                  value={password}
                  handleChange={(e) => setPassword(e.target.value)}
                  required
                  minLength='6'
                  maxLength='30'
                />
              </div>
              <Button
                variant='contained'
                type='submit'
                style={{ width: '250px', height: '40px' }}
                color='primary'
              >
                Log in
              </Button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
