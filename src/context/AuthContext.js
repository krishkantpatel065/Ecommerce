import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useSelector } from "react-redux";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.length > 0) {
      setUser(storedUser[0]);
    }
  }, []);

  const login = useCallback((userData) => {
    localStorage.setItem("user", JSON.stringify([userData]));
    setUser(userData);
    console.log(user);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(false);
  }, []);

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
      cartItems ,totalPrice
    }),
    [user, login, logout, signup]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
