const express= require('express');
const products = require('../resources/files/productos');
const router = express.Router();

const productos = require('../resources/files/productos');

//Almacena los registros de forma estatica
let usuarios = []

let usuarios_registrados =[]


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
    console.log(usuarios)
    res.redirect('login')
})

router.get('/login',(req, res)=>{
    
    res.render('login');
    
});

router.post('/login',(req, res)=>{
    const{cedula} = req.params
    let code = {cedula};
        
    if(usuarios.findIndex(element => element.code == code)){
        console.log("Existe")
        res.redirect('compra')
    }
});  

router.get('/compra',(req, res)=>{
    res.render('compra');
});

router.post('/compra',(req, res)=>{
    const{code, optionproductos, name, date, cantidad, salary } = req.body;
    const dptoAux = products.find( record => record.id == code ).name;
    console.log(dptoAux);
});


module.exports = router;
