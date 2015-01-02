// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'home' controller
angular.module('home').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Expose the authentication service
		$scope.authentication = Authentication;

		//$scope.working = 'This is working';
	}
]);
