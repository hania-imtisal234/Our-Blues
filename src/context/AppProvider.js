import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const setRole = (newRole) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      role: newRole,
    }));
  };

  const setLoggedIn = (newLoggedIn) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      loggedIn: newLoggedIn,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        setRole,
        setLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
