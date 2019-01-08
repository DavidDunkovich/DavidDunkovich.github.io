import React, { Component } from 'react';
import './App.css';
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import SocialMediaLinks from "./SocialMediaLinks";
import { Header } from 'semantic-ui-react';

class App extends Component {
  state = {
    activeItem: false,
    switching: false
  };

  handleItemClick = (e, { name }) => {
    const {activeItem} = this.state;
    if(name === activeItem){
      this.setState({ activeItem: false });
    }
    else{
      this.setState({ activeItem: name, switching: true});
      setTimeout(() => { 
        this.setState({
           switching: false 
        }); 
      }, 1000);
    }  
  };

  render() {
    const {activeItem, switching} = this.state;
    return (
      <div >
        <div className={activeItem ? "mainHeader" : "initialHeader"}>
          <Header as="h1" textAlign="center" >David <br/> Dunkovich</Header>
          <Navigation activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}/>
          <SocialMediaLinks/>
        </div>
        <div className="container">
          <About visible={activeItem === "About" && !switching}/>
          <Projects visible={activeItem === "Projects" && !switching}/>
        </div>
      </div>
    );
  }
}

export default App;
