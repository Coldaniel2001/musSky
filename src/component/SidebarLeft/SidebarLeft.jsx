import React from 'react';
import logo from '../../assets/images/icons/logo.png'
import iconHome from '../../assets/images/icons/icon-home.png'
import iconGenero from '../../assets/images/icons/icon-genero.png'
import iconPlayList from '../../assets/images/icons/icon-playlist.png'
import iconLiked from '../../assets/images/icons/icon-liked.png'
import iconAccount from '../../assets/images/icons/icon-account.png'
import MusicPlayed from '../MusicPlayed/MusicPlayed';
import { NavLink } from 'react-router-dom';

const SidebarLeft = () => {
	return (
		<div>
			<div className='text-white flex flex-col items-center'>
				<img className='w-60' src={logo} alt="logo" />
			</div>
			<div className='text-white mt-14 md:hidden lg:block'>
			<NavLink to={"/"} className={({ isActive }) => isActive ? '  ' : ''}>
				<div className='xl:grid grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[3.5rem]  border-l-[0.5rem] border-[#7339E5]'>
					<img className='lg:w-12 xl:w-12 col-span-2' src={iconHome} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-6 font-semibold'>Home</p>
				</div>
			</NavLink>
				<div className='xl:grid grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='lg:w-12 xl:w-12 col-span-2' src={iconGenero} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Géneros</p>
				</div>
				<div className='xl:grid grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconPlayList} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>PlayList</p>
				</div>
				<div className='xl:grid xl:grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconLiked} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Me gusta</p>
				</div>
				<NavLink to={"/profile"} className={({ isActive }) => isActive ? '  ' : ''}>
					<div className='xl:grid xl:grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[3.5rem] border-l-[0.5rem] border-mainPurple mt-5'>
						<img className='lg:w-10 xl:w-12 col-span-2' src={iconAccount} alt="home icon" />
						<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Mi perfil</p>
					</div>
				</NavLink>
			</div>
			<MusicPlayed />
		</div >



	)

};

export default SidebarLeft;
