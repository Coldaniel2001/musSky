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
			<div className='flex justify-between' onClick={() => handleInformation(list.id)}>
				<span className='text-white font-semibold'>{list.text}</span>
				{isActive === list.id ? <img src={arrowTop} alt="arrow-top" /> : <img src={arrowDown} alt="arrow-down" />}
			</div>
			{isActive === list.id ? <div><span className='text-detailsGray text-sm'>{list.content}</span></div> : null}
		</>

	);
};

export default ListFAQ;
