import React, { useState, useEffect } from 'react'
import AppService from '../services/apps'
import Notification from './Notification'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const AddAppPage = ({ companies, setCompanies, user, setUser }) => {
    const [message, setMessage] = useState('');
    const [newName, setNewName] = useState('');
    const [newURL, setNewURL] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [startPeriod, setStartPeriod] = useState('');
    const [newTitle, setNewTitle] = useState('');
    
    useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedCompanyappUser')
    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        AppService.setToken(user.token)
    }
    }, [])

    const addApp = (event) => {
        if (newName === ('')) {
            return null;
        }

        let currentDate = new Date();
        event.preventDefault();

        const AppObject = {
            title: newTitle.trim(),
            name: newName.trim(),
            location: newLocation.trim(),
            url: newURL.trim(),
            date: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(currentDate),
            period: startPeriod.trim(),
            status: "In Review",
            note: "",
            user: user.username
        }
        if (AppObject.period === '') {
            AppObject.period = 'Summer 2021';
        }

        if (AppObject.title === '') {
            AppObject.title = 'Software Engineer';
        }

        // Input URL is a http/https URL
        if (newURL.toLowerCase().substring(0, 4) == 'http') {
            AppObject.url = newURL;
        }
        // Input URL starts with www.
        else if (newURL !== '') {
            AppObject.url = 'http://' + newURL;
        }

        AppService
          .createApp(AppObject)
          .then(data => { 
            setCompanies(companies.concat(data));
            setNewTitle('');
            setNewName('');
            setNewURL('');
            setStartPeriod('');
            setNewLocation('');
        })
        setMessage(`Added ${newName}`)
        setTimeout(() => {
        setMessage('')
        }, 5000)
        
    }

    const resetForm = () => {
        setNewTitle('');
        setNewName('')
        setNewURL('');
        setStartPeriod('');
        setNewLocation('');
    }

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
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
        setStartPeriod(event.target.value);
    }

    return (
        <Jumbotron>
            <div>
                <h2>Add Applications</h2>
                <br></br>
                <Notification message={message} />
                <Form.Group>
                    <Form.Label><strong>Job Title</strong></Form.Label>
                    <Form.Control value={newTitle} onChange={handleTitleChange} placeholder="Software Engineer">
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label><strong>Company Name</strong></Form.Label>
                    <Form.Control value={newName} onChange={handleNameChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label><strong>Location</strong></Form.Label>
                    <Form.Control value={newLocation} onChange={handleLocationChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label><strong>Application URL</strong></Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>
                        <strong>Https://</strong>
                    </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={newURL} onChange={handleURLChange} aria-describedby="basic-addon3"/>
                </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label><strong>Start Period</strong></Form.Label>
                    <Form.Control value={startPeriod} onChange={handlePeriodChange} placeholder="Summer 2020">
                    </Form.Control>
                </Form.Group>
                <br></br>
            </div>
            <div>
                <Button onClick={resetForm} variant="outline-danger" size="lg" block>Reset</Button>
            </div>
            <br></br>
            <div>
                <Button onClick={addApp} variant="outline-success" size="lg" block>Submit</Button>
            </div>
        </Jumbotron>
        
    )
}

export default AddAppPage;