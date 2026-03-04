import { createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Функция входа
  const login = (email, password) => {
    // Здесь должна быть проверка email и password через API
    // Для примера просто создаём объект пользователя
    if (email === 'anna@example.com' && password === '123456') {
      setUser({ name: 'Анна', id: 1, email: 'anna@example.com' });
      return true; // Вход успешен
    }
    return false; // Неверные данные
  };

  // Функция выхода
  const logout = () => {
    setUser(null); // Удаляем данные пользователя
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;