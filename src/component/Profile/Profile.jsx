import React from 'react';

import FAQ from '../FAQ/FAQ'
import ContactUs from '../ContactUs/ContactUs'
import ChangePassword from '../ChangePassword/ChangePassword';
import Search from '../Search/Search';
import InfoProfile from '../../component/InfoProfile/InfoProfile';
import Preferences from '../../component/Preferences/Preferences'


const Profile = () => {

	return (
		<>
				<Search />
			<div className='flex flex-col items-center'>
				<div className=' mx-3 text-white lg:ml-10 lg:m-10  lg:h-[80vh] lg:w-[80%] lg:overflow-y-scroll lg:scrollbar-hide'>
					<InfoProfile />
					<div className='flex justify-around'>
					<Preferences/>
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
