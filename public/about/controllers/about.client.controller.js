// Use strict mode
'use strict';

// Create the about controller
angular.module('about').controller('AboutController', ['$scope',
    function($scope) {
        $scope.aboutMe = 'About Me';
    }
]);