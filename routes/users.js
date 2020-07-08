const express = require('express');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

const { User, validate } = require('../models/User');

const router = express.Router();

// Get logged in user
router.get('/me', async (req, res) => {});

// Get specific user
router.get('/:id', async (req, res) => {});

// Create new user
router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send('User already registered.');

	user = new User(
		_.pick(req.body, ['first_name', 'last_name', 'email', 'password'])
	);

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	await user.save();
});

module.exports = router;
