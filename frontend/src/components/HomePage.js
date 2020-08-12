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
            <h1>This is the Home Page</h1>
            
            {loggedIn() === true ?
                loggedInHomePage() :
                loggedOutHomePage()}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna. Augue ut lectus arcu bibendum at varius vel pharetra vel. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Penatibus et magnis dis parturient montes nascetur. Mi proin sed libero enim sed faucibus. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Quisque non tellus orci ac auctor augue mauris augue. Amet tellus cras adipiscing enim eu turpis egestas. Sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Maecenas sed enim ut sem. Mi bibendum neque egestas congue.
                Faucibus a pellentesque sit amet porttitor eget dolor morbi. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Sit amet justo donec enim diam vulputate ut. Vestibulum morbi blandit cursus risus at. Vitae auctor eu augue ut lectus. Praesent tristique magna sit amet. Sodales ut eu sem integer vitae justo eget. Elementum curabitur vitae nunc sed. Nam at lectus urna duis convallis. Nulla posuere sollicitudin aliquam ultrices sagittis. Gravida neque convallis a cras semper auctor neque. Malesuada nunc vel risus commodo viverra. Enim praesent elementum facilisis leo vel fringilla. Nisi porta lorem mollis aliquam ut. Orci nulla pellentesque dignissim enim sit amet.
                Quis ipsum suspendisse ultrices gravida dictum fusce. Mi sit amet mauris commodo quis imperdiet massa. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Odio euismod lacinia at quis. Consequat semper viverra nam libero justo laoreet. Sed viverra tellus in hac. Nunc congue nisi vitae suscipit tellus mauris a diam. Sit amet purus gravida quis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Praesent semper feugiat nibh sed. Quam vulputate dignissim suspendisse in. Ridiculus mus mauris vitae ultricies leo integer malesuada. Facilisis volutpat est velit egestas dui id ornare. Sit amet tellus cras adipiscing enim eu turpis egestas.
                Massa ultricies mi quis hendrerit. Duis at tellus at urna condimentum mattis. Arcu non sodales neque sodales. Integer vitae justo eget magna. Sagittis id consectetur purus ut faucibus. Egestas congue quisque egestas diam. Vulputate eu scelerisque felis imperdiet proin. Eu facilisis sed odio morbi quis commodo odio. Ut etiam sit amet nisl purus in mollis nunc sed. Justo nec ultrices dui sapien. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Neque convallis a cras semper auctor. Commodo ullamcorper a lacus vestibulum sed arcu.
            </p>
        </Jumbotron>
    )
}

export default HomePage;