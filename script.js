import { seedObj, start } from "./modules/seedFabricator.js";
import {
  tenicaEnergia,
  abelhaEnergia,
  abelhaDecrease,
  abelhaDecreaseComTuru,
  abelhaLowHp,
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
function seedRNG() {
  return Math.floor(Math.random() * totalNumOfSeeds);
}

//NUMERO ALEATORIO
function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

function hasStopped(song, channel) {
  let test = new Audio("/audio/" + song[0]);

  //
  //

  // console.log(test.src == audioEffect.src
  //   );

  if (channel.src != test.src) {
    return true;
  } else {
    return false;
  }
}

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

// let audioEffectVoice = new Audio("/audio/deletar.mp3");
// export function sndVoice(audio) {
//   audioEffectVoice = new Audio("/audio/" + audio[0]);

//   if (typeof audio[1] == "number") {
//     audioEffectVoice.volume = audio[1];
//   } else {
//     audioEffectVoice.volume = 1;
//   }

//   audioEnabled && audioEffectVoice.play();
// }

// This function generates a seed or takes a seed as input
// the input will always be translated to the same seed if an integer
// if a string, it'll be converted

let input = "";

// ***********************
// LINK SEED TO ELEMENT
//**************************/

//integrante
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER
let totalClicks = 50;
let integrante;
let cartaCustom;
// let seedObj
let seedString = "";
let cartaComSeedParaAdicionar;
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

export function triggerChuvaMonark(x) {
  

  if (x) {
    boss.treme(true);
    console.log("CHUVA DE MONARK");

    let trovaoAu = ["trovao.mp3", 0.2];

    setTimeout(function () {
      snd(trovaoAu);
      boss.treme(false)

      probMonark = () => probMonarkChuvaDeMonark();
      tudo();
      
      triggerChuvaMonark(false);

    }, gerarNumero(3000, 4000));

    
  } else {
    probMonark = () => probMonarkNormal();
    console.log("CABOU A CHUVA");

  }
}

let probMonarkNormal = () =>
  seedString[14] >= 4 && seedString[13] == 7 && seedString[4] != 4;
let probMonarkChuvaDeMonark = ()=> seedString[14] >= 1
// let probMonarkChuvaDeMonark = () => true;

let probMonark;

probMonark = () => probMonarkNormal();

let cargo = "";
function escolherCargo() {
  //
  if (
    seedString[11] == 2 &&
    seedString[12] == 3 &&
    seedString[13] == 4 &&
    seedString[14] == 4
  ) {
    return (cargo = "carta-premiomarino");
  } else if (
    seedString[11] == 5 &&
    seedString[12] == 3 &&
    seedString[13] == 4 &&
    seedString[14] <= 4
  ) {
    return (cargo = "carta-primeminister");
  } else if (
    seedString[12] == 2 &&
    seedString[13] == 8 &&
    seedString[14] <= 4
  ) {
    return (cargo = "carta-ministro");
  } else if (seedString[13] == 4 && seedString[14] == 2) {
    return (cargo = "carta-lord");
  } else if (seedString[13] == 1 && seedString[14] >= 4) {
    return (cargo = "carta-nobre");
  } else if (seedString[13] == 9) {
    return (cargo = "carta-gentleman");
  } else if (probMonark()) {
    return (cargo = "carta-monark");
  } else if (seedString[14] >= 8) {
    return (cargo = "carta-people");
  } else {
    return (cargo = "carta-semcargo");
  }
}

let variante = "";

function escolherVariante() {
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
        return (variante = "");
      }
    }
  }
}

//RNG DOS PONTES DE PODER

let pontoPoderSemCargo = () =>
  Math.floor((parseInt(seedString[5]) + parseInt(seedString[0])) / 2 + 1); // 1 a 10

let pontoPoderPeople = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[12])) / 2 + 11); // 11 a 20

let pontoPoderGentleman = () =>
  Math.floor((parseInt(seedString[12]) + parseInt(seedString[0])) / 2 + 21); // 21 a 30

let pontoPoderMonark = () => Math.floor(Math.random() * 2);

let pontoPoderNobre = () =>
  Math.floor((parseInt(seedString[11]) + parseInt(seedString[10])) / 2 + 31); // 31 a 40

let pontoPoderLord = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 51); // 51 a 60

let pontoPoderMinistro = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 61); //61 a 70

let pontoPoderPrimeMinister = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[10])) / 2 + 81); // 81 a 90

let pontoPoderRNGPremioMarino = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[5])) / 2 + 121); // 121 a 130

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
    return (pontoVarianteValor = 100);
  } else {
    return (pontoVarianteValor = 0);
  }
}

