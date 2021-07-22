
 

const fetchUser = (state=[], action)=>{
    
    if(action.type==="USER"){
        
            
        // console.log(action.payload)
       
           return action.payload;   
        
    }


    else{
        return state;
    }



}

export default fetchUser;