let allMovies = []

function addFilm() {
    let linkImage = document.getElementById('input').value;
    let listFilms = document.querySelector('.list-films');

    allMovies.push(linkImage)
    document.querySelector('#input').value = ''

    viewFilms(listFilms)
}

function viewFilms(listFilms) {
    
    let newLi = ''

    allMovies.forEach((item) => {
        newLi += `
        <li class="film">
            <img src="${item}">
        </li>
        `
        
        listFilms.innerHTML = newLi
    })
}
