const express = require('express');
const mongoose = require('mongoose');

const auth = require('../middleware/auth');

const { Member, validate } = require('../models/Member');

const router = express.Router();

router.get('/', auth, async (req, res) => {
	try {
		const members = await Member.find().sort('email');

		return res.status(200).send(members);
	} catch (error) {}
});

router.get('/:id', async (req, res) => {
	try {
		const member = await Member.findById(req.params.id);

		if (member) {
			return res.status(200).send(members);
		} else {
			return res.status(404).send({ message: 'Member not found' });
		}
	} catch (error) {}
});

router.post('/', async (req, res) => {
	try {
		const { errors } = validate(req.body);
		if (errors) return res.status(400).send(errors.details[0].message);

		const member = new Member({
			firstName: req.body.first_name,
			lastName: req.body.last_name,
			email: req.body.email,
		});

		await member.save();

		return res.status(201).send(member);
	} catch (error) {
		return res.send(error);
	}
});

module.exports = router;
