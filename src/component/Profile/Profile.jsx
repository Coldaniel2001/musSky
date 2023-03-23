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
				<div className='flex flex-col justify-between mx-3 text-white lg:ml-10 lg:m-10 lg:gap-[2rem] lg:h-[80vh] lg:w-[80%]  lg:overflow-y-scroll lg:scrollbar-hide'>
					<div>
						<InfoProfile />
					</div>
					{/* h-[24rem] */}
					<div className='flex justify-between'>
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
