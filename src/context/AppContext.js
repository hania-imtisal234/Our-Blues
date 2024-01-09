import React from "react";

const AppContext = React.createContext({
  userInfo: {},
  setUserInfo: () => {},
  setRole: () => {},
  setLoggedIn: () => {},
});

export default AppContext;
