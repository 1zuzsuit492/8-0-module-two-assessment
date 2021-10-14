const url = 'https://ghibliapi.herokuapp.com/films';
//array of films//
const dropdown = document.querySelector('#movie-titles');
//selecting movie-titles
const info = document.querySelector('#display-info');
fetch(url).then((response) => response.json()).then((movies) => {
//Populating dropdown menu with movie titles
        movies.forEach((movie) => {
        const option = document.createElement("option");
        option.value = movie.title;
        option.textContent = movie.title;
        dropdown.append(option);
        
        dropdown.addEventListener("change", () => {
            // event.preventDefault();
            for (let movie of movies) {
                if(dropdown.value === movie.title) {
                    info.innerHTML = `<h3>${movie.title}</h3><p>${movie.release_date}</p><p>${movie.description}</p>` 
                }
                
            }
        })
        });
})
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); //keeps page from refreshing
    const li = document.createElement("li") //creating an li 
    li.innerHTML = `<strong><b>${dropdown.value}</b></strong>: ${event.target.review.value}` 
    document.querySelector("ul").append(li) //inserting li in ul//
    event.target.reset(); //resets textbox
})


