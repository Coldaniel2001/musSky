import React from 'react';
import Artists from '../Artists/Artists';
import Recents from '../Recents/Recents';
import Search from '../Search/Search';
import Recomendations from '../Recomendations/Recomendations'

const CenterSection = () => {
	return (
		<div >
			<Search />
			<div className='mx-3 lg:ml-10 lg:m-10 text-white lg:h-[80vh] lg:overflow-y-scroll'>
				<Artists />	
				<Recents />	
				<Recomendations />
			</div>
			
			
			
		</div>
	);
};

export default CenterSection;
