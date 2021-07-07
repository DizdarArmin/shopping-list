import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import Filters from './components/Filters';
import {useState} from 'react';

function App() {
  const [showCompleted, setShowCompleted] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [toggleText, setToggleText] = useState("View completed tasks");

  const [byPrice, setByPrice] = useState(false);
  const [byName, setByName] = useState(false);

  const [completedList, setCompletedList] = useState([])
  const [list, setList] = useState([
      {key:Math.random(), isFinished: true ,name: "C", price: 500},
      {key:Math.random(), isFinished: false, name: "A", price: 2500},
      {key:Math.random(), isFinished: false, name: "B", price: 22500},
      {key:Math.random(), isFinished: false ,name: "G", price: 300},
      {key:Math.random(), isFinished: false, name: "H", price: 12},
      {key:Math.random(), isFinished: false, name: "L", price: 2},
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


const notCompleted = list.filter(item => item.isFinished === false).map((item) =>(
  <Task key={item.key} 
        state={item.isFinished} 
        name={item.name} 
        price={item.price}></Task>
))

const completed = list.filter(item => item.isFinished === true).map((item) =>(
  <Task key={item.key} 
        state={item.isFinished} 
        name={item.name} 
        price={item.price}></Task>
))

function setToCompleted(item){
  setList({
    list:{
      ...list,
      
      item: true
    }
  })
}

function change(e){
  e.preventDefault();
  if (toggle){
    setToggleText("View unfinished tasks");
  }
  else {
    setToggleText("View completed tasks");
    
  }
  setShowCompleted(!showCompleted);
  setToggle(!toggle);

}

  return (

    <div className="App">

      <header className="App-header">
      <Filters price ={sortByPrice} name={sortByName}/>

        {showCompleted && completed}
        {!showCompleted && notCompleted}

        <button className="add btn btn-secondary">Add item</button>
        <a className="form-check" onClick={change} href="/">{toggleText}</a>
      </header>
    </div>
  );
}

export default App;
