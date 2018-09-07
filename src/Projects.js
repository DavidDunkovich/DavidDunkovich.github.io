import React, { Component } from 'react';
import './App.css';
import { Transition, Grid } from 'semantic-ui-react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="mainContent">
        <Transition visible={this.props.visible} animation='fade right' duration={500}>
        <Grid columns={3} stackable>
            <Grid.Row>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure class="snip1477"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample35.jpg" alt="sample35" />
                    <div class="title">
                      <div>
                        <h2>Project</h2>
                        <h4>Name</h4>
                      </div>
                    </div>
                    <figcaption>
                      <p>Text about the projectText about the projectText about the project</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </Grid.Column>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure class="snip1477"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample35.jpg" alt="sample35" />
                    <div class="title">
                      <div>
                        <h2>Project</h2>
                        <h4>Name</h4>
                      </div>
                    </div>
                    <figcaption>
                      <p>Text about the project Text about the projectText about the project </p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </Grid.Column>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure class="snip1477"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample35.jpg" alt="sample35" />
                    <div class="title">
                      <div>
                        <h2>Project</h2>
                        <h4>Name</h4>
                      </div>
                    </div>
                    <figcaption>
                      <p>Text about the projectText about the projectText about the project</p>
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
