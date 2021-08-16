import React, { PureComponent } from 'react'
import traineeservice from '../services/traineeservice';

class CreateTrainee extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tid: this.props.match.params.tid,
            fname: '',
            lname: '',
            phoneno: 0,
            qualification: 'BE',
            country:'India',
            status:'Pending',
            id:'',
            //currentUser: { id: "" }

        }
        this.changeTraineeStatusHandler = this.changeTraineeStatusHandler.bind(this);
        
        this.changeTraineeFnameHandler = this.changeTraineeFnameHandler.bind(this);
        this.changeTraineeLnameHandler = this.changeTraineeLnameHandler.bind(this);
        this.changeTraineePhoneHandler =this.changeTraineePhoneHandler.bind(this);

        this.changeTraineeQualificationHandler =this.changeTraineeQualificationHandler.bind(this);
        this.changeTraineeCountryHandler =this.changeTraineeCountryHandler.bind(this);


        this.changeTraineeUidHandler =this.changeTraineeUidHandler.bind(this);

        this.saveTrainee = this.saveTrainee.bind(this);

    }
    saveTrainee = e => {
        e.preventDefault();
        // let course = res.data;

        let trainee = { fname: this.state.fname, lname: this.state.lname, phoneno: this.state.phoneno,
            qualification: this.state.qualification, country: this.state.country, status: this.state.status, 
            id: this.state.id }

        console.log('trainee =>' + JSON.stringify(trainee));

        traineeservice.postTrainee(trainee,this.state.tid).then((res)=>{
            this.props.history.push('/user')
        })
        .catch(err => console.log(err))
    }
    cancel() {
        this.props.history.push('/user');
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
        this.setState({ id: event.target.value });
    }


    render() {
        //const { currentUser } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Create Profile</h3>
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
                                        <label>Last Name</label>
                                        <input placeholder="Last Name:" className="form-control" name="lname"
                                            value={this.state.lname} onChange={this.changeTraineeLnameHandler} />
                                    </div> 

                                    <div className="form-group">
                                        <label>Phone No:</label>
                                        <input placeholder="Phone No:" className="form-control" name="phoneno"
                                            value={this.state.phoneno} onChange={this.changeTraineePhoneHandler} />
                                    </div>
                                     <div className="form-group">
                                     <label>Qualification  &nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* <input placeholder="course fee" className="form-control" name="cname"
                                            value={this.state.cname} onChange={this.changeCourseNameHandler} /> */}
                                          
                                            <select value={this.state.country} onChange={this.changeTraineeCountryHandler} style ={{width: "400px"}}>
                                                <option value="ME">ME</option>
                                                <option value="MSC">MSC</option>
                                                <option value="BE">BE</option>
                                                <option value="BA">BA</option>
                                                <option value="SSC">SSC</option>
                                                <option value="BSC">BSC</option>
                                                
                                            </select>
                                            </label>
                                        <label>Salary</label>
                                        <input placeholder="Country" className="form-control" name="country"
                                            value={this.state.country} onChange={this.changeTraineeCountryHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Qualification  &nbsp;&nbsp;&nbsp;&nbsp;
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
                                        <input placeholder="User Id" className="form-control" name="id"
                                            value={this.state.value} onChange={this.changeTraineeUidHandler} />
                                    </div>
                                    {/* <div className="form-group">
                                        <label>Salary</label>
                                        <input placeholder="Job Salary" className="form-control" name="jobSal"
                                            value={this.state.jobSal} onChange={this.changejobSalHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input placeholder="Job Location" className="form-control" name="jobLocation"
                                            value={this.state.jobLocation} onChange={this.changejobLocationHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Notice Period</label>
                                        <input placeholder="Notice Period" className="form-control" name="jobSal"
                                            value={this.state.jobNoticePeriod} onChange={this.changejobNoticePeriodHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Skills</label>
                                        <input placeholder="Skills" className="form-control" name="jobSkillSet"
                                            value={this.state.jobSkillSet} onChange={this.changejobSkillSetHandler} />
                                    </div> */}
                                    <button className="btn btn-success" onClick={this.saveTrainee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateTrainee