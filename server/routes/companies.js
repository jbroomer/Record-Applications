
const companiesRouter = require('express').Router()
const Company = require('../models/company')
const User = require('../models/users')
const jwt = require('jsonwebtoken')

const getUserFromToken = async (request) => {
  const authorization = request.get('authorization')
  if (!authorization || !authorization.toLowerCase().startsWith('bearer ')) {
    return null;
  }
  const token = authorization.substring(7);
  const decodedToken = jwt.verify(token, process.env.JWT_KEY)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  return user;
}

companiesRouter.post('/createApp', async (request, response) => {
  const body = request.body;
  let currentDate = new Date();

  const user = await getUserFromToken(request);

  const company = new Company({
    title: body.title.trim(),
    name: body.name.trim(),
    location: body.location.trim(),
    url: body.url,
    date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentDate),
    period: body.period.trim(),
    status: "0",
    note: "",
    user: user._id
  })

  const savedCompanies = await company.save()
  console.log(user);
  user.companies = user.companies.concat(savedCompanies._id)
  await user.save()

  response.status(200).send()
})

/**
 * Retrieve all applications from logged in user
 */
companiesRouter.get('/applications', async (request, response) => {
  const user = await getUserFromToken(request);
  if (!user) {
    return
  }
  const companies = await Company.find({ user: { _id: user.id }});
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

/**
 * Removes one or more applications from the database
 */
companiesRouter.post('/delete', async(request, response, next) => {
  const { ids } = request.body;
  await Company.deleteMany({'_id':{'$in': ids }});
  response.status(200).send();
});

/**
 * Update the status of an application
 */
companiesRouter.post('/updateStatus', async (request, response, next) => {
  const { id, status } = request.body;
  const res = await Company.findByIdAndUpdate(id, {
    status: status,
  });
  response.status(200).send();
})

module.exports = companiesRouter;