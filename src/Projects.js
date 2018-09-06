import React, { Component } from 'react';
import './App.css';
import { Transition } from 'semantic-ui-react';

class Projects extends Component {
  render() {
    return (
      <div className="mainContent">
        <Transition visible={this.props.visible} animation='fade right' duration={500}>
          <h1>projects</h1>
        </Transition>
      </div>
    );
  }
}

export default Projects;
