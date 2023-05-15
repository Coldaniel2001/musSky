import React, { useContext, useState } from 'react';
import addImageProfile from '../../assets/images/icons/addImageProfile.png'
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { useAuth0 } from '@auth0/auth0-react';

function ProfileImg() {
  const { userLogged, setUserLogged } = useContext(UserContext)
  const [hovered, setHovered] = useState(false)
  console.log(hovered)

  
  const editImgFetch = async (data) => {
    return await axios.post('http://localhost:4002/users/image', data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
  };
  const handleEditImage = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("userId", userLogged._id); 
    
    try {
        const res = await editImgFetch(data);
        console.log(res)
        setUserLogged({ ...userLogged, picture: res.data.img }); 
    } catch (error) {
        console.error(error);
    }
  }


  return (
    <div>
      <label>
        {userLogged  ? 
          <img className={hovered ? 'opacity-50 w-[10rem] h-[10rem] border-4 border-[#7C8BBF] cursor-pointer rounded-full' : ' w-[10rem] h-[10rem] border-4 border-[#7C8BBF] cursor-pointer rounded-full'} src={userLogged.picture} alt="uploaded" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
        :
        <img className='w-[10rem] h-[10rem] cursor-pointer' src={addImageProfile} alt="add-profile" />
        }
        <input type="file" className='hidden' onChange={handleEditImage} />
 		  </label>
    </div>
  );
}

export default ProfileImg;