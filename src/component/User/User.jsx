import user from "../../assets/images/user.jpg";
import arrowDown from "../../assets/images/icons/arrow-down.png";

import UserModal from "./UserModal";
import { useState } from "react";

const User = () => {
 
  const [modal,setModal]=useState(false)
  const showModal=()=>{
    setModal(!modal)
  }


  return (
    <>
      <div
        className="bg-[#212121] w-3/4 mx-auto mt-8 flex rounded-lg " onClick={showModal}
      >
        <img className="w-10 h-10 rounded-full my-2 ml-3" src={user} alt="" />
        <div className="w-full flex justify-between mr-3">
          <p className="text-white my-auto ml-3">María Perez</p>
          <img
            className="w-3 h-2 flex justify-end my-auto"
            src={arrowDown}
            alt=""
          />
        </div>
      </div>
        {modal && <UserModal/>}
    </>
  );
};

export default User;
