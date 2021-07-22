import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {Link} from "react-router-dom";
import TweetActions from './tweetActions';



    
const User_Tweets=(props)=>{
 
  let [allUserTweet, handleAlluserTweet]= useState([{username:'pepper_MI',name:'Mariam', tweet:
  '#bitcoin You don’t have to defend everything. Sometimes just allow the leader take responsibility for their shortcomings and hopefully they’d do things better in the future. Defending the indefensible is moronic. Just look away and ignore. It’s not you who loves this country the most.',
   likes:3, retweet:98,date:'may 25',reply:[{username:'kamara_MI',name:'MOH', tweet:'bitcoin', likes:3, retweet:98}]},
   {username:'kamara_MI',name:'MOH', tweet:
   'You don’t have to defend everything. Sometimes just allow the leader take responsibility for their shortcomings and hopefully they’d do things better in the future. Defending the indefensible is moronic. Just look away and ignore. It’s not you who loves this country the most.',
    likes:3, retweet:98,date:'November 31',reply:[{username:'kamara_MI',name:'MOH', tweet:'hello', likes:3, retweet:98}]},
    {username:'kamara_MI',name:'MOH', tweet:
   'You don’t have to defend everything. Sometimes just allow the leader take responsibility for their shortcomings and hopefully they’d do things better in the future. Defending the indefensible is moronic. Just look away and ignore. It’s not you who loves this country the most.',
    likes:3, retweet:98,date:'November 31',reply:[{username:'kamara_MI',name:'MOH', tweet:'hello', likes:3, retweet:98}]}])
  let [state, setstate] = useState(1)

  //let isMounted = false;

    
const history = useHistory();




        return(
            <React.Fragment>
            
               
              <div className='container'>
                  {allUserTweet.map((tweet,i)=>(
                    <div key={i}>
                            <div className="row " style={{maxWidth:''}}>
                                

                                <div className='col-12 card ' style={{borderRadius:'0px', width:'', borderTop:'0px', display:'flex', flexDirection:'row', padding:'12px',}}>
                                    
                                        <button className="btn    btn-basic" style={{height:'50px', width:'50px', fontSize:'20px', position:'relative', borderRadius:'25px', borderStyle:'solid', borderColor:'dark', backgroundColor:'#1E1E1E'  }}>
                                            <img src={``}/>
                                        </button>
                                    
                                    <div className= '' style={{marginLeft:'12px', width:'500px', display:'flex', flexDirection:'column'}}>
                                            
                                                <div style={{display:'flex', flexDirection:'row' , width:'500px'}}>
                                                    <div style={{ width:'80%', backgroundColor:''}}>
                                                         {tweet.name}
                                                        
                                                         

                                                                <span style={{ width:'', backgroundColor:''}} className='text-muted ml-2'  >
                                                                @{tweet.username}.
                                                            </span>
                                                    
                                                            <span className='text-muted ml-1' style={{width:'', backgroundColor:''}}>
                                                            {tweet.date}
                                                             </span> 
                                                    
                                                             
                                                    </div>
                                                    

                                                    <div className='text-muted' style={{width:'20%',display:'flex', justifyContent:'flex-end'}}>
                                                        
                                                        <span className='fa fa-ellipsis-h'>
                                                               
                                                        </span> 
                                                    </div>    
                                                </div>
                                                

                                               <div style={{}}>
                                                   {tweet.tweet}
                                               </div> 

                                               <div>
                                                   <TweetActions/>
                                               </div>
                                            

                                         
                                    </div> 
                                </div>  
                            </div>
                    </div>
                    
                    ))}
              </div>
                    
                    


             
            
            </React.Fragment>
        )
    }

    
    
    
  
  export default (User_Tweets);
  

    















    

