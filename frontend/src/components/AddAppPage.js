import React, { useState } from 'react'
import AppService from '../services/apps'

const AddAppPage = ({ newName, newURL, newLocation, startPeriod, setNewName, setNewURL, setNewLocation, newStartPeriod, companies, setCompanies }) => {
    const addApp = (event) => {
        let currentDate = new Date();
        event.preventDefault();
        
        const AppObject = {
          name: newName.trim(),
          location: newLocation.trim(),
          url: 'http://' + newURL,
          date: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(currentDate),
          period: startPeriod.trim(),
          status: "In Review",
        }
    
        AppService
          .createApp(AppObject)
          .then(data => {
            setCompanies(companies.concat(data));
            setNewName('');
            setNewURL('');
            newStartPeriod('');
            setNewLocation('');
        })
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleURLChange = (event) => {
        setNewURL(event.target.value);
    }

    const handleLocationChange = (event) => {
        setNewLocation(event.target.value);
    }

    const handlePeriodChange = (event) => {
        newStartPeriod(event.target.value);
    }

    return (
        <form onSubmit={addApp}>
            <div>
                <h2>Add Applications Page</h2>
                Company name: <input value={newName} onChange={handleNameChange} />
                <br></br>
                Location: <input value={newLocation} onChange={handleLocationChange} />
                <br></br>
                Start Period: <input value={startPeriod} onChange={handlePeriodChange} />
                <br></br>
                Application URL: <input value={newURL} onChange={handleURLChange} />
                <br></br>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddAppPage;