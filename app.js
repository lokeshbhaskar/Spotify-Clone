console.log("welcome");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "oye mere deel k chain", filePath: "1.mp3", coverPath: "cover.png" },
    { songName: "Ae dil hai muskil", filePath: "2.mp3", coverPath: "cover.png" },
    { songName: "Aaram aata hai didar...", filePath: "3.mp3", coverPath: "cover.png" },
    { songName: "kalank title song", filePath: "4.mp3", coverPath: "cover.png" },
    { songName: "mai tera mai tera", filePath: "5.mp3", coverPath: "cover.png" },
    { songName: "Ghar nhi jana", filePath: "6.mp3", coverPath: "cover.png" },
    { songName: "Tere vaste falak se", filePath: "7.mp3", coverPath: "cover.png" },
    { songName: "Arabic kuthu", filePath: "8.mp3", coverPath: "cover.png" },
    { songName: "Tu hai phir aur kya chahiye", filePath: "9.mp3", coverPath: "cover.png" },
]
songItems.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//play/pause
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
});

document.getElementById('next').addEventListener('click', () => {
    
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex++;
    }
    audioElement.src = `${songIndex}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});

document.getElementById('prev').addEventListener('click', () => {
    console.log("hii")
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex--;
    }
    audioElement.src = `${songIndex}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});