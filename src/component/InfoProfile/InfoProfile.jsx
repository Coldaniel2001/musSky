import React from 'react';

import Button from '../Button/Button';


import { useAuth0 } from "@auth0/auth0-react"

const InfoProfile = () => {

	const { isLoading, user } = useAuth0()

	if(isLoading){
		return <span>...Loading</span>
	  }

	return (
		<>
			<div className='flex flex-col justify-between '>
				<span className='text-white font-extrabold text-[2.5rem] mt-10 mb-5'>MI CUENTA</span>
				<h2 className='text-white font-extrabold text-[1.5rem] 2xl:text-title mb-8'>INFORMACIÓN</h2>
			</div>
			<div className='sm:flex justify-center '>
				<div className='2xl:flex 2xl:justify-between items-center w-[95%] -mb-8'>
					<div className='flex 2xl:w-1/6 flex-col items-center justify-around h-[12rem] pb-5 sm:border-b border-gray-600 2xl:border-transparent'>
						<img className='w-[10rem]' src={user?user.picture:""} alt="add-profile" />
						<span className='text-xl font-semibold'>{user?user.nickname:""}</span>
					</div>
					<div className='sm:flex 2xl:w-5/6  justify-between 2xl:ml-10 mt-5'>
						<div className='flex sm:flex-col sm:justify-around sm:h-[6rem]'>
							<span className='text-white w-[45%] sm:w-full font-semibold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]'>NOMBRE</span>
							<span className='text-detailsGray w-[35%] sm:w-full text-lg ml-10 sm:ml-0'>{user?user.given_name:""}</span>
						</div>
						<div className='flex sm:flex-col sm:justify-around sm:h-[6rem]'>
							<span className='text-white w-[45%] sm:w-full font-semibold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]'>APELLIDOS</span>
							<span className='text-detailsGray  w-[35%] sm:w-full text-lg ml-10 sm:ml-0'>{user?user.family_name:""}</span>
						</div>
						<div className='flex sm:flex-col sm:justify-around sm:h-[6rem]'>
							<span className='text-white w-[45%] sm:w-full font-semibold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]'>EMAIL</span>
							<span className='text-detailsGray w-[35%] sm:w-full text-lg ml-10 sm:ml-0'>{user?user.email:""}</span>
						</div>
						<div className='flex sm:flex-col sm:justify-around sm:h-[6rem]'>
							<span className='text-white w-[45%] sm:w-full font-semibold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]'>FECHA SUBSCRIPCIÓN</span>
							<span className='text-detailsGray w-[35%] sm:w-full text-lg ml-10 sm:ml-0'>{user?user.updated_at:""}</span>
						</div>
					</div>
				</div>
			</div>
						<div className='mt-12 flex justify-end 2xl:flex 2xl:justify-end 2xl:mb-4'>
							<Button value={'Cambiar'} classButton={'bg-[#7C8BBF] mb-10 sm:mb-0 sm:mx-10 h-[2rem] sm:mx-0 px-3 rounded'} />
						</div>

		</>
	)
};

export default InfoProfile;
