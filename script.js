
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let max_duration = document.getElementById("max_duration");
let current_time = document.getElementById("current_time");


let songs = [
    {songName: "Warriyo - Music 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Music 2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Deav Kev - Music 3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Heaven - Music 4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji - Music 5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Music 6", filePath: "songs/7.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyan - Music 7", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Capri - Music 8 ", filePath: "songs/9.mp3", coverPath: "covers/8.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
    
    
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
    const { currentTime, duration} = audioElement;
    
    //total time
    console.log(duration);
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);
    console.log(min);
    let totdu = `${min}:${sec}`;
    if(duration){
        max_duration.textContent = `${totdu}`;
    }
  
    //current time


    let minc = Math.floor(currentTime / 60);
    let secc = Math.floor(currentTime % 60);
    if(secc < 10){
        secc=`0${secc}`;
    }
    let totduc = `${minc}:${secc}`;
    current_time.textContent = `${totduc}`;
});    
    
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    audioElement.currentTime = curret-time.value * audioElement.duration/100;
    
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
   

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})



function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  

  