import React, { useState } from 'react';

import ListFAQ from '../ListFAQ/ListFAQ';



const FAQ = () => {

	const [item] = useState([
		{
			id:1,
			text:"¿A qué puedo acceder si no estoy suscrito?",
			content:"Si no estás suscrito solo podrás acceder a la plataforma visualmente. Para escuchar musica y crear contenido, debes registrarte"
		},{
			id:2,
			text:"¿Cual es el precio de la suscripción?",
			content:"La plataforma es totalmente gratuita como usuario y como artista."
		},{
			id:3,
			text:"¿Tiene costo descargar playlist?",
			content:"Todas las playlist públicas serás gratuitas."
		},{
			id:4,
			text:"¿Puedo cancelar cuando quiera?",
			content:"Por supuesto. Podrás cancelar la suscripción cuando desees."
		},
		{
			id:5,
			text:"¿Puéden entrar más personas a la cuenta?",
			content:"No. Cada cuenta es para un usuario."
		}
	])

	const [isActive, setIsActive] = useState(null)

	const handleInformation = (position) => {
		if (isActive === position) {
			setIsActive(null)
		} else {
			setIsActive(position)
		}
	}


	return (
		<div className='md:w-1/2 mt-10 md:mt-0  flex flex-col justify-between'>
			<h1 className='text-white mt-20 sm:mt-0 font-extrabold text-[1.5rem] 2xl:text-title mb-8'>PREGUNTAS FRECUENTES</h1>
			<div className='flex flex-col justify-between h-[15rem]'>
				{item.map((list)=>{
					return (
					<ListFAQ 
					key={list.id}
					list={list}
					isActive={isActive}
					handleInformation={handleInformation}
					/>
					)
				})}

			</div>
		</div>
	);
};

export default FAQ;
