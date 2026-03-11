import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    const storedToken = localStorage.getItem("userToken");
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
  }, []);

  const login = (userData) => {
    setUser(userData.user);
    setToken(userData.token);
    localStorage.setItem("userInfo", JSON.stringify(userData.user));
    localStorage.setItem("userToken", userData.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userToken");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
