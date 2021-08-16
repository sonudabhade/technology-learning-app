import React, { PureComponent } from 'react'
import '../App.css';
import courseservice from '../services/courseservice';
import Button from '@material-ui/core/Button';
import Form from "react-validation/build/form";

class Updatecourse extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            cid: this.props.match.params.cid,
            cname: 'C',
            cfee: 0,
            courseDetails: ''


            

   
            // jobExp: '',
            // jobSal: '',
            // jobLocation:'',
            // jobNoticePeriod:'',
            // jobSkillSet:''

        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        
        this.changeCourseFeeHandler = this.changeCourseFeeHandler.bind(this);
        this.changeCourseDetailsHandler = this.changeCourseDetailsHandler.bind(this);
        // this.changejobSalHandler =this.changejobSalHandler.bind(this);

        // this.changejobLocationHandler =this.changejobLocationHandler.bind(this);
        // this.changejobNoticePeriodHandler =this.changejobNoticePeriodHandler.bind(this);
        // this.changejobSkillSetHandler =this.changejobSkillSetHandler.bind(this);


        this.UpdateCourse = this.UpdateCourse.bind(this);

    }

    componentDidMount() {
        courseservice.getCourseByCid(this.state.cid).then((res) => {
            // take data from response using res
            let course = res.data;
            this.setState({ cname: course.cname, cfee: course.cfee, courseDetails: course.courseDetails });
        })
            .catch(err => console.log(err))
    }
    UpdateCourse = e => {

        e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 


        let course = { cname: this.state.cname, cfee: this.state.cfee, courseDetails: this.state.courseDetails };


        console.log('course =>' + JSON.stringify(course));

        courseservice.updateCourse(course, this.state.cid).then((res) => {
            this.props.history.push("/getallcourse");
            e.persist();
            console.log("successfully completed");
        });


    }
    cancel() {
        this.props.history.push('/getallcourse');
    }
    changeCourseNameHandler = (event) => {
        this.setState({ cname: event.target.value });
    }
    changeCourseFeeHandler = (event) => {
        this.setState({ cfee: event.target.value });
    }
    changeCourseDetailsHandler = (event) => {
        this.setState({ courseDetails: event.target.value });
    }
    // changejobSalHandler = (event) => {
    //     this.setState({ jobSal: event.target.value });
    // }

    // changejobLocationHandler = (event) => {
    //     this.setState({ jobLocation: event.target.value });
    // }

    // changejobNoticePeriodHandler = (event) => {
    //     this.setState({ jobNoticePeriod: event.target.value });
    // }
    // changejobSkillSetHandler = (event) => {
    //     this.setState({ jobSkillSet: event.target.value });
    // }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className=" center card " style ={{width: "40rem"}} >
                            <h3 className="text-center">Update Course</h3>
                            <div className="card-body">
                                <Form>
                                    <div className="form-group">
                                    
                                        <label>Course Name:  &nbsp;&nbsp;&nbsp;&nbsp;
                                            {/* <input placeholder="course fee" className="form-control" name="cname"
                                            value={this.state.cname} onChange={this.changeCourseNameHandler} /> */}
                                          
                                            <select value={this.state.value} onChange={this.changeCourseNameHandler} style ={{width: "400px"}}>
                                                <option value="C">C</option>
                                                <option value="C++">C++</option>
                                                <option value="Java">Java</option>
                                                <option value="Python">Python</option>
                                            </select>
                                        </label>
                                    </div>


                                    <div className="form-group row" >
                                        <div className="col-sm-2">
                                        <label>Course Details</label>
                                        </div>
                                        <div className="col-sm-8" style ={{marginLeft: "-30px"}}>
                                        <input placeholder="Course Details" className="form-control" name="courseDetails"
                                            value={this.state.courseDetails} onChange={this.changeCourseDetailsHandler} />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label>Course Fee</label>
                                        <input placeholder="course fee" className="form-control" name="cfee"
                                            value={this.state.cfee} onChange={this.changeCourseFeeHandler} />
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
                                    <Button  variant="contained" size="medium" color="primary" onClick={this.UpdateCourse}>Save</Button>
                                    <Button  variant="contained" size="medium" color="primary" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Updatecourse