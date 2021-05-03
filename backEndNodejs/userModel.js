const mongoose = require('mongoose');
const passport = require('passport');
const PassportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength:50
    },
    phone: {
        type: String,
        required: true,
    },
    
    dob: {
        type: Object,
        required: true,
    },
    
    present: {
        type:Boolean,
        default: false
    },
    
});

userSchema.plugin(passportLocalMongoose);
//it must be before the model

module.exports = mongoose.model('user',userSchema);