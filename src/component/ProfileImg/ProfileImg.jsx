import React, { useState } from 'react';
import addImageProfile from '../../assets/images/icons/addImageProfile.png'
import axios from 'axios';

function ProfileImg() {
  const [imageUrl, setImageUrl] = useState('');

  const handleEditImage = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("userId", "644b941645c5236fe10b1557"); // si se almacene la sesion del usuario en localstorage sacaremos la id de ahi y guardaremos la imagen...
                                                      // o, sacamos la id del token (ver wilson) y hacemos un get para traer la imagen
                                                      // luego guardamos estos datos en el context (ver con squad)
    try {
        const res = await editImgFetch(data);
        setImageUrl(res.data.img); 
    } catch (error) {
        console.error(error);
    }
  }

  const editImgFetch = async (data) => {
    return await axios.post('http://localhost:4002/users/image', data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
  };

  return (
    <div>
      <label>
        {
          !imageUrl ? 
          <img className='w-[10rem] cursor-pointer' src={addImageProfile} alt="add-profile" />
          :
          <img className='w-[10rem] cursor-pointer rounded-full' src={imageUrl} alt="uploaded" />
        }
        <input type="file" className='hidden' onChange={handleEditImage} />
 		  </label>
    </div>
  );
}

export default ProfileImg;