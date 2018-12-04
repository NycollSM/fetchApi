// variables
const songs = document.getElementsByTagName('audio');
console.log(songs);
const div = document.getElementById('contentsongs');

// Fetch de lyrics.json
const btn = document.getElementById('btn');
let letras = document.querySelector('#container');

function fetchJson() {
  fetch('js/lyrics.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
  })
}

btn.addEventListener('click', fetchJson);

=======
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
