import React from 'react';
import Artists from '../Artists/Artists';
import Search from '../Search/Search';

const CenterSection = () => {
	return (
		<div>
			<Search />
			<div className='m-10 text-white'>
				<h2 className='text-white text-[2rem] font-extrabold text-shadow-xl-white'>ARTISTAS</h2>
				<Artists />	
			</div>
			
			
			
		</div>
	);
};

export default CenterSection;
