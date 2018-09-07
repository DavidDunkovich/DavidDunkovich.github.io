import React, { Component } from 'react';
import { Image, Reveal, Grid  } from 'semantic-ui-react';
class AboutGallery extends Component {
    render() {

    const images = [
        {
            original: 'images/skiing1.jpg',
            alt: 'Skiing Image 1',
        },
        {
            original: 'images/skiing2.jpg',
            alt: 'Skiing Image 2'
        },
        {
            original: 'images/hiking1.jpg',
            alt: 'Hiking Image 1'
        },
        {
            original: 'images/hiking2.jpg',
            alt: 'Hiking Image 2'
        },
        {
            original: 'images/traveling1.jpg',
            alt: 'Traveling Image 2'
        },
        {
            original: 'images/traveling2.jpeg',
            alt: 'Traveling Image 2'
        },    
    ]
    return (
        <Grid columns={3} stackable>
            <Grid.Column style={{padding: '.5rem'}}>
                <Reveal animated='small fade'>
                    <Reveal.Content visible style={{width: '100%'}}>
                        <Image style={{width: '100%'}} src={images[0].original} alt={images[0].alt}  />
                    </Reveal.Content>
                    <Reveal.Content hidden className="width100">
                        <Image style={{width: '100%'}} src={images[1].original} alt={images[1].alt}  />
                    </Reveal.Content>
                </Reveal>
            </Grid.Column>
            <Grid.Column style={{padding: '.5rem'}}>
                <Reveal animated='small fade' >
                    <Reveal.Content visible style={{width: '100%'}}>
                        <Image style={{width: '100%'}} src={images[2].original} alt={images[2].alt}  />
                    </Reveal.Content>
                    <Reveal.Content hidden style={{width: '100%'}}>
                        <Image style={{width: '100%'}} src={images[3].original} alt={images[3].alt}  />
                    </Reveal.Content>
                </Reveal>
            </Grid.Column>
            <Grid.Column style={{padding: '.5rem'}}>
                <Reveal animated='small fade'>
                    <Reveal.Content visible style={{width: '100%'}}>

                        <Image style={{width: '100%'}} src={images[4].original} alt={images[4].alt}  />
                        
                    </Reveal.Content>
                    <Reveal.Content hidden style={{width: '100%'}}>
                        <Image style={{width: '100%'}} src={images[5].original} alt={images[5].alt} />
                    </Reveal.Content>
                </Reveal>
            </Grid.Column>
        </Grid>     
    );
  }
}

export default AboutGallery;
