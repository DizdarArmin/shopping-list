import TaskList from "../components/TaskList";
import Filters from "../components/Filters";
import { useState, useEffect } from "react";
import { listState } from "../store/list";
import { useRecoilState } from "recoil";

export default function ShoppingList({ toggleModal }) {
  const [buttonText, setButtonText] = useState("Show completed");
  const [showCompleted, setShowCompleted] = useState(false);

  const ShowHide = () => {
    setShowCompleted(!showCompleted);
    showCompleted
      ? setButtonText("Show completed")
      : setButtonText("Hide completed");
  };

  // because we only have 2 criteria, we dont need 2 booleans to keep track of stuff.
  const [byPrice, setByPrice] = useState(false);
  const [byName, setByName] = useState(false);

  const [list, setList] = useRecoilState(listState);

  // This function sorts created list by name. IF statement is used to sort from A-Z then Z-A
  // Same principle applies in next function used for sorting price from low to high and vice versa.
  const sortByName = () => {
    let sorted;
    if (byName) {
      sorted = list.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    } else {
      sorted = list.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    setByName(!byName);
    setList(sorted);
  };

  const sortByPrice = () => {
    let sorted;
    if (byPrice) {
      sorted = list.sort(function (a, b) {
        return a.price - b.price;
      });
    } else {
      sorted = [...list].sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setByPrice(!byPrice);
    setList(sorted);
  };

  const changeValue = (id) => {
    const index = list.findIndex((item) => item.id === id);
    const cloneList = [...list];
    cloneList[index].isFinished = !cloneList[index].isFinished;
    setList(cloneList);
  };

  const clearHandler = () => {
    setList([]);
    localStorage.clear();
  };

  return (
    <div className="container-fluid">
      <Filters name={sortByName} price={sortByPrice} />

      <div className="row text-center d-flex align-items-center ">
        <button className="btn btn-link align-middle" onClick={ShowHide}>
          {buttonText}
        </button>

        <button className="btn btn-link align-middle" onClick={clearHandler}>
          Clear
        </button>
      </div>

      <div className="row text-center d-flex align-items-center ">
        <button className="btn btn-primary btn-lg" onClick={toggleModal}>
          Add a new item
        </button>
      </div>
      <br />
      <TaskList handler={changeValue} list={list} status={false} />

      {showCompleted && (
        <TaskList handler={changeValue} list={list} status={true} />
      )}
    </div>
  );
}
