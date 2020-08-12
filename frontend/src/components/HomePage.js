import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

  const useStyles = makeStyles(theme => ({
    jumbo: {
        minHeight: 848,
    },
  }));

const HomePage = () => {
    const classes = useStyles();
    
    const loggedIn = () => {
        if (window.localStorage.getItem('loggedCompanyappUser') !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    // const username = () => {
    //     const username = window.localStorage.getItem('loggedCompanyappUser');
        
    //     alert(username);
    // }

    const loggedInHomePage = () => (
        <div>
            <h4>Welcome back User</h4>
        </div>
    )

    const loggedOutHomePage = () => (
        <div>
            <h4>Welcome back guest</h4>
            <p>Please <Link to="/login">sign in</Link> to continue.</p>
            <p>Please <Link to="/signup">sign up</Link> if you do not have an account yet.</p>
        </div>
    )

    return (
        <Jumbotron className={classes.jumbo}>
            <h1>Home Page</h1>
            
            {loggedIn() === true ?
                loggedInHomePage() :
                loggedOutHomePage()}
            
            <div>
                <h2>What is App-Tracker?</h2>
                <p>App-Tracker is a web app developed to help organize, update, and keep track of job applications all on the same site.</p>

                <h2>What are the current features?</h2>
                <ul>
                    <l1>Add Applications</l1>
                    <br></br>
                    <l1>View Applications</l1>
                    <br></br>
                    <l1>Edit Applications (Status, side-notes)</l1>
                </ul>

                <h2>What are some upcoming features?</h2>
                <ul>
                    <l1>Sync with google calendars (e.g Interview dates)</l1>
                    <br></br>
                    <l1>Statistics of Applications Page</l1>
                </ul>
            </div>
            

        </Jumbotron>
    )
}

export default HomePage;