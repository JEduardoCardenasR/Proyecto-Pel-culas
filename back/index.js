const app = require("./src/server");
const conDb = require("./src/config/conDB")

conDb()
    .then((res)=>{
        app.listen(3001, ()=>{
            console.log("Escuchando en el puerto 3001"); 
        });
    })
    .catch((err)=>{
        console.log("Error al conectar la Base de Datos");
        
    });
