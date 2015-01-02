// Invoke 'strict' JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../server'),
	request = require('supertest'),
	should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Resume = mongoose.model('Resume');

// Define global test variables
var user, resume;

// Create an 'Resumes' controller test suite
describe('Resume Controller Unit Tests:', function() {
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


			resume.save(function(err) {
				done();
			});
		});
	});

	// Test the 'Resume' GET methods
	describe('Testing the GET methods', function() {
		it('Should be able to get the list of resumes', function(done) {
			// Create a SuperTest request
			request(app).get('/api/resumes/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
                    res.body.should.be.an.Array.and.have.lengthOf(1);
					res.body[0].should.have.property('name', resume.name);
					res.body[0].should.have.property('label', resume.label);
                    /*res.body[0].should.have.property('picture', resume.picture);
                    res.body[0].should.have.property('phone', resume.phone);
                    res.body[0].should.have.property('website', resume.website);
                    res.body[0].should.have.property('city', resume.city);
                    res.body[0].should.have.property('postalCode', resume.postalCode);
                    res.body[0].should.have.property('countryCode', resume.countryCode);
                    res.body[0].should.have.property('region', resume.region);
                    res.body[0].should.have.property('profileTwitterName', resume.profileTwitterName);
                    res.body[0].should.have.property('profileTwitterUser', resume.profileTwitterUser);
                    res.body[0].should.have.property('profileTwitterUrl', resume.profileTwitterUrl);
                    res.body[0].should.have.property('profileLinkedinName', resume.profileLinkedinName);
                    res.body[0].should.have.property('profileLinkedinUser', resume.profileLinkedinUser);
                    res.body[0].should.have.property('profileLinkedinUrl', resume.profileLinkedinUrl);
                    res.body[0].should.have.property('profileGithubName', resume.profileGithubName);
                    res.body[0].should.have.property('profileGithubUser', resume.profileGithubUser);
                    res.body[0].should.have.property('profileGithubUrl', resume.profileGithubUrl);
                    res.body[0].should.have.property('workHistoryCompanyOne', resume.workHistoryCompanyOne);
                    res.body[0].should.have.property('workHistoryPositionOne', resume.workHistoryPositionOne);
                    res.body[0].should.have.property('workHistoryWebsiteOne', resume.workHistoryWebsiteOne);
                    res.body[0].should.have.property('workHistoryStartdateOne', resume.workHistoryStartdateOne);
                    res.body[0].should.have.property('workHistoryEnddateOne', resume.workHistoryEnddateOne);
                    res.body[0].should.have.property('workHistorysummaryOne', resume.workHistorysummaryOne);
                    res.body[0].should.have.property('workHistoryHighlightsOne', resume.workHistoryHighlightsOne);
                    res.body[0].should.have.property('workHistoryCompanyTwo', resume.workHistoryCompanyTwo);
                    res.body[0].should.have.property('workHistoryPositionTwo', resume.workHistoryPositionTwo);
                    res.body[0].should.have.property('workHistoryWebsiteTwo', resume.workHistoryWebsiteTwo);
                    res.body[0].should.have.property('workHistoryStartdateTwo', resume.workHistoryStartdateTwo);
                    res.body[0].should.have.property('workHistoryEnddateTwo', resume.workHistoryEnddateTwo);
                    res.body[0].should.have.property('workHistorysummaryTwo', resume.workHistorysummaryTwo);
                    res.body[0].should.have.property('workHistoryHighlightsTwo', resume.workHistoryHighlightsTwo);
                    res.body[0].should.have.property('workHistoryCompanyThree', resume.workHistoryCompanyThree);
                    res.body[0].should.have.property('workHistoryPositionThree', resume.workHistoryPositionThree);
                    res.body[0].should.have.property('workHistoryWebsiteThree', resume.workHistoryWebsiteThree);
                    res.body[0].should.have.property('workHistoryStartdateThree', resume.workHistoryStartdateThree);
                    res.body[0].should.have.property('workHistoryEnddateThree', resume.workHistoryEnddateThree);
                    res.body[0].should.have.property('workHistorysummaryThree', resume.workHistorysummaryThree);
                    res.body[0].should.have.property('workHistoryHighlightsThree', resume.workHistoryHighlightsThree);
                    res.body[0].should.have.property('educationInstitution', resume.educationInstitution);
                    res.body[0].should.have.property('educationArea', resume.educationArea);
                    res.body[0].should.have.property('educationStudyType', resume.educationStudyType);
                    res.body[0].should.have.property('educationStartdate', resume.educationStartdate);
                    res.body[0].should.have.property('educationEnddate', resume.educationEnddate);
                    res.body[0].should.have.property('educationGPA', resume.educationGPA);
                    res.body[0].should.have.property('skillsNameOne', resume.skillsNameOne);
                    res.body[0].should.have.property('skillsLevelOne', resume.skillsLevelOne);
                    res.body[0].should.have.property('skillsKeyswordsOne', resume.skillsKeyswordsOne);
                    res.body[0].should.have.property('skillsNameTwo', resume.skillsNameTwo);
                    res.body[0].should.have.property('skillsLevelTwo', resume.skillsLevelTwo);
                    res.body[0].should.have.property('skillsKeyswordsTwo', resume.skillsKeyswordsTwo);
                    res.body[0].should.have.property('language', resume.language);
                    res.body[0].should.have.property('fluency', resume.fluency);
                    res.body[0].should.have.property('interestsNameOne', resume.interestsNameOne);
                    res.body[0].should.have.property('interestsNameTwo', resume.interestsNameTwo);
                    res.body[0].should.have.property('interestsNameThree', resume.interestsNameThree);
                    res.body[0].should.have.property('referenceName', resume.referenceName);*/

					done();
				});
		});

		it('Should be able to get the specific resume', function(done) {
			// Create a SuperTest request
			request(app).get('/api/resumes/' + resume.id)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
                    res.body.should.be.an.Object.and.have.property('name', resume.name);
                    res.body.should.have.property('label', resume.label);
                    /*res.body.should.have.property('picture', resume.picture);
                    res.body.should.have.property('phone', resume.phone);
                    res.body.should.have.property('website', resume.website);
                    res.body.should.have.property('city', resume.city);
                    res.body.should.have.property('postalCode', resume.postalCode);
                    res.body.should.have.property('countryCode', resume.countryCode);
                    res.body.should.have.property('region', resume.region);
                    res.body.should.have.property('profileTwitterName', resume.profileTwitterName);
                    res.body.should.have.property('profileTwitterUser', resume.profileTwitterUser);
                    res.body.should.have.property('profileTwitterUrl', resume.profileTwitterUrl);
                    res.body.should.have.property('profileLinkedinName', resume.profileLinkedinName);
                    res.body.should.have.property('profileLinkedinUser', resume.profileLinkedinUser);
                    res.body.should.have.property('profileLinkedinUrl', resume.profileLinkedinUrl);
                    res.body.should.have.property('profileGithubName', resume.profileGithubName);
                    res.body.should.have.property('profileGithubUser', resume.profileGithubUser);
                    res.body.should.have.property('profileGithubUrl', resume.profileGithubUrl);
                    res.body.should.have.property('workHistoryCompanyOne', resume.workHistoryCompanyOne);
                    res.body.should.have.property('workHistoryPositionOne', resume.workHistoryPositionOne);
                    res.body.should.have.property('workHistoryWebsiteOne', resume.workHistoryWebsiteOne);
                    res.body.should.have.property('workHistoryStartdateOne', resume.workHistoryStartdateOne);
                    res.body.should.have.property('workHistoryEnddateOne', resume.workHistoryEnddateOne);
                    res.body.should.have.property('workHistorysummaryOne', resume.workHistorysummaryOne);
                    res.body.should.have.property('workHistoryHighlightsOne', resume.workHistoryHighlightsOne);
                    res.body.should.have.property('workHistoryCompanyTwo', resume.workHistoryCompanyTwo);
                    res.body.should.have.property('workHistoryPositionTwo', resume.workHistoryPositionTwo);
                    res.body.should.have.property('workHistoryWebsiteTwo', resume.workHistoryWebsiteTwo);
                    res.body.should.have.property('workHistoryStartdateTwo', resume.workHistoryStartdateTwo);
                    res.body.should.have.property('workHistoryEnddateTwo', resume.workHistoryEnddateTwo);
                    res.body.should.have.property('workHistorysummaryTwo', resume.workHistorysummaryTwo);
                    res.body.should.have.property('workHistoryHighlightsTwo', resume.workHistoryHighlightsTwo);
                    res.body.should.have.property('workHistoryCompanyThree', resume.workHistoryCompanyThree);
                    res.body.should.have.property('workHistoryPositionThree', resume.workHistoryPositionThree);
                    res.body.should.have.property('workHistoryWebsiteThree', resume.workHistoryWebsiteThree);
                    res.body.should.have.property('workHistoryStartdateThree', resume.workHistoryStartdateThree);
                    res.body.should.have.property('workHistoryEnddateThree', resume.workHistoryEnddateThree);
                    res.body.should.have.property('workHistorysummaryThree', resume.workHistorysummaryThree);
                    res.body.should.have.property('workHistoryHighlightsThree', resume.workHistoryHighlightsThree);
                    res.body.should.have.property('educationInstitution', resume.educationInstitution);
                    res.body.should.have.property('educationArea', resume.educationArea);
                    res.body.should.have.property('educationStudyType', resume.educationStudyType);
                    res.body.should.have.property('educationStartdate', resume.educationStartdate);
                    res.body.should.have.property('educationEnddate', resume.educationEnddate);
                    res.body.should.have.property('educationGPA', resume.educationGPA);
                    res.body.should.have.property('skillsNameOne', resume.skillsNameOne);
                    res.body.should.have.property('skillsLevelOne', resume.skillsLevelOne);
                    res.body.should.have.property('skillsKeyswordsOne', resume.skillsKeyswordsOne);
                    res.body.should.have.property('skillsNameTwo', resume.skillsNameTwo);
                    res.body.should.have.property('skillsLevelTwo', resume.skillsLevelTwo);
                    res.body.should.have.property('skillsKeyswordsTwo', resume.skillsKeyswordsTwo);
                    res.body.should.have.property('language', resume.language);
                    res.body.should.have.property('fluency', resume.fluency);
                    res.body.should.have.property('interestsNameOne', resume.interestsNameOne);
                    res.body.should.have.property('interestsNameTwo', resume.interestsNameTwo);
                    res.body.should.have.property('interestsNameThree', resume.interestsNameThree);
                    res.body.should.have.property('referenceName', resume.referenceName);*/


					done();
				});
		});
	});

	// Define a post-tests function
	afterEach(function(done) {
		// Clean the database
		Resume.remove(function() {
			User.remove(function() {
				done();
			});
		});
	});
});