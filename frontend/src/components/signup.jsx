import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Notification from './notification';
import AppService from '../services/apps';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const propTypes = {
  setUser: PropTypes.func.isRequired,
};

const Signup = ({ setUser }) => {
  const classes = useStyles();

  const [message, setMessage] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const register = (event) => {
    event.preventDefault();
    try {
      const userObject = {
        username: newUsername,
        name: newName,
        password: newPassword,
      };

      const user = AppService.createUser(userObject);
      setUser(user);
      console.log(`${user} has been registered`);
      setNewUsername('');
      setNewName('');
      setNewPassword('');
    } catch (exception) {
      setMessage('Username taken');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Notification message={message} />
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} action="/login" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full name"
                name="name"
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
Signup.propTypes = propTypes;
export default Signup;
