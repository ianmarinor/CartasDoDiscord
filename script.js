var TICK = true;

import { seedObj, start } from "./modules/seedFabricator.js";
import {
  tenicaEnergia,
  abelhaEnergia,
  abelhaDecrease,
  abelhaDecreaseComTuru,
  abelhaLowHp,
  abelhaHardDecrease,
  frasesAbelha,
  comunistaPE,
  frasesComuna,
  efeitoPremioMonark,
  efeitoEstoico,
  pontoSpeaker,
  escolherEspecial,
  especial,
  bonusCartasPE,
  estoicoPE,
  lucioPE,
  lucioEfeito,
} from "./modules/especial.js";

import { aplicarEfeitos } from "./aplicarEfeito.js";
import { ativarBtn, limparEsp } from "./slotEspecial.js";
import { boss, spawnBoss, resetBoss } from "./boss.js";

let versaoHTML = document.getElementById("versao");
let versao = "Pre-Alpha 1.7";
versaoHTML.innerHTML = versao;

function showVersion() {}

showVersion();

const totalNumOfSeeds = 9000000000000000 + 1000000000000000;

//NUMERO ALEATORIO
function gerarNumero(min, max, decimals) {
  if (decimals) {
    return (Math.random() * (max - min) + min).toFixed(decimals);
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

// AUDIO

let morteAu = ["morte.mp3", 0.4];

function somDeath(time) {
  if (time) {
    setTimeout(function () {
      snd(morteAu);
    }, time);
  } else {
    snd(morteAu);
  }
}

let novaCartaAu = ["novaCarta.mp3"];
let audioEnabled = true;

let speakerP = document.getElementById("speaker");

function toggleSound() {
  if (audioEnabled) {
    audioEnabled = false;
    speakerP.src = "/pics/mute.png";
  } else {
    audioEnabled = true;
    speakerP.src = "/pics/speaker.png";
  }
}

speakerP.addEventListener("click", toggleSound);

let audioEffect;

// let audioEffectE = ['deletar.mp3']

let audioEffectE = new Audio("/audio/deletar.mp3");

export function sndEfeito(audio) {
  audioEffectE = new Audio("/audio/" + audio[0]);

  if (typeof audio[1] == "number") {
    audioEffectE.volume = audio[1];
  } else {
    audioEffectE.volume = 1;
  }
  audioEnabled && audioEffectE.play();
}

export function snd(audio) {
  audioEffect = new Audio("/audio/" + audio[0]);

  if (typeof audio[1] == "number") {
    audioEffect.volume = audio[1];
  } else {
    audioEffect.volume = 1;
  }

  audioEnabled && audioEffect.play();
}

let input = "";

// ***********************
// LINK SEED TO ELEMENT
//**************************/
//integrante
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER

let integrante;
let cartaCustom;
// let seedObj
let seedString = "";

function escolherIntegrante() {
  // seedObj = generateSeed(input);
  seedString = seedObj._seedString;

  //
  //
  if (
    seedString[1] == 1
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Gandalf");
  } else if (
    seedString[1] == 2
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Turu");
  } else if (
    seedString[1] == 3
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Nefesto");
  } else if (
    seedString[1] == 4
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Blackao");
  } else if (
    seedString[1] == 5
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Sr. Antonio");
  } else if (
    seedString[1] == 6
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Pedro");
  } else if (
    seedString[1] == 7
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Diuks Bay");
  } else if (
    seedString[1] == 8
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Twelve");
  } else if (
    seedString[1] == 9
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Junks");
  } else if (
    seedString[1] == 0
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Murillo");
  }
  // else if
  //     (
  //     // seedString[0] == 1  &&
  //     seedString[1]
  //     )
  //     {return integrante = 'Curtas'
  // } else
  //     {return integrante = 'SEM NOME'}
}

//cidade
// THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER
// ******************************************************************
let cidade = "";

function escolherCidade() {
  //
  if (
    // seedString[4] == 0 &&
    seedString[3] == 0
  ) {
    return (cidade = "de Caxias do Sul");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 1
  ) {
    return (cidade = "de Itapira");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 2
  ) {
    return (cidade = "de Ubatuba");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 3
  ) {
    return (cidade = "de Sao Jose Dos Pinhais");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 4
  ) {
    return (cidade = "do Rio de Janeiro");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 5
  ) {
    return (cidade = "de Maringá");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 6
  ) {
    return (cidade = "Porto Alegre");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 7
  ) {
    return (cidade = "da Lapa");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 8
  ) {
    return (cidade = "de Jaraguá");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 9
  ) {
    return (cidade = "de Santo André");
  }
}
//CARGO
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE A ROLE

export function triggerChuvaMonark() {
  boss.treme(true);

  let trovaoAu = ["trovao.mp3", 0.2];

  setTimeout(function () {
    snd(trovaoAu);
    boss.treme(false);

    //novo
    for (let i = 0; i < 8; i++) {
      moverCartaMonark(1,inv);
    }

    for (let i = 0; i < 6; i++) {
      if (gerarNumero(1, 4) == 1) {
        moverCartaMonark(1,mao)
      }
    }
    selectHandCard();
    
  }, gerarNumero(300, 4500));
}

let probMonarkNormal = () => seedString[14] >= 4 && seedString[13] == 7;

let probMonark;

probMonark = () => probMonarkNormal();

let cargo = "";

export function escolherCargo(x) {
  if (x) {
    start();
    seedString = seedObj._seedString;
  }

  //
  if (
    seedString[11] == 9 &&
    seedString[12] == 9 &&
    seedString[13] == 9 &&
    seedString[8] > 4
  ) {
    cargo = "carta-premiomarino";


  } 
  else if (
    
    seedString[11] == 1 
   && seedString[12] == 8
 
   
  
    
  ) {
    cargo = "carta-primeminister";




  } 
  
  else if (
    seedString[12] == 7
   && seedString[11] >= 5
    ) {
    cargo = "carta-ministro";


  } else if (seedString[12] == 6
    && seedString[11] >= 3) {
    cargo = "carta-lord";
  } 
  

  else if (
    seedString[13] >= 8
    && seedString[12] > 2
    ) {
    cargo = "carta-nobre";



  } 
  
  else if (
    seedString[13] >= 7
    ) {
    cargo = "carta-gentleman";
  } 
  
  else if (
    seedString[11] > 4 
   && seedString[12] > 1
    
    
    ) {
    cargo = "carta-people";
  } else {
    cargo = "carta-semcargo";
  }

  return cargo;
}

let variante = "";

export function escolherVariante(x) {
  if (x) {
    escolherCargo(true);
  }

  let cartasQueNaoTemVariante =
    cargo != "carta-monark" &&
    cargo != "carta-semcargo" &&
    cargo != "carta-people" &&
    cargo != "carta-people";
  variante = "";
  if (cartasQueNaoTemVariante) {
    if (seedString[14] == 4) {
      if (seedString[5] == 9 && seedString[6] == 0) {
        return (variante = "farmacêutico");
      } else if (seedString[5] == 9 && seedString[6] == 1) {
        return (variante = "bão");
      } else if (seedString[5] == 9 && seedString[6] == 2) {
        return (variante = "apenas");
      } else if (seedString[5] == 9 && seedString[6] == 3) {
        return (variante = "fonte");
      } else if (seedString[5] == 9 && seedString[6] == 4) {
        return (variante = "ixqueiro");
      } else if (seedString[5] == 9 && seedString[6] == 5) {
        return (variante = "abalo");
      } else if (seedString[5] == 9 && seedString[6] == 6) {
        return (variante = "grito");
      } else if (seedString[5] == 9 && seedString[6] == 7) {
        return (variante = "dia");
      } else if (seedString[5] == 9 && seedString[6] == 8) {
        return (variante = "quimico");
      } else if (seedString[5] == 9 && seedString[6] == 9) {
        return (variante = "pêra");
      } else {
        // return (variante = "");
      }
    }
  }
}

//RNG DOS PONTES DE PODER

export let pontoPoderSemCargo = () =>
  Math.floor((parseInt(seedString[5]) + parseInt(seedString[0])) / 2 + 1); // 1 a 10

  export let pontoPoderPeople = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[12])) / 2 + 11); // 11 a 20

  export let pontoPoderGentleman = () =>
  Math.floor((parseInt(seedString[12]) + parseInt(seedString[0])) / 2 + 21); // 21 a 30

let pontoPoderMonark = () => 0;

export let pontoPoderNobre = () =>
  Math.floor((parseInt(seedString[11]) + parseInt(seedString[10])) / 2 + 31); // 31 a 40

  export let pontoPoderLord = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 61); // 51 a 60

  export let pontoPoderMinistro = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 71); //61 a 70

  export let pontoPoderPrimeMinister = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[10])) / 2 + 121); // 81 a 90

  export let pontoPoderRNGPremioMarino = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[5])) / 2 + 421); // 121 a 130

let pontoVarianteValor = 0;
// function pontoVariante() {
//   if (variante != "") {
//     return (pontoVarianteValor = Math.floor(
//       parseInt(seedString[0]) + parseInt(seedString[1]) + 25 * 5 // 125 a 215
//     ));
//   } else {
//     return (pontoVarianteValor = 0);
//   }
// }
function pontoVariante() {
  if (variante != "") {
    return (pontoVarianteValor = 4);
  } else {
    return (pontoVarianteValor = 1);
  }
}

let poder = {};

export function escolherPoder(x, y) {
  
 if(x && y){
  cargo = x
  pontoVarianteValor = y
 }

  if (cargo == "carta-semcargo") {
    return (poder = {
      _ataque: pontoPoderSemCargo() * pontoVarianteValor,
    });
  } else if (cargo == "carta-people") {
    return (poder = {
      _ataque: pontoPoderPeople() * pontoVarianteValor,
    });
  } else if (cargo == "carta-gentleman") {
    return (poder = {
      _ataque: pontoPoderGentleman() * pontoVarianteValor,
    });
  } else if (cargo == "carta-monark") {
    return (poder = {
      _ataque: pontoPoderMonark(),
    });
  } else if (cargo == "carta-nobre") {
    return (poder = {
      _ataque: pontoPoderNobre() * pontoVarianteValor,
    });
  } else if (cargo == "carta-lord") {
    return (poder = {
      _ataque: pontoPoderLord() * pontoVarianteValor,
    });
  } else if (cargo == "carta-ministro") {
    return (poder = {
      _ataque: pontoPoderMinistro() * pontoVarianteValor,
    });
  } else if (cargo == "carta-primeminister") {
    return (poder = {
      _ataque: pontoPoderPrimeMinister() * pontoVarianteValor,
    });
  } else if (cargo == "carta-premiomarino") {
    return (poder = {
      _ataque: pontoPoderRNGPremioMarino() * pontoVarianteValor,
    });
  }
}

//************************************************ */

function fabricaDeCarta(
  integrante,
  cidade,
  cargo,
  poder,
  variante,
  especial,
  seedObj
) {
  return {
    _integrante: integrante,
    _cidade: cidade,
    _cargo: cargo,
    _poder: poder,
    _variante: variante,
    _especial: especial,
    _seedobj: seedObj,
  };
}

//*********************************************************** */
// escolherIntegrante()
// escolherCidade()
// escolherCargo()
// escolherPoder()

////D O M
let main = document.getElementById("main");
let teste = document.getElementById("test");
let packP = document.getElementById("pack");
const semCarta =
  '<div id="carta">' +
  '<div class="nameAndCidadeWrapper">' +
  '<p class="nome"></p>' +
  '<div class="variante"></div>' +
  '<p class="cidade"></p>' +
  '<div class="especial"></div>' +
  "</div>" +
  '<div class="retrato"></div>' +
  '<p class="cargo"></p>' +
  '<div class="poder">' +
  '<p class="ataque"></p>' +
  '<p class="novoAtaque"></p>' +
  '<button class="action">PRESS</button>' +
  "</div>";

