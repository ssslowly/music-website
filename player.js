const player = document.querySelector('.player');
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const audio = document.querySelector('.audio');
const progressContainer = document.querySelector('.progress_container');
const progress = document.querySelector('.progress');
const title = document.querySelector('.song');
const cover = document.querySelector('.cover_img');
const imgSrc = document.querySelector('.img_src');

// названия песен
const songs = ['plenka - Call Me (Slowed)', 'Mareux - The Perfect Girl']

// песня по умолчанию
let songIndex = 1;

// Init 
function loadSong() {
   title.innerHTML = song
   audio.src = 'music/${song}.mp3'
   cover.src = 'img/cover${songIndex + 1}.png'
}
loadSong(songs[songIndex])