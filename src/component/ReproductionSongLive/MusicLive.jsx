
import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SongContext from '../../context/song/SongContext';

import './MusicLive.css'


const MusicLive = () => {

	const { onePlayListSong } = useContext(SongContext)





	return (
		<>

			<div className=' fixed bottom-0 xl:static w-full bg-transparent mt-10 mb-20 xl:mb-0  sm:flex items-center z-10'>
				<div className='sm:flex items-center w-full justify-center  '>
					<div className=' sm:mr-0 w-[100%] xl:w-5/6 bg-[#282828] xl:rounded-2xl  '>
							<AudioPlayer src={onePlayListSong.song} layout="stacked-reverse"
								autoPlay={true}
								showSkipControls={true}
								
							/>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default MusicLive