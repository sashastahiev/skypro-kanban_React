import { createContext, useState } from 'react';
import { signIn } from '../services/auth';
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Функция входа
  const login = (email, password) => {
    // Здесь должна быть проверка email и password через API
    // Для примера просто создаём объект пользователя
    const data = signIn(email, password)
    console.log("AuthContext: " + data)
    if (data) {
      setUser({ name: data.name, id: data.id, email: data.email });
      return true; // Вход успешен
    }
    return false; // Неверные данные
  };

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