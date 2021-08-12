import React, { PureComponent } from 'react';
import courseservice from '../services/courseservice';


class DeleteCourse extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
        cid: this.props.match.params.cid,
        cname: '',
        cfee: '',
        courseDetails:''

    }



    this.DeleteCourse = this.DeleteCourse.bind(this);

  }

  componentDidMount() {
    courseservice.getCourseByCid(this.state.cid).then((res) => {
      // take data from response using res
      let course = res.data;
      this.setState({ cname: course.cname, cfee: course.cfee, courseDetails: course.courseDetails });
    });
  }
  DeleteCourse = e => {

    e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 

    let course = { cname: this.state.cname, cfee: this.state.cfee, courseDetails: this.state.courseDetails };

    console.log('course =>' + JSON.stringify(course));

    courseservice.deleteCourse(course, this.state.cid).then((res) => {
      this.props.history.push("/admincourse");
      console.log("successfully completed");
    });


  }
  cancel() {
    this.props.history.push('/admincourse');
  }




  render() {
    return (
      <div>
                    <div className=" center card " >
              <h2 className="text-center">Are You Sure? </h2>
              <div className="card-body">
                <h4 className="text-center" style={{margin:"3rem"}}>This process cannot be reversed</h4>
                <form>
                  <div className="form-group ">
                    <button className="btn btn-danger " onClick={this.DeleteCourse}  style={{ marginLeft: "120px" }}>Confirm Delete</button>
                    <button className="btn btn-success " onClick={this.cancel.bind(this)} style={{ marginLeft: "30px" }}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      
    )
  }
}

export default DeleteCourse