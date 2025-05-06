const Movie = require("../Models/Movie");

module.exports = {
    getAllMovies: async ()=>{
        const movies = await Movie.find();
        return movies;
    },

    createAMovie: async (movie)=>{
        const newMovie = await Movie.create(movie);
        return newMovie;
    }

}

    

    
    
    
    
    
    
    
    
    
    

    // EXTRA CREDIT
    // const axios = require("axios");
    // const Movie = require("./movies");
    
    // module.exports = {
    //     getAllMovies: async () => {
    //         try {
    //             const response = await axios.get("https://students-api.up.railway.app/movies");
    //             const movies = response.data.map(movieData => new Movie(movieData)); // Instancias de Movie
    //             return movies;
    //         } catch (error) {
    //             throw new Error("Error al cargar las películas");
    //         }
    //     },
    // };
    

    // PRIMERA OPCIÓN
// module.exports = {
//     getAllMovies: async ()=>{
//         const movies = [
//             {
//             title: "Guardians of the Galaxy Vol. 2",
//             year: 2017,
//             director: "James Gunn",
//             duration: "2h 16min",
//             genre: ["Action", "Adventure", "Comedy"],
//             rate: 7.7,
//             poster:
//                 "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//             },
//             {
//             title: "Star Wars: Episode IV - A New Hope",
//             year: 1977,
//             director: "George Lucas",
//             duration: "2h 1min",
//             genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//             rate: 8.7,
//             poster:
//                 "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//             },
//             {
//             title: "The Lord of the Rings: The Fellowship of the Ring",
//             year: 2001,
//             director: "Peter Jackson",
//             duration: "2h 58min",
//             genre: ["Action", "Adventure", "Drama", "Fantasy"],
//             rate: 8.8,
//             poster:
//                 "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//             },
//         ]; 

//         return movies;
//     },
// };


// SEGUNDA OPCIÓN

// const axios = require("axios");

// module.exports = {
//     getAllMovies: async ()=>{
//         try{
//             const response = await axios.get("https://students-api.up.railway.app/movies");
//             return response.data;
            
//         } catch (error) {
//             throw new Error("Error al cargar las películas");
//         };
//     },
// };
