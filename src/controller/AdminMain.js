
import React from 'react';
import UserServiceControl from '../services/UserServiceControl';

class AdminMain extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[],
            
        }
    }

    componentDidMount(){
        UserServiceControl.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
       
    }

    render (){

        
      
        return (
            <div>
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