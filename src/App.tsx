import React from 'react';
import logo from './logo.svg';
import './App.css';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FooterComponent></FooterComponent>
      </header>
    </div>
  );
}

export default App;
