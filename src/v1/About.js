import React from 'react';
import './App.css';
import { Transition, Divider, Image } from 'semantic-ui-react';

export default props => (
    <Transition visible={props.visible} animation='fade right' duration={500}>
        <div className="aboutContent">
            <Divider/>
            <Image centered src='images/liberty_logo.png' style={{marginBottom: '2em', width: '210px'}}/>
                <p style={{display:'inline-block', width:'50%'}}>
                    Starting full-time as a Software Engineering
                </p>
                <p style={{float: 'right', textAlign:'right', width:'50%', fontSize: '16px'}}>
                    <span style={{color:'#3066BE'}}>Seattle, WA</span> | <span style={{color:'#48A9A6'}}>June, 2019</span>
                </p>
                <p style={{display:'inline-block', width:'50%'}}>
                    Completed 2nd summer Software Engineering internship
                </p>
                <p style={{float: 'right', textAlign:'right', width:'50%', fontSize: '16px'}}>
                    <span style={{color:'#3066BE'}}>Seattle, WA</span> | <span style={{color:'#48A9A6'}}>Summer, 2018</span>
                </p>
                <p style={{display:'inline-block', width:'50%' }}>
                    Completed 1st summer Software Engineering internship
                </p>
                <p style={{float: 'right', textAlign:'right', width:'50%', fontSize: '16px'}}>
                    <span style={{color:'#3066BE'}}>Wausau, WI</span> | <span style={{color:'#48A9A6'}}>Summer, 2017</span>
                </p>
            <Divider/>
            <Image centered src='images/college_logo.png' style={{marginTop: '2em', marginBottom: '2em', width: '180px'}}/>
            <p style={{display:'inline-block', width:'50%' }}>
                Graduated with a B.S. degree in Computer Science and an emphasis in Software Engineering
            </p>
            <p style={{float: 'right', textAlign:'right', width:'50%', fontSize: '16px'}} className="accent">
                <span style={{color:'#3066BE'}}>Oshkosh, WI</span> | <span style={{color:'#48A9A6'}}>December, 2018</span>
            </p>
            <Divider/>
            <Image centered src='images/wak_logo.png' style={{marginTop: '2em', marginBottom: '2em', width: '175px'}}/>
            <p style={{display:'inline-block', width:'50%' }}>
                Began studying Computer Science and taking general education courses
            </p>
            <p style={{float: 'right', textAlign:'right', width:'50%', fontSize: '16px'}} className="accent">
                <span style={{color:'#3066BE'}}>Waukesha, WI</span> | <span style={{color:'#48A9A6'}}>September, 2014</span>
            </p>
        </div>
    </Transition>
);