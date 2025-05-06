const formFunction = ()=>{

    // Selección del formulario
    const movieForm = document.getElementById('movieForm');
    
    // Event listener para el envío del formulario
    movieForm?.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Selección de todos los inputs del formulario
        const title = document.getElementById('title').value;
        const year = document.getElementById('year').value;
        const director = document.getElementById('director').value;
        const duration = document.getElementById('duration').value;
        const genreSelect = document.getElementById('genre');
        const rate = document.getElementById('rate').value;
        const poster = document.getElementById('poster').value;
    
        // Procesar las opciones seleccionadas en el campo de género
        const genre = Array.from(genreSelect.selectedOptions).map(option => option.value);
    
        // Validación para cada campo (Considerar que también hay validaciones en validateMovieData.js)
        if (!title) {
            alert('Please complete the title field.');
            return;
        }
    
        if (title.length < 1 || title.length > 50) {
            alert('Title must be between 1 and 50 characters long.');
            return;
        }
    
        if (!year) {
            alert('Please complete the year field.');
            return;
        }
    
        if (year.length !== 4){
            alert('Year must be a 4-digit number.');
            return;
        }
    
        const currentYear = new Date().getFullYear();
    
        if (year > currentYear) {
            alert('Year cannot be in the future.');
            return;
        }
    
        if (!director) {
            alert('Please complete the director field.');
            return;
        }
    
        if (!duration) {
            alert('Please complete the duration field.');
            return;
        }
    
        if (genre.length === 0) {
            alert('Please select at least one genre.');
            return;
        }
    
        if (!rate) {
            alert('Please complete the rate field.');
            return;
        }
    
        if (rate < 0 || rate > 10) {
            alert('Rate must be between 0 and 10.');
            return;
        }
    
        if (!poster) {
            alert('Please complete the poster URL field.');
            return;
        }
    
        // // Alerta formulario completo
        // alert('Form submitted successfully.');
    
         // Creación del objeto de la nueva película
         const newMovie = { title, year, director, duration, genre, rate, poster };
        
    
         console.log(newMovie);
    
          // Envío de la solicitud POST con axios
        axios.post('http://localhost:3001/movies', newMovie)
        .then(response => {
            alert('Movie successfully created.');
            console.log(response.data);
        })
        .catch(error => {
            alert('There was an error creating the movie.');
            console.error(error.response);
        });
    
        movieForm.reset();
    });
    
       
        
       
};

module.exports = formFunction;

