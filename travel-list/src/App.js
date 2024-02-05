import React, { useState } from 'react';
import './index.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className='app'>
      <Logo/>
      <Form items={items} setItems={setItems}/>
      <PackingList items={items}/>
      <Stats/>
    </div>
  );
}
