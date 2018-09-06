import React, { Component } from 'react';
import './App.css';
import { Transition, List } from 'semantic-ui-react';

class About extends Component {

  render() {

    return (
        <Transition visible={this.props.visible} animation='fade right' duration={500}>
        <div className="mainContent">
            <h3>
                    I will be graduating from the
                    <span style={{color: '#996633'}}> University of Wisconsin - Oshkosh</span> with a B.S. degree in
                    <span className="accent"> Computer Science</span> with an emphasis in 
                    <span className="accent"> Software Engineering</span> in 
                    <span className="accent"> December, 2018</span>.
            </h3>
            <h3>
                    I've had two summer software engineering internships at a Fortune 100 company, 
                    <span style={{color: '#5381ac'}}> Liberty Mutual Insurance</span>,
                    where I had the opportunity to:    
            </h3> 
            <List className="aboutList">
                <List.Item>
                    <List.Icon name='code' className="accent" size="large"/>
                    <List.Content><h4>implement a full-stack web application</h4></List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='trophy' className="accent" size="large"/>
                    <List.Content>
                        <h4>win First Place and People's Choice Awards in their first intern Hackathon</h4>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='users' className="accent" size="large"/>
                    <List.Content><h4>establish a leadership role</h4></List.Content>
                </List.Item>
            </List>     
        </div>
        </Transition>
    );
  }
}

export default About;