let button = document.getElementById("btn");
let inv = document.getElementById("inv");
let arenaP = document.querySelector(".arena");
let nomeP = document.querySelector(".nome");
// let nomeP = document.className('nome')
let cidadeP = document.querySelector(".cidade");
let retratoP = document.querySelector(".retrato");
let cargoP = document.querySelector(".cargo");
let varianteP = document.querySelector(".variante");
let actionP = document.querySelector(".action");
let novoAtaquerP = document.querySelector(".novoAtaque");
let placarP = document.getElementById("placarDano");
let placarWrapP = document.getElementById("placarDanoWrap");

let efeito1P = document.getElementById("efeito1");
let mao = document.getElementById("mao");
let moneyP = document.getElementById("money");
let vendasP = document.getElementById("vendas");
let bossRoomP = document.getElementById("bossRoom");
let hpPlayerP = document.getElementById("healthPlayer");
let hpPlayerEmojiP = document.getElementById("healthPlayerEmoji");
let ammoP = document.getElementById("ammo");
let hpPlayerWrapP = document.getElementById("healthPlayerWrap");
let endP = document.getElementById("end");

let mao0 = mao.children[0];
let mao1 = mao.children[1];
let mao2 = mao.children[2];
let mao3 = mao.children[3];


function zerarMoney() {
  moneyP.textContent = 0;
}
zerarMoney();

function debug() {
  moneyP.textContent = 9999;
  numCartas.set(9999);
  hpPlayer.set(100);
  ammo.set(100);
  vendas.update(9999)
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyM") {
    debug();
  }
});

//div poder
let ataqueP = document.querySelector(".ataque");

let seedP = document.querySelector(".seed");
let seloP = document.getElementById("selo");
//carta
let cartaP = packP.children[0];
// input da seed cliente
// let coloqueSuaSeed = document.getElementById('seed').value
//wrap
//input
let getSeed = document.getElementById("getseed");
//pagin procura seed
let novaCarta;






function colocarInfoNoWrap(a) {
  if (a) {
    novaCarta = a;
    rodadas--;
  } else {
    novaCarta = fabricaDeCarta(
      integrante,
      cidade,
      cargo,
      poder,
      variante,
      especial,
      seedObj
    );
  }

  //LIMPAR A CARTA

  cartaP.removeAttribute("style");
  nomeP.removeAttribute("style");
  nomeP.className = "nome";
  varianteP.removeAttribute("style");
  seloP.removeAttribute("style");
  varianteP.innerHTML = "";
  cartaParaMover.classList.remove("voar");
  cartaParaMover.classList.remove("monark");
  actionP.style.visibility = "hidden";

  cidadeP.removeAttribute("style");
  retratoP.removeAttribute("style");
  //CARGO
  cargoP.removeAttribute("style");
  cargoP.innerHTML = "";

  ataqueP.removeAttribute("style");
  novoAtaquerP.removeAttribute("style");

  seedP.removeAttribute("style");

  ataqueP.innerHTML = "";
  novoAtaquerP.innerHTML = "";
  novoAtaquerP.style.visibility = "hidden";

  seedP.style.color = "";

  cartaParaMover.children[0].children[0].classList.remove("critico");
  cartaParaMover.children[0].children[2].classList.remove("critico");
  cartaParaMover.children[3].children[0].classList.remove("critico");
  cartaParaMover.classList.remove("critico");
  varianteP.classList.remove("critico");
  cartaParaMover.children[3].children[1].classList.remove("critico");

  cartaParaMover.children[0].children[0].style.color = "";
  cartaParaMover.children[0].children[2].style.color = "";
  cartaParaMover.children[0].children[1].style.fontWeight = "";

  //DOM

  nomeP.innerHTML = novaCarta._integrante.toUpperCase();

  cidadeP.innerHTML = "&nbsp;" + novaCarta._cidade;

  ataqueP.innerHTML = novaCarta._poder._ataque + "&#9889;";

  novoAtaquerP.innerHTML = 0;

  varianteP.innerHTML = novaCarta._variante;
  // especialP.innerHTML = novaCarta._especial;
  seedP.innerHTML = "&nbsp;" + seedString;

  if (seedObj._isMarket) {
    seloP.innerHTML = "💰";
  } else if (seedObj._isPutByPlayer) {
    seloP.innerHTML = "💬";
  } else {
    seloP.innerHTML = "🎲";
  }

  cartaP.id = novaCarta._cargo;
  if (novaCarta._cargo == "carta-monark") {
    cartaP.dataset.dmgboss = "false";
    cartaP.dataset.canbedeleted = "false";
  } else {
    cartaP.dataset.dmgboss = "true";
    cartaP.dataset.canbedeleted = "true";
  }

  retratoP.style.display = "block";

  //colocar retrato
  if (true) {
    if (novaCarta._integrante === "Turu") {
      retratoP.style.backgroundImage = "url('pics/turu.webp')";
    } else if (novaCarta._integrante === "Blackao") {
      retratoP.style.backgroundImage = "url('pics/blackao.jpeg')";
    } else if (novaCarta._integrante === "Gandalf") {
      retratoP.style.backgroundImage = "url('pics/gandarfu.png')";
    } else if (novaCarta._integrante === "Murillo") {
      retratoP.style.backgroundImage = "url('pics/murilo.jpeg')";
    } else if (novaCarta._integrante === "Pedro") {
      retratoP.style.backgroundImage = "url('pics/pedro.png')";
    } else if (novaCarta._integrante === "Nefesto") {
      retratoP.style.backgroundImage = "url('pics/nefesto.png')";
    } else if (novaCarta._integrante === "Sr. Antonio") {
      retratoP.style.backgroundImage = "url('pics/antonio.png')";
    } else if (novaCarta._integrante === "Diuks Bay") {
      retratoP.style.backgroundImage = "url('pics/cesarino.png')";
      retratoP.style.backgroundSize = "100% 100%";
    } else if (novaCarta._integrante === "Junks") {
      retratoP.style.backgroundImage = "url('pics/junks.jpeg')";
    } else if (novaCarta._integrante === "Twelve") {
      retratoP.style.backgroundImage = "url('pics/twelve.png')";
    } else {
      retratoP.style.backgroundImage = "";
    }
  }

  //colocar cargo
  if (true) {
    if (novaCarta._cargo === "carta-semcargo") {
      cargoP.innerHTML = "&nbsp;" + "sem cargo".toUpperCase();
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-people") {
      cargoP.innerHTML = "&nbsp;" + "people".toUpperCase();
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-gentleman") {
      cargoP.innerHTML = "&nbsp;" + "gentleman".toUpperCase();
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-ministro") {
      cargoP.innerHTML = "&nbsp;" + "ministro".toUpperCase() + "👨‍⚖️";
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-lord") {
      cargoP.innerHTML = "&nbsp;" + "lord".toUpperCase() + "👑";
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-nobre") {
      cargoP.innerHTML = "&nbsp;" + "nobre".toUpperCase() + "💙";
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-primeminister") {
      cargoP.innerHTML = "&nbsp;" + "prime minister".toUpperCase() + "💪";
      cargoP.style.backgroundImage = "pics/wrapPremioMarino.webp";
      retratoP.style.border = "";
      seedP.style.color = "white";
    } else if (novaCarta._cargo === "carta-premiomarino") {
      cargoP.innerHTML =
        "&nbsp;" + "&#127942; premio marino &#127942;".toUpperCase();
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-monark") {
      cargoP.innerHTML = "&nbsp;" + "monark" + "&#128169;";
      retratoP.style.border = "";
    }
    // else if (novaCarta._cargo === "abelha") {
    //   cargoP.innerHTML = "ABELHA";
    // } else if (novaCarta._cargo === "comunista") {
    //   cargoP.innerHTML = "CAMARADA BLACKAO";
    //   retratoP.style.border = "2px solid RED";
    // } else if (novaCarta._cargo === "premiomonark") {
    //   cargoP.innerHTML = "PREMIO MONARK";
    //   retratoP.style.border = "2px solid black";
    // } else {
    //   true;
    // }
  }

  //CARTAS VARIANTES
  if (novaCarta._variante != "") {
    function fundoVariante(foto) {
      return (
        "linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.3),\n      rgba(12, 3, 30, 0.8)\n    ),\n" +
        foto
      );
    }

    // actionP.style.visibility = 'hidden'
    varianteP.style.fontFamily = "Righteous";
    varianteP.style.textShadow = "-2px 5px 5px #010101";
    varianteP.style.fontSize = "1.1em";

    if (novaCarta._variante === "farmacêutico") {
      varianteP.innerHTML = "💊" + novaCarta._variante.toUpperCase() + "💊";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteGandalf.gif")'
      );
      cartaP.style.border = "3px white solid";
      varianteP.style.fontSize = "1em";
    } else if (novaCarta._variante === "bão") {
      varianteP.innerHTML =
        "👌 " + "AÔPA, " + novaCarta._variante.toUpperCase() + " 👌";
      cartaP.style.color = "orange";

      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteTuru.gif")'
      );
      cartaP.style.border = "3px orange solid";
    } else if (novaCarta._variante === "apenas") {
      varianteP.innerHTML = "🤤 " + novaCarta._variante.toUpperCase() + " 🤤";
      cartaP.style.color = "wheat";
      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteNefesto.gif")'
      );
      cartaP.style.border = "3px wheat solid";
    } else if (novaCarta._variante === "fonte") {
      varianteP.innerHTML =
        "😖" + "COMO MUDA A " + novaCarta._variante.toUpperCase() + "😖";
      cartaP.style.color = "  white";

      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteBlackao.gif")'
      );
      cartaP.style.border = "3px white solid";
      varianteP.style.fontSize = "0.86em";
      // varianteP.style.textShadow = '-2px 5px 5px #ffffff'
    } else if (novaCarta._variante === "ixqueiro") {
      varianteP.innerHTML = "🍲 NEFEIIXTUU 🍲";
      cartaP.style.color = " #d8fbb5";
      varianteP.style.fontSize = "1em";

      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteAntonio.gif")'
      );
      cartaP.style.border = "3px #d8fbb5 solid";
      varianteP.style.fontSize = "0.86em";
    } else if (novaCarta._variante === "abalo") {
      varianteP.innerHTML =
        "🎉" + "UM " + novaCarta._variante.toUpperCase() + "! 🎉";
      cartaP.style.color = "  #fbb5f2 ";
      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/variantePedro.gif")'
      );
      cartaP.style.border = "3px #fbb5f2 solid";
    } else if (novaCarta._variante === "grito") {
      varianteP.innerHTML = "👍É ISSO AÍ👍";
      cartaP.style.color = "   #42b028   ";

      // cartaP.style.backgroundImage = 'url("pics/variantes/varianteCurtas.gif")'
      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteCurtas.gif")'
      );
      cartaP.style.border = "3px  #25a406  solid";
      varianteP.style.fontSize = "0.86em";
    } else if (novaCarta._variante === "dia") {
      varianteP.innerHTML = "⛪ TODO DIA ISSO ⛪";
      cartaP.style.color = "   #27ebe2     ";

      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteTwelve.gif")'
      );
      cartaP.style.border = "3px  #27ebe2   solid";
      varianteP.style.fontSize = "0.99em";
    } else if (novaCarta._variante === "quimico") {
      varianteP.innerHTML = "🛑 PARA DE FALAR 🛑";
      varianteP.style.fontSize = "0.86em";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteJunks.gif")'
      );
      cartaP.style.border = "3px  white   solid";
    } else if (novaCarta._variante === "pêra") {
      varianteP.innerHTML = "🥛 LEITE COM PÊRA 🍐";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage = fundoVariante(
        'url("pics/variantes/varianteMurillo.gif")'
      );
      cartaP.style.border = "3px  white   solid";
      varianteP.style.fontSize = "0.90em";
    } else {
    }
  }
  packP.replaceChild(cartaP, packP.children[0]);

  
}
export let rodadas = 0;
export let rodadaSpawnBoss = 10;
export let efeitos = {
  status: false,
  css: {
    nome: "",
    imagem: "",
  },
  rodadas: 0,
};

