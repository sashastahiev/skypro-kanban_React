import "./App.css";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import PopBrowse from "./components/PopBrowse";
import PopNewCard from "./components/PopNewCard";
import PopUser from "./components/PopUser";
import Loader from "./components/Loader";
//Создание проекта и разделение App.jsx на компоненты
function App() {
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 1000);
   });
  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header loading = {loading}/>
      {loading ? <Loader /> : <Main/>}
    </div>
  );
}

export default App;
