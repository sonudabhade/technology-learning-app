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
            description: '',
            imageURL: '',
            videoURL: '',
            material: ''


            

   
            

        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        
        this.changeCourseFeeHandler = this.changeCourseFeeHandler.bind(this);
        this.changeCourseDetailsHandler = this.changeCourseDetailsHandler.bind(this);
        this.changeCourseDescriptionHandler = this.changeCourseDescriptionHandler.bind(this);
        this.changeCourseImageHandler = this.changeCourseImageHandler.bind(this);
        this.changeCourseVideoHandler = this.changeCourseVideoHandler.bind(this);
        this.changeCourseMaterialHandler = this.changeCourseMaterialHandler.bind(this);
        

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
                        <div className=" center card " style ={{width: "40rem"}} >
                            <h3 className="text-center">Update Course</h3>
                            <div className="card-body">
                                <Form>
                                    <div className="form-group">
                                    
                                        <label>Course Name:  &nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            {/* <input placeholder="course fee" className="form-control" name="cname"
                                            value={this.state.cname} onChange={this.changeCourseNameHandler} /> */}
                                          
                                            <select value={this.state.value} onChange={this.changeCourseNameHandler} style ={{width: "500px"}}>
                                                <option value="C">C</option>
                                                <option value="C++">C++</option>
                                                <option value="Java">Java</option>
                                                <option value="Python">Python</option>
                                            </select>
                                        
                                    </div>

                                      <br></br>
                                    <div className="form-group">
                                        <label>Course Details:</label>
                                        <textarea placeholder="details" className="form-control" name="details"
                                            value={this.state.courseDetails} onChange={this.changeCourseDetailsHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label>Course Fee</label>
                                        <input placeholder="course fee" className="form-control" name="cfee"
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
                                        <input placeholder="courseMaterial" className="form-control" name="course Material"
                                            value={this.state.material} onChange={this.changeCourseMaterialHandler} />
                                    </div><br></br>
                                    <div className="form-group" align="center">
                                    <Button  variant="contained" size="medium" color="primary" onClick={this.UpdateCourse}>Save</Button>
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

export default Updatecourse