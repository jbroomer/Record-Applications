import React, { useState, useEffect } from 'react'
import AddAppPage from './components/AddAppPage'
import ViewAppPage from './components/ViewAppPage'
import MyNavbar from './components/MyNavbar'
import HomePage from './components/HomePage'
import Account from './components/Account'
import Login from './components/Login'
import Signup from './components/Signup'
import Calendar from './components/Calendar'

import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [newName, setNewName] = useState('');
  const [newURL, setNewURL] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [startPeriod, setStartPeriod] = useState('');

  const myDebugger = () => {
    console.log('this is my debugger');
  }

  return (
    <div>
      <Router>
        <div>
          <MyNavbar />
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/add" render={() => <AddAppPage newName={newName} newURL={newURL} newLocation={newLocation} startPeriod={startPeriod} setNewName={setNewName} setNewURL={setNewURL} setNewLocation={setNewLocation} setStartPeriod={setStartPeriod} companies={companies} setCompanies={setCompanies} />} />
          <Route exact path="/view" render={() => <ViewAppPage companies={companies} setCompanies={setCompanies}/>} />
          <Route exact path="/calendar" render={() => <Calendar />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/account" render={() => <Account />} />
        </div>
      </Router>
    </div>
  )
}
  

export default App;
