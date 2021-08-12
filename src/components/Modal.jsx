import "../App.css";
import { useRecoilState } from "recoil";
import { listState } from "../store/list";

import React, { useState, useEffect } from "react";

export default function Modal({ closeModal }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isButtonDisabled, setButton] = useState(true);
  const [list, setList] = useRecoilState(listState);

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
    console.log(name, price);
    addHandler(name, price);
    setName("");
    setPrice("");
    closeModal();
  };

  useEffect(() => {
    if (name !== "" && price !== "") {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [name, price]);

  return (
    <div className="custom-modal">
      <div className="modal-content container-fluid">
        <div onClick={closeModal}>
          <i className="closeButton text-danger text-right fas fa-times fa-2x"></i>
        </div>
        <form onSubmit={handleSubmit} onReset={closeModal}>
          <div className="container-fluid">
            <div className="row">
              <label className="label text-secondary">Name</label>
              <input
                autoFocus={true}
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Forks and knives"
              />
            </div>

            <div className="row">
              <label className="label text-secondary">Price</label>
              <input
                className="form-control"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                type="number"
                placeholder="750 SEK"
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
