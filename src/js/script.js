// variables
const songs = document.getElementsByTagName('audio');
const mainContainer = document.getElementById('main-content');
console.log(songs);
const list = document.getElementById('songs');
const contentLyrics = document.getElementById('contentlyrics');

// funciones
// cancion al nuevo div

// Fetch de letras

const btn = document.getElementById('btn');
let x = 0;

function fetchJson() {
  fetch('js/lyrics.json')
    .then(res => res.json())
    .then((data) => {
      for (const a of data) {
        for (let lyric in a.lyrics) { // eslint-disable-line
          // console.log(a.lyrics[lyric]);
          const el = a.lyrics[lyric];
          const parrafo = document.createElement('p');
          parrafo.innerHTML += `- ${el}`;
          contentLyrics.appendChild(parrafo);
        }
      }
    });
}

let pedido = fetchJson();
function time() {
  pedido = setTimeout(addLyrics(), 8000);
  console.log(pedido);
}

// muestra las letras en la consola
//btn.addEventListener('click', fetchJson);
