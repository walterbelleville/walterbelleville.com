// Invoke strict JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../server.js'),
    should = require('should'),
    mongoose = require('mongoose'),
    Message = mongoose.model('Message');

// Define golbal variables
var aMessage;

// Create an Message model test suite
describe('Contact Message Model Unit Tests:', function() {
    // Define a pre-tests function
    beforeEach(function(done) {
        aMessage = new Message({
            firstName: 'Full',
            lastName: 'Name',
            email: 'example@example.com',
            subject: 'subject of message',
            message: 'The message'
        });
        done();
    });

    // Test the Contact form model save method
    describe('Testing the save method', function() {
        it('Should be able to save without problems', function() {
            aMessage.save(function(err) {
                should.not.exist(err);
            });
        });

        it('Should not be able to save a message without a First Name', function() {
            aMessage.firstName = '';
            aMessage.save(function(err) {
                should.exist(err);
            });
        });

        it('Should not be able to save a message without a Last Name', function() {
            aMessage.lastName = '';
            aMessage.save(function(err) {
                should.exist(err);
            });
        });

        it('Should not be able to save a message without a email', function() {
            aMessage.email = '';
            aMessage.save(function(err) {
                should.exist(err);
            });
        });

        it('Should not be able to save a message without a subject', function() {
            aMessage.subject = '';
            aMessage.save(function(err) {
                should.exist(err);
            });
        });

        it('Should not be able to save a message without a message', function() {
            aMessage.message = '';
            aMessage.save(function(err) {
                should.exist(err);
            });
        });
    });

    // Define a post-tests function
    afterEach(function(done) {
        // Clean the database
        aMessage.remove(function() {
            done();
        });
    });
});