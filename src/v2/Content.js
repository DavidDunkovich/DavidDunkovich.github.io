import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react';

function setActiveItemHandler({ target }, setActiveTab) {
  console.log(target.className)
  if (target.className.includes("card")) {
    setActiveTab(target.id);
  }
}

function getClassName(activeItem, thisItem) {
  return activeItem === thisItem ? 'active' : 'inactive';
}

const careers = [
  {
    id: 'aws',
    src: "images/aws.png",
  },
  {
    id: 'lm',
    src: "images/LibertyMutual.jpg",
  },
];

function Content({ activeItem, setActiveItem }){
  
  return (
    <div id="contentSection" onClick={(e) => setActiveItemHandler(e, setActiveItem)}>
      {careers.map((item) => (
        <div id={item.id} className={`card ${getClassName(activeItem, item.id)}`}>
          <img className="cardImg" src={item.src} />
        </div>
      ))}
    </div>
  )
};

export default Content;