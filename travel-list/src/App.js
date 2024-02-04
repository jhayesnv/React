import React, { Component } from 'react';
import './index.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <Form/>
        <PackingList/>
        <Stats/>
      </div>
    );
  }
}

export default App;
