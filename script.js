let DEBUG = true;
// let DEBUG = false

import { seedObj, start } from "./modules/seedFabricator.js";

import {
  escolherIntegrante,
  integrante,
  integrantes,
} from "./modules/integrante.js";
import { escolherCidade, cidade } from "./modules/cidade.js";

import { cargo, escolherCargo, cargos } from "./modules/cargo.js";

let premioMarino = cargos.premiomarino;
let primeMinister = cargos.primeMinister;
let ministro = cargos.ministro;
let monark = cargos.monark;
let lord = cargos.lord;
let nobre = cargos.nobre;
let gentleman = cargos.gentleman;
let people = cargos.people;
let semCargo = cargos.semCargo;
let noCargo = cargos.noCargo;

import { variante, escolherVariante } from "./modules/variante.js";

import { especial, escolherEspecial, especiais } from "./modules/especial.js";

import { energia, escolherPoder } from "./modules/energia.js";

let tenica = especiais.tenica;
let speaker = especiais.speaker;
let bonusCartasMais = especiais.bonusCartasMais;
let abelha = especiais.abelha;
let cartaNaoEspecial = especiais.notSpecial;

import { criticoTag, criticoCheck } from "./modules/critico.js";

///////   ^^^^^^^^IMPORTS IMPORTS^^^^^^



////D O M
let button = document.getElementById("btn");
let inv = document.getElementById("inv");
let arenaP = document.querySelector(".arena");
let nomeP = document.querySelector("#nome");
let cidadeP = document.querySelector("#cidade");
let retratoP = document.querySelector(".retrato");
let cargoP = document.querySelector(".cargo");
let varianteP = document.querySelector("#variante");
let actionP = document.querySelector(".action");
let novoAtaqueP = document.querySelector(".novoAtaque");
let placarP = document.querySelector(".placar");
let ataqueP = document.querySelector(".ataque");
let seedP = document.querySelector(".seed");
let cartaP = document.getElementById("carta");


//DOM INV
let deckOne = document.getElementById("inv1");
let deckTwo = document.getElementById("inv1");
let deckThree = document.getElementById("inv1");
let deckFour = document.getElementById("inv1");

let nome1 = document.querySelector("#nome1");
let nome2 = document.querySelector("#nome2");
let nome3 = document.querySelector("#nome3");
let nome4 = document.querySelector("#nome4");

let cidade1 = document.querySelector("#cidade1");
let cidade2 = document.querySelector("#cidade2");
let cidade3 = document.querySelector("#cidade3");
let cidade4 = document.querySelector("#cidade4");

let retrato1 = document.querySelector(".retrato1");
let retrato2 = document.querySelector(".retrato2");
let retrato3 = document.querySelector(".retrato3");
let retrato4 = document.querySelector(".retrato4");

let cargo1 = document.querySelector(".cargo1");
let cargo2 = document.querySelector(".cargo2");
let cargo3 = document.querySelector(".cargo3");
let cargo4 = document.querySelector(".cargo4");

let variante1 = document.querySelector("#variante1");
let variante2 = document.querySelector("#variante2");
let variante3 = document.querySelector("#variante3")
let variante4 = document.querySelector("#variante4");

let action1 = document.querySelector(".action1");
let action2 = document.querySelector(".action2");
let action3 = document.querySelector(".action3");
let action4 = document.querySelector(".action4");

let novoAtaque1 = document.querySelector(".novoAtaque1");
let novoAtaque2 = document.querySelector(".novoAtaque2");
let novoAtaque3 = document.querySelector(".novoAtaque3");
let novoAtaque4 = document.querySelector(".novoAtaque4");


let ataque1 = document.querySelector(".ataque1");
let ataque2 = document.querySelector(".ataque2");
let ataque3 = document.querySelector(".ataque3");
let ataque4 = document.querySelector(".ataque4");

let seed1 = document.querySelector(".seed1");
let seed2 = document.querySelector(".seed2");
let seed3 = document.querySelector(".seed3");
let seed4 = document.querySelector(".seed4");

let carta1 = document.getElementById("carta1");
let carta2 = document.getElementById("carta2");
let carta3 = document.getElementById("carta3");
let carta4 = document.getElementById("carta4");

let baralho;

