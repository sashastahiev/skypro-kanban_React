import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function PopUser({setIsAuth}) {
   const navigate = useNavigate();
   function handleLogout(e) {
      e.preventDefault();
      setIsAuth(false);
      navigate("/login");
   }
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <Link onClick={handleLogout} to="/register">Да, выйти</Link>{" "}
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to="/">Нет, остаться</Link>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUser;
