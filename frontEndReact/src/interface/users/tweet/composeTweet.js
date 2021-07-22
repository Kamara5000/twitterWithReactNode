import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from  'react-router-dom';
import {connect} from 'react-redux';





    
const ComposeTweet=(props)=>{
 
  let [header_pic, handleHeader_Pic] = useState();
  let [profile_pic, handleProfilePic] = useState();

  
 let wrapper = document.querySelector(".wrapper");
let editableInput = document.querySelector(".editable");
let readonlyInput = document.querySelector(".readonly");
let placeholder = document.querySelector(".placeholder");
let counter = document.querySelector(".counter");
let button = document.querySelector(".button");

const focus = ()=>{
  placeholder.style.color = "#c5ccd3";
}

const blur = ()=>{
  placeholder.style.color = "#98a5b1";
}

const keyUp = (e)=>{
  let element = e.target;
  validated(element);
}
const keyPress = (e)=>{
  let element = e.target;
  validated(element);
  placeholder.style.display = "none";
}

const validated=(element)=>{
  let text;
  let maxLength = 100;
  let currentlength = element.innerText.length;

  if(currentlength <= 0){
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  }else{
    placeholder.style.display = "none";
    counter.style.display = "block";
    button.classList.add("active");
  }

  counter.innerText = maxLength - currentlength;

  if(currentlength > maxLength){
    let overText = element.innerText.substr(maxLength); //extracting over texts
    overText = `<span className="highlight">${overText}</span>`; //creating new span and passing over texts
    text = element.innerText.substr(0, maxLength) + overText; //passing overText value in textTag variable
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    button.classList.remove("active");
  }else{
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#333";
  }
  readonlyInput.innerHTML = text; //replacing innerHTML of readonly div with textTag value
}

  //let isMounted = false;

    
//const ComposeTweet = useHistory();

let {name, username}=props.user;




return(
<React.Fragment>
<div className="container-fluid">
    <div className='col-12 card' style={{borderRadius:'0px', width:'', borderTop:'0px', display:'flex', flexDirection:'row', padding:'12px',}}>
                                    
    <button className="btn    btn-basic" style={{height:'50px', width:'50px', fontSize:'20px', position:'relative', borderRadius:'25px', borderStyle:'solid', borderColor:'dark', backgroundColor:'#1E1E1E'  }}>
      <img src={``}/>
    </button>
<div className= '' style={{marginLeft:'15px', width:'500px', display:'flex', flexDirection:'column'}}>
 <div className="wrapper" id="wrapper">
    <div className="input-box">
      <div className="tweet-area">
        <span className="placeholder">What's happening?</span>
        <div className="input editable" onKeyPress={()=>keyPress()} onKeyUp={()=>keyUp()} onBlur={()=>blur()} onFocus={()=>focus()} contenteditable="true" spellcheck="false"></div>
        <div className="input readonly" contenteditable="true" spellcheck="false"></div>
      </div>
      <div className="privacy">
        <i className="fas fa-globe-asia"></i>
        <span>Everyone can reply</span>
      </div>
    </div>
    <div className="bottom">
      <ul className="icons">
        <li><i className="uil uil-capture"></i></li>
        <li><i className="far fa-file-image"></i></li>
        <li><i className="fas fa-poll-h"></i></li>
        <li><i className="fas fa-map-marker-alt"></i></li>
        <li><i className="far fa-grin"></i></li>
        <li><i className="far fa-user"></i></li>
        <li><i className="fas fa-schedule"></i></li>
      </ul>
      <div className="content">
        <span className="counter">100</span>
        <button>Tweet</button>
      </div>
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
      
      
      export default connect(mapStateToProps, addFunctionToRedux)(ComposeTweet);
      















    

