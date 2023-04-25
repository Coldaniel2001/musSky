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
		<div >
			<div className='text-white flex flex-col items-center'>
				<img className='w-60' src={logo} alt="logo" />
			</div>
			<div className='text-white mt-14 md:hidden lg:block gap-5'>
				<NavLink to={"/"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple' : "grid border-l-[0.5rem] border-transparent"}>
					<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[3.5rem] '>
						<img className='lg:w-12 xl:w-12 col-span-2' src={iconHome} alt="home icon" />
						<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Home</p>
					</div>
				</NavLink>
				<NavLink to={"/genders"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple mt-5' : "grid border-l-[0.5rem] border-transparent mt-5"}>
				<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[3.5rem] '>
					<img className='lg:w-12 xl:w-12 col-span-2' src={iconGenero} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Géneros</p>
				</div>
				</NavLink>
				
				<div className='xl:grid grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[3.5rem]  border-l-[0.5rem] border-transparent mt-5'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconPlayList} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>PlayList</p>
				</div>
				<NavLink to={"/individual-playlist"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple mt-5' : "grid border-l-[0.5rem] border-transparent mt-5"}>
				<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[3.5rem] '>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconLiked} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Me gusta</p>
				</div>
				</NavLink>
				<NavLink to={"/profile"} className={({ isActive }) => isActive ? 'grid  mt-5 border-l-[0.5rem] border-mainPurple' : 'grid border-l-[0.5rem] border-transparent mt-5'}>
					<div className=' xl:grid xl:grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[3.5rem]  '>
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
