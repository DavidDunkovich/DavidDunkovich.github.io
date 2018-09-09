import React, { Component } from 'react';
import './App.css';
import { Transition, Grid, Image } from 'semantic-ui-react';
import './Projects.css';
//DO i need rows if its set to 3?>
const images = [
  {
      src: 'images/surehope_resized.jpg',
      alt: 'Sure Hope Foundation Website',
  },
  {
    src: 'images/firestack.jpg',
    alt: 'Firestack Project',
  },
  {
    src: 'images/shinykeyrealty.png',
    alt: 'Shiny Key Realty',
  }         
]
class Projects extends Component {
  render() {
    return (
      <div className="mainContent">
        <Transition visible={this.props.visible} animation='fade right' duration={500}>
        <Grid columns={3} stackable>
            <Grid.Row> 
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                    <Image src={images[0].src} alt={images[0].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h3>Website</h3>
                        <h5>Sure Hope</h5>
                      </div>
                    </div>
                    <figcaption>
                      <p>A non-profit organization's website sponsoring a non-descriminatory school in Uganda.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </Grid.Column>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                    <Image src={images[1].src} alt={images[1].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h3>Web App</h3>
                        <h5>Firestack</h5>
                      </div>
                    </div>
                    <figcaption>
                      <p>First Place/People's Choice awarded hackathon web app used to minimize the amount of time spent on onboarding.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </Grid.Column>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                  <Image src={images[2].src} alt={images[2].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h3>Web App</h3>
                        <h5>Shiny Key Realty</h5>
                      </div>
                    </div>
                    <figcaption>
                      <p>Form used to automate emails, collect customer information, and access said information through an admin portal.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </Grid.Column>
            </Grid.Row>
        </Grid>     
        </Transition>      
      </div>
    );
  }
}

export default Projects;
