import TaskList from '../components/TaskList';
import AddSection from '../components/AddSection';
import Filters from '../components/Filters';
import { useState, useEffect } from 'react';
import { listState } from '../store/list';
import { useRecoilState } from 'recoil';

export default function ShoppingList() {
  const [buttonText, setButtonText] = useState('Show completed');
  const [showCompleted, setShowCompleted] = useState(false)


  // because we only have 2 criteria, we dont need 2 booleans to keep track of stuff. 
  const [byPrice, setByPrice] = useState(false);
  const [byName, setByName] = useState(false);

  const [list, setList] = useRecoilState(listState);

  useEffect(() => {
    const data = localStorage.getItem("list");
    const parsedData = JSON.parse(data) ?? [];
    setList(parsedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // This function sorts created list by name. IF statement is used to sort from A-Z then Z-A
  // Same principle applies in next function used for sorting price from low to high and vice versa.
  const sortByName = () => {
    let sorted;
    if (byName) {
      sorted = list.sort(function (a, b) {
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
    if (byPrice) {
      sorted = list.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    else {
      sorted = [...list].sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setByPrice(!byPrice);
    setList(sorted);
  }


  const changeValue = (id) => {
    const index = list.findIndex((item) => item.id === id)
    const cloneList = [...list];
    cloneList[index].isFinished = !cloneList[index].isFinished;
    setList(cloneList);
  }

  const hideShowCompleted = () => {
    setShowCompleted(!showCompleted);
    if (showCompleted) {
      setButtonText("Show completed")
    }
    else {
      setButtonText("Hide completed")
    }
  }

  const clearHandler = () => {
      setList([]);
      localStorage.clear();
  }

  const addHandler = (name, price) => {
    setList((prev) => {
      let temp = [{ id: Math.random(), name: name, price: price, isFinished: false }, ...prev];
      return temp;
    });
  }
  return (
    <div className="container-fluid">

      <AddSection addHandler={addHandler} />

      {list.length > 0 &&
        <Filters name={sortByName} price={sortByPrice} />
      }

      <div className="row text-center d-flex align-items-center ">
        <button className="btn btn-link align-middle"
          onClick={hideShowCompleted}>
          {buttonText}
        </button>
        <button className="btn btn-link align-middle"
          onClick={clearHandler}>
          Clear
        </button>
      </div>

      <TaskList handler={changeValue}
        list={list}
        status={false} />

      {showCompleted &&
        <TaskList handler={changeValue}
          list={list}
          status={true} />
      }
    </div>

  )
}