import React from 'react';
import arrowDown from '../../assets/images/icons/arrow-down.png'
import user from '../../assets/images/user.jpg'

const Search = () => {
	return (
		<div className='hidden lg:flex '>
			<div className="hidden w-[100%] lg:relative lg:block lg:mt-10 ml-10">
				<input type="text" className="w-3/4 py-2 pl-10 pr-4 bg-white rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500" placeholder="Artistas, Música, PlayLists, Albums..."/>
				<div className="absolute top-0 left-0 mt-2 ml-3">
					<i className="fas fa-search text-gray-400"></i>
				</div>
			</div>
			<div className="bg-[#212121] w-1/4 mx-auto mt-8 flex rounded-lg mr-10 2xl:hidden">
				<img className='w-10 h-10 rounded-full my-2 ml-3' src={user} alt="" />
				<div className='w-full flex justify-between mr-3'>
					<p className='text-white my-auto ml-3'>María Perez</p>
					<img className='w-3 h-2 flex justify-end my-auto' src={arrowDown} alt="" />
				</div>
			</div>
		</div>

	)
};

export default Search;
