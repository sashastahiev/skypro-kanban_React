import { useParams } from 'react-router-dom';
import PopBrowse from '../../components/PopBrowse';
import TasksContext from '../../components/TasksContext';
import { useContext } from 'react';
function CardId() {
    const { id } = useParams();
    const {tasks} = useContext(TasksContext) 
    const Item = tasks.find(item => item._id == id);
    return <PopBrowse item={Item}/>
}
export default CardId