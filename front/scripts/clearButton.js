const buttonFunction = ()=>{

    document.getElementById("clearBtn")?.addEventListener("click", function(event) {
        
        // Evitar el comportamiento predeterminado del botón (por ejemplo el uso de reset)
        event.preventDefault();
    
        // Selecciona el formulario
        const form = document.getElementById("movieForm");
    
        // Limpia cada input del formulario
        form.querySelectorAll("input").forEach(input => input.value = "");
    
        // Limpia el select multiple de géneros
        const genreSelect = document.getElementById("genre");
        genreSelect.selectedIndex = -1; // Quita todos los géneros
    
    });
};

module.exports = buttonFunction;
