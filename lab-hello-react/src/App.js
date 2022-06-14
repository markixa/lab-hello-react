// src/App.js
import './App.css';

//import images
import logo from './logo.svg';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuImg from './images/menu-top-xs.png';

function App() {
  return (
    <div class="mainContainer">
      <div class="firstContainer">
        <img src="{ironhackLogo}" alt="Ironhack logo"/>
        <img src="{menuImg}" alt="side menu logo"/>
      </div>
        <h1>Say hello to ReactJS</h1>
        <h2>You will learn to use the most popular frontend library, and become a super Ninka developer.</h2>
        <p>Awesome!</p>
      <div class="secondContainer">
        <div className="element">
          <img src="{icon1}" alt="icon1 logo"/>
          <h3>Declarative</h3>
          <h4>React makes it painless to create interactiveUIs</h4>
        </div>
        <div className="element">
          <img src="{icon2}" alt="icon2 logo"/>
          <h3>Components</h3>
          <h4>Build encapsulated components that manage their state</h4>
        </div>
        <div className="element">
          <img src="{icon3}" alt="icon3 logo"/>
          <h3>Single-way</h3>
          <h4>A set of immutable values are passed to the components</h4>
        </div>
        <div className="element">
          <img src="{icon4}" alt="icon4 logo"/>
          <h3>JSX</h3>
          <h4>Statically-typed, designed to run on modern browsers</h4>
        </div>
      </div>

    </div>
  );
}
export default App;