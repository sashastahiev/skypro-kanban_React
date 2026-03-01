import "../App.css";
import Header from "../components/Header";
import Content from "../components/Content";
import PopBrowse from "../components/PopBrowse";
import PopNewCard from "../components/PopNewCard";
import PopUser from "../components/PopUser";
import Loader from "../components/Loader";
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
//Создание проекта и разделение App.jsx на компоненты
function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 500);
  }, [loading]);

  return (
    <div className="wrapper">
      <Header />
      {loading ? <Loader /> : <Content />}
      <Outlet />
    </div>
  );
}

export default MainPage;
