// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'resumes' service
angular.module('resume').factory('Resumes', ['$resource', function($resource) {
	// Use the '$resource' service to return an resume '$resource' object
    return $resource('api/resumes/:resumeId', {
        resumeId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);