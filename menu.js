// import  {snd}  from "/script.js"

let audioEffect;
let audioEnabled = true;

function snd(audio) {
    audioEffect = new Audio("/audio/" + audio[0]);
  
    if (typeof audio[1] == "number") {
      audioEffect.volume = audio[1];
    } else {
      audioEffect.volume = 1;
    }
  
    audioEnabled && audioEffect.play();
  }

let theme = ['theme.mp3', 0.019]


window.onload = (event) => {

    setTimeout(function(){
        snd(theme)

    }, 20000)
  };



