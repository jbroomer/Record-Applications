import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
// Redux
import { useDispatch } from 'react-redux';
import actions from './redux/actions';

import Notification from './notification';

const useStyles = makeStyles({
  closeButton: {
    padding: 0,
    float: 'right',
  },
});

const createApplicationDataObject = (data) => {
  const { newTitle, newName, newLocation, newURL, currentDate, startPeriod, user } = data;
  const newApplication = {
    title: newTitle.trim(),
    name: newName.trim(),
    location: newLocation.trim(),
    url: newURL.trim(),
    date: new Date(currentDate).getTime(),
    period: startPeriod.trim(),
    status: '0',
    note: '',
    user: user.username,
  };
  if (newApplication.period === '') {
    newApplication.period = 'Summer 2021';
  }
  if (newApplication.title === '') {
    newApplication.title = 'Software Engineer';
  }
  // Input URL is a http/https URL
  if (newURL.toLowerCase().substring(0, 4) === 'http') {
    newApplication.url = newURL;
  } else if (newURL !== '') {
    newApplication.url = '';
  }
  return newApplication;
};

const propTypes = {
  addingApplication: PropTypes.bool.isRequired,
  setAddingApplication: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const AddAppPage = ({ addingApplication, setAddingApplication, user }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [newName, setNewName] = useState('');
  const [newURL, setNewURL] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [startPeriod, setStartPeriod] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const jobTitleRef = useRef(null);

  const resetForm = () => {
    setNewTitle('');
    setNewName('');
    setNewURL('');
    setStartPeriod('');
    setNewLocation('');
    if (jobTitleRef.current) {
      jobTitleRef.current.focus();
    }
  };

  const addApp = (event) => {
    event.preventDefault();
    if (newName === '') {
      return;
    }
    const applicationData = createApplicationDataObject({
      newTitle,
      newName,
      newLocation,
      newURL,
      currentDate: new Date(),
      startPeriod,
      user,
    });

    dispatch(actions.requestAddApplication(applicationData))
      .then(() => {
        setMessage(`Added ${newName}`);
        resetForm();
        setAddingApplication(false);
      })
      .catch(() => {
        setMessage(`Could not add ${newName}`);
      });
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleURLChange = (event) => {
    setNewURL(event.target.value);
  };

  const handleLocationChange = (event) => {
    setNewLocation(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setStartPeriod(event.target.value);
  };

  const handleCloseDialog = () => {
    setAddingApplication(false);
  };

  return (
    <Dialog fullWidth open={addingApplication} onClose={handleCloseDialog}>
      <DialogTitle>
        Add Applications
        <IconButton onClick={handleCloseDialog} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Notification message={message} />
        <Form.Group>
          <Form.Label>
            <strong>Job Title</strong>
          </Form.Label>
          <Form.Control
            autoFocus
            ref={jobTitleRef}
            value={newTitle}
            onChange={handleTitleChange}
            placeholder="Software Engineer"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>Company Name</strong>
          </Form.Label>
          <Form.Control value={newName} onChange={handleNameChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>Location</strong>
          </Form.Label>
          <Form.Control value={newLocation} onChange={handleLocationChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>Application URL</strong>
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <strong>Https://</strong>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={newURL}
              onChange={handleURLChange}
              aria-describedby="basic-addon3"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>Start Period</strong>
          </Form.Label>
          <Form.Control
            value={startPeriod}
            onChange={handlePeriodChange}
            placeholder="Summer 2020"
          />
        </Form.Group>
      </DialogContent>
      <DialogActions>
        <Button onClick={resetForm} variant="outlined" color="secondary">
          Reset
        </Button>
        <Button onClick={addApp} variant="outlined" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
AddAppPage.propTypes = propTypes;
export default AddAppPage;
