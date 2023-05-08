import React, { useContext, useState } from 'react'
import beatles from '../../assets/images/beatles.jpg'
import antonioJose from '../../assets/images/antonio-jose-1.jpg'
import melendi from '../../assets/images/melendi.jpg'
import fito from '../../assets/images/fito.jpg'
import shakira from '../../assets/images/shakira.jpg'
import lodv from '../../assets/images/lodvg.jpg'
import estopa from '../../assets/images/estopa.jpg'
import UserContext from '../../context/UserContext'

const ArtistModeAdmin = () => {
    const [hovered, setHovered] = useState(false);
    const {dataUsers} = useContext(UserContext)
    const [showArtist, setshowArtist] = useState(true)

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9   mx-[8vh]  justify-center gap-6 h-[70vh] overflow-y-scroll scrollbar-hide  '>
            {
                dataUsers.map((user) => {
                return (
                // !hovered ?
                <div className='h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full cursor-pointer w-[160px] h-[160px] border-2 hover:border-4 hover:border-green-400 ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={user.picture} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>{user.nickname}</p>
                </div> 
                // <div className=' h-[14vh] flex flex-col items-center mt-[5vh]   '>
                //     <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                //         onMouseLeave={() => setHovered(false)} >
                //         <img className='rounded-full  opacity-50 border-4 border-white-900 w-[160px] h-[160px]  ' src={user.picture} alt="" />
                //         <div className='absolute inset-0 flex items-center justify-center'>
                //             <p className='text-gray-400 text-2xl font-bold'>Ver mas</p>
                //         </div>
                //     </div>
                // <p className='text-white mt-2 font-bold text-xl'>{user.nickname}</p>
            // </div> )
                )

                   })
            }
            
            
            
            
            
            

            
            
        </div>
  )
}

export default ArtistModeAdmin