function limpaCarta() {
  cartaP.style.backgroundImage = "";
  cartaP.style.border = "none";
  cartaP.style.color = "";
  actionP.style.visibility = "hidden";
  ataqueP.style.textDecorationLine = "";
  ataqueP.id = "";
  novoAtaqueP.innerHTML = "";
  novoAtaqueP.style.fontSize = "";
  retratoP.style.backgroundSize = "";
  cargoP.style.fontSize = "";
  cargoP.style.color = "";
  cargoP.style.fontWeight = "";
  cargoP.style.fontFamily = "";
  ataqueP.style.color = "";
  ataqueP.style.fontSize = "";
  ataqueP.textContent = "";
  varianteP.innerHTML = "";
}

function colocarInfoNoWrap() {
 
  if (especial == cartaNaoEspecial) {
    baralho = {
      cartaId: cargo.nome,
      nome: integrante.nome,
      variante: variante.display,
      cidade: cidade,
      retrato: integrante.retrato,
      cargo: cargo.display,
      energia: energia.energiaTotal + integrante.emoji,
      energia2: energia.energiaTotal * criticoTag.multi + integrante.emoji,
      poder: 'hidden' ,
      seed: seedObj._seedString,
      

      isCritico:{
        criticoNome: criticoTag.css.nomeP,
        criticoVariante: criticoTag.css.varianteP,
        criticoCidade: criticoTag.css.cidadeP,
        criticoCarta: criticoTag.css.cartaP,
        criticoEnergia: criticoTag.energia.ataque,
        criticoEnergia2: criticoTag.energia.ataqueNovo,
        criticoEnergia2FontSize: criticoTag.energia.ataqueNovoFontSize,
        criticoEnergia2Critico: criticoTag.energia.ataqueNovoCritico
      },
      cssCarta:{
        cargoFontSize: cargo.css.cargoPFontSize,
        cargoFontWeight: cargo.css.cargoPFontWeight,
        retratoBorder: cargo.css.retratoPBorder,
        energiaFontSize: cargo.css.ataquePFontSize,
        retratoBGSize: cargo.css.retratoBackgroundSize,
        energiaColor: cargo.css.ataquePColor,
        energia2Color: cargo.css.epColor,
        energia2FontSize: cargo.css.epFontSize,
        cartaBorder: cargo.css.cartaBorder
      }

    };
  } else {
    baralho = {
      cartaId: especial.cartaId,
      nome: especial.nome,
      variante: '',
      cidade: '',
      retrato: especial.retrato,
      cargo: especial.descricao,
      energia: especial.energia + especial.emoji,
      energia2: especial.pontoEspecial + especial.emojiEsp,
      poder: "visible",
      seed: seedObj._seedString,

      isCritico:{
        criticoNome: '',
        criticoVariante: '',
        criticoCidade:'',
        criticoCarta: '',
        criticoEnergia: '',
        criticoEnergia2: '',
        criticoEnergia2FontSize: '',
        criticoEnergia2Critico: ''
      },
      cssCarta:{
        cargoFontSize: especial.css.cargoPFontSize,
        cargoFontWeight: especial.css.cargoPFontWeight,
        retratoBorder: especial.css.retratoPBorder,
        energiaFontSize: especial.css.ataquePFontSize,
        retratoBGSize: especial.css.retratoBackgroundSize,
        energiaColor: especial.css.ataquePColor,
        energia2Color: especial.css.epColor,
        energia2FontSize: especial.css.epFontSize,
        cartaBorder: especial.css.cartaBorder
      }

    };
  }

  //ESPECIAIS
  limpaCarta();
  //DOM
  //CARTA NORMAL
    cartaP.id = baralho.cartaId
    cartaP.style.border = baralho.cssCarta.cartaBorder

    nomeP.innerHTML = baralho.nome
    varianteP.innerHTML = baralho.variante;
    cidadeP.innerHTML = baralho.cidade;

    retratoP.style.backgroundImage = baralho.retrato;
    retratoP.style.border = baralho.cssCarta.retratoBorder;

    cargoP.innerHTML = baralho.cargo + cargo.emoji;
    cargoP.style.fontSize = baralho.cssCarta.cargoFontSize;
    cargoP.style.fontWeight = baralho.cssCarta.cargoFontWeight;

    ataqueP.innerHTML = baralho.energia 
    ataqueP.style.color = baralho.cssCarta.energiaColor;
    ataqueP.style.fontSize = baralho.cssCarta.energiaFontSize;

    novoAtaqueP.innerHTML = baralho.energia2
    novoAtaqueP.style.color = baralho.cssCarta.energia2Color;

    novoAtaqueP.style.fontSize = baralho.cssCarta.energia2FontSize;
    seedP.innerHTML = baralho.seed


    //critico
    cartaP.className = baralho.isCritico.criticoCarta;
    nomeP.className = baralho.isCritico.criticoNome;
    varianteP.className = baralho.isCritico.criticoVariante;
    cidadeP.className = baralho.isCritico.criticoCidade;
    ataqueP.style.textDecorationLine = baralho.isCritico.criticoEnergia;
    novoAtaqueP.style.visibility = baralho.isCritico.criticoEnergia2;
    novoAtaqueP.style.fontSize = baralho.isCritico.criticoEnergia2FontSize;
    novoAtaqueP.className = baralho.isCritico.criticoEnergia2Critico;

    
  arenaP.innerHTML = totalClicks + " CARTAS";
  placarP.innerHTML = totalPontos + " PONTOS";

  DEBUG && console.log("baralho: ", baralho);
  DEBUG && console.log("criticoTag: ", criticoTag);
}

