import Task from '../components/Task';
export default function TaskList({list, status, handler}){
 
const filteredList = list.filter(item => item.isFinished === status);

const TaskItems = filteredList.map((item) => (
    <Task key={item.id} item={item} handler={handler} />
  ));

    return (
        <div>
            {TaskItems}
        </div>
           
    )
}  
