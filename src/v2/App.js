import React, { useState } from 'react';
import './App.scss';
import Header from './Header';
import Menu from './Menu';
import { Card, Drawer } from 'antd';

function App(){
  const [activeTab, setActiveTab] = useState('Projects');
  const [activeData, setActiveData] = useState(null);

  function setActiveTabHandler({ target }) {
    if (target.tagName === 'H2') {
      const tab = target.textContent;
      setActiveTab(tab);
      setActiveData(null);
    }
  }

  function itemList() {
    if (activeTab === 'Careers') {
      return careerData;
    }
    if (activeTab === 'Academics') {
      return academicData;
    }
    return projectData;
  }

  function setActiveItemHandler({ target }) {
    let availableItems;
    if (activeTab === 'Careers') {
      availableItems = new Set(['aws', 'lm']);
      if (availableItems.has(target.id)) {
        setActiveData(careerData.find(item => item.id === target.id));
      }
    }
    if (activeTab === 'Academics') {
      availableItems = new Set(['oshkosh', 'waukesha', 'km']);
      if (availableItems.has(target.id)) {
        setActiveData(academicData.find(item => item.id === target.id));
      }
    }
    if (activeTab === 'Projects') {
      availableItems = new Set(['shiny-key', 'sure-hope', 'firestack', 'balance-youth-sports']);
      if (availableItems.has(target.id)) {
        setActiveData(projectData.find(item => item.id === target.id));
      }
    }
  }

  return (
    <div id="app">
      <Header />
      <Card
        id="item-container"
        title={<Menu activeTab={activeTab} setActiveTabHandler={setActiveTabHandler} />}
        onClick={setActiveItemHandler}
        className="site-drawer"
      >
        {<div id="item-container">
          {itemList().map(item => (
            <Card.Grid id={item.id} key={item.id} className="card-grid-item">
              <img className="cardImg" src={item.logo} alt={item.logoAlt} />
            </Card.Grid>
          ))}
        </div>}
        <Drawer
          visible={activeData !== null}
          getContainer={false}
          style={{ position: 'absolute' }}
          placement="left"
          onClose={() => setActiveData(null)}
          width={"80%"}
          className="item-drawer"
        >
          {activeData && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div>
                  <h3>{activeData.title}</h3>
                  {activeData.link && <a href={activeData.link} target="_blank">View website</a>}
                  <div>{activeData.stack}</div>
                  <div>{activeData.tenure}</div>
                </div>
                <img style={{ maxWidth: '60px', marginRight: '12px' }} src={activeData.logo} alt={activeData.logoAlt} />
              </div>
              {activeData.description && (
                <div style={{ marginBottom: '12px'}}>
                  {activeData.description}
                </div>
              )}
              {activeData.description1 && (
                <div style={{ marginBottom: '12px'}}>
                  {activeData.description1}
                </div>
              )}
              <ul>
                {activeData.achievements && activeData.achievements.map((data, i) => <li key={'achievement'+i}>{data}</li>)}
              </ul>
            </>
          )}
        </Drawer>
      </Card>
    </div>
  )
};

const careerData = [
  {
    id: 'aws',
    logo: "images/aws.png",
    logoAlt: "aws logo",
    title: 'Frontend Engineer',
    stack: 'Amazon EKS',
    tenure: 'Oct 2019 - Present',
    achievements: [
      'Cross collaborated with multiple teams and product managers to deliver new features to thousands of users over 20 regions.',
      'Maintained exemplary operations and metrics by increasing overall automated test coverage by over 50% to ensure website availability.',
      'Converted multiple manual pipelines to CICD through creating integration tests and alarms, saving approximately 20 hours of developer time monthly.',
      'Automated internationalization of strings saving hours of developer time per code change.',
      'Documented steps for critical job functions such as expanding to new regions and onboarding new frontend engineers.'
    ]
  },
  {
    id: 'lm',
    logo: "images/LibertyMutual.png",
    logoAlt: "liberty mutual logo",
    title: 'Fullstack Engineer',
    stack: 'Liberty Mutual Insurance',
    tenure: 'Jun 2018 - Oct 2019',
    achievements: [
      'Engineered a React analytics dashboard that tracks user flow within a web app assisting UX designers in raising the average daily users from 50 to 200.',
      'Implemented a user management portal that allows user roles and permissions to be easily edited for an external facing app using React and Spring/MongoDB.',
      'Won 1st place in their annual hackathon innovating a web app that reduces excessive work space set-up time for new hires within all departments of the company.',
    ],
  },
];

