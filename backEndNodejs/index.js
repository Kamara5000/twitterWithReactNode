const express = require('express');
const app = express();
const path = require('path');
const userLog = require('./routes/login');
const userReg = require('./routes/userReg');
const userProfile = require('./routes/profile');
const MyError = require('./errorFile');
const {storage,cloudinary} = require('./mycloud');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//const bodyparser  = require('body-parser');
app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}))

const expressSession = require('express-session');
app.use(expressSession({secret:'mysecret', resave:false, saveUninitialized:false}));


//flash
const connectFlash = require('connect-flash');
app.use(connectFlash());

//Authentication 
//passport importation

//fileupload
    //we reqiure multer to be able to have file in our request with the urlencoded
    const multer = require('multer');

    const upload = multer({storage:storage});

//socket.io
const http = require('http');
const server = http.createServer(app); 
const socketio = require('socket.io');
const io = socketio(server);   

//connecting to database
const mongoose = require('mongoose');
const uri = 'mongodb+srv://first_database:first_database@cluster0.sby1m.mongodb.net/twitter?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true });

//a schema without any required field
// const userSchema = new mongoose.Schema({
//     name: String,
//     dept: String,
//     age: Number,
// });





app.use('/register', userReg);
app.use('/login', userLog);
app.use('/profile', userProfile);


const methodOverride = require("method-override");
const { Passport } = require('passport');
const { json } = require('express');

app.use(methodOverride("_method"));
//const axios = require('axios');
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

//loading static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
    

  
    app.post('/registerprocess', async(req,res)=>{
        //assuming we collect these info from front end
        let {password, username,name}= req.body;
        
        let regUser = myUser({name, username});
        //note the username will be authomatically created at the database
        //if we are using email instead it will be 
        // let regUser = myUser({name: 'taiwo.com', username: req.body.email});
        //note we just use '1234' as example the second parameter will be the password  the req.body.password
        let createdUser = await myUser.register(regUser,password);
        console.log(createdUser);
        res.send('succesful');
    })

   
// server.listen(5000, ()=>{
//     console.log("runing on port 5000");
// });

app.listen(5000, ()=>{
    console.log("runing on port 5000");
});














// /cookies
// //mypassword will be a secret save in .env file like in jwt
// // const cookieParser = require('cookie-parser');
// // app.use(cookieParser('mypassword'));

// //session

// const expressSession = require('express-session');
// app.use(expressSession({secret:'mysecret', resave:false, saveUninitialized:false}));


// //flash
// const connectFlash = require('connect-flash');
// app.use(connectFlash());

// //Authentication 
// //passport importation
// const passport = require('passport');
// const PassportLocal = require('passport-local');
// const passportLocalMongoose = require('passport-local-mongoose');

// //fileupload
//     //we reqiure multer to be able to have file in our request with the urlencoded
//     const multer = require('multer');

//         //to save our own file locally
//          //const upload = multer({dest: "images"});
//         //dest means the destination we want to send it to, images mean it should save it in images folder or create one if there is none 
//         //to bring in dotenv files
//         // require('dotenv').config();
//         // console.log(process.env.ClOUD_NAME);
//         //console.log(process.env.API_KEY);

//     //to use cloudinary
//     // const cloudinary = require('cloudinary').v2;
//     // const {CloudinaryStorage} = require('multer-storage-cloudinary');
//     // cloudinary.config({
//     //     cloud_name: process.env.CLOUD_NAME,
//     //     api_key: process.env.API_KEY,
//     //     api_secret: process.env.API_SECRET
//     // })
//     // const storage = new CloudinaryStorage({
//     //     cloudinary,
//     //     params:{
//     //         folder: 'uploads/',
//     //         allowedFormats: ['jpeg','PNG', 'JPG','jpg', 'png']
//     //     }
//     // })
//     const upload = multer({storage:storage});

// //socket.io
// const http = require('http');
// const server = http.createServer(app); 
// const socketio = require('socket.io');
// const io = socketio(server);   

// //connecting to database
// const mongoose = require('mongoose');
// const uri = 'mongodb+srv://first_database:first_database@cluster0.sby1m.mongodb.net/postdb?retryWrites=true&w=majority';
// mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true });

