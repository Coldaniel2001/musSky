import React, { useState, useReducer, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"

import { types } from "../reducers/types/types";
import { userReducer } from "../reducers/userReducer";
import toast from 'react-hot-toast'

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
    passwordRepeat: "",
    // date: new Date(Date.now()).toLocaleDateString()
  });

  const [state, dispatch] = useReducer(userReducer, {}, init);
  const { isLoading, user, getIdTokenClaims } = useAuth0()

  useEffect(() => {
    const fetchData = async () => {

      try {
        if (user) {

          const token = await getIdTokenClaims()

          const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/`, {
            method: "POST",
            headers: {
              'Authorization': 'Bearer ' + token.__raw,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          const data = await response.json()
          if (data.status === "OK") {
            dispatch({  type: types.login, payload: data.newUser })
          }

        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, [getIdTokenClaims, user])

  if (isLoading) {
    return <span>...Loading</span>
  }

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
      name: User.name,
      surname: User.surname,
      email: User.email,
      password: User.password,
      passwordRepeat: User.passwordRepeat
    }
    dispatch({ type: types.register, payload: user });
  };


  const userRegister = async (user) => {

    if (user.password === user.passwordRepeat) {
      const res = await fetch("http://localhost:4002/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      const data = await res.json()
      console.log(data)
    } else {
      toast.error("Las contraseñas no coinciden");

    }

  }

   const userChangeInformation = async(userChanged) => {
    console.log(userChanged)

      const res = await fetch("http://localhost:4002/users/changeinformation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify(userChanged)
      })
      const data = await res.json()
      console.log(data)
    
    }
    



  const logOutUser = () => {
    localStorage.removeItem("user");
    dispatch({ type: types.logout });
  };

  const changePassword = (user) => {
    dispatch({ type: types.changePassword, payload: user });
  };

  const editImage = (url) => {
    dispatch({ type: types.editImage, payload: url })
  }

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
        setInputChange,
        userRegister,
        userChangeInformation,
        editImage
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
