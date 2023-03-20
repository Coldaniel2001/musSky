import React from 'react';
import Artist from '../Artist/Artist';

const Artists = () => {
	return (
		<div>
		<h2 className='text-white text-[1rem] font-extrabold text-shadow-xl-white sm:text-xs md:text-sm lg:text-lg 2xl:text-[2rem]'>ARTISTAS</h2>
		<div className='grid grid-cols-4 mt-10 ' >
			<Artist />
		</div>
		</div>
	)
};

export default Artists;
