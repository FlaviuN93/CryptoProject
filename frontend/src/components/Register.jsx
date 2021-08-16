import { Button } from '@material-ui/core';

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorModal from './ErrorModal';
import FormInput from './FormInput';
import LoadingSpinner from './LoadingSpinner';
import { useHttpClient } from '../shared/http-hook';
import { UserContext } from '../context/data/user.context';

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = userCredentials;
  const auth = useContext(UserContext);
  const { error, isLoading, sendRequest } = useHttpClient();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:5000/api/v1/users/signup',
        'POST',
        JSON.stringify({ name, email, password, confirmPassword }),
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
          {error ? <ErrorModal error={error} /> : null}
          <h1
            style={{ color: '#001E6C', textAlign: 'center', marginTop: '30px' }}
          >
            Fortech
            <span style={{ color: 'red', fontSize: 28 }}>.</span>
          </h1>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ color: '#4C4C66' }}>If you have an account</h3>
            <span style={{ color: '#6F6C99', fontWeight: '500' }}>
              Press <Link to='/login'>here</Link> to login
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='auth-container'>
              <div>
                <FormInput
                  type='text'
                  name='username'
                  value={name}
                  handleChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      name: e.target.value,
                    })
                  }
                  label='Username'
                  required
                  pattern='^[a-zA-Z0-9]{4,10}$'
                  maxLength='20'
                  title='No special characters. e.g. @!$%'
                />
              </div>
              <div>
                <FormInput
                  type='email'
                  name='email'
                  label='Email'
                  value={email}
                  handleChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <FormInput
                  type='password'
                  name='password'
                  label='Password'
                  value={password}
                  handleChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      password: e.target.value,
                    })
                  }
                  required
                  minLength='6'
                  maxLength='30'
                />
              </div>
              <div>
                <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  handleChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      confirmPassword: e.target.value,
                    })
                  }
                  label='Confirm Password'
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
                Register
              </Button>
            </div>
          </form>{' '}
        </>
      )}
    </>
  );
};

export default Register;
