import { useContext, useState } from "react";
import Column from "./Column";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import { cardList } from "../js/data";
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
function Main() {
  const {theme} = useContext(ThemeContext)
  const ListColumns = () => {
    const cardsByStatus = {
      "Без статуса": 
      {
        id: "Без статуса",
        cards: cardList.filter(x => x.status == "Без статуса")
      },
      "Нужно сделать": 
      {
        id:"Нужно сделать",
        cards: cardList.filter(x => x.status == "Нужно сделать")
      },
      "В работе": 
      {
        id:"В работе",
        cards: cardList.filter(x => x.status == "В работе")
      },
      "Тестирование": 
      {
        id:"Тестирование",
        cards: cardList.filter(x => x.status == "Тестирование")
      },
      "Готово": 
      {
        id:"Готово",
        cards: cardList.filter(x => x.status == "Готово")
      }
    }
    return cardsByStatus;
  };
  const [columns, setColumns] = useState(ListColumns());
  
    // Функция для перемещения карточек между колонками
    const moveCard = (cardId, fromColumnId, toColumnId) => {
      setColumns((prevColumns) => {
        const updatedColumns = { ...prevColumns };
        // Находим карточку в исходной колонке
        const cardToMove = updatedColumns[fromColumnId].cards.find(
          (card) => card._id === cardId
        );
  
        // Удаляем карточку из исходной колонки
        updatedColumns[fromColumnId].cards = updatedColumns[fromColumnId].cards.filter(
          (card) => card._id !== cardId
        );
  
        // Добавляем карточку в целевую колонку
        updatedColumns[toColumnId].cards = [
          ...updatedColumns[toColumnId].cards,
          cardToMove,
        ];
        return updatedColumns;
      });
    };
  return (
    <Smain style={{background: !theme ? "#151419" : ''}}>
      <Scontainer>
        <SmainBlock>
          <SmainContent>
            {Object.values(columns).map((column) => (
              <Column
                key={column.id}
                column={column}
                moveCard={moveCard}
              />
            ))}
          </SmainContent>
        </SmainBlock>
      </Scontainer>
    </Smain>
  );
}

export default Main;
