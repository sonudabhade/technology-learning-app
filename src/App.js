import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
//import "C:/MyExes/bootstrap-4.0.0/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/pages/Home";
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
import DeleteTrainee from "./controller/deleteTrainee";
import createTrainee from "./controller/createTrainee";
// import CourseCard from "./controller/CourseCard";
// import CourseHome from "./controller/CourseHome";
import ABOUT from "./components/pages/About";
import CONTACT from "./components/pages/Contact";
import CardFinal from "./controller/CardFinal";
import CardView from "./controller/CardView";
// import userUpdate from "./controller/userUpdate";

import Course3 from "./components/courses/Course3";
import Course1 from "./components/courses/Course1";
import Course2 from "./components/courses/Course2";
import Course4 from "./components/courses/Course4";
import Course5 from "./components/courses/Course5";
import Course6 from "./components/courses/Course6";
import Course7 from "./components/courses/Course7";
import Course8 from "./components/courses/Course8";
import Course9 from "./components/courses/Course9";
import Course10 from "./components/courses/Course10";
import CourseSearch from "./controller/CourseSearch";


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
      
      <div >
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
            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/usercreate"} className="nav-link">
                  Create Profile
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/allcourses"} className="nav-link">
                  All Courses
                </Link>
              </li>
              <li className="nav-item">
              <Link to={"/searchcourse"} className="nav-link">
                Search Course
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
            <Route exact path={["/", "/home"]} component={CardFinal} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/usercreate" component={createTrainee} />
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
            <Route path="/deletetrainee/:tid" component={DeleteTrainee}></Route>
            <Route path="/updatetraineemod/:tid" component={UpdateTrainee} /> 

            <Route exact path="/allcourses" component={CardView} />
            <Route exact path="/aboutus" component={ABOUT} />
            <Route exact path="/contact" component={CONTACT} />

            <Route exact path="/viewcourse/403" component={Course3} />
            <Route exact path="/viewcourse/401" component={Course1} />
            <Route exact path="/viewcourse/402" component={Course2} />
            <Route exact path="/viewcourse/404" component={Course4} />
            <Route exact path="/viewcourse/405" component={Course5} />
            <Route exact path="/viewcourse/406" component={Course6} />
            <Route exact path="/viewcourse/407" component={Course7} />
            <Route exact path="/viewcourse/408" component={Course8} />
            <Route exact path="/viewcourse/409" component={Course9} />
            <Route exact path="/viewcourse/410" component={Course10} />
            <Route exact path="/searchcourse" component={CourseSearch} />
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;