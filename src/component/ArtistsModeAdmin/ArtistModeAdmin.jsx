import React, { useState } from 'react'
import beatles from '../../assets/images/beatles.jpg'
import antonioJose from '../../assets/images/antonio-jose-1.jpg'
import melendi from '../../assets/images/melendi.jpg'
import fito from '../../assets/images/fito.jpg'
import shakira from '../../assets/images/shakira.jpg'
import lodv from '../../assets/images/lodvg.jpg'
import estopa from '../../assets/images/estopa.jpg'

const ArtistModeAdmin = () => {
    const [hovered, setHovered] = useState(false);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9   mx-[8vh]  justify-center gap-6 h-[70vh] overflow-y-scroll scrollbar-hide  '>
            {
                !hovered ?
                <div className='h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 text-2xl font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={beatles} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={beatles} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>The Beatles</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={melendi} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={melendi} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>Melendi</p>
            </div> 
            }
            {
                !hovered ?
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh] '>
                    <img className='rounded-full h-full cursor-pointer ' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} src={shakira} alt="" />
                    <p className='text-white mt-2 font-bold text-xl'>shakira</p>
                </div> :
                <div className=' h-[14vh] flex flex-col items-center mt-[5vh]  '>
                    <div className='relative cursor-pointer' onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >
                        <img className='rounded-full h-full  opacity-50 border-4 border-white-900 ' src={shakira} alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-400 font-bold'>Ver mas</p>
                        </div>
                    </div>
                <p className='text-white mt-2 font-bold text-xl'>shakira</p>
            </div> 
            }
            
            
            
            
            

            
            
        </div>
  )
}

export default ArtistModeAdmin