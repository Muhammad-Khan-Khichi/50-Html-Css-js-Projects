const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=901a05d4bcbb2f41a6479ea2a728312c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=901a05d4bcbb2f41a6479ea2a728312c&query= '


const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url) {

    search.disabled = true
    form.querySelector('button')?.setAttribute('disabled', true)
    main.innerHTML = `<p class="loading">Loading movies...</p>`

    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results);
    
        search.disabled = false
        form.querySelector('button')?.removeAttribute('disabled')
}


function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview} = movie

        const movieElem = document.createElement('div')
        movieElem.classList.add('movie')

        movieElem.innerHTML = `
            <img
                src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
         <h3>Overview</h3>
         <p>${overview}</p>
         </div>
        `

        main.appendChild(movieElem)
    });
}


function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }

})