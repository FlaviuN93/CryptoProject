import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core';
import './Header.css';
const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-title'>
        <h2>Dashboard</h2>
        <p>With all of the styling tool options available in today’s market</p>
      </div>
      <div className='header-nav'>
        <Button>
          <SearchIcon />
        </Button>
        <Button>
          <AppsIcon />
        </Button>
        <Button size='small' startIcon={<NotificationsIcon />} id='header-btn'>
          15
        </Button>
        <div>
          <Avatar alt='name' src='' />
          <Button endIcon={<ExpandMoreIcon />}>name</Button>
          <Menu id='user-menu'>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Wallet</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
