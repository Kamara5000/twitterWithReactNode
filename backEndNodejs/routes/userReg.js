
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const PassportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const myUser = require('../userModel')

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

// // userSchema.plugin(passportLocalMongoose);
// //must be before the model
// const myUser = mongoose.model('user', userSchema);
    
router.use(passport.initialize());
    //must be after the import of expresssession
    router.use(passport.session());
    passport.use(new PassportLocal(myUser.authenticate()));
    passport.serializeUser(myUser.serializeUser());
    passport.deserializeUser(myUser.deserializeUser());

router.post("/", async(req,res)=>{
    let {name, fone, year, day, month, password, username} = req.body;
    console.log(name, fone, year, day, month);
    bDay={day:day, month:month, year:year}

    let regUser = myUser({name:name, phone:fone, dob:bDay, username:username})
    let createdUser = await myUser.register(regUser,password);
    console.log(createdUser);

    res.json({message: "success"});
    
});

module.exports = router;