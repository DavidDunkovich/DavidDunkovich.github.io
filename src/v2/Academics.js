import React from 'react';

function setActiveItemHandler({ target }, setActiveItem) {
  const availableItems = new Set(['oshkosh', 'waukesha', 'km']);
  if (availableItems.has(target.id)) {
    target.className.includes('inactive') ? setActiveItem(target.id) : setActiveItem(null);
  }
}

function getClassName(activeItem, thisItem) {
  return activeItem === thisItem ? 'active' : 'inactive';
}

const academics = [
  {
    id: 'oshkosh',
    src: "images/oshkosh_logo.png",
    alt: 'oshkosh logo',
    title: 'UW - Oshkosh',
    purpose: 'B.S. Computer Science',
    tenure: '2016 - 2018',
  },
  {
    id: 'waukesha',
    src: "images/waukesha_logo.png",
    alt: 'waukesha logo',
    title: 'UW - Waukesha',
    purpose: 'General Studies',
    tenure: '2014 - 2016',
  },
  {
    id: 'km',
    src: "images/km_logo.png",
    alt: 'km logo',
    title: 'Kettle Moraine',
    purpose: 'Highschool',
    tenure: '2010 - 2014',
  },
];

function Academics({ activeItem, setActiveItem }){
  return (
    <div id="academics" onClick={(e) => setActiveItemHandler(e, setActiveItem)}>
      {academics.map((item) => {
        const isActive = getClassName(activeItem, item.id);
        return (
          <div key={item.id} id={item.id} className={`card academicsCard ${isActive}`}>
              <div className="unclickable">
                <img className="cardImg" alt={item.alt} src={item.src} />
                <div className={`expandedCard ${isActive}`}>
                  <div className="row1">
                    <div>
                      <h3>{item.title}</h3>
                      <div id="company">{item.purpose}</div>
                    </div>
                    <div>{item.tenure}</div>
                  </div>
                </div>
              </div>
          </div>
        )})}
    </div>
  )
};

export default Academics;