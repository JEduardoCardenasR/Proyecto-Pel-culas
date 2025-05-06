// Se crea la clase movie en otro módulo
// EXTRA CREDIT

class Movie {
    constructor({ title, year, director, duration, genre, rate, poster }) {
        if (!title || !poster || !director) {
            throw new Error("Las propiedades 'title', 'poster' y 'director' son obligatorias");
        }
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;   
    };
};

module.exports = Movie;
