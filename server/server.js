const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

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

let companies = [
    {
        name: "Google",
        location: "New York",
        url: "http://www.google.com",
        date: "12/26/2019",
        period: "Summer 2020",
        status: "In Review",
        id: 1
    },
    {
        name: "Facebook",
        location: "New York",
        url: "http://www.facebook.com",
        date: "12/27/2019",
        period: "Summer 2020",
        status: "In Review",
        id: 2
    },
    {
        name: "Amazon!",
        location: "New York",
        url: "http://www.amazon.com",
        date: "12/28/2019",
        period: "Summer 2020",
        status: "In Review",
        id: 3
    },
]

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

const generateId = () => {
    const maxId = companies.length > 0
      ? Math.max(...companies.map(n => n.id))
      : 0
    return maxId + 1
}

app.post('/api/companies', (request, response) => {
    const body = request.body;
    let currentDate = new Date();

    const company = {
        name: body.name.trim(),
        location: body.location.trim(),
        url: body.url,
        date: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(currentDate),
        period: body.period.trim(),
        status: "In Review",
        id: generateId(),
    }

    companies = companies.concat(company);

    response.json(company);
})

app.get('/api/companies', (request, response) => {
    response.json(companies);
})

app.get('/api/companies/:id', (request, response) => {
    const id = Number(request.params.id);
    const company = companies.find(company => company.id === id);
    
    if (company) {
        response.json(company);
    }
    else {
        response.status(404).end();
    }
})

app.delete('/api/companies/:id', (request, response) => {
    const id = Number(request.params.id);
    companies = companies.filter(company => company.id !== id);

    response.status(404).end();
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
})