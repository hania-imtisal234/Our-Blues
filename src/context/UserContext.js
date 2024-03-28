const { createContext } = require("react");

const UserContext = createContext({
  userInfo: {},
  setUserInfo: () => {},
});

export default UserContext;