let cloneBaralho;

const invEmpty ={
  
}


function criarInvOne() {
  cloneBaralho = Object.assign({isEmpty: false}, baralho);
  // invTwo = Object.assign({isEmpty: true}, baralho);
  // invThree = Object.assign({isEmpty: true}, baralho);
  // invFour = Object.assign({isEmpty: true}, baralho);
}




function moverInvOne() {

    carta1.id = cloneBaralho.cartaId
    nome1.innerHTML = cloneBaralho.nome
    cidade1.innerHTML = cloneBaralho.cidade;
    retrato1.style.backgroundImage = cloneBaralho.retrato;
    cargo1.innerHTML = cloneBaralho.cargo + cargo.emoji;
    ataque1.innerHTML = cloneBaralho.energia 
    novoAtaque1.innerHTML = cloneBaralho.energia2
    seed1.innerHTML = cloneBaralho.seed
}
function moverInvTwo() {
    
    carta2.id = cloneBaralho.cartaId
    nome2.innerHTML = baralho.nome
    cidade2.innerHTML = baralho.cidade;
    retrato2.style.backgroundImage = baralho.retrato;
    cargo2.innerHTML = baralho.cargo + cargo.emoji;
    ataque2.innerHTML = baralho.energia 
    novoAtaque2.innerHTML = baralho.energia2
    seed2.innerHTML = baralho.seed
}
function moverInvThree() {
    
    carta3.id = baralho.cartaId
    nome3.innerHTML = baralho.nome
    cidade3.innerHTML = baralho.cidade;
    retrato3.style.backgroundImage = baralho.retrato;
    cargo3.innerHTML = baralho.cargo + cargo.emoji;
    ataque3.innerHTML = baralho.energia 
    novoAtaque3.innerHTML = baralho.energia2
    seed3.innerHTML = baralho.seed
}
function moverInvFour() {
    
    carta4.id = baralho.cartaId
    nome4.innerHTML = baralho.nome
    cidade4.innerHTML = baralho.cidade;
    retrato4.style.backgroundImage = baralho.retrato;
    cargo4.innerHTML = baralho.cargo + cargo.emoji;
    ataque4.innerHTML = baralho.energia 
    novoAtaque4.innerHTML = baralho.energia2
    seed4.innerHTML = baralho.seed
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

/////

// DECK DECK DECK

let cartaParaMover = document.getElementById("pack").firstElementChild;
let copyCard = "";

function moverCarta() {
  let seedCopyCard = cartaParaMover.children[4].textContent;
  // DEBUG && console.log("em mover carta ", seedObj);

  blockInv();

  copyCard = cartaParaMover.cloneNode(true);
  let cartaNotEspecial = copyCard.children[0].children[3].textContent == "";
  let customOff = getSeed.className == "customOff";

  let cartaNotMonark = copyCard.id == monark;

  let PodeMover =
    (!seedObj._isSeedReal && cartaNotEspecial) ||
    (!seedObj._isSeedReal && cartaNotMonark) ||
    (seedObj._isSeedReal && !seedObj._isPutByPlayer);

  let naoMoviAinda = !customOff || (customOff && !seedObj._isPutByPlayer);

  // copySeed = copy.getElementsByClassName('seed')
  // cardShrinker(copyCard)
  if (
    // PodeMover &&

    naoMoviAinda
  ) {
    if (inv.children[0].id != "empty") {
      if (
        inv.children[0].children[4].textContent !=
        cartaParaMover.children[4].textContent
      ) {
        if (inv.children[1].id == "empty") {
          if (
            copyCard.children[0].children[1].textContent != "" ||
            copyCard.children[0].children[3].textContent != ""
          ) {
            copyCard.children[3].children[2].style.visibility = "visible";
          }
          if (seedObj._isPutByPlayer) {
            getSeed.className = "customOff";
          }

          inv.replaceChild(copyCard, inv.children[1]);

          somaPontos();
          tudo();
        } else if (
          inv.children[2].id == "empty" &&
          seedCopyCard != inv.children[1].children[4].textContent
        ) {
          if (
            copyCard.children[0].children[1].textContent != "" ||
            copyCard.children[0].children[3].textContent != ""
          ) {
            copyCard.children[3].children[2].style.visibility = "visible";
          }

          if (seedObj._isPutByPlayer) {
            getSeed.className = "customOff";
          }

          inv.replaceChild(copyCard, inv.children[2]);

          somaPontos();
          tudo();
        } else if (
          inv.children[3].id == "empty" &&
          seedCopyCard != inv.children[2].children[4].textContent
        ) {
          if (
            copyCard.children[0].children[1].textContent != "" ||
            copyCard.children[0].children[3].textContent != ""
          ) {
            copyCard.children[3].children[2].style.visibility = "visible";
          }
          if (seedObj._isPutByPlayer) {
            getSeed.className = "customOff";
          }

          inv.replaceChild(copyCard, inv.children[3]);

          somaPontos();
          tudo();
        }
      }
    } else {
      // if (cartaParaMover.children[0].children[1].textContent != ''){
      //     copyCard.children[3].children[2].style.visibility = 'visible'
      // }
      if (
        copyCard.children[0].children[1].textContent != "" ||
        copyCard.children[0].children[3].textContent != ""
      ) {
        copyCard.children[3].children[2].style.visibility = "visible";
      }

      if (seedObj._isPutByPlayer) {
        getSeed.className = "customOff";
      }

      inv.replaceChild(copyCard, inv.children[0]);

      somaPontos();
      tudo();
    }
    criarBtn();
  } else {
    false;
    // getSeed.setAttribute('class', 'customOn')
    DEBUG && console.log("NAO MOVI");
  }

  // if(jaPassouACarta){
  //   false

  // }
}

let copyCardSeed;
let copyCardName;

function moverCartaMonark() {
  copyCard = cartaParaMover.cloneNode(true);
  copyCardSeed = copyCard.children[4].textContent;
  copyCardName = copyCard.children[0].children[0].textContent;

  // DEBUG && console.log("no mvoer monark", seedObj);

  if (seedObj._isPutByPlayer) {
    false;
  } else {
    if (copyCard.id === monark) {
      if (inv.children[0].id === "empty" && copyCard.id === monark) {
        inv.replaceChild(copyCard, inv.children[0]);
        somaPontos();
      } else if (
        inv.children[1].id === "empty" &&
        copyCard.id === monark &&
        copyCardSeed != inv.children[0].children[4].textContent
      ) {
        inv.replaceChild(copyCard, inv.children[1]);
        somaPontos();
      } else if (
        inv.children[2].id === "empty" &&
        copyCard.id === monark &&
        copyCardSeed != inv.children[1].children[4].textContent
      ) {
        inv.replaceChild(copyCard, inv.children[2]);
        somaPontos();
      } else if (
        inv.children[3].id === "empty" &&
        copyCard.id === monark &&
        copyCardSeed != inv.children[2].children[4].textContent
      ) {
        inv.replaceChild(copyCard, inv.children[3]);
        somaPontos();

        //MONARK SUBSTITUI O HOMONIMO -------------------------
      } else if (
        copyCardName === inv.children[0].children[0].children[0].textContent &&
        copyCard.id != inv.children[0].id
      ) {
        inv.replaceChild(copyCard, inv.children[0]);
        somaPontos();
      } else if (
        copyCardName === inv.children[1].children[0].children[0].textContent &&
        copyCard.id != inv.children[1].id
      ) {
        inv.replaceChild(copyCard, inv.children[1]);
        somaPontos();
      } else if (
        copyCardName === inv.children[2].children[0].children[0].textContent &&
        copyCard.id != inv.children[2].id
      ) {
        inv.replaceChild(copyCard, inv.children[2]);
        somaPontos();
      } else if (
        copyCardName === inv.children[3].children[0].children[0].textContent &&
        copyCard.id != inv.children[3].id
      ) {
        inv.replaceChild(copyCard, inv.children[3]);
        somaPontos();
      }
      tudo();
    }
  }
}

const cartaParaMoverNome = cartaParaMover.children[0].children[0].textContent;
const cartaParaMoverCidade = cartaParaMover.children[0].children[1].textContent;

function critico() {
  //nome

  const cartaCritica = seedString[1] === seedString[2];
  const cartaSuperCritica =
    seedString[4] == 4 && seedString[5] == 9 && seedString[6] == 0;

  let corDoNome = cartaParaMover.children[0].children[0];
  let corDaCidade = cartaParaMover.children[0].children[2];

  cartaParaMover.children[0].children[1].style.color = "";
  //cidade
  cartaParaMover.children[0].children[0].style.color = "";
  //cidade negrito
  cartaParaMover.children[0].children[1].style.fontWeight = "";
  // cartaParaMover.classList.remove(criticoTag.css.);
  // corDaCidade.classList.add(criticoTag.css.);
  //PODER
  let poderTremer = cartaParaMover.children[3].children[0];
  let poderNovo = cartaParaMover.children[3].children[1];

  //gandalf
  if (
    cartaParaMover.id != monark &&
    cartaParaMover.id != speaker &&
    cartaParaMover.children[0].children[3].textContent == ""
  ) {
    if (cartaCritica) {
      // corDaCidade.classList.add(criticoTag.css.);
      // corDoNome.classList.add(criticoTag.css.);
      // cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      // poderTremer.style.textDecorationLine = "line-through";
      // poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (cartaSuperCritica) {
        // cartaParaMover.classList.add(criticoTag.css.);
        // varianteP.classList.add(criticoTag.css.);
        // poderNovo.classList.add(criticoTag.css.);

        // poderTremer.style.textDecorationLine = "line-through";
        // poderNovo.textContent = parseInt(poderTremer.textContent) * 5 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
  }
}
// getSeed.setAttribute('class', 'customOff')

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

        // PODER VARIANTES
        // se nao for especial
        if (
          inv.children[i].children[0].children[1].textContent != "" &&
          inv.children[i].children[0].id != "foi"
        ) {
          inv.children[i].children[3].children[2].addEventListener(
            "click",
            testinho
          );
          inv.children[i].children[0].id = "foi";
        }

        // essa funçao se ativa quando clico no butao das cartas variante no deck
        function testinho(e) {
          let semBoost = cartaParaMover.children[3].children[0].id == "";
          let boostar = (cartaParaMover.children[3].children[0].id = "boost");
          let poderCartaPack = cartaParaMover.children[3].children[0];
          let poderNovoCartaPack = cartaParaMover.children[3].children[1];
          let cartaNaoEspecial =
            cartaParaMover.children[0].children[3].textContent == "";
          let cartaNaoVariante =
            cartaParaMover.children[0].children[1].textContent == "";
          let cartaNaoMonark = cartaParaMover.id != monark;
          // let poderCartaInv = inv.children[i].children[3].children[2]

          // se a carta para mover nao for especial
          if (
            cartaNaoEspecial &&
            cartaNaoVariante &&
            cartaNaoMonark &&
            semBoost
          ) {
            let cartaVariante = e.target.offsetParent;
            let emojiVariante = "🌟";
            //

            let cartaVariantePoderVelho = cartaVariante.children[3].children[0];
            //

            let cartaVariantePoderNovo = cartaVariante.children[3].children[1];
            //

            let varianteTemPoderNovo =
              cartaVariante.children[3].children[1].textContent != "";
            //

            // a o butao fica invisivel quando clicado
            e.target.style.visibility = "hidden";

            //se nao CartaPMover NAO tiver poder novo
            if (poderNovoCartaPack.textContent == "") {
              if (varianteTemPoderNovo) {
                // transforme poder velho da CartaPack em novo da inv
                poderCartaPack.textContent =
                  parseInt(cartaVariantePoderNovo.textContent) +
                  parseInt(poderCartaPack.textContent) +
                  emojiVariante;
                boostar;

                // se nao, transforme poder velho CartaPMover em poder velho inv
              } else {
                // transaforme o poder velho da CartaPack no poder velho da carta inv 0
                poderCartaPack.textContent =
                  parseInt(cartaVariantePoderVelho.textContent) +
                  parseInt(poderCartaPack.textContent) +
                  emojiVariante;
                boostar;
              }
            }

            // se carta para mover TIVER poder novo
            else {
              // e se a carta inv tiver poder novo
              if (varianteTemPoderNovo) {
                // transforme poder novo da CartaPack em novo da inv
                poderNovoCartaPack.textContent =
                  parseInt(cartaVariantePoderNovo.textContent) +
                  parseInt(poderNovoCartaPack.textContent) +
                  emojiVariante;
                boostar;
              } else {
                // transforme o poder novo da CartaPack no poder velho da inv 0
                poderNovoCartaPack.textContent =
                  parseInt(cartaVariantePoderVelho.textContent) +
                  parseInt(poderNovoCartaPack.textContent) +
                  emojiVariante;
                boostar;
              }
            }
          }
        }

        //   PODER speaker
        if (
          inv.children[i].id == speaker &&
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

            if (inv.children[j].id == monark) {
              if (parseInt(pontoSpeaker.textContent) < pontoParaDormir) {
                pontoSpeaker.textContent =
                  parseInt(pontoSpeaker.textContent) * multiplicador + " 😡";

                inv.children[j].remove();
                inv.appendChild(document.createElement("div")).id = "empty";

                // pontoSpeaker = Math.trunc(parseInt(pontoSpeaker) * 2) + '😡'

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
              }
            }
          }
        }
      }

      // PODER CLICKS
      if (
        inv.children[i].id == bonusCartasMais &&
        inv.children[i].children[0].id != "foi"
      ) {
        inv.children[i].children[3].children[2].addEventListener(
          "click",
          cartaClique
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

        varianteClique.children[3].children[2].style.visibility = "hidden";
        button.style.backgroundColor = "";
        button.innerHTML = "&#127381; NOVA CARTA &#127381;";
        arenaP.innerHTML = totalClicks + " CARTAS";
        varianteClique.remove();
        inv.appendChild(document.createElement("div")).id = "empty";
      }

      // PODER TENICA
      if (
        inv.children[i].id == tenica &&
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

        varianteTenica.children[3].children[2].style.visibility = "hidden";

        let poderCartaPack = cartaParaMover.children[3].children[0];
        let poderNovoCartaPack = cartaParaMover.children[3].children[1];
        // tudo()

        if (
          cartaParaMover.id != bonusCartasMais &&
          cartaParaMover.id != tenica
        ) {
          if (poderNovoCartaPack.textContent != "") {
            poderNovoCartaPack.textContent =
              parseInt(poderNovoCartaPack.textContent) +
              parseInt(varianteTenica.children[3].children[0].textContent) +
              "👑";
          } else {
            poderCartaPack.textContent =
              parseInt(poderCartaPack.textContent) +
              parseInt(varianteTenica.children[3].children[0].textContent) +
              "👑";
          }
        }

        for (let j = 0; j < 4; j++) {
          if (
            inv.children[j].id != bonusCartasMais &&
            inv.children[j].id != "empty" &&
            inv.children[j].id != tenica
          ) {
            // se o poder novo for presente
            if (inv.children[j].children[3].children[1].textContent != "") {
              inv.children[j].children[3].children[1].textContent =
                parseInt(inv.children[j].children[3].children[1].textContent) +
                parseInt(varianteTenica.children[3].children[0].textContent) +
                "👑";
            } else {
              inv.children[j].children[3].children[0].textContent =
                parseInt(inv.children[j].children[3].children[0].textContent) +
                parseInt(varianteTenica.children[3].children[0].textContent) +
                "👑";
            }
          }
        }
        somaPontos();
      }
    }
  }
}

