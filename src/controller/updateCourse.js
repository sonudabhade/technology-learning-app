import React, { PureComponent } from 'react'
import '../App.css';
import courseservice from '../services/courseservice';

class Updatecourse extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            cid: this.props.match.params.cid,
            cname: '',
            cfee: 0,
            courseDetails:''

            // jobExp: '',
            // jobSal: '',
            // jobLocation:'',
            // jobNoticePeriod:'',
            // jobSkillSet:''

        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseFeeHandler = this.changeCourseFeeHandler.bind(this);
        this.changeCourseDetailsHandler =this.changeCourseDetailsHandler.bind(this);
        // this.changejobSalHandler =this.changejobSalHandler.bind(this);

        // this.changejobLocationHandler =this.changejobLocationHandler.bind(this);
        // this.changejobNoticePeriodHandler =this.changejobNoticePeriodHandler.bind(this);
        // this.changejobSkillSetHandler =this.changejobSkillSetHandler.bind(this);
       

        this.UpdateCourse = this.UpdateCourse.bind(this);

    }
    
    componentDidMount(){
        courseservice.getCourseByCid(this.state.cid).then((res) => {
            // take data from response using res
            let course = res.data;
            this.setState({ cname: course.cname, cfee: course.cfee, courseDetails: course.courseDetails });
        });
    }
    UpdateCourse = e => {

        e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 
      
        let course = { cname: this.state.cname, cfee: this.state.cfee, courseDetails: this.state.courseDetails };


        console.log('course =>' + JSON.stringify(course));

        courseservice.updateCourse(course,this.state.cid).then((res)=>{
         this.props.history.push("/admincourse");
         console.log("successfully completed");
        });

        
    }
    cancel() {
        this.props.history.push('/admincourse');
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
                        <div className=" center card " >
                            <h3 className="text-center">Update Course</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Course Name</label>
                                        <input placeholder="course fee" className="form-control" name="cname"
                                            value={this.state.cname} onChange={this.changeCourseNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Course Details</label>
                                        <input placeholder="Course Details" className="form-control" name="courseDetails"
                                            value={this.state.courseDetails} onChange={this.changeCourseDetailsHandler} />
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
                                    <button className="btn btn-success" onClick={this.UpdateCourse}>Save</button>
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

export default Updatecourse