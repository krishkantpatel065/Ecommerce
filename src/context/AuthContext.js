import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState()
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedToken = JSON.parse(localStorage.getItem("token"))

    if (savedUser && savedToken) {
      setUser(savedUser[0]);
      setToken(savedToken)
    }
  }, []);

  const login = (Data) => {
    console.log(Data);
    localStorage.setItem("user", JSON.stringify([Data.user]));
    localStorage.setItem("token", JSON.stringify([Data.token]));
    setUser(Data.user);
    setToken(Data.token)
    console.log(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(false);
    setToken(null)
  }

  const signup = useCallback((userDetails) => {
    localStorage.setItem("user", JSON.stringify([userDetails]));
    setUser(userDetails);
  }, []);


  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      signup,
      isAuth: !!token,
      cartItems, totalPrice
    }),
    [user,token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

