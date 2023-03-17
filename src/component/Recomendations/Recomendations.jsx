import React from 'react';
import RecomendationSong from '../RecomendationSong/RecomendationSong';

const Recomendations = () => {
	return (
		<div>
		<h2 className='text-white text-[2rem] mb-5 font-extrabold text-shadow-xl-white mt-10'>RECOMENDACIONES PARA TI</h2>
		<div className='grid grid-cols-2 grid-rows-4' >
			<RecomendationSong />
		</div>
		</div>
	)
};

export default Recomendations;
