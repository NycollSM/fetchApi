const boton = document.getElementById('btn-anim');

// animacion principal
function animation() {
  mainContainer.id = 'showing';
}
// fetch canciones
function SongsF() {
  fetch('js/song.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
    for (let items of datos) { 
        const contSongs = document.createElement('div');
        const NameSongs = document.createElement('p');
        NameSongs.innerHTML = items.name;
        const songs = new Audio (items.song);
        songs.setAttribute("controls", true);
        contSongs.appendChild(NameSongs);
        contSongs.appendChild(songs);
        list.appendChild(contSongs);
      }

      console.log(datos);
  });
}
boton.addEventListener('click', SongsF);
boton.addEventListener('click', animation);
