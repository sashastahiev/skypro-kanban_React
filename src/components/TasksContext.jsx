import { createContext, useState } from 'react';
import { cardList } from '../js/data';
const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(cardList);

  // Функция добавления новой задачи
  const addTask = (title) => {
    const newTask =  {
    _id: Math.random(),
    theme: "Web Design",
    title: {title},
    description: {title},
    date: new Date(),
    status: "Без статуса",
  };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Функция переключения статуса задачи
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Функция удаления задачи
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;