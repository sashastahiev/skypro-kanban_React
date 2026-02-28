import "../App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import PopBrowse from "../components/PopBrowse";
import PopNewCard from "../components/PopNewCard";
import PopUser from "../components/PopUser";
import Loader from "../components/Loader"
//Создание проекта и разделение App.jsx на компоненты
function MainPage({loading}) {
  return (
    loading ? <Loader/> :
      <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main/>
    </div>
  );
};

export default MainPage;