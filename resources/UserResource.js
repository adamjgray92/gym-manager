module.exports = function (user) {
	return {
		firstName: user.first_name,
		lastName: user.last_name,
		email: user.email,
		createdAt: user.created_at,
	};
};
