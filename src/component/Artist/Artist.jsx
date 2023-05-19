import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import '../Swiper/Swiper.css'
import { Autoplay, Navigation } from "swiper";

const Artist = () => {

    const { dataUsers } = useContext(UserContext)

    const filterArtists = dataUsers.filter((artist) => {
        return artist.rol === "artist"
    })

    const handleReachEnd = (swiper) => {
        const lastIndex = filterArtists.length - 1;
        const currentLastIndex = swiper.realIndex;
        if (currentLastIndex === lastIndex) {
          swiper.slideTo(0, 0, false);
        }
      };

    return (

        <Swiper 
        slidesPerView={4} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true} 
        modules={[ Autoplay, Navigation]}
        onReachEnd={handleReachEnd}
        className="mySwiper"
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            "@0.40": {
                slidesPerView: 2,
                spaceBetween: 5,
              },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            "@1.00": {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            "@1.25":{
                slidesPerView: 4,
                spaceBetween: 5,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            "@2.00": {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              "@2.50": {
                slidesPerView: 6,
                spaceBetween: 5,
              },
          }}
        >

        <div className='flex overflow-x-scroll scrollbar-hide w-full h-full whitespace-no-wrap  mt-5 lg:mt-10 '>
            {
                filterArtists.map((artist) => {
                    return (
                        <SwiperSlide>
                        <Link to={`/artist/${artist._id}`} >
                            <div key={artist._id} className='py-5' >
                            <div className='mb-6  min-w-[12rem] xl:min-w-[15rem] hover:scale-105 transition duration-500 x'>
                                <img className='w-[90%] mx-auto rounded h-[12rem]' src={artist.picture} alt="first artist" />
                                <p className='hidden lg:flex lg:text-[1.3rem] lg:mt-2 xl:text-[1.6rem] 2xl:text-[1rem] justify-center font-semibold'>{artist.name}</p>
                            </div>
                        </div>
                        </Link>
                        </SwiperSlide>
                    )
                })
            }
        </div>
        </Swiper>
    )
}

export default Artist
