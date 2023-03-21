import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()


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
    if(passwordRequest.character===true&&passwordRequest.upperLower===true&&passwordRequest.number===true&&passwordRequest.matchPassword===true){
      navigate("/")
    }
  }

  const handleInputChange = (event) => {
    setInputChange({ ...inputChange, [event.target.name]: event.target.value })
  }





  useEffect(() => {
    if ((inputChange.password.length >= 8) && (inputChange.password === inputChange.passwordrepeat) && ((inputChange.password !== inputChange.password.toLowerCase()) && (inputChange.password !== inputChange.password.toUpperCase())) && (/\d/.test(inputChange.password))) {
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: true, upperLower: true, number: true })
    } else if ((inputChange.password.length >= 8) && (inputChange.password === inputChange.passwordrepeat) && ((inputChange.password !== inputChange.password.toLowerCase()) && (inputChange.password !== inputChange.password.toUpperCase()))) {
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: true, upperLower: true, number: false })
    } else if ((inputChange.password.length >= 8) && (inputChange.password === inputChange.passwordrepeat) && (/\d/.test(inputChange.password))) {
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: true, upperLower: false, number: true })
    } else if ((inputChange.password.length >= 8) && ((inputChange.password !== inputChange.password.toLowerCase()) && (inputChange.password !== inputChange.password.toUpperCase())) && (/\d/.test(inputChange.password))) {
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: false, upperLower: true, number: true })
    } else if ((inputChange.password === inputChange.passwordrepeat) && ((inputChange.password !== inputChange.password.toLowerCase()) && (inputChange.password !== inputChange.password.toUpperCase())) && (/\d/.test(inputChange.password))) {
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword: true, upperLower: true, number: true })
    } else if ((inputChange.password.length >= 8) && (inputChange.password === inputChange.passwordrepeat)) {
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: true, upperLower: false, number: false })
    } else if (((inputChange.password !== inputChange.password.toLowerCase()) && (inputChange.password !== inputChange.password.toUpperCase())) && (/\d/.test(inputChange.password))) {
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword: false, upperLower: true, number: true })
    } else if ((/\d/.test(inputChange.password)) && (inputChange.password === inputChange.passwordrepeat)) {
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword: true, upperLower: false, number: true })
    } else if ((/\d/.test(inputChange.password)) && (inputChange.password.length >= 8)) {
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: false, upperLower: false, number: true })
    } else if (((inputChange.password !== inputChange.password.toLowerCase()) && (inputChange.password !== inputChange.password.toUpperCase())) && (inputChange.password.length >= 8)) {
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: false, upperLower: true, number: false })
    } else if (((inputChange.password !== inputChange.password.toLowerCase()) && (inputChange.password !== inputChange.password.toUpperCase())) && (inputChange.password === inputChange.passwordrepeat)) {
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword: true, upperLower: true, number: false })
    } else if((inputChange.password === inputChange.passwordrepeat)&&(inputChange.password.length >= 8)){
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: true, upperLower: false, number: false })
    }else if((inputChange.password.length >= 8)){
      setPasswordRequest({ ...passwordRequest, character: true, matchPassword: false, upperLower: false, number: false })
    }else if((inputChange.password === inputChange.passwordrepeat)&&(inputChange.password!=="")){
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword: true, upperLower: false, number: false })
    }else if (((inputChange.password !== inputChange.password.toLowerCase()) && (inputChange.password !== inputChange.password.toUpperCase())) ) {
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword: false, upperLower: true, number: false })
    }else if ((/\d/.test(inputChange.password)) ) {
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword: false, upperLower: false, number: true })
    }  else {
      setPasswordRequest({ ...passwordRequest, character: false, matchPassword: false, upperLower: false, number: false })
    }
  }, [inputChange.password, inputChange.passwordrepeat])


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
        <div className="flex items-center bg-opacity-0  rounded-xl w-[15rem] h-[25rem] sm:w-[25rem] sm:h-[35rem] sm:m-[0rem] sm:bg-opacity-20 sm:bg-mainPurple sm:border-2 sm:border-purple-900 sm:z-10">
          <form onSubmit={handleSubmit} className="w-full h-[80%] flex flex-col items-center">
            <div className="flex flex-col justify-between h-[90rem] w-4/5">
              <div className="flex flex-col justify-between h-[70%]">
                <div className="relative border-solid border-b-2">
                  <input
                    className="text-white bg-transparent outline-none"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={inputChange.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="relative border-solid border-b-2">
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
                <div className="relative border-solid border-b-2">
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
                <div className="relative border-solid border-b-2">
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
                <div className="relative border-solid border-b-2">
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
                <div className="relative border-solid border-b-2">
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
              <div className="flex flex-col items-start justify-center h-[10rem] w-[25rem]">
                {passwordRequest.character ? <span className="text-[#00A92C]" >* Mínimo 8 caracteres</span> : <span className="text-[#727372]" >* Mínimo 8 caracteres</span>}
                {passwordRequest.upperLower ? <span className="text-[#00A92C]" >* Al menos una letra mayúscula y una minúsculas</span> : <span className="text-[#727372]" >* Al menos una letra mayúscula y una minúsculas</span>}
                {passwordRequest.number ? <span className="text-[#00A92C]" >* Tiene que haber al menos un número</span> : <span className="text-[#727372]" >* Tiene que haber al menos un número</span>}
                {passwordRequest.matchPassword ? <span className="text-[#00A92C]" >* Las contraseñas tienen que coincidir</span> : <span className="text-[#727372]" >* Las contraseñas tienen que coincidir</span>}
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
