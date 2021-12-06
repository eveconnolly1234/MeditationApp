const app = () => {
    const song= document.querySelector('.song');
    const play= document.querySelector('.play');
    const outline= document.querySelector('.moving-outline circle');
    const video= document.querySelector('.vid-container video');

    //SOUNDS
    const sounds= document.querySelectorAll('.sound-picker button');
    //Time Display
    const timeDisplay = document.querySelector(".time-display");
    const outlineLength = outline.getTotalLength();
    //Duration
    const timeSelect = document.querySelectorAll(".time-select button");
    let fakeDuration = 600;

    outline.style.strokeDasharray=outlineLength;
    outline.style.strokeDashoffset=outlineLength;

    //Play sound
    play.addEventListener("click", function() {
        checkPlaying(song);
      });

    //Stop and Play
   const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

//animate the circle
song.ontimeupdate = () => {
    let currentTime= song.currentTime;
    let elapsed= fakeDuration - currentTime;
    let seconds= Math.floor(elapsed % 60); //Math.floor = exact number
    let minutes= Math.floor(elapsed / 60);
    
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    //animate text
    timeDisplay.textContent= `${minutes}:${seconds}`
}



}

app();