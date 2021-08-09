import React from 'react';
import { useState } from 'react';
import ModeratorJava from './ModeratorJava';
// import Counter from './Counter';

//**FUNCTION COMPONANT**

let Moderator = () => {
    const [modList, setModList] = useState([]); // from axios
    
    return (
        <div>
            <h1 >Employee Component</h1>
           
            <ModeratorJava
                modList={modList}
                //parentEmpHike={parentEmpHike}
                // parentCallback={handleCallback}
            ></ModeratorJava>
            {/* <Counter></Counter> */}
        </div>
    )
}
export default Moderator;
















// import React from 'react';
// import { useState, useEffect } from 'react';
// import ModeratorJava from './ModeratorJava';
// // import Counter from './Counter';

// //**FUNCTION COMPONANT**

// let Moderator = () => {
//     const [mod, setMod] = useState('');
//     const [parentMod, setParentMod] = useState({}); // parent state  
//     const [parentModHike, setParentModHke] = useState(0); // parent state  
//     // const [childEmp, setChildEmp] = useState({}); // from callback    

//     useEffect(() => {

//         setParentMod({
//             mid: 201,
//             mname: 'Monu',
//             memail: 'monu@gmail.com'
//         }
//         );

//         setParentModHke(10);
//     }, []);

//     // const handleCallback = (childEmpData) => {
//     //     setChildEmp(childEmpData);
//     //     console.log(childEmpData);
//     // }

//     return (
//         <div>
//             <h1 >Moderator Component</h1>
//             <p> parent {parentMod.mname}</p>
//             <p> parent {parentModHike}</p>
//             {/* <JavaData></JavaData> */}
//             {/* <p>parent {childEmp.name}</p> */}
//             <ModeratorJava
//                 parentMod={parentMod}
//                 parentModHike={parentModHike}
//                 // parentCallback={handleCallback}
//             ></ModeratorJava>
//             {/* <Counter></Counter> */}
//         </div>
//     )
// }
// export default Moderator;