
import React from 'react';
import UserService from '../services/user.service';
import EventBus from "../common/EventBus";
//import { history } from '../index'

class AdminMain extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[],
            content: ""
            
        }
    }

    // componentDidMount(){
    //     UserServiceControl.getUsers().then(
    //         (response) => {
    //             this.setState({ 
    //                 users: response.data})
    //     });   
    // }

    componentDidMount() {
        UserService.getUsers().then(
          response => {
            this.setState({
              users: response.data
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
    
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              EventBus.dispatch("logout");
            }
          }
        );
      }
     

    render (){

        // if(error.response && error.response.status === 403){
        //     EventBus.dispatch("logout");
        // }
      
        return (
            <div className="container">
            {/* <header className="jumbotron">
              <h3>{this.state.content} </h3>
              
            </header> */}
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td>User Id</td>
                            <td>UserName</td>
                            <td>Email</td>
                            {/* <td>Employer Contact</td>
                            <td>Email</td> */}
                            {/* <td>Role</td> */}
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.username}</td>   
                                     <td> {user.email}</td>   
                                     {/* <td> {user.empContact}</td> 
                                     <td> {user.empEmail}</td>  */}
                                     {/* <td> {user.roles}</td>    */}
                                     <td>

                                   <button className="btn btn-info" 
                                    // onClick = {() => this.getUserUpdate().bind(this)}
                                    >
                                          Update 
                                   </button>
                                   <button style={{marginLeft: "10px"}} className="btn btn-danger"
                                         //onClick = {() => onDelete(course.cid)}>
                                        >Delete 
                                   </button>
            
    
                                  </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            

        )
    }
}

export default AdminMain