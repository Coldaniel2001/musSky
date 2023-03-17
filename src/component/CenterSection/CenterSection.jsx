import React from 'react';
import Artists from '../Artists/Artists';
import Recents from '../Recents/Recents';
import Recomendations from '../Recomendations/Recomendations';
import Search from '../Search/Search';

const CenterSection = () => {
	return (
		<div >
			<Search />
			<div className='m-10 text-white h-full overflow-y-scroll'>
				<Artists />	
				<Recents />	
				<Recomendations />
			</div>
			
			
			
		</div>
	);
};

export default CenterSection;
