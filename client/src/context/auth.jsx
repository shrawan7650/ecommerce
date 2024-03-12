/* eslint-disable react/prop-types */
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({ user: parsedData.user, token: parsedData.token });
      console.log(parsedData.user.role);
      if (parsedData.user.role === 1) {
        setIsAdmin(true);
      }
    }
  }, []); 
  return (
    <AuthContext.Provider value={{ auth, isAdmin, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
