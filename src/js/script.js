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

// Función que realiza el fetch con las latras de la canción 

const container = document.getElementById('container');
const btn = document.getElementById('btn');
let i = 0;


function fetchJson() {
  fetch('js/lyrics.json')
    .then(res => res.json())
    .then(data => {
    let respuesta = data[i].lyrics[0];
      //console.log(respuesta);
      for (l of data) {
        console.log(l);
        for (let lyric in data[i].lyrics) {
          function agregoDom() {
            lyric = document.querySelectorAll('p');
            lyric.innerText;
            let parrafo = lyric;
            //parrafo = document.createElement('p');
            // parrafo.innerText += data[i].lyrics[l];
            console.log(lyric);
            console.log(parrafo);
            container.appendChild(parrafo);
            /*let p = l.innerText; 
            let parrafo = document.createElement('p');
            parrafo.innerHTML = p;
            container.appendChild(parrafo);*/
          } 
        }
        function time() {
          pedido = setTimeout(agregoDom, 8000);
          console.log(pedido);
        }
      }
    })
}

const pedido = fetchJson();


// muestra las letras en la consola
btn.addEventListener('click', fetchJson);
