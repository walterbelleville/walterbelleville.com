// use strict mode
'use strict';

// Create the contact controller
angular.module('form').controller('FormController', ['$scope', '$routeParams', '$location', 'Authentication', 'formMessages', '$http',
    function($scope, $routeParams, $location, Authentication, formMessages, $http) {

        // Ecpose the Authentication service
        $scope.authentication = Authentication;

        $scope.send = function() {
            // Use the form fields to create a new article $resource object
            var aMessage = new formMessages({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                subject: this.subject,
                emailMessage: this.emailMessage
            });

            $http.post('/api/messages', {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                subject: $scope.subject,
                emailMessage: $scope.emailMessage})
            .success(function(data, status, headers, config) {
                    $location.path('contact/success');
            })
            .error(function(data, status, headers, config) {
                // Convert server side errors to AngularJS errors.
                var errors = {};
                for(var i = 0; i < data.length; i++) {
                    var err = data[i];

                    var param, msg;
                    for(var key in err) {
                        if(key == 'param') param = err[key];
                        if(key == 'msg') msg = err[key];
                    }
                    errors[param] = msg;
                }
                $scope.errors = errors;
            })
            /*aMessage.$save(function(response) {
                $location.path('contact/success');
                //$scope.success = data.message;
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
                    // Convert server side errors to AngularJS errors.
                    var errors = {};
                    for(var i = 0; i < data.length; i++) {
                        var err = data[i];

                        var param, msg;
                        for(var key in err) {
                            if(key == 'param') param = err[key];
                            if(key == 'msg') msg = err[key];
                        }
                        errors[param] = msg;
                    }

                    $scope.firstName = errors.firstName.msg;
            });*/
        };

        // create a new controller method for retrieving a list of messages
        $scope.find = function() {
            // Use the messages query method to send an appropriate GET request
            $scope.aMessages = formMessages.query();
        };

        // Create a new controller method for retrieving a single message
        $scope.findOne = function() {
            // Use the formmessages 'get' method to send an appropriate GET request
            $scope.aMessage = formMessages.get({
                messageId: $routeParams.messageId
            });
        };

        // Create a new controller method for deleting a single message
        $scope.delete = function(formMessage) {
            // If a message was sent to the method, delete it
            if(formMessage) {
                // Use the message '$remove' method to delete the message
                formMessage.$remove(function() {
                    // Remove the message from the message list
                    for (var i in $scope.formMessages) {
                        if ($scope.formMessages[i] === formMessage) {
                            $scope.formMessages.slice(i, 1);
                        }
                    }
                });
            } else {
                // Otherwise, use the message $remove method to delete the message
                $scope.aMessage.$remove(function() {
                    $location.path('contact');
                });
            }
        };
    }
]);