import React, { useState } from 'react';

import arrowDown from '../../assets/images/icons/arrow-down.png'
import arrowTop from '../../assets/images/icons/arrow-top.png'

const FAQ = () => {
	const [isActive, setIsActive] = useState(null)


	const handleInformation = (position) => {
		if (isActive === position) {
			setIsActive(null)
		} else {
			setIsActive(position)
		}
	}


	return (
		<div className='w-[50%]'>
			<h1 className='text-white font-bold text-[2rem]'>PREGUNTAS FRECUENTES</h1>
			<div className='flex flex-col justify-between h-[15rem]'>
				<div className='flex justify-between' onClick={() => handleInformation(1)}>
					<span className='text-white font-semibold'>¿A qué puedo acceder si no estoy suscrito?</span> 
					{isActive === 1 ? <img src={arrowTop} alt="arrow-top" /> : <img src={arrowDown} alt="arrow-down" />}
				</div>
				{isActive === 1 ? <div><span className='text-white'>Victor mariquitaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span></div>:null}
				<div className='flex justify-between' onClick={() => handleInformation(2)}>
					<span className='text-white font-semibold'>¿Cual es el precio de la suscripción?</span>
					{isActive === 2 ? <img src={arrowTop} alt="arrow-top" /> : <img src={arrowDown} alt="arrow-down" />}
				</div>
				{isActive === 2 ? <div><span className='text-white'>Victor mariquita 2</span></div>:null}
				<div className='flex justify-between' onClick={() => handleInformation(3)}>
					<span className='text-white font-semibold'>¿Descargar mis playList tienen costo adicional?</span>
					{isActive === 3 ? <img src={arrowTop} alt="arrow-top" /> : <img src={arrowDown} alt="arrow-down" />}
				</div>
				{isActive === 3 ? <div><span className='text-white'>Victor mariquita 3</span></div>:null}
				<div className='flex justify-between' onClick={() => handleInformation(4)}>
					<span className='text-white font-semibold'>¿Puedo cancelar mi suscripción cuando quiera?</span>
					{isActive === 4 ? <img src={arrowTop} alt="arrow-top" /> : <img src={arrowDown} alt="arrow-down" />}
				</div>
					{isActive === 4 ? <div><span className='text-white'>Victor mariquita 4</span></div>:null}
				<div className='flex justify-between' onClick={() => handleInformation(5)}>
					<span className='text-white font-semibold'>¿Pueden acceder más personas a mi suscripción</span>
					{isActive === 5 ? <img src={arrowTop} alt="arrow-top" /> : <img src={arrowDown} alt="arrow-down" />}
				</div>
					{isActive === 5 ? <div><span className='text-white'>Victor mariquita 5</span></div>:null}
			</div>
		</div>
	);
};

export default FAQ;
