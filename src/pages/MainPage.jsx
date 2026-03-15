import "../App.css";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useState, useEffect, useContext } from 'react';
import { Outlet } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Content from '../components/Content'
import styled from "styled-components";
import { TasksProvider } from "../components/Context/TasksContext";
import ThemeContext from "../components/Context/ThemeContext";

const Swrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;;
`
function MainPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 500);
  }, [loading]);
  const {theme} = useContext(ThemeContext)
  return (
    <TasksProvider>
      <Swrapper style={{ background: !theme ? "#151419" : "" }}>
        <Header />
          <DndProvider backend={HTML5Backend}>
            {loading ? <Loader /> : <Content />}
          </DndProvider>
        <Outlet />
      </Swrapper>
    </TasksProvider>
  )
};

export default MainPage;
