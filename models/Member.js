const mongoose = require('mongoose');
const Joi = require('joi');

const Member = mongoose.model(
	'Member',
	new mongoose.Schema({
		firstName: {
			type: String,
			required: true,
			maxlength: 50,
		},
		lastName: {
			type: String,
			required: true,
			maxlength: 50,
		},
		email: {
			type: String,
		},
	})
);

function validate(member) {
	const schema = {
		firstName: Joi.string().max(50).required(),
		lastName: Joi.string().max(50).required(),
		email: Joi.string().email().required(),
	};

	return Joi.validate(member, schema);
}

exports.Member = Member;
exports.validate = validate;
