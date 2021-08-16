import axios from'axios';
import authHeader from './auth-header';
const trainee_base_url="/api/getalltrainees";
const base_url_search="/api/findtrainee";
const base_url="http://localhost:8082/api/traineecreate";
//const base_url_edit="/api/test/updateuser";
const base_url_edit_status="http://localhost:8082/api/aprovestatus";
const base_url_delete="/api/deleteuser";

class traineeservice{
getTrainee (){
   return(
         axios.get(trainee_base_url, { headers: authHeader() })
   );
}

postTrainee(trainee){
    return(
        axios.post(base_url ,trainee, { headers: authHeader() })
    );
}
getTraineeByTid(tid){
    return(
        axios.get(base_url_search+'/'+tid , { headers: authHeader() })
    );
}

// updateTrainee(trainee,tid){
//     console.log("tid=>"+ tid);
//     return(
//     //   axios.put(base_url_edit+'/'+jobId,job)
//     axios.put(`${base_url_edit}/${tid}`, trainee, { headers: authHeader() }) 
//     );
// }
//aprovestatus/{status}/{user_id}
updateTrainee(trainee,status,id){
    console.log("id=>"+ id);
    return(
    //   axios.put(base_url_edit+'/'+jobId,job)
    axios.put(`${base_url_edit_status}/${status}/${id}`,trainee, { headers: authHeader() }) 
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