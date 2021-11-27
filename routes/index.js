const express= require('express');
const router = express.Router();

const products = require('../resources/files/productos');

//Almacena los registros de forma estatica
let usuarios = []

router.get('/',(req,res)=>{
    res.render("index");
});

router.get('/insert',(req, res)=>{
    res.render('insert');
});

router.post('/insert',(req,res)=>{

    const{code,lastName,name,direccion,barrio,email,phone} = req.body
    let newReg = {code, lastName, name, direccion, barrio, email, phone  };
    usuarios.push(newReg);
    console.log("Registrado")
    res.redirect('login')
})

router.get('/login',(req, res)=>{
    res.render('login');
});

router.post('/login',(req, res)=>{
    const{cedula} = req.body
    let code = cedula;
    const validacion = usuarios.filter(index => index.cedula == code);
    if(validacion != undefined){
        console.log("Existe");
        res.redirect('compra')
    }else{
        console.log("No Existe");
        res.redirect('login')
    }
    
    
});

router.get('/compra',(req, res)=>{
    res.render('compra');
});

router.post('/insert',(req,res)=>{
    
    res.redirect('/');
});


module.exports = router;
