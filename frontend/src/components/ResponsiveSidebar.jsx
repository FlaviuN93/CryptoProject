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
import './ResponsiveSidebar.scss';

const useStyles = makeStyles({
  sidebarItem: {
    color: '#6f6c99',
    height: '4.5rem !important',
    display: 'flex',
    alignItems: 'center',
    margin: '0 !important',
  },
});

const ResponsiveSidebar = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='responsive-sidebar'>
      <div className={`${collapsed ? 'backdrop' : ''}`}>
        <h3 style={{ color: '#001E6C', fontSize: '18px', marginLeft: '5px' }}>
          Fortech
          <span style={{ color: 'red', fontSize: 28 }}>.</span>
        </h3>

        <Button
          onClick={toggleCollapsed}
          style={{ width: 80, backgroundColor: '#53b9ea' }}
          variant='contained'
        >
          {collapsed ? (
            <CloseIcon style={{ color: 'white' }} />
          ) : (
            <MenuIcon style={{ color: 'white' }} />
          )}
        </Button>

        <Menu
          defaultSelectedKeys={['1']}
          mode='inline'
          inlineCollapsed={!collapsed}
          style={{ height: '80vh' }}
        >
          <Menu.Item
            className={classes.sidebarItem}
            key='1'
            icon={<Dashboard />}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            className={classes.sidebarItem}
            key='2'
            icon={<AccountBalanceWallet />}
          >
            Wallet
          </Menu.Item>
          <Menu.Item
            className={classes.sidebarItem}
            key='3'
            icon={<ForumIcon />}
          >
            Messages
          </Menu.Item>
          <Menu.Item
            className={classes.sidebarItem}
            key='4'
            icon={<ImportExportIcon />}
          >
            Trade
          </Menu.Item>
          <Menu.Item
            className={classes.sidebarItem}
            key='5'
            icon={<AccountCircleIcon />}
          >
            Account Settings
          </Menu.Item>
        </Menu>
      </div>{' '}
    </div>
  );
};

export default ResponsiveSidebar;
