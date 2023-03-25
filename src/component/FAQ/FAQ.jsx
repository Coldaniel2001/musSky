import React, { useState } from 'react';

import ListFAQ from '../ListFAQ/ListFAQ';



const FAQ = () => {

	const [item] = useState([
		{
			id:1,
			text:"¿A qué puedo acceder si no estoy suscrito?",
			content:"Victor mariquitaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
		},{
			id:2,
			text:"¿Cual es el precio de la suscripción?",
			content:"Victor mariquita 2"
		},{
			id:3,
			text:"¿Tiene costo descargar playlist?",
			content:"Victor mariquita 3"
		},{
			id:4,
			text:"¿Puedo cancelar cuando quiera?",
			content:"Victor mariquita 4"
		},
		{
			id:5,
			text:"¿Puéden entrar más personas a la cuenta?",
			content:"Victor mariquita 5"
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
