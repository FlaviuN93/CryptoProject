import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileSidebar.scss';

import { ListItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { UserContext } from '../../providers/user.provider';

const ProfileSidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const { userInfo } = useContext(UserContext);
  const { user } = userInfo;
  const handleListItemClick = (event, index) => setSelectedIndex(index);

  return (
    <>
      <div className='profile-container'>
        <Link to={`/user/${user.id}`}>
          <ListItem
            className={`${selectedIndex === 1 && 'active'} profile-item`}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <AccountCircleIcon style={{ marginRight: '6px' }} /> User Info
          </ListItem>
        </Link>
      </div>
    </>
  );
};

export default ProfileSidebar;
