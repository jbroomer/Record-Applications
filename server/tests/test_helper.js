const Company = require('../models/companies')
const User = require('../models/users')

const initialCompanies = [
  {
    name: "Google",
    location: "New York",
    url: "http://www.google.com",
    date: "08/05/2020",
    period: "Summer 2020",
    status: "In Review",
    note: ""
  },
  {
    name: "Amazon",
    location: "New York",
    url: "http://www.google.com",
    date: "08/05/2020",
    period: "Summer 2020",
    status: "In Review",
    note: ""
  }
]

const nonExistingId = async () => {
  const company = new Company({ name: 'willremovethissoon' })
  await company.save()
  await company.remove()

  return company._id.toString()
}

const companiesInDb = async () => {
  const companies = await Company.find({})
  return companies.map(company => company.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialCompanies, nonExistingId, companiesInDb, usersInDb
}