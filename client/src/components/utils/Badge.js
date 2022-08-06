import React from 'react';

const Badge = ({ label, color }) => {
	let styles = '';

	if (color === 'red') {
		styles = 'bg-red-100 text-red-800';
	} else if (color === 'green') {
		styles = 'bg-green-100 text-green-800';
	}

	return (
		<span
			className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${styles}`}
		>
			{label}
		</span>
	);
};

export default Badge;