let efeitoVazio = {
  status: false,
  css: {
    nome: "",
    imagem: "",
  },
  rodadas: 0,
};

function colocarEfeito() {
  efeito1P.style.backgroundImage = efeitos.css.imagem;
  efeito1P.innerHTML = efeitos.rodadas;

  if (efeitos.rodadas > 0) {
    efeitos.rodadas--;
  } else {
    efeitos = efeitoVazio;
    audioEffectE.pause();
  }
}

//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */

function getSeedChecked() {
  return document.activeElement.id == "getseed";
}



for (let z = 1; z < 5; z++) {
  document.addEventListener("keydown", (event) => {
    if (event.code == "Digit" + z) {
      if (!getSeedChecked()) {
        moverToDeckNum(event);
      }
    }
  });
}


// });

let cartaParaMover = document.getElementById("pack").firstElementChild;
let copyCard = cartaParaMover.cloneNode(true);
let seedCopyCard;
let cartaNotEspecial;
let cartaNotMonark;
let PodeMover;
let taTudoOk;

let seed1;
let seed2;
let seed3;
let seed4;
let seed5;
let seed6;
let seedDiferente;
let botao;

let jaMovi = false;

function isJaMovi() {
  if (seedObj._isPutByPlayer && !jaMovi) {
    jaMovi = true;
    return false;
  } else if (seedObj._isPutByPlayer && jaMovi) {
    return true;
  } else if (!seedObj._isPutByPlayer) {
    return false;
  }
}

function verificarCartaParaMover() {
  seedCopyCard = cartaParaMover.children[4];

  cartaNotEspecial = especial.nome == "";
  cartaNotMonark = copyCard.id != "carta-monark";

  PodeMover =
    (!seedObj._isSeedReal && cartaNotEspecial && cartaNotMonark) ||
    (seedObj._isSeedReal && !seedObj._isPutByPlayer) ||
    seedObj._isMarket;

  // taTudoOk = PodeMover && !isJaMovi() && totalClicks > 0;
  taTudoOk = true;

  botao = copyCard.children[3].children[2];
  seed1 = inv.children[0].children[4];
  seed2 = inv.children[1].children[4];
  seed3 = inv.children[2].children[4];
  seed4 = inv.children[3].children[4];
  seed5 = inv.children[4].children[4];
  seed6 = inv.children[5].children[4];

  seedDiferente = true;
  // seedDiferente =
  //   seedCopyCard.textContent != seed1.textContent &&
  //   seedCopyCard.textContent != seed2.textContent &&
  //   seedCopyCard.textContent != seed3.textContent &&
  //   seedCopyCard.textContent != seed4.textContent;
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyB") {
    if (!getSeedChecked()) {
      moverToCartaMao();
    }
  }
});

let cartasComBotao = [
  "especial-tenica",
  "carta-speaker",
  "especial-click",
  "-click",
  "comunista",
  "premiomonark",
  "spy",
  "estoico",
  "lucio",
  "jhin",
  "dva",
];

for (let m = 0; m < 4; m++) {
  let slotMao = "mao" + m;
  document.getElementById(slotMao).addEventListener("click", function () {
    moveToMao(m);
  });
}

export function moveToMao(i) {
  if (copyCard.id != "carta-monark" && copyCard.id != "carta") {
    if (numCartas.total <= 1 && packP.children[0].id != "carta") {


      mao.replaceChild(copyCard, mao.children[i]);
      


      


      packP.innerHTML = semCarta;
      numCartas.set(0);




    } else if (packP.children[0].id != "carta") {
      mao.replaceChild(copyCard, mao.children[i]);
      maoObj[i] = novaCarta
      


      tudo();
    }
    selectHandCard();
  }
}

function moverToCartaMao() {
  for (let i = 0; i < 4; i++) {
    if (mao.children[i].id == "mao" + i) {
      moveToMao(i);
      break;
    } else {
    }
  }
}
let chosenCard = 0;

export function selectHandCard() {
  for (let k = 0; k < 4; k++) {
    let mao = () => document.getElementById("mao");

    let slotMao = () => mao().children[k].id != "mao" + k;
    let retrato = () => mao().children[k].children[1];
    let carta = retrato().offsetParent;
    let creeperCard = carta.id == "creeper";

    // reset()

    if (slotMao()) {
      retrato().addEventListener("click", function (e) {
        function naoFoi() {
          return carta.dataset.inv == undefined;
        }
        if (naoFoi()) {
          function lowerCard() {
            chosenCard.style.bottom = "0px";
            //
          }

          function raiseCard() {
            chosenCard.style.bottom = "66px";

            document.addEventListener("keydown", (event) => {
              if (event.code == "Space") {
                moverToDeckSpace();
              }
            });
          }

          if (chosenCard != 0) {
            lowerCard();
          }

          chosenCard = retrato().offsetParent;
          chosenCardObj = maoObj[k]
          

          raiseCard();
        }

        // setTimeout(function(){
        //   if(chosenCard !=0){
        //     lowerCard()
        //   }
        // }, 10000)
      });

      retrato().addEventListener("contextmenu", function () {
        if (chosenCard != 0) {
          chosenCard.style.bottom = "0px";
          chosenCard = 0;
          chosenCardObj = emptyObj
        }
      });
    } else {
    }
  }
}

for (let d = 1; d < 7; d++) {
  let deck = "empty" + d;

  document.getElementById(deck).addEventListener("click", moverToDeck);
}

function moverToDeck(e) {
  let slot = e.target;

  let isEmpty =
    slot.id == "empty1" ||
    slot.id == "empty2" ||
    slot.id == "empty3" ||
    slot.id == "empty4" ||
    slot.id == "empty5" ||
    slot.id == "empty6";
  let isEmpty2 =
    slot.className == "nome1" ||
    slot.className == "nome2" ||
    slot.className == "nome3" ||
    slot.className == "nome4" ||
    slot.className == "nome5" ||
    slot.className == "nome6";

  //

  if (
    (chosenCard != 0 && (isEmpty || isEmpty2)) ||
    (chosenCard != 0 && chosenCard.id == "premiomonark")
  ) {
    if (cartasComBotao.some((el) => chosenCard.id.includes(el))) {
      let botao = chosenCard.children[3].children[2];
      botao.style.visibility = "visible";
    }

    elimCardMao(chosenCard)


    abelha();
    // inv.removeChild(slot)
    chosenCard.dataset.inv = "true";

    // if (slot.className) {
    //   inv.replaceChild(chosenCard, slot.parentElement.parentElement);
    //   invObj[slot.className[5]] = chosenCardObj
    // } 
    
      inv.replaceChild(chosenCard, slot);
      invObj[(slot.id[5]) - 1] = chosenCardObj
    

    criarBtn();

    chosenCard.style.bottom = "0px";

    chosenCard = 0;
    chosenCardObj = emptyObj
  }
}

function moverToDeckNum(e) {


  if(true){
    return false
  }

  let key1 = e.code == "Digit1";
  let key2 = e.code == "Digit2";
  let key3 = e.code == "Digit3";
  let key4 = e.code == "Digit4";

  let inv0 = inv.children[0];
  let inv1 = inv.children[1];
  let inv2 = inv.children[2];
  let inv3 = inv.children[3];
  let inv4 = inv.children[4];
  let inv5 = inv.children[5];

  if (chosenCard != 0) {
    function emptyMao() {

      if (chosenCard == mao.children[0]) {
        mao.replaceChild(mao0, chosenCard);
      } else if (chosenCard == mao.children[1]) {
        mao.replaceChild(mao1, chosenCard);
      } else if (chosenCard == mao.children[2]) {
        mao.replaceChild(mao2, chosenCard);
      } else if (chosenCard == mao.children[3]) {
        mao.replaceChild(mao3, chosenCard);
      } 
      


      abelha();
    }

    if (key1 && inv0.id == "empty1") {
      emptyMao();
      inv.replaceChild(chosenCard, inv0);
    } else if (key2 && inv1.id == "empty2") {
      emptyMao();
      inv.replaceChild(chosenCard, inv1);
    } else if (key3 && inv2.id == "empty3") {
      emptyMao();
      inv.replaceChild(chosenCard, inv2);
    } else if (key4 && inv3.id == "empty4") {
      emptyMao();
      inv.replaceChild(chosenCard, inv3);
    } else {
      return false;
    }

    chosenCard.dataset.inv = "true";

    if (cartasComBotao.some((el) => chosenCard.id.includes(el))) {
      let botao = chosenCard.children[3].children[2];
      botao.style.visibility = "visible";
    }

    criarBtn();

    chosenCard.style.bottom = "0px";

    chosenCard = 0;
  }
}

function moverToDeckSpace() {
  for (let i = 0; i < 6; i++) {
    let cartaVazia = inv.children[i].dataset.card == "empty";
    let carta = inv.children[i];

  

    if (chosenCard != 0 && cartaVazia) {

      elimCardMao(chosenCard)
      abelha();
      inv.replaceChild(chosenCard, carta);
      invObj[i] = chosenCardObj
      
      
      
      
      

      chosenCard.dataset.inv = "true";
      
      if (cartasComBotao.some((el) => chosenCard.id.includes(el))) {
        let botao = chosenCard.children[3].children[2];
        botao.style.visibility = "visible";
      }
      
      criarBtn();
      
      chosenCard.style.bottom = "0px";
      
      chosenCard = 0;
      chosenCardObj = emptyObj
    }
  }
}

let copyCardSeed;
let copyCardName;

function killTank(x) {
  let tank = inv.children[x];
  let retrato = tank.children[1];
  let nome = tank.children[0].children[0];
  let money = tank.children[2];
  let HP = tank.children[3].children[1];

  tank.id = "tf2Money";
  tank.dataset.tankdead = "true";
  retrato.style.backgroundImage = "url('pics/tankDeadRetrato.jpg')";
  nome.textContent = "MONEY";
  HP.textContent = "";
  money.style.visibility = "visible";
}

let hit = ["hit.mp3"];

function efeitoDano(carta) {
  let heart = carta.children[3].children[1];

  heart.style.backgroundColor = "red";
  heart.style.border = "3px solid black";
  snd(hit);

  setTimeout(function () {
    heart.style.backgroundColor = "";
    heart.style.border = "";
  }, 300);
}