// if (inv.children[0].id != 'empty' && inv.children[1].id != 'empty' && inv.children[2].id != 'empty' && inv.children[3].id != 'empty') {

//     DEBUG && console.log ('sem loop')

// }

/****************************************** */
// TIRAR CARTA DO INVENTARIO
// /******************************************** */

let btnReset = document.getElementById("btnReset");

function deletarDeck(e) {
  // 1.0Se a carta nao for Monark
  if (
    e.target.id != monark &&
    e.target.parentElement.id != monark &&
    e.target.parentElement.parentElement.id != monark &&
    e.target.id != "inv" &&
    e.target.id != "empty" &&
    e.target.className != "action" &&
    e.target.className == "retrato"
  ) {
    //

    // 1.1 se for a carta inteira
    if (e.target.id != "inv" && e.target.childElementCount === 5) {
      e.target.remove();
      inv.appendChild(document.createElement("div")).id = "empty";
      somaPontos();

      //1.2 se nao for a seed
    } else if (
      e.target.id != "inv" &&
      e.target.childElementCount != 5 &&
      e.target.className != "seed"
    ) {
      //

      // 1.2.1 se for filho da carta
      if (
        e.target.parentElement.children[0].className ===
          "nameAndCidadeWrapper" &&
        e.target.id != "inv"
      ) {
        //
        e.target.parentElement.remove();
        inv.appendChild(document.createElement("div")).id = "empty";
        somaPontos();
      }

      // 1.2.2 se nao for nada disso, sera filho do filho
      else {
        //
        e.target.parentElement.parentElement.remove();
        inv.appendChild(document.createElement("div")).id = "empty";
        somaPontos();
      }
    }
  }
}

