import React from 'react';

function setActiveItemHandler({ target }, setActiveItem) {
  const availableItems = new Set(['aws', 'lm']);
  if (availableItems.has(target.id)) {
    target.className.includes('inactive') ? setActiveItem(target.id) : setActiveItem(null);
  }
}

function getClassName(activeItem, thisItem) {
  return activeItem === thisItem ? 'active' : 'inactive';
}

const careers = [
  {
    id: 'aws',
    src: "images/aws.png",
    alt: "aws logo",
    title: 'Frontend Engineer',
    company: 'Amazon EKS',
    tenure: 'Oct 2019 - Present',
    achievements: [
      'Cross collaborated with multiple teams and product managers to deliver new features to thousands of users over 20 regions.',
      'Maintained exemplary operations and metrics (increased overall automated test coverage by over 50%) to ensure website availability.',
      'Converted multiple manual pipelines to CICD through creating integration tests and alarms, saving approximately 20 hours of developer time monthly.',
      'Automated internationalization of strings saving hours of developer time per commit.',
      'Documented steps for critical job functions such as expanding to new regions or onboard new frontend engineers.'
    ]
  },
  {
    id: 'lm',
    src: "images/LibertyMutual.jpg",
    alt: "liberty mutual logo",
    title: 'Fullstack Engineer',
    company: 'Liberty Mutual Insurance',
    tenure: 'Jun 2018 - Oct 2019',
    achievements: [
      'Engineered a React analytics dashboard that tracks user flow within a web app assisting UX designers in raising the average daily users from 50 to 200.',
      'Implemented a user management portal that allows user roles/permissions to be easily edited for a new, external facing app using React and Spring/MongoDB.',
      'Won 1st place in their anual hackathon innovating a web app that reduces excessive work space set-up time for new hires within all departments of the company.',
    ],
  },
];

function Careers({ activeItem, setActiveItem }){
  return (
    <div id="contentSection" onClick={(e) => setActiveItemHandler(e, setActiveItem)}>
      {careers.map((item) => {
        const isActive = getClassName(activeItem, item.id);
        return (
          <div key={item.id} id={item.id} className={`card ${isActive}`}>
              <div className="unclickable">
                <img className="cardImg" alt={item.alt} src={item.src} />
                <div className={`expandedCard ${isActive}`}>
                  <div className="row1">
                    <div>
                      <h3>{item.title}</h3>
                      <div id="company">{item.company}</div>
                    </div>
                    <div>{item.tenure}</div>
                  </div>
                  <ul className="achievements">
                      {item.achievements.map((x, i) => (
                        <li key={i} className="achievement">{x}</li>
                      ))}
                    </ul>
                </div>
              </div>
          </div>
        )})}
    </div>
  )
};

export default Careers;