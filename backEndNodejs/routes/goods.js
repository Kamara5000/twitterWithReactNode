const express = require('express');
const router = express.Router();
router.use((req,res,next)=>{
    let name = req.query.name;
    if(name == "Taiwo"){
        next();
    }else{
        res.send('you cannot visit this page');
    }
})

router.get("/", (req,res)=>{
    res.send('welcome to goods page')
});

router.post("/", (req,res)=>{
    
});

router.patch("/:id/edit", (req,res)=>{
    
});



router.get("/newpage", (req,res)=>{
    res.send('this is the new page');
});


module.exports = router;