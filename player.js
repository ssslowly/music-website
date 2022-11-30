const player = document.querySelector('.player'),
playBtn = document.querySelector('.play'),
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next'),
audio = document.querySelector('.audio'),
progressContainer = document.querySelector('.progress_container'),
progress = document.querySelector('.progress'),
title = document.querySelector('.song'),
cover = document.querySelector('.cover_img'),
imgSrc = document.querySelector('.img_src');

// названия песен
const songs = ['plenka - Call Me (Slowed)', 'Mareux - The Perfect Girl']

// песня по умолчанию
let songIndex = 1

// Init 
function loadSong(song) {
   title.innerHTML = song
   audio.src = `music/${song}.mp3`
   cover.src = `img/cover${songIndex + 1}.png`
}
loadSong(songs[songIndex])

// play 
function playSong(){
   player.classList.add('play')
   cover.classList.add('active')
   imgSrc.src = 'img/pause-button.png'
   audio.play()
}

// pause 
function pauseSong(){
   player.classList.remove('play')
   cover.classList.remove('active')
   imgSrc.src = 'img/play-button.png'
   audio.pause()
}
playBtn.addEventListener('click', () => {
   const isPlaying = player.classList.contains('play')
   if(isPlaying){
      pauseSong()
   }
   else{
      playSong()
   }
})

// next song
function nextSong() {
   songIndex++

   if(songIndex > songs.length -1) {
      songIndex = 0
   }

   loadSong(songs[songIndex])
   playSong()
}
nextBtn.addEventListener('click', nextSong)

// prev song
function prevSong() {
   songIndex--

   if(songIndex < 0) {
      songIndex = songs.length -1
   }
   loadSong(songs[songIndex])
   playSong()

}
prevBtn.addEventListener('click', prevSong)