const boton = document.getElementById('btn-anim');

// animacion principal
function animation() {
  mainContainer.id = 'showing';
  if (boton.clicked !== 1) {
    boton.className = 'hide-btn';
  } else {
    console.log('hacer click para ver las canciones');
  }
}
// fetch canciones
function SongsF() {
  fetch('js/song.json')
    .then(respuesta => respuesta.json())
    .then(datos => { // eslint-disable-line
      for (let items of datos) {
        const contSongs = document.createElement('div');
        const NameSongs = document.createElement('p');
        NameSongs.innerHTML = items.name;
        const songs = new Audio (items.song);
        songs.setAttribute('controls', true);
        contSongs.appendChild(NameSongs);
        contSongs.appendChild(songs);
        list.appendChild(contSongs);
        // for que recorre los div
        function selected() {
          div.appendChild(songs);
          div.appendChild(NameSongs);
        }
        console.log(contSongs);

        //evento de cancion
        contSongs.addEventListener('click' , selected);
      }
      console.log(datos);
  });
}

boton.addEventListener('click', SongsF);
boton.addEventListener('click', animation);
