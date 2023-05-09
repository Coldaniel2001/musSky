import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import toast from "react-hot-toast";

import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const allUsers = "http://localhost:4002/users";
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    const musicTracks = async () => {
      const response = await fetch(allUsers);
      const data = await response.json();
      setDataUsers(data.allUsers);
    };
    musicTracks();
  }, [allUsers, setDataUsers]);

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

  const { isLoading, user, getIdTokenClaims } = useAuth0();
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    const createUsers = async () => {
      try {
        if (user) {
          const token = await getIdTokenClaims();
          const infoUsers = {
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            picture: user.picture,
            updated_at: user.updated_at,
            rol: "users",
          };

          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/users/`,
            {
              method: "POST",
              headers: {
                Authorization: "Bearer " + token.__raw,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(infoUsers),
            }
          );
          const data = await response.json();
          if (data.status === "OK") {
            setUserLogged(data.newUser);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    createUsers();

    const getUser = async () => {
      try {
        if (user) {
          const token = await getIdTokenClaims();
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/users/${user.email}`,
            {
              headers: {
                Authorization: "Bearer " + token.__raw,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log(data);
          if (data.status === "OK") {
            setUserLogged(data.user);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [user, getIdTokenClaims]);

  if (isLoading) {
    return <span>...Loading</span>;
  }

  const userRegister = async (user) => {
    if (user.password === user.passwordRepeat) {
      const res = await fetch("http://localhost:4002/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
    } else {
      toast.error("Las contraseñas no coinciden");
    }
  };

  const userChangeInformation = async (userChanged) => {
    console.log(userChanged);

    const res = await fetch("http://localhost:4002/users/changeinformation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userChanged),
    });
    const data = await res.json();
    console.log(data);
  };

  // const logOutUser = () => {
  //   localStorage.removeItem("user");
  //   dispatch({ type: types.logout });
  // };

  // const changePassword = (user) => {
  //   dispatch({ type: types.changePassword, payload: user });
  // };
  return (
    <UserContext.Provider
      value={{
        isLoggin,
        setIsLoggin,
        inputChange,
        setInputChange,
        userRegister,
        userChangeInformation,
        setUserLogged,
        userLogged,
        dataUsers,
        setDataUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
