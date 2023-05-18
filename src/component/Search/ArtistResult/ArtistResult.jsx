import React from "react";

const ArtistResult = ({ artist }) => {
  return (
    <div className="text-black rounded mb-1 hover:bg-[#7239e575] cursor-pointer">
        <div className='flex gap-5 p-1 pl-5'>
            <img src={artist.picture} alt="picture" className='w-[60px] h-[60px] rounded' />
            <div className='flex flex-col justify-center'>
            <p className='font-bold text-[1.3rem]'>{artist.name}</p>
            <p className='text-gray-800 font-semibold text-[1.2rem]'>{artist.nickname}</p>
            </div>
        </div>
    </div>
)};

export default ArtistResult;
