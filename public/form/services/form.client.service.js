// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' service
angular.module('form').factory('formMessages', ['$resource', function($resource) {
	// Use the '$resource' service to return an article '$resource' object
    return $resource('api/messages/:messageId', {
        messageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    })
}]);