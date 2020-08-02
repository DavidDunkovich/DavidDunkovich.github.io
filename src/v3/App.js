
import React, { Component } from "react";
import './App.css';
import initilize from './3d/Aws';

class App extends Component {
  componentDidMount() {
    initilize();
  }
  render() {
    return (
      <div className="bg">
        <div id="container-aws"></div>
      </div>
    )
  }
}
export default App;