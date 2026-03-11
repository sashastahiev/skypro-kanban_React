import Card from "./Card";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import ThemeContext from "./Context/ThemeContext";
import { useContext } from "react";
const SColumnTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 15px 0;
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;
const SMainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;
const SCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;
const Column = ({ column, moveCard }) => {
  const { theme } = useContext(ThemeContext);
  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item) => moveCard(item.id, item.fromColumnId, column.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  const backgroundColor = isOver ? "#f9f9f9" : "#eaeef6";
  const backgroundColorDark = isOver ? "#2b2932" : "#151419";
  return (
    <SMainColumn
      ref={drop}
      style={{ background: !theme ? backgroundColorDark : backgroundColor }}
    >
      <SColumnTitle>
        <div>{column.id}</div>
        <div>{column.cards.length}</div>
      </SColumnTitle>
      <SCards>
        {column.cards.map((card) => (
          <Card key={card._id} card={card} columnId={column.id} />
        ))}
      </SCards>
    </SMainColumn>
  );
};

export default Column;
