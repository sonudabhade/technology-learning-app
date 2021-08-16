
import React from 'react';
import authHeader from '../services/auth-header';
import courseservice from '../services/courseservice';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
class CourseAll extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            course:[]
            
        }
        this.postCourse=this.postCourse.bind(this);
        this.updateCourse=this.updateCourse.bind(this);
        this.deletecourse=this.deletecourse.bind(this);
        
    }

    componentDidMount(){
       
        courseservice.getCourses().then((response) => {
            this.setState({ course: response.data})
        });

    }

    postCourse(){
        this.props.history.push('/postcourse');
    }
    updateCourse(cid){
        this.props.history.push(`/updatecourse/${cid}`, { headers: authHeader() });
    }
    deletecourse(cid){
        this.props.history.push(`/deletecourse/${cid}`, { headers: authHeader() });
    }
    
   
    render (){
        
        return (
            
            <div>
            <Paper variant="outlined" square />
                <h1 className = "text-center"> <b>Course List</b></h1>
                <br></br>
                <br></br>
                <center>
                <Button  variant="contained" width="medium" color="primary" onClick={this.postCourse}>Create Course</Button>
                <br></br>
                <br></br>
                </center>
                <table className="table table-striped table-bordered table-hover ">
                    <thead>
                        <tr color="danger">

                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Course Details</th>
                            <th>Course Fee</th>
                            <th>Action</th>
                            {/* <td>Employer Contact</td>
                            <td>Email</td> */}
                            {/* <td>Role</td> */}
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.course.map(
                                course => 
                                <tr key = {course.cid}>
                                     <td> {course.cid}</td>   
                                     <td> {course.cname}</td> 
                                     <td> {course.courseDetails}</td>   
                                     <td> {course.cfee}</td>   
                                     
                                     {/*<td> {user.empEmail}</td>  */}
                                     {/* <td> {user.roles}</td>    */}

                                     <td>

                                     <Button  variant="contained" size="medium" color="primary" 
                                   onClick = {() => this.updateCourse(course.cid)}
                                   >
                                          Update 
                                   </Button>
                                    <br></br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   <Button  variant="contained" size="medium" color="primary" 
                                               onClick={()=>this.deletecourse(course.cid)}>
                                                Delete 
                                                </Button>      
            
                                   </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
           

            

        )
    }
}

export default CourseAll



//import React from 'react';


// const CourseAll = ({course, onDelete, onEdit}) =>{
    
//     return(   

//        <tr key = {course.cid}>
//                    <td> {course.cid}</td>   
//                    <td> {course.cname}</td>   
//                    <td> {course.cfee}</td>   
                                     

    
            
//             <td>

//             <button className="btn btn-info" 
//                 onClick = {() => onEdit(course)}>
//                 Update 
//             </button>
//             <button style={{marginLeft: "10px"}} className="btn btn-danger"
//                 onClick = {() => onDelete(course.cid)}>
//                     Delete 
//             </button>
            
    
//             </td>
//         </tr>

//     )
// }

// export default CourseAll;

