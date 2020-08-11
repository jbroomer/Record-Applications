const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    passwordHash: String,
    companies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company'
        }
    ],
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        // Hide password
        delete returnedObject.passwordHash;
    }
})
  
userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema)

module.exports = User