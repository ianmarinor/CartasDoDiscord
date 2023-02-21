// import  {snd}  from "/script.js"

let audioEffect;
let audioEnabled = true;


function gerarNumero(min, max, decimals) {
  if (decimals) {
    return (Math.random() * (max - min) + min).toFixed(decimals);
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}




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


  document.addEventListener("contextmenu", function () {
    //
    return false;
  });

  let creeper =  '<div class="cartaEsp" data-card="especial" data-tankdead="false" data-dmgboss="false" data-tier="campones" id="creeper" data-canbedeleted="false"> <div class="nameAndCidadeWrapperEsp"><p class="nomeEsp" style="font-family: minecraft; color: rgb(85, 85, 85);">CREEPER</p><div class="varianteEsp"></div><p class="cidadeEsp"></p><div class="especialEsp"></div></div><div class="retratoEsp" style="visibility: visible; background-image: url(&quot;pics/retratoCreeper.png&quot;); border: 2px solid rgb(22, 77, 13); background-size: 100% 100%;"></div><p class="cargoEsp" style="font-size: 170%;"></p><div class="poderEsp"><p class="ataqueEsp"></p><p class="novoAtaqueEsp" style="visibility: hidden;">undefined</p><button class="actionEsp">PRESS</button><p class="seedEsp">100412960872140300</p><p class="seloEsp"></p></div></div>'
  let spy = '<div class="cartaEsp" data-card="especial" data-tankdead="false" data-dmgboss="true" data-tier="cavaleiro" id="spy" data-canbedeleted="true" data-hashp="true"> <div class="nameAndCidadeWrapperEsp"><p class="nomeEsp undefined" style="font-size: 210%; font-family: tf2;">SPY</p><div class="varianteEsp"></div><p class="cidadeEsp"></p><div class="especialEsp"></div></div><div class="retratoEsp" style="visibility: visible; background-image: url(&quot;/pics/spyRetrato.webp&quot;); border: 2px solid rgb(207, 106, 50); background-size: 100% 100%;"></div><p class="cargoEsp"></p><div class="poderEsp"><p class="ataqueEsp" style="font-size: 140%; font-family: tf2;">1⚡</p><p class="novoAtaqueEsp" style="visibility: visible;">⌚</p><div class="action">🔘</div><p class="seedEsp">178281781386650000</p><p class="seloEsp"></p></div></div>'
  let logo = document.getElementById('logo')

  let cartasDisplayArr = [

    spy,
    creeper


  ]

  if(gerarNumero(1,2) != 2){
  

    logo.innerHTML = cartasDisplayArr[gerarNumero(0,1)]
  }
  