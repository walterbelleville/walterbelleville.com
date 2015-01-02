'use strict';

angular.module('portfolio').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/portfolio', {
            templateUrl: 'portfolio/views/portfolio.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);