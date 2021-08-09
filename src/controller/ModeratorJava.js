import axios from "axios";
import { useState } from 'react';
//import AuthService from "../services/auth.service";

let ModeratorJava = (props) => {
    const [modList, setModList] = useState([]); // from axios
    //const API_URL = "http://localhost:8082/";

    
    const getallmoderator = (e) => {
        console.log();
        axios.get(`/getallmoderator`)
            .then((response) => {
                setModList(response.data);
            }).catch(error => {
                console.log(error.message)
            });
    }
    return (
        <div>
            <p>ModeratorJava Component</p>
                       <div>
                    <p>Get all Moderator data </p>
                    <button type="submit" className="btn btn-primary" onClick={getallmoderator}>Get All Moderator</button>
                    <p>All Moderator Data</p>
                    <div> {modList.map(m => <p> {m.id}, {m.name} {m.email} </p>)} </div>
            </div>

        </div>
       
    )
}
export default ModeratorJava;
















// import axios from "axios";
// import { useState, useEffect } from 'react';

// let ModeratorJava = (props) => {
//     const [modList, setModList] = useState([]); // from axios
//     const [parentMod, setParentMod] = useState({}); // from props  
//     const [parentModHike, setParentModHike] = useState(0); // from props 
//     const [childMod, setChildMod] = useState({}); // child state   
//     const [mod, setMod] = useState({}); // from axios 

//     // initilize states to prevent undefined error, in case used these fields anywhere else in future 
//     useEffect(() => {
//         setParentMod(props.parentMod); // 4
//         setParentModHike(props.parentModHike);
//         setChildMod({
//             mid: 301,
//             mname: 'Tonu',
//             memail: 'tonu@gmail.com'
//         }
//         );
//         setMod({
//             mid: 0,
//             mname: '',
//             memail: ''
//         }
//         );

//     }, []);

//     const onTrigger = () => {
//         props.parentCallback(child/mod);
//     };

//     const handleEmployee = (event) => {
//         console.log(mod.mid);
//         setMod({
//             ...emp,
//             [event.target.name]: event.target.value
//         });
//     };

//     const getallmoderator = (e) => {
//         console.log();
//         axios.get(`/getallmoderator`)
//             .then((response) => {
//                 setModList(response.data);
//             }).catch(error => {
//                 console.log(error.message)
//             });
//     }

//     return (
//         <div>
//             <p>ModeratorJava Component</p>
//             <p>axios {mod.mname}</p>
//             <p>child {parentMod.mname}</p>
//             <p> child {parentModHike} </p>
//             <button onClick={onTrigger}>Pass child emp to parent</button>
//             <div>
//                     <p>Get all Moderator data </p>
//                     <button type="submit" className="btn btn-primary" onClick={getallmoderator}>Get All Moderator</button>
//                     <p>All Moderator Data</p>
//                     <div> {modList.map(e => <p> {e.mid}, {e.mname} {e.memail} </p>)} </div>
//             </div>

//         </div>
       
//     )
// }
// export default ModeratorJava;