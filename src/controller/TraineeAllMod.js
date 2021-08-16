
import React from 'react';
import authHeader from '../services/auth-header';
import traineeservice from '../services/traineeservice';
import Button from '@material-ui/core/Button';
//import traineeservice from '../services/traineeservice';

class TraineeAll extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            trainee :[]
            
            
        }
        // this.postCourse=this.postCourse.bind(this);
        // this.updateCourse=this.updateCourse.bind(this);
        // this.deletecourse=this.deletecourse.bind(this);
    }

    componentDidMount(){
       
        traineeservice.getTrainee().then((response) => {
            this.setState({ trainee: response.data})

         
        });

    }

    // postCourse(){
    //     this.props.history.push('/postcourse');
    // }
    updateTainee(tid){
        this.props.history.push(`/updatetraineemod/${tid}`, { headers: authHeader() });
    }
    // deletecourse(cid){
    //     this.props.history.push(`/deletecourse/${cid}`, { headers: authHeader() });
    // }
   
    render (){
        
        return (
            
                <div>
                <h1 className = "text-center"> All Trainee</h1>
                {/* <button style={{align : "center"}}  className="btn btn-primary" onClick={this.postCourse}>Post Job</button> */}
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td>Trainee Id</td>
                            <td>Trainee FirstName</td>
                            <td>Trainee LastName</td>
                            <td>Trainee PhoneNo</td>
                            <td>Trainee Qualification</td>
                            <td>Country</td>
                            <td>Status</td>
                            <td>user id</td>
                            
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.trainee.map(
                                trainee => 
                                <tr key = {trainee.tid}>
                                    <td> {trainee.tid}</td>
                                    {/* <td> {trainee.username}</td>
                                    <td> {trainee.user_id}</td> */}
                                     <td> {trainee.fname}</td>   
                                     <td> {trainee.lname}</td> 
                                     <td> {trainee.phoneno}</td>   
                                     <td> {trainee.qualification}</td>   
                                     <td> {trainee.country}</td> 
                                     <td> {trainee.status}</td>   
                                     <td> {trainee.user.id}</td> 
                                     <td>
                                      
                                     <Button  variant="contained" size="medium" color="primary"
                                   onClick = {() => this.updateTainee(trainee.tid)}
                                   >
                                          Update 
                                   </Button>
                                   {/*<button style={{marginLeft: "10px"}} className="btn btn-danger"
                                         onClick={()=>this.deletecourse(course.cid)}>
                                        Delete 
                                   </button> */}
            
    
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

export default TraineeAll



