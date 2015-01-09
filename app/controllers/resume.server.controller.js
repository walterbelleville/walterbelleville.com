// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Resume = mongoose.model('Resume');

// Create a new error handling controller method
var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

// Create a new controller method that creates new articles
exports.create = function(req, res) {
	// Create a new article object
	var resume = new Resume(req.body);

	// Set the article's 'creator' property
	resume.creator = req.user;

	// Try saving the article
	resume.save(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article 
			res.json(resume);
		}
	});
};

// Create a new controller method that retrieves a list of articles
exports.list = function(req, res) {
	// Use the model 'find' method to get a list of articles
	Resume.find().sort('-created').populate('creator', 'name label').exec(function(err, resumes) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article 
			res.json(resumes);
		}
	});
};

// Create a new controller method that returns an existing article
exports.read = function(req, res) {
	res.json(req.resume);
};

// Create a new controller method that updates an existing resume
exports.update = function(req, res) {
	// Get the article from the 'request' object
	var resume = req.resume;

	// Update the resume fields
	resume.name = req.body.name;
	resume.label = req.body.label;
    resume.picture = req.body.picture;
    resume.email = req.body.email;
    resume.phone = req.body.phone;
    resume.website = req.body.website;
    resume.summary = req.body.summary;
    resume.city = req.body.city;
    resume.postalCode = req.body.postalCode;
    resume.countryCode = req.body.countryCode;
    resume.region = req.body.region;
    resume.profileTwitterName = req.body.profileTwitterName;
    resume.profileTwitterUser = req.body.profileTwitterUser;
    resume.profileTwitterUrl = req.body.profileTwitterUrl;
    resume.profileLinkedinName = req.body.profileLinkedinName;
    resume.profileLinkedinUser = req.body.profileLinkedinUser;
    resume.profileLinkedinUrl = req.body.profileLinkedinUrl;
    resume.profileGithubName = req.body.profileGithubName;
    resume.profileGithubUser = req.body.profileGithubUser;
    resume.profileGithubUrl = req.body.profileGithubUrl;
    resume.workHistoryCompanyOne = req.body.workHistoryCompanyOne;
    resume.workHistoryPositionOne = req.body.workHistoryPositionOne;
    resume.workHistoryWebsiteOne = req.body.workHistoryWebsiteOne;
    resume.workHistoryStartdateOne = req.body.workHistoryStartdateOne;
    resume.workHistoryEnddateOne = req.body.workHistoryEnddateOne;
    resume.workHistorysummaryOne = req.body.workHistorysummaryOne;
    resume.workHistoryHighlightsOne = req.body.workHistoryHighlightsOne;
    resume.workHistoryCompanyTwo = req.body.workHistoryCompanyTwo;
    resume.workHistoryPositionTwo = req.body.workHistoryPositionTwo;
    resume.workHistoryWebsiteTwo = req.body.workHistoryWebsiteTwo;
    resume.workHistoryStartdateTwo = req.body.workHistoryStartdateTwo;
    resume.workHistoryEnddateTwo = req.body.workHistoryEnddateTwo;
    resume.workHistorysummaryTwo = req.body.workHistorysummaryTwo;
    resume.workHistoryHighlightsTwo = req.body.workHistoryHighlightsTwo;
    resume.workHistoryCompanyThree = req.body.workHistoryCompanyThree;
    resume.workHistoryPositionThree = req.body.workHistoryPositionThree;
    resume.workHistoryWebsiteThree = req.body.workHistoryWebsiteThree;
    resume.workHistoryStartdateThree = req.body.workHistoryStartdateThree;
    resume.workHistoryEnddateThree = req.body.workHistoryEnddateThree;
    resume.workHistorysummaryThree = req.body.workHistorysummaryThree;
    resume.workHistoryHighlightsThree = req.body.workHistoryHighlightsThree;
    resume.educationInstitution = req.body.educationInstitution;
    resume.educationArea = req.body.educationArea;
    resume.educationStudyType = req.body.educationStudyType;
    resume.educationStartdate = req.body.educationStartdate;
    resume.educationEnddate = req.body.educationEnddate;
    resume.educationGPA = req.body.educationGPA;
	resume.educationInstitutionTwo = req.body.educationInstitutionTwo;
	resume.educationAreaTwo = req.body.educationAreaTwo;
	resume.educationStudyTypeTwo = req.body.educationStudyTypeTwo;
	resume.educationStartdateTwo = req.body.educationStartdateTwo;
	resume.educationEnddateTwo = req.body.educationEnddateTwo;
	resume.educationGPATwo = req.body.educationGPATwo;
    resume.skillsNameOne = req.body.skillsNameOne;
    resume.skillsLevelOne = req.body.skillsLevelOne;
    resume.skillsKeyswordsOne = req.body.skillsKeyswordsOne;
    resume.skillsNameTwo = req.body.skillsNameTwo;
    resume.skillsLevelTwo = req.body.skillsLevelTwo;
    resume.skillsKeyswordsTwo = req.body.skillsKeyswordsTwo;
    resume.language = req.body.language;
    resume.fluency = req.body.fluency;
    resume.interestsNameOne = req.body.interestsNameOne;
    resume.interestsNameTwo = req.body.interestsNameTwo;
    resume.interestsNameThree = req.body.interestsNameThree;
    resume.referenceName = req.body.referenceName;
    resume.reference = req.body.reference;
	resume.slug = req.body.slug;

    // Try saving the updated article
	resume.save(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article 
			res.json(resume);
		}
	});
};

// Create a new controller method that delete an existing article
exports.delete = function(req, res) {
	// Get the article from the 'request' object
	var resume = req.resume;

	// Use the model 'remove' method to delete the article
	resume.remove(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the article 
			res.json(resume);
		}
	});
};

// Create a new controller middleware that retrieves a single existing article
exports.resumeByID = function(req, res, next, id) {
	// TODO: use the title of the resume for the url id
	// Use the model 'findById' method to find a single article 
	Resume.findById(id).populate('creator', 'name label summary').exec(function(err, resume) {
		if (err) return next(err);
		if (!resume) return next(new Error('Failed to load resume ' + id));

		// If an article is found use the 'request' object to pass it to the next middleware
		req.resume = resume;

		// Call the next middleware
		next();
	});
};

// Create a new controller to read by slug
exports.readBySlug = function(req , res){
    Resume.findOne(req.query).populate('creator', 'name label summary').exec(function(err, article) {
    if (err) {
        return res.status(400).send({
            message: getErrorMessage(err)
        });
        } else {
        res.json(article);
        }
    });
};

// Create a new controller middleware that is used to authorize an article operation 
exports.hasAuthorization = function(req, res, next) {
	// If the current user is not the creator of the article send the appropriate error message
	if (req.resume.creator.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}

	// Call the next middleware
	next();
};