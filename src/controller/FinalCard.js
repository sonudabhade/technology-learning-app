import React from 'react';
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
import authHeader from '../services/auth-header';


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


class FinalCard extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            course: [],
            isLoaded: false,
        }
       
    }
    
    componentDidMount() {
        courseservice.getCourses().then((response) => {
            this.setState({
                isLoaded: true,
                course: response.data
                
            })
            
            console.log(this.state.course)
        });


    }
    getCourse(cname){
        this.props.history.push(`/getcourse/${cname}`, { headers: authHeader() });
    }


    render() {
        
        
        return (
        <div>
            <div>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
             >
                 <div>
           { this.state.course.map((item, index) => (



                <div>

                     {/* <section className="py-4" container> */}
                           <ul> 
                    

                        <div className="  col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                            <div className="card p-0  overflow-hidden shadow" style={{ width: " 15rem " }} >
                                <h5 className="card-header text-dark">{item.cname}</h5>
                                <img className="card-img-top " src={item.imageURL} alt="alt message" width="95px" height="130px" ></img>
                                <div className="card-body bg-white mb-2" >
                                    <p className="card-text">
                                        Course ID:{item.Cid} <br />
                                        Price:{item.cfee}₹  <br />
                                        Description:{item.courseDetails} <br />
                                        {/* OwnerName:{item.advownername} */}

                                    </p>
                                    {/* <button className="btn btn-success " >Buy</button> */}
                                    {/* <button className="btn btn-success  " onClick={() => history.push ('/Message')}>Buy</button> */}
                                    <button className="btn btn-success "  onClick={()=>this.getCourse(item.cname)}>
                                               View  
                                    {/* <Link className="text-white" to={'/viewcourse'}>Buy</Link> */}

                                    
                                    </button>
                                </div>

                            </div>

                        </div>
                        </ul>
                      
                </div>
       
                        ))}
                        </div>
            </Grid>
            </div>


        </div>

        )
    }
}

export default FinalCard;