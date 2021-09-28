import React, { useState, useContext } from 'react';
import FormInput from '../SharedComponents/FormInput';
import { Avatar } from '@material-ui/core';
import './ProfileInfo.scss';
import { UserContext } from '../../providers/user.provider';

const ProfileInfo = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const { userInfo } = useContext(UserContext);
  const { token, user } = userInfo;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div style={{ backgroundColor: 'white' }}>
      <h2 style={{ color: '#6f6c99', margin: '2rem 0', textAlign: 'center' }}>
        Your Account Settings
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <div>
            <FormInput
              type='text'
              name='username'
              value={userCredentials.name}
              handleChange={(e) =>
                setUserCredentials({ ...userCredentials, name: e.target.value })
              }
              label='Username'
              pattern='^[a-zA-Z0-9]{4,10}$'
              maxLength='20'
              title='No special characters. e.g. @!$%'
              placeholder={user.name}
            />
          </div>
          <div>
            <FormInput
              type='email'
              name='email'
              value={userCredentials.email}
              handleChange={(e) =>
                setUserCredentials({
                  ...userCredentials,
                  email: e.target.value,
                })
              }
              label='Email'
              placeholder={user.email}
            />
          </div>
          <div className='photo-container'>
            <Avatar alt='photo' src='' id='avatar' />
            <input
              className='photo-upload'
              type='file'
              accept='image/*'
              name='photo'
              id='photo'
            />
            <label className='photo-label' htmlFor='photo'>
              Choose new photo
            </label>
          </div>
          <button type='button' className='profile-button'>
            {' '}
            Save Settings
          </button>
        </div>
      </form>
      <hr style={{ marginBottom: '2rem' }} />
      <h2
        style={{
          color: '#6f6c99',
          marginBottom: '3rem',
          textAlign: 'center',
        }}
      >
        Password Change
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <div>
            <FormInput
              type='password'
              name='currentPassword'
              value={userCredentials.currentPassword}
              handleChange={(e) =>
                setUserCredentials({
                  ...userCredentials,
                  currentPassword: e.target.value,
                })
              }
              label='Current Password'
              required
              minLength='6'
              maxLength='30'
              placeholder='Password'
            />
          </div>
          <div>
            <FormInput
              type='password'
              name='newPassword'
              value={userCredentials.newPassword}
              handleChange={(e) =>
                setUserCredentials({
                  ...userCredentials,
                  newPassword: e.target.value,
                })
              }
              label='New Password'
              required
              minLength='6'
              placeholder='Password'
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
              placeholder='Password'
            />
          </div>
          <button type='button' className='profile-button'>
            {' '}
            Save Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
