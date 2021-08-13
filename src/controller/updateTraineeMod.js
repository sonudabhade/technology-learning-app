import React, { PureComponent } from 'react'
import '../App.css';
import traineeservice from '../services/traineeservice';

class UpdateTrainee extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tid: this.props.match.params.tid,
            fname: '',
            lname: '',
            phoneno: 0,
            qualification: '',
            country:'',
            status:'Pending',
            user_id:'1',
            username:'',
            email: '',
            password: '',


        }
        this.changeTraineeStatusHandler = this.changeTraineeStatusHandler.bind(this);
        
        this.changeTraineeFnameHandler = this.changeTraineeFnameHandler.bind(this);
        this.changeTraineeLnameHandler = this.changeTraineeLnameHandler.bind(this);
        this.changeTraineePhoneHandler =this.changeTraineePhoneHandler.bind(this);

        this.changeTraineeQualificationHandler =this.changeTraineeQualificationHandler.bind(this);
        this.changeTraineeCountryHandler =this.changeTraineeCountryHandler.bind(this);


        this.changeTraineeUidHandler =this.changeTraineeUidHandler.bind(this);
        this.changeTraineeUsernameHandler =this.changeTraineeUsernameHandler.bind(this);
        this.changeTraineeEmailHandler =this.changeTraineeEmailHandler.bind(this);
        this.changeTraineePasswordHandler =this.changeTraineePasswordHandler.bind(this);





        this.UpdateTrainee = this.UpdateTrainee.bind(this);

    }

    componentDidMount() {
        traineeservice.getTraineeByTid(this.state.tid).then((res) => {
            // take data from response using res
            let trainee = res.data;
            this.setState({ fname: trainee.fname, lname: trainee.lname, phoneno: trainee.phoneno,
                 qualification: trainee.qualification, country: trainee.country, 
                 status: trainee.status, user_id: trainee.user_id, username: trainee.username, 
                 password: trainee.password, email: trainee.email});
        })
            .catch(err => console.log(err))
    }
    UpdateTrainee = e => {

        e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 


        let trainee = { fname: this.state.fname, lname: this.state.lname, phoneno: this.state.phoneno,
             qualification: this.state.qualification, country: this.state.country, status: this.state.status, 
             user_id: this.state.user_id, username: this.state.username, email: this.state.email, password: this.state.password};


        console.log('trainee =>' + JSON.stringify(trainee));

        traineeservice.updateTrainee(trainee, this.state.tid).then((res) => {
            this.props.history.push("/getalltrainee");
            e.persist();
            console.log("successfully completed");
        });


    }
    cancel() {
        this.props.history.push('/getalltrainee');
    }
    changeTraineeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }
    changeTraineeFnameHandler = (event) => {
        this.setState({ fname: event.target.value });
    }
    changeTraineeLnameHandler = (event) => {
        this.setState({ lname: event.target.value });
    }
    changeTraineePhoneHandler = (event) => {
        this.setState({ phoneno: event.target.value });
    }

    changeTraineeQualificationHandler = (event) => {
        this.setState({ qualification: event.target.value });
    }

    changeTraineeCountryHandler = (event) => {
        this.setState({ country: event.target.value });
    }
    changeTraineeUidHandler = (event) => {
        this.setState({ user_id: event.target.value });
    }
    changeTraineeUsernameHandler  = (event) => {
        this.setState({ username: event.target.value });
    }
    changeTraineeEmailHandler  = (event) => {
        this.setState({ email: event.target.value });
    }
    changeTraineePasswordHandler  = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className=" center card " style ={{width: "40rem"}} >
                            <h3 className="text-center">Update Course</h3>
                            <div className="card-body">
                                <form>
                                    

                                    <div className="form-group " >
                                        {/* <div className="col-sm-2"> */}
                                        <label>FirstName:</label>
                                        {/* </div> */}
                                        {/* <div className="col-sm-8" style ={{marginLeft: "-30px"}}> */}
                                        <input placeholder="First Name" className="form-control" name="fname"
                                            value={this.state.fname} onChange={this.changeTraineeFnameHandler} />
                                        {/* </div> */}
                                    </div>
                                   <div className="form-group">
                                        <label>Notice Period</label>
                                        <input placeholder="Last Name:" className="form-control" name="lname"
                                            value={this.state.lname} onChange={this.changeTraineeLnameHandler} />
                                    </div> 

                                    <div className="form-group">
                                        <label>LastName:</label>
                                        <input placeholder="Phone No:" className="form-control" name="phoneno"
                                            value={this.state.phoneno} onChange={this.changeTraineePhoneHandler} />
                                    </div>
                                     <div className="form-group">
                                        <label>Salary</label>
                                        <input placeholder="Country" className="form-control" name="country"
                                            value={this.state.country} onChange={this.changeTraineeCountryHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Location  &nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* <input placeholder="course fee" className="form-control" name="cname"
                                            value={this.state.cname} onChange={this.changeCourseNameHandler} /> */}
                                          
                                            <select value={this.state.qualification} onChange={this.changeTraineeQualificationHandler} style ={{width: "400px"}}>
                                                <option value="ME">ME</option>
                                                <option value="MSC">MSC</option>
                                                <option value="BE">BE</option>
                                                <option value="BA">BA</option>
                                                <option value="SSC">SSC</option>
                                                <option value="BSC">BSC</option>
                                                
                                            </select>
                                        </label>
                                    </div>

                                    <div className="form-group">
                                    
                                        <label>Status:  &nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* <input placeholder="course fee" className="form-control" name="cname"
                                            value={this.state.cname} onChange={this.changeCourseNameHandler} /> */}
                                          
                                            <select value={this.state.value} onChange={this.changeTraineeStatusHandler} style ={{width: "400px"}}>
                                                <option value="Pending">Pending</option>
                                                <option value="Completed">Completed</option>
                                                
                                            </select>
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <label>User id</label>
                                        <input placeholder="Notice Period" className="form-control" name="jobSal"
                                            value={this.state.user_id} onChange={this.changeTraineeUidHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input placeholder="Username" className="form-control" name="username"
                                            value={this.state.username} onChange={this.changeTraineeUsernameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="Email" className="form-control" name="email"
                                            value={this.state.email} onChange={this.changeTraineeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input placeholder="Password" className="form-control" name="password"
                                            value={this.state.password} onChange={this.changeTraineePasswordHandler} />
                                    </div>
                                    <div style ={{marginLeft: "50px"}}>
                                    <button className="btn btn-success" onClick={this.UpdateTrainee} style={{ width: "150px" }}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ width: "150px" }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateTrainee