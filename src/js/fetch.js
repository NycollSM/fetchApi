const boton = document.getElementById('btn-anim');
// variables
const songs = document.getElementsByTagName('audio');
const mainContainer = document.getElementById('main-content');
console.log(songs);
const list = document.getElementById('songs');
const contentLyrics = document.getElementById('contentlyrics');

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
  fetch('js/lyrics.json')
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
          contentLyrics.appendChild(songs);
          contentLyrics.appendChild(NameSongs);
        }
        console.log(contSongs);

        //evento de cancion
        contSongs.addEventListener('click', selected);
        //contSongs.addEventListener('click', fetchJson);
        // lyrics
        for (let lyric in items.lyrics) { // eslint-disable-line
          // console.log(a.lyrics[lyric]);
          const el = items.lyrics[lyric];
          const parrafo = document.createElement('p');
          parrafo.innerHTML += `- ${el}`;
          contentLyrics.appendChild(parrafo);
        }
      }
      console.log(datos);
  });
}

boton.addEventListener('click', SongsF);
boton.addEventListener('click', animation);
