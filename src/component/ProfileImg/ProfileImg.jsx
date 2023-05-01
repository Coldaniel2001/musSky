import React, { useState } from 'react'
import addImageProfile from '../../assets/images/icons/addImageProfile.png'
import axios from 'axios';




const ProfileImg = () => {
    // const [image, setImage] = useState("")

    // const submitImage = () => {
    //     const data = new FormData()
    //     data.append("file", image)
    //     data.append("upload_preset", "i68powzt")
    //     data.append("cloud_name", "dfg3nr91y")

    //     fetch("https://api.cloudinary.com/v1_1/dfg3nr91y/image/upload", {
    //         method: "POST",
    //         body: data
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data.secure_url);
    //     }).catch((err)=> {
    //         console.log(err)
    //     })
    // }

const handleEditImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    // data.append("userId", authState.user.userId); no se de donde lo vamos a coger...
    editImgFetch(data)
}

    const editImgFetch = async (data) => {
        console.log(data)
        return await axios.post('http://localhost:4002/users/image', data, {
            headers: {
            "Content-Type": "multipart/form-data",
            },
        });
    };


  return (
    <>
    <div>
        <label>
			<img className='w-[10rem] cursor-pointer' src={addImageProfile} alt="add-profile" />
            <input type="file" className='hidden' onChange={handleEditImage} />
		</label>
        {/* <button onClick={submitImage}>Cargar</button> */}
    </div>
    </>
  )
}

export default ProfileImg