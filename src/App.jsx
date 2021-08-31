// Nice separation of NPM packages from project files except...
// everything that the from route does not have ./ or ../ is a NPM package and goes on the top
import "./App.css"; // this is a project file
import { useRecoilState } from "recoil";
import { listState } from "./store/list"; // this is a project file
import { useState, useEffect } from "react";

// files with ./ or ../ go below the npm packages.
import WelcomeScreen from "./screens/Welcome";
import ShoppingList from "./screens/ShoppingList";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [list, setList] = useRecoilState(listState);
  // modal sounds like an object, renema to showModal or isModalActice, use a verb for booleans not nouns. -1 toggleModal and setToggleModal
  const [modal, setModal] = useState(false);

  // avoid 1 line functions. if they are related to user events, they can be done directly on the event.
  // toggling booleans can be done directly on the event without making 3 lines of code for a simple 1 line function
  function toggleModal() {
    setModal(!modal);
  }
  // inconsistent space, this one was right below the toggleModal
  useEffect(() => {
    const data = localStorage.getItem("list");
    const parsedData = JSON.parse(data) ?? [];
    setList(parsedData);
  }, []);

  // can be made 1 line by removing the {} in the arrow function.
  // 1 line arrow functions can omit the {} entirelly
  useEffect(() => localStorage.setItem("list", JSON.stringify(list)), [list]);

  // basic if/else statements to coditionally rending an element can be put on the JSX
  // to avoid having a component "FormModal" that only exist to show another component "Modal"
  const FormModal = () => modal && <Modal closeModal={toggleModal} />;

  return (
    <div className="container">
      {/* modal && <Modal closeModal={toggleModal} /> */}
      <FormModal />
      <Header />
      {/* Inconsistency in naming. If one is a screen, the other as well -1 */}
      {list.length > 0 ? (
        <ShoppingList toggleModal={toggleModal} />
      ) : (
        <WelcomeScreen toggleModal={toggleModal} />
      )}
      <Footer />
    </div>
  );
}
