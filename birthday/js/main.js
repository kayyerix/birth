const startPage = document.getElementById("startPage")
const videoPage = document.getElementById("videoPage")
const finalPage = document.getElementById("finalPage")

const video = document.getElementById("video")
const music = document.getElementById("music")

function startSurprise(){

startPage.classList.remove("active")
videoPage.classList.add("active")

video.play()

}

video.onended = function(){

videoPage.classList.remove("active")
finalPage.classList.add("active")

music.play().catch(()=>{})

}