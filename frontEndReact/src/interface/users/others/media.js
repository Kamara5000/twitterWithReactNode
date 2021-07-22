import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {connect} from 'react-redux';





    
const Media=(props)=>{
 
  let [header_pic, handleHeader_Pic] = useState();
  let [profile_pic, handleProfilePic] = useState();


  //let isMounted = false;

    
const history = useHistory();

let {name, username}=props.user;




        return(
            <React.Fragment>
            <div className="container-fluid">
            

                <div className='col-12'>
                        <div className="card-group" style={{borderRadius:'30px'}} >
                            <div className="col-6 col-sm-6 m-0 p-0">
                                <div className="card " style={{height:'120px',borderRadius:'0px', borderTopLeftRadius:'30px'}}>
                                    <div className="card-body">
                                   map all media pictures or videos here
                                    </div>
                                
                                </div>
                                <div className="card" style={{height:'120px',borderRadius:'0px', borderBottomLeftRadius:'30px'}}>
                                    <div className="card-body">
                                   map all media pictures or videos here
                                    </div>
                                
                                </div>

                            </div>
                            <div className="col-6 col-sm-6 m-0 p-0 " style={{}}>
                            <div className="card " style={{height:'120px', borderRadius:'0px', borderTopRightRadius:'30px'}}>
                                    <div className="card-body">
                                   map all media pictures or videos here
                                    </div>
                                
                                </div>
                                <div className="card" style={{height:'120px', borderRadius:'0px', borderBottomRightRadius:'30px'}}>
                                    <div className="card-body">
                                   map all media pictures or videos here
                                    </div>
                                
                                </div>

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
      
      
      export default connect(mapStateToProps, addFunctionToRedux)(Media);
      















    

