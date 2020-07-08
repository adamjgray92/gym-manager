const express = require('express');

const members = require('../routes/members');
const users = require('../routes/users');

module.exports = function (app) {
	app.use(express.json());
	app.use('/api/members', members);
	app.use('/api/users', users);
};
