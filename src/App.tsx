import * as React from 'react';
import './App.scss';
// import * as ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar navItems={['nav1', 'nav2', 'nav3', 'nav4', 'nav5', 'nav6']}/>
      </div>
    );
  }
}

export default App;
