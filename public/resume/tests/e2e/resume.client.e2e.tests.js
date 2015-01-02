// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'resumes' module E2E test suite
describe('Resumes E2E Tests:', function() {
	// Test the new resume page
	describe('New Resume Page', function() {
		it('Should not be able to create a new resume', function() {
			// Load the new resume page
			browser.get('http://localhost:3000/#!/resumes/create');

			// Get the submit button
			element(by.css('input[type=submit]')).click();

			// Get the error message element
			element(by.binding('error')).getText().then(function(errorText) {
				// Check the error message text
				expect(errorText).toBe('User is not logged in');
			});
		});
	});
});