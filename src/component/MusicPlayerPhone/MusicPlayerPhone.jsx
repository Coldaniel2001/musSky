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
			<div className=' bg-[#1d1d1d] fixed bottom-0 w-full h-[12vh] sm:flex items-center'>
				<div className='sm:flex items-center w-full flex justify-center  '>
					<div className='w-[100%] sm:w-[40%] xl:hidden sm:flex justify-center '>
						<div className='mr-3 lg:mr-8 w-[50%] sm:w-[25%] rounded flex items-center justify-center ml-2'>
							<img className='rounded-xl ml-3 w-[60px] sm:w-[100%] 2xl:w-[80%] sm:mr-3' src={onePlayListSong.picture} alt={"img-music"} />
						</div>
						<div className='flex flex-col  w-[100%] sm:w-[50%] justify-center ml-5'>
							<span className='text-white text-bold lg:text-[1.3rem]  xl:text-[1.4rem] 2xl:text-[1.5rem]'>{onePlayListSong.nameArtist}</span>
							<span className='text-gray-500 text-bold text-[1rem]'>{onePlayListSong.nameSong}</span>
						</div>
					</div>

					<div className=' sm:mr-0 md:w-[68%] lg:w-5/6 bg-[#282828]  '>
						
							<AudioPlayer src={onePlayListSong.song} layout="stacked-reverse"
								autoPlay={false}
								customIcons={{
									// play: <img className="white" src={play} alt="play" />,
									// pause: <img className="w-7" src={pause} alt="pause" />,
									// next: <img className="w-7" src={next} alt="next" />,
									// previous: <img className="w-7" src={previous} alt="play" />,
									// forward: <img className="my-forward-icon" src={previous} alt="play" />,
									// rewind: <img className="my-forward-icon" src={previous} alt="play" />,
								}}
								
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
