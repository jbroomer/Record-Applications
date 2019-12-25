const express = require('express');
const app = express();

let database = [
    {
        name: "Jack",
        age: "20",
        id: 1
    },
    {
        name: "Robert",
        age: "25",
        id: 2
    },
]

app.get('/', (request, response) => {
    response.send('<h1>This is the home page. Nodemon is working</h1>');
})

app.get('/database', (request, response) => {
    response.json(database);
})

port = 3001;
app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
})