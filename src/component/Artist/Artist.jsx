import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import '../Swiper/Swiper.css'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Artist = () => {
    const dataMusic = "http://localhost:3004/artists"
    const [dataSong, setDataSong] = useState([])

    useEffect(() => {
        const fetchData = async() => {
          const data = await fetch(dataMusic)
          const json = await data.json()
          setDataSong(json)
        }
        fetchData()
      }, [dataMusic])

    return (
        <Swiper slidesPerView={4} navigation={true} modules={[Navigation]} className="mySwiper">
            {dataSong.map((song) => (
                <div className='flex overflow-x-scroll scrollbar-hide w-[100%] whitespace-no-wrap lg:mt-10 swiper-wrapper'>
                    <SwiperSlide><div>
                        <img className='max-h-[250px] w-[80%] mx-auto rounded' src={song.photoUrl} alt="first artist" />
                        <p className='hidden lg:flex lg:text-[1.3rem] lg:mt-2 xl:text-[1.6rem] 2xl:text-[2rem] justify-center font-semibold'>{song.name}</p>
                    </div></SwiperSlide>
                </div>
            ))}
        </Swiper>
    )
}

export default Artist