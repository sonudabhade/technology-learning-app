import axios from 'axios'
import authHeader from './auth-header';

const USERS_REST_API_URL = 'http://localhost:8082/api/course/';
const USERS_REST_API_URL2 = 'http://localhost:8082/api/moderator/';
class UserServiceControl {

    getUsers(){
        return axios.get(USERS_REST_API_URL2 + 'getallmoderator', { headers: authHeader() });
    }

    getCourses(){
        return axios.get(USERS_REST_API_URL + 'getallcourses', { headers: authHeader() });
    }
}

export default new UserServiceControl();