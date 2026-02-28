import "../App.css";
import Header from "../components/Header";
import Content from "../components/Content";
import PopBrowse from "../components/PopBrowse";
import PopNewCard from "../components/PopNewCard";
import PopUser from "../components/PopUser";
import Loader from "../components/Loader";
import { useState, useEffect } from 'react';
//Создание проекта и разделение App.jsx на компоненты
function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      {loading ? <Loader /> : <Content />}
    </div>
  );
}

export default MainPage;
