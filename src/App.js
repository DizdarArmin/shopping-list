import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import Filters from './components/Filters';
import {useState} from 'react';

function App() {
  const [list, setList] = useState([
    {isFinished: true, name: "sofa", price: 2500},
    {isFinished: false, name: "samsung tv", price: 22500},
  ]
)

const listItems = list.map((item) =>(
  <Task isFinished={item.isFinished} name={item.name} price={item.price}></Task>
))

  return (

    <div className="App">

      <header className="App-header">
      <Filters/>

        {listItems}
        <button className="add btn btn-secondary">Add item</button>
        <a className="form-check" href="/">View completed tasks</a>
      </header>
    </div>
  );
}

export default App;
