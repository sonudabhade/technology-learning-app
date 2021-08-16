import React, {Component}  from 'react';
import authHeader from '../services/auth-header';

import { Card, Col, Row, Table } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faList } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
//import { Container } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import ReactPlayer from 'react-player'
import courseservice from '../services/courseservice';


export default class CourseHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: []
        };
    }

    componentDidMount() {
        // axios.get("http://localhost:8082/api/coursebyid/:cid", { headers: authHeader() })
        // .then(response => response.data)
        // .then((data) => {
        //     this.setState({course : data});
        // });

        // courseservice.getCourseByCname(this.state.course.cname).then((response) => {
        //     this.setState({ course: response.data})
        // });


        // console.log(this.state.course.cid);
        // console.log(this.props);
        console.log(this.props.match.params.cid);
        console.log(this.props);
        courseservice.getCourseByCid(this.props.match.params.cid).then((response) => {
            this.setState({ course: response.data})


          
            //console.log(this.state.course.cid);
        });

        
    }

    

    render() {
        return (

            <div className="justify-content-md-center">
            <Container>

                <Container className='p-5'>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <ReactPlayer url={this.props.match.params.videoURL} />
                        </Col>
                    </Row>
                </Container>
                <Container >
                    <p className="text-monospace">
                        {this.props.match.params.description}</p>
                </Container>
            </Container>
        </div>



















        //    <div >
        //        {
        //            this.state.course.map((item) => {
                      
        //            return (
        //                 <div className="justify-content-md-center">
        //                    <Container>
                               
        //                        <Container className='p-5'>
        //                        <Row className="justify-content-md-center">
        //                            <Col md="auto">
        //                        <ReactPlayer url={item.videoURL} />
        //                             </Col>
        //                         </Row>
        //                        </Container>
                               
        //                        <Container >
        //                            {/* <header className="jumbotron">
        //                                 <h4>{item.description}</h4>
        //                             </header> */}
                             
        //                            <p className="text-monospace">
        //                                 {item.description}</p>
                               
        //                        </Container>
                               
                               
        //                     </Container>
        //                     </div>
        //                );
        //            })
        //        }
        //    </div>
        );
    }
}