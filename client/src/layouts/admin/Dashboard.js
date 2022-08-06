import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
	return (
		<div>
			<Navbar />
			<div className='flex'>
				<Sidebar />
				<div className='px-4 py-4 flex-1 max-w-lg mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-7xl'>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
