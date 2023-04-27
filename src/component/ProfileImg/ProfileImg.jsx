import React, { useState } from 'react'

const ProfileImg = () => {
    const [image, setImage] = useState("")

    const submitImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "i68powzt")
        data.append("cloud_name", "dfg3nr91y")

        fetch("https://api.cloudinary.com/v1_1/dfg3nr91y/image/upload", {
            method: "POST",
            body: data
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        }).catch((err)=> {
            console.log(err)
        })
    }
  return (
    <>
    <div>
        <input type="file" onChange={(e) => {setImage(e.target.files[0])}} />
        <button onClick={submitImage}>Cargar</button>
    </div>
    </>
  )
}

export default ProfileImg