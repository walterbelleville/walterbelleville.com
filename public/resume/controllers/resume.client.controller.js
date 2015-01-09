// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'resume' controller
angular.module('resume').controller('ResumesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Resumes',
    function($scope, $routeParams, $location, Authentication, Resumes) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        // Create a new controller method for creating new resumes
        $scope.create = function() {
        	// Use the form fields to create a new resume $resource object
            var resume = new Resumes({


                name: this.name,
                label: this.label,
                picture: this.picture,
                email: this.email,
                phone: this.phone,
                website: this.website,
                summary: this.summary,
                city: this.city,
                postalCode: this.postalCode,
                countryCode: this.countryCode,
                region: this.region,
                profileTwitterName: this.profileTwitterName,
                profileTwitterUser: this.profileTwitterUser,
                profileTwitterUrl: this.profileTwitterUrl,
                profileLinkedinName: this.profileLinkedinName,
                profileLinkedinUser: this.profileLinkedinUser,
                profileLinkedinUrl: this.profileLinkedinUrl,
                profileGithubName: this.profileGithubName,
                profileGithubUser: this.profileGithubUser,
                profileGithubUrl: this.profileGithubUrl,
                workHistoryCompanyOne: this.workHistoryCompanyOne,
                workHistoryPositionOne: this.workHistoryPositionOne,
                workHistoryWebsiteOne: this.workHistoryWebsiteOne,
                workHistoryStartdateOne: this.workHistoryStartdateOne,
                workHistoryEnddateOne: this.workHistoryEnddateOne,
                workHistorysummaryOne: this.workHistorysummaryOne,
                workHistoryHighlightsOne: this.workHistoryHighlightsOne,
                workHistoryCompanyTwo: this.workHistoryCompanyTwo,
                workHistoryPositionTwo: this.workHistoryPositionTwo,
                workHistoryWebsiteTwo: this.workHistoryWebsiteTwo,
                workHistoryStartdateTwo: this.workHistoryStartdateTwo,
                workHistoryEnddateTwo: this.workHistoryEnddateTwo,
                workHistorysummaryTwo: this.workHistorysummaryTwo,
                workHistoryHighlightsTwo: this.workHistoryHighlightsTwo,
                workHistoryCompanyThree: this.workHistoryCompanyThree,
                workHistoryPositionThree: this.workHistoryPositionThree,
                workHistoryWebsiteThree: this.workHistoryWebsiteThree,
                workHistoryStartdateThree: this.workHistoryStartdateThree,
                workHistoryEnddateThree: this.workHistoryEnddateThree,
                workHistorysummaryThree: this.workHistorysummaryThree,
                workHistoryHighlightsThree: this.workHistoryHighlightsThree,
                educationInstitution: this.educationInstitution,
                educationArea: this.educationArea,
                educationStudyType: this.educationStudyType,
                educationStartdate: this.educationStartdate,
                educationEnddate: this.educationEnddate,
                educationGPA: this.educationGPA,
                educationInstitutionTwo: this.educationInstitutionTwo,
                educationAreaTwo: this.educationAreaTwo,
                educationStudyTypeTwo: this.educationStudyTypeTwo,
                educationStartdateTwo: this.educationStartdateTwo,
                educationEnddateTwo: this.educationEnddateTwo,
                educationGPATwo: this.educationGPATwo,
                skillsNameOne: this.skillsNameOne,
                skillsLevelOne: this.skillsLevelOne,
                skillsKeyswordsOne: this.skillsKeyswordsOne,
                skillsNameTwo: this.skillsNameTwo,
                skillsLevelTwo: this.skillsLevelTwo,
                skillsKeyswordsTwo: this.skillsKeyswordsTwo,
                language: this.language,
                fluency: this.fluency,
                interestsNameOne: this.interestsNameOne,
                interestsNameTwo: this.interestsNameTwo,
                interestsNameThree: this.interestsNameThree,
                referenceName: this.referenceName,
                reference: this.reference,
                slug: this.name.toLowerCase().replace(/ /g, '-')
            });

            // Use the resume '$save' method to send an appropriate POST request
            resume.$save(function(response) {
            	// If an resume was created successfully, redirect the user to the resume's page
                $location.path('resumes/' + response.slug);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a list of resumes
        $scope.find = function() {
        	// Use the resume 'query' method to send an appropriate GET request
            $scope.resumes = Resumes.query();
        };

        // Create a new controller method for retrieving a single resume
        $scope.findOne = function() {
        	// Use the resume 'get' method to send an appropriate GET request
            $scope.resume = Resumes.getBySlug({
                slug: $routeParams.resumeSlug
            });
        };

        // Create a new controller method for updating a single resume
        $scope.update = function() {
            var resume = $scope.resume;
            resume.slug = resume.name.toLowerCase().replace(/ /g, '-');
        	// Use the resume '$update' method to send an appropriate PUT request
            $scope.resume.$update(function() {
            	// If an resume was updated successfully, redirect the user to the resume's page
                $location.path('resumes/' + resume.slug);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for deleting a single resume
        $scope.delete = function(resume) {
        	// If an resume was sent to the method, delete it
            if (resume) {
            	// Use the resume '$remove' method to delete the resume
                resume.$remove(function() {
                	// Remove the resume from the resumes list
                    for (var i in $scope.resume) {
                        if ($scope.resume[i] === resume) {
                            $scope.resume.splice(i, 1);
                        }
                    }
                });
            } else {
            	// Otherwise, use the resume '$remove' method to delete the resume
                $scope.resume.$remove(function() {
                    $location.path('resumes');
                });
            }
        };
    }
]);