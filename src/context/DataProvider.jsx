import React, { useState } from 'react'

import DataContext from './DataContext'


 const DataProvider = ({children}) => {
  
    const [isLoggin, setIsLoggin] = useState(true);

   

  return (
    <DataContext.Provider value={{isLoggin, setIsLoggin}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider
