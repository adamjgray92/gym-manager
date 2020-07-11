const mongoose = require('mongoose');
const Joi = require('joi');

const Member = mongoose.model(
	'Member',
	new mongoose.Schema({
		first_name: {
			type: String,
			required: true,
			maxlength: 50,
		},
		last_name: {
			type: String,
			required: true,
			maxlength: 50,
		},
		email: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: true,
		},
	})
);

function validate(member) {
	const schema = {
		first_name: Joi.string().max(50).required(),
		last_name: Joi.string().max(50).required(),
		email: Joi.string().email().required(),
	};

	return Joi.validate(member, schema);
}

exports.Member = Member;
exports.validate = validate;
