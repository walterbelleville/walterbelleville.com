// Invoke 'strict' JavaScript mode
'use strict';

// Create the contact module unit test suite
/*describe('Testing Contact Form Controller', function() {
    // Define global variables
    var _scope, FormController;

    // Define a pre-tests function
    beforeEach(function() {
        // Load the 'mean' module
        module('mean');

        // Add a new Jasmine matcher
        jasmine.addMatchers({
            toEqualData: function(util, customEqualityTesters) {
                return {
                    compare: function(actual, expected) {
                        return {
                            pass: angular.equals(actual, expected)
                        };
                    }
                };
            }
        });

        // Use the 'inject' method to inject services
        inject(function($rootScope, $controller) {
            // Create a mock scope object
            _scope = $rootScope.new();

            // Create a new mock controller
            FormController = $controller('FormController', {
                $scope: _scope
            });
        });
    });

    // Test the 'find' method
    	it('Should have a find method that uses $resource to retrieve a list of messages', inject(function(Messages) {
    		// Use the 'inject' method to inject services
    		inject(function($httpBackend) {
    			// Create a sample article
    			var sampleMessage = new Messages({
    				firstName: 'First',
    				lastName: 'Last',
                    email: 'example@gmail.com',
                    subject: 'Sweet',
                    message: 'This site is great!'
    			});

    			// Create a sample articles list
    			var sampleMessages = [sampleMessage];

    			// Define a request assertion
    			$httpBackend.expectGET('api/contact').respond(sampleMessages);

    			// Call the controller's 'find' method
    			_scope.find();

    			// Flush the mock HTTP results
    			$httpBackend.flush();

    			// Test the results
    			expect(_scope.articles).toEqualData(sampleMessages);
    		});
    	}));

    	// Test the 'findOne' method
    	it('Should have a findOne method that uses $resource to retreive a single of message', inject(function(Messages) {
    		// Use the 'inject' method to inject services
    		inject(function($httpBackend, $routeParams) {
    			// Create a sample article
                var sampleMessage = new Messages({
                    firstName: 'First',
                    lastName: 'Last',
                    email: 'example@gmail.com',
                    subject: 'Sweet',
                    message: 'This site is great!'
                });
    			// Set the 'articleId' route parameter
    			$routeParams.messageId = 'abcdef123456789012345678';

    			// Define a request assertion
    			$httpBackend.expectGET(/api\/contact\/messages\/([0-9a-fA-F]{24})$/).respond(sampleMessage);

    			// Call the controller's 'findOne' method
    			_scope.findOne();

    			// Flush the mock HTTP results
    			$httpBackend.flush();

    			// Test the results
    			expect(_scope.message).toEqualData(sampleMessage);
    		});
    	}));


});*/