function resetarDeck() {
  getSeed.setAttribute("class", "");

  // let empty = document.createElement('div').id = "empty"
  let empty0 = document.createElement("div");
  let empty1 = document.createElement("div");
  let empty2 = document.createElement("div");
  let empty3 = document.createElement("div");
  critico();

  for (let i = 0; i < 4; i++) {
    inv.removeChild(inv.children[0]);
    // inv.appendChild(empty)
    // inv.replaceChild(inv.children[i], inv.appendChild(document.createElement('div')).id = "empty")
  }

  inv.appendChild(empty0).id = "empty";
  inv.appendChild(empty1).id = "empty";
  inv.appendChild(empty2).id = "empty";
  inv.appendChild(empty3).id = "empty";

  // inv.removeChild(inv.children[0])
  // inv.appendChild(empty)
  //
  totalClicks = 50;
  somaPontos();
  tudo();
  // cartaCustom = input.length >= 3;

  getSeed.className = "";
}

/////// CRITICO
let getSeed = document.getElementById("getseed");
function blockInv() {
  let cartaNotEspecial = copyCard.children[0].children[3].textContent == "";
  let customOff = getSeed.className == "customOff";
  let cartaNotMonark = copyCard.id == monark;
  let PodeMover =
    (!seedObj._isSeedReal && cartaNotEspecial) ||
    (!seedObj._isSeedReal && cartaNotMonark) ||
    (seedObj._isSeedReal && !seedObj._isPutByPlayer);

  if (!PodeMover || customOff) {
    inv.style.border = "10px double red";
  } else {
    inv.style.border = "7px double green";
  }
}
let totalClicks = 50;

