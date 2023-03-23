import React, { useContext } from 'react';

import Button from '../Button/Button';
import UserContext from '../../context/UserContext';

import addImageProfile from '../../assets/images/icons/addImageProfile.png'

const InfoProfile = () => {

	const { inputChange } = useContext(UserContext)

	return (
		<>
			<div className='flex flex-col justify-between '>
				<span className='text-white font-extrabold text-[2.5rem] mt-10 mb-5'>MI CUENTA</span>
				<h2 className='text-white font-bold text-title mb-8'>INFORMACIÓN</h2>
			</div>
			<div className='flex justify-center '>
				<div className='flex justify-between items-center w-[95%] -mb-8'>
					<div className='flex flex-col items-center justify-around h-[12rem]'>
						<img className='w-[10rem]' src={addImageProfile} alt="add-profile" />
						<span className='text-xl font-semibold'>{inputChange.username}</span>
					</div>
					<div className='flex flex-col justify-around h-[6rem]'>
						<span className='text-white font-semibold text-[1.2rem]'>NOMBRE</span>
						<span className='text-detailsGray  text-lg'>{inputChange.name}</span>
					</div>
					<div className='flex flex-col justify-around h-[6rem]'>
						<span className='text-white font-semibold text-[1.2rem]'>APELLIDOS</span>
						<span className='text-detailsGray  text-lg'>{inputChange.surname}</span>
					</div>
					<div className='flex flex-col justify-around h-[6rem]'>
						<span className='text-white font-semibold text-[1.2rem]'>CORREO ELECTRÓNICO</span>
						<span className='text-detailsGray  text-lg'>{inputChange.email}</span>
					</div>
					<div className='flex flex-col justify-around h-[6rem]'>
						<span className='text-white font-semibold text-[1.2rem]'>FECHA DE SUBSCRIPCIÓN</span>
						<span className='text-detailsGray text-lg'>{inputChange.date}</span>
					</div>
				</div>
			</div>
						<div className='flex justify-end mb-4'>
							<Button value={'Cambiar'} classButton={'bg-btnColor text-white w-[10rem] h-[3rem] rounded-lg'} />
						</div>

		</>
	)
};

export default InfoProfile;
