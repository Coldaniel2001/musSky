import React from 'react'

const SearchForPhone = () => {
  return (
    <div className='w-full xl:flex   '>
		<div className="w-[90%] xl:hidden  ml-10 pr-20">
			<input type="text" className="w-full py-2 pl-10 pr-10 bg-white rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500" placeholder="Artistas, Música, PlayLists, Albums..." />
			<div className="absolute top-0 left-0 mt-2 ml-3">
				<i className="fas fa-search text-gray-400"></i>
			</div>
		</div>
    </div>
  )
}

export default SearchForPhone