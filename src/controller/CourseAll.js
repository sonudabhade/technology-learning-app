
import React from 'react';
import authHeader from '../services/auth-header';
import courseservice from '../services/courseservice';

class AdminMain extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            course:[]
            
        }
        // this.postjob=this.postjob.bind(this);
        // this.editjob=this.editjob.bind(this);
        this.deletecourse=this.deletecourse.bind(this);
    }

    componentDidMount(){
       
        courseservice.getCourses().then((response) => {
            this.setState({ course: response.data})
        });

    }

    // postCourse(){
    //     this.props.history.push('/postcourse');
    // }
    // editjob(jobId){
    //     this.props.history.push(`/updatecourse/${cid}`);
    // }
    deletecourse(cid){
        this.props.history.push(`/deletecourse/${cid}`, { headers: authHeader() });
    }
   
    render (){
        
        return (
            
                <div>
                <h1 className = "text-center"> Course List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td>Course Id</td>
                            <td>Course Name</td>
                            <td>Course Fee</td>
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
                                     <td> {course.cfee}</td>   
                                     {/* <td> {user.empContact}</td> 
                                     <td> {user.empEmail}</td>  */}
                                     {/* <td> {user.roles}</td>    */}

                                     <td>

                                   <button className="btn btn-info" 
                                   //onClick = {() => onEdit(course)}
                                   >
                                          Update 
                                   </button>
                                   <button style={{marginLeft: "10px"}} className="btn btn-danger"
                                         onClick={()=>this.deletecourse(course.cid)}>
                                        Delete 
                                   </button>
            
    
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

export default AdminMain



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

