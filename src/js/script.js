// variables
const songs = document.getElementsByTagName('audio');
console.log(songs);
const div = document.getElementById('contentsongs');
let source;
let i;
const request = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
}
// funciones
// cancion al nuevo div
function selected() {
  const newSong = document.createElement('audio');
  newSong.setAttribute('scr', source);
  newSong.setAttribute('controls', true);
  div.appendChild(newSong);
  console.log(newSong);
}

// Eventos
// recorre todas las canciones
for (i of songs) {
  i.addEventListener('play', selected);
  source = i.src;
  console.log(source);
}

// Fetch
