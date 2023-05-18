import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import iconHome from '../assets/images/icons/icon-home.png'
import iconGenero from '../assets/images/icons/icon-genero.png'
import iconHomeViolet from '../assets/images/icons/homeViolet.png'
import iconGeneroViolet from '../assets/images/icons/GenreViolet.png'

const SidebarLeft = () => {
  const location = useLocation();

  return (
    <div>
      <div className='text-white flex flex-col items-center h-[6vh]'></div>
      <div className='text-white mt-[3vh] md:hidden lg:block gap-5'>
        <NavLink to={"/home"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple' : "grid border-l-[0.5rem] border-transparent"}>
          <div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
            <img className='lg:w-12 xl:w-12 col-span-2' src={location.pathname === '/final-registrer' ? iconHomeViolet : iconHome}  alt="home icon" />
            <p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Home</p>
          </div>
        </NavLink>
        <NavLink to={"/genders"} className={({ isActive }) => isActive ? 'grid border-l-[0.5rem] border-mainPurple mt-[2vh]' : "grid border-l-[0.5rem] border-transparent mt-[2vh]"}>
          <div className='xl:grid grid-cols-8 lg:flex  lg:justify-center lg:pl-0 items-center   xl:pl-6 h-[5vh] '>
            <img className='lg:w-12 xl:w-12 col-span-2' src={iconGenero} alt="home icon" />
            <p className='lg:hidden xl:grid xl:text-[1.5rem] col-span-4 font-semibold'>Géneros</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default SidebarLeft;

