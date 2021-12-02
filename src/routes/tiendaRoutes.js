const express = require("express");
const app = express();


/*hacer le routeo, es decir el recorrido que tiene que hacer al recibir una peticion */
const routes=express.Router();

const {
    renderHome,
    getAllProducts,
    getForm,
    addnewProduct
} = require('../controllers/tiendaControllers');

/*
const rederHome= require ('../controllers/tiendaControllers')
const getAllProducts= require ('../controllers/tiendaControllers')
...
*/

routes.get("/",renderHome);

/*
routes.get("/prueba",(req,res)=>{
    res.send("Esta es la devolucion de otra peticion")
});
*/
routes.get('/productos',getAllProducts);

//Chequear getForm
routes.get("/nuevoProducto",getForm);

routes.post("/nuevoProducto",addnewProduct);

module.exports= routes;