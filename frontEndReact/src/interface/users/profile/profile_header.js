import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {connect} from 'react-redux';
import Profile_Body from './profile_body';





    
const Profile_Header=(props)=>{
 
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
                      <div className='card' style={{borderBottom:'0px',borderRadius:'0px'}}>
                        <div className='' style={{height:'40px', marginLeft:'10px', marginTop:'10px',  display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <div> <button className='btn btn-basic hover-item ' style={{borderRadius:'20px', color:'#1DA1F2'}}>
                                    <i className='fa fa-arrow-left'></i>
                                    </button>
                            </div>
                   
                            <div style={{margin:'15px'}}>
                                <h5 style={{lineHeight:'20px',  padding:'0',margin:'0'}}>{name}</h5>
                                <h5 style={{lineHeight:'20px', fontSize:'15px'}} className='text-muted'>5000 tweets</h5>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-12 '>
                      <div className='card' style={{ height:'200px', borderBottom:'0px',borderRadius:'0px', backgroundColor:'#435476'}}>
                          
                             {header_pic?
                            <img style={{maxWidth: 18+'rem', height: 18+'rem'}}src={`http://localhost/react/optimobackend/uploads/${header_pic}`} className="card-img-top" alt={'picture'} />
                           
                            :
                          <div>

                          </div>
                           
                          }
                      </div>
                    </div>


                    <div className='col-12 '>
                        <div className='card' style={{borderBottom:'0px',borderRadius:'0px'}}> 
                            <div style={{marginTop:'-70px', marginLeft:'10px'}}>
                                 {profile_pic?
                                 <button className='btn' style={{height:'140px', width:'140px', borderRadius:'70px',}}  >
                                   
                                        <img src={`http://localhost/react/optimobackend/uploads/${profile_pic}`} className="card-img-top" alt={'profile picture'} />
                                  
                                </button>
                                :
                                <button className='btn' style={{height:'140px', width:'140px', backgroundColor:'#939FA8', borderRadius:'70px',  borderColor:'#1E1E1E',  borderStyle:'solid'}}>                        
                                <i className='fa fa-camera fa-3x' ></i>
                                 </button>

                            
                            }
                            </div>

                           <div style={{ marginLeft:'460px',marginTop:'-60px'}}>
                           <button className='btn btn-outline-primary hover-item' style={{ width:'120px', borderRadius:'20px'}}>Edit profile</button>
                           </div>
                            
                            <div style={{marginTop:'30px', marginLeft:'10px',display:'flex', flexDirection:'column'}}>
                                <h5 style={{lineHeight:'20px',  padding:'0',margin:'0'}}>{name}</h5>
                                <h5 className='text-muted' style={{lineHeight:'20px'}}>@{username}</h5> 
                            
                                 <p>Bio</p>
                            </div>
                            
                            
                            <div style={{marginLeft:'10px',display:'flex', flexDirection:'row'}}>
                                <p className='mr-4 text-muted'><i className='fa fa-map-marker-alt mr-2'></i>location</p>
                                <p className='mr-4 text-muted'><i className='fa fa-birthday-cake mr-2'></i>birth date</p>
                                <p className='mr-4 text-muted'><i className='fa fa-calendar-alt mr-2'></i>joined</p>
                            </div>

                            <div style={{marginLeft:'10px',display:'flex', flexDirection:'row'}}>
                                <p className='mr-4 text-muted'> 1234 following</p>
                                <p className='mr-4 text-muted'> 67892 followers</p>
                               
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
      
      
      export default connect(mapStateToProps, addFunctionToRedux)(Profile_Header);
      















    

