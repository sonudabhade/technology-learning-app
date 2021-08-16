
import React from 'react';
import authHeader from '../services/auth-header';
import traineeservice from '../services/traineeservice';

import Button from '@material-ui/core/Button';

class TraineeAllAdmin extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            trainee :[]
            
        }
        // this.postCourse=this.postCourse.bind(this);
        // this.updateCourse=this.updateCourse.bind(this);
        // this.deletecourse=this.deletecourse.bind(this);
      //  this.applicants=this.applicants.bind(this);
    }

    componentDidMount(){
       
        traineeservice.getTrainee().then((response) => {
            this.setState({ trainee: response.data})
        });

    }

    // postCourse(){
    //     this.props.history.push('/postcourse');
    // }
    // updateTainee(tid){
    //     this.props.history.push(`/updatetraineemod/${tid}`, { headers: authHeader() });
    // }

    deleteTrainee(tid){
        this.props.history.push(`/deletetrainee/${tid}`, { headers: authHeader() });
    }

    
   
    render (){
        return (
            
                <div>
                <h1 className = "text-center"> All Trainee</h1>
                {/* <button style={{align : "center"}}  className="btn btn-primary" onClick={this.postCourse}>Post Job</button> */}
                <table className="table table-striped table-bordered table-hover ">
                    <thead>
                        <tr>

                        <th>Trainee Id</th>
                            <th>Trainee FirstName</th>
                            <th>Trainee LastName</th>
                            <th>Trainee PhoneNo</th>
                            <th>Trainee Qualification</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th>user id</th>
                            <th>Action</th>
                            
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
                                    onClick={()=>this.deleteTrainee(trainee.tid)}
                                  >
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

export default TraineeAllAdmin



