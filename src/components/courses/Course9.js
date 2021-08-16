import React, {Component}  from 'react';


import axios from 'axios';
// import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';


const styles = {
    paperContainer: {
        
       
        backgroundSize: 'cover',
        flexDirection: 'column',
        
        justifyContent: "center"
        
        
      
    }
  };

export default class Course9 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8082/api/coursebyname/spring")
        .then(response => response.data)
        .then((data) => {
            this.setState({course : data});
        });
    }

    render() {
        return (
           <div>
               {
                   this.state.course.map((item) => {
                       return (
                           <React.Fragment>
                            <CssBaseline/>
                           <Grid container style={styles.paperContainer}>
                               
                               
                               <Container align="center">
                               <ReactPlayer controls={true} className="react-player" url={item.videoURL} />
                               </Container>
                               
                               
                               <Grid container >
                                   
                               <Typography gutterBottom variant="h6" align="left" color="textPrimary" paragraph >{item.description}</Typography>
                               
                               </Grid>
                               <Typography gutterBottom variant="h6" align="left" color="textPrimary" paragraph>
                                   visit documentation for more information:- {item.material}
                                </Typography>
                               
                            </Grid>
                            
                            </React.Fragment>
                       );
                   })
               }
           </div>
        );
    }
}