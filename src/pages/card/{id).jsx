import { useParams } from 'react-router-dom';
import PopBrowse from '../../components/PopBrowse';
import { cardList } from '../../js/data';
function CardId() {
    const { id } = useParams();
    const Item = cardList.find(item => item._id === id);
    return <PopBrowse item={Item}/>
}
export default CardId