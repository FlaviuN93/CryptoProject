import React, { useContext } from 'react';
import './ProfileHeader.scss';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar, Button, useMediaQuery } from '@material-ui/core';
import { UserContext } from '../../providers/user.provider';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
  const isPhone = useMediaQuery('(max-width:43.75em)');
  const isSmallPhone = useMediaQuery('(max-width:28.5em)');
  const { userInfo, isLoggedIn, logout } = useContext(UserContext);
  const { user } = userInfo;

  const menu = (
    <Menu>
      <Menu.Item
        style={{ color: '#6f6c99' }}
        key='1'
        icon={<AccountCircleIcon />}
      >
        <Link to={`/user/${user.id}`}>Profile</Link>
      </Menu.Item>
      {isPhone ? (
        <Menu.Item
          style={{ color: '#6f6c99' }}
          key='2'
          icon={<NotificationsIcon />}
        >
          <Link to='/'>Notifications</Link>
        </Menu.Item>
      ) : null}
      <Menu.Item
        style={{ color: ' #6f6c99' }}
        key='3'
        icon={<AccountBalanceWalletIcon />}
      >
        <Link to='/'>Wallet</Link>
      </Menu.Item>{' '}
      <Menu.Item style={{ color: ' #6f6c99' }} key='4' icon={<ExitToAppIcon />}>
        <Link to='/login' onClick={logout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='profile-header'>
      <Link to={`/`}>
        <Button style={{ color: '#6f6c99' }}>
          <HomeIcon style={{ marginRight: '6px' }} />
          Homepage
        </Button>
      </Link>
      <Link className='profile-logo' to='/'>
        <i className='fas fa-file-code'></i>
        <h3 style={{ color: '#001E6C' }}>
          Fortech
          <span style={{ color: 'red', fontSize: 28 }}>.</span>
        </h3>
      </Link>

      <div className='profile-nav'>
        {isLoggedIn ? (
          <>
            <Dropdown overlay={menu} placement='topRight' trigger={['click']}>
              <Button>
                {' '}
                <Avatar id='avatar' src='' style={{ marginRight: '5px' }} />
                {!isSmallPhone && (
                  <span style={{ color: ' #6f6c99' }}>{user.name}</span>
                )}
                <ExpandMoreIcon
                  style={{ color: '#6F6C99', fontSize: '28px' }}
                />
              </Button>
            </Dropdown>
          </>
        ) : (
          <>
            <Link to='/register'>
              <Button>Authenticate</Button>
            </Link>{' '}
            <Link to='/about-us'>
              <Button>About Us</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