function moverCartaMonark(x,place) {


  let monarkObj = {
    monark: 'monark'
  }

  if (x) {
    if (gerarNumero(1, x) != 1) {
      
      return false;
    }
  }

  if (!boss) {
    return false;
  }

  start();

  let monarkNome = escolherIntegrante()
  let monarkFoto 


  if (monarkNome === "Turu") {
    monarkFoto = "url('pics/turu.webp')";
  } else if (monarkNome == "Blackao") {
    monarkFoto = "url('pics/blackao.jpeg')";
  } else if (monarkNome == "Gandalf") {
    monarkFoto = "url('pics/gandarfu.png')";
  } else if (monarkNome == "Murillo") {
    monarkFoto = "url('pics/murilo.jpeg')";
  } else if (monarkNome == "Pedro") {
    monarkFoto = "url('pics/pedro.png')";
  } else if (monarkNome == "Nefesto") {
    monarkFoto = "url('pics/nefesto.png')";
  } else if (monarkNome == "Sr. Antonio") {
    monarkFoto = "url('pics/antonio.png')";
  } else if (monarkNome == "Diuks Bay") {
    monarkFoto = "url('pics/cesarino.png')";
    retratoP.style.backgroundSize = "100% 100%";
  } else if (monarkNome == "Junks") {
    monarkFoto = "url('pics/junks.jpeg')";
  } else if (monarkNome == "Twelve") {
    monarkFoto = "url('pics/twelve.png')";
  } else {
    monarkFoto = "";
  }


  let monarkBluePrint =
    '<div id="carta-monark" data-card="normal" data-dmgboss="false" data-canbedeleted="false" data-hashp="uber"  class="monark">' +
    '<div class="nameAndCidadeWrapper">' +
    '<p class="nome">' +
    monarkNome.toUpperCase() +
    "</p>" +
    '<div class="variante"></div>' +
    '<p class="cidade">' +
    escolherCidade() +
    "</p>" +
    '<div class="especial"></div>' +
    "</div>" +
    '<div class="retrato" style="display: block; background-image: ' + 
    monarkFoto + 
    '"></div>' +
    '<p class="cargo">&nbsp;monark💩</p>' +
    '<div class="poder">' +
    '<p class="ataque">0⚡</p>' +
    '<p class="novoAtaque" style="visibility: hidden;">0</p>' +
    '<button class="action" style="visibility: hidden;">PRESS</button>' +
    "</div>" +
    '<p class="seed"></p>' +
    "</div>";

  teste.innerHTML = monarkBluePrint;

  // let slotEscolhido
  let slotEscolhido;
  let left;
  let right;
  let num;

  // FUNCAO QUE ESCOLHE QUAL SLOT DO INVENTARIO IRA ATACAR
  escolherSlot();

  function escolherSlot() {

    if(place == inv){

      num = gerarNumero(0, 5);
    } else {
      num = gerarNumero(0, 3)
    }
    slotEscolhido = place.children[num];
    left = slotEscolhido.previousElementSibling;
    right = slotEscolhido.nextElementSibling;

    return num;
  }

  // SE TIVER ESTOICO
  if (efeitos.css.nome == "estoico") {
    snd(monarkAu);
    
    teste.children[0].className = "voar";

    //SE A CARTA TEM HP
  } else if (slotEscolhido.dataset.hashp == "true") {
    snd(monarkAu);
    let hp = slotEscolhido.children[3].children[1];

    dmgCard(1, slotEscolhido);

    if (parseInt(hp.textContent) <= 0 ) {
      place.replaceChild(teste.children[0],place.children[num])
      invObj[num] = monarkObj
    }

    hpPlayer.remove(3);

    //INTERACOES PERSONALIZADAS COM CARTA
  } else if (slotEscolhido.dataset.hashp == "custom") {
    snd(monarkAu);
    if (slotEscolhido.id == "creeper") {
      creeper(true);
      invObj[num] = monarkObj
      
    }

    hpPlayer.remove(3);
  } else if (slotEscolhido.dataset.hashp == "uber") {
    
    return false;
  } else {
    healMonarkBoss(50);
    hpPlayer.remove(3);

    snd(monarkAu);

    if (slotEscolhido.id == "spy") {
      let deathSpyAu = ["deathSpy" + gerarNumero(1, 3) + ".mp3", 0.3];
      snd(deathSpyAu);
    }

    //atacar cartas hp do lado
    if (left) {
      dmgCard(1, left);
    }
    if (right) {
      dmgCard(1, right);
    }

    place.replaceChild(teste.children[0], slotEscolhido);
    invObj[num] = monarkObj
  }
}

let morte = ["morte.mp3"];
let monarkAu = ["monark.mp3"];

function critico() {
  //nome
  // seedString
  //
  let corDoNome = cartaParaMover.children[0].children[0];
  let corDaCidade = cartaParaMover.children[0].children[2];

  cartaParaMover.children[0].children[1].style.color = "";
  //cidade
  // cartaParaMover.children[0].children[0].style.color = "";
  //cidade negrito
  cartaParaMover.children[0].children[1].style.fontWeight = "";
  cartaParaMover.classList.remove("critico");
  //PODER
  let poderTremer = cartaParaMover.children[3].children[0];

  function colocarCritico() {
    corDaCidade.classList.add("critico");
    corDoNome.classList.add("critico");
    cartaParaMover.children[0].children[1].style.fontWeight = "bold";
    poderTremer.classList.add("critico");
    poderTremer.style.fontWeight = "bold";
    poderTremer.innerHTML = parseInt(poderTremer.textContent) * 2 + "⚡";
  }

  function colocarUltraCritico() {
    cartaParaMover.classList.add("critico");
    varianteP.classList.add("critico");

    poderTremer.classList.add("critico");
    poderTremer.style.fontWeight = "bold";
    poderTremer.innerHTML = parseInt(poderTremer.textContent) * 3 + "⚡";
  }

  //gandalf
  if (
    cartaParaMover.id != "carta-monark" &&
    cartaParaMover.id != "carta-speaker"
  ) {
    if (seedString[1] == "1" && seedString[3] == "0") {
      colocarCritico();

      if (variante == "farmacêutico") {
        colocarUltraCritico();
      }
    }

    //turu
    if (seedString[1] == "2" && seedString[3] == "1") {
      colocarCritico();

      if (variante == "bão") {
        colocarUltraCritico();
      }
    }
    //nefesto
    if (seedString[1] == "3" && seedString[3] == "2") {
      colocarCritico();

      if (variante == "apenas") {
        colocarUltraCritico();
      }
    }
    //blackao
    if (seedString[1] == "4" && seedString[3] == "3") {
      colocarCritico();

      if (variante == "fonte") {
        colocarUltraCritico();
      }
    }
    //antonio
    if (seedString[1] == "5" && seedString[3] == "4") {
      colocarCritico();

      if (variante == "ixqueiro") {
        colocarUltraCritico();
      }
    }
    //pedro
    if (seedString[1] == "6" && seedString[3] == "5") {
      colocarCritico();

      if (variante == "abalo") {
        colocarUltraCritico();
      }
    }
    //cesarino
    if (seedString[1] == "7" && seedString[3] == "6") {
      colocarCritico();

      if (variante == "grito") {
        colocarUltraCritico();
      }
    }
    //twelve
    if (seedString[1] == "8" && seedString[3] == "7") {
      colocarCritico();

      if (variante == "dia") {
        colocarUltraCritico();
      }
    }
    //junks

    //

    if (seedString[1] == "9" && seedString[3] == "8") {
      colocarCritico();

      if (variante == "quimico") {
        colocarUltraCritico();
      }
    }
    //murilo
    if (seedString[1] == "0" && seedString[3] == "9") {
      colocarCritico();

      if (variante == "pêra") {
        colocarUltraCritico();
      }
    }
  }
  // getSeed.setAttribute('class', 'customOff')
}

// //////////////////////////////////////////////
// PODERES DECK
//
//
////////////////////////////////////////////////

