import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8082/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }



  getUsers(){
    return axios.get(API_URL + 'getallmoderator', { headers: authHeader() });
}

  getCourses(){
    return axios.get(API_URL + 'getallcourses', { headers: authHeader() });

}

// deleteCourse(course,cid){
//   console.log("delete job ")
//   return(
//       axios.delete(API_URL + 'deletecourse/${cid}',course, { headers: authHeader() })
//   );
  
// }

// deleteCourse(){
//     return axios.get(API_URL + 'deletecourse/{cid}', { headers: authHeader() });

// }

// updateUser(){
//     return axios.get(API_URL + 'updatemoderator', { headers: authHeader() });

// }

}

export default new UserService();