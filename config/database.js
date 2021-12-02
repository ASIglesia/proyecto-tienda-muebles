const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host:'b8aadikmlzotajtkoajm-mysql.services.clever-cloud.com',
    user:'ugbc5ue20iacmpgl',
    database:'b8aadikmlzotajtkoajm',
    password:'diHhnE4Wpkq1S5k2w7KW'
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Servidor conectado a MySQL")
    }
});
module.exports= databaseConnection