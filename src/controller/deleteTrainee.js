import React, { PureComponent } from 'react';
//import courseservice from '../services/courseservice';
import traineeservice from '../services/traineeservice';

class DeleteTrainee extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
        tid: this.props.match.params.tid,
        fname: '',
        lname: '',
        phoneno: '',
        qualification: '',
        country:'',
        status:'',
        id: ''

    }



    this.DeleteTrainee = this.DeleteTrainee.bind(this);

  }

  componentDidMount() {
    traineeservice.getTraineeByTid(this.state.tid).then((res) => {
      // take data from response using res
      let trainee = res.data;
      this.setState({ fname: trainee.fname, lname: trainee.lname, phoneno: trainee.phoneno, 
        qualification: trainee.qualification, country: trainee.country, status: trainee.status,
         id: trainee.id});
    });
  }


  DeleteTrainee = e => {

    e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 

    let trainee = { fname: this.state.fname, lname: this.state.lname, phoneno: this.state.phoneno,
         qualification: this.state.qualification, country: this.state.country, status: this.state.status, 
         id: this.state.id};

    console.log('trainee =>' + JSON.stringify(trainee));

    traineeservice.deleteTrainee(trainee, this.state.tid).then((res) => {
      this.props.history.push('/getalltraineeadmin');
      console.log("successfully completed");
    });


  }
  cancel() {
    this.props.history.push('/getalltraineeadmin');
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
                    <button className="btn btn-danger " onClick={this.DeleteTrainee}  style={{ marginLeft: "120px" }}>Confirm Delete</button>
                    <button className="btn btn-success " onClick={this.cancel.bind(this)} style={{ marginLeft: "30px" }}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      
    )
  }
}

export default DeleteTrainee