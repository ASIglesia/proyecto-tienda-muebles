const databaseConnection = require('../../config/database')

const renderHome = (req,res)=>{
    /*hablandole a la DB, pidiendo la info que guarda*/
    databaseConnection.query('SELECT * FROM categorias',(error,data)=>{
        if(error){
            console.log(error)
        }else{
            /*mande esa info al archivo index para mostrarle el sitio */
            res.render('pages/index',{
                data:data
            })
        }
    })
};
const getAllProducts = (req,res)=>{
    databaseConnection.query('SELECT * FROM categorias',(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.render('pages/productos',{
                data
            })
        }
    })
};
//Chequear getForm
const getForm= (req,res)=>{

    res.render('pages/formulario');
};


const addnewProduct =(req,res)=>{
    const {producto,categoria,descripcion,precio}= req.body;
  
         databaseConnection.query('INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES(?,?,"/imagenes/estilo-madera.png",?,?)',[producto,categoria,descripcion,parseInt(precio)],(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/productos')
        }
    });

    /*
    const producto = contenido de producto del formulario;
    const categoria = contendio de categoria del formulario;
    */

};



module.exports= {
    renderHome,
    getAllProducts,
    getForm,
    addnewProduct
};