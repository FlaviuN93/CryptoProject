import React, { useState } from 'react';

import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core';
import './Header.css';
import SearchBar from './SearchBar';
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClose = () => setAnchorEl(false);

  return (
    <div className='header-container'>
      <div style={{ width: '55%' }}>
        <h2 style={{ marginBottom: '5px', color: '#4C4C66' }}>Dashboard</h2>
        <p style={{ marginTop: '0', color: '#6F6C99' }}>
          With all of the styling tool options available in today’s market
        </p>
      </div>
      <div className='header-nav'>
        <SearchBar />
        <Button>
          <AppsIcon />
        </Button>
        <Button size='small' startIcon={<NotificationsIcon />} id='header-btn'>
          15
        </Button>

        <Button endIcon={<ExpandMoreIcon />} onClick={() => setAnchorEl(true)}>
          <Avatar alt='name' src='' /> <hr /> Name{' '}
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
          <MenuItem onClick={handleClose}>Wallet</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
