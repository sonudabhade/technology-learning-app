import axios from'axios';
import authHeader from './auth-header';
const course_base_url="/api/test/getallcourses";
const base_url_search="http://localhost:8082/api/test/coursebyid";
// const base_url="http://localhost:8084/job";
//const base_url_edit="http://localhost:8082/updatecourse";
const base_url_delete="http://localhost:8082/api/test/deletecourse"

class courseservice{
getCourses (){
   return(
         axios.get(course_base_url, { headers: authHeader() })
   );
}

// postjob(job){
//     return(
//         axios.post("http://localhost:8084/postjob",job)
//     )
// }
getCourseByCid(cid){
    return(
        axios.get(base_url_search+'/'+cid , { headers: authHeader() })
    );
}

// updateCourse(course,cid){
//     console.log("cid=>"+ cid);
//     return(
//     //   axios.put(base_url_edit+'/'+jobId,job)
//     axios.put(`${base_url_edit}/${cid}`, course) 
//     );
// }

deleteCourse(course, cid){
    console.log("delete job ")
    return(
        
        axios.delete(`${base_url_delete}/${cid}` , { headers: authHeader() })
    );
}

}
export default new courseservice();