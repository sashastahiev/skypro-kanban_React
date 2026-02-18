import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import PopBrowse from "./components/PopBrowse";
import PopNewCard from "./components/PopNewCard";
import PopUser from "./components/PopUser";
//Создание проекта и разделение App.jsx на компоненты
function App() {
  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App;
