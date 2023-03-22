import React from 'react';
import Search from '../Search/Search';
import ContactUs from '../../component/ContactUs/ContactUs'
import Preferences from '../../component/Preferences/Preferences'

const Profile = () => {
	return (
		<>
		<Search/>
		<Preferences />
        <ContactUs/>
		</>
	);
};

export default Profile;
