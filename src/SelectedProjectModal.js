import React, { Component } from 'react';
import './App.css';
import { Modal, Image, Header, Button, Icon } from 'semantic-ui-react';

class SelectedProject extends Component {
     
    render() {

    return (
        <Modal trigger={<span className="fake-link"></span>}>
            <Modal.Header style={{fontSize: '1.3rem'}} className="accent">{this.props.jobRole}</Modal.Header>
            <Modal.Content image>
            <Image wrapped style={{minWidth: '35%'}} src={this.props.photoSrc} alt={this.props.photoAlt}/>
            <Modal.Description> 
                <Header as='h3'style={{fontSize: '1.5rem', color: '#002642'}}>{this.props.name}</Header>
                <p style={{fontSize: '1.1rem', fontWeight:'700', color: '#008148', marginBottom:'.2rem'}}>{this.props.company} {this.props.title}</p>
                <p style={{fontSize: '1rem', fontWeight:'700', color: '#996633'}}>{this.props.location}</p>
                <p style={{fontSize: '1rem'}}>{this.props.description}</p>
                <p style={{fontSize: '1rem'}}>{this.props.description2}</p>
            </Modal.Description>
            </Modal.Content>
            {this.props.link &&
            <Modal.Actions>
                <Button animated className='accent-button' href={this.props.link} target="_blank">
                    <Button.Content visible>Visit Website</Button.Content>
                    <Button.Content hidden>
                        <Icon name='share' />
                    </Button.Content>
                </Button>
            </Modal.Actions>
            
            
            }
            
        </Modal>    
    );
  }
}

export default SelectedProject;
