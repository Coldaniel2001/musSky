import React from 'react';
import ChangePassword from '../ChangePassword/ChangePassword';
import Search from '../Search/Search';

const Profile = () => {
	return (
		<>
		<Search/>
		<div className='mx-3 lg:ml-10 lg:m-10 text-white lg:h-[80vh] lg:overflow-y-scroll'>
		<ChangePassword />
		</div>

		</>
	);
};

export default Profile;
