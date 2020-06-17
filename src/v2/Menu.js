import React, { useState } from 'react';

function getClassName(activeTab, thisTab) {
  return activeTab === thisTab ? 'active' : 'inactive';
}

function setActiveTabHandler({ target }, setActiveTab) {
  if (target.tagName === 'H2') {
    setActiveTab(target.textContent);
  }
}

const menuItems = [
  "Careers",
  "Freelance",
  "Academics"
];

function Menu({ activeTab, setActiveTab }){
  return (
    <div id="menu" onClick={(e) => setActiveTabHandler(e, setActiveTab)}>
      {menuItems.map((item) => (
        <h2 key={item} className={getClassName(activeTab, item)}>{item}</h2>
      ))}
    </div>
  )
};

export default Menu;