// const moviesController = (req, res) =>{
//     res.status(200).send("Próximamente estarán disponibles los datos de películas");
// };

// module.exports = moviesController;

const movieService = require("../Services/movieService");

module.exports = {
    getMovies: async (req, res)=>{
        try{
            const movies = await movieService.getAllMovies();
            res.status(200).json(movies);
        } catch (error){
            res.status(500).json({
                error: "Error interno del servidor"
            });
        };
        
    },

    createMovie: async(req, res)=>{

        try{
            const { title, year, director, duration, genre, rate, poster } = req.body;

            // console.log(req.body);
            
            const newMovie = await movieService.createAMovie({title, year, director, duration, genre, rate, poster});
            res.status(201).json({newMovie});
        } catch (error){
            res.status(500).json({
                error: "Error interno del servidor"
            });
        };
    },
};



// Realiza a tu controlador las modificaciones necesarias para que hacer que ejecute la función del servicio que le permite obtener todas las películas.