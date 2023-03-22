import React from 'react';

import FAQ from '../FAQ/FAQ'
import ContactUs from '../ContactUs/ContactUs'
import ChangePassword from '../ChangePassword/ChangePassword';
import Search from '../Search/Search';
<<<<<<< HEAD
import InfoProfile from '../../component/InfoProfile/InfoProfile';
=======
import InfoProfile from '../../component/InfoProfile/InfoProfile'

import ContactUs from '../../component/ContactUs/ContactUs'
import Preferences from '../../component/Preferences/Preferences'
>>>>>>> d97b3ee7308a00dec69404ac5506e643c7187a6f

const Profile = () => {

	return (
		<>
				<Search />
			<div className='flex flex-col items-center'>
				<div className=' mx-3 text-white lg:ml-10 lg:m-10  lg:h-[80vh] lg:w-[80%] lg:overflow-y-scroll lg:scrollbar-hide'>
					<InfoProfile />
					<div className='flex justify-around'>
						<FAQ />
					</div>
					<ChangePassword />
					<ContactUs />
				</div>
			</div>

		<Preferences />
        <ContactUs/>
		</>
	);
};

export default Profile;
