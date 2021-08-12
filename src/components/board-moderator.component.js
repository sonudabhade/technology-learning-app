import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { history } from '../index'
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

  getUser(){
    history.push({
        pathname : `/admindata`,
    })
}

getCourse(){
  history.push({
      pathname : `/admincourse`,
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
                    <button style={{marginLeft: "20px", padding :"10px"}} className="btn btn-info"
                                onClick={this.getUser.bind(this)} label="Action">
                    Get Users List
                    </button>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button style={{marginLeft: "10px", padding :"10px"}} className="btn btn-info"
                                onClick = {() => this.getCourse().bind(this)}>
                    Get Course List
                    </button>

                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button style={{marginLeft: "10px", padding :"10px"}} className="btn btn-info"
                                onClick = {() => this.getUpdate().bind(this)}>
                    Customer Activities
                    </button>  */}
                  
            </div>
      </div>
    );
  }
}