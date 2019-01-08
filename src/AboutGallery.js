import React, { Component } from 'react';
import { Image, Reveal, Grid  } from 'semantic-ui-react';

const images = [
    {
        src: 'images/skiing1.jpg',
        alt: 'Skiing Image 1',
    },
    {
        src: 'images/skiing2.jpg',
        alt: 'Skiing Image 2'
    },
    {
        src: 'images/hiking1.jpg',
        alt: 'Hiking Image 1'
    },
    {
        src: 'images/hiking2.jpg',
        alt: 'Hiking Image 2'
    },
    {
        src: 'images/traveling1.jpg',
        alt: 'Traveling Image 2'
    },
    {
        src: 'images/traveling2.jpeg',
        alt: 'Traveling Image 2'
    },    
]
class AboutGallery extends Component {
    render() {
    return (
        <Grid columns={3} stackable className='aboutGallery'>
            <Grid.Column textAlign='center' style={{padding: '.5rem'}}>
                <Reveal animated='small fade'>
                    <Reveal.Content visible style={{width:'100%'}}>
                        <Image style={{width:'100%'}} src={images[0].src} alt={images[0].alt}  />
                    </Reveal.Content>
                    <Reveal.Content hidden className="width100">
                        <Image style={{width:'100%'}} src={images[1].src} alt={images[1].alt}  />
                    </Reveal.Content>
                </Reveal>
            </Grid.Column>
            <Grid.Column style={{padding: '.5rem'}}>
                <Reveal animated='small fade' >
                    <Reveal.Content visible style={{width:'100%'}}>
                        <Image style={{width:'100%'}} src={images[2].src} alt={images[2].alt}  />
                    </Reveal.Content>
                    <Reveal.Content hidden style={{width:'100%'}}>
                        <Image style={{width:'100%'}} src={images[3].src} alt={images[3].alt}  />
                    </Reveal.Content>
                </Reveal>
            </Grid.Column>
            <Grid.Column style={{padding: '.5rem'}}>
                <Reveal animated='small fade'>
                    <Reveal.Content visible style={{width:'100%'}}>

                        <Image style={{width:'100%'}} src={images[4].src} alt={images[4].alt}  />
                        
                    </Reveal.Content>
                    <Reveal.Content hidden style={{width:'100%'}}>
                        <Image style={{width:'100%'}} src={images[5].src} alt={images[5].alt} />
                    </Reveal.Content>
                </Reveal>
            </Grid.Column>
        </Grid>     
    );
  }
}

export default AboutGallery;
