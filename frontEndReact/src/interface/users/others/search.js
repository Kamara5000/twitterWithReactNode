import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {connect} from 'react-redux';





    
const Search=(props)=>{
 
  let [header_pic, handleHeader_Pic] = useState();
  let [profile_pic, handleProfilePic] = useState();


  //let isMounted = false;

    
const history = useHistory();

let {name, username}=props.user;




        return(
            <React.Fragment>
            <div className="container-fluid">
                
                <div className='row' >
                    <div className='col-12 fixed-top' style={{position:'sticky'}} >
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </div>      
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
      
      
      export default connect(mapStateToProps, addFunctionToRedux)(Search);
      















    

