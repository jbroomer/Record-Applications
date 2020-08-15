const mongoose = require('mongoose');

if ( process.argv.length<3 ) {
    console.log('give password as argument')
    process.exit(1)
  }
  
const password = process.argv[2]
  
const url = `mongodb+srv://jackc099:${password}@record-apps-3jqzj.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true })

const companySchema = new mongoose.Schema({
    title: String,
    name: String,
    location: String,
    url: String,
    date: Date,
    period: String,
    status: String,
})

const Company = mongoose.model('Company', companySchema)

const company = new Company({
    title: "Software Engineer",
    name: "Google",
    location: "New York",
    url: "www.google.com",
    date: new Date(),
    period: "Summer 2020",
    status: "In Review",
})

company.save().then(response => {
  console.log('company saved!')
  mongoose.connection.close()
})