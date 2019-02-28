// variables
const boton = document.getElementById('btn-anim');
const mainContainer = document.getElementById('main-content');
console.log(songs);
const list = document.getElementById('songs');
const contentLyrics = document.getElementById('contentlyrics');
let i;
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
    .then((datos) => { // eslint-disable-line
      for (let items of datos) {
        const contSongs = document.createElement('div');
        const NameSongs = document.createElement('p');
        NameSongs.innerHTML = items.name;
        const songs = new Audio (items.song);
        songs.setAttribute('controls', true);
        contSongs.appendChild(NameSongs);
        contSongs.appendChild(songs);
        list.appendChild(contSongs);
        const lyrick = document.createElement('p');
        lyrick.innerHTML = items.lyrics.i;
        //console.log(items.lyrics);
        // for que recorre los div
        function selected() {
          contentLyrics.appendChild(songs);
          contentLyrics.appendChild(NameSongs);
          contentLyrics.appendChild(lyrick);
        }
        console.log(contSongs);

        //evento de cancion
        contSongs.addEventListener('click', selected);
        //contSongs.addEventListener('click', fetchJson);
        // lyrics
        for (i in items.lyrics) { // eslint-disable-line
          // console.log(a.lyrics[lyric]);
          const el = items.lyrics[i];
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
