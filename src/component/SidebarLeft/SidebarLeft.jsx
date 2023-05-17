import React, { useContext} from 'react';
import logo from '../../assets/images/icons/logo.png'
import iconHome from '../../assets/images/icons/icon-home.png'
import iconGenders from '../../assets/images/icons/icon-genero.png'
import iconPlayList from '../../assets/images/icons/icon-playlist.png'
import iconLiked from '../../assets/images/icons/icon-liked.png'
import iconAccount from '../../assets/images/icons/icon-account.png'
import iconHomeViolet from '../../assets/images/icons/homeViolet.png'
import iconGendersViolet from '../../assets/images/icons/GenreViolet.png'
import iconPlayListViolet from '../../assets/images/icons/MYViolet.png'
import iconLikedViolet from '../../assets/images/icons/bytesize_heartViolet.png'
import iconAccountViolet from '../../assets/images/icons/codicon_accountViolet.png'
import { NavLink,useLocation, Link } from 'react-router-dom';
import mySong from '../../assets/images/icons/mySong.png'


import SongContext from '../../context/song/SongContext';
import UserContext from '../../context/UserContext';




const SidebarLeft = () => {
	const {userLogged} = useContext(UserContext)
	const location = useLocation();
	const { onePlayListSong, setCurrentSong, allPlaylistSong, setAllPlaylistSong } = useContext(SongContext)

	const artist = userLogged?.rol === "artist" 

	return (
		<div>
			<NavLink to={"/home"}>
			<div className='text-white flex flex-col items-center h-[6vh]'>
				<img className='h-full ' src={logo} alt="logo" />
			</div>
			</NavLink>
			<div className='text-white mt-[3vh] md:hidden lg:block gap-5'>
				<NavLink to={"/home"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple' : "grid border-l-[0.5rem] border-transparent"}>
					<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
						<img className='lg:w-12 xl:w-12 col-span-2' src={ location.pathname === '/home' ? iconHomeViolet : iconHome}  alt="icon" />
						<p className={`lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold ${location.pathname === "/home" ? 'text-mainPurple' : ''}`}>
  Home
</p>

					</div>
				</NavLink>
				<NavLink to={"/genders"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple mt-[2vh]' : "grid border-l-[0.5rem] border-transparent mt-[2vh]"}>
					<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
						<img className='lg:w-12 xl:w-12 col-span-2' src={ location.pathname === '/genders' ? iconGendersViolet : iconGenders} alt="icon" />
						<p className={`lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold ${location.pathname === "/genders" ? 'text-mainPurple' : ''}`}>Géneros</p>
					</div>
				</NavLink>
				<NavLink to={"/real-playlist"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple mt-[2vh]' : "grid border-l-[0.5rem] border-transparent mt-[2vh]"}>
				<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
					<img className='lg:w-10 xl:w-12 col-span-2' src={location.pathname === "/real-playlist" ? iconPlayListViolet : iconPlayList} alt="icon" />
					<p className={`lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold ${location.pathname === "/real-playlist" ? 'text-mainPurple' : ''}`}>PlayList</p>
				</div>
				</NavLink>
				<NavLink to={"/individual-playlist"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple mt-[2vh]' : "grid border-l-[0.5rem] border-transparent mt-[2vh]"}>
					<div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
						<img className='lg:w-10 xl:w-12 col-span-2' src={location.pathname === "/individual-playlist" ?iconLikedViolet : iconLiked} alt="icon" />
						<p className={`lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold ${location.pathname === "/individual-playlist" ? 'text-mainPurple' : ''}`}>Me gusta</p>
					</div>
				</NavLink>
				{
					artist &&	
					<NavLink to={"/mis-canciones"} className={({ isActive }) => isActive ? 'grid  mt-[2vh] border-l-[0.5rem] border-mainPurple' : 'grid border-l-[0.5rem] border-transparent mt-[2vh]'}>
						<div className=' xl:grid xl:grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[5vh]  '>
							<img className='lg:w-10 xl:w-12 col-span-2' src={mySong} alt="home icon" />
							<p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Mis canciones</p>
						</div>
					</NavLink>
				}
				<NavLink to={"/profile"} className={({ isActive }) => isActive ? 'grid  mt-[2vh] border-l-[0.5rem] border-mainPurple' : 'grid border-l-[0.5rem] border-transparent mt-[2vh]'}>
					<div className=' xl:grid xl:grid-cols-8 lg:flex lg:justify-center lg:pl-0  items-center xl:pl-6 h-[5vh]  '>
						<img className='lg:w-10 xl:w-12 col-span-2' src={location.pathname === "/profile" ? iconAccountViolet : iconAccount} alt="icon" />
						<p className={`lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold ${location.pathname === "/profile" ? 'text-mainPurple' : ''}`}>Mi perfil</p>
					</div>
				</NavLink>
			</div>
			
			<Link to='/reproduction-live' >
			{
				artist ?
				Object.entries(onePlayListSong).length !== 0 &&
					<div className='w-4/6 mx-auto text-red rounded '>
						<div className=' mt-[4vh] rounded w-full mx-auto'>
							{/* <h2 className='text-gray-300 lg:text-[1.2rem] '>Está sonando</h2> */}
							<div className='w-full flex justify-center pb-4'>
								<img className='rounded w-full h-[18vh]' src={onePlayListSong.picture} alt="" />
							</div>
							<p className=' text-white font-bold lg:text-[2vh] text-[2rem] w-[80%] truncate'>{onePlayListSong.nameSong}</p>
							<p className='text-gray-500 text-[1rem] truncate'>{onePlayListSong.nameArtist}</p>
						</div>
					</div> :
				Object.entries(onePlayListSong).length !== 0 &&
					<div className='w-4/6 mx-auto text-red rounded '>
						<div className=' mt-[5vh] rounded w-full mx-auto'>
							{/* <h2 className='text-gray-300 lg:text-[1.2rem] '>Está sonando</h2> */}
							<div className='w-full flex justify-center pb-4'>
								<img className='rounded w-full h-[23vh]' src={onePlayListSong.picture} alt="" />
							</div>
							<p className=' text-white font-bold lg:text-[2vh] text-[2rem] w-[80%] truncate'>{onePlayListSong.nameArtist}</p>
							<p className='text-gray-500 text-[1.5vh] truncate'>{onePlayListSong.nameSong}</p>
						</div>
					</div>	
					
				
			}
			</Link>

			
			{/* <div className='w-full flex justify-center'>
				<img className='w-4/5 mt-10 flex' src={womenSidebar} alt="" />

			</div> */}

		</div >



	)

};

export default SidebarLeft;