function criarBtn() {
  //

  for (let i = 0; i < 6; i++) {
    //se i nao for vazio
    if (inv.children[i].id != "empty") {
      // e se tiver botao na carta
      if (
        inv.children[i].children[3].children[2].style.visibility == "visible"
      ) {
        //

        //   PODER speaker
        if (
          inv.children[i].id == "carta-speaker" &&
          inv.children[i].children[0].id != "foi"
        ) {
          inv.children[i].children[3].children[2].addEventListener(
            "click",
            explusarMonark
          );
          inv.children[i].children[0].id = "foi";
          //
        }

        function explusarMonark(e) {
          let varianteSpeaker = e.target.offsetParent;
          let pontoSpeaker = varianteSpeaker.children[3].children[0];
          let retratoVariante = varianteSpeaker.children[1];
          let speakerDorminfo = 'url("pics/speakerDormindo.jpg")';
          let descriptionSpeaker = varianteSpeaker.children[2];
          let hpSpeaker = varianteSpeaker.children[3].children[1];

          let multiplicador;
          let pontoParaDormir;

          function multiSpeaker() {
            multiplicador = gerarNumero(2.0, 2.7, 1);
          }

          multiSpeaker();
          multiSpeakerSono();

          function multiSpeakerSono() {
            pontoParaDormir = gerarNumero(90, 103);
          }

          for (let j = 0; j < 6; j++) {
            //

            if (inv.children[j].id == "carta-monark") {
              if (parseInt(pontoSpeaker.textContent) < pontoParaDormir) {
                pontoSpeaker.textContent =
                  Math.trunc(
                    parseInt(pontoSpeaker.textContent) * multiplicador
                  ) + " ⚡";

                  elimCardInv(inv.children[j])

                let order = ["speaker" + gerarNumero(1, 2) + ".mp3", 0.3];
                snd(order);

                somaPontos();
                break;
              } else {
                retratoVariante.style.backgroundImage = speakerDorminfo;
                pontoSpeaker.innerHTML =
                  parseInt(pontoSpeaker.textContent) + "&#9889;";
                descriptionSpeaker.innerHTML =
                  "durmi kkjk <br> &#128564; &#128564;";
                varianteSpeaker.children[3].children[2].style.visibility =
                  "hidden";
                hpSpeaker.textContent = "5💚";
                hpSpeaker.style.visibility = "visible";

                let speakerSleepAu = ["speakerSleep.mp3"];
                snd(speakerSleepAu);
              }
            }
          }
        }
      }

      // PODER CLICKS
      if (
        inv.children[i].id == "especial-click" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener(
          "click",
          cartaClique
        );
        inv.children[i].children[0].id = "foi";
        //
      }

      if (
        inv.children[i].id == "-click" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener(
          "click",
          cartaMenosclique
        );
        inv.children[i].children[0].id = "foi";
        //
      }

      function cartaClique(e) {
        let varianteClique = e.target.offsetParent;

        numCartas.add(
          parseInt(varianteClique.children[3].children[0].textContent)
        );

        vendas.update(5);

        if (packP.children[0].id == "carta") {
          tudo();
        }

        varianteClique.children[3].children[2].style.visibility = "hidden";
        button.style.backgroundColor = "";
        button.innerHTML = "&#127381; NOVA CARTA &#127381;";
        // arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";


        elimCardInv(varianteClique)


        // if (varianteClique == inv.children[0]) {
        //   inv.replaceChild(empty1, varianteClique);
        // } else if (varianteClique == inv.children[1]) {
        //   inv.replaceChild(empty2, varianteClique);
        // } else if (varianteClique == inv.children[2]) {
        //   inv.replaceChild(empty3, varianteClique);
        // } else if (varianteClique == inv.children[3]) {
        //   inv.replaceChild(empty4, varianteClique);
        // }

      }

      function cartaMenosclique(e) {
        let varianteMenosClique = e.target.offsetParent;

        if (
          numCartas.total >
          parseInt(varianteMenosClique.children[3].children[0].textContent)
        ) {
          numCartas.add(
            parseInt(varianteMenosClique.children[3].children[0].textContent) +
              1
          );

          varianteMenosClique.children[3].children[2].style.visibility =
            "hidden";
          button.style.backgroundColor = "";
          button.innerHTML = "&#127381; NOVA CARTA &#127381;";
          // arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";


          elimCardInv(varianteMenosClique)


          // if (varianteMenosClique == inv.children[0]) {
          //   inv.replaceChild(empty1, varianteMenosClique);
          // } else if (varianteMenosClique == inv.children[1]) {
          //   inv.replaceChild(empty2, varianteMenosClique);
          // } else if (varianteMenosClique == inv.children[2]) {
          //   inv.replaceChild(empty3, varianteMenosClique);
          // } else if (varianteMenosClique == inv.children[3]) {
          //   inv.replaceChild(empty4, varianteMenosClique);
          // }

        }
      }

      // PODER TENICA
      if (
        inv.children[i].id == "especial-tenica" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener(
          "click",
          cartaTenica
        );
        inv.children[i].children[0].id = "foi";
      }

      function cartaTenica(e) {
        let varianteTenica = e.target.offsetParent;
        let botao = varianteTenica.children[3].children[2];
        let energiaTenica = varianteTenica.children[3].children[0];

        for (let j = 0; j < 4; j++) {
          let carta = inv.children[j];
          let energiaCarta = carta.children[3].children[0];

          if (carta.dataset.dmgboss == "true") {
            energiaCarta.textContent =
              parseInt(energiaCarta.textContent) +
              parseInt(energiaTenica.textContent) +
              "⚡";
          }
        }

        for (let j = 0; j < 4; j++) {
          let cartaMao = mao.children[j];
          let energiaCartaMao = cartaMao.children[3].children[0];
          let energiaTenica = varianteTenica.children[3].children[0];

          if (cartaMao.dataset.dmgboss == "true") {
            energiaCartaMao.textContent =
              parseInt(energiaCartaMao.textContent) +
              parseInt(energiaTenica.textContent) +
              "⚡";
          }
        }

        energiaTenica.textContent = parseInt(energiaTenica.textContent) + "⚡";
        varianteTenica.dataset.dmgboss = "true";
        let tenicaAu = ["tenica.mp3"];
        snd(tenicaAu);
        somaPontos();
        botao.style.visibility = "hidden";
      }

      // poder COMUNISTA
      if (
        inv.children[i].id == "comunista" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener(
          "click",
          camarada
        );
        inv.children[i].children[0].id = "foi";
      }

      function camarada(e) {
        let cartasQueOCamaradaNaoGosta = [
          "especial-click",
          "-click",
          "empty1",
          "empty2",
          "empty3",
          "empty4",
          "empty5",
          "empty6",
          "especial-tenica",
          "spy",
          "premiomonark",
          "comunista",
          "abelha",
          "estoico",
          "carta-monark",
          "jhin",
        ];

        let comunista = e.target.offsetParent;
        // comunista.children[3].children[2].style.visibility = "hidden";
        let comunistaAu = ["comuna.mp3", 0.6];

        for (let k = 0; k < 6; k++) {
          if (inv.children[k].id == "carta-speaker") {
            for (let j = 0; j < 6; j++) {
              if (
                inv.children[j].children[0].children[0].textContent !=
                  "NEFESTO" &&
                !cartasQueOCamaradaNaoGosta.some((el) =>
                  inv.children[j].id.includes(el)
                )
              ) {
                comunista.children[3].children[2].style.visibility = "hidden";
                let pontoComunista = comunista.children[3].children[0];

                let pontoEstatal = parseInt(pontoComunista.textContent) / 3;

                //SE FOR BLACKAO, DUPLICA
                if (
                  inv.children[j].children[0].children[0].textContent ==
                  "BLACKAO"
                ) {
                  inv.children[j].children[3].children[0].textContent =
                    parseInt(
                      inv.children[j].children[3].children[0].textContent
                    ) +
                    parseInt(pontoEstatal) * 2 +
                    "☭";
                  inv.children[j].children[2].innerHTML = frasesComuna();
                  inv.children[j].children[2].fontSize = "1em";
                  if (inv.children[j].id != "carta-people") {
                    inv.children[j].children[3].children[0].style.color = "red";
                    inv.children[j].children[2].style.color = "red";
                  }
                  inv.children[j].children[3].children[0].style.fontWeight =
                    "bold";
                  elimCardInv(comunista);
                  somaPontos();
                  //SE NAO FOR movercarta
                } else
                  inv.children[j].children[3].children[0].textContent =
                    parseInt(
                      inv.children[j].children[3].children[0].textContent
                    ) +
                    parseInt(pontoEstatal) +
                    "☭";
                inv.children[j].children[3].children[0].style.fontWeight =
                  "bold";
                if (inv.children[j].id != "carta-people") {
                  inv.children[j].children[3].children[0].style.color = "red";
                }

                elimCardInv(comunista);

                somaPontos();
              }
              if (true) {
                snd(comunistaAu);
              }
            }
          }
        }
      }
      // poder premiomonark
      if (
        inv.children[i].id == "premiomonark" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener(
          "click",
          premiomonark
        );
        inv.children[i].children[0].id = "foi";
      }

      function premiomonark(e) {
        let premioMonark = e.target.offsetParent;
        let premioMonarkBotao = premioMonark.children[3].children[2];

        if (efeitos.status == false) {
          //coloca efeito
          efeitoPremioMonark.rodadas = gerarNumero(10, 15);
          efeitos = efeitoPremioMonark;
          //apaga a carta

          premioMonark.classList.add("vanish");
          premioMonarkBotao.style.visibility = "hidden";

          function eliminarPremioMonark() {
            // premioMonark.remove();


            elimCardInv(premioMonark)


           


            elimCardMao(premioMonark)

           


          }

          setTimeout(eliminarPremioMonark, 10000);

          colocarEfeito();
          let premioMonarkAu = ["premioMonark.mp3", 0.3];
          let premioMonarkElimAu = ["premioMonarkElim.mp3"];

          setTimeout(function () {
            snd(premioMonarkElimAu);
          }, 5000);

          snd(premioMonarkAu);
        }
      }
      //PODER SPY
      if (
        inv.children[i].id == "spy" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener("click", spy);
        inv.children[i].children[0].id = "foi";
      }

      function spy(e) {
        let spy = e.target.offsetParent;

        let spyWatch = spy.children[3].children[1];
        let botao = spy.children[3].children[2];
        let retrato = spy.children[1];

        if (botao.id != "foi") {
          spyWatch.addEventListener("click", invisWatch);
          botao.id = "foi";
        }

        function invisWatch() {
          function invis() {
            spy.className = "invisible";
            spyWatch.id = "invis";

            retrato.classname = "invisible";
            spy.children[0].className = "invis";

            botao.style.visibility = "hidden";
            retrato.style.backgroundImage = 'url("/pics/spyRetrato3.gif")';

            let spyInvisAu = ["spyInvis.mp3", 0.2];
            snd(spyInvisAu);
            // snd(spyInvisLineAu);

            // to()
            setTimeout(vis, gerarNumero(800, 7000));
            spyWatch.style.visibility = "hidden";

            spy.dataset.hashp = "uber";
          }

          function vis() {
            spy.dataset.hashp = "false";
            spy.className = "visible";
            spyWatch.id = "vis";
            retrato.classList.remove("invisible");
            retrato.classList.add("visible");
            spy.children[0].className = "vis";

            botao.style.visibility = "visible";
            retrato.style.backgroundImage = 'url("/pics/spyRetrato.webp")';

            let spyInvisAu = ["spyInvis.mp3", 0.3];
            snd(spyInvisAu);
            // snd(spyInvisLineAu);
            // tudo()

            setTimeout(function () {
              spyWatch.style.visibility = "visible";
            }, gerarNumero(2400, 14000));
          }

          if (spyWatch.id != "invis") {
            invis();
          } else {
            // vis()
          }
        }

        for (let i = 0; i < 6; i++) {
          if (
            inv.children[i].id == "carta-semcargo" &&
            inv.children[i].children[3].children[0].textContent.includes("⚡")
          ) {
            let semcargo = inv.children[i];
            let poderSemcargo = semcargo.children[3].children[0];

            let poderSpy = spy.children[3].children[0];

            //roubar o poder

            poderSpy.textContent =
              parseInt(poderSemcargo.textContent) * 5 +
              parseInt(poderSpy.textContent) +
              "⚡";

              elimCardInv(semcargo)

            

            spyWatch.style.visibility = "visible";
            retrato.style.backgroundImage = 'url("/pics/spyRetrato2.gif")';
            somaPontos();

            // audio
            let stabAu = ["stab.mp3", 0.3];
            snd(stabAu);

            if (gerarNumero(1, 3) == 2) {
              let spyAu = ["spy" + gerarNumero(1, 7) + ".mp3", 0.3];
              snd(spyAu);
            }

            break;
          }
        }
      }
      // PODER ESTOICO
      if (
        inv.children[i].id == "estoico" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener(
          "click",
          estoico
        );
        inv.children[i].children[0].id = "foi";
      }

      function estoico(e) {
        let estoico = e.target.offsetParent;
        let butao = estoico.children[3].children[2];

        for (let i = 0; i < 6; i++) {
          if (
            efeitos.status == false &&
            inv.children[i].children[0].children[2].textContent ==
              " de Itapira" &&
            inv.children[i].id != "carta-monark"
          ) {
            let itapira = inv.children[i];
            let itapiraEnergia = itapira.children[3].children[0];

            efeitoEstoico.rodadas = Math.trunc(
              parseInt(itapiraEnergia.textContent)
            );
            efeitos = efeitoEstoico;

            hpPlayer.remove(Math.trunc(parseInt(itapiraEnergia.textContent)));

            butao.style.visibility = "hidden";


            elimCardInv(itapira)
            elimCardInv(estoico)





            somaPontos();
            tudo();

            let estoicoAu = ["estoico.mp3", 0.2];
            sndEfeito(estoicoAu);
            break;
          }
        }
      }
      // PODER LUCIO
      if (
        inv.children[i].id == "lucio" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener(
          "click",
          lucio
        );
        inv.children[i].children[0].id = "foi";
      }

      let ultiReadyAu = ["ultiReadyLucio1.mp3"];
      function lucio(e) {
        let lucio = e.target.offsetParent;
        let lucioEnergia = lucio.children[3].children[0];
        let barreira = lucio.children[3].children[1];
        let ulti = lucio.children[2];

        for (let i = 0; i < 6; i++) {
          if (parseInt(ulti.textContent) < 100) {
            // se a carta for gentleman
            if (inv.children[i].id == "carta-people") {
              let gentleman = inv.children[i];
              let poderVelho = inv.children[i].children[3].children[0];

              
              // se tiver pdoer novo, o adiquira e exclua a carta

              lucioEnergia.textContent =
                parseInt(lucioEnergia.textContent) +
                parseInt(poderVelho.textContent) +
                "⚡";

              ulti =
                parseInt(ulti.textContent) + parseInt(poderVelho.textContent);

              if (ulti >= 100) {
                lucio.children[2].textContent = 100 + "%";
                elimCardInv(gentleman);
                snd(ultiReadyAu);
              } else {
                lucio.children[2].textContent = ulti + "%";
                let lucioAu = ["lucio" + gerarNumero(1, 8) + ".ogg"];
                if (gerarNumero(1, 2) == 1) {
                  setTimeout(function () {
                    snd(lucioAu);
                  }, 650);
                }
              }

              elimCardInv(gentleman);

              let lucioGunAu = ["lucioGun" + gerarNumero(1, 2) + ".mp3"];

              snd(lucioGunAu);

              snd(morteAu);

              break;
            }
            //se tiver ulti
          } else {
            let ultiLucioAu = ["ultiLucio.oga"];
            snd(ultiLucioAu);
            hpPlayer.add(parseInt(barreira.textContent));

            // arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";
            ulti.textContent = "0%";

            //colocar barreira
            for (let k = 0; k < 6; k++) {
              if (
                inv.children[k].children[3].children[1].textContent.includes(
                  "💚"
                ) &&
                inv.children[k].id != lucio
              ) {
                let energia = inv.children[k].children[3].children[1];

                energia.textContent =
                  parseInt(energia.textContent) +
                  parseInt(barreira.textContent) +
                  "💚";

                energia.style.visibility = "visible";
              }

              somaPontos();
            }

            break;
          }
        }
      }

      if (
        inv.children[i].id == "jhin" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener("click", jhin);
        inv.children[i].children[0].id = "foi";
      }

      //PODER JHIN

      function jhin(e) {
        let jhin = e.target.offsetParent;
        let tiros = parseInt(jhin.children[2].textContent);
        let tirosString = jhin.children[2];

        //ESCOLHER ATIRADOS
        for (let j = 0; j < 6; j++) {
          let nome = inv.children[j].children[0].children[0].textContent;
          let atirador = inv.children[j];
          let atiradorCargo = inv.children[j].id;
          let baralhoCargo = copyCard.id;
          let emojiAtirador = atirador.children[3].children[1];
          let energiaJhinNum = parseInt(
            jhin.children[3].children[0].textContent
          );
          let energiaJhin = jhin.children[3].children[0];
          let energiaVitima = parseInt(
            copyCard.children[3].children[0].textContent
          );
          let butao = jhin.children[3].children[2];

          function checkTiros() {
            if (tiros >= 1) {
              return true;
            } else {
              return false;
            }
          }

          if (
            atirador.id != "carta-monark" &&
            nome == "GANDALF" &&
            checkTiros()
          ) {
            //se nao tiver atirador, escolha atirador

            function naoTemAtirador() {
              if (
                inv.children[0].children[3].children[1].textContent != "💢" &&
                inv.children[1].children[3].children[1].textContent != "💢" &&
                inv.children[2].children[3].children[1].textContent != "💢" &&
                inv.children[3].children[3].children[1].textContent != "💢" &&
                inv.children[4].children[3].children[1].textContent != "💢" &&
                inv.children[5].children[3].children[1].textContent != "💢"
              ) {
                return true;
              } else {
                return false;
              }
            }

            if (naoTemAtirador()) {
              emojiAtirador.textContent = "💢";
              emojiAtirador.style.visibility = "visible";

              let jhinEscolhaAu = ["jhinEscolha.mp3", 0.7];
              let ultiJhinAu = ["ultiJhin.mp3", 0.3];

              snd(jhinEscolhaAu);
              snd(ultiJhinAu);

              break;
              //se tiver atirador
            } else {
              function playJhinAu(n) {
                let jhinAu = ["jhin" + gerarNumero(1, 9) + ".mp3", 0.4];

                if (gerarNumero(1, n) == 1) {
                  setTimeout(function () {
                    snd(jhinAu);
                  }, 800);
                }
              }

              if (tiros == 1 && atiradorCargo == baralhoCargo) {
                butao.style.visibility = "hidden";

                emojiAtirador.textContent = "";

                tirosString.classList.remove("critico");
              }

              if (
                checkTiros() &&
                atiradorCargo == baralhoCargo &&
                numCartas.total >= 1
              ) {
                if (tiros == 2) {
                  tirosString.classList.add("critico");
                }
                // TULTIMO TIRO MULTIPLICA POR 4
                if (tiros == 1) {
                  energiaJhin.textContent =
                    energiaJhinNum + energiaVitima * 8 + "⚡";
                  cartaParaMover.classList.add("voar");
                  somaPontos();
                  if (numCartas.total == 1) {
                    setTimeout(function () {
                      packP.innerHTML = semCarta;
                      numCartas.set(0);
                    }, 250);
                  } else {
                    setTimeout(tudo, 250);
                  }

                  let countAu = ["jhinConta4.mp3", 0.5];
                  snd(countAu);
                  snd(hit);
                  somDeath(350);
                  playJhinAu(1);
                } else {
                  energiaJhin.textContent =
                    energiaJhinNum + energiaVitima * 4 + "⚡";
                  cartaParaMover.classList.add("voar");
                  somaPontos();
                  if (numCartas.total == 1) {
                    setTimeout(function () {
                      packP.innerHTML = semCarta;
                      numCartas.set(0);
                    }, 250);
                  } else {
                    setTimeout(tudo, 250);
                  }

                  if (tiros == 4) {
                    let countAu = ["jhinConta1.mp3", 0.5];
                    snd(countAu);
                    snd(hit);
                    somDeath(350);
                    playJhinAu(3);
                  }

                  if (tiros == 3) {
                    let countAu = ["jhinConta2.mp3", 0.5];
                    snd(countAu);
                    snd(hit);
                    somDeath(350);
                  }

                  if (tiros == 2) {
                    let countAu = ["jhinConta3.mp3", 0.5];
                    snd(countAu);
                    snd(hit);
                    somDeath(350);
                  }
                }

                if (tiros == 1) {
                  tirosString.textContent = "";
                } else {
                  tirosString.textContent = tiros - 1;
                }
                // tudo()
                break;
              }
            }
            break;
          }
        }
      }

      // PODER DVA
      if (
        inv.children[i].id == "dva" &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener("click", dva);
        inv.children[i].children[0].id = "foi";
      }

      function dva(e) {
        let dva = e.target.offsetParent;
        let dvaEnergia = dva.children[3].children[0];
        let butao = dva.children[3].children[2];
        let ulti = dva.children[2];
        let retratoFoto = dva.children[1];
        let hp = dva.children[3].children[1];

        for (let i = 0; i < 6; i++) {
          let vitima =
            inv.children[i].dataset.dmgboss == "false" &&
            inv.children[i].dataset.card == "especial";

          if (parseInt(ulti.textContent) < 100) {
            // se a carta for gentleman
            if (vitima) {
              let gentleman = inv.children[i];

              // se tiver pdoer novo, o adiquira e exclua a carta

              ulti = parseInt(ulti.textContent) + gerarNumero(19, 26);

              if (ulti > 100) {
                dva.children[2].textContent = 100 + "%";
                // dva.children[2].textContent = 100 + "";
              } else {
                dva.children[2].textContent = ulti + "%";
              }

              elimCardInv(gentleman)
              break;
            }
            //se tiver ulti
          } else {
            butao.style.visibility = "hidden";

            hp.textContent = "4💚";

            retratoFoto.style.backgroundImage = 'url("/pics/dva.webp")';
            dva.children[2].textContent = "";

            let pontoDeTodos = 0;
            let pontoDeTodosEsp = 0;

            for (let j = 0; j < 6; j++) {
              let ponto = inv.children[j].children[3].children[0];
              let cartaEspecial = inv.children[j].dataset.dmgboss == "false";
              let cartaNormal = inv.children[j].dataset.dmgboss == "true";
              // if(ponto.textContent != ''){

              if (cartaEspecial) {
                pontoDeTodosEsp = pontoDeTodosEsp + 25;
              } else if (cartaNormal) {
                pontoDeTodos =
                  pontoDeTodos + Math.trunc(parseInt(ponto.textContent) * 1.5);
              }
            }
            dvaEnergia.textContent = 1 + pontoDeTodos + pontoDeTodosEsp + "⚡";

            function dvaSelfDestroy() {
              for(let k=0; k<6;k++){



                if (dva != inv.children[k] && inv.children[k].id != "tank") {

                  elimCardInv(inv.children[k])
                }

              }
              

              for (let j = 0; j < 6; j++) {
                let carta = inv.children[j];
                let isTank = carta.id == "tank";
                let aliveTank = carta.dataset.tankdead == "false";

                if (isTank && aliveTank) {
                  killTank(j);
                }
              }
            }

            dvaSelfDestroy();

            somaPontos();
            break;
          }
        }
      }
    }
  }
}

