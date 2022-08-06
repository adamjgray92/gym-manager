import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Sidebar = (props) => {
	return (
		<div className='py-8 px-8 max-w-sm flex-1'>
			<div className='px-4 py-4 rounded-md bg-teal-100'>
				<nav>
					<Link to='/'>
						<div className='flex align-items'>
							<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
								<path
									fill-rule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
									clip-rule='evenodd'
								></path>
							</svg>
							<span className='ml-2'>Dashboard</span>
						</div>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default withRouter(Sidebar);
