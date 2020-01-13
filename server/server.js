require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Company = require('./models/company')

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

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/signup', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/account', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/api/companies', (request, response) => {
    const body = request.body;
    let currentDate = new Date();

    const company = new Company({
        name: body.name.trim(),
        location: body.location.trim(),
        url: body.url,
        date: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(currentDate),
        period: body.period.trim(),
        status: "In Review",
        note: "",
    })

    company.save().then(savedCompanies => {
        response.json(savedCompanies.toJSON());
    })
})

app.get('/api/companies', (request, response) => {
    Company.find({}).then(companies => {
        response.json(companies.map(company => company.toJSON()));
    })
})

app.get('/api/companies/:id', (request, response, next) => {
    Company.findById(request.params.id)
        .then(company => {
            if (company) {
                response.json(company.toJSON());
            }
            else {
                response.status(404).end();
            }
        })
        .catch(error => next(error))
})

app.delete('/api/companies/:id', (request, response, next) => {
    Company.findByIdAndRemove(request.params.id).then(result => {
        response.status(204).end();
    })
    .catch(error => next(error))
})

app.put('/api/companies/:id', (request, response, next) => {
    const body = request.body
  
    const company = {
        name: body.name,
        location: body.location,
        url: body.url,
        date: body.date,
        period: body.period,
        status: body.status,
        note: body.note,
    }
  
    Company.findByIdAndUpdate(request.params.id, company, { new: true })
      .then(updatedCompany => {
        response.json(updatedCompany.toJSON())
      })
      .catch(error => next(error))
})

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

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
})