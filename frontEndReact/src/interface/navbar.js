import React, {Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {user} from './actions/user';
import axios from 'axios';
//import {mycart,mydel} from '../actions/addPro';


const Navbar =(props)=>{


  let [myVal, handleMyval]= useState()
   
  useEffect(()=>{
    
    let details = '';
   
       if(localStorage.getItem("onlineUser") === null){
        axios.post('http://localhost:5000/profile',JSON.stringify(details),{
          headers:{
            'authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(res=>{
           console.log(res.data[0]);
          localStorage.setItem('onlineUser',JSON.stringify(res.data));
           
            //setUser(res.data);
            props.userOn(res.data[0]);
            //console.log(m);

            if(res.data.error){
                alert('please login again');
                
            }
    
    
                
        }).catch(err=>{console.log(err)})
       }else{
        let savedUser = JSON.parse(localStorage.getItem('onlineUser'));
        props.userOn(savedUser[0]);
       }


},[])

    let [pro_pic, hanldePro_Pic] = useState(false);

    let {username,name}=props.user;
    
    // const change=()=>{
    //     handleMyval(myVal+1)
    // }
    //console.log( props)

  return(
    <React.Fragment>
      
      <div className="side-nav" style={{position:'fixed'}}>
        <div className="">
          <ul style={{listStyleType:"none"}}>
              <li className="nav-item">
                 <Link className="nav-link"     to="/userhomepage">
                    <i className="fab fa-twitter " style={{fontSize:'30px',color:'#1A91DA'}}></i>
                  </Link>
              </li>
              <li>
                <Link className="nav-link"     to="/userhomepage" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="fas fa-home mr-4 " ></i>
                        Home 
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link"     to="/userhomepage" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="fas fa-hashtag mr-4 " ></i>
                        Explore 
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link"     to="/userhomepage" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="far fa-bell mr-4 " ></i>
                        Notifications 
                    </button>
                  </Link>
                </li>

                <li>  
                  <Link className="nav-link"     to="/userhomepage" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="far fa-envelope mr-4 " ></i>
                        Messages 
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link"     to="/userhomepage" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="far fa-bookmark mr-4 " ></i>
                        Bookmarks 
                    </button>
                  </Link>
                </li>
                <li>
                   <Link className="nav-link"     to="/userhomepage" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="far fa-file-alt mr-4 " ></i>
                        Lists 
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link"     to="/profile" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="far fa-user mr-4 " ></i>
                        Profile 
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link"     to="/userhomepage" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="fas fa-ellipsis-h mr-4 " ></i>
                        More 
                    </button>
                  </Link>
                </li>
                <li>
                <button type="button" className="btn btn-sm  mt-2  text-white hover-item" style={{borderRadius:"50px", fontSize:"23px",  width:'80%', backgroundColor:'#1A91DA'}}>
                    Tweet
                </button>
                </li>

                <li>
                  {pro_pic?<button type="button" className="btn    text-white hover-item" style={{height:'50px', width:'40px', fontSize:'20px', position:'relative', borderRadius:'20px',}}>
                    {/* <img style={{maxWidth: 18+'rem', height: 18+'rem'}}src={`http://localhost/react/optimobackend/uploads/${product.product_image_name}`} className="card-img-top" alt={product.product_name} /> */}
                    </button>:
                     <button type="button" className="btn    btn-basic hover-item" style={{borderRadius:"30px",
                    
                      marginTop:'40px', fontWeight:'400px',
                      alignItems:'stretch',
                      boxSizing:'border-box',
                      display: 'flex',
                      position:'relative',
                      alignItems:'center',
                      padding:'12px',
                      flexDirection: 'row',
                      fontFamily:'15px',
                      height: '65px'
                          
                      
                       }}>
                      

                        
                           <div style={{height:'40px', width:'40px', fontSize:'20px', position:'relative', borderRadius:'20px', borderStyle:'solid', borderColor:'dark',  }}> 
                              <i className="fa fa-camera  "></i>
                           </div> 
                           
                           <div style={{display:'flex',maxWidth:'100%',flexDirection:'column',flexShrink:'1',position:'relative',
                            fontFamily: "'appleSystem', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
                            padding:'15px',textOverflow: 'ellipsis',alignItems:'start'
                            }}>
                            
                                <h5 style={{lineHeight:'20px',  padding:'0',margin:'0'}}>{name}</h5>
                                <h5 className='text-muted' style={{lineHeight:'20px'}}>@{username}</h5> 
                          
                              
                        </div>
                        <i className="fa fa-ellipsis-h ml-4 "></i>
                  </button>
                  }
                </li>

            

              
              


              
              
              
            </ul>
        </div>    
      </div>
      
            
    </React.Fragment>
);


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

export default connect(mapStateToProps, addFunctionToRedux)(Navbar);
