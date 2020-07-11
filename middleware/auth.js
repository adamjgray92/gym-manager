const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = async (req, res, next) => {
	const authHeader = req.header('Authorization');
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) return res.status(401).send('Access denied. No token provided.');

	try {
		const user = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

		req.user = user;
		next();
	} catch (err) {
		return res.status(403).send(err.message);
	}
};
