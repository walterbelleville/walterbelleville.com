// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('form').config(['$routeProvider',
	function($routeProvider) {
        $routeProvider.
		when('/contact', {
			templateUrl: 'form/views/contact-form.client.view.html'
		}).
		when('/contact/success' , {
			templateUrl: 'form/views/contact-success.client.view.html'
		}).
		when('/contact/list', {
			templateUrl: 'form/views/list-form-messages.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);
