//
const express = require("express");
const app = express();
const routes = require("./routes/tiendaRoutes")
const path= require('path');
const databaseConnection = require('../config/database')
const port=process.env.PORT || 3000; /*Corre en el valor port, o en el 300 si no hay port */

//coneccion con SQL
databaseConnection.connect();

//vamos a recibir info en formato JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//uso de EJS y de archivos publicos
app.set("views",path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

//rutas
app.use("",routes);/*/tienda */

/* Como lo escribiamos antes
app.get("/tienda",(req,res)=>{
    res.send("Recibi la peticion GET")
})
*/

/*Antes se utilizo el puerto 3000, pero para que corra en heroku se cambio */
app.listen(port,()=>{
    console.log("Escuchando al puerto "+port)/*o (`Server corriendo en puerto ${port}`)
    */
})