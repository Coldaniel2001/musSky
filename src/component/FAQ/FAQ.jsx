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
			text:"¿Descargar mis playList tienen costo adicional?",
			content:"Victor mariquita 3"
		},{
			id:4,
			text:"¿Puedo cancelar mi suscripción cuando quiera?",
			content:"Victor mariquita 4"
		},
		{
			id:5,
			text:"¿Pueden acceder más personas a mi suscripción?",
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
		<div className='w-[50%] h-[20rem] flex flex-col justify-between'>
			<h1 className='text-white font-bold text-title'>PREGUNTAS FRECUENTES</h1>
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