let seedString;

// TESTAR PROBABILIDADE DE CARTAS

let quantasCartas = 1000000;
function numeroDeCartasTeste() {
  for (let j = 0; j < quantasCartas; j++) {
    tudoParaTeste();
  }
  DEBUG && console.log(numeroDeCartas);
}
// numeroDeCartasTeste();

function tudo() {
  if (!seedObj._isPutByPlayer) {
    totalClicks--;
  }
  // VOLTAR A CONDICAO PRA (totalClicks > 0)
  if (totalClicks >= 0) {
    button.style.backgroundColor = "";
    button.innerHTML = "&#127381; NOVA CARTA &#127381;";
    // colocarInput();seedObj
    // seedObj = generateSeed(input);
    // seedString = seedObj._seedString;
    // DEBUG && console.log("seedString no tudo ", seedString);
    start();
    DEBUG && console.log("no tudo SEED", seedObj);
    escolherIntegrante();
    DEBUG && console.log("no tudo INTEGRANTE:", integrante);
    escolherCidade();
    DEBUG && console.log("no tudo CIDADE", cidade);
    escolherCargo();
    DEBUG && console.log("no tudo CARGO", cargo);
    escolherVariante();
    DEBUG && console.log("no tudo VARIANTE: ", variante);
    escolherEspecial();
    DEBUG && console.log("no tudo ESPECIAL: ", especial);
    escolherPoder();
    DEBUG && console.log("no tudo ENERGIA", energia);
    // critico();
    criticoCheck();
    DEBUG && console.log("no tudo CRITICO-TAG", criticoTag);

    colocarInfoNoWrap();
    criarInvOne()

    DEBUG && console.log("no tudo CRITICO-TAG", criticoTag);
    DEBUG && console.log("no tudo BARALHO", baralho);
    DEBUG && console.log("no tudo INVONE", cloneBaralho);
    ;
    // moverInvTwo();
    // moverInvThree();
    // moverInvFour();

    moverCartaMonark();
    blockInv();
  } else {
    button.style.backgroundColor = "red";
    button.innerHTML = "0 CARTAS";
    console.log(new Date().toUTCString());
    console.log(versao);
    // DEBUG && console.log(numeroDeCartas)
  }
}

