const mongoose = require('mongoose');

require('dotenv').config();

module.exports = function () {
	mongoose
		.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.catch((error) => console.error(error.reason));
};