let poder = {};
function escolherPoder() {
  //
  if (cargo === "carta-semcargo") {
    return (poder = {
      _ataque: pontoPoderSemCargo() + pontoVarianteValor,
    });
  } else if (cargo === "carta-people") {
    return (poder = {
      _ataque: pontoPoderPeople() + pontoVarianteValor,
    });
  } else if (cargo === "carta-gentleman") {
    return (poder = {
      _ataque: pontoPoderGentleman() + pontoVarianteValor,
    });
  } else if (cargo === "carta-monark") {
    return (poder = {
      _ataque: pontoPoderMonark(),
    });
  } else if (cargo === "carta-nobre") {
    return (poder = {
      _ataque: pontoPoderNobre() + pontoVarianteValor,
    });
  } else if (cargo === "carta-lord") {
    return (poder = {
      _ataque: pontoPoderLord() + pontoVarianteValor,
    });
  } else if (cargo === "carta-ministro") {
    return (poder = {
      _ataque: pontoPoderMinistro() + pontoVarianteValor,
    });
  } else if (cargo === "carta-primeminister") {
    return (poder = {
      _ataque: pontoPoderPrimeMinister() + pontoVarianteValor,
    });
  } else if (cargo === "carta-premiomarino") {
    return (poder = {
      _ataque: pontoPoderRNGPremioMarino() + pontoVarianteValor,
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
let h1 = document.getElementsByTagName("h1")[0];
let mover = document.getElementById("mover");
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
let placarP = document.querySelector(".placar");
let efeito1P = document.getElementById("efeito1");
let efeito2P = document.getElementById("efeito2");
let efeito3P = document.getElementById("efeito3");
let efeito4P = document.getElementById("efeito4");
let mao = document.getElementById("mao");
let moneyP = document.getElementById("money");
let vendasP = document.getElementById("vendas");
let healthWrapP = document.querySelector(".bossHealthWrap");
let bossRoomP = document.getElementById("bossRoom");

let bossP = () => bossRoomP.children[0];

let mao0 = mao.children[0];
let mao1 = mao.children[1];
let mao2 = mao.children[2];
let mao3 = mao.children[3];
let mao4 = mao.children[4];
let mao5 = mao.children[5];
let mao6 = mao.children[6];

function zerarMoney() {
  moneyP.textContent = 0;
}
zerarMoney();
//div poder
let ataqueP = document.querySelector(".ataque");
let defesaP = document.querySelector(".defesa");
let especialP = document.querySelector(".especial");

let seedP = document.querySelector(".seed");
let seloP = document.getElementById("selo");
//carta
let cartaP = packP.children[0];
// input da seed cliente
// let coloqueSuaSeed = document.getElementById('seed').value
//wrap
let wrap = document.getElementsByClassName("wrap")[0];
//input
let getSeed = document.getElementById("getseed");
//pagin procura seed
let seedCheckInput = document.getElementById("seedcheckinput");
let seedCheckBtn = document.getElementById("seedcheckbtn");
let seedCheckPage = document.getElementById("seedcheck");
let novaCarta;

function colocarInfoNoWrap() {
  novaCarta = fabricaDeCarta(
    integrante,
    cidade,
    cargo,
    poder,
    variante,
    especial,
    seedObj
  );

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
  // if (novaCarta._especial.nome == "") {
  cidadeP.innerHTML = "&nbsp;" + novaCarta._cidade;
  // } else {
  // cidadeP.innerHTML = "";
  // }

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

  arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";
  placarP.innerHTML = totalPontos + " ⚡";

  // if (novaCarta._especial.nome != "") {
  //   cartaP.id = novaCarta._especial.cartaId;
  //   cidadeP.innerHTML = "";
  //   cargoP.innerHTML = "";
  //   nomeP.innerHTML = "";
  // } else {
  cartaP.id = novaCarta._cargo;
  // }
  //
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

  //
}
export let rodadas = 0;
export let efeitos = {
  status: false,
  css: { nome: "", imagem: "" },
  rodadas: 0,
};

let efeitoVazio = { status: false, css: { nome: "", imagem: "" }, rodadas: 0 };

let efeitoAu = [];

function colocarEfeito() {
  efeito1P.style.backgroundImage = efeitos.css.imagem;
  efeito1P.innerHTML = efeitos.rodadas;

  if (efeitos.rodadas > 0) {
    efeitos.rodadas--;
  } else {
    efeitos = efeitoVazio;
    audioEffectE.pause();
  }

  aplicarEfeitos();
}
function colocarInput() {
  input = getSeed.value;
  // input = 13315754569994
}

//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */

// function cardShrinker(cartaGrande){
//     cartaGrande.style.height = '49%'
//     cartaGrande.style.width = '38%'
//     // cartaGrande.style.fontSize = '10px'
//     // cartaGrande.children[1].style.backgroundSize = '139px 87px'

// }

// let caixaDeSeeds = [0,0,0,0]

function getSeedChecked() {
  return document.activeElement.id == "getseed";
}

// document.addEventListener("keydown", (event) => {
//   if (event.code == "Digit1") {
//     if (!getSeedChecked()) {
//       moverToDeckNum(event);
//     }
//   }
// });

for (let z = 1; z < 5; z++) {
  document.addEventListener("keydown", (event) => {
    if (event.code == "Digit" + z) {
      if (!getSeedChecked()) {
        moverToDeckNum(event);
      }
    }
  });
}

// document.addEventListener("keydown", (event) => {
//   if (event.code == "Digit2") {
//     if (!getSeedChecked()) {
//       moverToDeckNum(event);
//     }
//   }
// });
// document.addEventListener("keydown", (event) => {
//   if (event.code == "Digit3") {
//     if (!getSeedChecked()) {
//       moverToDeckNum(event);
//     }
//   }
// });
// document.addEventListener("keydown", (event) => {
//   if (event.code == "Digit4") {
//     if (!getSeedChecked()) {
//       moverFour();
//     }
//   }
// });

let cartaParaMover = document.getElementById("pack").firstElementChild;
let copyCard = cartaParaMover.cloneNode(true);
let seedCopyCard;
let cartaNotEspecial;
let customOff;
let cartaNotMonark;
let PodeMover;
let naoMoviAinda;
let taTudoOk;

let seed1;
let seed2;
let seed3;
let seed4;
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

  seedDiferente = true;
  // seedDiferente =
  //   seedCopyCard.textContent != seed1.textContent &&
  //   seedCopyCard.textContent != seed2.textContent &&
  //   seedCopyCard.textContent != seed3.textContent &&
  //   seedCopyCard.textContent != seed4.textContent;
}
function moverOne() {
  copyCard = cartaParaMover.cloneNode(true);
  if (inv.children[0].id == "empty1" && seedDiferente && taTudoOk) {
    if (totalClicks <= 0 && packP.children[0].id != "carta") {
      inv.replaceChild(copyCard, inv.children[0]);
      packP.innerHTML = semCarta;

      criarBtn();
      somaPontos();
    } else if (packP.children[0].id != "carta") {
      inv.replaceChild(copyCard, inv.children[0]);
      criarBtn();
      somaPontos();

      tudo();
    }
  }
}

function moverTwo() {
  copyCard = cartaParaMover.cloneNode(true);

  if (inv.children[1].id == "empty2" && seedDiferente && taTudoOk) {
    if (totalClicks <= 0 && packP.children[0].id != "carta") {
      inv.replaceChild(copyCard, inv.children[1]);
      packP.innerHTML = semCarta;

      criarBtn();
      somaPontos();
    } else if (packP.children[0].id != "carta") {
      inv.replaceChild(copyCard, inv.children[1]);
      criarBtn();
      somaPontos();

      tudo();
    }
  }
}
function moverThree() {
  copyCard = cartaParaMover.cloneNode(true);

  if (inv.children[2].id == "empty3" && seedDiferente && taTudoOk) {
    if (totalClicks <= 0 && packP.children[0].id != "carta") {
      inv.replaceChild(copyCard, inv.children[2]);
      packP.innerHTML = semCarta;

      criarBtn();
      somaPontos();
    } else if (packP.children[0].id != "carta") {
      inv.replaceChild(copyCard, inv.children[2]);
      criarBtn();
      somaPontos();

      tudo();
    }
  }
}

function moverFour() {
  copyCard = cartaParaMover.cloneNode(true);
  if (inv.children[3].id == "empty4" && seedDiferente && taTudoOk) {
    if (totalClicks <= 0 && packP.children[0].id != "carta") {
      inv.replaceChild(copyCard, inv.children[3]);
      packP.innerHTML = semCarta;

      criarBtn();
      somaPontos();
    } else if (packP.children[0].id != "carta") {
      inv.replaceChild(copyCard, inv.children[3]);
      criarBtn();
      somaPontos();

      tudo();
    }
  }
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

function moverToInvMao() {
  let botaoMao = mao.children[0].children[3].children[2];
  // let cartasComBotao = objCartaMao._especial.poder == true;

  function colocarBotao() {
    if (cartasComBotao.some((el) => mao.children[0].id.includes(el))) {
      botaoMao.style.visibility = "visible";
    }
  }

  if (mao.children[0].id != "cartaMao") {
    snd(novaCartaAu);
    if (inv.children[0].id == "empty1") {
      colocarBotao();
      inv.replaceChild(mao.children[0], inv.children[0]);
      mao.appendChild(cartaMao);
      somaPontos();
    } else if (inv.children[1].id == "empty2") {
      colocarBotao();
      inv.replaceChild(mao.children[0], inv.children[1]);
      mao.appendChild(cartaMao);
      somaPontos();
    } else if (inv.children[2].id == "empty3") {
      colocarBotao();
      inv.replaceChild(mao.children[0], inv.children[2]);
      mao.appendChild(cartaMao);
      somaPontos();
    } else if (inv.children[3].id == "empty4") {
      colocarBotao();
      inv.replaceChild(mao.children[0], inv.children[3]);
      mao.appendChild(cartaMao);
      somaPontos();
    }
    criarBtn();
  }
}

for (let m = 0; m < 6; m++) {
  let slotMao = "mao" + m;
  document.getElementById(slotMao).addEventListener("click", function () {
    moveToMao(m);
  });
}

export function moveToMao(i) {
  if (copyCard.id != "carta-monark") {
    if (totalClicks <= 0 && packP.children[0].id != "carta") {
      mao.replaceChild(copyCard, mao.children[i]);
      packP.innerHTML = semCarta;
    } else if (packP.children[0].id != "carta") {
      mao.replaceChild(copyCard, mao.children[i]);
      tudo();
    }
    selectHandCard();
  }
}

function moverToCartaMao() {
  for (let i = 0; i < 6; i++) {
    if (mao.children[i].id == "mao" + i) {
      moveToMao(i);
      break;
    } else {
    }
  }
}
let chosenCard = 0;
export function selectHandCard() {
  for (let k = 0; k < 6; k++) {
    let mao = () => document.getElementById("mao");

    let slotMao = () => mao().children[k].id != "mao" + k;
    let retrato = () => mao().children[k].children[1];
    let carta = retrato().offsetParent;

    // reset()

    if (slotMao()) {
      retrato().addEventListener("click", function (e) {
        function naoFoi() {
          return carta.dataset.inv == undefined;
        }
        if (naoFoi()) {
          function sameCard() {
            return e.target.offsetParent != chosenCard;
          }

          function lowerCard() {
            chosenCard.style.bottom = "0px";
            //
          }
          function raiseCard() {
            //
            //
            chosenCard.style.bottom = "66px";
          }

          if (chosenCard != 0) {
            lowerCard();
          }
          chosenCard = retrato().offsetParent;
          raiseCard();
        }

        // setTimeout(function(){
        //   if(chosenCard !=0){
        //     lowerCard()
        //   }
        // }, 10000)
      });

      retrato().addEventListener("contextmenu", function (e) {
        if (chosenCard != 0) {
          chosenCard.style.bottom = "0px";
          chosenCard = 0;
        }
      });
    }
  }
}

for (let d = 1; d < 5; d++) {
  let deck = "empty" + d;

  document.getElementById(deck).addEventListener("click", moverToDeck);
  

}

function moverToDeck(e) {
  let slot = e.target;

  let isEmpty =
    slot.id == "empty1" ||
    slot.id == "empty2" ||
    slot.id == "empty3" ||
    slot.id == "empty4";
  let isEmpty2 =
    slot.className == "nome1" ||
    slot.className == "nome2" ||
    slot.className == "nome3" ||
    slot.className == "nome4";

    console.log(chosenCard);

  if ((chosenCard != 0 && (isEmpty || isEmpty2)) || (chosenCard != 0 && chosenCard.id == 'premiomonark')){
    if (cartasComBotao.some((el) => chosenCard.id.includes(el))) {
      let botao = chosenCard.children[3].children[2];
      botao.style.visibility = "visible";
    }

    if (chosenCard == mao.children[0]) {
      mao.replaceChild(mao0, chosenCard);
    } else if (chosenCard == mao.children[1]) {
      mao.replaceChild(mao1, chosenCard);
    } else if (chosenCard == mao.children[2]) {
      mao.replaceChild(mao2, chosenCard);
    } else if (chosenCard == mao.children[3]) {
      mao.replaceChild(mao3, chosenCard);
    } else if (chosenCard == mao.children[4]) {
      mao.replaceChild(mao4, chosenCard);
    } else if (chosenCard == mao.children[5]) {
      mao.replaceChild(mao5, chosenCard);
    }
    // inv.removeChild(slot)
    chosenCard.dataset.inv = "true";

    if (slot.className) {
      inv.replaceChild(chosenCard, slot.parentElement.parentElement);
    } else {
      inv.replaceChild(chosenCard, slot);
    }

    criarBtn();

    chosenCard.style.bottom = "0px";

    chosenCard = 0;
  }
}

function moverToDeckNum(e) {
  let key1 = e.code == "Digit1";
  let key2 = e.code == "Digit2";
  let key3 = e.code == "Digit3";
  let key4 = e.code == "Digit4";

  let inv0 = inv.children[0];
  let inv1 = inv.children[1];
  let inv2 = inv.children[2];
  let inv3 = inv.children[3];

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
      } else if (chosenCard == mao.children[4]) {
        mao.replaceChild(mao4, chosenCard);
      } else if (chosenCard == mao.children[5]) {
        mao.replaceChild(mao5, chosenCard);
      }
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
function moverCartaMonark() {
  let morte = ["morte.mp3"];
  copyCard = cartaParaMover.cloneNode(true);
  copyCardSeed = copyCard.children[4].textContent;
  copyCardName = copyCard.children[0].children[0].textContent;

  if (seedObj._isPutByPlayer) {
    false;
  } else if (efeitos.css.nome == "estoico" && copyCard.id == "carta-monark") {
    cartaParaMover.classList.add("voar");
    setTimeout(tudo, 250);
  } else if (totalClicks > 0) {
    if (copyCard.id === "carta-monark") {
      function isSpy() {
        for (let j = 0; j < 4; j++) {
          let energia = inv.children[j].children[3].children[0];

          if (
            inv.children[j].id == "spy" &&
            inv.children[j].className != "invisi"
          ) {
            return [true, j];
          }
        }
        return false;
      }

      let spyCheck = isSpy();
      //

      function efeitoDano(carta) {
        let heart = inv.children[carta].children[3].children[1];

        heart.style.backgroundColor = "red";
        heart.style.border = "3px solid black";
        snd(hit);

        setTimeout(function () {
          heart.style.backgroundColor = "";
          heart.style.border = "";
        }, 300);
      }

      function damage() {
        for (let j = 0; j < 4; j++) {
          let cartaComHp = inv.children[j];
          let temHP =
            cartaComHp.children[3].children[1].textContent.includes("💚");

          let HPNum = parseInt(
            inv.children[j].children[3].children[1].textContent
          );
          let HP = inv.children[j].children[3].children[1];
          let especial = cartaComHp.dataset.card == "especial";

          if (temHP && especial) {
            //
            //
            //
            //
            //

            if (HPNum >= 2) {
              HP.textContent = HPNum - 1 + "💚";
              efeitoDano(j);
            } else if (cartaComHp.id == "tank") {
              killTank(j);
            } else {
              snd(hit);
              snd(morte);
              if (cartaComHp == inv.children[0]) {
                inv.replaceChild(empty1, cartaComHp);
              } else if (cartaComHp == inv.children[1]) {
                inv.replaceChild(empty2, cartaComHp);
              } else if (cartaComHp == inv.children[2]) {
                inv.replaceChild(empty3, cartaComHp);
              } else if (cartaComHp == inv.children[3]) {
                inv.replaceChild(empty4, cartaComHp);
              }
            }
          } else if (temHP && !especial) {
            if (HPNum >= 2) {
              HP.textContent = HPNum - 1 + "💚";
              // efeitoDano(j);
            } else {
              HP.textContent = 0;
              HP.style.visibility = "hidden";
            }
          }
        }
      }
      damage();

      function deckVazio() {
        for (let j = 0; j < 4; j++) {
          if (
            (inv.children[j].id == "empty1" ||
              inv.children[j].id == "empty2" ||
              inv.children[j].id == "empty3" ||
              inv.children[j].id == "empty4") &&
            copyCard.id == "carta-monark"
          ) {
            return [true, j];
          }
        }
        return false;
      }
      let deckCheck = deckVazio();

      //  ACTION
      let monarkAu = ["monark.mp3"];
      for (let i = 0; i < 4; i++) {
        let energia = inv.children[i].children[3].children[0];
        //SE TIVER SPY
        if (spyCheck[0]) {
          // inv.replaceChild(copyCard, inv.children[spyCheck[1]]);

          let deathSpyAu = ["deathSpy" + gerarNumero(1, 3) + ".mp3"];
          snd(deathSpyAu);
          numCartas.add(1)
          break;

          //SE DECK VAZIO
        } else if (deckCheck[0]) {
          inv.replaceChild(copyCard, inv.children[deckCheck[1]]);

          snd(monarkAu);
          numCartas.add(1)
          break;

          // SUBSTITUI O HOMONIMO
        } else if (
          cartaParaMover.children[0].children[0].textContent ==
            inv.children[i].children[0].children[0].textContent &&
          inv.children[i].id != "carta-monark" &&
          !inv.children[i].children[3].children[1].textContent.includes("💚")
        ) {
          console.log(
            "cpm",
            cartaParaMover.children[0].children[0].textContent
          );

          inv.replaceChild(copyCard, inv.children[i]);
          snd(monarkAu);
          numCartas.add(1)
          break;
        }
      }

      somaPontos();
      copyCard.classList.add("monark");
      tudo();
    }
  }
}

const cartaParaMoverNome = cartaParaMover.children[0].children[0].textContent;
const cartaParaMoverCidade = cartaParaMover.children[0].children[1].textContent;

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

  for (let i = 0; i < 4; i++) {
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
          let multiplicador;
          let pontoParaDormir;

          function multiSpeaker() {
            multiplicador = Math.floor(Math.random() * 2 + 2);
          }

          multiSpeaker();
          multiSpeakerSono();

          function multiSpeakerSono() {
            pontoParaDormir = Math.floor(Math.random() * 16 + 25);
          }

          for (let j = 0; j < 4; j++) {
            //

            if (inv.children[j].id == "carta-monark") {
              if (parseInt(pontoSpeaker.textContent) < pontoParaDormir) {
                pontoSpeaker.textContent =
                  parseInt(pontoSpeaker.textContent) * multiplicador + " 😡";

                if (inv.children[0] == inv.children[j]) {
                  inv.replaceChild(empty1, inv.children[0]);
                } else if (inv.children[1] == inv.children[j]) {
                  inv.replaceChild(empty2, inv.children[1]);
                } else if (inv.children[2] == inv.children[j]) {
                  inv.replaceChild(empty3, inv.children[2]);
                } else if (inv.children[3] == inv.children[j]) {
                  inv.replaceChild(empty4, inv.children[3]);
                }

                // pontoSpeaker = Math.trunc(parseInt(pontoSpeaker) * 2) + '😡'

                let order = ["speaker" + gerarNumero(1, 2) + ".mp3", 0.6];
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

        totalClicks =
          totalClicks +
          parseInt(varianteClique.children[3].children[0].textContent) +
          1;

        vendas.update(
          parseInt(varianteClique.children[3].children[0].textContent)
        );

        varianteClique.children[3].children[2].style.visibility = "hidden";
        button.style.backgroundColor = "";
        button.innerHTML = "&#127381; NOVA CARTA &#127381;";
        arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";

        if (varianteClique == inv.children[0]) {
          inv.replaceChild(empty1, varianteClique);
        } else if (varianteClique == inv.children[1]) {
          inv.replaceChild(empty2, varianteClique);
        } else if (varianteClique == inv.children[2]) {
          inv.replaceChild(empty3, varianteClique);
        } else if (varianteClique == inv.children[3]) {
          inv.replaceChild(empty4, varianteClique);
        }
      }

      function cartaMenosclique(e) {
        let varianteMenosClique = e.target.offsetParent;

        if (
          totalClicks >
          parseInt(varianteMenosClique.children[3].children[0].textContent)
        ) {
          totalClicks =
            totalClicks -
            parseInt(varianteMenosClique.children[3].children[0].textContent) +
            1;

          varianteMenosClique.children[3].children[2].style.visibility =
            "hidden";
          button.style.backgroundColor = "";
          button.innerHTML = "&#127381; NOVA CARTA &#127381;";
          arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";

          if (varianteMenosClique == inv.children[0]) {
            inv.replaceChild(empty1, varianteMenosClique);
          } else if (varianteMenosClique == inv.children[1]) {
            inv.replaceChild(empty2, varianteMenosClique);
          } else if (varianteMenosClique == inv.children[2]) {
            inv.replaceChild(empty3, varianteMenosClique);
          } else if (varianteMenosClique == inv.children[3]) {
            inv.replaceChild(empty4, varianteMenosClique);
          }
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
        function adicionarCLiquesTenica() {
          if (totalClicks > 50) {
            true;
          } else {
            totalClicks = 50;
          }
          arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";
        }

        let varianteTenica = e.target.offsetParent;

        let cartasQueATenicaNaoGostaBaralho =
          cartaParaMover.id != "especial-click" &&
          cartaParaMover.id != "-click" &&
          cartaParaMover.id != "especial-tenica" &&
          cartaParaMover.id != "premiomonark" &&
          cartaParaMover.id != "comunista" &&
          cartaParaMover.id != "estoico";

        let poderCartaPack = cartaParaMover.children[3].children[0];

        // tudo()

        //BOOST BARALHO
        if (cartasQueATenicaNaoGostaBaralho) {
          varianteTenica.children[3].children[2].style.visibility = "hidden";

          poderCartaPack.innerHTML =
            parseInt(poderCartaPack.textContent) +
            parseInt(varianteTenica.children[3].children[0].textContent) +
            "👑";
          adicionarCLiquesTenica();
        }

        let cartasQueATenicaNaoGosta = [
          "especial-click",
          "-click",
          "empty1",
          "empty2",
          "empty3",
          "empty4",
          "especial-tenica",
          "premiomonark",
          "comunista",
          "estoico",
        ];

        for (let j = 0; j < 4; j++) {
          if (
            !cartasQueATenicaNaoGosta.some((el) =>
              inv.children[j].id.includes(el)
            )
            // true
          ) {
            // se o poder novo for presente

            inv.children[j].children[3].children[0].textContent =
              parseInt(inv.children[j].children[3].children[0].textContent) +
              parseInt(varianteTenica.children[3].children[0].textContent) +
              "👑";
            adicionarCLiquesTenica();
          }
        }

        let tenicaAu = ["tenica.mp3"];
        snd(tenicaAu);
        somaPontos();
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

        for (let k = 0; k < 4; k++) {
          if (inv.children[k].id == "carta-speaker") {
            for (let j = 0; j < 4; j++) {
              if (
                inv.children[j].children[0].children[0].textContent !=
                  "NEFESTO" &&
                !cartasQueOCamaradaNaoGosta.some((el) =>
                  inv.children[j].id.includes(el)
                )
              ) {
                comunista.children[3].children[2].style.visibility = "hidden";
                let pontoComunista = comunista.children[3].children[1];

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

                  somaPontos();
                  //SE NAO FOR BLACKAO
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

                somaPontos();
              }
              if (hasStopped(comunistaAu) == true) {
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
          efeitoPremioMonark.rodadas = 35;
          efeitos = efeitoPremioMonark;
          //apaga a carta
          totalClicks += 15;
          premioMonark.classList.add("vanish");
          premioMonarkBotao.style.visibility = "hidden";
          function eliminarPremioMonark() {
            // premioMonark.remove();

            if (premioMonark == inv.children[0]) {
              inv.replaceChild(empty1, premioMonark);
            } else if (premioMonark == inv.children[1]) {
              inv.replaceChild(empty2, premioMonark);
            } else if (premioMonark == inv.children[2]) {
              inv.replaceChild(empty3, premioMonark);
            } else if (premioMonark == inv.children[3]) {
              inv.replaceChild(empty4, premioMonark);
            }

            if (premioMonark == mao.children[0]) {
              inv.replaceChild(mao0, premioMonark);
            } else if (premioMonark == mao.children[1]) {
              inv.replaceChild(mao1, premioMonark);
            } else if (premioMonark == mao.children[2]) {
              inv.replaceChild(mao2, premioMonark);
            } else if (premioMonark == mao.children[3]) {
              inv.replaceChild(mao3, premioMonark);
            } else if (premioMonark == mao.children[4]) {
              inv.replaceChild(mao4, premioMonark);
            } else if (premioMonark == mao.children[5]) {
              inv.replaceChild(mao5, premioMonark);
            } 




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

        if (spyWatch.id != "foi") {
          spyWatch.addEventListener("click", invis);
          spyWatch.id = "foi";
        }

        function invis() {
          spy.className = "invisi";
          retrato.classList.add("invis");
          spy.children[0].className = "invis";

          spyWatch.style.visibility = "hidden";
          botao.style.visibility = "hidden";
          retrato.style.backgroundImage = 'url("/pics/spyRetrato3.gif")';

          let spyInvisAu = ["spyInvis.mp3"];
          let spyInvisLineAu = ["spyInvisLine.mp3"];
          snd(spyInvisAu);
          snd(spyInvisLineAu);
        }

        for (let i = 0; i < 4; i++) {
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

            if (semcargo == inv.children[0]) {
              inv.replaceChild(empty1, semcargo);
            } else if (semcargo == inv.children[1]) {
              inv.replaceChild(empty2, semcargo);
            } else if (semcargo == inv.children[2]) {
              inv.replaceChild(empty3, semcargo);
            } else if (semcargo == inv.children[3]) {
              inv.replaceChild(empty4, semcargo);
            }

            spyWatch.style.visibility = "visible";
            retrato.style.backgroundImage = 'url("/pics/spyRetrato2.gif")';
            somaPontos();

            // audio
            let stabAu = ["stab.mp3", 0.5];
            snd(stabAu);

            if (gerarNumero(1, 3) == 2) {
              let spyAu = ["spy" + gerarNumero(1, 7) + ".mp3"];
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
        let poderEstoico = estoico.children[3].children[1];

        for (let i = 0; i < 4; i++) {
          if (
            efeitos.status == false &&
            inv.children[i].children[0].children[2].textContent ==
              " de Itapira" &&
            inv.children[i].id != "carta-monark"
          ) {
            let itapira = inv.children[i];

            efeitoEstoico.rodadas = parseInt(poderEstoico.textContent);
            efeitos = efeitoEstoico;

            butao.style.visibility = "hidden";

            if (itapira == inv.children[0]) {
              inv.replaceChild(empty1, itapira);
            } else if (itapira == inv.children[1]) {
              inv.replaceChild(empty2, itapira);
            } else if (itapira == inv.children[2]) {
              inv.replaceChild(empty3, itapira);
            } else if (itapira == inv.children[3]) {
              inv.replaceChild(empty4, itapira);
            }

            if (estoico == inv.children[0]) {
              inv.replaceChild(empty1, estoico);
            } else if (estoico == inv.children[1]) {
              inv.replaceChild(empty2, estoico);
            } else if (estoico == inv.children[2]) {
              inv.replaceChild(empty3, estoico);
            } else if (estoico == inv.children[3]) {
              inv.replaceChild(empty4, estoico);
            }
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

      function lucio(e) {
        let lucio = e.target.offsetParent;
        let lucioEnergia = lucio.children[3].children[0];
        let butao = lucio.children[3].children[2];
        let barreira = lucio.children[3].children[1];
        let ulti = lucio.children[2];
        let ultiReadyAu = ["ultiReadyLucio1.mp3"];

        for (let i = 0; i < 4; i++) {
          if (parseInt(ulti.textContent) < 100) {
            // se a carta for gentleman
            if (inv.children[i].id == "carta-gentleman") {
              let gentleman = inv.children[i];
              let poderVelho = inv.children[i].children[3].children[0];

              function matarCarta() {
                if (gentleman == inv.children[0]) {
                  inv.replaceChild(empty1, gentleman);
                } else if (gentleman == inv.children[1]) {
                  inv.replaceChild(empty2, gentleman);
                } else if (gentleman == inv.children[2]) {
                  inv.replaceChild(empty3, gentleman);
                } else if (gentleman == inv.children[3]) {
                  inv.replaceChild(empty4, gentleman);
                }
              }

              // se tiver pdoer novo, o adiquira e exclua a carta

              ulti =
                parseInt(ulti.textContent) + parseInt(poderVelho.textContent);

              if (ulti >= 100) {
                lucio.children[2].textContent = 100 + "%";
                matarCarta();
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

              matarCarta();

              let lucioGunAu = ["lucioGun" + gerarNumero(1, 2) + ".mp3"];

              snd(lucioGunAu);

              snd(morteAu);

              break;
            }
            //se tiver ulti
          } else {
            let ultiLucioAu = ["ultiLucio.oga"];
            snd(ultiLucioAu);

            let cartasQueOLucioGosta = ["jhin", "tank"];

            totalClicks += 25;
            arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";
            ulti.textContent = "0%";

            //colocar barreira
            for (let k = 0; k < 4; k++) {
              if (
                cartasQueOLucioGosta.some(
                  (el) =>
                    inv.children[k].id.includes(el) ||
                    (inv.children[k].id == "dva" &&
                      inv.children[
                        k
                      ].children[3].children[1].textContent.includes("💚"))
                )
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
        for (let j = 0; j < 4; j++) {
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
                inv.children[3].children[3].children[1].textContent != "💢"
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
                let jhinAu = ["jhin" + gerarNumero(1, 9) + ".mp3"];

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

              if (checkTiros() && atiradorCargo == baralhoCargo) {
                if (tiros == 2) {
                  tirosString.classList.add("critico");
                }
                // TULTIMO TIRO MULTIPLICA POR 4
                if (tiros == 1) {
                  energiaJhin.textContent =
                    energiaJhinNum + energiaVitima * 4 + "⚡";
                  cartaParaMover.classList.add("voar");
                  somaPontos();
                  setTimeout(tudo, 250);

                  let countAu = ["jhinConta4.mp3", 0.5];
                  snd(countAu);
                  snd(hit);
                  somDeath(350);
                  playJhinAu(1);
                } else {
                  energiaJhin.textContent =
                    energiaJhinNum + energiaVitima + 4 + "⚡";
                  cartaParaMover.classList.add("voar");
                  somaPontos();
                  setTimeout(tudo, 250);

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
        let barreira = dva.children[3].children[1];
        let ulti = dva.children[2];
        let retratoFoto = dva.children[1];
        let hp = dva.children[3].children[1];

        for (let i = 0; i < 4; i++) {
          if (parseInt(ulti.textContent) < 100) {
            // se a carta for gentleman
            if (
              inv.children[i].id == "-click" ||
              inv.children[i].id == "especial-click"
            ) {
              let gentleman = inv.children[i];
              let poderVelho = inv.children[i].children[3].children[0];

              // se tiver pdoer novo, o adiquira e exclua a carta

              ulti =
                parseInt(ulti.textContent) +
                parseInt(poderVelho.textContent) * 2;

              if (ulti > 100) {
                dva.children[2].textContent = 100 + "%";
                // dva.children[2].textContent = 100 + "";
              } else {
                dva.children[2].textContent = ulti + "%";
              }

              if (gentleman == inv.children[0]) {
                inv.replaceChild(empty1, gentleman);
              } else if (gentleman == inv.children[1]) {
                inv.replaceChild(empty2, gentleman);
              } else if (gentleman == inv.children[2]) {
                inv.replaceChild(empty3, gentleman);
              } else if (gentleman == inv.children[3]) {
                inv.replaceChild(empty4, gentleman);
              }
              break;
            }
            //se tiver ulti
          } else {
            // butao.style.visibility = 'hidden'

            hp.textContent = "3💚";

            retratoFoto.style.backgroundImage = 'url("/pics/dva.webp")';
            dva.children[2].textContent = "";

            let pontoDeTodos = 0;
            let pontoDeTodosEsp = 0;

            for (let j = 0; j < 4; j++) {
              let ponto = inv.children[j].children[3].children[0];
              let cartaEspecial =
                inv.children[j].className == "cartaEsp" &&
                inv.children[j].id != "dva";
              let cartaNormal =
                inv.children[j].children[0].children[2].textContent != "";
              // if(ponto.textContent != ''){

              if (cartaEspecial) {
                pontoDeTodosEsp = pontoDeTodosEsp + 50;
              } else if (cartaNormal) {
                pontoDeTodos =
                  pontoDeTodos + Math.trunc(parseInt(ponto.textContent) * 1.2);
              }
            }
            dvaEnergia.textContent = 1 + pontoDeTodos + pontoDeTodosEsp + "⚡";

            function dvaSelfDestroy() {
              if (dva != inv.children[0] && inv.children[0].id != "tank") {
                inv.replaceChild(empty1, inv.children[0]);
              }
              if (dva != inv.children[1] && inv.children[1].id != "tank") {
                inv.replaceChild(empty2, inv.children[1]);
              }
              if (dva != inv.children[2] && inv.children[2].id != "tank") {
                inv.replaceChild(empty3, inv.children[2]);
              }
              if (dva != inv.children[3] && inv.children[3].id != "tank") {
                inv.replaceChild(empty4, inv.children[3]);
              }

              for (let j = 0; j < 4; j++) {
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
function abelha() {
  let beeHitAu = ["hitAbelha.mp3", 0.1];

  for (let i = 0; i < 4; i++) {
    if (inv.children[i].id != "empty") {
      //

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

          if (abelha == inv.children[0]) {
            inv.replaceChild(empty1, abelha);
          } else if (abelha == inv.children[1]) {
            inv.replaceChild(empty2, abelha);
          } else if (abelha == inv.children[2]) {
            inv.replaceChild(empty3, abelha);
          } else if (abelha == inv.children[3]) {
            inv.replaceChild(empty4, abelha);
          }

          let beeDeathAu = ["deathAbelha.mp3", 0.7];
          snd(beeDeathAu);

          somaPontos();
        } else if (
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

        for (let j = 0; j < 4; j++) {
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
let cartaMao = mao.children[0];

function deletarDeck(e) {
  if (
    e.target.className == "retrato" ||
    e.target.className == "retrato invis" ||
    e.target.className == "retratoEsp" ||
    e.target.className == "retratoEsp invis"
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

      boss.dmg(energia);
    }

    if (
      (e.target.offsetParent.id != "carta-monark" ||
        (e.target.offsetParent.id == "carta-monark" &&
          e.target.offsetParent.className == "monark vanish")) &&
      chosenCard == 0
    ) {
      if (e.target.offsetParent == inv.children[0]) {
        dmgBoss();
        venderCartaDeck();
        inv.replaceChild(empty1, e.target.offsetParent);
        ativarBtn();
        somaPontos();
      } else if (e.target.offsetParent == inv.children[1]) {
        dmgBoss();
        venderCartaDeck();
        inv.replaceChild(empty2, e.target.offsetParent);
        somaPontos();
      } else if (e.target.offsetParent == inv.children[2]) {
        dmgBoss();
        venderCartaDeck();
        inv.replaceChild(empty3, e.target.offsetParent);
        ativarBtn();
        somaPontos();
      } else if (e.target.offsetParent == inv.children[3]) {
        dmgBoss();
        venderCartaDeck();
        inv.replaceChild(empty4, e.target.offsetParent);
        ativarBtn();
        somaPontos();
      }
    } else {
      let naoAu = ["nao.mp3"];
      snd(naoAu);
    }
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyD") {
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

  let current = start;
  let novo = start + plus;
  let range = Math.abs(start - plus);

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

      if (chosenCard == mao.children[0]) {
        mao.replaceChild(mao0, chosenCard);
      } else if (chosenCard == mao.children[1]) {
        mao.replaceChild(mao1, chosenCard);
      } else if (chosenCard == mao.children[2]) {
        mao.replaceChild(mao2, chosenCard);
      } else if (chosenCard == mao.children[3]) {
        mao.replaceChild(mao3, chosenCard);
      } else if (chosenCard == mao.children[4]) {
        mao.replaceChild(mao4, chosenCard);
      } else if (chosenCard == mao.children[5]) {
        mao.replaceChild(mao5, chosenCard);
      }

      chosenCard = 0;

      vendas.update(-1);
    } else {
      snd(naoAu);
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
  inv.replaceChild(empty1, inv.children[0]);
  inv.replaceChild(empty2, inv.children[1]);
  inv.replaceChild(empty3, inv.children[2]);
  inv.replaceChild(empty4, inv.children[3]);
  totalClicks = 50;
  somaPontos();
  tudo();
  jaMovi = false;

  blockInv();
  cartaCustom = input.length >= 3;

  getSeed.className = "";
  zerarMoney();
  limparEsp();
  vendas.set(25);
}

/////// CRITICO

function blockInv() {
  let cartaNotEspecial = copyCard.children[0].children[3].textContent == "";
  let customOff = getSeed.className == "customOff";
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

  if (numCartas.total > 0) {
    if (numCartas.total == 1) {
      showVersion();
      button.style.backgroundColor = "red";
      button.innerHTML = "0 CARTAS";
    } else {
      button.style.backgroundColor = "";
      button.innerHTML = "&#127381; PASSAR CARTA &#127381;";
    }
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
    moverCartaMonark();
    numCartas.remove(1)
    abelha();
    colocarEfeito();
    verificarCartaParaMover();
    blockInv();
    ativarBtn();
    poderBoss();
  } else {
  }
}

// COOLDOWNS
let chuvaCooldown = false

function poderBoss() {


  if (boss) {
    if (boss.name == "monark") {
      //CHUVA DE MONARK
      
      console.log(chuvaCooldown);
      if (gerarNumero(1, 10) == 1) {
        if(chuvaCooldown == false){

          boss.chuvaDeMonark(true);
          chuvaCooldown = true
          setTimeout(()=> chuvaCooldown = false, 7000)
        }
      }
    }
  }
}

let aumentou = false;

let numCartas= {

  total: 50,

  add(n){
    this.total += n
    arenaP.textContent = "VOCÊ TEM " + this.total + " CARTAS"
  },

  remove(n){
    this.total -= n

    if(this.total <0){
      this.total = 0
    }
    arenaP.textContent = "VOCÊ TEM " + this.total + " CARTAS"
  },

  set(n){
    this.total = n
    arenaP.textContent = "VOCÊ TEM " + this.total + " CARTAS"

  }

}

function clicks() {
  if (!seedObj._isPutByPlayer) {
    totalClicks--;
    rodadas++;
    aumentou = true;

    arenaP.innerHTML = "VOCÊ TEM " + totalClicks + " CARTAS";
  } else {
    aumentou = false;
  }

  //
}
let totalPontos = 0;

export function somaPontos() {
  let ponto0 = 0;
  let ponto1 = 0;
  let ponto2 = 0;
  let ponto3 = 0;

  let cartasSemEnergia = [
    "comunista",
    "especial-click",
    "-click",
    "estoico",
    "premiomonark",
  ];
  //cartas que tem Energia, mas o segundo ataque nao é energia
  let cartasComEnergiaSemCritico = ["spy", "lucio", "abelha", "speaker"];

  // inv 0
  if (
    inv.children[0].id != "empty1" &&
    !cartasSemEnergia.some((el) => inv.children[0].id.includes(el))
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero

    ponto0 = parseInt(inv.children[0].children[3].children[0].textContent);
    //
  }

  // inv 1
  if (
    inv.children[1].id != "empty2" &&
    !cartasSemEnergia.some((el) => inv.children[1].id.includes(el))
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero

    ponto1 = parseInt(inv.children[1].children[3].children[0].textContent);
    //
  }

  // inv 2
  if (
    inv.children[2].id != "empty3" &&
    !cartasSemEnergia.some((el) => inv.children[2].id.includes(el))
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero

    ponto2 = parseInt(inv.children[2].children[3].children[0].textContent);
    //
  }

  // inv 3
  if (
    inv.children[3].id != "empty4" &&
    !cartasSemEnergia.some((el) => inv.children[3].id.includes(el))
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero

    ponto3 = parseInt(inv.children[3].children[3].children[0].textContent);
    //
  }

  totalPontos = ponto0 + ponto1 + ponto2 + ponto3;
  placarP.innerHTML = totalPontos + " ⚡";
  //
  //
  //
  //
  //
  //
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
let teclaMoverCarta = "Space";

cartaParaMover.addEventListener("click", moverToCartaMao);

document.addEventListener("keydown", (event) => {
  if (copyCard) {
    if (event.code == teclaMoverCarta) {
      if (!getSeedChecked()) {
        moverToCartaMao();
      }
    }
  }
});

inv.addEventListener("click", deletarDeck);

for (let p = 0; p < 4; p++) {
  let slot = inv.children[p].children[1];
  slot.addEventListener("click", deletarDeck);
}

// btnReset.addEventListener('click', moverCartaMonark)

btnReset.addEventListener("click", resetarDeck);

// DECK COMECA COM 4 CARTAS

let teclaDeckPronto = "KeyG";
function deckPronto() {
  

  


  

    
  resetarDeck();

  mao.replaceChild(mao0, mao.children[0]);
  mao.replaceChild(mao1, mao.children[1]);
  mao.replaceChild(mao2, mao.children[2]);
  mao.replaceChild(mao3, mao.children[3]);
  mao.replaceChild(mao4, mao.children[4]);
  mao.replaceChild(mao5, mao.children[5]);

  for (let i = 0; i < 6; i++) {
    moverToCartaMao();
    
  }
  rodadas = 0;
  resetBoss();
  
  numCartas.set(50)


  
  
  
}

document.addEventListener("keydown", (event) => {
  if (event.code == teclaDeckPronto) {
    if (!getSeedChecked()) {
      
      location.reload()
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyR") {
    if (!getSeedChecked()) {
      resetarDeck();
    }
  }
});

document.getElementById("G").addEventListener("click", deckPronto);

window.onload = (event) => {
  tudo();
  deckPronto();;
  spawnBoss();
};


document.addEventListener("contextmenu", function () {
  //
  return false;
});

// document.getElementById("empty1").addEventListener("click", moverOne);
// document.getElementById("empty2").addEventListener("click", moverTwo);
// document.getElementById("empty3").addEventListener("click", moverThree);
// document.getElementById("empty4").addEventListener("click", moverFour);
