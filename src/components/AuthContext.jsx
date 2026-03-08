import { createContext, useState } from 'react';
import { signIn } from '../services/auth';
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(true);

  // Функция входа
  const login = (login, password) => {
    const data = signIn({login: login, password: password})
    if (data) {
      setUser({ name: data.name, id: data.id, email : data.email });
      return true; // Вход успешен
    }
    else { return false; } // Неверные данные
  }
  // Функция выхода
  const logout = () => {
    setUser(null); // Удаляем данные пользователя
  };

  return (
    <AuthContext.Provider value={{user, logout, login}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;