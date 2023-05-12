import React, { lazy, Suspense } from 'react';

import Search from '../Search/Search';
import TopPhone from '../TopPhone/TopPhone';

import SkeletonInfoProfile from '../../Skeleton/Profile/SkeletonInfoProfile';
import SkeletonPreferencesAndQuestion from '../../Skeleton/Profile/SkeletonPreferenceAndQuestion';
import SkeletonPasswordAndContact from '../../Skeleton/Profile/SkeletonPasswordAndContact';


const InfoProfile = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('../../component/InfoProfile/InfoProfile')), 2000);
	});
});

const FAQ = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('../FAQ/FAQ')), 2000);
	});
});

const Preferences = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('../../component/Preferences/Preferences')), 2000);
	});
});

const ChangePassword = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('../ChangePassword/ChangePassword')), 2000);
	});
});
const ContactUs = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('../ContactUs/ContactUs')), 2000);
	});
});

const Profile = () => {

	return (
		<>
			<TopPhone />
			<Search />
			<div className='flex flex-col items-center '>
				<div className='flex flex-col px-10 text-white  lg:gap-[3rem] lg:h-[80vh] w-full lg:overflow-y-scroll lg:scrollbar-hide'>
					<div>
						<Suspense fallback={<SkeletonInfoProfile />}>
							<InfoProfile />
						</Suspense>
					</div>
					<div className='md:flex md:mt-10 lg:mt-0 gap-10 2xl:gap-20'>
						<Suspense fallback={<SkeletonPreferencesAndQuestion />}>
							<Preferences />
							<FAQ />
						</Suspense>
					</div>
					<div>
						<Suspense fallback={<SkeletonPasswordAndContact />}>
							<ChangePassword />
						</Suspense>
					</div>
					<div>
						<Suspense fallback={<SkeletonPasswordAndContact />}>
							<ContactUs />
						</Suspense>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
