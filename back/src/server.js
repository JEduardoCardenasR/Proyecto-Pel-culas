const express = require("express");
const primaryRouter = require("./Routes/primaryRouter");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev")); 
app.use(cors()); 
app.use(express.json()); 

app.use(primaryRouter);

module.exports = app;
