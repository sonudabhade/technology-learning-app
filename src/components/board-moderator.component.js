import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { history } from '../index'
import Button from '@material-ui/core/Button';
//import moderator from "../controller/moderator";

export default class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getModeratorBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

// getUser(){
//     history.push({
//         pathname : `/admindata`,
//     })
// }

getCourse(){
  history.push({
      pathname : `/getallcourse`,
  })
}

getAllTrainee(){
  history.push({
      pathname : `getalltrainee`,
  })
}



  render() {
    return (
      <div className="container">
        {/* <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header> */}

        <br/><br/>
            <div>
                    {/* <button style={{marginLeft: "20px", padding :"10px"}} className="btn btn-info"
                                onClick={this.getUser.bind(this)} label="Action">
                    Get Users List
                    </button> */}

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button  variant="contained" size="medium" color="primary" 
                    // style={{marginLeft: "10px", padding :"10px"}} className="btn btn-info"
                                onClick = {() => this.getCourse().bind(this)}>
                    Get Course List
                    </Button>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button  variant="contained" size="medium" color="primary" 
                    //style={{marginLeft: "10px", padding :"10px"}} className="btn btn-info"
                                onClick = {() => this.getAllTrainee().bind(this)}>
                    Show All Trainee
                    </Button> 
                  
            </div>
      </div>
    );
  }
}