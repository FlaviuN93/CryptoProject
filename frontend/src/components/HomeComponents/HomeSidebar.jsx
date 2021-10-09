import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeSidebar.scss';

import { ListItem } from '@material-ui/core';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { AccountBalanceWallet, Dashboard } from '@material-ui/icons';
import ForumIcon from '@material-ui/icons/Forum';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { CSSTransition } from 'react-transition-group';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [showIcon, setShowIcon] = useState(false);
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const handleListItemClick = (event, index) => setSelectedIndex(index);
  const handleCollapseSidebar = () => setCollapseSidebar(!collapseSidebar);
  const handleIcon = useCallback(() => setShowIcon(!showIcon), [showIcon]);

  return (
    <CSSTransition
      in={collapseSidebar}
      timeout={300}
      classNames='sidebar-transition'
    >
      <div
        className={`${collapseSidebar ? 'collapse-sidebar' : 'sidebar'} `}
        onMouseEnter={handleIcon}
        onMouseLeave={handleIcon}
      >
        <CSSTransition
          in={showIcon}
          timeout={{ exit: 500, enter: 300 }}
          classNames='sidebar-icon-transition'
        >
          <>
            {showIcon ? (
              <div onClick={handleCollapseSidebar} className='sidebar-btn'>
                {collapseSidebar ? (
                  <MenuUnfoldOutlined
                    style={{ fontSize: '26px' }}
                    className='sidebar-btn-icon'
                  />
                ) : (
                  <MenuFoldOutlined
                    style={{ fontSize: '26px' }}
                    className='sidebar-btn-icon'
                  />
                )}
              </div>
            ) : null}
          </>
        </CSSTransition>

        {!collapseSidebar ? (
          <div className='sidebar-container'>
            {' '}
            <div className='sidebar-logo'>
              <i className='fas fa-file-code'></i>
              <h3 style={{ color: '#001E6C' }}>
                Fortech
                <span style={{ color: 'red', fontSize: 28 }}>.</span>
              </h3>
            </div>
            <Link to='/'>
              <ListItem
                className='sidebar-item-0'
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <Dashboard />
                Dashboard
              </ListItem>
            </Link>
            <Link to='/'>
              <ListItem
                className='sidebar-item-1'
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <AccountBalanceWallet />
                Wallet
              </ListItem>
            </Link>{' '}
            <Link to='/'>
              <ListItem
                className='sidebar-item-2'
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ForumIcon />
                Messages
              </ListItem>{' '}
            </Link>{' '}
            <Link to='/'>
              <ListItem
                className='sidebar-item-3'
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ImportExportIcon />
                Trade
              </ListItem>
            </Link>{' '}
            <Link to='/'>
              <ListItem
                className='sidebar-item-4'
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
              >
                <AccountCircleIcon /> Account Setting
              </ListItem>
            </Link>
          </div>
        ) : (
          <div className='sidebar-flex-container'>
            <div className='sidebar-collapse-logo'>
              <h3 style={{ color: '#001E6C' }}>
                Fortech
                <span style={{ color: 'red', fontSize: 28 }}>.</span>
              </h3>
            </div>
            <Link to='/'>
              <ListItem
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <Dashboard />
              </ListItem>
            </Link>
            <Link to='/'>
              <ListItem
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <AccountBalanceWallet />
              </ListItem>
            </Link>{' '}
            <Link to='/'>
              <ListItem
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ForumIcon />
              </ListItem>{' '}
            </Link>{' '}
            <Link to='/'>
              <ListItem
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ImportExportIcon />
              </ListItem>
            </Link>{' '}
            <Link to='/'>
              <ListItem
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
              >
                <AccountCircleIcon />
              </ListItem>
            </Link>
          </div>
        )}
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
