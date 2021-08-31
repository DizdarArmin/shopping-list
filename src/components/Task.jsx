import "../css/task.css";
import { loadCurrency } from "../services/currency";
// 1. Consistency. Here you use export default to make the export a single line, but on App.js you do the export at the end.
// I do prefer this style as a single line, but do the same in App.js

// Old comments are still present

export default function Task({ item, handler }) {
  const { id, name, price, isFinished } = item;


  return (
    <div className="card form-check d-flex justify-content-between row ">
      <input
        className="col-12 form-check-input"
        type="checkbox"
        onChange={() => handler(id)}
        defaultChecked={isFinished}
      ></input>
      <label className="col text-left label form-check-label">{name}</label>
      <label className="col text-right font-weight-bold label form-check-label">
        {/* Load currency is not reactive because the save/load from localstorage only happens on loading not on the input select onChange handler */}
        {price} {loadCurrency()}
      </label>
    </div>
  );
}
