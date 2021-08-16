import React, { Component } from 'react';
import { Table,Form,Container, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from 'react-router-dom'
  import { Navbar, Nav } from 'react-bootstrap'




class CourseSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData:false,
            lastSearch:"",
        }
    }
    
    search(key) {
        console.warn(key)
        // CourseServiceControl.getCourseById(key).then((data) => {
        this.setState({lastSearch:key})
        fetch("/api/coursebyname/"+key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})
                }
                
            })
        })
    }

    getFinalCourse(cid){
        console.log(cid);
        //this.props.history.push(`/viewcourse/401`);
        this.props.history.push(`/viewcourse/${cid}`);
    }
    



    render() {
        
        return (
            <Container>
                <Navbar />
                
               
                <FormControl type="text"  onChange={(event) => this.search(event.target.value.toLowerCase())}   placeholder="Search course" />
                <div>
                    {
                        this.state.searchData?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        
                                        <th>Course Id</th>
                                        <th>Course Name</th>
                                        <th>Course Details</th>
                                        {/* <th>cfee</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                this.state.searchData.map((item)=>
                                <tr>
                                                <td>{item.cid}</td>
                                                <td>{item.cname}</td>
                                                <td>{item.courseDetails}</td>
                                                {/* <td>{item.cfee}</td> */}
                                                <td><Link onClick={()=>this.getFinalCourse(item.cid)}><FontAwesomeIcon icon={faEye} color="orange" /> </Link>
                                                
                                                </td>
                                            </tr>
                                    )
                            }
                            </tbody>
                            </Table>



                        </div>
                        :""
                        // this.state.searchData.map((item) => <Card item={item}/>)
                        // :""
                    }
                    {
                        this.state.noData?<h3>Unfortunately we do not have this course . Stay tuned, More Courses Coming soon</h3>:null
                    } 
                </div>

            </Container>
        );
    }
}

export default CourseSearch;