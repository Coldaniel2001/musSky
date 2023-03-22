import React, { useState, useReducer } from "react";
import { types } from "../reducers/types/types";
import { initialState, userReducer } from "../reducers/userReducer";

import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(true);
  const [inputChange, setInputChange] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    passwordrepeat: ""
  });

  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = (user) => {
    dispatch({ type: types.login, payload: user });
  };

  const register = (user) => {
    dispatch({ type: types.register, payload: user });
  };

  const logOutUser = () => {
    dispatch({ type: types.logout });
  };

  const changePassword = (user) => {
    dispatch({ type: types.changePassword, payload: user });
  };

  return (
    <UserContext.Provider
      value={{
        isLoggin,
        setIsLoggin,
        loginUser,
        state,
        register,
        logOutUser,
        changePassword,
        inputChange, setInputChange
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