// //a schema without any required field
// // const userSchema = new mongoose.Schema({
// //     name: String,
// //     dept: String,
// //     age: Number,
// // });

// //some field is require it wont be succesful until the required field is input 
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength:20
//     },
//     dept: {
//         type: String,
//         default: 'cse'
//     },
//     age: Number,
//     courses: [String],
//     present: {
//         type:Boolean,
//         default: false
//     },
//     training:{
//         //enum is use to make sure only those in the array is choose not any other
//         enum:['software', 'hardware', 'database']
//     }
// });


// app.use('/user', users);
// app.use('/allgoods', allGoods);




// //socket.io

// app.get('/', (req,res)=>{
//     res.send('hi twitter');
    
// })
// app.get('/myform', (req,res)=>{
//     res.render('myform')
// })

// io.on('connection', socket=>{

//     //io.emit= for all connected to server including sender, socket.broadcast for all connected to the server except sender
//     //socket.emit to a particular person on a server
//     socket.emit('anything', 'i am emitting anything');
//     console.log('i am connected to the twitter app');
    
//     socket.on('name', myFirstname=>{
//         //save to database brfore sending to client
//         socket.broadcast.emit('message', myFirstname);
//     })
    
//     socket.on('disconnect', ()=>{
//         console.log('i am disconnected')
//     })
// })








//   const methodOverride = require("method-override");
// const { Passport } = require('passport');
// const { all } = require('./routes/goods');
// app.use(methodOverride("_method"));
// //const axios = require('axios');
// app.set('view engine', 'ejs');

// app.set('views', path.join(__dirname, 'views'));

// //loading static files
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.urlencoded({extended: true}));



// let allposts = [
//     {
//         id:1,
//         title: "first post",
//         body: "i am the first post"
//     },
//     {
//         id:2,
//         title: "second post",
//         body: "i am the second post"
//     },
//     {
//         id:3,
//         title: "second post",
//         body: "i am the third post"
//     }
// ]


    
//     userSchema.plugin(passportLocalMongoose);
//     //must be before the model
//     const myUser = mongoose.model('user', userSchema);

//     app.use(passport.initialize());
//     //must be after the import of expresssession
//     app.use(passport.session());
//     passport.use(new PassportLocal(myUser.authenticate()));
//     passport.serializeUser(myUser.serializeUser());
//     passport.deserializeUser(myUser.deserializeUser());
//     //regisring a new  user
//     app.get('/register', (req,res)=>{
//         res.render('register');
//     })
//     app.post('/registerprocess', async(req,res)=>{
//         //assuming we collect these info from front end
//         let {password, username,name}= req.body;
        
//         let regUser = myUser({name, username});
//         //note the username will be authomatically created at the database
//         //if we are using email instead it will be 
//         // let regUser = myUser({name: 'taiwo.com', username: req.body.email});
//         //note we just use '1234' as example the second parameter will be the password  the req.body.password
//         let createdUser = await myUser.register(regUser,password);
//         console.log(createdUser);
//         res.send('succesful');
//     })

//     //to log in
//     app.get('/login', (req,res)=>{
//         res.render('login')
//     })

    
//     app.post('/loginprocess', passport.authenticate('local', {failureFlash:true, failureRedirect: '/'}),(req,res)=>{
//         req.flash('error',  'incorrect username or password');
//         console.log('hello');
//         res.redirect('/profile');
//     });

//     const verifyLogin = (req,res,next)=>{
//         if (req.isAuthenticated()) {
//             next();
//         }else{
//             res.redirect('/');
//         }
//     }

//     app.get('/dasboard', verifyLogin, (req,res)=>{
//         res.render('dashboard');
//     })
//     app.get('/profile', verifyLogin, (req,res)=>{
//         console.log(req.user);
//         res.render('profile');
//     })

// //logging out
// app.get('/logout', (req,res)=>{
//     req.logout();
//     res.redirect('/');
// })


// //file uploading
// app.get('/upload',(req,res)=>{
//     res.render('upload')
// })

// //img is the name of the file on the form, upload.single is for single file and upload.array is for multiple files


// app.post('/uploadfile',upload.single('img'),(req,res)=>{
//     console.log(req.body);
//     console.log(req.file.path);
//     res.send('sucess');
// })


// server.listen(5000, ()=>{
//     console.log("runing on port 5000");
// });