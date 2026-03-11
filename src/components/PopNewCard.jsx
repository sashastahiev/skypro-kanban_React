/* eslint-disable react-hooks/purity */
import { Link } from "react-router-dom";
import Calendar from "./Calendar";
import { useState, useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import TasksContext from "./Context/TasksContext";

function PopNewCard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { theme } = useContext(ThemeContext);
  const { addTask } = useContext(TasksContext);
  const [taskData, setTaskData] = useState({
    _id: Math.random().toString(36).slice(2, 10),
    topic: "",
    title: "",
    description: "",
    date: "",
    status: "",
  });
  const getMonthYearTitle = () => {
    const monthNames = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    return `${month} ${year}`;
  };
  const goToPreviousMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };
  const goToNextMonth = () => {
    setCurrentDate(
      (next) => new Date(next.getFullYear(), next.getMonth() + 1, 1),
    );
  };
  const setStatus = (data) => {
    setTaskData((prev) => ({
      ...prev,
      status: data,
    }));
  };
  const setTopic = (data) => {
    setTaskData((prev) => ({
      ...prev,
      topic: data,
    }));
  };
  const setDate = (data) => {
    setTaskData((prev) => ({
      ...prev,
      date: data,
    }));
  };
  const setTitle = (event) => {
    setTaskData((prev) => ({
      ...prev,
      title: event.target.value,
    }));
  };
  const setDescription = (event) => {
    setTaskData((prev) => ({
      ...prev,
      description: event.target.value,
    }));
  };

  return (
    <div className="pop-new-card">
      <div className="pop-new-card__container">
        <div
          className="pop-new-card__block"
          style={{
            background: !theme ? "#20202C" : "",
            border: !theme ? "1px solid #20202C" : "",
            boxShadow: !theme ? "0 4px 6px rgba(255, 255, 255, 0.5)" : "",
          }}
        >
          <div className="pop-new-card__content">
            <h3
              className="pop-new-card__ttl"
              style={{ color: !theme ? "white" : "" }}
            >
              Создание задачи
            </h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-browse__status status">
              <p
                style={{ color: !theme ? "white" : "" }}
                className="status__p subttl"
              >
                Статус
              </p>
              <div className="status__themes">
                <div
                  onClick={() => setStatus("Без статуса")}
                  className={
                    taskData.status === "Без статуса"
                      ? "status__theme _gray"
                      : "status__theme"
                  }
                >
                  <p
                    className={taskData.status === "Без статуса" ? "_gray" : ""}
                  >
                    Без статуса
                  </p>
                </div>
                <div
                  onClick={() => setStatus("Нужно сделать")}
                  className={
                    taskData.status === "Нужно сделать"
                      ? "status__theme _gray"
                      : "status__theme"
                  }
                >
                  <p
                    className={
                      taskData.status === "Нужно сделать" ? "_gray" : ""
                    }
                  >
                    Нужно сделать
                  </p>
                </div>
                <div
                  onClick={() => setStatus("В работе")}
                  className={
                    taskData.status === "В работе"
                      ? "status__theme _gray"
                      : "status__theme"
                  }
                >
                  <p className={taskData.status === "В работе" ? "_gray" : ""}>
                    В работе
                  </p>
                </div>
                <div
                  onClick={() => setStatus("Тестирование")}
                  className={
                    taskData.status === "Тестирование"
                      ? "status__theme _gray"
                      : "status__theme"
                  }
                >
                  <p
                    className={
                      taskData.status === "Тестирование" ? "_gray" : ""
                    }
                  >
                    Тестирование
                  </p>
                </div>
                <div
                  onClick={() => setStatus("Готово")}
                  className={
                    taskData.status === "Готово"
                      ? "status__theme _gray"
                      : "status__theme"
                  }
                >
                  <p className={taskData.status === "Готово" ? "_gray" : ""}>
                    Готово
                  </p>
                </div>
              </div>
            </div>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label
                    htmlFor="formTitle"
                    className="subttl"
                    style={{ color: !theme ? "white" : "" }}
                  >
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    style={{color: !theme ? "white" : ""}}
                    type="text"
                    name="name"
                    id="formTitle"
                    value={taskData.title}
                    onChange={setTitle}
                    placeholder="Введите название задачи..."
                  />
                </div>
                <div className="form-new__block">
                  <label
                    htmlFor="textArea"
                    className="subttl"
                    style={{ color: !theme ? "white" : "" }}
                  >
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    style={{color: !theme ? "white" : ""}}
                    name="text"
                    id="textArea"
                    value={taskData.description}
                    onChange={setDescription}
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p
                  className="calendar__ttl subttl"
                  style={{ color: !theme ? "white" : "" }}
                >
                  Даты
                </p>
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
                  <Calendar currentDateMonth={currentDate} edit={true} setDate={setDate} />
                </div>
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p
                className="categories__p subttl"
                style={{ color: !theme ? "white" : "" }}
              >
                Категория
              </p>
              <div className="categories__themes">
                <div
                  onClick={() => setTopic("Web Design")}
                  className={
                    taskData.topic === "Web Design"
                      ? "categories__theme _orange cursor _active-category"
                      : "categories__theme _orange cursor"
                  }
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  onClick={() => setTopic("Research")}
                  className={
                    taskData.topic === "Research"
                      ? "categories__theme _green cursor _active-category"
                      : "categories__theme _green cursor"
                  }
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  onClick={() => setTopic("Copywriting")}
                  className={
                    taskData.topic === "Copywriting"
                      ? "categories__theme _purple cursor _active-category"
                      : "categories__theme _purple cursor"
                  }
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Останавливаем всплытие события клика
                addTask(taskData);
              }}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
