import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import musicWoman from "../../assets/images/bgLoginRegister/modelPortada.png";
import logo from "../../assets/images/logo/LogoMusSky.png";
import google from "../../assets/images/icons/google.png";
import facebook from "../../assets/images/icons/facebook.png";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoggin, loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "wilson@gmail.com" && password === "1234") {
      //vamos a lanzar la funcion que actualiza el estado
      loginUser({email, password})
      navigate("/");
    } else {
      console.log("correo incorrecto");
    }
  };

  const handleRegister = () => {
    setIsLoggin(false);
  };

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-t from-black via-black to-mainPurple flex justify-center lg:justify-end overflow-hidden">
        <img
          className="object-cover object-center md:object-left opacity-20 "
          src={musicWoman}
          alt="MW"
        />
      </div>
      <div className="flex flex-col justify-between items-center fixed inset-0 z-10 sm:justify-center ">
        <img
          className="sm:-mb-40 w-[10rem] sm:w-[25rem]"
          src={logo}
          alt="Logo"
        />
        <div className="h-full w-full  flex items-center justify-center ">
        <div className="flex flex-col items-center mx-auto bg-opacity-0 bg-red-500 pb-5 rounded-xl w-[80%]  sm:w-[25rem] sm:h-[30rem] sm:m-[0rem] sm:bg-opacity-20 sm:bg-mainPurple sm:border-2 sm:border-purple-900 sm:z-10">
          <h2 className="mb-16 sm:mb-5 text-white text-4xl font-bold my-5">Login</h2>
          <form
            className="w-full h-[80%] flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-around h-full w-4/5">
              <div className="flex flex-col justify-between h-[30%]">
                <div className="relative border-solid border-b py-1">
                  <input
                    className="text-white bg-transparent outline-none w-full"
                    type="email"
                    placeholder="Correo Electronico"
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                </div>
                <div className="relative border-solid border-b mt-5 mb-1 py-1">
                  <input
                    className="text-white bg-transparent outline-none w-full"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handlePassword}
                    required
                  />
                </div>
                <div className="flex justify-end item-end ">
                  <span className="text-white text-[0.8rem]">
                    *Recupera contraseña{" "}
                    <span className="text-mainPurple">Aquí</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[100%] my-10 sm:m-0">
                  <Button
                    type="submit"
                    value="Login"
                    classButton="bg-mainPurple rounded w-[100%] h-[2.5rem] text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-between h-[9rem] gap-3">
                <div className="border-solid border-2 w-full h-[2.5rem] rounded-lg cursor-pointer">
                  <div className=" flex justify-between items-center w-[65%] h-[100%]">
                    <img className="pl-4 w-[2.3rem]" src={google} alt="google" />
                    <span className="text-white pr-2">Google</span>
                  </div>
                </div>
                <div className="border-solid border-2 w-full h-[2.5rem] rounded-lg cursor-pointer">
                  <div className="flex justify-between items-center w-[65%] h-[100%]">
                    <img className="pl-4 w-[2.5rem]" src={facebook} alt="facebook" />
                    <span className="text-white ">Facebook</span>
                  </div>
                </div>
                <div className="flex justify-center items-center border-solid border-2 w-full h-[2.5rem] rounded-lg cursor-pointer">
                  <span className="text-white" onClick={handleRegister}>
                    Registrate con tu correo
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
