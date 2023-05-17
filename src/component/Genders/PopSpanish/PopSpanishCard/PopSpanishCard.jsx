import React, { useContext, useState } from 'react'
import playWhite from '../../../../assets/images/icons/play-white.png'
import addList from '../../../../assets/images/icons/add-list.png'
import seeMore from '../../../../assets/images/icons/see-more.png'
import purpleHeart from '../../../../assets/images/icons/purple-heart.png'
import SongContext from '../../../../context/song/SongContext'


function PopSpanishCard({nameSong,picture,_id,nameArtist,song}) {
  const { dataSong, handleLikes, handleOpenSong } = useContext(SongContext)
  const[hovered, setHovered] = useState(false)
  return (

    <div key={_id} className='relative flex justify-end items-end hover:scale-110 transition duration-500 rounded cursor-pointer'>

        <img src={picture} alt='' className='w-[5rem] rounded z-50'/>
        <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-evenly'>
      <p className='text-white'>{nameArtist}</p>
      <p className='text-white'>{nameSong}</p>
      <img  className='w-[3%] cursor-pointer' src={playWhite} alt="" />
      <img  className='w-[2%] mx-5 cursor-pointer' src={purpleHeart} alt="" />
      <img className='w-[3%] mr-5 cursor-pointer absolute' src={addList} alt="" />
       <img className='w-[2%] cursor-pointer' src={seeMore} alt="" />
           {/* <div key={_id} className=' relative flex justify-end items-end hover:scale-110 transition duration-500 rounded cursor-pointer' onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}>
        <img className='rounded w-[250px] h-[170px]' src={picture} alt="name" />
        <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
            <h2 className='mr-2 text-white text-xl '>{nameSong}</h2> */}
        {/* </div> */}
    </div>
</div>
  
   
  )
}


export default PopSpanishCard
// import React, { useContext, useState } from 'react'
// import leiva from '../../../../assets/images/genders.artists/leiva.png'

// const PopSpanishCard = ({playlist}) => {
//     const[hovered, setHovered] = useState(false)
//     console.log(hovered)

  
//   return (

//     <div className=' relative flex justify-end items-end hover:scale-110 transition duration-500 rounded cursor-pointer' onMouseEnter={()=>setHovered(true)}
//     onMouseLeave={()=>setHovered(false)}>
//         <img className='rounded w-[250px] h-[170px]' src={leiva} alt="name" />
//         <div className='bg-black bg-opacity-60 w-full h-10 absolute flex items-center justify-end'>
//             <h2 className='mr-2 text-white text-xl '>uno</h2>
//         </div>
//     </div>
//   )
// }

// export default PopSpanishCard