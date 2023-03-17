import React from 'react'
import rihanna from '../../assets/images/rihanna.png'
import more from '../../assets/images/icons/more.png'
import bluePlay from '../../assets/images/icons/blue-play.png'

const Top10Phone = () => {
  return (
    <div>
        <div className='pt-14 text-white bg-black sm:hidden md:hidden lg:md'>
        </div>
        <p className='mt-10 ml-5 text-3xl font-extrabold mb-5 text-white'>TOP 10</p>
        <div className=' bg-black mx-5 rounded-md text-white sm:hidden md:hidden lg:md'>
            <div className="flex w-full overflow-x-scroll">
                <div className='w-full grid grid-cols-9 bg-[#D9D9D9] items-center rounded bg-opacity-20 m-2 mr-10'>
                    <img className='col-span-2 w-3/4 p-2 rounded-full' src={rihanna} alt="" />
                    <div className='col-span-5 my-4'>
                        <p className='text-xl font-bold'>Rihanna</p>
                        <p>You will never see</p>
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