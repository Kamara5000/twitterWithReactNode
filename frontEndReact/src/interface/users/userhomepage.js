import React, {useState, useEffect} from 'react';
import {useHistory} from  'react-router-dom';
import Navbar from '../navbar';
import {user} from '../actions/user';
import {connect} from 'react-redux';
import axios from 'axios';
import ComposeTweet from './tweet/composeTweet';



    
const UserHomePage=(props)=>{
  let [x, setUser] = useState();


  // useEffect(()=>{
    
  //       let details = '';
       
  //          if(localStorage.getItem("onlineUser") === null){
  //           axios.post('http://localhost:5000/profile',JSON.stringify(details),{
  //             headers:{
  //               'authorization': `Bearer ${localStorage.getItem('token')}`
  //             }
  //           }).then(res=>{
  //              console.log(res.data[0]);
  //             localStorage.setItem('onlineUser',JSON.stringify(res.data));
               
  //               setUser(res.data);
  //               props.userOn(res.data[0]);
  //               //console.log(m);

  //               if(res.data.error){
  //                   alert('please login again');
                    
  //               }
        
        
                    
  //           }).catch(err=>{console.log(err)})
  //          }else{
  //           let savedUser = JSON.parse(localStorage.getItem('onlineUser'));
  //           props.userOn(savedUser[0]);
  //          }
   

  // },[])

  //console.log(props.user.name)
const history = useHistory();



  
 const handleLogIn =()=>{

    history.push('/login');
  }

        return(
            <React.Fragment>
             <div className="container-fluid "> 
                <div className="row" style={{height:'550px'}}>
                    <div className="col-3 " style={{backgroundColor:'#FFFFFF'}}>
                       <Navbar/>
                       
                       
                    </div>

                    <div className="col-5">
                      <ComposeTweet/>
                    </div>

                    <div className="col-4 bg-danger">
                      
                    </div>


                </div>
             </div>
        
                
               </React.Fragment>
        )
    }

    
    const mapStateToProps =state=>{
      return({
          //myNum:state.num,
          user: state.fetchUser
      })
  }
  
  const addFunctionToRedux=dispatch=>{
      return {
          userOn: (x)=>dispatch(user(x))
            }
  }
  
  export default connect(mapStateToProps, addFunctionToRedux)(UserHomePage);

    















    

