const url = 'https://ghibliapi.herokuapp.com/films'
//array of films//
const dropdown = document.querySelector('#movie-titles');
//selecting movie-titles
const info = document.querySelector('#display-info');
fetch(url).then((response) => response.json()).then((movies) => {
//Populating dropdown menu with movie titles
        movies.forEach((movie) => {
        const option = document.createElement("option");
        option.value = movie.title
        option.textContent = movie.title;
        dropdown.append(option);
    })
});
