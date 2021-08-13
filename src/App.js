import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "C:/MyExes/bootstrap-4.0.0/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import AdminMain from "./controller/AdminMain";
import CourseAll from "./controller/CourseAll";
import DeleteCourse from "./controller/deleteCourse";
import Updatecourse from "./controller/updateCourse";
import PostCourse from "./controller/postCourse";
import TraineeAll from "./controller/TraineeAllMod";
import UpdateTrainee from "./controller/updateTraineeMod";
import TraineeAllAdmin from "./controller/TraineeAllAdmin";
// import userUpdate from "./controller/userUpdate";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            UpMaster
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {/* {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/moddata"} className="nav-link">
                  Moderator Data
                </Link>
              </li>
            )} */}


            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {/* {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admindata"} className="nav-link">
                  Admin Data
                </Link>
              </li>
            )} */}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            {/* <Route path="/moddata" component={ModeratorJava} /> */}
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/getallcourse" component={CourseAll} />
            <Route path="/getalltrainee" component={TraineeAll} />
            <Route path="/getalltraineeadmin" component={TraineeAllAdmin} />
            <Route path="/admindata" component={AdminMain} />
            <Route path="/postcourse" component={PostCourse}></Route>
            <Route path="/updatecourse/:cid" component={Updatecourse}></Route>
            <Route path="/deletecourse/:cid" component={DeleteCourse}></Route>
            <Route path="/updatetraineemod/:tid" component={UpdateTrainee} /> 
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;