import React from 'react';
// import UserServiceControl from '../services/UserServiceControl';
import courseservice from '../services/courseservice';
// import { Card } from 'react-bootstrap';
import Card from './Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import { GridList, GridListTile } from '@material-ui/core';
// import { spacing } from '@material-ui/system';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center"  paddingX={2}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        UpMaster
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


class CourseCard extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            isLoaded: false,
        }
    }
    
    componentDidMount() {
        courseservice.getCourses().then((response) => {
            this.setState({
                isLoaded: true,
                courses: response.data
                
            })
            
            console.log(this.state.courses)
        });


    }

    render() {
        var { isLoaded, courses } = this.state;
        
        return (
            <React.Fragment>
                <CssBaseline />

                <AppBar position="relative">
                    {/* <Toolbar>
          
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                    </Typography>
                    </Toolbar> */}
                </AppBar>
                <main>
                <div style={{ padding: 50 }}>
                <Container maxWidth="sm">
            {/* <Typography component="h1" variant="h2" align="center" color="primary.main" gutterBottom  >
              Upmaster
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              UpMaster provide you with excellent choices of courses.<br/>
              Enroll now to start your learning journey.
            </Typography> */}
            <div >
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  {/* <Button variant="contained" color="primary">
                    Main call to action
                  </Button> */}
                </Grid>
                <Grid item>
                  {/* <Button variant="outlined" color="primary">
                    Secondary action
                  </Button> */}
                </Grid>
              </Grid>
            </div>
          </Container>
          </div>
          <Container container paddingtop={6} paddingbottom= {6} maxWidth="md">
          {/* <Grid container spacing={4}> */}
          {/* <Grid xs={12} sm={6} md={4}> */}

                  
                  
                     
                        {courses.map(course => <Card key={course.cid} course={course} />)}
                         
                                   
                    

                {/* </Grid> */}
                {/* </Grid> */}
                </Container>
                </main>
                

            </React.Fragment>



        )
    }
}

export default CourseCard;