import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddAppPage from './add-application';
import ApplicationViewContainer from './applications-view/view-container';

const useStyles = makeStyles({
  welcome: {
    padding: '10px',
  },
});

const propTypes = {
  user: PropTypes.object.isRequired,
};

const HomePage = ({ user }) => {
  const classes = useStyles();
  const [addingApplication, setAddingApplication] = useState(false);

  const loggedIn = () => (window.localStorage.getItem('loggedCompanyappUser') !== null);

  const loggedInHomePage = () => (
    <div>
      <Typography className={classes.welcome} variant="h4">
        {`Welcome, ${user?.name}`}
      </Typography>
      <ApplicationViewContainer
        addingApplication={addingApplication}
        setAddingApplication={setAddingApplication}
      />
      <AddAppPage
        user={user}
        addingApplication={addingApplication}
        setAddingApplication={setAddingApplication}
      />
    </div>
  );

  const loggedOutHomePage = () => (
    <div>
      <Typography className={classes.welcome} variant="h4">
        Welcome, Guest
      </Typography>
      <Typography className={classes.welcome} variant="body">
        Please consider creating an account or logging in to take advantage of our many features!
      </Typography>
    </div>
  );

  return <div>{loggedIn() ? loggedInHomePage() : loggedOutHomePage()}</div>;
};
HomePage.propTypes = propTypes;
export default HomePage;
