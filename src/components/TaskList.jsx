import Task from '../components/Task';
import '../css/taskList.css';
export default function TaskList({list, status, handler}){
 
const filteredList = list.filter(item => item.isFinished === status);

const TaskItems = filteredList.map((item, i) => (
    <Task index={i} key={item.id} item={item} handler={handler} />
  ));

    return (
        <div className="container-fluid taskList">
            {TaskItems}
        </div>
           
    )
}  
