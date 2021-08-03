import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { AccountBalanceWallet, Dashboard } from '@material-ui/icons';
import './Sidebar.scss';
import ForumIcon from '@material-ui/icons/Forum';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <i className='fas fa-file-code'></i>
        <h3 style={{ color: '#001E6C' }}>
          Fortech
          <span style={{ color: 'red', fontSize: 28 }}>.</span>
        </h3>
      </div>
      <ButtonGroup className='btn-container'>
        <Link to='/'>
          <Button className='sidebar-btn'>
            <Dashboard />
            <p>Dashboard</p>
          </Button>
        </Link>
        <Link to='/'>
          <Button className='sidebar-btn'>
            <AccountBalanceWallet />
            <p>Wallet</p>
          </Button>
        </Link>
        <Link to='/'>
          <Button className='sidebar-btn'>
            <ForumIcon />
            <p>Messages</p>
          </Button>
        </Link>
        <Link to='/'>
          <Button className='sidebar-btn'>
            <ImportExportIcon />
            <p>Trade</p>
          </Button>
        </Link>
        <Link to='/'>
          <Button className='sidebar-btn'>
            <AccountCircleIcon />
            <p>Account Setting</p>
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default Sidebar;
