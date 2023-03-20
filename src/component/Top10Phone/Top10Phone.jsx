import React from 'react'
import rihanna from '../../assets/images/rihanna.png'
import more from '../../assets/images/icons/more.png'
import bluePlay from '../../assets/images/icons/blue-play.png'
import logo from '../../assets/images/icons/logo.png'
import larissa from '../../assets/images/larissa.png'

const Top10Phone = () => {
  return (
    <div>
        <div className='pt-14  text-white bg-black  md:hidden lg:md'>
        </div>
        <img className='w-52 hidden md:flex lg:hidden mx-auto pt-6' src={logo} alt="" />
        <p className='mt-10 ml-5 lg:ml-0 text-3xl font-extrabold mb-5 text-white sm:text-4xl md:mt-0  2xl:hidden'>TOP 10</p>
        <div className=' bg-black mx-5 rounded-md text-white lg:mb-10 '>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full overflow-x-scroll ">
                <div className='w-5/6 grid grid-cols-9  bg-[#D9D9D9] items-center rounded bg-opacity-20 m-2 mx-auto'>
                    <img className='col-span-2 w-3/4 p-2 rounded-full' src={rihanna} alt="" />
                    <div className='col-span-5 my-4'>
                        <p className='text-xl font-bold'>Rihanna</p>
                        <p>You will never see</p>
                    </div>
                    <img className='pr-2' src={bluePlay} alt="" />
                    <img className='col-span-1 pr-2 w-10 flex my-auto' src={more} alt="" />
                </div>
                <div className='hidden md:grid w-5/6 grid-cols-9  bg-[#D9D9D9] items-center rounded bg-opacity-20 m-2 mx-auto'>
                    <img className='col-span-2 w-3/4 p-2 rounded-full' src={larissa} alt="" />
                    <div className='col-span-5 my-4'>
                        <p className='text-xl font-bold'>Larissa</p>
                        <p>Hey you</p>
                    </div>
                    <img className='pr-2' src={bluePlay} alt="" />
                    <img className='col-span-1 pr-2 w-10 flex my-auto' src={more} alt="" />
                </div>
                <div className='hidden xl:grid w-5/6 grid-cols-9  bg-[#D9D9D9] items-center rounded bg-opacity-20 m-2 mx-auto'>
                    <img className='col-span-2 w-3/4 p-2 rounded-full' src={larissa} alt="" />
                    <div className='col-span-5 my-4'>
                        <p className='text-xl font-bold'>Larissa</p>
                        <p>Hey you</p>
                    </div>
                    <img className='pr-2' src={bluePlay} alt="" />
                    <img className='col-span-1 pr-2 w-10 flex my-auto' src={more} alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Top10Phone