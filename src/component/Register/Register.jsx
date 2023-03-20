import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import DataContext from "../../context/DataContext";
import types from "../../reducer/Type/type";


import musicWoman from "../../assets/images/bgLoginRegister/modelPortada.png";
import logo from "../../assets/images/logo/LogoMusSky.png";



const Register = () => {
  const { state, dispatch, setIsLoggin, messageSuccess, setMessageSuccess, messageError,setMessageError } = useContext(DataContext);
  

  const handleLogin = () => {
    setIsLoggin(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(state.password===state.passwordRepeat){
        setMessageSuccess(true);
        setTimeout(() => {
            setMessageSuccess(false);
            setIsLoggin(true);
        }, 3000)

    } else {
        setMessageError(true);
        setTimeout(() => {
            setMessageError(false);
        }, 3000)
    }
    
  }


  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-t from-black via-black to-mainPurple flex justify-center lg:justify-end overflow-hidden">
        <img
          className="object-cover object-center md:object-left opacity-20 "
          src={musicWoman}
          alt="MW"
        />
      </div>
      <div className="flex flex-col h-[50rem] justify-between items-center fixed inset-0 z-10 sm:justify-center sm:h-screen">
        <img
          className=" w-[10rem]  sm:mb-12 sm:w-[25rem]"
          src={logo}
          alt="Logo"
        />
        <div className="flex items-center bg-opacity-0  rounded-xl w-[15rem] h-[25rem] sm:w-[25rem] sm:h-[30rem] sm:m-[0rem] sm:bg-opacity-20 sm:bg-mainPurple sm:border-2 sm:border-purple-900 sm:z-10">
          <form onSubmit={handleSubmit} className="w-full h-[80%] flex flex-col items-center">
            <div className="flex flex-col justify-between h-[90rem] w-4/5">
              <div className="flex flex-col justify-between h-[70%]">
                <div className="relative border-solid border-b-2">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="text"
                    placeholder="Nombre"
                    value={state.name}
                    onChange={(event)=> dispatch({type: types.name, payload: event.target.value})}
                    required
                  />
                </div>
                <div className="relative border-solid border-b-2">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="text"
                    placeholder="Apellidos"
                    value={state.surname}
                    onChange={(event)=> dispatch({type: types.surname, payload: event.target.value})}
                    required
                  />
                </div>
                <div className="relative border-solid border-b-2">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="text"
                    placeholder="Username"
                    value={state.username}
                    onChange={(event)=> dispatch({type: types.username, payload: event.target.value})}
                    required
                  />
                </div>
                <div className="relative border-solid border-b-2">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="email"
                    placeholder="Correo Electronico"
                    value={state.email}
                    onChange={(event)=> dispatch({type: types.email, payload: event.target.value})}
                    required
                  />
                </div>
                <div className="relative border-solid border-b-2">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="password"
                    placeholder="Contraseña"
                    value={state.password}
                    onChange={(event)=> dispatch({type: types.password, payload: event.target.value})}
                    required
                  />
                </div>
                <div className="relative border-solid border-b-2">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="password"
                    placeholder="Repetir contraseña"
                    value={state.passwordRepeat}
                    onChange={(event)=> dispatch({type: types.passwordRepeat, payload: event.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-around h-[5rem]">
                <div className="w-[80%] ">
                  <Button
                    type="submit"
                    value="Register"
                    classButton="bg-mainPurple rounded w-[100%] h-[2rem] text-white"
                  />
                </div>
                <div className="flex justify-center w-[80%]">
                  <Link className="text-white" onClick={handleLogin}>
                    Volver a Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
