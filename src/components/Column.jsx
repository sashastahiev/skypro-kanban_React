import Card from "./Card"
import { cardList } from "../js/data"
import styled from "styled-components";
function Column({text}) {
const cardsByStatus = cardList.filter(x => x.status == text);

const SColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`
const SMainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`
const SCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`
  return (
    <SMainColumn>
      <SColumnTitle>
        {text}
      </SColumnTitle>
      <SCards>
        {cardsByStatus.map(item => (<Card key={item.id} item={item} />))}
      </SCards>
    </SMainColumn>
  );
}

export default Column;
