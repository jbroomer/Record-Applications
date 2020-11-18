import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import actions from './redux/actions';

import AppService from '../services/apps';
import MyNavbar from './navbar';
import HomePage from './homepage';
import Account from './account';
import Login from './login';
import Signup from './signup';
import Calendar from './calendar';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = window.localStorage.getItem('loggedCompanyappUser');
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      dispatch(actions.addUserData(parsedUserInfo));
      setUser(parsedUserInfo);
      AppService.setToken(parsedUserInfo.token);
    }
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(actions.loadAllApplications());
    }
  }, [user]);

  return (
    <Router>
      <div>
        <MyNavbar />
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              companies={companies}
              setCompanies={setCompanies}
              user={user}
              setUser={setUser}
            />
          )}
        />
        <Route exact path="/calendar" render={() => <Calendar />} />
        <Route
          exact
          path="/login"
          render={() => <Login user={user} setUser={setUser} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <Signup user={user} setUser={setUser} />}
        />
        <Route exact path="/account" render={() => <Account />} />
      </div>
    </Router>
  );
};

export default App;
