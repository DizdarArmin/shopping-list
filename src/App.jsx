/**
 * Tip: 
 * Rename your React components as .jsx instead of .js to see a nice atom/electron icon on VS Code
 * and to quickly differenciate it from normal JavaScript files.
 */

import logo from './logo.svg'; // always remove unused stuff
import './App.css';
import Task from './components/Task';
import Filters from './components/Filters';
import {useState, useEffect} from 'react';

export default function App() {
  // To many booleans for a small project, take a step back and check how to simplify it.
  const [showCompleted, setShowCompleted] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [toggleText, setToggleText] = useState("View completed tasks");

  // because we only have 2 criteria, we dont need 2 booleans to keep track of stuff. 
  const [byPrice, setByPrice] = useState(false);
  const [byName, setByName] = useState(false);

  // 1. Perfect, using dummy data is a nice way to kickstart the project.
  /**
   * 2. The key with the value Math.random() is not neccesary. 
   * If we use functional programming, we can use the index of the array as a key
   * to sort the list.
  */

  const [list, setList] = useState([
      {isFinished: true ,name: "C", price: 500},
      {isFinished: false, name: "A", price: 2500},
      {isFinished: false, name: "B", price: 22500},
      {isFinished: false ,name: "G", price: 300},
      {isFinished: false, name: "H", price: 12},
      {isFinished: false, name: "L", price: 2},
    ]
  ) 

 

// This function sorts created list by name. IF statement is used to sort from A-Z then Z-A
// Same principle applies in next function used for sorting price from low to high and vice versa.
const sortByName = () => {

  let sorted;

  // You dont need a if/else here. This function sorts by name, thus, you can create a new list based on this directly.
  if (byName){
      sorted = list.sort(function (a, b){
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

const sortByPrice = () => {

  let sorted;

  // Same as the other function
  if (byPrice){
    sorted = [... list].sort(function (a, b){
      return a.price - b.price;
    });  
  }
  else {
    sorted = [... list].sort(function (a, b){
      return b.price - a.price;
    });
  }
  setByPrice(!byPrice);
  setList(sorted);
}
const changeValue = (i)=>{

      let currentValue = list[i].isFinished;
          currentValue = !currentValue;
      setList({[list[i].isFinished]: true})

      console.log(i)

}


// Good!
const notCompleted = list.filter(item => item.isFinished === false).map((item, i) =>(
  <Task key={i} 
        state={item.isFinished} 
        name={item.name} 
        handler={() => changeValue(i)}
        price={item.price}></Task>
))
// Good as well
const completed = list.filter(item => item.isFinished === true).map((item, i) =>(
  <Task key={i} 
        state={item.isFinished} 
        name={item.name} 
        handler={() => changeValue(i)}
        price={item.price}></Task>
))



// I will explain latter how to clean this one up.
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
