import React from 'react';
import Button from '../Button/Button';

const ContactUs = () => {
	
	return (
		<div className='flex flex-col pb-28'>
			<h2 className='text-white font-extrabold text-[1.5rem] md:mt-10 lg:mt-0 2xl:text-title'>EN QUÉ PODEMOS AYUDARTE</h2>
			<span className='text-detailsGray'>En caso de algun problema con la app puedes ponerte en contacto con nosotros</span>
			<textarea className='bg-mainPurple text-white h-[8rem] bg-opacity-[40%] rounded mb-5'></textarea>
			<div className='flex justify-end'>
				<Button value={'Enviar'} classButton={'bg-btnColor sm:mx-10 h-[2rem] sm:mx-0 px-3 rounded'}/>
			</div>
		</div>
	);
};

export default ContactUs;