function poderesEspeciais(x) {
  if (x) {
    x();
  }

  abelha();
  creeper();
  lucio();
}

function lucio() {
  
  for (let i = 0; i < 6; i++) {
    let isLucio = inv.children[i].id == "lucio";
    let lucio = inv.children[i];
    let ulti = lucio.children[2];
    if (isLucio) {
      

      for (let j = 0; j < 6; j++) {
        if (
          inv.children[j].id != "lucio" &&
          inv.children[j].dataset.hashp == "true" &&
          gerarNumero(1, 2) == 1
        ) {
          if (ulti >= 100) {
            ulti.textContent = 100 + "%";
            snd(ultiReadyAu);
          } else {
            ulti.textContent = parseInt(ulti.textContent) + 1 + "%";
            healCard(1, inv.children[j]);
            hpPlayer.add(1);

            if (gerarNumero(1, 2) == 1) {
              healCard(1, lucio);
            }
          }
        }
      }
    }
  }
}

function abelha() {
  let beeHitAu = ["hitAbelha.mp3", 0.1];
  let numOfBees = 0;
  for (let k = 0; k < 6; k++) {
    let abelha = inv.children[k].id == "abelha";
    if (abelha) {
      numOfBees++;
    }
  }

  for (let i = 0; i < 6; i++) {
    if (inv.children[i].id != "empty") {
      if (inv.children[i].id == "abelha") {
        inv.children[i].className = "";
        inv.children[i].children[1].style.border = "2px solid #545251";
        1;
        inv.children[i].style.border = "";
        inv.children[i].style.color = "#ffd11a";

        let pontoAbelha = inv.children[i].children[3].children[0];

        if (parseInt(pontoAbelha.textContent) <= 0) {
          let abelha = inv.children[i];
          abelha.className = "";


          elimCardInv(abelha)


          

          let beeDeathAu = ["deathAbelha.mp3", 0.7];
          snd(beeDeathAu);

          somaPontos();
        } else if (numOfBees == 2) {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) / gerarNumero(2, 3) + "🐝";

          somaPontos();
          snd(beeHitAu);
        } else if (numOfBees == 3) {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) / gerarNumero(3, 4) + "🐝";

          somaPontos();
          snd(beeHitAu);
        } else if (numOfBees == 4) {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) / gerarNumero(4, 5) + "🐝";

          somaPontos();
          snd(beeHitAu);
        } else if (numOfBees == 5) {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) / gerarNumero(5, 6) + "🐝";

          somaPontos();
          snd(beeHitAu);
        } else if (numOfBees == 6) {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) / gerarNumero(6, 7) + "🐝";

          somaPontos();
          snd(beeHitAu);
        }
        
        
        else if (
          parseInt(pontoAbelha.textContent) <= 60 &&
          parseInt(pontoAbelha.textContent) > 15
        ) {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) - abelhaLowHp() + "🐝";
          somaPontos();
          snd(beeHitAu);
        } else if (parseInt(pontoAbelha.textContent) <= 15) {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) - 1 + "🐝";
          snd(beeHitAu);
        } else {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) - abelhaDecrease() + "🐝";
          somaPontos();
          snd(beeHitAu);
        }

        for (let j = 0; j < 6; j++) {
          if (inv.children[j].id != "empty") {
            if (inv.children[j].children[0].children[0].textContent == "TURU") {
              if (inv.children[i].id == "abelha") {
                inv.children[i].classList.add("critico");
                inv.children[i].children[1].style.border = "1px solid red";
                inv.children[i].style.border = "1px solid red";
                inv.children[i].style.color = "red";
              }

              if (parseInt(pontoAbelha.textContent) > 76) {
                pontoAbelha.textContent =
                  parseInt(pontoAbelha.textContent) -
                  abelhaDecreaseComTuru() +
                  "🐝";
                somaPontos();
                snd(beeHitAu);
              } else {
                if (inv.children[i].id == "abelha") {
                  inv.children[i].children[1].style.backgroundImage =
                    "url('pics/abelhaMorrendo.jpg')";
                  inv.children[i].children[2].innerHTML = frasesAbelha();
                  inv.children[i].children[2].style.fontSize = "1em";
                }
                pontoAbelha.textContent = 0 + "☠";
                snd(beeHitAu);
                somaPontos();
              }
            }
          }
        }
      }
    }
  }

  for (let l = 0; l < 6; l++) {
    let energiaAbelhas = inv.children[l].children[3].children[0];
    let abelha = inv.children[l].id == "abelha";

    if (abelha && numOfBees > 1) {
      energiaAbelhas.textContent =
        parseInt(energiaAbelhas.textContent) * numOfBees + "⚡";

      inv.children[l].dataset.dmgboss = "true";
    }
  }
}

export function elimCardInv(x) {

let slot

  if (x == inv.children[0]) {
    inv.replaceChild(empty1, x);
    slot = 0
  } else if (x == inv.children[1]) {
    inv.replaceChild(empty2, x);
    slot = 1
  } else if (x == inv.children[2]) {
    inv.replaceChild(empty3, x);
    slot = 2
  } else if (x == inv.children[3]) {
    inv.replaceChild(empty4, x);
    slot = 3
  }
   else if (x == inv.children[4]) {
    inv.replaceChild(empty5, x);
    slot = 4
  }
   else if (x == inv.children[5]) {
    inv.replaceChild(empty6, x);
    slot = 5
  }

  invObj[slot] = emptyObj


  return slot


}

