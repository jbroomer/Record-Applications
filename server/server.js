require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const companiesRouter = require('./routes/companies');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

mongoose.set('useFindAndModify', false)

app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }
  
app.use(requestLogger)

app.use(express.static(path.join(__dirname, 'build')));

// =================================================
// Heroku Routes
// =================================================

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/add', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/view', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/calendar', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/statistics', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/signup', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/account', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// =================================================
// Companies
// =================================================

app.use('/api/companies', companiesRouter);

// =================================================
// Users
// =================================================

app.use('/api/users', usersRouter);

// // =================================================
// // Login
// // =================================================

app.use('/api/login', loginRouter);

// =================================================
// Error Handling
// =================================================

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}
  
app.use(errorHandler)

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
})