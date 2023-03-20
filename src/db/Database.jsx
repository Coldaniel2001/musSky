import { useEffect, useState } from "react";
import CenterSection from "../component/CenterSection/CenterSection";

export default function Database() {
   const[data,setData]=useState("");

   useEffect(() => {
       
      fetch('http://localhost:3000/playlists')
          .then(response => response.json())
          .then(response => setData(response))
          .catch(err => console.error(err));
          
        }, [])
    
console.log(data)
  
  return (
    <div>
       
        {/* {
            data.map(()=>{
                return <CenterSection images={images}  />
            })
        } */}
    </div>
  )
}

