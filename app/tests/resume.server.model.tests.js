// Invoke 'strict' JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../server.js'),
	should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Resume = mongoose.model('Resume');

// Define global variables
var user, resume;

// Create an 'Resume' model test suite
describe('Resume Model Unit Tests:', function() {
	// Define a pre-tests function
	beforeEach(function(done) {
		// Create a new 'User' model instance
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		// Save the new 'User' model instance
		user.save(function() {
			resume = new Resume({
                name: 'name',
                label: 'label',
                /*picture: 'picture',
                email: 'email',
                phone: 'phone',
                website: 'website',
                summary: 'summary',
                city: 'city',
                postalCode: 'postalCode',
                countryCode: 'countryCode',
                region: 'region',
                profileTwitterName: 'profileTwitterName',
                profileTwitterUser: 'profileTwitterUser',
                profileTwitterUrl: 'profileTwitterUrl',
                profileLinkedinName: 'profileLinkedinName',
                profileLinkedinUser: 'profileLinkedinUser',
                profileLinkedinUrl: 'profileLinkedinUrl',
                profileGithubName: 'profileGithubName',
                profileGithubUser: 'profileGithubUser',
                profileGithubUrl: 'profileGithubUrl',
                workHistoryCompanyOne: 'workHistoryCompanyOne',
                workHistoryPositionOne: 'workHistoryPositionOne',
                rworkHistoryWebsiteOne: 'workHistoryWebsiteOne',
                workHistoryStartdateOne: 'workHistoryStartdateOne',
                workHistoryEnddateOne: 'workHistoryEnddateOne',
                workHistorysummaryOne: 'workHistorysummaryOne',
                workHistoryHighlightsOne: 'workHistoryHighlightsOne',
                workHistoryCompanyTwo: 'workHistoryCompanyTwo',
                workHistoryPositionTwo: 'workHistoryPositionTwo',
                workHistoryWebsiteTwo: 'workHistoryWebsiteTwo',
                workHistoryStartdateTwo: 'workHistoryStartdateTwo',
                workHistoryEnddateTwo: 'workHistoryEnddateTwo',
                workHistorysummaryTwo: 'workHistorysummaryTwo',
                workHistoryHighlightsTwo: 'workHistoryHighlightsTwo',
                workHistoryCompanyThree: 'workHistoryCompanyThree',
                workHistoryPositionThree: 'workHistoryPositionThree',
                workHistoryWebsiteThree: 'workHistoryWebsiteThree',
                workHistoryStartdateThree: 'workHistoryStartdateThree',
                workHistoryEnddateThree: 'workHistoryEnddateThree',
                workHistorysummaryThree: 'workHistorysummaryThree',
                workHistoryHighlightsThree: 'workHistoryHighlightsThree',
                educationInstitution: 'educationInstitution',
                educationArea: 'educationArea',
                educationStudyType: 'educationStudyType',
                educationStartdate: 'educationStartdate',
                educationEnddate: 'educationEnddate',
                educationGPA: 'educationGPA',
                skillsNameOne: 'skillsNameOne',
                skillsLevelOne: 'skillsLevelOne',
                skillsKeyswordsOne: 'skillsKeyswordsOne',
                skillsNameTwo: 'skillsNameTwo',
                skillsLevelTwo: 'skillsLevelTwo',
                skillsKeyswordsTwo: 'skillsKeyswordsTwo',
                language: 'language',
                fluency: 'fluency',
                interestsNameOne: 'interestsNameOne',
                interestsNameTwo: 'interestsNameTwo',
                interestsNameThree: 'interestsNameThree',
                referenceName: 'referenceName',
                reference: 'reference',*/
				user: user
			});

			done();
		});
	});

	// Test the 'Resume' model save method
	describe('Testing the save method', function() {
		it('Should be able to save without problems', function() {
			resume.save(function(err) {
				should.not.exist(err);
			});
		});

		/*it('Should not be able to save an article without a title', function() {
			resume.title = '';

			resume.save(function(err) {
				should.exist(err);
			});
		});*/
	});

	// Define a post-tests function
	afterEach(function(done) {
		// Clean the database
		resume.remove(function() {
			User.remove(function() {
				done();
			});
		});
	});
});