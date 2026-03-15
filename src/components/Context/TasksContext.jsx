/* eslint-disable no-import-assign */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  fetchTasksAdd,
  fetchTasksEdit,
  fetchTasksDelete,
} from "../../services/api";
import { cardList, editList } from "../../js/data";
const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  useEffect(() => {
    async function UpdateList() {
      editList();
    };
    UpdateList();
  });
  const [tasks, setTasks] = useState(cardList);
  const navigate = useNavigate();
  const notify = (data) => toast(data);
  const addTask = (taskData) => {
    const newTask = {
      _id: taskData._id,
      topic: taskData.topic === "" ? "Research" : taskData.topic,
      title: taskData.title === "" ? "Новая задача" : taskData.title,
      description: taskData.description === "" ? "Подробное описание задачи" : taskData.description,
      date: taskData.date === "" ? new Date() : taskData.date,
      status: taskData.status === "" ? "Без статуса" : taskData.status,
    };
     fetchTasksAdd({
      title: newTask.title,
      topic: newTask.topic,
      status: newTask.status,
      description: newTask.description,
      date: newTask.date,
    });
    setTasks((prevTasks) => [...prevTasks, newTask]);
    navigate("/");
    notify("Задача сохранена!");
  };

  const editTask = (taskData) => {
    fetchTasksEdit(taskData);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskData._id
          ? {
              ...task,
              topic: taskData.topic,
              title: taskData.title,
              description: taskData.description,
              date: taskData.date,
              status: taskData.status,
            }
          : task,
      ),
    );
    navigate("/");
    notify("Задача отредактирована!");
  };

  const deleteTask = (taskData) => {
    fetchTasksDelete(taskData);
    navigate("/");
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task._id !== taskData._id),
    );
    notify("Задача удалена!");
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, editTask, deleteTask }}
    >
      {children}
      <ToastContainer />
    </TasksContext.Provider>
  );
}

export default TasksContext;