function elimCardMao(x) {

  let slot

  if (x == mao.children[0]) {
    mao.replaceChild(mao0, x);
    slot = 0
  } else if (x == mao.children[1]) {
    mao.replaceChild(mao1, x);
    slot = 1
  } else if (x == mao.children[2]) {
    mao.replaceChild(mao2, x);
    slot = 2
  } else if (x == mao.children[3]) {
    mao.replaceChild(mao3, x);
    slot = 3
  }   

  maoObj[slot] = emptyObj


  return slot
  

  
}

function dmgCard(dmg, card, place) {
  if (card) {
    let hp = card.children[3].children[1];
    if (card.dataset.hashp == "true") {
      hp.textContent = parseInt(hp.textContent) - dmg + "💚";

      if (parseInt(hp.textContent) <= 0) {
        if (place == "mao") {
          elimCardMao(card);
          snd(morte);
        } else {
          elimCardInv(card);
          snd(morte);
        }
      }

      efeitoDano(card);

      return true;
    } else {
      return false;
    }
  }
}

function healCard(heal, card) {
  if (card) {
    let hp = card.children[3].children[1];
    if (card.dataset.hashp == "true") {
      hp.textContent = parseInt(hp.textContent) + heal + "💚";

      return true;
    } else {
      return false;
    }
  }
}

function creeper(x) {
  let condition;

  if (x) {
    condition = true;
  } else {
    condition = gerarNumero(1, 5) == 5;
  }

  let creeperAu = ["creeper.mp3", 0.5];
  for (let i = 0; i < 6; i++) {
    if (inv.children[i].id == "creeper") {
      let creeper = inv.children[i];
      let right = creeper.nextElementSibling;
      let left = creeper.previousElementSibling;

      if (condition && !creeper.dataset.exploding) {
        creeper.dataset.exploding = "true";

        snd(creeperAu);
        creeper.className = "piscar";
        setTimeout(function () {
          if (dmgCard(gerarNumero(170, 220), right)) {
            // condition already does the job ;)
          } else {
            elimCardInv(right);
          }

          if (dmgCard(gerarNumero(170, 220), left)) {
          } else {
            elimCardInv(left);
          }
          elimCardInv(creeper);

          if (boss) {
            boss.dmg(gerarNumero(100, 250));
          }
        }, 2600);
      }
    }
  }

  // comportamento na mao
  for (let i = 0; i < 4; i++) {
    if (mao.children[i].id == "creeper") {
      let creeper = mao.children[i];
      let right = creeper.nextElementSibling;
      let left = creeper.previousElementSibling;

      if (condition && !creeper.dataset.exploding) {
        creeper.dataset.exploding = "true";
        snd(creeperAu);
        creeper.className = "piscar";

        setTimeout(function () {
          if (dmgCard(gerarNumero(170, 220), right, "mao")) {
            // condition already does the job ;)
          } else {
            elimCardMao(right);
          }

          if (dmgCard(gerarNumero(170, 220), left, "mao")) {
          } else {
            elimCardMao(left);
          }

          let cartaInv1 = gerarNumero(0, 1);
          let cartaInv2 = gerarNumero(2, 3);

          if (i < 3) {
            if (dmgCard(gerarNumero(25, 70), inv.children[cartaInv1])) {
            } else {
              elimCardInv(inv.children[cartaInv1]);
            }
          } else {
            if (dmgCard(gerarNumero(25, 700), inv.children[cartaInv2])) {
            } else {
              elimCardInv(inv.children[cartaInv2]);
            }
          }

          elimCardMao(creeper);

          hpPlayer.remove(gerarNumero(7, 12));
        }, 2600);
      }
    }
  }
}

// if (inv.children[0].id != 'empty' && inv.children[1].id != 'empty' && inv.children[2].id != 'empty' && inv.children[3].id != 'empty') {

//     console.log ('sem loop')

// }

/****************************************** */
// TIRAR CARTA DO INVENTARIO
// /******************************************** */
export let naoAu = ["nao.mp3"];
let btnReset = document.getElementById("btnReset");

let empty = document.createElement("div");
empty.id = "empty";

export let empty1 = inv.children[0];
export let empty2 = inv.children[1];
export let empty3 = inv.children[2];
export let empty4 = inv.children[3];
export let empty5 = inv.children[4];
export let empty6 = inv.children[5];
let cartaMao = mao.children[0];


let emptyObj = {
  empty: 'empty'
}

let maoObj = [
  emptyObj,
  emptyObj,
  emptyObj,
  emptyObj
  
  
]

let invObj = [

  emptyObj,
  emptyObj,
  emptyObj,
  emptyObj,
  emptyObj,
  emptyObj
  
  
]

let chosenCardObj = [
  
  emptyObj
  
  
]


export function objToMao(x,y){

maoObj[x] = y

}


document.addEventListener("keydown", (event) => {
  
  if (event.code == "KeyO") {
    
    console.log('maoObj: ', maoObj)
    console.log('chosenCardObj: ', chosenCardObj);
    console.log('invObj: ', invObj)
    
  }
});



function deletarDeck(e) {
  if (
    e.target.className == "retrato" ||
    e.target.className == "retrato visible" ||
    e.target.className == "retrato invisible" ||
    e.target.className == "retratoEsp" ||
    e.target.className == "retratoEsp visible" ||
    e.target.className == "retratoEsp invisible"
  ) {
    //

    let totalMoney = parseInt(moneyP.textContent);

    let cargoMoney = parseInt(e.target.offsetParent.children[2].textContent);

    function venderCartaDeck() {
      let cartasVendiveis = ["tf2Money"];

      let vendivelDeck = cartasVendiveis.some((el) =>
        e.target.offsetParent.id.includes(el)
      );

      if (vendivelDeck) {
        animateSell(totalMoney, cargoMoney);
      }
    }

    function dmgBoss() {
      let energia = parseInt(
        e.target.offsetParent.children[3].children[0].textContent
      );

      if (e.target.offsetParent.dataset.dmgboss == "true") {
        boss.dmg(energia);
      }
    }

    if (e.target.offsetParent.dataset.canbedeleted == "true" && boss) {


      console.log(e.target.offsetParent);
        dmgBoss();
        venderCartaDeck();
        elimCardInv(e.target.offsetParent)
        

      
    } else if (
      e.target.offsetParent.id == "creeper" &&
      !e.target.offsetParent.dataset.exploding
    ) {
      creeper(true);
    } else {
      let naoAu = ["nao.mp3"];
      snd(naoAu);
    }
  }
}

let usarDeckTrigg = false;

function deckFull() {



  let deckOnlyDmgBoss =
    inv.children[0].dataset.dmgboss == "true" &&
    inv.children[1].dataset.dmgboss == "true" &&
    inv.children[2].dataset.dmgboss == "true" &&
    inv.children[3].dataset.dmgboss == "true" &&
    inv.children[4].dataset.dmgboss == "true" &&
    inv.children[5].dataset.dmgboss == "true";

  if (deckOnlyDmgBoss) {
    usarDeckTrigg = true;
    return true;
  } else {
    usarDeckTrigg = false;
    return false;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyQ") {
    if (boss) {
      dmgBoss();
    } else {
      snd(naoAu);
    }
  }
});

function dmgBoss() {
  let energiaTotal = 0;

  if (deckFull()) {
    for (let i = 0; i < 6; i++) {
      let carta = inv.children[i];

      let energia = parseInt(carta.children[3].children[0].textContent);

      elimCardInv(carta)
      
      // SE ISSO FUNCONA ^, APAGUE ISSO v


      // if (carta == inv.children[0]) {
      //   inv.replaceChild(empty1, carta);
      //   ativarBtn();
      //   somaPontos();
      // } else if (carta == inv.children[1]) {
      //   inv.replaceChild(empty2, carta);
      //   ativarBtn();
      //   somaPontos();
      // } else if (carta == inv.children[2]) {
      //   inv.replaceChild(empty3, carta);
      //   ativarBtn();
      //   somaPontos();
      // } else if (carta == inv.children[3]) {
      //   inv.replaceChild(empty4, carta);
      //   ativarBtn();
      //   somaPontos();
      // }




      energiaTotal = energia + energiaTotal;
    }
    boss.dmg(energiaTotal * 2);
  } else {
    for (let i = 0; i < 6; i++) {
      let carta = inv.children[i];
      if (carta.dataset.dmgboss == "true") {
        let energia = parseInt(carta.children[3].children[0].textContent);


        elimCardInv(carta)
        
        



         // SE ISSO FUNCONA ^, APAGUE ISSO v

        // if (carta == inv.children[0]) {
        //   inv.replaceChild(empty1, carta);
        //   ativarBtn();
        //   somaPontos();
        // } else if (carta == inv.children[1]) {
        //   inv.replaceChild(empty2, carta);
        //   ativarBtn();
        //   somaPontos();
        // } else if (carta == inv.children[2]) {
        //   inv.replaceChild(empty3, carta);
        //   ativarBtn();
        //   somaPontos();
        // } else if (carta == inv.children[3]) {
        //   inv.replaceChild(empty4, carta);
        //   ativarBtn();
        //   somaPontos();
        // }

        boss.dmg(energia);
      }
    }
  }
}






document.addEventListener("keydown", (event) => {
  if (event.code == "KeyE") {
    venderCarta();
  }
});

let vendas = {
  vendas: 0,

  update(n) {
    this.vendas = this.vendas + n;

    if (vendas <= 0) {
      this.vendas = 0;

      return (vendasP.innerHTML = this.vendas);
    } else {
      return (vendasP.innerHTML = this.vendas);
    }
  },

  set(n) {
    this.vendas = n;
    return (vendasP.innerHTML = this.vendas);
  },
};

function animateSell(start, plus) {
  if (plus === 0) return;

  let increment;

  if (plus > 200) {
    increment = 4;
  } else {
    increment = 1;
  }

  var stepTime = Math.floor(500 / plus);
  let x = 0;

  let timer = setInterval(function () {
    let coinAu = ["coin.mp3", 0.04];

    if (plus - x < 40) {
      x++;
      moneyP.textContent = parseInt(moneyP.textContent) + 1;
      snd(coinAu);
      // ativarBtn()
    } else {
      x += increment;
      moneyP.textContent = parseInt(moneyP.textContent) + increment;
      // ativarBtn()

      if (gerarNumero(1, 3) == 1) {
        snd(coinAu);
      }
    }

    ativarBtn();
    //

    if (x >= plus) {
      clearInterval(timer);
    }
  }, stepTime);
}

function venderCarta() {
  if (chosenCard != 0 && vendas.vendas > 0) {
    let energia = chosenCard.children[3].children[0];
    let carta = chosenCard;
    let cargo = carta.children[2];

    let totalMoney = parseInt(moneyP.textContent);
    let cardValue = parseInt(energia.textContent);
    let cargoMoney = parseInt(cargo.textContent);

    

    let cartasVendiveis = [
      "carta-semcargo",
      "carta-people",
      "carta-monark",
      "carta-gentleman",
      "tf2Money",
      "carta-nobre",
      "carta-ministro",
      "carta-lord",
      "carta-primeminister",
      "carta-premiomarino",
    ];

    let isVendivel = cartasVendiveis.some(
      (el) => carta.id.includes(el) && energia.innerHTML.includes("⚡")
    );

    let venda = ["venda.mp3"];

    if (isVendivel) {
      if (carta == "tf2Money") {
        animateSell(totalMoney, cargoMoney);
      } else {
        animateSell(totalMoney, cardValue);

        //   moneyP.textContent =
        // parseInt(moneyP.textContent) + parseInt(energia.textContent);
      }
      snd(venda);

      elimCardMao(chosenCard)

      chosenCard = 0;
      chosenCardObj = emptyObj

      vendas.update(-1);
    } else {

      if (carta.dataset.tier == "campones") {
        animateSell(totalMoney, 5);
      }
      if (carta.dataset.tier == "cavaleiro") {
        animateSell(totalMoney, 10);
      }
      if (carta.dataset.tier == "sangueAzul") {
        animateSell(totalMoney, 30);
      }
      if (carta.dataset.tier == "rainha") {
        animateSell(totalMoney, 60);
      }

      elimCardMao(chosenCard);
      chosenCard = 0;
      chosenCardObj = emptyObj
    }
  } else {
    snd(naoAu);
  }
}

