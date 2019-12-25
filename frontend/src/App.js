import React, { useState, useEffect } from 'react'
import AppService from './services/apps'
import AddApp from './components/AddApp'
import MyApps from './components/MyApps'

const App = () => {
  const [databases, setDatabases] = useState([]);
  const [newApp, setNewApp] = useState('');
  const [newAge, setNewAge] = useState('');

  const hook = () => {
    AppService
      .getApp()
      .then(initApp => {
        setDatabases(initApp);
      })
  }
  useEffect(hook, []);

  const addApp = (event) => {
    event.preventDefault();
    
    const AppObject = {
      name: newApp.trim(),
      age: newAge,
    }

    AppService
      .createApp(AppObject)
      .then(data => {
        console.log(data);
        setDatabases(databases.concat(data));
        setNewApp('');
        setNewAge('');
      })
  }

  const handleAppChange = (event) => {
    setNewApp(event.target.value);
  }

  const handleAgeChange = (event) => {
    setNewAge(event.target.value);
  }

  return (
    <div>
      <h2>Apps</h2>
      <AddApp newApp={newApp} handleAppChange={handleAppChange} newAge={newAge} handleAgeChange={handleAgeChange} addApp={addApp} />
      <MyApps databases={databases} />
    </div>
  )
}
  

export default App;
