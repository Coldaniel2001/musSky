import React from 'react';
import Button from '../Button/Button';

const ContactUs = () => {
	
	return (
		<div className='flex flex-col justify-between h-[24rem]'>
			<h2 className='text-white font-bold text-[2rem]'>En qué podemos ayudarte</h2>
			<span className='text-[#A1A1A1]'>En caso de algun problema con la app puedes ponerte en contacto con nosotros</span>
			<textarea className='bg-mainPurple text-white h-[12rem] bg-opacity-[40%]'></textarea>
			<div className='flex justify-end'>
				<Button value={'Enviar'} classButton={'bg-[#7C8BBF] text-white w-[10rem] h-[3rem] rounded-lg'}/>
			</div>
		</div>
	);
};

export default ContactUs;
