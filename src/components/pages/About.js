import { Container, Typography } from '@material-ui/core';
import React from 'react';

import { Grid } from '@material-ui/core';
import Image from '../../images/about.jpg'




  // function ABOUT() {
  //   return (
  //     <>
  //       <HeroSection1 />
        
  //       {/* <Footer /> */}
  //     </>
  //   );
  // }
  
  // export default ABOUT;

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
       
        backgroundSize: 'cover',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: "center"
        
        
      
    }
  };

  class ABOUT extends React.Component {
 
    render() {
      return (
        <Grid container style={styles.paperContainer}>
          <Typography variant='h1' align='center'>
            About Us
          </Typography>
          <Typography>
            <Container color="text.primary">
          <Typography variant='h6' >UpMaster's is a platform that allows instructors to build online courses on their preferred topics.</Typography>
          <Typography variant='h6'> Using UpMaster's course development tools, they can upload videos and live classes to create courses. </Typography>
          <Typography variant='h6'>Instructors can also engage and interact with users via online discussion boards.</Typography>
          
          <Typography variant='h6'>It is a massive open online course provider for learners, and its learning experience arranges coursework</Typography>  
          <Typography variant='h6'> into a series of modules and lessons that can include videos, text notes and assessment tests.</Typography>
          </Container>
          </Typography>
        </Grid>
      );
    }
  }
  export default ABOUT;
