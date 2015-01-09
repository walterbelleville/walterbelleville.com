// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('articles').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/articles', {
			templateUrl: 'articles/views/list-articles.client.view.html'
		}).
		when('/articles/create', {
			templateUrl: 'articles/views/create-article.client.view.html'
		}).
		when('/articles/:articleSlug', {
			templateUrl: 'articles/views/view-article.client.view.html'
		}).
		when('/articles/:articleSlug/edit', {
			templateUrl: 'articles/views/edit-article.client.view.html'
		});
	}
]); 