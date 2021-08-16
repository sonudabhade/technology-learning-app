// import React from 'react';
// // import Course from './Course';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// import { useHistory } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import { history } from '../index';
// // import { Card, Button } from 'react-bootstrap';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// //import Grid from '@material-ui/core/Grid';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar';
// //import { Switch, Route, Link } from "react-router-dom";
// import Link from '@material-ui/core/Link';
// // import GridList from '@material-ui/core/GridList';
// // import image from '../media/html-image.jpg'





// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   cardMedia: {
//     // paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
  
// }));






// const Cards = (props) => {
//   const {course} = props;
//   const classes = useStyles();
//   const history = useHistory();

  
//   const getView = (e) => {
//     //e.preventDefault();
//     //this.props.history.push('/viewcourse/${cname}');
//     history.push({
//       pathname: "/viewcourse/:cid",
//       state: { cid: props.cid },
//     });

//   //   updateTainee(tid){
//   //     this.props.history.push(`/updatetraineemod/${tid}`, { headers: authHeader() });
//   // }
//   }
// //   function getView(props) {
// //     history.push({
// //       pathname: "/viewcourse/",
// //       state: { cname: props.cname },
// //     });
// //   }

// //  function getCname = (cname) => {
// //     localStorage.setItem("selectedPainting", cardInfo);
// //     this.props.history.push("/viewcourse/:cname");
// //   }
 
//     return (

    
//           <React.Fragment>
//             <CssBaseline/>

//             <AppBar position="relative">


//             </AppBar>
//             <main>
//             <Container className={classes.cardGrid} maxWidth="md">
            
            
//             {
//               <div >
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}  >
//                     {/* <img src={image}/> */}
//                     <img src={course.imageURL} alt="course Images" width= "300px" height= "250px"/>
  
                    
                    
//                     </CardMedia>
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                     {course.cname}
//                     </Typography>
//                     <Typography>
//                     {course.courseDetails}
//                     </Typography>
//                   </CardContent>
//                   <CardActions
//                     //  onClick={(event) => {
//                     //     console.log(event.target);
//                     //     getView(course.cid);
//                     // }}
//                   >

//                      <Button variant="contained" size="medium" color="primary" onClick={getView(course.cid)}>
//                           {/* onClick={getView(course.cname)} > */}

//                           {/* onClick = {() => this.getView(course.cname).bind(this)} */}
//                           View
//                     </Button>
//                     {/* <Button variant="contained" size="small" color="primary" > */}
//                         {/* //    onClick = {() => this.getView().bind(this)}  */}
//                       {/* View */}
//                     {/* </Button> */}
//                     {/* <Button size="small" color="primary">
//                       Edit
//                     </Button> */}
//                   </CardActions>
//                 </Card>
//                 </div>
              
//             }

                    
                 
//                   </Container>
//                   </main>
                
//                   </React.Fragment>
//      )
//    }


// export default Cards;


