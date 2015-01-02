// use strict mode
'use strict';

// Configure the about module routes
angular.module('about').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/about', {
            templateUrl: 'about/views/about.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });

    }
]);