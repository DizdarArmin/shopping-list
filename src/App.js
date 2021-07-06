import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import Filters from './components/Filters';
import {useState} from 'react';

function App() {
  const [filter,setFilter] = useState('')

  const [byPrice, setByPrice] = useState(false);
  const [byName, setByName] = useState(false);

const [list, setList] = useState([
    {key:Math.random() ,name: "C", price: 500},
    {key:Math.random(), name: "A", price: 2500},
    {key:Math.random(), name: "B", price: 22500},
    {key:Math.random() ,name: "G", price: 300},
    {key:Math.random(), name: "H", price: 12},
    {key:Math.random(), name: "L", price: 2},
  ]
) 

const sortByName = (e) => {
  e.preventDefault();
  let sorted;

  if (byName){
    sorted = list.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  else {
    sorted = list.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  setByName(!byName);
  setList(sorted);
}

const sortByPrice = (e) => {
  e.preventDefault();
  let sorted;

  if (byPrice){
    sorted = [... list].sort((a, b) => {
      return a.price - b.price;
    });  
  }
  else {
    sorted = [... list].sort((a, b) => {
      return b.price - a.price;
    });
  }
  setByPrice(!byPrice);
  setList(sorted);
}

const listItems = list.map((item) =>(
  <Task key={item.key} isFinished={item.isFinished} name={item.name} price={item.price}></Task>
))

  return (

    <div className="App">

      <header className="App-header">
      <Filters price ={sortByPrice} name={sortByName}/>

        {listItems}
        <button className="add btn btn-secondary">Add item</button>
        <a className="form-check" href="/">View completed tasks</a>
      </header>
    </div>
  );
}

export default App;
