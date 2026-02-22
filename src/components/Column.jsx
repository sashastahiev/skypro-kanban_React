import Card from "./Card"
import { cardList } from "../js/data"
function Column({type, text}) {
const cardsByStatus = cardList.filter(x => x.status == text);
// const content = GetHtmlCardsByStatus(cardsByStatus);
  return (
    <div className="main__column column">
      <div className="column__title">
        <p type={type}>{text}</p>
      </div>
      <div className="cards">
        {cardsByStatus.map(item => (<Card key={item.id} item={item} />))}
      </div>
    </div>
  );
}

export default Column;
