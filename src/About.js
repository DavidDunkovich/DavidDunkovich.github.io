import React, { Component } from 'react';
import './App.css';
import { Transition, List, Divider } from 'semantic-ui-react';
import AboutGallery from './AboutGallery';

class About extends Component {

  render() {

    return (
        <Transition visible={this.props.visible} animation='fade right' duration={500}>
        <div className="aboutContent">
            <p>
                I will be graduating from the
                <span className="accent accent-weight"> University of Wisconsin - Oshkosh</span> with a B.S. degree in
                <span className="accent accent-weight"> Computer Science</span> and an emphasis in 
                <span className="accent accent-weight"> Software Engineering</span> in 
                <span className="accent accent-weight"> December, 2018</span>.
            </p>
            <p>
                I've had two summer software engineering internships at a Fortune 100 company, 
                <span className="accent accent-weight" > Liberty Mutual Insurance</span>,
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
             
            <p>
                Besides nerding out, I also enjoy
                <span className="accent accent-weight"> skiing</span>,
                <span className="accent accent-weight"> hiking</span>, and
                <span className="accent accent-weight"> traveling</span>.
            </p>
            <Divider hidden />
            <AboutGallery/>   
        </div>
        </Transition>
    );
  }
}

export default About;
