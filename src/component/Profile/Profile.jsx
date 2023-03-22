import React from 'react';
import ChangePassword from '../ChangePassword/ChangePassword';
import Search from '../Search/Search';
import InfoProfile from '../../component/InfoProfile/InfoProfile'

import ContactUs from '../../component/ContactUs/ContactUs'
import Preferences from '../../component/Preferences/Preferences'

const Profile = () => {
	return (
		<>
		<Search/>
		<InfoProfile />
		<div className='mx-3 lg:ml-10 lg:m-10 text-white lg:h-[80vh] lg:overflow-y-scroll'>
		<ChangePassword />
		</div>

		<Preferences />
        <ContactUs/>
		</>
	);
};

export default Profile;
