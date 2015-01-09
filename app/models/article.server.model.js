// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'ArticleSchema'
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true,
        required: 'Content cannot be blank'
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
mongoose.model('Article', ArticleSchema);