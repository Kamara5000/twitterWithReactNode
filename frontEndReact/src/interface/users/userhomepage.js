import React, {useState, useEffect} from 'react';
import {useHistory} from  'react-router-dom';
import Navbar from '../navbar';



    
const UserHomePage=(props)=>{
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
                    <div className="col-3 " style={{backgroundColor:'#FFFFFF'}}>
                       <Navbar/>
                       
                       
                    </div>

                    <div className="col-5 bg-success">
                      
                    </div>

                    <div className="col-4 bg-danger">
                      
                    </div>


                </div>
             </div>
        
                
               </React.Fragment>
        )
    }

    
    
    
  
  export default (UserHomePage);
  

    















    

