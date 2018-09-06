import React, { Component } from 'react';
import './App.css';
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import SocialMediaLinks from "./SocialMediaLinks";
import { Header, Transition } from 'semantic-ui-react';

class App extends Component {
  state = {activeItem: false};

  handleItemClick = (e, { name }) => {
    if(name === this.state.activeItem){
      this.setState({ activeItem: false });
    }
    else{
      this.setState({ activeItem: name });
    }  
  };

  render() {
    const {activeItem} = this.state;
    console.log(this.state.activeItem)
    return (
      <div>
        <div className={activeItem ? "mainHeader" : "initialHeader"}>
          <Header as="h1" textAlign="center" content="David Dunkovich" />
          <Navigation activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}/>
          <SocialMediaLinks/>
        </div>

        <About visible={activeItem === "About"}/>
        <Projects visible={activeItem === "Projects"}/>
  
      </div>
    );
  }
}

export default App;
