const app = () => {
    const song= document.querySelector('.song');
    const play= document.querySelector('.play');
    const outline= document.querySelector('.moving-outline circle');
    const video= document.querySelector('vid-container video');

    //SOUNDS
    const sounds= document.querySelectorAll('.sound-picker button');
    //Time Disply
    const timeDisplay= document.querySelector('.time-display');
    //Length of outline
    const outlineLength= outline.getTotalLength();
    //Duration
    let fakeDuration=600;

    outline.style.strokeDasharray=outlineLength;
    outline.style.strokeDashoffset=outlineLength;

    //Play sound
    play.addEventListener('click', () =>{
        song.play();
    })

    //Stop and Play
    const checkPlaying= song =>{
        if(song.paused){
            song.play();
            play.src='./svg/pause.svg'
        }
    }

}

app();