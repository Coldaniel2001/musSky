import React, { useState,useReducer } from 'react'
import RegisterReducer from '../reducer/registerReducer';
import DataContext from './DataContext'

const init = () => {
  return {
      name: "" ,
      surname: "",
      username: "",
      email: "",
      password: "",
      passwordRepeat: "" 
  }
}

 const DataProvider = ({children}) => {
  
    const [isLoggin, setIsLoggin] = useState(true);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [state, dispatch] = useReducer(RegisterReducer, {}, init);
    

  return (
    <DataContext.Provider value={{state, dispatch, isLoggin, setIsLoggin, messageSuccess, setMessageSuccess, messageError, setMessageError}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider
