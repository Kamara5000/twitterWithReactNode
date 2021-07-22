import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {connect} from 'react-redux';





    
const Follow=(props)=>{
 
  let [header_pic, handleHeader_Pic] = useState();
  let [profile_pic, handleProfilePic] = useState();


  //let isMounted = false;

    
const history = useHistory();

let {name, username}=props.user;




        return(
            <React.Fragment>
            <div className="container-fluid">
            

                    <div className='col-12 mt-3' style={{}}>
                         <div className="card mb-3" style={{maxWidth: '18rem',backgroundColor:'#F7F9F9', borderRadius:'20px'}}>
                                <div className="card-header bg-transparent">You Might Like</div>
                                
                                <ul className="list-group list-group-flush ">
                                    <li className="list-group-item bg-transparent">who to follow</li>
                                    <li className="list-group-item bg-transparent">who to follow</li>
                                    <li className="list-group-item bg-transparent">who to follow</li>
                                </ul>
                                
                                <div className="card-footer bg-transparent ">Show  more</div>
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
      
      
      export default connect(mapStateToProps, addFunctionToRedux)(Follow);
      















    

