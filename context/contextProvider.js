"use client"
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState({ theme: "light" });
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true);
    const updateUser = (user) => {
        setState((prevState) => ({ ...prevState, user }));
    };
    const toggleTheme = () => {
        setState((prevState) => ({
            ...prevState,
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }));
    };

    return (
        <AppContext.Provider value={{ state, loader, setLoader, toggleTheme, updateUser, data, setData }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
