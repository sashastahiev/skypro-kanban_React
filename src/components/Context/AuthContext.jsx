import { createContext, useState } from "react";
import { signIn } from "../../services/auth";
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    login: "",
    password: "",
  });

  const login = async (userData) => {
    const data = await signIn(userData);
    if (data) {
      setUser({ name: data.name, login: data.login, password: data.password });
      return true;
    } else {
      return false;
    }
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
