const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    location: String,
    url: String,
    date: String,
    period: String,
    status: String,
    note: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
})

companySchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Company', companySchema)