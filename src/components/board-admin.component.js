import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { history } from '../index'
import Button from '@material-ui/core/Button';
//import AdminMain from "../controller/AdminMain";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "" 
    };

    
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data,
         // showModal: false
         
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
 
  // getComponent(event) {
  //   return <AdminMain/>;
  // }

  getUser(){
    history.push({
        pathname : `/admindata`,
    })
}

getCourse(){
  history.push({
      pathname : `/getallcourse`,
  })
}

getAllTrainee(){
  history.push({
    pathname : `/getalltraineeadmin`,
  })
}

// getUpdate(){
//   history.push({
//       pathname : `/userupdate`,
//   })
// }



  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>

        <br/><br/>
            <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button  variant="contained" size="medium" color="primary" 
                                onClick={this.getUser.bind(this)} label="Action">
                    Get Users List
                    </Button>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button  variant="contained" size="medium" color="primary" 
                                onClick = {() => this.getCourse().bind(this)}>
                    Get Course List
                    </Button>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button  variant="contained" size="medium" color="primary" 
                                onClick = {() => this.getAllTrainee().bind(this)}>
                    Show All Trainee
                    </Button>
                  
            </div>
      </div>
    );
  }
}