const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

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
        name: "Amazon",
        location: "New York",
        url: "http://www.amazon.com",
        date: "12/28/2019",
        period: "Summer 2020",
        status: "In Review",
        id: 3
    },
]

app.get('/', (request, response) => {
    response.send('<h1>This is the home page. Nodemon is working</h1>');
})

app.get('/companies', (request, response) => {
    response.json(companies);
})

app.get('/companies/:id', (request, response) => {
    const id = Number(request.params.id);
    const company = companies.find(company => company.id === id);
    
    if (company) {
        response.json(company);
    }
    else {
        response.status(404).end();
    }
})

app.delete('/companies/:id', (request, response) => {
    const id = Number(request.params.id);
    companies = companies.filter(company => company.id !== id);

    response.status(404).end();
})

const generateId = () => {
    const maxId = companies.length > 0
      ? Math.max(...companies.map(n => n.id))
      : 0
    return maxId + 1
}

app.post('/companies', (request, response) => {
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

const port = 3001;
app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
})