console.log("welocome to spotify")

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitems'));

let songs = [
    {songname:"salam-e-ishq", filepath:"songs/1.mp3",coverpath: "cover/1.jpg"},
    {songname:"cheques", filepath:"songs/2.mp3",coverpath: "cover/2.jpg"},
    {songname:"yadav brand", filepath:"songs/3.mp3",coverpath: "cover/3.jpg"},
    {songname:"try-me", filepath:"songs/4.mp3",coverpath: "cover/4.jpg"},
    {songname:"kaali-kaali-zulfo", filepath:"songs/5.mp3",coverpath: "cover/5.jpg"},
    {songname:"someone like me", filepath:"songs/6.mp3",coverpath: "cover/6.jpg"},
    {songname:"bhagva", filepath:"songs/7.mp3",coverpath: "cover/7.jpg"},
    {songname:"friends", filepath:"songs/8.mp3",coverpath: "cover/3.jpg"},
    {songname:"heeriye", filepath:"songs/9.mp3",coverpath: "cover/5.jpg"},
    {songname:"jhuki-nazar", filepath:"songs/10.mp3",coverpath: "cover/3.jpg"},
]
songitems.forEach((element,i)=>{
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})
//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
masterplay.classList.remove('fa-circle-play')
masterplay.classList.add('fa-circle-pause');
gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause')
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;
}
})

//listen to enents
audioElement.addEventListener('timeupdate',()=>{
   
    //update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime((myProgressBar.value) * (audioElement.duration))/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) =>{
    
    element.addEventListener('click', (e)=>{
//console.log(e.target);
makeAllplays();
audioElement.pause();
e.target.classList.remove('fa-circle-pause');
e.target.classList.add('fa-circle-play');

songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioElement.src = `songs/${songIndex+1}.mp3`;
mastersongname.innerText = songs[songIndex].songname;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=0;
    }
    else{
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
audioElement.currentTime=0;
audioElement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
audioElement.currentTime=0;
audioElement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})