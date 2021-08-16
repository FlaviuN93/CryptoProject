import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

import { ListItem } from '@material-ui/core';
import { AccountBalanceWallet, Dashboard } from '@material-ui/icons';
import ForumIcon from '@material-ui/icons/Forum';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-logo'>
          <i className='fas fa-file-code'></i>
          <h3 style={{ color: '#001E6C' }}>
            Fortech
            <span style={{ color: 'red', fontSize: 28 }}>.</span>
          </h3>
        </div>
        <div className='sidebar-container'>
          <Link to='/'>
            <ListItem
              className='sidebar-item'
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <Dashboard style={{ marginRight: '6px' }} />
              Dashboard
            </ListItem>
          </Link>
          <Link to='/'>
            <ListItem
              className='sidebar-item'
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <AccountBalanceWallet style={{ marginRight: '6px' }} />
              Wallet
            </ListItem>
          </Link>{' '}
          <Link to='/'>
            <ListItem
              className='sidebar-item'
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ForumIcon style={{ marginRight: '6px' }} />
              Messages
            </ListItem>{' '}
          </Link>{' '}
          <Link to='/'>
            <ListItem
              className='sidebar-item'
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ImportExportIcon style={{ marginRight: '6px' }} />
              Trade
            </ListItem>
          </Link>{' '}
          <Link to='/'>
            <ListItem
              className='sidebar-item'
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <AccountCircleIcon style={{ marginRight: '6px' }} /> Account
              Setting
            </ListItem>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
