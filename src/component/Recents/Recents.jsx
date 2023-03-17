import React from 'react';
import RecentSong from '../RecentSong/RecentSong';

const Recents = () => {
	return (
		<div>
		<h2 className='text-white text-[2rem] mb-5 font-extrabold text-shadow-xl-white mt-10'>RECIENTES</h2>
		<div className='grid lg:grid-cols-2 grid-rows-4' >
			<RecentSong />
		</div>
		</div>
	)
};

export default Recents;
