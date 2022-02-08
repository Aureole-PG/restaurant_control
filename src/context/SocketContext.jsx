import { createContext, useEffect } from "react";
import { useSocket } from "./useSocket";
export const Context = createContext(null);

const SocketCotext = ({ children }) => {
  const { socket, online } = useSocket({
    serverPath: "https://tesis-restaurant-api.herokuapp.com",
  });
  useEffect(() => {
    console.log(online);
  }, [online]);

  return (
    <Context.Provider value={{ socket, online }}>{children}</Context.Provider>
  );
};

export default SocketCotext;
