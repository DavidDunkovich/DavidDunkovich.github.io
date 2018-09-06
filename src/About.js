import React, { Component } from 'react';
import './App.css';
import { Transition, List } from 'semantic-ui-react';

class About extends Component {

  render() {

    return (
        <Transition visible={this.props.visible} animation='fade right' duration={500}>
        <div className="mainContent">
            <p>
                I will be graduating from the
                <span className="accent-weight" style={{color: '#996633'}}> University of Wisconsin - Oshkosh</span> with a B.S. degree in
                <span className="accent accent-weight"> Computer Science</span> with an emphasis in 
                <span className="accent accent-weight"> Software Engineering</span> in 
                <span className="accent accent-weight"> December, 2018</span>.
            </p>
            <p>
                I've had two summer software engineering internships at a Fortune 100 company, 
                <span className="accent-weight" style={{color: '#5381ac'}}> Liberty Mutual Insurance</span>,
                where I had the opportunity to:    
            </p>
            
                <List className="aboutList">
                    <List.Item>
                        <List.Icon name='code' className="accent" size="large"/>
                        <List.Content>implement a full-stack web application</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='trophy' className="accent" size="large"/>
                        <List.Content>
                            win First Place and People's Choice Awards in their first intern Hackathon
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' className="accent" size="large"/>
                        <List.Content>establish a leadership role</List.Content>
                    </List.Item>
                </List>
             
            <p className="centered">
                Besides nerding out, I also enjoy
                <span className="accent accent-weight"> skiing</span>,
                <span className="accent accent-weight"> hiking</span>,
                <span className="accent accent-weight"> traveling</span>.
            </p>
            <h3 className="centered">insert cool image gallery</h3>    
        </div>
        </Transition>
    );
  }
}

export default About;
