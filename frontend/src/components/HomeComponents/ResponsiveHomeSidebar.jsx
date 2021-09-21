import React, { useState } from 'react';
import { Menu } from 'antd';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { AccountBalanceWallet, Dashboard } from '@material-ui/icons';
import ForumIcon from '@material-ui/icons/Forum';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './ResponsiveHomeSidebar.scss';
import Backdrop from '../SharedComponents/Backdrop';

const useStyles = makeStyles({
  responseSidebar: {
    color: '#6f6c99',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  responseSidebarItem: {
    margin: '0 !important',
    height: '3.5rem !important',
  },
});

const ResponsiveSidebar = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div style={{ zIndex: '1000' }}>
      {collapsed && <Backdrop onClick={toggleCollapsed} />}
      <h3
        style={{
          color: '#001E6C',
          fontSize: '18px',
          marginLeft: '5px',
        }}
      >
        Fortech
        <span style={{ color: 'red', fontSize: '28px' }}>.</span>
      </h3>

      <Button
        onClick={toggleCollapsed}
        style={{ width: 80, backgroundColor: '#53b9ea' }}
        variant='contained'
      >
        {collapsed ? (
          <CloseIcon id='icon-x-close' />
        ) : (
          <MenuIcon id='icon-x-close' />
        )}
      </Button>

      <Menu
        defaultSelectedKeys={['1']}
        mode='inline'
        inlineCollapsed={!collapsed}
        className={classes.responseSidebar}
      >
        <Menu.Item
          key='1'
          icon={<Dashboard style={{ marginRight: '1rem' }} />}
          className={classes.responseSidebarItem}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key='2'
          icon={<AccountBalanceWallet style={{ marginRight: '1rem' }} />}
          className={classes.responseSidebarItem}
        >
          Wallet
        </Menu.Item>
        <Menu.Item
          key='3'
          icon={<ForumIcon style={{ marginRight: '1rem' }} />}
          className={classes.responseSidebarItem}
        >
          Messages
        </Menu.Item>
        <Menu.Item
          key='4'
          icon={<ImportExportIcon style={{ marginRight: '1rem' }} />}
          className={classes.responseSidebarItem}
        >
          Trade
        </Menu.Item>
        <Menu.Item
          key='5'
          icon={<AccountCircleIcon style={{ marginRight: '1rem' }} />}
          className={classes.responseSidebarItem}
        >
          Account Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ResponsiveSidebar;
