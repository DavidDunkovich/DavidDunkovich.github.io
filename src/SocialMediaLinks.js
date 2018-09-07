import React, { Component } from 'react';
import './App.css';
import { Button, Popup } from 'semantic-ui-react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const timeoutLength = 1500

class About extends Component {
  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <div className="centered">
        <Button circular color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/daviddunkovich/" target="_blank"/>
        <Popup
            trigger={
              <div style={{display: 'inline-block'}}>
              <CopyToClipboard text="dunkovichd@yahoo.com">
                <Button circular color='google plus' icon='mail' />
              </CopyToClipboard>
              </div>
            }
            content='Email Copied!'
            on='click'
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            position='right center'
        />
      
      </div>
    );
  }
}

export default About;
