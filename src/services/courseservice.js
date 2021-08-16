import axios from'axios';
import authHeader from './auth-header';
const course_base_url="/api/getallcourses";
const base_url_search="http://localhost:8082/api/coursebyid";
const base_url_search2="/api/coursebyname/";
//const base_url="http://localhost:8082/api/test/coursecreate";
const base_url_edit="/api/updatecourse";
const base_url_delete="/api/deletecourse"

class courseservice{
getCourses (){
   return(
         axios.get(course_base_url, { headers: authHeader() })
   );
}

postCourse(course){
    return(
        axios.post("http://localhost:8082/api/coursecreate",course, { headers: authHeader() })
    );
}

getCourseByCname(cname){
    return(
        axios.get(`${base_url_search2}/${cname}`, { headers: authHeader() })

       // axios.put(`${base_url_edit_status}/${status}/${user_id}`,trainee, { headers: authHeader() }) 
    ); 
}
getCourseByCid(cid){
    return(
        axios.get(`${base_url_search}/${cid}` , { headers: authHeader() })
    );
}

updateCourse(course,cid){
    console.log("cid=>"+ cid);
    return(
    //   axios.put(base_url_edit+'/'+jobId,job)
    axios.put(`${base_url_edit}/${cid}`, course, { headers: authHeader() }) 
    );
}

deleteCourse(course, cid){
    console.log("delete course ")
    return(
        
        axios.delete(`${base_url_delete}/${cid}` , { headers: authHeader() })
    );
}

}
export default new courseservice();