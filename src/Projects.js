import React from 'react';
import './App.css';
import { Transition, Grid, Image } from 'semantic-ui-react';
import './Projects.css';
import SelectedProjectModal from './SelectedProjectModal';
import projectData from './projectData';

const Projects = props => (
  <div className="projectContent">
    <Transition visible={props.visible} animation='fade right' duration={500}>
    <Grid columns={3} stackable centered className="project-overflow" style={{position: 'relative', left: '1px'}}>
       {console.log(projectData[0])}
       {projectData.map(project => (
         <Grid.Column style={{padding: '.5rem'}}>
           <figure className="projectImage">
             <Image fluid src={project.logo} alt={project.logoAlt} />
             <div className="title">
               <div className="white-bg">
                 <h5>{project.type}</h5>
                 <h6>{project.name}</h6>
               </div>
             </div>
             <SelectedProjectModal jobRole={project.jobRole} name='Sure Hope Foundation' 
               photoSrc={project.image} photoAlt={project.imageAlt}
               company={project.company}
               location={project.location}
               description={project.description}
               description2={project.description2}
               link={project.link}
               />
           </figure>
         </Grid.Column>
       ))}
    </Grid>     
    </Transition>      
  </div>
);

export default Projects;
