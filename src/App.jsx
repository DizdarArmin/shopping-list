import "./App.css";
import { useRecoilState } from "recoil";
import { listState } from "./store/list";
import { useState, useEffect } from "react";

import WelcomeScreen from "./screens/Welcome";
import ShoppingList from "./screens/ShoppingList";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [list, setList] = useRecoilState(listState);
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  useEffect(() => {
    const data = localStorage.getItem("list");
    const parsedData = JSON.parse(data) ?? [];
    setList(parsedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const FormModal = () => modal && <Modal closeModal={toggleModal} />;

  return (
    <div className="container">
      <FormModal />
      <Header />
      {list.length > 0 ? (
        <ShoppingList toggleModal={toggleModal} />
      ) : (
        <WelcomeScreen toggleModal={toggleModal} />
      )}
      <Footer />
    </div>
  );
}
