import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { UserContext } from '../providers/user.provider';
import FormInput from './SharedComponents/FormInput';
import LoadingSpinner from './SharedComponents/LoadingSpinner';
import ErrorModal2 from './SharedComponents/ErrorModal2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { isLoading, error, loginRequest } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginRequest(email, password);
    history.push('/');
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {error && <ErrorModal2 error={error} />}
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
            <div className='input-container'>
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
