import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LoginService from '../services/login'
import Notification from './Notification'
import AppService from '../services/apps'

const useStyles = makeStyles(theme => ({
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = ({ user, setUser }) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const user = await LoginService.login({ username, password });
            
            window.localStorage.setItem(
                'loggedCompanyappUser', JSON.stringify(user)
              ) 
            AppService.setToken(user.token);
            setUser(user);
            console.log("username: " + user.username);
            console.log("user name: " + user.name);
            console.log("user password: " + user.password);
            console.log("user id: " + user.id);
            setUsername('');
            setPassword('');
            window.location.href="/"; 
        } catch (exception) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage('')
            }, 3000)
        }
    }

    const loginForm = () => (
        <div className={classes.paper}>
                <Notification message={errorMessage}/>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} action="/" noValidate onSubmit={handleLogin}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    onChange = {({ target }) => setUsername(target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange = {({ target }) => setPassword(target.value)}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
    )

    const loggedInForm = () => (
        <div>
            Go add/view your applications
        </div>
    )

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {loginForm()}
        </Container>
    )
}

export default Login;