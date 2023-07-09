import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export default function GlobalVariables({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [userAddress, setUserAddress] = useState(null);
  const [ethBalance, setEthBalance] = useState();

  if (userAddress != null) {
    setIsLogin(true);
  }

  return (
    <GlobalContext.Provider
      value={{
        isLogin,
        userAddress,
        setUserAddress,
        ethBalance,
        setEthBalance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
