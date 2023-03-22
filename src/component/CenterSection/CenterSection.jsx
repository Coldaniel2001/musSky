import React from 'react';
import Artists from '../Artists/Artists';
import Recents from '../Recents/Recents';
import Search from '../Search/Search';
import Recomendations from '../Recomendations/Recomendations'
import Top10Phone from '../Top10Phone/Top10Phone';

const CenterSection = () => {
	return (
		<div >
			<Search />
			<div className='mx-3 lg:ml-10 lg:m-10 text-white lg:h-[80vh] lg:overflow-y-scroll lg:scrollbar-hide'>
				<div className='hidden lg:block 2xl:hidden'>
					<Top10Phone />
				</div>
				<Artists />	
				<Recents />	
				<Recomendations />
			</div>
			
			
			
		</div>
	);
};

export default CenterSection;
