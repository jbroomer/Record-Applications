import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Notification = ({ message }) => {
    if (message === '') {
        return null;
    }
    return (
        <div>
            <Alert variant="success">
                <Alert.Heading>{message}</Alert.Heading>
            </Alert>
        </div>
    )
}

export default Notification;