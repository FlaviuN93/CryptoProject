import { Button } from '@material-ui/core';

import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../providers/user.provider';
import ErrorModal2 from './SharedComponents/ErrorModal2';
import FormInput from './SharedComponents/FormInput';
import LoadingSpinner from './SharedComponents/LoadingSpinner';
const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const history = useHistory();

  const { isLoading, error, signupRequest } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    signupRequest(userCredentials);
    history.push('/');
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {error ? <ErrorModal2 error={error} /> : null}
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
            <div className='input-container'>
              <div>
                <FormInput
                  type='text'
                  name='username'
                  value={userCredentials.name}
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
                  value={userCredentials.email}
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
                  value={userCredentials.password}
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
                  value={userCredentials.confirmPassword}
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
