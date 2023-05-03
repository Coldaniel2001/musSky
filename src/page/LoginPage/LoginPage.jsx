import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

// import React, { useContext } from "react";
// import Login from "../../component/Login/Login";
// import Register from "../../component/Register/Register";
// import UserContext from "../../context/UserContext";

const LoginPage = () => {
  // const { isLoggin } = useContext(UserContext);

  // return <>{isLoggin ? <Login /> : <Register />}</>;
  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      <h1>Login React Review</h1>
      <button onClick={()=>loginWithRedirect()}>Login</button>
    </div>
  )
};

export default LoginPage;
