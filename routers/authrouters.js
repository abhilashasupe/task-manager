const express = require("express")
const router1 = express.Router()

router1.get('/login',(req,res)=>{
    res.render('login');
})

router1.get('/logout',(req,res)=>{
    res.send('logging out');
})

router1.get('/google', (req,res)=>{
    res.send('logging in with google');
})

module.exports = router1