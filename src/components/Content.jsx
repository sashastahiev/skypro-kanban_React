/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from "react";
import Column from "./Column";
import styled from "styled-components";
import ThemeContext from "./Context/ThemeContext";
import TasksContext from "./Context/TasksContext";
const Smain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;
const Scontainer = styled.main`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;
const SmainBlock = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;
const SmainContent = styled.main`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
const SNoneTasks = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  margin: 15px 0;
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;
function Content() {
  const { theme } = useContext(ThemeContext);
  const { tasks } = useContext(TasksContext);
  const groupTasksByStatus = (tasksArray) => ({
    "Без статуса": {
      id: "Без статуса",
      cards: tasksArray.filter((x) => x.status === "Без статуса"),
    },
    "Нужно сделать": {
      id: "Нужно сделать",
      cards: tasksArray.filter((x) => x.status === "Нужно сделать"),
    },
    "В работе": {
      id: "В работе",
      cards: tasksArray.filter((x) => x.status === "В работе"),
    },
    Тестирование: {
      id: "Тестирование",
      cards: tasksArray.filter((x) => x.status === "Тестирование"),
    },
    Готово: {
      id: "Готово",
      cards: tasksArray.filter((x) => x.status === "Готово"),
    },
  });

  const [columns, setColumns] = useState(groupTasksByStatus(tasks));

  useEffect(() => {
    setColumns(groupTasksByStatus(tasks));
  }, [tasks]);
  const moveCard = (cardId, fromColumnId, toColumnId) => {
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };
      // Находим карточку в исходной колонке
      const cardToMove = updatedColumns[fromColumnId].cards.find(
        (card) => card._id === cardId,
      );
      cardToMove.status = toColumnId;
      // Удаляем карточку из исходной колонки
      updatedColumns[fromColumnId].cards = updatedColumns[
        fromColumnId
      ].cards.filter((card) => card._id !== cardId);

      // Добавляем карточку в целевую колонку
      updatedColumns[toColumnId].cards = [
        ...updatedColumns[toColumnId].cards,
        cardToMove,
      ];
      return updatedColumns;
    });
  };
  return (
    <Smain style={{ background: !theme ? "#151419" : "" }}>
      <Scontainer>
        <SmainBlock>
          <SmainContent>
            {tasks.length !== 0 ?
            Object.values(columns).map((column) => ( column.cards.length !== 0 ?
              <Column key={column.id} column={column} moveCard={moveCard} />
            : "")) :
            <SNoneTasks>
              <div>Новых задач нет</div>
            </SNoneTasks>}
          </SmainContent>
        </SmainBlock>
      </Scontainer>
    </Smain>
  );
}

export default Content;
