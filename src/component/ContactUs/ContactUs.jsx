import React from 'react';
import Button from '../Button/Button';

const ContactUs = () => {
	
	return (
		<div className='flex flex-col'>
			<h2 className='text-white font-bold text-title'>En qué podemos ayudarte</h2>
			<span className='text-detailsGray'>En caso de algun problema con la app puedes ponerte en contacto con nosotros</span>
			<textarea className='bg-mainPurple text-white h-[8rem] bg-opacity-[40%]'></textarea>
			<div className='flex justify-end'>
				<Button value={'Enviar'} classButton={'bg-btnColor text-white w-[10rem] h-[3rem] rounded-lg'}/>
			</div>
		</div>
	);
};

export default ContactUs;
