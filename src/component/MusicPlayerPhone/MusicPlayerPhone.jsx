import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import './MusicPlayerPhone.css'

import MusicPlayerContext from '../../context/MusicPlayer/MusicPlayerContext';

import play from '../../assets/images/icons/play.png'
import next from '../../assets/images/icons/next.png'
import previous from '../../assets/images/icons/previous.png'
import pause from '../../assets/images/icons/pause.png'

const MusicPlayerPhone = () => {
	const { allSong, oneSong, currentSong, setCurrentSong } = useContext(MusicPlayerContext)

	const handlePrevious = () => {
		if (allSong[0].id === currentSong) {
			setCurrentSong(allSong[0].id)
		} else {
			setCurrentSong(currentSong - 1)
		}
	}

	const handleNext = () => {
		if (allSong.length === currentSong) {
			setCurrentSong(allSong[0].id)
		} else {
			setCurrentSong(currentSong + 1)
		}
	}



	return (
		<>
			<div className='bg-[#5A2AB9] '>
				<div className='flex justify-around content-center items-center'>
					<img className=' h-[2.5rem] w-[3rem] rounded-[5rem]' src={oneSong.thumbnail} alt={"img-music"} />
					<div className='flex flex-col'>
						<span className='text-white text-bold text-[1.4rem]'>{oneSong.name}</span>
						<span className='text-white text-bold text-[0.6rem]'>{oneSong.artist}</span>
					</div>

					<div className='h-[7.5rem]'>
						<AudioPlayer className='flex justify-center'
							autoPlay={false}
							customIcons={{
								play: <img className="w-7" src={play} alt="play" />,
								pause: <img className="w-7" src={pause} alt="play" />,
								next: <img className="w-7" src={next} alt="play" />,
								previous: <img className="w-7" src={previous} alt="play" />,
								forward: <img className="my-forward-icon" src={previous} alt="play" />,
								rewind: <img className="my-forward-icon" src={previous} alt="play" />,
							}}
							src={oneSong.url}
							showSkipControls={true}
							onClickNext={(e) => handleNext()}
							onClickPrevious={(e) => handlePrevious()}
						/>
					</div>
				</div>
			</div>


		</>
	)
};

export default MusicPlayerPhone;
