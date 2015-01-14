// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' controller
angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Articles',
    function($scope, $routeParams, $location, Authentication, Articles) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        // Create a new controller method for creating new articles
        $scope.create = function() {
            var article = new Articles({
                slug: this.title.toLowerCase().replace(/ /g, '-'),
                title: this.title,
                content: this.content
            });
            article.$save(function(response) {
                $location.path('articles/' + response.slug);

                $scope.title = '';
                $scope.content = '';
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a list of articles
        $scope.find = function() {
        	// Use the article 'query' method to send an appropriate GET request
            $scope.articles = Articles.query();
        };

        // Create a new controller method for retrieving a single article
        $scope.findOne = function() {
            $scope.article = Articles.getBySlug({
                slug: $routeParams.articleSlug
            });
        }

        // Create a new controller method for updating a single article
        $scope.update = function() {
            var article = $scope.article;
            article.slug = article.title.toLowerCase().replace(/ /g, '-');
          //console.log(article);
            article.$update(function() {
                $location.path('articles/' + article.slug);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for deleting a single article
        $scope.delete = function(article) {
        	// If an article was sent to the method, delete it
            if (article) {
            	// Use the article '$remove' method to delete the article
                article.$remove(function() {
                	// Remove the article from the articles list
                    for (var i in $scope.articles) {
                        if ($scope.articles[i] === article) {
                            $scope.articles.splice(i, 1);
                        }
                    }
                });
            } else {
            	// Otherwise, use the article '$remove' method to delete the article
                $scope.article.$remove(function() {
                    $location.path('articles');
                });
            }
        };
    }
]);
