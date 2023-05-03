import React, { useContext } from 'react';
import logo from '../../assets/images/icons/logo.png'
import iconHome from '../../assets/images/icons/icon-home.png'
import iconGenero from '../../assets/images/icons/icon-genero.png'
import iconPlayList from '../../assets/images/icons/icon-playlist.png'
import iconLiked from '../../assets/images/icons/icon-liked.png'
import iconAccount from '../../assets/images/icons/icon-account.png'
import { NavLink } from 'react-router-dom';
import MusicPlayerContext from '../../context/MusicPlayer/MusicPlayerContext';


const SidebarLeft = () => {
	const { oneSong } = useContext(MusicPlayerContext)

	return (
		<div>
			<div className='text-white flex flex-col items-center h-[6vh]'>
				<img className='h-full ' src={logo} alt="logo" />
			</div>
			<div className='text-white mt-[3vh] md:hidden lg:block gap-5'>
				<NavLink to={"/home"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple' : "grid border-l-[0.5rem] border-transparent"}>
					<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
						<img className='lg:w-12 xl:w-12 col-span-2' src={iconHome} alt="home icon" />
						<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Home</p>
					</div>
				</NavLink>
				<NavLink to={"/genders"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple mt-[2vh]' : "grid border-l-[0.5rem] border-transparent mt-[2vh]"}>
				<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
					<img className='lg:w-12 xl:w-12 col-span-2' src={iconGenero} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Géneros</p>
				</div>
				</NavLink>
				
				<div className='xl:grid grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[5vh]  border-l-[0.5rem] border-transparent mt-[2vh]'>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconPlayList} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>PlayList</p>
				</div>
				<NavLink to={"/individual-playlist"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple mt-[2vh]' : "grid border-l-[0.5rem] border-transparent mt-[2vh]"}>
				<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
					<img className='lg:w-10 xl:w-12 col-span-2' src={iconLiked} alt="home icon" />
					<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Me gusta</p>
				</div>
				</NavLink>
				<NavLink to={"/profile"} className={({ isActive }) => isActive ? 'grid  mt-[2vh] border-l-[0.5rem] border-mainPurple' : 'grid border-l-[0.5rem] border-transparent mt-[2vh]'}>
					<div className=' xl:grid xl:grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[5vh]  '>
						<img className='lg:w-10 xl:w-12 col-span-2' src={iconAccount} alt="home icon" />
						<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Mi perfil</p>
					</div>
				</NavLink>
			</div>
			<div className='w-3/4 mx-auto text-red rounded '>
				<div className=' mt-[5vh] rounded w-full mx-auto'>
						{/* <h2 className='text-gray-300 lg:text-[1.2rem] '>Está sonando</h2> */}
						<div className='w-full flex justify-center pb-4'>
							<img className='rounded w-full h-[25vh]'  src={oneSong.thumbnail} alt="" />
						</div>
						<p className=' text-white font-bold lg:text-[2vh] text-[2rem] w-[80%]'>{oneSong.artist}</p>
       					 <p className='text-gray-500 text-[1.5vh]'>{oneSong.name}</p>
				</div>
			</div>
			{/* <div className='w-full flex justify-center'>
				<img className='w-4/5 mt-10 flex' src={womenSidebar} alt="" />

			</div> */}
			
		</div >



	)

};

export default SidebarLeft;
