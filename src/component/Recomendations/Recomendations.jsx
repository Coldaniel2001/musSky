import React from 'react';
import RecomendationSong from '../RecomendationSong/RecomendationSong';

const Recomendations = () => {
	return (
		<div className='pb-40 lg:pb-0'>
		<h2 className='text-white text-title mb-5 font-extrabold text-shadow-xl-white mt-16'>PLAYLISTS</h2>
		<div className='mb-28 lg:mb-20' >
			<RecomendationSong />
		</div>
		</div>
	)
};

export default Recomendations;
