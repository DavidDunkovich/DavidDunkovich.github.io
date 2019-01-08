import React, { Component } from 'react';
import './App.css';
import { Transition, Grid, Image } from 'semantic-ui-react';
import './Projects.css';
import SelectedProjectModal from './SelectedProjectModal';

const images = [
  {
      src: 'images/surehopelogo.jpg',
      alt: 'Sure Hope Foundation Website',
  },
  {
    src: 'images/firestacklogo.jpg',
    alt: 'Firestack Logo',
  },
  {
    src: 'images/shinylogo.jpg',
    alt: 'Shiny Key Realty',
  },
  {
    src: 'images/byslogo.jpg',
    alt: 'Balance Youth Sports Logo',
  },
  {
    src: 'images/moorecrosslogo.jpg',
    alt: 'Moore and Cross Logo',
  }             
]
class Projects extends Component {
  
  render() {
    return (
      <div className="projectContent">
        <Transition visible={this.props.visible} animation='fade right' duration={500}>
        <Grid columns={3} stackable centered className="project-overflow" style={{position: 'relative', left: '1px'}}>
           <Grid.Row>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                    <Image fluid src={images[0].src} alt={images[0].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h5>Website</h5>
                        <h6>Sure Hope</h6>
                      </div>
                    </div>
                    {/* <figcaption>
                      <p>A non-profit organization's website sponsoring a non-descriminatory school in Uganda.</p>
                    </figcaption> */}
                    <SelectedProjectModal jobRole='Designer - Developer - Maintainer' name='Sure Hope Foundation' 
                      photoSrc='images/surehope2_resized.jpg' photoAlt='Sure Hope2'
                      company='Freelance'
                      location='Oconomowoc, WI'
                      description='In Uganda, and most sub-Sahara African countries, individuals with disabilities
                        are viewed as less than human. At Sure Hope Foundation,
                        they believe that every child deserves a future, no matter their physical or
                        mental capabilities. Sure Hope Foundation helps fund the primary school, Sure Prospects,
                        located in Entebbe, Uganda. For every 3 children attending the school without
                        disabilities, one child with disabilities can attend school free of charge.'
                      description2='Being a full time
                        boarding school with little government aid, Sure Prospects is in need of funds for
                        supplies, food, handicap accessibility, clean water, salaries, etc. Owner, and starter, of
                        Sure Hope Foundation reached out to get a website in place to help spread the word and make donations
                        an easy process.' 
                      link='http://surehopefoundation.com'
                      />
                  </figure>
                </Grid.Column>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                    <Image fluid src={images[1].src} alt={images[1].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h5>Web App</h5>
                        <h6>Firestack</h6>
                      </div>
                    </div>
                    {/* <figcaption>
                      <p>First Place/People's Choice awarded hackathon web app used to minimize the amount of time spent on onboarding new hires.</p>
                    </figcaption> */}
                    <SelectedProjectModal jobRole='Team Lead - Designer - Developer' name='Firestack - First Place/People&apos;s Choice Awards' 
                      photoSrc='images/firestack2_resized.jpg' photoAlt='Firestack2'
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
                  <Image fluid src={images[2].src} alt={images[2].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h5>Web App</h5>
                        <h6>Shiny Key Realty</h6>
                      </div>
                    </div>
                    {/* <figcaption>
                      <p>Form used to automate emails, collect customer information, and access said information through an admin portal.</p>
                    </figcaption> */}
                    <SelectedProjectModal jobRole='Designer - Developer- Maintainer' name='Shiny Key Realty' 
                      photoSrc='images/shinykeyrealty.png' photoAlt='Shiny Key Realty2'
                      company='Freelance'
                      location='Fox Valley, WI'
                      description='Shiny Key Realty is a real estate company that specializes in residential real estate in Appleton, Wisconsin.'
                      description2='Co-Owner of Shiny Key Realty expressed his interest in simplifying the process to manage 
                      customer information during house showings. Rather than requiring the customer to physically write it down and for Ryan
                      to later input it into an excel document, this web application is used during home showings to 
                      collect that same customer information from a tablet which is then stored into a database and used
                      to send an automated email to the customer. On top of that, there is an admin side to the app in which 
                      all customer information can be neatly accessed, searched, and sorted. Soon after, Shiny Key reached out to also
                      create a website for them.'
                      link='http://shinykey.herokuapp.com/'
                      />
                  </figure>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                  <Image fluid src={images[4].src} alt={images[4].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h5>Website</h5>
                        <h6>Moore &amp; Cross</h6>
                      </div>
                    </div>
                    {/* <figcaption>
                      <p>A law firm's website which is used to attract clients and show their areas of expertise.</p>
                    </figcaption> */}
                    <SelectedProjectModal jobRole='Designer - Developer - Maintainer' name='Moore &amp; Cross, LLP' 
                      photoSrc='images/moorecrosslogo.jpg' photoAlt='Moore and Cross Logo'
                      company='Freelance'
                      location='Edwardsville, IL'
                      description='Moore &amp; Cross, attourneys at law, was formed in 2018 under partners
                      Austin Moore and Casey Cross. Both founding partners attended Northern Illinois University Law School and
                      eventually wanted to start their own practice.'
                      description2='Together, Moore &amp; Cross, bring a wealth of experience and knowledge
                      to provide excellent service to their clients. The website&apos;s main goal is to provide insight of their services and
                      attract new customers.'
                      link='http://moorecross.com'
                      />
                  </figure>
                </Grid.Column>
                <Grid.Column style={{padding: '.5rem'}}>
                  <figure className="projectImage">
                  <Image fluid src={images[3].src} alt={images[3].alt} />
                    <div className="title">
                      <div className="white-bg">
                        <h5>Website</h5>
                        <h6>Balance Youth Sports</h6>
                      </div>
                    </div>
                    {/* <figcaption>
                      <p>A website whose goal is to provide resources and experiences that foster balance in a young athlete’s life.</p>
                    </figcaption> */}
                    <SelectedProjectModal jobRole='Designer - Developer - Maintainer' name='Balance Youth Sports' 
                      photoSrc='images/bys2.jpg' photoAlt='Balance Youth Sports2'
                      company='Freelance'
                      location='Madison, WI'
                      description='Balance Youth Sports is ran by a father/daughter duo who are passionate about
                      youth sports and the important impact they have on development. Based on their our individual
                      experiences they strive to show that participation in sports can greatly contribute to a successful,
                      happy and healthy life; but only if done in the right way.'
                      description2='The website&apos;s main goal is to provide resources and experiences that promote balance in
                      a young student athelete&apos;s life. They are firm believers in the power of sports;
                      their unparalleled contributions to youth development, the incredible experiences that come
                      with participating, and the many life lessons learned. '
                      link='http://balanceyouthsports.com'
                      />
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
