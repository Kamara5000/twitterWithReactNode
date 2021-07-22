import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {Link} from "react-router-dom";




    
const TweetActions=(props)=>{
 
    
const history = useHistory();




        return(
            <React.Fragment>
                <div style={{marginTop:'10px', width:'80%', display: 'flex', justifyContent: 'space-between'}}>
                   <span className='far fa-comment'>

                   </span>

                   <span className='fas fa-retweet'>

                   </span>
                   <span className='far fa-heart'>

                   </span>
                   <span className='fas fa-upload'>

                   </span>
                </div>
               
              
                    


             
            
            </React.Fragment>
        )
    }

    
    
    
  
  export default (TweetActions);
  

    















    

