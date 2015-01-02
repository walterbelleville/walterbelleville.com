// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new ContactSchema
var MessageSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        default: '',
        trim: true,
        required: 'First Name cannot be blank'
    },
    lastName: {
        type: String,
        default: '',
        trim: true,
        required: 'Last Name cannot be blank'
    },
    email: {
        type: String,
        default: '',
        // Validate the email format
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        required: 'Email cannot be blank'
    },
    subject: {
        type: String,
        default: '',
        required: 'Subject cannot be blank'
    },
    emailMessage: {
        type: String,
        default: '',
        trim: true,
        required: 'Message cannot be blank'
    }
});

// Create the 'Messages' model out of the 'ContactSchema'
mongoose.model('formMessage', MessageSchema);