import React, { Component } from 'react';
import './App.css';
import Navigation from "./Navigation";
import { Header } from 'semantic-ui-react';

class MainHeader extends Component {
  state = {activeItem: false};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const {activeItem} = this.state;
    console.log(this.state.activeItem)
    return (
      <div className={activeItem ? "mainHeader" : "initialHeader"}>
        <Header as="h1" textAlign="center" content="David Dunkovich" />
        <Navigation activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}/>
        
        {activeItem === "About" && <About />}
      </div>
    );
  }
}

export default MainHeader;
