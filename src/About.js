import React, { Component } from 'react';
import './App.css';
import { Transition } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div className="content">
        <Transition visible={this.props.visible} animation='scale' duration={500}>
          <h1>about</h1>
        </Transition>
      </div>
    );
  }
}

export default About;
