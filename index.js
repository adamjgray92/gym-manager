const express = require('express');
const app = express();

require('./startup/db')();
require('./startup/routes')(app);

const PORT = process.env.PORT || 5000;
const server = app.listen(
	PORT,
	console.log(`Listening on http://localhost:${PORT}`)
);

module.exports = server;
