import React, { useState } from 'react';
import './Header.scss';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@material-ui/core';
import SearchBar from './SearchBar';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const handleClose = () => setAnchorEl(false);
  const isLargePhone = useMediaQuery('(max-width:54em)');
  const isPhone = useMediaQuery('(max-width:43.75em)');

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
          <Button>
            <AppsIcon style={{ height: '1.8rem', width: '2rem' }} />
          </Button>

          {isPhone ? null : (
            <Button
              style={{ width: '4rem', height: '2.2rem' }}
              startIcon={<NotificationsIcon style={{ height: '1.2rem' }} />}
              id='header-btn'
            >
              15
            </Button>
          )}
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={() => setAnchorEl(true)}
            style={{ letterSpacing: '.75px' }}
          >
            <Avatar alt='name' src='' />
            {isLargePhone ? null : (
              <>
                <hr style={{ marginLeft: '5px' }} /> <span>Flaviu</span>
              </>
            )}
          </Button>
          <Menu
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 285,
              horizontal: 145,
            }}
            open={anchorEl}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            {isPhone ? (
              <MenuItem onClick={handleClose}>Notifications</MenuItem>
            ) : null}
            <MenuItem onClick={handleClose}>Wallet</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>

        {/* <Button component={Link} to='/register'>
          Authenticate
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
