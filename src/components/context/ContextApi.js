import React, { createContext , useContext } from "react";


const AppContext = createContext();

const AppProvider = ({children})=>{
    return <AppContext.Provider value={'hello Context'}>{children}</AppContext.Provider>
}

//Custom Hook 

const useGlobalContext = ()=>{
    return useContext(AppContext)

}

export { AppContext , AppProvider , useGlobalContext }