import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const allUsers = `${process.env.REACT_APP_SERVER_URL}/users`;

  const [dataUsers, setDataUsers] = useState([]);


  const [artist, setArtist] = useState(true)
  const [insertInfoUser,setInsertInfoUser] = useState()
  useEffect(() => {
    const musicTracks = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users`);
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
  });

  const { user, getIdTokenClaims } = useAuth0();
  const [userLogged, setUserLogged] = useState("");

  useEffect(() => {
    const createUsers = async () => {
      try {
        if (user) {
          const token = await getIdTokenClaims();
          const infoUsers = {
            name: user.name,
            nickname: user.nickname,
            surname: "en proceso",
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
          if (data.status === "OK") {
            setUserLogged(data.user);
          }

        }
      } catch (error) {

        console.log(error);
      }
    };

    getUser();
  }, [user, getIdTokenClaims, insertInfoUser]);



  const updateUser = async (userId, newValue) => {

    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/update-user`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({userId, newValue})
    })
    const data = await res.json()

    setInsertInfoUser(data.user)
}

  const userChangeInformation = async (userChanged) => {

    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/changeinformation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userChanged),
    });
    const data = await res.json();
  };

  const deleteUser = async (id) => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/users/delete-user/${id}`,{
        method: "DELETE",
      })

}

  return (
    <UserContext.Provider
      value={{
        isLoggin,
        setIsLoggin,
        inputChange,
        setInputChange,
        userChangeInformation,
        setUserLogged,
        userLogged,
        dataUsers,
        setDataUsers,
        updateUser,
        artist,
        setArtist,
        deleteUser

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
