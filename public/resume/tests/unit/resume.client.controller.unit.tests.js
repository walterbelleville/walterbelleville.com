// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'Resume' module unit test suite
describe('Testing Resume Controller', function() {
	// Define global variables
	var _scope, ResumesController;

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
			_scope = $rootScope.$new();

			// Create a new mock controller
			ResumesController = $controller('ResumesController', {
				$scope: _scope
			});
		});
	});

	// Test the 'find' method
	it('Should have a find method that uses $resource to retrieve a list of resumes', inject(function(Resumes) {
		// Use the 'inject' method to inject services
		inject(function($httpBackend) {
			// Create a sample resume
			var sampleResume = new Resumes({
                name: 'name',
                label: 'label',
                picture: 'picture',
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
                reference: 'reference'
			});

			// Create a sample resumes list
			var sampleResumes = [sampleResume];

			// Define a request assertion
			$httpBackend.expectGET('api/resumes').respond(sampleResumes);

			// Call the controller's 'find' method
			_scope.find();

			// Flush the mock HTTP results
			$httpBackend.flush();

			// Test the results
			expect(_scope.resume).toEqualData(sampleResumes);
		});
	}));

	// Test the 'findOne' method
	it('Should have a findOne method that uses $resource to retreive a single of resume', inject(function(Resumes) {
		// Use the 'inject' method to inject services
		inject(function($httpBackend, $routeParams) {
			// Create a sample resume
			var sampleResume = new Resumes({
                name: 'name',
                label: 'label',
                picture: 'picture',
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
                reference: 'reference'
			});

			// Set the 'resumeId' route parameter
			$routeParams.resumeId = 'abcdef123456789012345678';

			// Define a request assertion
			$httpBackend.expectGET(/api\/resumes\/([0-9a-fA-F]{24})$/).respond(sampleResume);

			// Call the controller's 'findOne' method
			_scope.findOne();

			// Flush the mock HTTP results
			$httpBackend.flush();

			// Test the results
			expect(_scope.resume).toEqualData(sampleResume);
		});
	}));
});