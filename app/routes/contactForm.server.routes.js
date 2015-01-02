// Invoke 'strict' JavaScript mode
'use strict';

//Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
    nodemailer = require('nodemailer'),
    contactForm = require('../../app/controllers/contactForm.server.controller');

// Define the routes module method
module.exports = function(app) {

    // Set up contact routes
    app.route('/api/messages')
        .post(contactForm.create)
        .get(users.requiresLogin, contactForm.list);



    // Set up the messages parameterized routes
    app.route('/api/messages/:messageId')
        //.get(users.requiresLogin, contactForm.hasAuthorization, contactForm.read)
        .delete(users.requiresLogin, contactForm.hasAuthorization, contactForm.delete);

    // Set up the contactId parameter middleware
    //app.param('messageId', contactForm.messageById);
};