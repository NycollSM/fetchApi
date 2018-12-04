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

let i;
let source = i.src;

// cancion al nuevo div
function selected(){ // eslint-disable-line
  const newSong = document.createElement('audio');
  newSong.setAttribute('src', source);
  newSong.setAttribute('controls', true);
  div.appendChild(newSong);
}

// Eventos

// recorre todas las canciones y con esto la funcion select va a agregar la cancion seleccionada al otro div
for ( i of songs){
    i.addEventListener('click' , selected);
    source = i.src;
    console.log(source);
}

