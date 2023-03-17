import React from 'react';
import Artist from '../Artist/Artist';

const Artists = () => {
	return (
		<div>
			<h2 className='text-white text-[2rem] font-extrabold'>ARTISTAS</h2>
			<div className='grid grid-cols-2 lg:grid-cols-4 mt-5 lg:mt-10 ' >
				<Artist />
			</div>
		</div>
	)
};

export default Artists;
