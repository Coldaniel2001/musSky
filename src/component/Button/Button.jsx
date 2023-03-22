import React from 'react';

const Button = ({ type=false, value=null, classButton=null }) => {
return (
	<>
	<button className={classButton} type={type}>{value}</button>
	</>
)
};

export default Button;