// let seedString = seedObj._seedString

function clicks() {
  //
}
let totalPontos = 0;

function somaPontos() {
  let ponto0 = 0;
  let ponto1 = 0;
  let ponto2 = 0;
  let ponto3 = 0;

  // inv 0
  if (
    inv.children[0].id != "empty" &&
    inv.children[0].children[0].children[3].textContent != bonusCartasMais
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[0].children[3].children[1].textContent != "") {
      ponto0 = parseInt(inv.children[0].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto0 = parseInt(inv.children[0].children[3].children[0].textContent);
    }
  }

  // inv 1
  if (
    inv.children[1].id != "empty" &&
    inv.children[1].children[0].children[3].textContent != bonusCartasMais
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[1].children[3].children[1].textContent != "") {
      ponto1 = parseInt(inv.children[1].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto1 = parseInt(inv.children[1].children[3].children[0].textContent);
    }
  }

  // inv 2
  if (
    inv.children[2].id != "empty" &&
    inv.children[2].children[0].children[3].textContent != bonusCartasMais
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[2].children[3].children[1].textContent != "") {
      ponto2 = parseInt(inv.children[2].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto2 = parseInt(inv.children[2].children[3].children[0].textContent);
    }
  }

  // inv 3
  if (
    inv.children[3].id != "empty" &&
    inv.children[3].children[0].children[3].textContent != bonusCartasMais
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[3].children[3].children[1].textContent != "") {
      ponto3 = parseInt(inv.children[3].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto3 = parseInt(inv.children[3].children[3].children[0].textContent);
    }
  }

  totalPontos = ponto0 + ponto1 + ponto2 + ponto3;
  placarP.innerHTML = totalPontos + " PONTOS";
  //
  //
  //
  //
  //
  //
}

