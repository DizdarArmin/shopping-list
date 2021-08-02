/**
 * Tip: 
 * Rename your React components as .jsx instead of .js to see a nice atom/electron icon on VS Code
 * and to quickly differenciate it from normal JavaScript files.
 */
import './App.css';

import TaskList from './components/TaskList';
import AddSection from './components/AddSection';
import Filters from './components/Filters';
import {useState, useEffect} from 'react';
import logo from './assets/logo.png';


export default function App() {
  const [buttonText, setButtonText] = useState('Show completed');
  const [showCompleted, setShowCompleted] = useState(false)


  // because we only have 2 criteria, we dont need 2 booleans to keep track of stuff. 
  const [byPrice, setByPrice] = useState(false);
  const [byName, setByName] = useState(false);


  // 1. Perfect, using dummy data is a nice way to kickstart the project.
  /**
   * 2. The key with the value Math.random() is not neccesary. 
   * If we use functional programming, we can use the index of the array as a key
   * to sort the list.
  */
  const [list,setList]= useState(JSON.parse(localStorage.getItem("list")));

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
      sorted = [...list].sort(function (a, b){
        return a.price - b.price;
      });  
    }
    else {
      sorted = [...list].sort(function (a, b){
        return b.price - a.price;
      });
    }
    setByPrice(!byPrice);
    setList(sorted);
}
const changeValue = (i, id) => {
    console.log("index: " + i)
    console.log("key: " + id);

}

const hideShowCompleted = () => {
      setShowCompleted(!showCompleted);
      if(showCompleted){
        setButtonText("Show completed")        
      }
      else {
        setButtonText("Hide completed")
      }
}

useEffect(()=> {
  localStorage.setItem("list", JSON.stringify(list));
}, [list])

const addHandler = (name, price) => {
  setList((prev) => {
    let temp = [{id: Math.random(), name:name, price: price, isFinished: false}, ...prev];
    return temp;
  });
}



  return (

    <div className="App-header">

      <header className="container">
        <img className="img img-fluid col" src={logo} alt="logo"></img>
        <h1 className="text-center d-flex align-items-center">Shopping list</h1>
        <AddSection  addHandler ={addHandler}/>

        {list.length > 0 &&
        <Filters name={sortByName} price={sortByPrice} />
        }
        <TaskList handler={changeValue} 
                  list = {list} 
                  status = {false}/>

        {list.length === 0 &&
        <div className="text-center d-flex align-items-center">
          <br></br>
          <br></br>
          This will help you during shopping at our but also at any other store.
          Start by writing product name and price, then add it to your list.
          Happy shopping!
        </div>
        }

        {list.length > 0 &&
        <div className="text-center d-flex align-items-center ">
          <button className="btn btn-link align-middle"
                  onClick={hideShowCompleted}>
            {buttonText}
          </button>
        </div> 
        }
        {showCompleted &&
        <TaskList handler={changeValue} 
                  list = {list} 
                  status = {true}/>
        }
      </header>
    </div>
  );
}
