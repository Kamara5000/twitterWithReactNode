import React, {Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
//import {mycart,mydel} from '../actions/addPro';


const Navbar =(props)=>{


  let [myVal, handleMyval]= useState(props.myGoods)
    useEffect(()=>{
      let x = JSON.parse(localStorage.getItem('cart'))
      handleMyval(x)
      
    },[props.myGoods])


    
    // const change=()=>{
    //     handleMyval(myVal+1)
    // }


  return(
    <React.Fragment>
      
      <nav className="sidenav">
        <div className="card">
          <ul style={{listStyleType:"none", height:"100%"}}>
              <li className="nav-item">
                 <Link className="nav-link"     to="/userhomepage">
                    <i className="fab fa-twitter mb-3 " style={{fontSize:'30px',color:'#1A91DA'}}></i>
                  </Link>
              </li>
              <Link className="nav-link"     to="/userhomepage">
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{borderRadius:"50px", fontSize:"25px", width:"170px", height:"50px"}}>
                       <i className="fas fa-home mb-3 mr-3 " ></i>
                        Home 
                    </button>
                  </Link>
              <li className="nav-item">
                 <Link className="nav-link"    to="/userhomepage"><i className="fas fa-home mr-3 mb-3" style={{fontSize:'30px',color:'#1A91DA'}}></i>Explore</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link"    to="/userhomepage"><i className="fas fa-home mr-3 mb-3" style={{fontSize:'30px',color:'#1A91DA'}}></i>Notificatiom</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link"    to="/userhomepage"><i className="fas fa-home mr-3 mb-3" style={{fontSize:'30px',color:'#1A91DA'}}></i>Messages</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link"    to="/userhomepage"><i className="fas fa-home mr-3 mb-3" style={{fontSize:'30px',color:'#1A91DA'}}></i>Bookmarks</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link"    to="/userhomepage"><i className="fas fa-home mr-3 mb-3" style={{fontSize:'30px',color:'#1A91DA'}}></i>List</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link"    to="/profile"><i className="fas fa-home mr-3 mb-3" style={{fontSize:'30px',color:'#1A91DA'}}></i>Profile</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link"    to="/userhomepage"><i className="fas fa-home mr-3 mb-3" style={{fontSize:'30px',color:'#1A91DA'}}></i>More</Link>
              </li>

              
              


              
              
              
            </ul>
        </div>    
      </nav>
      
            
    </React.Fragment>
);


}


const mapStateToProps =state=>{
  return({
      myNum:state.num,
      myGoods: state.addToCart
  })
}

const addFunctionToRedux=dispatch=>{
  return {
     //mySub: (price)=>dispatch(sub(price)),
   //  myAddition: ()=>dispatch(add(1)),
     //myMul: ()=>dispatch(multi()),
     // delCart: (i)=>dispatch(mydel(i))
        }
}


export default connect(mapStateToProps, addFunctionToRedux)(Navbar);
