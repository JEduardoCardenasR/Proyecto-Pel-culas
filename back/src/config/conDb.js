require("dotenv").config();

const mongoose = require("mongoose");

// En este módulo hacer la conexión a la base de datos en una función
// Exportar esta función

const conDb = async ()=>{
    // Conexión a la base de datos con la url de MongoDB
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.srjch.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTERM}`);
    
    
};

module.exports = conDb;