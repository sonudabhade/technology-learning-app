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
            cfee: 0,
            description: '',
            imageURL: '',
            videoURL: '',
            material: ''

            

        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseDetailsHandler =this.changeCourseDetailsHandler.bind(this);
        this.changeCourseFeeHandler = this.changeCourseFeeHandler.bind(this);
        this.changeCourseDescriptionHandler = this.changeCourseDescriptionHandler.bind(this);
        this.changeCourseImageHandler = this.changeCourseImageHandler.bind(this);
        this.changeCourseVideoHandler = this.changeCourseVideoHandler.bind(this);
        this.changeCourseMaterialHandler = this.changeCourseMaterialHandler.bind(this);
        
    

        this.saveCourse = this.saveCourse.bind(this);

    }
    saveCourse = e => {
        e.preventDefault();
        // let course = res.data;

        let course = { cname: this.state.cname, cfee: this.state.cfee, course_details: this.state.courseDetails,
            description: this.state.description, imageURL: this.state.imageURL, videoURL: this.state.videoURL,
            material: this.state.material};

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
    
    changeCourseDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    changeCourseImageHandler = (event) => {
        this.setState({ imageURL: event.target.value });
    }

    changeCourseVideoHandler = (event) => {
        this.setState({ videoURL: event.target.value });
    }
    changeCourseMaterialHandler = (event) => {
        this.setState({ material: event.target.value });
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Create Course</h3>
                            <div className="card-body">
                                <Form>
                                <div className="form-group">
                                        <label>Course Name:</label>
                                        <input placeholder="Job title" className="form-control" name="jobTitle"
                                            value={this.state.cname} onChange={this.changeCourseNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Course Details:</label>
                                        <textarea placeholder="details" className="form-control" name="details"
                                            value={this.state.courseDetails} onChange={this.changeCourseDetailsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Course Fee:</label>
                                        <input placeholder="Course fee" className="form-control" name="cfee"
                                            value={this.state.cfee} onChange={this.changeCourseFeeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description:</label>
                                        <input placeholder="Description" className="form-control" name="Description"
                                            value={this.state.description} onChange={this.changeCourseDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Image URL:</label>
                                        <input placeholder="imageURL" className="form-control" name="imageURL"
                                            value={this.state.imageURL} onChange={this.changeCourseImageHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Video URL:</label>
                                        <input placeholder="videoURL" className="form-control" name="videoURL"
                                            value={this.state.videoURL} onChange={this.changeCourseVideoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Course Material:</label>
                                        <input placeholder="course Material" className="form-control" name="course Material"
                                            value={this.state.material} onChange={this.changeCourseMaterialHandler} />
                                    </div><br></br>
                                    <div className="form-group" align="center">
                                    <Button  variant="contained" size="medium" color="primary" onClick={this.saveCourse}>Save</Button>
                                    <Button  variant="contained" size="medium" color="primary" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</Button>
                                    </div>  
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