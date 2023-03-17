import React from 'react';
import Artist from '../Artist/Artist';

const Artists = () => {
	return (
		<div>
		<h2 className='text-white text-[2rem] font-extrabold text-shadow-xl-white'>ARTISTAS</h2>
		<div className='grid grid-cols-4 mt-10 ' >
			<Artist />
		</div>
		</div>
	)
};

export default Artists;
