import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Content />
        <Portfolio />
        {/* <Contact /> */}
      </div>
    );
  }
}

export default App;
