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

	


	return (
		<div className='w-[50%] h-[20rem] flex flex-col justify-between'>
			<h1 className='text-white font-bold text-title'>PREGUNTAS FRECUENTES</h1>
			<div className='flex flex-col justify-between h-[15rem]'>
				{item.map((list)=>{
					return (
					<ListFAQ 
					key={list.id}
					list={list}
					/>
					)
				})}

				{/* <div className='flex justify-between' onClick={() => handleInformation(1)}>
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
					{isActive === 5 ? <div><span className='text-white'>Victor mariquita 5</span></div>:null} */}
			</div>
		</div>
	);
};

export default FAQ;
