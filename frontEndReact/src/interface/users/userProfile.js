import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import Navbar from '../navbar';



    
const UserProfile=(props)=>{
 
  let [allUsers, handleAllusers]= useState([])
  let [state, setstate] = useState(1)

  //let isMounted = false;

    
const history = useHistory();



//   const  handleSignUp=()=>{
//     history.push('/signup');
    
//   }

// useEffect(()=>{
//     let isMounted = true;
//     axios.get('http://localhost:5000/profile',{
//       headers:{
//         'authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     }).then(res=>{
//         console.log(res);
       
//         if(res.data.error){
//             alert('please login again');
//             history.push('/login')
//         }


//         if (isMounted){handleAllusers(res.data);}
            
//     }).catch(err=>{console.log(err)})
//     return () => { isMounted = false };
// }, []

// )
// console.log(allUsers);

        return(
            <React.Fragment>
             {/* {allUsers.map((user,i)=>(
            <div key={i}>
            <div className="card mb-3" style={{maxWidth: 540+'px'}}>
            <div className="row no-gutters">
            <div className="col-md-4">
            <img src={`http://localhost/react/optimobackend/uploads`} className="card-img" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title  ">{user.name}</h5>
            <p className="card-text"><span style={{fontWeight:"bolder"}} >{user.phone}</span>: 1</p>
           
        </div>

     </div>
    </div>
</div>
   </div>
))} */}

<div className="container-fluid "> 
                <div className="row" style={{height:'550px'}}>
                    <div className="col-3 " style={{backgroundColor:'#FFFFFF'}}>
                       <Navbar/>
                       
                       
                    </div>

                    <div className="col-5 bg-success">
                      profile
                    </div>

                    <div className="col-4 bg-danger">
                      profile
                    </div>


                </div>
             </div>

                
               </React.Fragment>
        )
    }

    
    
    
  
  export default (UserProfile);
  

    















    

