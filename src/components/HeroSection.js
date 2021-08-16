import React from 'react';
import '../App.css';
// import { Button } from './Button';

import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Image from '../images/background3.jpg'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      flexDirection: 'column',
      minHeight: '70vh' , 
      justifyContent: "center"
    
  }
};

function HeroSection() {
  return (
    <Grid container 
      style={styles.paperContainer}>
      <marquee width="90%" direction="left" height="100px" >
                   <Typography variant="h4"><strong>Start your learning journey today with Upmaster</strong></Typography>
                </marquee>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>want to become a "Master" ?</Typography>
      <Container>
      <Typography gutterBottom variant="h5" align="center" color="textPrimary" paragraph>Lets do it</Typography>
      </Container>
      {/* <div align="center">
              <Grid container spacing={4} justifyContent="center">
                <Grid item>
                  <Link to="./login"><Button variant="contained" color="primary">
                    Sign in
                  </Button>
                  </Link>
                </Grid>
                
                
                </Grid>
      </div> */}
        
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Take a Glance <i className='far fa-play-circle' />
        </Button> */}
      
    </Grid>
  );
}

export default HeroSection;