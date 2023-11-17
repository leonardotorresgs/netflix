let allMovies = []

function addFilm() {
    let linkImage = document.getElementById('input').value;
    let listFilms = document.querySelector('.box-movies');

    allMovies.push(linkImage)
    document.querySelector('#input').value = ''

    viewFilms(listFilms)
}

function viewFilms(listFilms) {
    
    let newLi = ''

    allMovies.forEach((item) => {
        newLi += `
            <img class="film" src="${item}">
        `
        
        listFilms.innerHTML = newLi
    })
}
