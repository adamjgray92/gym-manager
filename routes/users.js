const express = require('express');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

const auth = require('../middleware/auth');
const { User, validateRegister, validateLogin } = require('../models/User');
const UserResource = require('../resources/UserResource');

const router = express.Router();

// Auth routes
router.post('/login', async (req, res) => {
	const { error } = validateLogin(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Invalid email or password');

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid email or password');

	const accessToken = user.generateAuthToken();

	return res.send({ accessToken: accessToken });
});

// Get logged in user
router.get('/me', auth, async (req, res) => {
	const user = await User.findById(req.user._id);

	if (!user) return res.status(404);

	return res.send(new UserResource(user));
});

// Get specific user
router.get('/:id', async (req, res) => {});

// Create new user
router.post('/', async (req, res) => {
	const { error } = validateRegister(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send('User already registered.');

	user = new User(
		_.pick(req.body, ['first_name', 'last_name', 'email', 'password'])
	);

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	await user.save();

	return res.status(201).send(new UserResource(user));
});

module.exports = router;
