import { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";
function PopBrowse({item}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const getMonthYearTitle = () => {
    const monthNames = [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    return `${month} ${year}`;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(next => new Date(next.getFullYear(), next.getMonth() + 1, 1));
  };
  const toggleEdit = () => {
    setEdit(!edit)
  }
  const {theme} = useContext(ThemeContext)
  const [edit, setEdit] = useState(false)
  let colorTopic = "";
  if (item.topic == "Research") colorTopic = "_green";
  else if (item.topic == "Web Design") colorTopic = "_orange";
  else if (item.topic == "Copywritting") colorTopic = "_purple";
  return (
    <>
      <div className="pop-browse">
        <div className="pop-browse__container">
          <div className="pop-browse__block"
          style={{
          background: !theme ? "#20202C" : "",
          border: !theme ? "1px solid #20202C" : "",
          boxShadow: !theme ? '0 4px 6px rgba(255, 255, 255, 0.5)' : ''
        }}>
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl"
                style={{color: !theme ? "white" : ""}}>{item.title}</h3>
                <div className={"categories__theme theme-top " + colorTopic + " _active-category"}>
                  <p className={colorTopic}>{item.topic}</p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p style={{color: !theme ? "white" : ""}} className="status__p subttl">Статус</p>
                <div className="status__themes">
                  {!edit ? <div className="status__theme _gray">
                    <p className="_gray">{item.status}</p>
                  </div> : 
                  <>
                    <div className="status__theme">
                      <p>В работе</p> 
                    </div>
                    <div className="status__theme">
                      <p>Нужно сделать</p> 
                    </div>
                    <div className="status__theme">
                      <p>В работе</p>
                    </div>
                    <div className="status__theme">
                      <p>Тестирование</p>
                    </div>
                    <div className="status__theme">
                      <p>Готово</p>
                    </div>
                  </>}
                </div>
              </div>
              <div className="pop-browse__wrap">
                <form
                  className="pop-browse__form form-browse"
                  id="formBrowseCard"
                  action="#"
                >
                  <div className="form-browse__block">
                    <label style={{color: !theme ? "white" : ""}} for="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      readOnly
                      placeholder="Введите описание задачи..."
                    >{item.description}</textarea>
                  </div>
                </form>
                <div className="pop-new-card__calendar calendar">
                  <p style={{color: !theme ? "white" : ""}} className="calendar__ttl subttl">Даты</p>
                  <div className="calendar__block">
                    <div className="calendar__nav">
                      <div className="calendar__month">{getMonthYearTitle()}</div>
                      <div className="nav__actions">
                        <div
                          className="nav__action"
                          data-action="prev"
                          onClick={goToPreviousMonth}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="11"
                            viewBox="0 0 6 11"
                          >
                            <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                          </svg>
                        </div>
                        <div
                          className="nav__action"
                          data-action="next"
                          onClick={goToNextMonth}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="11"
                            viewBox="0 0 6 11"
                          >
                            <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <Calendar currentDateMonth={currentDate} />
                  </div>
                </div>
              </div>
              <div className="theme-down__categories theme-down">
                <p style={{color: !theme ? "white" : ""}} className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              <div className={!edit ? "pop-browse__btn-browse" : "_hide"}>
                <div className="btn-group">
                  <button 
                    style={{border: !theme ? "1px solid white" : ""}}
                    onClick={toggleEdit} 
                    className={theme ? "btn-browse__edit _btn-bor _hover03" : "btn-browse__edit _btn-bor blueHover"}>
                    <a style={{color: !theme ? "white" : ""}} href="#">Редактировать задачу</a>
                  </button>
                  <button
                    style={{border: !theme ? "1px solid white" : ""}}
                    className={theme ? "btn-browse__delete _btn-bor _hover03" : "btn-browse__edit _btn-bor blueHover"}>
                    <a style={{color: !theme ? "white" : ""}} href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
              <div className={edit ? "pop-browse__btn-edit" : "_hide"}>
                <div className="btn-group">
                  <button 
                    onClick={toggleEdit} 
                    className="btn-edit__edit _btn-bg _hover01">
                    <a href="#">Сохранить</a>
                  </button>
                  <button
                    style={{border: !theme ? "1px solid white" : ""}}
                    className={theme ? "btn-browse__delete _btn-bor _hover03" : "btn-browse__edit _btn-bor blueHover"}>
                    <a style={{color: !theme ? "white" : ""}} href="#">Отменить</a>
                  </button>
                  <button
                    style={{border: !theme ? "1px solid white" : ""}}
                    className={theme ? "btn-browse__delete _btn-bor _hover03" : "btn-browse__edit _btn-bor blueHover"}
                    id="btnDelete"
                  >
                    <a style={{color: !theme ? "white" : ""}} href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopBrowse;

