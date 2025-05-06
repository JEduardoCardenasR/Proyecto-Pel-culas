
const renderCards = (data)=>{
    const movieCardsContainer = document.querySelector('.movie-cards');
    movieCardsContainer.innerHTML = "";
    // Mapea el array tempData para construir las tarjetas de películas
    data.forEach(movie => {
        // Crear el contenedor de la tarjeta
        const card = document.createElement('div');
        card.classList.add('movie-card');

        // Crear y añadir el título de la película
        const title = document.createElement('h2');
        title.innerHTML = `<a href="#">${movie.title}</a>`;
        card.appendChild(title);

        // Crear y añadir el póster de la película
        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.alt = `${movie.title} Poster`;
        card.appendChild(poster);

        // Crear y añadir la información de la película
        const info = document.createElement('div');
        info.classList.add('info');
        info.innerHTML = `
            <p>Year: ${movie.year}</p>
            <p>Director: ${movie.director}</p>
            <p>Duration: ${movie.duration}</p>
            <p>Genre: ${movie.genre.join(', ')}</p>
        `;
        card.appendChild(info);

        // Crear y añadir la calificación de la película
        const rate = document.createElement('div');
        rate.classList.add('rate');
        rate.textContent = `Rate: ${movie.rate}`;
        card.appendChild(rate);

        // Añadir la tarjeta al contenedor
        movieCardsContainer?.appendChild(card);
    });
}

module.exports = {renderCards};