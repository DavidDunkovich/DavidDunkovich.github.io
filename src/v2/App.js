import React, { useState } from 'react';
import './App.scss';
import Header from './Header';
import Menu from './Menu';
import Careers from './Careers';
import Academics from './Academics';

function App(){
  const [activeTab, setActiveTab] = useState('Careers');
  const [activeItem, setActiveItem] = useState();
  return (
    <div id="app">
      <Header />
      <div id="content">
        <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Careers' && <Careers activeItem={activeItem} setActiveItem={setActiveItem} />}
        {activeTab === 'Academics' && <Academics activeItem={activeItem} setActiveItem={setActiveItem} />}
      </div>
    </div>
  )
};

export default App;