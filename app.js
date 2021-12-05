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
        checkPlaying(song);
    })

    //Stop and Play
    const checkPlaying= song =>{
        if(song.paused){
            song.play();
            video.play();
            play.src='./svg/pause.svg'
        }else 
        song.paused();
        video.paused();
        play.src='./svg/play.svg'
    }

}

app();