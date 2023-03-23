
import next from '../../assets/images/icons/next.png'
import previous from '../../assets/images/icons/previous.png'
import play from '../../assets/images/icons/play.png'
import pause from '../../assets/images/icons/pausa.png'
import { useRef } from "react"

const MusicPlayed = ({audioElem,isPlaying,setIsPlaying,currentSong,setCurrentSong ,songs}) => {
  const clickRef = useRef();

  const PlayPause = ()=>
  {
    setIsPlaying(!isPlaying);

  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong?.length;

  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.name == currentSong.name);
    if (index ==0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.name == currentSong.name);

    if (index === songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }
  console.log(currentSong.name)

  return (
    <>
     <div className='w-3/4 mx-auto text-white'>
        <img className='w-full mx-auto mt-10 mb-4 rounded-xl' src={currentSong.thumbnail} alt="played song" />
        <p className='font-bold text-[0.5rem] sm:text-xs md:text-sm lg:text-lg 2xl:text-[1.5rem]'>{currentSong.name}</p>
        <p className='text-gray-500 sm:text-xs md:text-sm lg:text-lg 2xl:text-[1.5rem]'>{currentSong.artist}</p>

      <div className="min-w-full h-[1rem] bg-withe rounded-full drop-shadow-2xl" onClick={checkWidth} ref={clickRef} >
  <div className="w-0 h-[100%] bg-black rounded-full" style={{width:`${currentSong?.progress+'%'}`}}></div>

      </div>
        <div className='grid grid-cols-4 mt-5 items-center mx-8 '>
            <img className='w-12' src={previous} alt="previous song" onClick={skipBack}/>
{
        isPlaying ?      <img className='w-20 col-span-2 mx-auto' src={pause} alt="play song" onClick={PlayPause}/>
        :<img className='w-20 col-span-2 mx-auto' src={play} alt="play song" onClick={PlayPause}/>

}            <div className='flex justify-end '>
            <img className='w-12' src={next} alt="next song" onClick={skiptoNext}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default MusicPlayed