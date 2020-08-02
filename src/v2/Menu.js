import React from 'react';

function getClassName(activeTab, thisTab) {
  return activeTab === thisTab ? 'active' : 'inactive';
}

const menuItems = [
  "Careers",
  "Projects",
  "Academics",
];

function Menu({ activeTab, setActiveTabHandler }){
  return (
    <div id="menu" onClick={(e) => setActiveTabHandler(e)}>
      {menuItems.map((item) => (
        <h2 key={item} className={getClassName(activeTab, item)}>{item}</h2>
      ))}
    </div>
  )
};

export default Menu;