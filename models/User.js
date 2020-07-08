const mongoose = require('mongoose');
const Joi = require('Joi');

const userSchema = new mongoose.Schema({
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
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
		maxlength: 1024,
	},
	created_at: {
		type: Date,
		default: Date.now(),
	},
});

function validate(user) {
	const schema = {
		first_name: Joi.string().max(50).required(),
		last_name: Joi.string().max(50).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(7).max(1024).required(),
		password_again: Joi.string()
			.required()
			.valid(Joi.ref('password'))
			.error(() => {
				return { message: 'Passwords do not match' };
			}),
	};

	return Joi.validate(user, schema);
}

const User = new mongoose.model('User', userSchema);

module.exports.User = User;
module.exports.validate = validate;
