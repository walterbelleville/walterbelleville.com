// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' service
angular.module('articles').factory('Articles', ['$resource', function($resource) {
	// Use the '$resource' service to return an article '$resource' object
    return $resource('api/articles/:articleId/:controller', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        } ,
        getBySlug: {
            method: 'GET',
            params: {
              controller: 'read-slug'
            }
      }
    });
}]);