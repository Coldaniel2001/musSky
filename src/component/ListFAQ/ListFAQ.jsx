import React, { useState } from 'react';

import arrowDown from '../../assets/images/icons/arrow-down.png'
import arrowTop from '../../assets/images/icons/arrow-top.png'

const ListFAQ = ({ list }) => {
	const [isActive, setIsActive] = useState(null)

	const handleInformation = (position) => {
		if (isActive === position) {
			setIsActive(null)
		} else {
			setIsActive(position)
		}
	}
	return (
		<>
			<div className='flex justify-between items-center' onClick={() => handleInformation(list.id)}>
				<span className='text-white font-semibold'>{list.text}</span>
				{isActive === list.id ? <img src={arrowTop} alt="arrow-top" className='w-5 h-5 xl:w6 xl:h-6' /> : <img src={arrowDown} alt="arrow-down" className='w-5 h-5 xl:w-6 xl:h-6' />}
			</div>
			{isActive === list.id ? <div><span className='text-detailsGray text-sm'>{list.content}</span></div> : null}
		</>

	);
};

export default ListFAQ;
