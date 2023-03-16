import React from 'react'
import ArtistsFromTop10 from './ArtistsFromTop10'


function Top10({artists}) {
  
  return (
     <div className=' h-4/5  bg-zinc-800  mt-6 rounded-lg shadow-2xl ' >
    <h2 className='text-white text-2xl ml-4'>TOP 10</h2>
    <div className='flex flex-col gap-2'>

    { artists.map(({id,img,title}) =>(
            <ArtistsFromTop10 key={id} id={id} title={title} img={img}/>
            ))}
    </div>
</div>
  )
}

export default Top10