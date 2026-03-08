import { createContext, useState } from 'react';
import { cardList } from '../js/data';
import { useNavigate } from "react-router-dom";
const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(cardList);
  const navigate = useNavigate()
  // Функция добавления новой задачи
  const addTask = (taskData) => {
    const newTask =  {
    _id: taskData._id,
    topic: taskData.topic,
    title: taskData.title,
    description: taskData.description,
    date: new Date(),
    status: taskData.status,
  };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    navigate("/")
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
    navigate("/");
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;