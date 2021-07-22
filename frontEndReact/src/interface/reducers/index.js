import {combineReducers} from "redux";
import myNum from "./num"
import allGoods from "./allgoods";
import fetchUser from "./fetchUser";
import addToCart from './addToCart'

const allReducers = combineReducers({
    num:myNum, allGoods, fetchUser,addToCart
})

export default allReducers;