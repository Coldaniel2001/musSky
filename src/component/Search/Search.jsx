import React from 'react';

const Search = () => {
	return (
		<div className="relative mt-10 ml-10">
			<input type="text" className="w-3/4 py-2 pl-10 pr-4 bg-white rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500" placeholder="Artistas, Música, PlayLists, Albums..."/>
			<div className="absolute top-0 left-0 mt-2 ml-3">
				<i className="fas fa-search text-gray-400"></i>
			</div>
		</div>
	)
};

export default Search;
