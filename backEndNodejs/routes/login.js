const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const PassportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const myUser = require('../userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const uri = 'mongodb+srv://first_database:first_database@cluster0.sby1m.mongodb.net/twitter?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true });

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: 2,
//         maxlength:50
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
    
//     dob: {
//         type: Object,
//         required: true,
//     },
    
//     present: {
//         type:Boolean,
//         default: false
//     },
    
// });

// userSchema.plugin(passportLocalMongoose);
// //must be before the model
// const myUser = mongoose.model('user', userSchema);

const secret = process.env.JWT_SECRET;

    
router.use(passport.initialize());
    //must be after the import of expresssession
    router.use(passport.session());
    passport.use(new PassportLocal(myUser.authenticate()));
    passport.serializeUser(myUser.serializeUser());
    passport.deserializeUser(myUser.deserializeUser());

router.post("/", passport.authenticate('local', {failureFlash: true, failureRedirect: '/'}), async(req,res)=>{
    req.flash('error',  'incorrect username or password');
    
    let user = req.body;
    console.log('this is the user');
    console.log(user)
    let Signed = jwt.sign(user, secret, {expiresIn: '86400s'});

    res.json({message: "log in success", token: Signed});
    //res.redirect('/profile');
    
});

module.exports = router;