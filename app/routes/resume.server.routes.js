// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	resumes = require('../../app/controllers/resume.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'resumes' base routes
	app.route('/api/resumes')
	   .get(resumes.list)
	   .post(users.requiresLogin, resumes.create);
	
	// Set up the 'resumes' parameterized routes
	app.route('/api/resumes/:resumeId')
	   .get(resumes.read)
	   .put(users.requiresLogin, resumes.hasAuthorization, resumes.update)
	   .delete(users.requiresLogin, resumes.hasAuthorization, resumes.delete);

	// Set up the 'articleId' parameter middleware   
	app.param('resumeId', resumes.resumeByID);
};