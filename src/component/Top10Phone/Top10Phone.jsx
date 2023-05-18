import React, { useContext, useEffect, useState } from 'react'
// import rihanna from '../../assets/images/rihanna.png'


import logo from '../../assets/images/icons/logo.png'
import Top10Card from './Top10Card/Top10Card'
import SongContext from '../../context/song/SongContext'
import To10CardPhone from './Top10Card/To10CardPhone'
// import melendi from '../../assets/images/melendi.jpg'
// import shakira from '../../assets/images/shakira.jpg'

const Top10Phone = () => {

  const [activeDropdown, setActiveDropdown] = useState(null)
  const {dataSong} = useContext(SongContext)

const top10SongByLiked = dataSong.sort((a, b) => (a.likedBy?.length > b.likedBy?.length ? -1 : a.likedBy?.length < b.likedBy?.length ? 1 : 0)).slice(0,10)



  return (


  <div className='pt-10 xl:hidden lg:mx-10'>

  <img className='hidden mx-auto pt-6' src={logo} alt="" />
  <p className='mt-10 md:mt-12 ml-5 lg:ml-0 text-[2rem] font-extrabold mb-5 text-white 2xl:hidden'>TOP 10</p>
  <div className='bg-black mx-5 rounded-md text-white lg:mb-10'>
    <div className="flex overflow-x-scroll w-full whitespace-no-wrap gap-5 ">

  {
    top10SongByLiked.map((song) => {
      const isDropdownActive = activeDropdown === song._id
        return (
          
            <To10CardPhone key={song._id} song={song} isDropdownActive={isDropdownActive} setActiveDropdown={setActiveDropdown} activeDropdown={activeDropdown} />
        )
        })
        }
    </div>
  </div>
</div>

 
 
  )
}

export default Top10Phone