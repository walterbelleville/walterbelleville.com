// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    nodemailer = require('nodemailer'),
    expressValidator = require('express-validator'),
    formMessage = mongoose.model('formMessage');


// Create a new error handling controller method
var getErrorMessage = function(err) {
    if(err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};


// Create a new controller method that creates new contact message
exports.create = function(req, res) {

    // Create a new contact object
    var aMessage = new formMessage(req.body);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var subject = req.body.subject;
    var emailMessage = req.body.emailMessage;

    // Check form validation
    req.assert('firstName', 'Enter your First Name').notEmpty();
    req.assert('lastName', 'Enter your Last Name').notEmpty();
    req.assert('email', 'Enter a valid email').isEmail();
    req.assert('subject', 'Enter a subject for your message').notEmpty();
    req.assert('emailMessage', 'Enter a message').notEmpty();

    var errors = req.validationErrors();
    var mapped = req.validationErrors(true);
    if (mapped) {console.log("MAPPED");}
        console.log(mapped);

    // Check for validation errors
    if (!errors) {
        // create transporter object using SMTP transport
        //Create the reusable transport
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'walterbell2331',
                pass: 'corkdog69'
            }
        });

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'Walter Belleville <walterbell2331@gmail.com>', // sender address
            to: 'walterbell2331@gmail.com', // list of receivers. This is whoever you want to get the email when someone hits submit
            subject: 'New email from your website contact form:' + req.body.subject, // Subject line
            text: 'Message: ' + req.body.emailMessage + ' You may contact this sender at: ' + req.body.email // plaintext body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Message sent: ' + info.response);
                // Try Saving the contact
                aMessage.save(function(err) {
                    if(err) {
                        // If an error occurs send the error message
                        return res.status(400).send({
                            message: getErrorMessage(err)
                        });
                    } else {
                        // Send a JSON representation of the contact message
                        //Success
                        res.json(aMessage);
                    }
                });
            }
            transporter.close();
        });
    } else {
        res.status(500).json(errors);
        return;
    }
};

// Create a new controller method that retrieves a list of articles
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of articles
    formMessage.find().sort('-created').populate('firstName lastName subject email emailMessage').exec(function(err, aMessage) {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(aMessage);
        }
    });
};

// Create a new controller method that returns an existing message
exports.read = function(req, res) {
	res.json(req.aMessage);
};

// Create a new controller method that delete an existing message
exports.delete = function(req, res) {
	// Get the article from the 'request' object
	var aMessage = req.aMessage;

	// Use the model 'remove' method to delete the aMessage
	aMessage.remove(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article
			res.json(aMessage);
		}
	});
};

// Create a new controller middleware that retrieves a single existing article
exports.messageByID = function(req, res, next, id) {
	// Use the model 'findById' method to find a single article
	formMessage.findById(id).populate('-created', 'firstName lastName subject email emailMessage').exec(function(err, aMessage) {
		if (err) return next(err);
		if (!aMessage) return next(new Error('Failed to load article ' + id));

		// If an message is found use the 'request' object to pass it to the next middleware
		req.aMessage = aMessage;

		// Call the next middleware
		next();
	});
};

// Create a new controller middleware that is used to authorize an article operation
exports.hasAuthorization = function(req, res, next) {
	// If the current user is not the creator of the article send the appropriate error message
	if (req.aMessage.creator.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}

	// Call the next middleware
	next();
};
