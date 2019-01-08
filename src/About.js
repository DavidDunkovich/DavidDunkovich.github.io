import React, { Component } from 'react';
import './App.css';
import { Transition, List, Divider, Image, Header } from 'semantic-ui-react';
import AboutGallery from './AboutGallery';

class About extends Component {

  render() {

    return (
        <Transition visible={this.props.visible} animation='fade right' duration={500}>
        <div className="aboutContent">
            <Divider/>
            <Image centered src='images/liberty_logo.png' style={{marginBottom: '2em', width: '200px'}}/>
                <p style={{display:'inline-block', width:'60%'}}>
                    Starting full-time as a software developer
                </p>
                <p style={{float: 'right', textAlign:'right', width:'40%', fontSize: '16px'}}>
                    <span style={{color:'#3066BE'}}>Seattle, WA</span> | <span style={{color:'#48A9A6'}}>June, 2019</span>
                </p>
                <p style={{display:'inline-block', width:'60%'}}>
                    Completed 2nd summer software engineering internship
                </p>
                <p style={{float: 'right', textAlign:'right', width:'40%', fontSize: '16px'}} className="accent">
                    <span style={{color:'#3066BE'}}>Seattle, WA</span> | <span style={{color:'#48A9A6'}}>Summer, 2018</span>
                </p>
                <p style={{display:'inline-block', width:'60%' }}>
                    Completed 1st software engineering summer internship
                </p>
                <p style={{float: 'right', textAlign:'right', width:'40%', fontSize: '16px'}} className="accent">
                    <span style={{color:'#3066BE'}}>Wausau, WI</span> | <span style={{color:'#48A9A6'}}>Summer, 2017</span>
                </p>
            <Divider/>
            <Image centered src='images/college_logo.png' style={{marginTop: '2em', marginBottom: '2em', width: '160px'}}/>
            <p style={{display:'inline-block', width:'60%' }}>
                Graduated with a B.S. degree in Computer Science and an emphasis in Software Engineering
            </p>
            <p style={{float: 'right', textAlign:'right', width:'40%', fontSize: '16px'}} className="accent">
                <span style={{color:'#3066BE'}}>Oshkosh, WI</span> | <span style={{color:'#48A9A6'}}>December, 2018</span>
            </p>
            <Divider/>
            <Image centered src='images/wak_logo.png' style={{marginTop: '2em', marginBottom: '2em', width: '200px'}}/>
            <p style={{display:'inline-block', width:'60%' }}>
                Began studying Computer Science and taking general education courses
            </p>
            <p style={{float: 'right', textAlign:'right', width:'40%', fontSize: '16px'}} className="accent">
                <span style={{color:'#3066BE'}}>Waukesha, WI</span> | <span style={{color:'#48A9A6'}}>September, 2014</span>
            </p>
        </div>
        </Transition>
    );
  }
}

export default About;
