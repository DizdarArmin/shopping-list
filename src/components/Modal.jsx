import "../App.css";
import { useRecoilState } from "recoil";
import { listState } from "../store/list";
import { loadCurrency } from "../services/currency";

import React, { useState, useEffect } from "react";

export default function Modal({ closeModal }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isButtonDisabled, setButton] = useState(true);
  const [list, setList] = useRecoilState(listState);
  const [placeholder] = useState(loadCurrency().toString());

  const addHandler = () => {
    setList((prev) => {
      let temp = [
        { id: Math.random(), name: name, price: price, isFinished: false },
        ...prev,
      ];
      return temp;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price); // console logs should not be present on final code -1
    addHandler(name, price);
    setName("");
    setPrice("");
    closeModal();
  };

  useEffect(() => {
    let priceToInt = parseInt(price);
    if ((name === "") | (price === "")) {
      setButton(true);
    } else if (priceToInt <= 0) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [name, price]);

  

  return (
    <div className="custom-modal">
      <div className="modal-content container-fluid">
        <form onSubmit={handleSubmit} onReset={closeModal}>
          <div className="container-fluid">
            <div className="row">
              <label className="label text-secondary">Name:</label>
              <input
                autoFocus={true}
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Forks and knives"
              />
            </div>
        {/* This should be a button not a div -1 */}
        <div onClick={closeModal}>
          <i className="closeButton text-danger text-right fas fa-times fa-2x"></i>
        </div>


        <FieldInput
          htmlProperties={name.htmlProperties}
        
        />


            <div className="row">
              <label className="label text-secondary">{children}:</label>
              <input
                className="form-control"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                type="number"
                placeholder={"79.99 " + placeholder}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <button className="form-control btn btn-danger " type="reset">
                Close
              </button>
            </div>

            <div className="col">
              <button
                className="form-control btn btn-primary "
                type="submit"
                disabled={isButtonDisabled}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
