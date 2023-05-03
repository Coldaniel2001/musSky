import React from 'react';

const Button = ({ type=false, value=null, classButton=null, handleSubmit }) => {
return (
	<>
	<button onClick={handleSubmit} className={classButton} type={type}>{value} </button>
	</>
)
};

export default Button;
