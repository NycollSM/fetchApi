// variables
const songs = document.getElementsByTagName('audio');
const mainContainer = document.getElementsByClassName('main-content');
console.log(songs);
const div = document.getElementById('contentsongs');

let source;
let i;
// Fetch de lyrics.json
const btn = document.getElementById('btn');

// funciones
// cancion al nuevo div
function selected() {
  const newSong = document.createElement('audio');
  newSong.setAttribute('scr', source);
  newSong.setAttribute('controls', true);
  div.appendChild(newSong);
  console.log(newSong);
}
// Fetch de letras
function fetchJson() {
  fetch('js/lyrics.json')
    .then(res => res.json())
    .then(data => {
    console.log(data);
  })
}

// Eventos
// recorre todas las canciones
for (i of songs) {
  i.addEventListener('play', selected);
  source = i.src;
  //console.log(source);
}


// Fetch de lyrics.json
const container = document.getElementById('container');
const btn = document.getElementById('btn');


/*function addLyrics() {
  const lyrics = document.createElement('div');
  for (const l of res.data.name) {
    console.log(l);
    parrafo.innerHTML += res.lyrics[l];
  }
  lyrics.appendChild(parrafo);
  container.appendChild(lyrics);
  console.log(parrafo);
} */

function fetchJson() {
  fetch('js/lyrics.json')
    .then(res => res.json())
    .then(data => {
    let respuesta = data[0].lyrics;
      console.log(respuesta);
      const lyrics = document.createElement('div');
      for (const l of data.name) {
        console.log(l);
        const parrafo = document.createElement('p');
        for (consta in l.lyrics) {
          parrafo.innerHTML += res.lyrics[l];
        }
        lyrics.appendChild(parrafo);
      }
      container.appendChild(lyrics);
      console.log(parrafo);
      console.log(res);
    })
}

// muestra las letras en la consola
btn.addEventListener('click', fetchJson);
