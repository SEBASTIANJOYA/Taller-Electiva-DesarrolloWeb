const express= require('express');
const products = require('../resources/files/productos');
const router = express.Router();

const { v4: uuidv4 } = require('uuid')

//Almacena los registros de forma estatica
let usuarios = []

let arreglo =[]


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

router.get('/asignar', (req, res) => {
    res.render('asignar');
});


router.post('/save', (req, res) => {
    arreglo.push({ ...req.body, id: uuidv4() });
    res.redirect('/compra')
});

router.get('/entregado/:id', (req, res) => {
    const { id } = req.params;
    const idx = arreglo.findIndex(element => element.id == id);
    arreglo.splice(idx, 1);
    res.redirect('/')
})

router.get('/editar/:id', (req, res) => {
    const { id } = req.params;
     const idx = arreglo.findIndex(element => element.id == id);
    arreglo.splice(idx, 1);
    res.render('editar')
})

router.post('/editar', (req, res) => {
  arreglo.push({ ...req.body, id: uuidv4() });
    res.redirect('/')
})

router.get('/compra',(req, res)=>{
    res.render('compra',{arreglo});
});

router.post('/compra',(req, res)=>{
    const{code, optionproductos, name, date, cantidad, salary } = req.body;
    const dptoAux = products.find( record => record.id == code ).name;
    console.log(dptoAux);
});


module.exports = router;
