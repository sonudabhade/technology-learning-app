import React, { PureComponent } from 'react'
import courseservice from '../services/courseservice';
import Button from '@material-ui/core/Button';
import Form from "react-validation/build/form";

class PostCourse extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            cname: '',
            courseDetails:'',
            cfee: 0
            // jobSal: '',
            // jobLocation:'',
            // jobNoticePeriod:'',
            // jobSkillSet:''

        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseDetailsHandler =this.changeCourseDetailsHandler.bind(this);
        this.changeCourseFeeHandler = this.changeCourseFeeHandler.bind(this);
        
        // this.changejobSalHandler =this.changejobSalHandler.bind(this);

        // this.changejobLocationHandler =this.changejobLocationHandler.bind(this);
        // this.changejobNoticePeriodHandler =this.changejobNoticePeriodHandler.bind(this);
        // this.changejobSkillSetHandler =this.changejobSkillSetHandler.bind(this);
       

        this.saveCourse = this.saveCourse.bind(this);

    }
    saveCourse = e => {
        e.preventDefault();
        // let course = res.data;

        let course = { cname: this.state.cname, cfee: this.state.cfee, course_details: this.state.courseDetails };

        console.log('course =>' + JSON.stringify(course));

        courseservice.postCourse(course,this.state.cid).then((res)=>{
            this.props.history.push('/getallcourse')
        });
    }
    cancel() {
        this.props.history.push('/getallcourse');
    }
    changeCourseNameHandler = (event) => {
        this.setState({ cname: event.target.value });
    }

    changeCourseDetailsHandler = (event) => {
        this.setState({ courseDetails: event.target.value });
    }
    changeCourseFeeHandler = (event) => {
        this.setState({ cfee: event.target.value });
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
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Post a Job</h3>
                            <div className="card-body">
                                <Form>
                                <div className="form-group">
                                        <label>Course Name</label>
                                        <input placeholder="Job title" className="form-control" name="jobTitle"
                                            value={this.state.cname} onChange={this.changeCourseNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Course Details</label>
                                        <textarea placeholder="Job desc" className="form-control" name="jobDesc"
                                            value={this.state.courseDetails} onChange={this.changeCourseDetailsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Course Fee</label>
                                        <input placeholder="Job Exp" className="form-control" name="jobExp"
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
                                    <Button  variant="contained" size="medium" color="primary" onClick={this.saveCourse}>Save</Button>
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
export default PostCourse