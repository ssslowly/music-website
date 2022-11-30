const player = document.querySelector('.player'),
playBtn = document.querySelector('.play'),
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next'),
audio = document.querySelector('.audio'),
progressContainer = document.querySelector('.progress_container'),
progress = document.querySelector('.progress'),
title = document.querySelector('.song'),
cover = document.querySelector('.cover_img'),
imgSrc = document.querySelector('.img_src')

// названия песен
const songs = ['plenka - Call Me (Slowed)', 'Mareux - The Perfect Girl']

// песня по умолчанию
let songIndex = 0

// Init 
function loadSong(song) {
   title.innerHTML = song
   audio.src = `music/${song}.mp3`
   cover.src = `img/cover${songIndex + 1}.png`
}
loadSong(songs[songIndex])