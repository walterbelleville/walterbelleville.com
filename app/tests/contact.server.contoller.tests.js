// Invoke 'strict' JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../server'),
    request = require('supertest'),
    should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Message = mongoose.model('Message');

// Define global test variables
var aMessage;

// Create a 'Message' controller test suite
describe('Contact Form Controller Unit Tests:', function() {
    // Define a pre-tests function
    beforeEach(function(done) {

        aMessage = new Message({
            firstName: 'Full',
            lastName: 'Name',
            email: 'example@example.com',
            subject: 'subject of message',
            message: 'The message'
        });

        aMessage.save(function(err) {
            done();
        });

    });

    //Test the 'Contact' GET method
    describe('Testing the GET method', function() {
        it('Should be able to get the message to the database', function(done) {
            // Create a SuperTest request
            request(app).get('/api/contact/messages')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                //send(aMessage)
                .end(function(err, res) {
                    res.body.should.be.an.Array.and.have.lengthOf(1);
                    res.body[0].should.have.property('firstName', aMessage.firstName);
                    res.body[0].should.have.property('lastName', aMessage.lastName);
                    res.body[0].should.have.property('email', aMessage.email);
                    res.body[0].should.have.property('subject', aMessage.subject);
                    res.body[0].should.have.property('message', aMessage.message);

                    done();
                });
        });

        it('Should be able to get the specific message', function(done) {
            // Create a SuperTest request
            request(app).get('/api/contact/message/' + aMessage.id)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                    res.body.should.be.an.Object.and.have.property('firstName', aMessage.firstName);
                    res.body.should.have.property('lastName', aMessage.lastName);
                    res.body.should.have.property('email', aMessage.email);
                    res.body.should.have.property('subject', aMessage.subject);
                    res.body.should.have.property('message', aMessage.message);

                    done();
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