import React from 'react';
import RecomendationSong from '../RecomendationSong/RecomendationSong';

const Recomendations = () => {
	return (
		<div>
		<h2 className='text-white text-[2rem] mb-5 font-extrabold text-shadow-xl-white mt-10'>RECOMENDACIONES PARA TI</h2>
		<div className='' >
			<RecomendationSong />
		</div>
		</div>
	)
};

export default Recomendations;