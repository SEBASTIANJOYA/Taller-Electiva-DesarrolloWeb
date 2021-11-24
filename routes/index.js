const express= require('express');
const router = express.Router();

const products = require('../public/js/scripts')

let usuarios = []

router.get('/',(req,res)=>{
    res.render("index");
});

router.get('/insert',(req, res)=>{
    res.render('insert');
});

router.get('/login',(req, res)=>{
    res.render('login');
});

router.get('/compra',(req, res)=>{
    res.render('compra');
});

router.post('/insert',(req,res)=>{
    
    res.redirect('/');
});


module.exports = router;
