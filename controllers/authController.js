const express 	= require('express');
const router 	= express.Router();
const User 		= require('../models/userModel.js');
const Shelf 	= require('../models/shelfModel.js');		// When the time comes
const Album 	= require('../models/albumModel.js');		//		'		'
const LinerNote = require('../models/linerNoteModel.js');	//		'		'

// const bcrypt 	= require('bcrypt'); 					// 		'		'


// ************************* REGISTER 'INDEX' ROUTE **************************

router.get('/register', (req, res) => {
	console.log(`-------------------- req.session REGISTER --------------------\n`, req.session);
	res.render('authViews/register.ejs');
});


// ************************* REGISTER CREATE ROUTE ***************************

router.post('/register', async(req, res, next) => {
	try {
	    const user = await User.find({}); // Check if user exists

	    if (!user){
	    	const password = req.body.password;
	    	// Hash password
			// const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

		    // Create object {} for database entry
		    const userDbEntry = {};
		    userDbEntry.username = req.body.username;
		    userDbEntry.password = passwordHash;

		    // Put password into database
		    await User.create(userDbEntry);

		    console.log(`-------------------- userDbEntry REGISTER --------------------\n`,userDbEntry);

	        // Initialize session (attach properties to session middleware, accessible through every route)
		    req.session.username = req.body.username;
		    req.session.logged   = true;
		    res.redirect('/home');

	    } else {
	    console.log('Sorry! This username has already been taken :(');
	    res.redirect('/auth/register');
	    }
	} catch(err){
	    next(err);
	}
});


// ************************* LOGIN 'INDEX' ROUTE **************************

router.get('login', (req, res) => {
	console.log(`-------------------- req.session LOGIN --------------------\n`, req.session);
	res.render('authViews/login.ejs');
});


// ************************* LOGIN CREATE ROUTE ***************************

router.post('/login', (req, res) => {
	
})







module.exports = router;