import axios from'axios';
import authHeader from './auth-header';
const trainee_base_url="/api/test//getalltrainees";
const base_url_search="/api/test/findtrainee";
//const base_url="http://localhost:8082/api/test/coursecreate";
const base_url_edit="/api/test/updateuser";
const base_url_delete="/api/test/deleteuser";

class traineeservice{
getTrainee (){
   return(
         axios.get(trainee_base_url, { headers: authHeader() })
   );
}

// postCourse(job){
//     return(
//         axios.post("http://localhost:8082/api/test/coursecreate",job, { headers: authHeader() })
//     );
// }
getTraineeByTid(tid){
    return(
        axios.get(base_url_search+'/'+tid , { headers: authHeader() })
    );
}

updateTrainee(trainee,tid){
    console.log("tid=>"+ tid);
    return(
    //   axios.put(base_url_edit+'/'+jobId,job)
    axios.put(`${base_url_edit}/${tid}`, trainee, { headers: authHeader() }) 
    );
}

deleteTrainee(trainee, tid){
    console.log("delete trainee ")
    return(
        
        axios.delete(`${base_url_delete}/${tid}` , { headers: authHeader() })
    );
}

}
export default new traineeservice();