import React from 'react'
import puntos from "../../assets/images/3puntos.png"

function ArtistsFromTop10({id,title,img}) {
  return (
    <>
    <div className='flex'>

        <div className='flex '>

            <img className='rounded-full bg-black w-16 ' src={img} alt=""/>
        
        </div>
            <div className=''>
                <p className='text-white'>Mysuca</p>
                <small className='text-white text-xs'>{title}</small>

            </div>
            <img alt='' src={puntos} className="w-10 h-6 flex mt-4 ml-auto"></img>
    </div>

    </>
  )
}

export default ArtistsFromTop10