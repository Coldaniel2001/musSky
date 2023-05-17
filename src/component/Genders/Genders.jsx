import React, { useContext } from 'react'
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
import Search from '../Search/Search'
import SearchForPhone from '../Search/SearchForPhone'



const Genders = () => {

  return (

    <div className='w-full'>
    <h3 className='text-white ml-10 text-[1.5rem] font-semibold xl:hidden'>Buscar </h3>
    <SearchForPhone />
    <h2 className='text-white text-[2rem] font-extrabold mt-10 ml-10 mr-10'>GÉNEROS</h2>
    <div className='grid grid-cols-2 pb-60 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 mt-10 ml-10 mr-10 gap-x-8 xl:gap-x-8 sm:pb-40 xl:pb-10 lg:h-[75vh] lg:overflow-y-scroll  '>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#FFB61D] via-[#FFB61D] to-transparent hover:bg-[#FFB61D] hover:border-yellow-600 transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center rounded-xl h-[86%] '>
                <img className='w-full ' src={leiva} alt="" />
            </div>
                <p className=' text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Pop español</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#3969E5] via-[#3969E5] to-transparent hover:bg-[#3969E5] hover-[#3969E5] transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={daddy} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Urbano latino</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#FE6A6A] via-[#FE6A6A] to-transparent hover:bg-[#FE6A6A] hover-[#FE6A6A] transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={fito} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Rock español</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#7C8BBF] via-[#7C8BBF] to-transparent hover:bg-[#7C8BBF] hover-[#7C8BBF] transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={hipHop} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Hip hop</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#04FBCE] via-[#04FBCE] to-transparent  hover:bg-[#04FBCE] hover-[#04FBCE] transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center items-end rounded-xl h-[86%]'>
                <img className='w-[90%] h-[90%] rounded-xl ' src={guetta} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Electrónica</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#FFB61D] via-[#FFB61D] to-transparent hover:bg-[#FFB61D] hover:border-yellow-600 transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center rounded-xl h-[86%]'>
                <img className='w-full' src={reggae} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Reggae</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#3969E5] via-[#3969E5] to-transparent hover:bg-[#3969E5] hover-[##3969E5] transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={camilo} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Pop latino</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#FE6A6A] via-[#FE6A6A] to-transparent hover:bg-[#FE6A6A] hover-[#FE6A6A] transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={jazz} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Jazz</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#7C8BBF] via-[#7C8BBF] to-transparent  hover:bg-[#7C8BBF] hover-[#7C8BBF] transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center rounded-xl h-[86%]'>
                <img className='w-full rounded-xl ' src={avril} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Rock</p>
        </div>
        <div className='h-[80%]'>
            <div className='bg-gradient-to-t from-[#04FBCE] via-[#04FBCE] to-transparent hover:bg-[#04FBCE] hover-[#04FBCE] transition-all duration-500 hover:h-[90%] cursor-pointer flex justify-center items-end rounded-xl h-[86%]'>
                <img className='w-[90%] h-[90%] rounded-xl ' src={flamenco} alt="" />
            </div>
                <p className='text-white font-bold xl:text-2xl 2xl:text-3xl flex justify-center mt-5'>Flamenco</p>
        </div>
    
    </div>

</div>
  )
}

export default Genders