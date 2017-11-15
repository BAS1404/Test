import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './App.css';
import Menu from './Components/Menu';
import GeneralMenu from './Components/GeneralMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <GeneralMenu />
        </div>
        <hr className=''/>
        <div className='App-left-block'>
          as
        </div>
        <div className='App-right-block'>
          <Menu />
        </div>
      </div>
    );
  }
}

export default App;
