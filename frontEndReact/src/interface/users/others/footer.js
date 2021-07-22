import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {connect} from 'react-redux';





    
const Footer=(props)=>{
 
  let [header_pic, handleHeader_Pic] = useState();
  let [profile_pic, handleProfilePic] = useState();


  //let isMounted = false;

    
const history = useHistory();

let {name, username}=props.user;




        return(
            <React.Fragment>
            <div className="container-fluid">
            

                    <div className='col-12 mt-2 small '>
                         <p><a className=" text-muted" href="">Terms of service</a> 
                         <a  className="text-muted ml-2 " href="">Privacy Policy</a> 
                         <a className="text-muted ml-2" href="">Cookie Policy</a>
                         <a className="text-muted ml-2" href="">Ads info</a> 
                         <a className="text-muted ml-2" href="">More...</a>
                          <span className="text-muted m-2">2021 Twitter, Inc.</span>
                         </p>
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
      
      
      export default connect(mapStateToProps, addFunctionToRedux)(Footer);
      















    

