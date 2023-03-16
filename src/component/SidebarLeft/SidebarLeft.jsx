import React from 'react';
import logo from '../../assets/images/logo.png'
import iconHome from '../../assets/images/icon-home.png'

const SidebarLeft = () => {
	return (
		
		<div className='text-white flex flex-col items-center'>
			<img className='w-60 mt-6' src={logo} alt="logo" />
			<div>
				<div className='grid grid-cols-5 items-center ml-6'>
					<img className='w-12 grid span-cols-4' src={iconHome} alt="home icon" />
					<p className='text-[1.2rem] font-bold'>Home</p>
				</div>
			</div>
		</div>

		
	)
	
};

export default SidebarLeft;
