import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';

function App(){
  const [activeTab, setActiveTab] = useState('Careers');
  const [activeItem, setActiveItem] = useState('lm');
  return (
    <div id="app">
      <Header />
      <div id="content">
        <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
        <Content activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
    </div>
  )
};

export default App;