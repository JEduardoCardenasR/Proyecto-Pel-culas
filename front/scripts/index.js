const {renderCards} = require("./renderCards");
const formFunction = require("./submitForm");
const buttonFunction = require("./clearButton");


// $.get("https://students-api.up.railway.app/movies", (data, status) =>{
//     renderCards(data);
// })

// const axios = require("axios");
// const promise = axios.get("https://students-api.up.railway.app/movies");
// promise
//    .then((res)=> {
//       renderCards(res.data);
//    })

//    .catch((err)=>{
//    console.log("Tuvimos un error");
//    console.log(err);
//    });


const axios = require("axios");
const fetchMovies = async ()=>{
   try{
       const response = await axios.get("http://localhost:3001/movies");
       renderCards(response.data);
       console.log("Ha finalizado con éxito");
       
   } catch (err) {
       console.log("Tuvimos un error, estamos en el bloque catch");
       console.log(err.message); 
   }
};


fetchMovies();

formFunction();

buttonFunction();