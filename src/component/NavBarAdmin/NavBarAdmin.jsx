import React, { useContext } from 'react'
import logo from '../../assets/images/icons/logo.png'
import UserContext from '../../context/UserContext'
import { NavLink } from 'react-router-dom'

const NavBarAdmin = () => {

    const {artist, setArtist} = useContext(UserContext)
    
    

  return (
    <div>
        <div className='flex justify-center'>
            <img className='w-40 h-[6vh] my-[2vh]' src={logo} alt="" />
        </div>
        <div className="w-2/3 lg:relative lg:block mb-4 mx-auto ">
            <input type="text" className="bg-gray-300 w-full py-2 pl-10 pr-4  rounded-lg border border-gray-400 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring focus:border-gray-500" placeholder="Buscar"/>
            <div className="absolute top-0 left-0 mt-2 ml-3">
                <i className="fas fa-search text-gray-400"></i>
            </div>
        </div>
            {
                artist ?
                <NavLink to="/admin" >
        <div className=' flex gap-20 justify-center mt-10 mb-5'>
                
                    <div className='flex items-center font-bold text-xl gap-3'>
                        {/* <img className='w-10 h-8' src={artist} alt="" /> */}
                        <h2 className='text-white text-[2rem] border-b-2 pb-2 cursor-pointer' onClick={() => setArtist(true)}>Artistas</h2>
                    </div>
                    <div className=' flex items-center font-bold text-xl gap-3'>
                        {/* <img className='w-10 h-8' src={user} alt="" /> */}
                        <h2 className='text-gray-500 cursor-pointer' onClick={() => setArtist(false)}>Usuarios</h2>
                    </div> 
                    
        </div>
        </NavLink>
        
                 : 
                 <NavLink to="/admin" >
                 <div className=' flex gap-20 justify-center mt-10 mb-5'>
                
                    <div className='flex items-center font-bold text-xl gap-3'>
                        {/* <img className='w-10 h-8' src={artist} alt="" /> */}
                        <h2 className='text-gray-500 cursor-pointer ' onClick={() => setArtist(true)}>Artistas</h2>
                    </div>
                    <div className=' flex items-center font-bold text-xl gap-3'>
                        {/* <img className='w-10 h-8' src={user} alt="" /> */}
                        <h2 className='text-white text-[2rem] border-b-2 pb-2 cursor-pointer' onClick={() => setArtist(false)}>Usuarios</h2>
                    </div> 
                    
        </div>
        </NavLink>

            }
    </div>
  )
}

export default NavBarAdmin