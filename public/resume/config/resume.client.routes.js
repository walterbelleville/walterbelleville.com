// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('resume').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/resumes', {
			templateUrl: 'resume/views/list-resume.client.view.html'
		}).
		when('/resumes/create', {
			templateUrl: 'resume/views/create-resume.client.view.html'
		}).
		when('/resumes/:resumeId', {
			templateUrl: 'resume/views/view-resume.client.view.html'
		}).
		when('/resumes/:resumeId/edit', {
			templateUrl: 'resume/views/edit-resume.client.view.html'
		});
	}
]); 