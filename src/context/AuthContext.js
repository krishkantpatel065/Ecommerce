import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.length > 0) {
      setUser(storedUser[0]);
    }
    // console.log(storedUser);
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify([userData]));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(false);
  };
  const signup = (userDetails) => {
    localStorage.setItem("user", JSON.stringify([userDetails]));
    setUser(userDetails);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
