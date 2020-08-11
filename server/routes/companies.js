
const companiesRouter = require('express').Router()
const Company = require('../models/company')
const User = require('../models/users')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

companiesRouter.post('/', async (request, response) => {
    const body = request.body;
    let currentDate = new Date();

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.JWT_KEY)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const company = new Company({
        name: body.name.trim(),
        location: body.location.trim(),
        url: body.url,
        date: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(currentDate),
        period: body.period.trim(),
        status: "In Review",
        note: "",
        user: user._id
    })

    const savedCompanies = await company.save()
    user.companies = user.companies.concat(savedCompanies._id)
    await user.save()
    
    response.json(savedCompanies)
})

companiesRouter.get('/', async (request, response) => {
    const companies = await Company.find({}).populate('user', { username: 1, name: 1 })

    response.json(companies)
})

companiesRouter.get('/:id', (request, response, next) => {
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

companiesRouter.delete('/:id', (request, response, next) => {
    Company.findByIdAndRemove(request.params.id).then(result => {
        response.status(204).end();
    })
    .catch(error => next(error))
})

companiesRouter.put('/:id', (request, response, next) => {
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

module.exports = companiesRouter;