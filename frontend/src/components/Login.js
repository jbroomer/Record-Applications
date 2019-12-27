import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Login = () => {
    return (
        <Jumbotron>
            <h2>Login Page</h2>
            <div>
                Username: <input></input>
                <br></br>
                Password: <input></input>
            </div>
            
            <div>
                <button>Submit</button>
            </div>
        </Jumbotron>
        
    )
}

export default Login;