const academicData = [
  {
    id: 'oshkosh',
    logo: "images/oshkosh_logo.png",
    logoAlt: 'oshkosh logo',
    title: 'UW - Oshkosh',
    stack: 'B.S. Computer Science',
    tenure: '2016 - 2018',
  },
  {
    id: 'waukesha',
    logo: "images/waukesha_logo.png",
    logoAlt: 'waukesha logo',
    title: 'UW - Waukesha',
    stack: 'General Studies',
    tenure: '2014 - 2016',
  },
  {
    id: 'km',
    logo: "images/km_logo.png",
    logoAlt: 'km logo',
    title: 'Kettle Moraine',
    stack: 'Highschool',
    tenure: '2010 - 2014',
  },
];

const projectData = [
  {
    id: 'shiny-key',
    title: 'Shiny Key Realty',
    logo: 'images/shinylogo.png',
    logoAlt: 'Shiny Key Realty logo',
    tenure: '2020',
    stack: 'React, HTML5, CSS3, Node.js, Firebase',
    link: 'https://www.shinykeyrealty.com/',
    description: `Shiny Key Realty is a real estate company that operates in Appleton, Wisconsin. They had no web precense, 
    meaning the owners had to communicate all information with clients strictly over the phone or email.`,
    description1: `
    The website simplifies most of this work. It provides a a contact form for clients to contact the owners directly on the website. 
    This feature uses Node.js to send a formatted email to the company owner with the customer's contact information. 
    The website also features a secure admin page with a content management system built with React and Firebase. 
    The owners can manage listings of available homes and their current status at their convenience. 
    This keeps customers up to date on the latest available homes without needing to touch any code. 
    `
  },
  {
    id: 'sure-hope',
    title: 'Sure Hope Foundation',
    logo: 'images/surehopelogo.png',
    logoAlt: 'Sure Hope Foundation logo',
    tenure: '2018',
    stack: 'React, HTML5, CSS3',
    link: 'http://surehopefoundation.com',
    description: `In Uganda, and most sub-Sahara African countries, individuals with disabilities
    are often viewed as less than human. At Sure Hope Foundation,
    they believe that every child deserves a future, no matter their physical or
    mental capabilities. Sure Hope Foundation helps fund the primary school, Sure Prospects,
    located in Entebbe, Uganda. For every 3 children attending the school without
    disabilities, one child with disabilities can attend school free of charge.`,
    description1: `Being a full time
    boarding school with little government aid, Sure Prospects is in need of funds for
    supplies, food, handicap accessibility, clean water, salaries, etc. Owner, and starter, of
    Sure Hope Foundation reached out to get a website in place to help spread the word and make donations
    an easy process.`
  },
  {
    id: 'firestack',
    title: 'Firestack',
    logo: 'images/firestacklogo.png',
    logoAlt: 'Firestack logo',
    tenure: '2018',
    stack: 'React, HTML5, CSS3',
    description: `Our team had to respond to the hackathon prompt: 
    "Come up with an idea that would help Liberty Mutual become the best insurance company on
    the planet." Being a recent new hire, we realized how inefficient the onboarding process was and knew
    there was room for improvement.`,
    description1: `After collecting data throughout the company, we concluded that on average employees
    waste a week's worth of time during the onboarding process. Our application is similar
    to a shopping cart. The user can add whichever programs and security groups they need to their cart.
    Once they're finished, all of the programs would begin installing and all of the security group access forms would
    be sent out. Furthermore, a manager could do this work prior, generate a link on the final screen of our app, and share
    the link to their new employees, saving them even more time. If the app were continued to be developed, it could save hundreds
    of thousands of dollars per hiring cycle as well as provide new hires with a better experience.`
  },
{
  id: 'balance-youth-sports',
  title: 'Balance Youth Sports',
  logo: 'images/byslogo.png',
  logoAlt: 'Balance Youth Sports logo',
  tenure: '2017',
  stack: 'WordPress',
  link: 'http://balanceyouthsports.com',
  description: `Balance Youth Sports is ran by a father/daughter duo who are passionate about
  youth sports and the important impact they have on development. Based on their our individual
  experiences they strive to show that participation in sports can greatly contribute to a successful,
  happy and healthy life; but only if done in the right way.`,
  description1: `The website's main goal is to provide resources and experiences that promote balance in
  a young student athelete's life. They are firm believers in the power of sports;
  their unparalleled contributions to youth development, the incredible experiences that come
  with participating, and the many life lessons learned.`
}
];

export default App;