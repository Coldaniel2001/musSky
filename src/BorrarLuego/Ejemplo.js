import { useState } from "react"

function Ejemplo() {

    const[ex,setEx]=useState(false)

    


  return (
    <div className="w-[25rem] bg-current flex ml-[50%] h-[30rem]">

    <p className="text-white" onClick={()=>setEx(!ex)}>LUKA</p>
   
{
    !ex &&  <p className="text-white">me ves</p>
}
    </div>
  )
}

export default Ejemplo