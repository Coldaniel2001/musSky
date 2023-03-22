import React, { useContext } from "react";
import Login from "../../component/Login/Login";
import Register from "../../component/Register/Register";
import UserContext from "../../context/UserContext";

const LoginPage = () => {
  const { isLoggin } = useContext(UserContext);

  return <>{isLoggin ? <Login /> : <Register />}</>;
};

export default LoginPage;
