import React from 'react'
import leiva from '../../assets/images/genders.artists/leiva.png'
import daddy from '../../assets/images/genders.artists/dady-yunki.png'
import fito from '../../assets/images/genders.artists/fito.png'
import hipHop from '../../assets/images/genders.artists/hip-hop.png'
import guetta from '../../assets/images/genders.artists/gueta.png'
import reggae from '../../assets/images/genders.artists/reggae.png'
import camilo from '../../assets/images/genders.artists/camilo.png'
import jazz from '../../assets/images/genders.artists/jazz.png'
import avril from '../../assets/images/genders.artists/avril.png'
import flamenco from '../../assets/images/genders.artists/flamenco.png'

const Genders = () => {
  return (
    <div className='grid lg:grid-cols-3 2xl:grid-cols-5 mt-20 ml-10 mr-10 gap-8 pb-10 lg:h-[85vh] lg:overflow-y-scroll'>
        <div>
            <div className='bg-gradient-to-t from-[#FFB61D] via-[#FFB61D] to-transparent flex justify-center rounded-xl h-[86%]'>
                <img className='w-full' src={leiva} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Pop español</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#3969E5] via-[#3969E5] to-transparent flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={daddy} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Urbano latino</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#FE6A6A] via-[#FE6A6A] to-transparent flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={fito} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Rock español</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#7C8BBF] via-[#7C8BBF] to-transparent flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={hipHop} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Hip hop</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#04FBCE] via-[#04FBCE] to-transparent flex justify-center items-end rounded-xl h-[86%]'>
                <img className='w-[90%] h-[90%] rounded-xl ' src={guetta} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Electrónica</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#FFB61D] via-[#FFB61D] to-transparent flex justify-center rounded-xl h-[86%]'>
                <img className='w-full' src={reggae} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Reggae</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#3969E5] via-[#3969E5] to-transparent flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={camilo} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Pop latino</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#FE6A6A] via-[#FE6A6A] to-transparent flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={jazz} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Jazz</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#7C8BBF] via-[#7C8BBF] to-transparent flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={avril} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Rock</p>
        </div>
        <div>
            <div className='bg-gradient-to-t from-[#04FBCE] via-[#04FBCE] to-transparent flex justify-center items-end rounded-xl h-[86%]'>
                <img className='w-[90%] h-[90%] rounded-xl ' src={flamenco} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Flamenco</p>
        </div>
    
    </div>
  )
}

export default Genders