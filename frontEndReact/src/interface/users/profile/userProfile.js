import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {useHistory } from  'react-router-dom';
import Navbar from '../../navbar';
import ProfileHeader from './profile_header';
import Profile_Body from './profile_body';
import Search from '../others/search';
import Trends from '../others/trends';
import Topics from '../others/topics';
import Follows from '../others/follow';
import Media from '../others/media';
import Footer from '../others/footer';


    
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

console.log(props)

        return(
            <React.Fragment>
            

            <div className="container-fluid"> 
                <div className="row" style={{height:''}}>
                    <div className="col-3 m-0 p-0" style={{backgroundColor:'#FFFFFF'}}>
                      <Navbar/>
                    </div>

                    <div className="col-6 m-0 p-0">
                     <ProfileHeader/>
                     <Profile_Body/>
                   </div>

                    <div className="col-3 m-0 p-0">
                      <Search/>
                      <Media/>
                      <Follows/>
                      <Trends/>
                      <Topics/>
                      <Footer/>
                    </div>


                </div>
            </div>

                
               </React.Fragment>
        )
    }

    
    const mapStateToProps =state=>{
      return({
         user:state.fetchUser
      })
    }
    
    const addFunctionToRedux=dispatch=>{
      return {
        
         // delCart: (i)=>dispatch(mydel(i))
            }
    }
    
    
    export default connect(mapStateToProps, addFunctionToRedux)(UserProfile);
    
  

    















    

