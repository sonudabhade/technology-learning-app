import React from 'react';
import { Component } from 'react';
import Image from '../../images/contact5.jpg'
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { TypographyStyle } from '@material-ui/core';
// import '../../App.css';
// import HeroSection2 from '../HeroSection2';


// function CONTACT() {
//   return (
//     <>
//       <HeroSection2 />
      
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default CONTACT;

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
     
      backgroundSize: 'cover',
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: "center"
      

      
      
    
  }
};

class CONTACT extends Component {
  render() {
    return (
      <Grid container style={styles.paperContainer} >
       
        <Typography variant='h1' align='center'>
            Contact Us
          </Typography>
          <Typography gutterBottom variant="h5" align="center" color="textSecondary" paragraph>Contact Number : +91 9999888810</Typography>  
          <Typography gutterBottom variant="h5" align="center" color="textSecondary" paragraph>Email : UpMasters@gmail.com</Typography>  
          <Typography gutterBottom variant="h5" align="center" color="textSecondary" paragraph>Instagram : TheUpMaster's</Typography> 
          <Typography vgutterBottom variant="h5" align="center" color="textSecondary" paragraph>Twitter: @TheUpMasters</Typography>
        
      </Grid>
    );
  }
}
export default CONTACT;


