import React from 'react';
import ProfilePop from './ProfilePop';
import Top10 from './Top10';

const SidebarRight = ({artists}) => {
	return <>
	<ProfilePop/>
	<Top10 artists={artists}/>
	</>
};

export default SidebarRight;
