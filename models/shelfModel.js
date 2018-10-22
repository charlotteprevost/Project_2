const mongoose 	= require('mongoose');
const Album 	= require('./albumModel.js');

const shelfSchema = new mongoose.Schema({
	title: 		{type: String, required: true},
	createdBy: 	{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	albums: 	[{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}],
	liked_by: 	[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	updated: 	Date
});

module.exports = mongoose.model('Shelf', shelfSchema);