button.addEventListener("click", tudo);

// button.addEventListener("click", numeroDeCartasTeste());

button.addEventListener("click", blockInv);

cartaParaMover.addEventListener("click", moverCarta);
inv.addEventListener("click", deletarDeck);

// btnReset.addEventListener('click', moverCartaMonark)

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey) {
    resetarDeck();
  }
});
btnReset.addEventListener("click", resetarDeck);
// window.onload = function(){
//   tudo()
// }

let teclaMoverSlot1 = 'Digit1'
let teclaMoverSlot2 = 'Digit2'
let teclaMoverSlot3 = 'Digit3'
let teclaMoverSlot4 = 'Digit4'

cartaParaMover.addEventListener("click", moverCarta);


document.addEventListener("keydown", (event)=>{
  if(copyCard){
    if(event.code == teclaMoverSlot1){
      moverInvOne()
      ;
    }    
  }
  
})

document.addEventListener("keydown", (event)=>{
  if(copyCard){
    if(event.code == teclaMoverSlot2){
      moverInvTwo()
      ;
    }    
  }
  
})

document.addEventListener("keydown", (event)=>{
  if(copyCard){
    if(event.code == teclaMoverSlot3){
      moverInvThree()
      ;
    }    
  }
  
})

document.addEventListener("keydown", (event)=>{
  if(copyCard){
    if(event.code == teclaMoverSlot4){
      moverInvFour()
      ;
    }    
  }
  
})