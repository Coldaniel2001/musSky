import React from 'react';
import Button from '../Button/Button';

const ContactUs = () => {
	
	return (
		<div className='flex flex-col'>
			<h2 className='text-white font-bold text-title'>EN QUÉ PODEMOS AYUDARTE</h2>
			<span className='text-detailsGray'>En caso de algun problema con la app puedes ponerte en contacto con nosotros</span>
			<textarea className='bg-mainPurple text-white h-[8rem] bg-opacity-[40%] rounded mb-5'></textarea>
			<div className='flex justify-end'>
				<Button value={'Enviar'} classButton={'bg-btnColor text-white w-[10rem] h-[3rem] rounded-lg'}/>
			</div>
		</div>
	);
};

export default ContactUs;
