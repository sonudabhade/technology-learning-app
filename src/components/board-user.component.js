import React, { Component } from "react";

import UserService from "../services/user.service";
//import { Switch, Route, Link } from "react-router-dom";
import EventBus from "../common/EventBus";


export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      currentUser: ''
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
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

  render() {
    //const { currentUser } = this.state;
    return (
      <div className="container">
        {/* <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header> */}

         {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/usercreate"} className="nav-link">
                  Create Profile
                </Link>
              </li>
            )} */}
      </div>
    );
  }
}