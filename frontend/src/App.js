import React, { useState, useEffect } from 'react'
import AddAppPage from './components/AddAppPage'
import ViewAppPage from './components/ViewAppPage'
import MyNavbar from './components/MyNavbar'
import HomePage from './components/HomePage'
import Account from './components/Account'
import Login from './components/Login'
import Signup from './components/Signup'
import Calendar from './components/Calendar'
import Statistics from './components/Statistics'

import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <div>
          <MyNavbar />
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/add" render={() => <AddAppPage companies={companies} setCompanies={setCompanies} user={user} setUser={setUser} />} />
          <Route exact path="/view" render={() => <ViewAppPage companies={companies} setCompanies={setCompanies} key={companies.id} user={user} setUser={setUser} />} />
          <Route exact path="/calendar" render={() => <Calendar />} />
          <Route exact path="/statistics" render={() => <Statistics companies={companies} setCompanies={setCompanies} user={user} setUser={setUser} />} />
          <Route exact path="/login" render={() => <Login user={user} setUser={setUser} />} />
          <Route exact path="/signup" render={() => <Signup user={user} setUser={setUser} />} />
          <Route exact path="/account" render={() => <Account />} />
        </div>
      </Router>
    </div>
  )
}
  

export default App;
