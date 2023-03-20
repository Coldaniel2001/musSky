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
		<div>
			<div className='text-white flex flex-col items-center'>
				<img className='w-60' src={logo} alt="logo" />
			</div>
			<div className='text-white mt-14 md:hidden lg:block'>
				<div className='grid grid-cols-8 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-[#7339E5]'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconHome} alt="home icon" />
					<p className='lg:text-[1rem] xl:text-[1.5rem] col-span-6 font-semibold'>Home</p>
				</div>
				<div className='grid grid-cols-8 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconGenero} alt="home icon" />
					<p className='lg:text-[1rem] xl:text-[1.5rem] col-span-4 font-semibold'>Géneros</p>
				</div>
				<div className='grid grid-cols-8 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconPlayList} alt="home icon" />
					<p className='lg:text-[1rem] xl:text-[1.5rem] col-span-4 font-semibold'>PlayList</p>
				</div>
				<div className='grid grid-cols-8 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconLiked} alt="home icon" />
					<p className='lg:text-[1rem] xl:text-[1.5rem] col-span-4 font-semibold'>Me gusta</p>
				</div>
				<div className='grid grid-cols-8 items-center pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconAccount} alt="home icon" />
					<p className='lg:text-[1rem] xl:text-[1.5rem] col-span-4 font-semibold'>Mi perfil</p>
				</div>
			</div>	
			<MusicPlayed />
		</div>

		
	)
	
};

export default SidebarLeft;
