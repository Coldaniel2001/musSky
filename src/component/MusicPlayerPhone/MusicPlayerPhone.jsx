import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import './MusicPlayerPhone.css'

// import MusicPlayerContext from '../../context/MusicPlayer/MusicPlayerContext';
import SongContext from '../../context/song/SongContext';

const MusicPlayerPhone = () => {
	// const { allSong, oneSong, currentSong, setCurrentSong } = useContext(MusicPlayerContext)
	const { onePlayListSong, setCurrentSong, allPlaylistSong, setAllPlaylistSong } = useContext(SongContext)



	const handlePrevious = () => {
		// if (allSong[0].id === currentSong) {
		// 	setCurrentSong(allSong[0].id)
		// } else {
		// 	setCurrentSong(currentSong - 1)
		// }
	}

	const handleNext = () => {
		// if (allSong.length === currentSong) {
		// 	setCurrentSong(allSong[0].id)
		// } else {
		// 	setCurrentSong(currentSong + 1)
		// }
	}


	return (
		<>
		{Object.entries(onePlayListSong).length!==0 &&
			<div className=' bg-[#1d1d1d] fixed bottom-0 w-full mb-20 xl:mb-0  sm:flex items-center z-10'>
				<div className='sm:flex items-center w-full justify-center  '>
					<div className='w-[100%] sm:w-[45%] xl:hidden flex justify-center py-2 gap-5 border-b border-gray-800   '>
						<div className=' lg:mr-8 w-[40%] sm:w-[25%] rounded flex items-center justify-end  '>
							<img className='rounded  w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] 2xl:w-[80%] sm:mr-3' src={onePlayListSong.picture} alt={"img-music"} />
						</div>
						<div className='flex flex-col  w-[55%] sm:w-[50%] justify-left '>
							<span className='text-white text-bold text-[1.4rem] lg:text-[1.3rem]  xl:text-[1.4rem] 2xl:text-[1.5rem]'>{onePlayListSong.nameArtist}</span>
							<span className='text-gray-500 text-bold text-[1rem] truncate'>{onePlayListSong.nameSong}</span>
						</div>
					</div>

					<div className=' sm:mr-0 md:w-[68%] lg:w-5/6 bg-[#282828]  '>
						
							<AudioPlayer src={onePlayListSong.song} layout="stacked-reverse"
								autoPlay={true}
								showSkipControls={true}
								onClickNext={(e) => handleNext()}
								onClickPrevious={(e) => handlePrevious()}
							/>
						
					</div>
				</div>
			</div>
}

		</>
	)
};

export default MusicPlayerPhone;
