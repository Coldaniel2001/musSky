import React from 'react';

const Button = ({ type, value, classButton }) => {
return (
	<>
	<button className={classButton} type={type}>{value}</button>
	</>
)
};

export default Button;
