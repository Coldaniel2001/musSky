import React from 'react';
import Artists from '../Artists/Artists';
import Recents from '../Recents/Recents';
import Search from '../Search/Search';
import Recomendations from '../Recomendations/Recomendations'

const CenterSection = () => {
	return (
		<div >
			<Search />
			<div className='m-10 text-white h-[80vh] overflow-y-scroll'>
				<Artists />	
				<Recents />	
				<Recomendations />
			</div>
			
			
			
		</div>
	);
};

export default CenterSection;
