import React, { useContext } from 'react';
import './Header.scss';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar, Button, useMediaQuery } from '@material-ui/core';
import { UserContext } from '../../providers/user.provider';
import SearchBar from './SearchBar';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import NotificationModal from './NotificationModal';
import { StatesContext } from '../../providers/states.provider';

const Header = () => {
  const isTablet = useMediaQuery('(max-width:55em)');
  const isPhone = useMediaQuery('(max-width:43.75em)');
  const { toggleModal, handleModal } = useContext(StatesContext);

  const { userInfo, isLoggedIn, logout } = useContext(UserContext);
  const { user } = userInfo;

  const menu = (
    <Menu>
      <Menu.Item
        key='1'
        style={{ color: '#6f6c99' }}
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
          <Link to='/notifications'>Notifications</Link>
        </Menu.Item>
      ) : null}
      <Menu.Item
        style={{ color: '#6f6c99' }}
        key='3'
        icon={<AccountBalanceWalletIcon />}
      >
        <Link to='/'>Wallet</Link>
      </Menu.Item>{' '}
      <Menu.Item style={{ color: '#6f6c99' }} key='4' icon={<ExitToAppIcon />}>
        <Link to='/login' onClick={logout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='header-container'>
      <div className='header-dashboard'>
        <h2 style={{ marginBottom: '5px', color: '#4C4C66' }}>Dashboard</h2>
        {isPhone ? (
          <p style={{ marginTop: '0', color: '#6F6C99', marginRight: '5px' }}>
            All of the options available in today’s market
          </p>
        ) : (
          <p style={{ marginTop: '0', color: '#6F6C99', marginRight: '15px' }}>
            With all of the styling tool options available in today’s market
          </p>
        )}
      </div>
      <div className='header-nav'>
        <div>
          <SearchBar />
        </div>

        <div className='nav-list'>
          {isLoggedIn ? (
            <>
              <Button>
                <AppsIcon style={{ height: '1.8rem', width: '2rem' }} />
              </Button>
              {isPhone ? null : (
                <Button
                  startIcon={<NotificationsIcon style={{ height: '1.1rem' }} />}
                  id='header-btn'
                  onClick={handleModal}
                >
                  15
                </Button>
              )}
              <NotificationModal
                showModal={toggleModal}
                handleModal={handleModal}
              />
              <Dropdown overlay={menu} placement='topRight' trigger={['click']}>
                <Button>
                  {' '}
                  <Avatar alt='name' src='' style={{ marginRight: '5px' }} />
                  {isTablet ? null : (
                    <span style={{ color: '#6f6c99' }}>{user.name}</span>
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
    </div>
  );
};

export default Header;
