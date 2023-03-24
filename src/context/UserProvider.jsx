import React, { useState, useReducer } from "react";
import { types } from "../reducers/types/types";
import { userReducer } from "../reducers/userReducer";

import UserContext from "./UserContext";

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    isLogged: !!user,
    user
  }
};

const UserProvider = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(true);
  const [inputChange, setInputChange] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    passwordrepeat: "",
    date: new Date(Date.now()).toLocaleDateString()
  });

  const [state, dispatch] = useReducer(userReducer, {}, init);

  const loginUser = (email, password) => {
    const user = {
      id: Date.now(),
      email,
      password
    }
    localStorage.setItem("user", JSON.stringify(user))
    dispatch({ type: types.login, payload: user });
  };

  const register = (User) => {
    const user = {
      id: Date.now(),
      name: User.name,
      surname: User.surname,
      email: User.email,
      password: User.password
    }
    dispatch({ type: types.register, payload: user });
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
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
        ...state,
        register,
        logOutUser,
        changePassword,
        inputChange,
        setInputChange
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
