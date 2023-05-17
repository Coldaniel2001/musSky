import React, { useContext, useState } from "react";

import Button from "../Button/Button";

import ProfileImg from "../ProfileImg/ProfileImg";
import addPicture from "../../assets/images/icons/addImageProfile.png";

import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "../../context/UserContext";

const InfoProfile = () => {
  const { setUserLogged, userLogged, updateUser } = useContext(UserContext);
  const [changeInformation, setchangeInformation] = useState(true);
  const { user } = useAuth0();


  const handleSubmit = (e) => {
    if (e && e.preventDefault) { e.preventDefault(); }
    setchangeInformation(false);
  };

  const handleChangeInput = (e) => {
    setUserLogged({...userLogged, [e.target.name]: e.target.value });

  };

  const handlesubmitOff = (e) => {
    e.preventDefault();
    setchangeInformation(true);
    updateUser(userLogged._id ,userLogged);
  };

  return (
    <>
      <div className="flex flex-col justify-between ">
        <span className="text-white font-extrabold text-[2.5rem] mt-10 mb-5">
          MI CUENTA
        </span>
        <h2 className="ml-4 text-white font-extrabold text-[1.5rem] 2xl:text-title mb-8">
          INFORMACIÓN
        </h2>
      </div>
      <div className="sm:flex justify-center ">
        <form
          className="2xl:flex 2xl:justify-between items-center w-[95%] -mb-8"
          action=""
        >
          <div className="flex 2xl:w-1/6 flex-col items-center justify-around h-[12rem] pb-5 sm:border-b border-gray-600 2xl:border-transparent">
            <ProfileImg />
            {changeInformation ? (
              <span className="text-xl font-semibold">
                {userLogged ? userLogged.nickname : ""}
              </span>
            ) : (
              <input
                className="bg-[#7239e57a] border-2 border-[#7339E5] rounded text-center"
                type="text"
                placeholder={userLogged.nickname}
                value={userLogged.nickname}
                name="nickname"
                onChange={handleChangeInput}
              />
            )}
          </div>
          <div className="sm:flex 2xl:w-5/6  justify-between 2xl:ml-10 mt-5">
            <div className="flex sm:flex-col sm:justify-around sm:h-[6rem]">
              <span className="text-white w-[45%] sm:w-full font-semibold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                NOMBRE
              </span>
              {
                changeInformation ?
                <span className="text-detailsGray w-[35%] sm:w-full text-lg ml-10 sm:ml-0">
                  {userLogged ? userLogged.name : ""}
                </span> :
                <input
                className="bg-[#7239e57a] border-2 border-[#7339E5] rounded text-center"
                type="text"
                placeholder={userLogged?.name}
                value={userLogged?.name}
                name="name"
                onChange={handleChangeInput}
              />
              }
            </div>
            <div className="flex sm:flex-col sm:justify-around sm:h-[6rem]">
              <span className="text-white w-[45%] sm:w-full font-semibold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                APELLIDOS
              </span>
              {
                changeInformation ?
                <span className="text-detailsGray  w-[35%] sm:w-full text-lg ml-10 sm:ml-0">
                  {userLogged ? userLogged.surname : ""}
                </span> :
                <input
                className="bg-[#7239e57a] border-2 border-[#7339E5] rounded text-center"
                type="text"
                placeholder={userLogged?.surname}
                value={userLogged?.surname}
                name="surname"
                onChange={handleChangeInput}
              />
              }
            </div>
            <div className="flex sm:flex-col sm:justify-around sm:h-[6rem]">
              <span className="text-white w-[45%] sm:w-full font-semibold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                EMAIL
              </span>
              {changeInformation ? (
                <span className="text-detailsGray w-[35%] sm:w-full text-lg ml-10 sm:ml-0">
                  {user ? user.email : ""}
                </span>
              ) : (
                <input
                  className="bg-[#7239e57a] border-2 border-[#7339E5] rounded text-center"
                  type="text"
                  placeholder={userLogged?.email}
                  value={userLogged?.email}
                  name="email"
                  onChange={handleChangeInput}
                />
              )}
            </div>
            <div className="flex sm:flex-col sm:justify-around sm:h-[6rem]">
              <span className="text-white w-[45%] sm:w-full font-semibold sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                FECHA SUBSCRIPCIÓN
              </span>
              <span className="text-detailsGray w-[35%] sm:w-full text-lg ml-10 sm:ml-0">
                {user ? user.updated_at : ""}
              </span>
            </div>
          </div>
          <div className="mt-12 flex justify-end 2xl:flex 2xl:justify-end 2xl:mb-4">
            {changeInformation ? 
              <Button
                handleSubmit={(e)=>handleSubmit(e)}
                value={"Cambiar"}
                classButton={
                  "bg-[#7C8BBF] mb-10 sm:mb-0 sm:mx-10 h-[2rem] sm:mx-0 px-3 rounded"
                }
              />
             : 
              <button
                className="bg-[#53b55c] sm:mx-10 h-[2rem] mt-4 mb-6 sm:mt-0 sm:mb-0  px-3 rounded"
                onClick={(e) => handlesubmitOff(e)}
              >
                Guardar
              </button>
            }
          </div>
        </form>
      </div>
    </>
  );
};

export default InfoProfile;
