import React, {useState, useEffect} from 'react';
import {useHistory} from  'react-router-dom';



    
const UserHome=(props)=>{
  // let [myProducts, handleMyProducts] = useState([]);

  // let [cart, handleCart]=useState([]);
  // let [total, handleTotal]= useState(0)
  // let [state, setstate] = useState(1)


    



  const history = useHistory();



  const  handleSignUp=()=>{
    history.push('/signup');
    
  }

   const handleLogIn =()=>{

    history.push('/login');
  }

        return(
            <React.Fragment>
             <div className="container-fluid "> 
                <div className="row" style={{height:'550px'}}>
                    <div className="col-6  text-center" style={{backgroundColor:'#1A91DA'}}>
                       
                       <span className="fab fa-twitter " style={{fontSize:'250px',color:'white', marginTop:'150px'}}></span>
                       
                    </div>

                    <div className="col-6">
                      <div style={{marginTop:'70px', marginLeft:'30px'}}>
                          <span className="fab fa-twitter " style={{fontSize:'40px',color:'#1A91DA'}}></span>
                      </div> 
                      <h1 style={{marginTop:'50px', marginLeft:'30px', fontSize:'80px'}} >Happening Now</h1> 
                      <h5 style={{marginTop:'50px', marginLeft:'30px', fontSize:'40px'}}>Join Twitter today.</h5>
                      <button className="btn text-white" style={{backgroundColor:'#1A91DA',marginTop:'20px', marginLeft:'30px', width:'400px', height:'50px', borderRadius:'50px'}} onClick={()=>handleSignUp()} >Sign up</button> 
                      <button className="btn btn-outline-primary text-primary" style={{marginTop:'20px', marginLeft:'30px', width:'400px', height:'50px', borderRadius:'50px', }} onClick={()=>handleLogIn()}>Log in</button> 
                    </div>
                </div>
             </div>
        
                
               </React.Fragment>
        )
    }

    
    
    
  
  export default (UserHome);
  

    















    

