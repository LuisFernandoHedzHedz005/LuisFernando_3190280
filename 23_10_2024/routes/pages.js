const express = require("express");
const path = require("path");

const router = express.Router();

router.get('/pages1', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/pages1.html'))
});

router.get('/pages2', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/pages2.html'))
});

router.get('/pages3', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/pages3.html'))
});


module.exports = router;
