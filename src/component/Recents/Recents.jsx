import React from 'react';
import RecentSong from '../RecentSong/RecentSong';

const Recents = () => {
	return (
		<div>
			<h2 className='text-white text-[2rem] mb-5 font-extrabold text-shadow-xl-white mt-10'>RECIENTES</h2>
			<div className='grid 3xl:grid-cols-2' >
				<RecentSong /> 
			</div>
		</div>
	)
};

export default Recents;
