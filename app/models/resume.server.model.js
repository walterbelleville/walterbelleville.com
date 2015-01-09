// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'ResumeSchema'
var ResumeSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    label: {
        type: String,
        default: '',
        trim: true
    },
    picture: {
        type: String,
        default: '',
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true
    },
    phone: {
        type: String,
        default: '',
        trim: true
    },
    website: {
        type: String,
        default: '',
        trim: true
    },
    summary: {
        type: String,
        default: '',
        trim: true
    },
    city: {
        type: String,
        default: '',
        trim: true
    },
    postalCode: {
        type: String,
        default: '',
        trim: true
    },
    countryCode: {
        type: String,
        default: '',
        trim: true
    },
    region: {
        type: String,
        default: '',
        trim: true
    },
    profileTwitterName: {
        type: String,
        default: '',
        trim: true
    },
    profileTwitterUser: {
        type: String,
        default: '',
        trim: true
    },
    profileTwitterUrl: {
        type: String,
        default: '',
        trim: true
    },
    profileLinkedinName: {
        type: String,
        default: '',
        trim: true
    },
    profileLinkedinUser: {
        type: String,
        default: '',
        trim: true
    },
    profileLinkedinUrl: {
        type: String,
        default: '',
        trim: true
    },
    profileGithubName: {
        type: String,
        default: '',
        trim: true
    },
    profileGithubUser: {
        type: String,
        default: '',
        trim: true
    },
    profileGithubUrl: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryCompanyOne: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryPositionOne: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryWebsiteOne: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryStartdateOne: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryEnddateOne: {
        type: String,
        default: '',
        trim: true
    },
    workHistorysummaryOne: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryHighlightsOne: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryCompanyTwo: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryPositionTwo: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryWebsiteTwo: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryStartdateTwo: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryEnddateTwo: {
        type: String,
        default: '',
        trim: true
    },
    workHistorysummaryTwo: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryHighlightsTwo: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryCompanyThree: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryPositionThree: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryWebsiteThree: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryStartdateThree: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryEnddateThree: {
        type: String,
        default: '',
        trim: true
    },
    workHistorysummaryThree: {
        type: String,
        default: '',
        trim: true
    },
    workHistoryHighlightsThree: {
        type: String,
        default: '',
        trim: true
    },
    educationInstitution: {
        type: String,
        default: '',
        trim: true
    },
    educationArea: {
        type: String,
        default: '',
        trim: true
    },
    educationStudyType: {
        type: String,
        default: '',
        trim: true
    },
    educationStartdate: {
        type: String,
        default: '',
        trim: true
    },
    educationEnddate: {
        type: String,
        default: '',
        trim: true
    },
    educationGPA: {
        type: String,
        default: '',
        trim: true
    },
    educationInstitutionTwo: {
        type: String,
        default: '',
        trim: true
    },
    educationAreaTwo: {
        type: String,
        default: '',
        trim: true
    },
    educationStudyTypeTwo: {
        type: String,
        default: '',
        trim: true
    },
    educationStartdateTwo: {
        type: String,
        default: '',
        trim: true
    },
    educationEnddateTwo: {
        type: String,
        default: '',
        trim: true
    },
    educationGPATwo: {
        type: String,
        default: '',
        trim: true
    },
    skillsNameOne: {
        type: String,
        default: '',
        trim: true
    },
    skillsLevelOne: {
        type: String,
        default: '',
        trim: true
    },
    skillsKeyswordsOne: {
        type: String,
        default: '',
        trim: true
    },
    skillsNameTwo: {
        type: String,
        default: '',
        trim: true
    },
    skillsLevelTwo: {
        type: String,
        default: '',
        trim: true
    },
    skillsKeyswordsTwo: {
        type: String,
        default: '',
        trim: true
    },
    language: {
        type: String,
        default: '',
        trim: true
    },
    fluency: {
        type: String,
        default: '',
        trim: true
    },
    interestsNameOne: {
        type: String,
        default: '',
        trim: true
    },
    interestsNameTwo: {
        type: String,
        default: '',
        trim: true
    },
    interestsNameThree: {
        type: String,
        default: '',
        trim: true
    },
    referenceName: {
        type: String,
        default: '',
        trim: true
    },
    reference: {
        type: String,
        default: '',
        trim: true
    },
    slug: {
        type: String,
        default: '',
        trim: true,
        unique: true,
        required: 'Slug cannot be blank'
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Resume', ResumeSchema);