import React, { Component } from 'react';
import './App.css';
import { Transition, Grid, Image } from 'semantic-ui-react';
import './Projects.css';
import SelectedProjectModal from './SelectedProjectModal';
//DO i need rows if its set to 3?>
const images = [
  {
      src: 'images/surehope_resized.jpg',
      alt: 'Sure Hope Foundation Website',
  },
  {
    src: 'images/firestack.jpg',
    alt: 'Firestack Logo',
  },
  {
    src: 'images/shinykey_bg.jpg',
    alt: 'Shiny Key Realty',
  },
  {
    src: 'images/byslogo.jpg',
    alt: 'Balance Youth Sports Logo',
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
                    <SelectedProjectModal role='Designer - Developer - Maintainer' name='Sure Hope Foundation' 
                      photoSrc='images/surehope2_resized.jpg' photoAlt='Sure Hope Image2'
                      company='Freelance'
                      location='Oconomowoc, WI'
                      description='In Uganda, and most sub-Sahara African countries, individuals with disabilities
                        are viewed as less than human. Children born with physical or mental
                        disabilities are often shunned and abandoned. At Sure Hope Foundation,
                        they believe that every child deserves a future, no matter their physical or
                        mental capabilities.'
                      description2='Sure Hope Foundation helps fund the primary school, Sure Prospects,
                        located in Entebbe, Uganda. Over the years, the school has grown and flourished and
                        now educates more than 500 students. For every 3 children attending the school without
                        disabilities, one child with disabilities can attend school free of charge. Being a full time
                        boarding school with little government aid, Sure Prospects is in need of funds for
                        supplies, food, handicap accessibility, clean water, salaries, etc which is where the website
                        and Sure Hope Foundation provide assistance.' 
                      link='http://surehopefoundation.com'
                      />
                  </figure>
                </Grid.Column>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                    <Image size="medium" src={images[1].src} alt={images[1].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h3>Web App</h3>
                        <h5>Firestack</h5>
                      </div>
                    </div>
                    <figcaption>
                      <p>First Place/People's Choice awarded hackathon web app used to minimize the amount of time spent on onboarding new hires.</p>
                    </figcaption>
                    <SelectedProjectModal role='Team Lead - Designer - Developer' name='Firestack - First Place/People&apos;s Choice Awards' 
                      photoSrc='images/firestack2_resized.jpg' photoAlt='Firestack Image2'
                      company='Liberty Mutual Insurance - '
                      title='Software Engineering Intern'
                      location='Seattle, WA'
                      description='Our team, Coders without Body Odors, had to respond to the hackathon prompt: 
                      "Come up with an idea that would help Liberty Mutual become the best insurance company on
                      the planet." Being a recent new hire, we realized how inefficient the onboarding process was and knew
                      there was room for improvement.'
                      description2='After collecting data throughout the company, we concluded that on average current employees
                      waste a week&apos;s worth of time during this process. Our application is similar
                      to a shopping cart in the way that the user can add whichever programs and security groups they need to their cart.
                      Once they&apos;re finished, all of the programs would begin installing and all of the security group access forms would
                      be sent out. Furthermore, a manager could do this work prior, generate a link on the final screen of our app, and share 
                      the link to their new employees, saving them even more time. In total, the app could save hundreds
                      of thousands of dollars per hiring cycle.'
                      link={false}
                      />
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
                    <SelectedProjectModal role='Designer - Developer- Maintainer' name='Shiny Key Realty' 
                      photoSrc='images/shinykeyrealty.png' photoAlt='Shiny Key Realty2'
                      company='Freelance'
                      location='Oshkosh, WI'
                      description='Shiny Key Realty is a home building/renovating company that specializes in...'
                      description2='Co-Owner, Ryan Mereness, expressed his interest in simplifying the process to manage 
                      customer information during house showings. Rather than requiring the customer to physically write it down and for Ryan
                      to later input it into an excel document, this web application is used during home showings to 
                      collect that same customer information from a tablet which is then stored into a database and used
                      to send an automated email to the customer. On top of that, there is an admin side to the app in which 
                      all customer information can be neatly accessed, searched, and sorted.'
                      link={false}
                      />
                  </figure>
                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                  <Image src={images[3].src} alt={images[3].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h3>Website</h3>
                        <h5>Balance Youth Sports</h5>
                      </div>
                    </div>
                    <figcaption>
                      <p>A website whose goal is to provide resources and experiences that foster balance in a young athlete’s life.</p>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </Grid.Column>
            </Grid.Row> */}
        </Grid>     
        </Transition>      
      </div>
    );
  }
}

export default Projects;
