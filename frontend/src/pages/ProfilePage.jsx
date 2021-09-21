import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import ProfileSidebar from '../components/ProfileComponents/ProfileSidebar';
import ProfileHeader from '../components/ProfileComponents/ProfileHeader';
import ProfileInfo from '../components/ProfileComponents/ProfileInfo';
import './ProfilePage.scss';

const useStyles = makeStyles({
  root: {
    height: '150vh',
    backgroundColor: '#DDDDDD',
  },
});

const ProfilePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProfileHeader />
      <Container id='profile-container'>
        <ProfileSidebar />
        <ProfileInfo />
      </Container>
    </div>
  );
};

export default ProfilePage;
