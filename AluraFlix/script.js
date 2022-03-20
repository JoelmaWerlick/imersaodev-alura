function adicionarFilme() {
  var NomeDoFilme = document.getElementById("filmeNome").value;
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    //    console.error("Endereço de filme inválido");
    alert("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
  document.getElementById("filmeNome").value = "";
}

function listarFilmesNaTela(filme) {
  //poderia colocar o nome filmeFavorito
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">"; //poderia colocar o nome filmeFavorito
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

var listaFilmes = [
  "https://br.web.img2.acsta.net/pictures/14/11/14/13/47/211678.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/95/60/14/20417708.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/87/19874367.jpg",
  "https://br.web.img2.acsta.net/pictures/21/10/28/20/55/0671708.jpg",
  "https://m.media-amazon.com/images/I/61T1zQwkjzL._AC_SX522_.jpg",
  "https://m.media-amazon.com/images/I/61mlXQWQm6L._AC_SX522_.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}