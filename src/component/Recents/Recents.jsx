import React, { useContext } from 'react';
import RecentSong from '../RecentSong/RecentSong';

import SongContext from '../../context/song/SongContext';


const Recents = () => {
	const { recentSong } = useContext(SongContext)
	console.log(recentSong)
	return (
		<>
			{recentSong.length !== 0 ?
				<div>
					<h2 className='text-white text-[2rem] mb-5 font-extrabold text-shadow-xl-white mt-10'>RECIENTES</h2>
					<div className='grid 3xl:grid-cols-2' >
						<RecentSong />
					</div>
				</div>
				: null
			}
		</>

	)
};

export default Recents;
