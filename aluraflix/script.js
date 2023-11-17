function adicionarFilme() {
    let filmeFavorito = document.getElementById('filme').value
    let elementoListaFilmes = document.getElementById('listaFilmes')

    elementoListaFilmes.innerHTML += '<img src=' + filmeFavorito + '>'

    document.getElementById('filme').value = ''

 //   document.write('<img src=' + filmeFavorito + '>')
}