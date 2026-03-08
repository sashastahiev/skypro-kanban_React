import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";
function PopUser({setIsAuth}) {
  const {theme} = useContext(ThemeContext)
   const navigate = useNavigate();
   function handleLogout(e) {
      e.preventDefault();
      setIsAuth(false)
      navigate("/login");
   }
  return (
    <div className="pop-exit">
      <div className="pop-exit__container">
        <div className="pop-exit__block" style={{background: !theme ? "#20202C" : ""}}>
          <div className="pop-exit__ttl">
            <h2 style={{color: !theme ? "white" : ""}}>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <Link onClick={handleLogout} to="/register">Да, выйти</Link>{" "}
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo"  style={{border: !theme ? "1px solid white" : ""}}>
                <Link style={{color: !theme ? "white" : ""}} to="/">Нет, остаться</Link>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUser;