function resetarDeck() {
  getSeed.setAttribute("class", "");

  efeitos = efeitoVazio;

  rodadas = 0;
  critico();

  mao.replaceChild(cartaMao, mao.children[0]);

  for(let i=0;i<6;i++){

    elimCardInv(inv.children[i])

  }


  
  
  tudo();
  jaMovi = false;

  blockInv();
  cartaCustom = input.length >= 3;

  getSeed.className = "";
  zerarMoney();
  limparEsp();
}

/////// CRITICO

function blockInv() {
  let cartaNotEspecial = copyCard.children[0].children[3].textContent == "";
  let cartaNotMonark = copyCard.id != "carta-monark";
  let PodeMover =
    (!seedObj._isSeedReal && cartaNotEspecial && cartaNotMonark) ||
    (seedObj._isSeedReal && !seedObj._isPutByPlayer) ||
    seedObj._isMarket;

  if (!PodeMover || isJaMovi()) {
    inv.style.border = "10px double red";
  } else {
    inv.style.border = "7px double green";
  }
}

function limparInput() {
  getSeed.value = "";
}

function tudo() {
  // VOLTAR A CONDICAO PRA (totalClicks > 0)

  if (numCartas.total > 1) {
    rodadas++;

    if (numCartas.total <= 0) {
      showVersion();
      button.style.backgroundColor = "red";
      button.innerHTML = "0 CARTAS";
    } else {
      button.style.backgroundColor = "";
      button.innerHTML = "&#127381; PASSAR CARTA &#127381;";
    }
    // vendas.update(+1);
    snd(novaCartaAu);
    start();
    limparInput();
    escolherIntegrante();
    escolherCidade();
    escolherCargo();
    escolherVariante();
    pontoVariante();
    escolherPoder();
    colocarInfoNoWrap();
    critico();
    moverCartaMonark(15,inv);
    copyCard = cartaParaMover.cloneNode(true);
    numCartas.remove(1);
    spawnBoss();
    poderesEspeciais();
    colocarEfeito();
    verificarCartaParaMover();
    blockInv();
    ativarBtn();
    poderBoss();
    // 
  } else {
  }
}

function tick() {
  setInterval(function () {
    allMonark();
    specialInDeck();
    deckVazio();
    deckCheio();
    somaPontos();
    aplicarEfeitos();
    ativarBtn()
  }, 100);
}

function allMonark() {
  let monark0 = inv.children[0].id == "carta-monark";
  let monark1 = inv.children[1].id == "carta-monark";
  let monark2 = inv.children[2].id == "carta-monark";
  let monark3 = inv.children[3].id == "carta-monark";
  let monark4 = inv.children[4].id == "carta-monark";
  let monark5 = inv.children[5].id == "carta-monark";

  let allMonarkInv = monark0 && monark1 && monark2 && monark3 && monark4 && monark5
  //

  return allMonarkInv;
}

function deckVazio() {
  let empty1 = inv.children[0].id == "empty1";
  let empty2 = inv.children[1].id == "empty2";
  let empty3 = inv.children[2].id == "empty3";
  let empty4 = inv.children[3].id == "empty4";
  let empty5 = inv.children[4].id == "empty4";
  let empty6 = inv.children[5].id == "empty4";

  let empty = empty1 && empty2 && empty3 && empty4 && empty5 && empty6;

  //

  return empty;
}

function deckCheio() {
  let empty1 = inv.children[0].id == "empty1";
  let empty2 = inv.children[1].id == "empty2";
  let empty3 = inv.children[2].id == "empty3";
  let empty4 = inv.children[3].id == "empty4";
  let empty5 = inv.children[4].id == "empty4";
  let empty6 = inv.children[5].id == "empty4";

  let empty = !empty1 && !empty2 && !empty3 && !empty4 && !empty5 && !empty6;

  //

  return empty;
}

function specialInDeck() {
  for (let i = 0; i < 6; i++) {
    if (inv.children[i].dataset.card == "especial") {
      return true;
    }
  }
  return false;
}

function allEspecial() {
  let monark0 = inv.children[0].dataset.card == "especial";
  let monark1 = inv.children[1].dataset.card == "especial";
  let monark2 = inv.children[2].dataset.card == "especial";
  let monark3 = inv.children[3].dataset.card == "especial";
  let monark4 = inv.children[4].dataset.card == "especial";
  let monark5 = inv.children[5].dataset.card == "especial";

  let allMonarkInv = monark0 && monark1 && monark2 && monark3 && monark4 && monark5
  //

  return allMonarkInv;
}

// COOLDOWNS
// PODER BOSSES

let bossIsMonark;

function healMonarkBoss(x) {
  if (bossIsMonark) {
    boss.heal(x);
  } else {
  }
}

let chuvaCooldown = false;
// setTimeout(() => (chuvaCooldown = false), 15000);

//************************************************************************************* */
//************************************************************************************* */
//************************************************************************************* */
//************************************************************************************* */
//************************************************************************************* */
function poderBoss() {
  if (boss) {
    bossIsMonark = boss.name == "monark";

    if (boss) {
      if (bossIsMonark) {
        function probChuva() {
          if (allMonark()) {
            return gerarNumero(1, 66) == 1;
          }
          if (deckVazio()) {
            return gerarNumero(1, 33) == 1;
          }
          if (deckCheio()) {
            return gerarNumero(1, 27) == 1;
          }
          if (specialInDeck()) {
            return gerarNumero(1, 21) == 1;
          }
          if (allEspecial()) {
            return gerarNumero(1, 15) == 1;
          }
          if (boss.health < 1000) {
            return gerarNumero(1, 12) == 1;
          }
          if (boss.health < 300) {
            return gerarNumero(1, 3) == 1;
          }

          return gerarNumero(1, 48) == 1;
        }

        if (probChuva()) {
          //CHUVA DE MONARK
          if (chuvaCooldown == false) {
            boss.chuvaDeMonark(true);
            chuvaCooldown = true;
            setTimeout(() => (chuvaCooldown = false), 7000);
          }

          //NUMERO 2

          //NUMERO 2
        }
      }
    }
  }
}

let numCartas = {
  total: 50,

  add(n) {
    this.total += n;
    arenaP.textContent = "VOCÊ TEM " + this.total + " CARTAS";
  },

  remove(n) {
    this.total -= n;

    if (this.total < 0) {
      this.total = 0;
    }
    arenaP.textContent = "VOCÊ TEM " + this.total + " CARTAS";
  },

  set(n) {
    this.total = n;
    arenaP.textContent = "VOCÊ TEM " + this.total + " CARTAS";
  },
};

export let hpPlayer = {
  total: 100,
  dmgTaken: 0,

  add(n) {
    this.total += n;
    if (this.total > 100) {
      this.total = 100;
    }
    this.playerP(this.total);
  },

  remove(n) {
    this.total -= n;
    this.dmgTaken += n;

    if (this.total <= 0) {
      this.total = 0;
      playerDead();
    }
    this.playerP(this.total);
  },

  set(n) {
    this.total = n;
    this.playerP(this.total);
  },

  playerP(n) {
    hpPlayerP.textContent = n;

    if (n > 25) {
      hpPlayerP.style.color = "wheat";
      hpPlayerEmojiP.innerHTML = "💚";
      hpPlayerWrapP.className = "";
    } else {
      hpPlayerP.style.color = "red";
      hpPlayerEmojiP.innerHTML = "💔";
      hpPlayerWrapP.className = "pulsar";
    }
  },
};

export let ammo = {
  total: 0,
  ammoUsed: 0,

  add(n) {
    this.total += n;
    this.ammoP(this.total);
  },

  use(n) {
    this.total -= n;
    this.ammoUsed += n;

    if (this.total <= 0) {
      this.total = 0;
    }

    this.ammoP(this.total);
  },

  set(n) {
    this.total = n;
    this.ammoP(this.total);
  },

  ammoP(n) {
    ammoP.textContent = n;

    
  },
};

function playerDead() {
  let rodadasStats = document.getElementById("rodadasStats");
  let bossDmgTakenStats = document.getElementById("bossDmgTakenStats");
  let playerDmgTakenStats = document.getElementById("playerDmgTakenStats");

  endP.style.display = "flex";
  main.style.display = "none";

  rodadasStats.innerHTML = "RODADAS: " + rodadas;
  bossDmgTakenStats.innerHTML = "DANO BOSS RECEBIDO " + boss.dmgTaken;
  playerDmgTakenStats.innerHTML = "DANO JOGADOR RECEBIDO " + hpPlayer.dmgTaken;
}

export function somaPontos() {
  let danoTotal = 0;

  let deckCritico =
    inv.children[0].dataset.dmgboss == "true" &&
    inv.children[1].dataset.dmgboss == "true" &&
    inv.children[2].dataset.dmgboss == "true" &&
    inv.children[3].dataset.dmgboss == "true" &&
    inv.children[4].dataset.dmgboss == "true" &&
    inv.children[5].dataset.dmgboss == "true";

  for (let i = 0; i < 6; i++) {
    let carta = inv.children[i];
    let energia = parseInt(carta.children[3].children[0].textContent);

    if (carta.dataset.dmgboss == "true") {
      danoTotal += energia;
    }
  }

  if (deckCritico) {
    placarP.style.color = "red";
    placarWrapP.className = "critico";
    danoTotal = danoTotal * 2;
  } else {
    placarP.style.color = "wheat";
    placarWrapP.className = "";
    danoTotal = danoTotal;
  }

  placarP.innerHTML = danoTotal;
}

button.addEventListener("click", tudo);
button.addEventListener("click", blockInv);
document.addEventListener("keydown", (event) => {
  if (event.code == "KeyW") {
    if (!getSeedChecked()) {
      tudo();
      blockInv();
    }
  }
});

// BIND MOVER COM TECLA
let teclaMoverCarta = "KeyD";
let teclaMoverVariasCartas = "KeyF";

cartaParaMover.addEventListener("click", moverToCartaMao);

document.addEventListener("keydown", (event) => {
  if (copyCard) {
    if (event.code == teclaMoverCarta) {
      if (!getSeedChecked() && chosenCard == 0) {
        moverToCartaMao();
      }
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (copyCard) {
    if (event.code == teclaMoverVariasCartas) {
      if (!getSeedChecked() && chosenCard == 0) {
        for (let z = 0; z < 6; z++) {
          moverToCartaMao();
        }
      }
    }
  }
});

inv.addEventListener("click", deletarDeck);

for (let p = 0; p < 6; p++) {
  let slot = inv.children[p].children[1];
  slot.addEventListener("click", deletarDeck);
}

// btnReset.addEventListener('click', moverCartaMonark)

btnReset.addEventListener("click", resetarDeck);

// DECK COMECA COM 4 CARTAS

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyR") {
    if (!getSeedChecked()) {
      resetarDeck();
    }
  }
});

export function startGame2() {
  resetarDeck();

  mao.replaceChild(mao0, mao.children[0]);
  mao.replaceChild(mao1, mao.children[1]);
  mao.replaceChild(mao2, mao.children[2]);
  mao.replaceChild(mao3, mao.children[3]);


  for (let i = 0; i < 4; i++) {
    moverToCartaMao();
    rodadas = 0;
  }
  rodadas = 1;
  // resetBoss();

  numCartas.set(50);
  vendas.set(50);
  hpPlayer.set(100);
  ammo.set(0);
  tick();
}

document.addEventListener("contextmenu", function () {
  //
  return false;
});

// LIST BINDS
//  1, 2, 3, 4 ---> USAR CARTAS NO DECK
//  Q --->  USAR DECK INTEIRO
//  W --->  PASSAR CARTA
//  E --->  VENDER CARTA
//  D --->  MOVER VARIAS CARTAS N ODECK
// SPACE ---> MOVER UMA CARTA PRO DECK
