import React, { useContext, useState } from 'react';

import arrowDown from '../../assets/images/icons/arrow-down.png'

import { useAuth0 } from "@auth0/auth0-react"
import UserContext from '../../context/UserContext';
import user from "../../assets/images/icons/user.png";


const Search = () => {
	const [showModal, setShowModal] = useState(false);
	const {userLogged} = useContext(UserContext)

	const toggleModal = () => {

		setShowModal(!showModal);
	}
	const { logout } = useAuth0()
	const {  loginWithRedirect } = useAuth0()


	return (
		<>
			<div className='hidden xl:flex mr-10 '>
				<div className="hidden w-[80%] lg:relative lg:block lg:mt-10 ml-10">
					<input type="text" className="w-3/4 py-2 pl-10 pr-4 bg-white rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500" placeholder="Artistas, Música, PlayLists, Albums..." />
					<div className="absolute top-0 left-0 mt-2 ml-3">
						<i className="fas fa-search text-gray-400"></i>
					</div>
				</div>
				<div className='flex flex-col items-end w-[20%]  '>

					{userLogged?<div className="bg-[#212121] w-[240px] mt-8 flex rounded-lg  truncate" onClick={() => toggleModal(true)}>
						<img className='w-10 h-10 rounded-full my-2 ml-3' src={userLogged?.picture} alt="img-profile" />
						<div className='w-full flex justify-between mr-3'>
							<p className='text-white my-auto ml-3'>{userLogged?.nickname}</p>
							<img className='w-3 h-2 flex justify-end my-auto' src={arrowDown} alt="arrow" />
						</div>
						{
							showModal &&
							<div className='w-[14rem]  bg-white  hover:opacity-100 float-right  flex justify-center flex-col absolute mt-[3rem] ml-[-3rem] rounded-md text-black '>
								<p className=' hover:bg-[#7239e526] pl-2 cursor-pointer rounded'>Mi cuenta</p>
      							<p className=' hover:bg-[#7239e526] pl-2 cursor-pointer rounded'>Ajustes</p>
     							<p onClick={()=>logout({logoutParams:{returnTo: window.location.origin + '/home'}})} className='hover:bg-[#7239e526] pl-2 cursor-pointer rounded'>Salir</p>
							</div>

						}
					</div>:
					<>
                    <div className="bg-green-600 w-[240px] mt-8 flex rounded-lg  truncate hover:bg-[#7339E5] cursor-pointer" onClick={() => loginWithRedirect()}>
						<img className='w-10 h-10 rounded-full my-2 ml-3' src={user} alt="img-profile" />
						<div className='w-full flex justify-between mr-3'>
							<p className='text-white my-auto ml-3'>Inicia Sesión</p>
						</div>

                     </div>

                   </>}

				</div>
			</div>
		</>

	)
};

export default Search;
