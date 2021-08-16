import React, { Component } from 'react';

import axios from "axios";
import courseservice from '../services/courseservice';

import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/';





class CardView extends Component {
    constructor(props) {
        super(props);
        this.state = {

            course: []
        };
    }




    componentDidMount() {

        // axios
        // .get("http://localhost:8082/getallcourses")
        // .then(response => response.data)
        // .then((data) => {
        //     this.setState({ course: data })

        //     console.log(data);
        // })
        
        // .catch((error) => {
        //     console.log(error.message)
        // })

        courseservice.getCourses().then((response) => {
            this.setState({ course: response.data})
        })
        .catch((error) => {
            console.log(error.message)
        })

        


    }

    getFinalCourse(cid){
        console.log(cid);
        //this.props.history.push(`/viewcourse/401`);
        this.props.history.push(`/viewcourse/${cid}`);
    }


    render() {

        return (
            <div>
                
            
                
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
             >
           { this.state.course.map(item => (



                <div>

                     {/* <section className="py-4" container> */}
                           <ul> 
                    

                        <div className="  col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                            <div className="card p-0  overflow-hidden shadow" style={{ width: " 15rem " }} >
                                
                                <img className="card-img-top " src={item.imageURL} alt="alt message" width="95px" height="130px" ></img>
                                <h5 className="card-header text-dark">{item.cname}</h5>
                                <div className="card-body bg-white mb-2" >
                                    <p className="card-text">
                                        {item.courseDetails}

                                    </p>
                                    {/* <button className="btn btn-success " >Buy</button> */}
                                    {/* <button className="btn btn-success  " onClick={() => history.push ('/Message')}>Buy</button> */}
                                    {/* <button className="btn btn-success "  > <Link className="text-white" onClick={()=>this.getFinalCourse(item.cid)}>View</Link></button> */}
                                    <div align="center">
                                    <button className="btn btn-success " onClick={()=>this.getFinalCourse(item.cid)}>View</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        </ul>
                      
                </div>
       
                        ))}

            </Grid>
            </div>
            
            
            








        );
    }

}


export default CardView;