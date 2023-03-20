import React from 'react';
import logo from '../../assets/images/icons/logo.png'
import iconHome from '../../assets/images/icons/icon-home.png'
import iconGenero from '../../assets/images/icons/icon-genero.png'
import iconPlayList from '../../assets/images/icons/icon-playlist.png'
import iconLiked from '../../assets/images/icons/icon-liked.png'
import iconAccount from '../../assets/images/icons/icon-account.png'
import MusicPlayed from '../MusicPlayed/MusicPlayed';

const SidebarLeft = () => {
	return (
		<div className=''>
			<div className='text-white flex flex-col items-center '>
				<img className='w-60' src={logo} alt="logo" />
			</div>
			<div className='text-white mt-14'>
				<div className='xl:grid grid-cols-5 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-[#7339E5]'>
					<img className='w-12 col-span-1' src={iconHome} alt="home icon" />
					<p className='text-[0.5rem] col-span-4 font-semibold sm:text-xs md:text-sm lg:text-lg 2xl:text-[1.5rem] '>Home</p>
				</div>
				<div className='xl:grid grid-cols-5 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='w-12' src={iconGenero} alt="home icon" />
					<p className='text-[0.5rem]  col-span-4 font-semibold sm:text-xs md:text-sm md:text-sm lg:text-lg 2xl:text-[1.5rem] '>Géneros</p>
				</div>
				<div className='xl:grid grid-cols-5 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='w-12' src={iconPlayList} alt="home icon" />
					<p className='text-[0.5rem]  col-span-4 font-semibold sm:text-xs md:text-sm lg:text-lg 2xl:text-[1.5rem] '>PlayList</p>
				</div>
				<div className='xl:grid grid-cols-5 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='w-12' src={iconLiked} alt="home icon" />
					<p className='text-[0.5rem]  col-span-4 font-semibold sm:text-xs md:text-sm lg:text-lg 2xl:text-[1.5rem] '>Me gusta</p>
				</div>
				<div className='xl:grid grid-cols-5 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='w-12' src={iconAccount} alt="home icon" />
					<p className='text-[0.5rem]  col-span-4 font-semibold sm:text-xs md:text-sm lg:text-lg 2xl:text-[1.5rem] '>Mi perfil</p>
				</div>
			</div>	
			<MusicPlayed />
		</div>

		
	)
	
};

export default SidebarLeft;
