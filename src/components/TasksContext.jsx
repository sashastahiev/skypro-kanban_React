import { createContext, useState } from 'react';
import { cardList } from '../js/data';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {fetchTasksAdd, fetchTasksEdit, fetchTasksDelete} from "../services/api" 
const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(cardList);
  const navigate = useNavigate()
  const notify = (data) => toast(data);
  // Функция добавления новой задачи
  const addTask = (taskData) => {
    const newTask =  {
    _id: taskData._id,
    topic: taskData.topic === '' ? "Research" : taskData.topic,
    title: taskData.title === '' ? "Новая задача" : taskData.title,
    description: taskData.description,
    date: new Date(),
    status: taskData.status === '' ? "Без статуса" : taskData.status,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    fetchTasksAdd({
      title: newTask.title,
      topic:newTask.topic,
      status:newTask.status,
      description:newTask.description,
      date:newTask.date})
    navigate("/")
    notify("Задача сохранена!")
  };
  // Функция редактирования задачи
  const editTask = (taskData) => {
    setTasks((prevTasks) => prevTasks.map((task) => task._id === taskData._id ? 
    {...task, 
      topic: taskData.topic,
      title: taskData.title,
      description: taskData.description,
      date: taskData.date,
      status: taskData.status,
    } : task));
    fetchTasksEdit(taskData)
    navigate("/");
    notify("Задача отредактирована!")
  }
  // Функция переключения статуса задачи
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Функция удаления задачи
  const deleteTask = (taskData) => {
    fetchTasksDelete(taskData)
    navigate("/");
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskData._id));
    notify("Задача удалена!")
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, editTask, toggleTask, deleteTask }}>
      {children}
      <ToastContainer />
    </TasksContext.Provider>
  );
}

export default TasksContext;