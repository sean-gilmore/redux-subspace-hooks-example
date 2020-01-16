import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubApp from './SubApp';
import { SubspaceProvider } from 'react-redux-subspace'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SubspaceProvider mapState={(state) => state.subCounter} namespace="subCounter">
          <SubApp />
        </SubspaceProvider>
      </header>
    </div>
  );
}

export default App;
