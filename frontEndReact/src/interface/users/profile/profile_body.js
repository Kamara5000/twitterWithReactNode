import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {Link} from "react-router-dom";
import Tweets from '../tweet/tweets';




    
const Profile_Body=(props)=>{
 
  let [allUsers, handleAllusers]= useState([])
  let [state, setstate] = useState(1)

  //let isMounted = false;

    
const history = useHistory();




        return(
            <React.Fragment>
            
               
              <div className='container-fluid'>
                  <div className='row'>
                      <div className="col-12  " style={{backgroundColor:'#FFFFFF'}}>
                            <div className='card' style={{borderRadius:'0px', borderTop:'0'}}>
                            <ul className="nav nav-tabs" style={{borderStyle:'none'}}>
                                <li className="active nav-item mb-0  ml-4 "><a data-toggle="tab"  href="#tweets">
                                  <button className='btn btn-lg   btn-basic hover-item'>Tweets</button></a>
                                </li>
                               <li className="active nav-item mb-0 ml-4 "><a data-toggle="tab" href="#tweetsReplies">
                                  <button className='btn btn-lg   btn-basic hover-item'>Tweets & replies</button></a>
                               </li>
                               <li className="active nav-item mb-0 ml-4 "><a data-toggle="tab" href="#media">
                                    <button className='btn btn-lg   btn-basic hover-item'>Media</button></a>
                                </li>
                               <li className="active nav-item mb-0 ml-4"><a data-toggle="tab" href="#likes">
                                    <button className='btn btn-lg   btn-basic hover-item'>Likes</button></a>
                               </li>
                            </ul>
                            </div>

                             <div className="tab-content">
                                <div id="tweets" className="tab-pane active ">
                          
                                 <Tweets/>
                                  </div>
                                <div id="tweetsReplies" className="tab-pane fade">
                                    <Tweets/>
                                </div>
                               <div id="media" className="tab-pane fade">
                                    <Tweets/>
                               </div>
                                <div id="likes" className="tab-pane fade">
                                <Tweets/>
                               </div>
                              </div>



                                               

                       </div>
                    </div>
              </div>
                    
                    


             
            
            </React.Fragment>
        )
    }

    
    
    
  
  export default (Profile_Body);
  

    















    

