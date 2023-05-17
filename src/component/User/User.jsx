import arrowDown from "../../assets/images/icons/arrow-down.png";
import user from "../../assets/images/icons/user.png";

import UserModal from "./UserModal";
import { useContext, useState } from "react";


import { useAuth0 } from "@auth0/auth0-react"
import UserContext from "../../context/UserContext";





const User = () => {
  const { userLogged } = useContext(UserContext)
  const [modal, setModal] = useState(false)
  const showModal = () => {
    setModal(!modal)
  }
  const {  loginWithRedirect } = useAuth0()



  return (
    <>
      {userLogged ?
        <>
          <div className="bg-[#212121] w-3/4 mx-auto mt-8 flex rounded-lg cursor-pointer " onClick={showModal} >
            <img className="w-10 h-10 rounded-full my-2 ml-3" alt="" src={userLogged.picture} />
            <div className="w-full flex justify-between mr-3 truncate ">
              <p className="text-white my-auto ml-3 ">{userLogged.nickname}</p>
              <img
                className="w-3 h-2 flex justify-end my-auto"
                src={arrowDown}
                alt=""
              />
            </div>
          </div>
          {modal && <UserModal />}
        </>
        : 
        <>
          <div className="bg-green-600 w-2/4 mx-auto mt-8 flex rounded-lg cursor-pointer  hover:bg-[#7339E5] " onClick={() => loginWithRedirect()}  >
            <img className="w-10 h-10 rounded-full my-2 ml-3" alt="" src={user} />
            <div className="w-full flex justify-between mr-3 truncate ">
              <p className="text-white my-auto ml-3 ">Inicia sesión</p>
            </div>
          </div>
          {modal && <UserModal />}
        </>
      }
    </>
  );
};

export default User;
