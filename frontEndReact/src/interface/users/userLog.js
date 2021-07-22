import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UserLog=(props)=>{
    
    let [user, changeUser] = useState('');
    let [pass, changePass] = useState('');
   
    useEffect(()=>{
        console.log("hello");
    }, []

    )


    

    const handleSet=(event)=>{
        let username = event.target.name==="username";
        let password = event.target.name==="password";
        if (password) {
             changePass(event.target.value);
           // handleProduct({...pro,price:x})
          //console.log(pass)  
        }

        else if (username) {
             changeUser(event.target.value);
           // handleProduct({...pro,noAv:k})
            //console.log(k)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        
            const m = {
              username: user,
              password: pass
        };
            console.log(m)
        axios.post('http://localhost:5000/login',m)
        .then(response=>{//console.log(response.data);
            let {token, message} = response.data;
            console.log(message, token);
            localStorage.setItem('token', token); 
            props.history.push('/userhomepage');
            //handleCheck(response.data);
             //handleMyLog(response.data);
             //handleCheck(response.data);

        }
            
    )
        .catch(err=>console.log(err));
    }

    // const handleCheck=(log)=>{
    //         console.log('this is mylog')
    //       console.log(log);

    //       console.log(log[1]);
          

    //        if (log[1].success) {
    //            alert(log[1].message);
    //            localStorage.setItem("userLog",JSON.stringify(true));
    //            localStorage.setItem('user',JSON.stringify(log[0]));
    //            props.history.push('/UserCheckOut');
           
    //         }else if(!log.success){
    //             alert(log.message)
    //         }
               

    // }

    
   // console.log(props)
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-4 mx-auto">
                     <div className="card-body">
                        <h5 className="card-title">Sign IN</h5>
                         <input type="text" className="form-control m-2" name="username" onChange={handleSet}  placeholder="Enter Username" />
                        <input type="password" className="form-control m-2 " name="password" onChange={handleSet} placeholder="Enter password" />
                        <button className="btn btn-primary m-2" onClick={handleSubmit} >Sign IN</button> 
                    </div>
                </div>
            </div>
      
        </React.Fragment>
    )
}
export default UserLog;