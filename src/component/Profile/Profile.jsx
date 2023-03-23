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
			<div className='flex flex-col items-center '>
				<div className='flex flex-col px-10 text-white  lg:gap-[3rem] lg:h-[80vh] w-full lg:overflow-y-scroll lg:scrollbar-hide'>
					<div>
						<InfoProfile />
					</div>
					<div className='flex gap-20'>
						<Preferences />
						<FAQ />
					</div>
					<div>
						<ChangePassword />
					</div>
					<div>
						<ContactUs />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
