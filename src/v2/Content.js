import React, { useState } from 'react';

function setActiveItemHandler({ target }, setActiveTab) {
  const classes = target.className;
  if (classes.includes('inactive')) {
    setActiveTab(target.id);
  } else {
    setActiveTab(null);
  }
}

function getClassName(activeItem, thisItem) {
  return activeItem === thisItem ? 'active' : 'inactive';
}

const careers = [
  {
    id: 'aws',
    src: "images/aws.png",
    title: 'Frontend Engineer',
    company: 'Amazon EKS',
    tenure: 'Oct 2020 - Present',
  },
  {
    id: 'lm',
    src: "images/LibertyMutual.jpg",
    title: 'Fullstack Engineer',
    company: 'Liberty Mutual Insurance',
    tenure: 'Jun 2018 - Oct 2020',
  },
];

function Content({ activeItem, setActiveItem }){
  
  return (
    <div id="contentSection" onClick={(e) => setActiveItemHandler(e, setActiveItem)}>
      {careers.map((item) => {
        const isActive = getClassName(activeItem, item.id);
        return (
          <div key={item.id} id={item.id} className={`card ${isActive}`}>
            <img className="cardImg" src={item.src} />
            <div className={`expandedCard ${isActive}`}>
              <div>
                <h3>{item.title}</h3>
                <div id="company">{item.company}</div>
              </div>
              <div id="tenure">
                {item.tenure}
              </div>
            </div>
          </div>
        )})}
    </div>
  )
};

export default Content;