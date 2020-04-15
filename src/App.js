import React from 'react';
import logo from './logo.svg';
import './App.css';
import deckContainer from './components/deck_container.js'
import packContainer from './components/pack_container.js'

function App() {
  return (
    <div className="App">
      <h3>Let's Draft!</h3>
      <packContainer />
      <deckContainer />
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
    </div>
  );
}

export default App;
