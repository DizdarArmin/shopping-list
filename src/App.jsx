import './App.css';
import { useRecoilState } from 'recoil';
import { listState } from './store/list';
import { useState } from 'react';
import hero from './assets/velvet-hero.jpg';
import logo from './assets/logo.png';
import WelcomeScreen from './components/Welcome';
import ShoppingList from './components/ShoppingList';


export default function App() {
  const [isWelcomeScreen, setWelcomeScreen] = useState(true);

  function toggleShoppingList() {
    setWelcomeScreen(false);
  }

  return (
    <div className="container">
      <div className="images">
        <img className="img img-fluid" src={hero} alt="hero" />
        <img className="logo img img-fluid" src={logo} alt="logo" />
      </div>

      {isWelcomeScreen &&
        <WelcomeScreen handler={toggleShoppingList} />
      }
      {!isWelcomeScreen &&
        <ShoppingList />
      }
      <footer className="d-flex footer text-center justify-content-around">
        <div className="container row">
          <a className="col" 
             target="_blank" 
             href="https://www.linkedin.com/armindizdar" 
             rel="noreferrer">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a className="col"  
             target="_blank" 
             href="https://github.com/DizdarArmin/shopping-list" 
             rel="noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>

      </footer>
    </div>
  );
}
