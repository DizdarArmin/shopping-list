import TaskList from "../components/TaskList";
import Filters from "../components/Filters";
import { useState } from "react";
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
  // should be on top next to other hooks and then... refactored into another component.
  const [byPrice, setByPrice] = useState(false);
  const [byName, setByName] = useState(false);

  const [list, setList] = useRecoilState(listState);

  // This function sorts created list by name. IF statement is used to sort from A-Z then Z-A
  // Same principle applies in next function used for sorting price from low to high and vice versa.

  // use methods for methods, not contst.
  const sortByName = () => {
    // use conts by default.
    // only use let for stuff that will change a lot.
    // here it only changes once, depending of the if statement
    let sorted;

    if (byName) {
      // can be converted to arrow function
      // then you can ommit the {} and return keyword if is only
      sorted = list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted = list.sort((a, b) => b.name.localeCompare(a.name));
    }

    setByName(!byName);
    setList(sorted);
  };

  // use methods for methods, not contst.
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

  // use methods for methods, not contst.
  const changeValue = (id) => {
    const index = list.findIndex((item) => item.id === id);
    const cloneList = [...list];
    cloneList[index].isFinished = !cloneList[index].isFinished;
    setList(cloneList);
  };

  // use methods for methods, not contst.
  const clearHandler = () => {
    setList([]);
    localStorage.clear();
  };

  return (
    <div className="container-fluid">
      {/* this can be a self contained method */}
      {/* Furthermore (even if i did not did on my project) you can pass the list and just a command to replace the list based on the sorting */}
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

      {/* Least privilege principle you are sending the whole list to be filtered here -1 */}
      {/* Imagine sending all your clients credit card data to one consumer that is requesting his data to check a duplicate purchase is super dangerous no? */}
      <TaskList handler={changeValue} list={list} status={false} />

      {/* Here is good method to conditionally rendering something withouth making an extra component, here -1 */}
      {showCompleted && (
        <TaskList handler={changeValue} list={list} status={true} />
      )}
    </div>
  );
}
