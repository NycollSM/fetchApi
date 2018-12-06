const boton = document.getElementById('pps');

// animacion principal
function Animation (){

}

// fetch canciones
function SongsF() {
  fetch('js/song.json')
    .then(respuesta => respuesta.json())
    .then(pp => {
    console.log(pp);
  });
}
boton.addEventListener('click', SongsF);
