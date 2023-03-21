import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import DataContext from "../../context/DataContext";



import musicWoman from "../../assets/images/bgLoginRegister/modelPortada.png";
import logo from "../../assets/images/logo/LogoMusSky.png";



const Register = () => {
  const { setIsLoggin } = useContext(DataContext);
  const [passwordRequest, setPasswordRequest] = useState({
    character: false,
    upperLower: false,
    number: false,
    matchPassword: false
  })

  const [inputChange, setInputChange] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    passwordrepeat: ""
  });

  const handleLogin = () => {
    setIsLoggin(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleInputChange = (event) => {
    setInputChange({ ...inputChange, [event.target.name]: event.target.value });
    
    
  }

  useEffect(()=>{
    if ((inputChange.password.length >= 8 && inputChange.passwordrepeat.length >= 8) && (inputChange.password === inputChange.passwordrepeat) ) {
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: true  })
    } else {
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword:false })
    }

  },[inputChange.password, inputChange.passwordrepeat])

console.log(passwordRequest)
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-t from-black via-black to-mainPurple flex justify-center lg:justify-end overflow-hidden">
        <img
          className="object-cover object-center md:object-left opacity-20 "
          src={musicWoman}
          alt="MW"
        />
      </div>
      <div className="flex flex-col  justify-between items-center fixed inset-0 z-10 sm:justify-center sm:h-screen">
        <img
          className="sm:-mb-40 w-[10rem]  sm:w-[25rem]"
          src={logo}
          alt="Logo"
        />
        <div className="w-full sm:w-auto h-full flex items-center">
        <div className="flex items-center  rounded-xl w-full  sm:w-[25rem] sm:pb-6 sm:m-[0rem] sm:bg-opacity-20 sm:bg-mainPurple sm:border-2 sm:border-purple-900 sm:z-10">
          <form onSubmit={handleSubmit} className="w-full h-auto sm:h-[80%] flex flex-col items-center">
          <h2 className="mb-16 text-4xl sm:mb-5 text-white  font-bold my-5">Registro</h2>
            <div className="flex flex-col  w-4/6 ">
              <div className="flex flex-col justify-between gap-1 ">
                <div className="relative border-solid border-b">
                  <input
                    className="text-white bg-transparent outline-none py-1 w-full"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={inputChange.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="relative border-solid border-b py-1 mt-2 w-full">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="text"
                    name="surname"
                    placeholder="Apellidos"
                    value={inputChange.surname}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="relative border-solid border-b py-1 mt-2 w-full">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={inputChange.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="relative border-solid border-b py-1 mt-2 w-full">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    value={inputChange.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="relative border-solid border-b py-1 mt-2 w-full">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={inputChange.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="relative border-solid border-b py-1 mt-2 w-full">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="password"
                    name="passwordrepeat"
                    placeholder="Repetir contraseña"
                    value={inputChange.passwordrepeat}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center mt-3 mb-8 w-[25rem]">
                {passwordRequest.character ? <span className="text-[#00A92C] text-[0.8rem]" >* Mínimo 8 caracteres</span> : <span className="text-[#727372] text-[0.8rem]" >* Mínimo 8 caracteres</span>}
                {passwordRequest.upperLower ? <span className="text-[#00A92C] text-[0.8rem]" >* Al menos una letra mayúscula y una minúsculas</span> : <span className="text-[#727372] text-[0.8rem]" >* Al menos una letra mayúscula y una minúsculas</span>}
                {passwordRequest.number ? <span className="text-[#00A92C] text-[0.8rem]" >* Tiene que haber al menos un número</span> : <span className="text-[#727372] text-[0.8rem]" >* Tiene que haber al menos un número</span>}
                {passwordRequest.matchPassword ? <span className="text-[#00A92C] text-[0.8rem]" >* Las contraseñas tienen que coincidir</span> : <span className="text-[#727372] text-[0.8rem]" >* Las contraseñas tienen que coincidir</span>}
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
      </div>
    </>
  );
};

export default Register;
