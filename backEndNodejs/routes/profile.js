
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const myUser = require('../userModel');
const {myJwtMdw} = require('../myJWT');

const uri = 'mongodb+srv://first_database:first_database@cluster0.sby1m.mongodb.net/twitter?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true });


router.get('/', myJwtMdw, async(req, resp)=>{
    myUser.find({}).then(res=>{
        console.log(res);
        resp.json(res);
    });
   
    //res.json({message: "these are your profile"});
})



module.exports = router;

