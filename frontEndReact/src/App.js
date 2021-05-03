import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./interface/about";
import Notexist from "./interface/notexist";
import Navbar from "./interface/navbar";


import UserHome from './interface/users/userHome';

import UserReg from './interface/users/userReg';
import UserCart from './interface/users/userCart';
import UserCheckOut from './interface/users/userCheckOut';
import UserLog from './interface/users/userLog';
import UserProfile from './interface/users/userProfile';
import UserHomePage from './interface/users/userhomepage';


//import SecondReduxFunction from './interface/secondReduxFunction'
//import MyFunctionalComponent from './interface/myFunctionalComponent';


class App extends Component {

  


    render(){

     
      return (
        
        <div>     
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={UserHome}/>
        
        <Route path="/First" component={UserHome} />
       
        <Route path="/signup" component={UserReg} />
        <Route path="/UserCart" component={UserCart} />
        <Route path="/UserCheckout" component={UserCheckOut} />
        <Route path="/login" component={UserLog} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/reduxFunction" component={UserHome} />
        <Route path="/userhomepage" component={UserHomePage}/>
       
        
        
        <Route  component={Notexist}/>
        </Switch>
        </BrowserRouter>
       </div>
      );



    }

}

export default App;

