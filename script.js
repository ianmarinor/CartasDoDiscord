let DEBUG = false

import { seedObj } from "./modules/seedFabricator.js";


import { escolherIntegrante, integrante } from "./modules/integrante.js";
import { escolherCidade, cidade } from "./modules/cidade.js";
// import { energia } from "./modules/energia.js";

import {
  cargo,
  escolherCargo,
  cargos,
} from "./modules/cargo.js";
let premioMarino = cargos.premiomarino;
let primeMinister = cargos.primeMinister;
let ministro = cargos.ministro;
let monark = cargos.monark;
let lord = cargos.lord;
let nobre = cargos.nobre;
let gentleman = cargos.gentleman;
let people = cargos.people;
let semCargo = cargos.semCargo;
let noCargo = cargos.noCargo



import { variante, escolherVariante } from "./modules/variante.js";

import {
  especial,
  escolherEspecial,
  especiais,
} from "./modules/especial.js";

let tenica = especiais.tenica;
let speaker = especiais.speaker;
let bonusCartasMais = especiais.bonusCartasMais;
let abelha = especiais.abelha;
let cartaNaoEspecial = especiais.cartaNaoEspecial;


///////   ^^^^^^^^IMPORTS IMPORTS^^^^^^

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
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 41); // 41 a 50

let pontoPoderMinistro = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 51); //51 a 60

let pontoPoderPrimeMinister = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[10])) / 2 + 71); // 70 a 80

let pontoPoderRNGPremioMarino = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[5])) / 2 + 121); // 121 a 130

let pontoVarianteValor = 0;
function pontoVariante() {
  if (variante != "") {
    return (pontoVarianteValor = Math.floor(
      parseInt(seedString[0]) +1  * 1+ parseInt(seedString[1]) + 1 * 7 // 50 a 140
    ));
  } else {
    return (pontoVarianteValor = 0);
  }
}

let poder = {};
function escolherPoder() {
  //
  if (cargo == semCargo) {
    return (poder = {
      _ataque: pontoPoderSemCargo() + pontoVarianteValor,
    });
  } else if (cargo == people) {
    return (poder = {
      _ataque: pontoPoderPeople() + pontoVarianteValor,
    });
  } else if (cargo == gentleman) {
    return (poder = {
      _ataque: pontoPoderGentleman() + pontoVarianteValor,
    });
  } else if (cargo == monark) {
    return (poder = {
      _ataque: pontoPoderMonark(),
    });
  } else if (cargo == nobre) {
    return (poder = {
      _ataque: pontoPoderNobre() + pontoVarianteValor,
    });
  } else if (cargo == lord) {
    return (poder = {
      _ataque: pontoPoderLord() + pontoVarianteValor,
    });
  } else if (cargo == ministro) {
    return (poder = {
      _ataque: pontoPoderMinistro() + pontoVarianteValor,
    });
  } else if (cargo === primeMinister) {
    return (poder = {
      _ataque: pontoPoderPrimeMinister() + pontoVarianteValor,
    });
  } else if (cargo === premioMarino) {
    return (poder = {
      _ataque: pontoPoderRNGPremioMarino() + pontoVarianteValor,
    });
  }
}

//************************************************ */

function fabricaDeCartaNormal(integrante, cidade, cargo, poder, variante,seedObj) {
  return {
    _integrante: integrante,
    _cidade: cidade,
    _cargo: cargo,
    _poder: poder,
    _variante: variante,
    seedObj,
  };
}

//*********************************************************** */
// escolherIntegrante()
// escolherCidade()
// escolherCargo()
// escolherPoder()



////D O M
let button = document.getElementById("btn");
let inv = document.getElementById("inv");
let arenaP = document.querySelector(".arena");
let nomeP = document.querySelector(".nome");
let cidadeP = document.querySelector(".cidade");
let retratoP = document.querySelector(".retrato");
let cargoP = document.querySelector(".cargo");
let varianteP = document.querySelector(".variante");
let actionP = document.querySelector(".action");
let novoAtaquerP = document.querySelector(".novoAtaque");
let placarP = document.querySelector(".placar");
//div poder
let ataqueP = document.querySelector(".ataque");
let especialP = document.querySelector(".especial");

let seedP = document.querySelector(".seed");
//carta
let cartaP = document.getElementById("carta");
// input da seed cliente
// let coloqueSuaSeed = document.getElementById('seed').value
//wrap
//input
// let getSeed = document.getElementById("getseed");
//pagin procura seed







function colocarInfoNoWrap() {
  const novaCarta = fabricaDeCartaNormal(
    integrante,
    cidade,
    cargo,
    poder,
    variante,
    seedObj
  );

  const baralho = {
  nome: integrante.nome.toUpperCase() ,
  variante: variante.display,
  cidade: cidade,
  retrato: integrante.retrato,
  retratoEspecial: 'RETRATO ESPECIAL',
  descricao:'DESCRICAO',
  cargo: cargo.nome,
  energia: '0',
  pontoEspecial: 'PE',
  poder: 'PODER',
  seed: seedObj._seedString
}
console.log(cargo.nome);


  //LIMPAR A CARTA
  // cartaP.style.backgroundImage = "";
  // cartaP.style.border = "none";
  // cartaP.style.color = "";
  // actionP.style.visibility = "hidden";
  // ataqueP.style.textDecorationLine = "";
  // ataqueP.id = "";
  // novoAtaquerP.innerHTML = "";
  // novoAtaquerP.style.fontSize = "";
  // retratoP.style.backgroundSize = "";
  // cargoP.style.fontSize = "";
  // cargoP.style.color = "";
  // cargoP.style.fontWeight = "";
  // cargoP.style.fontFamily = "";
  // ataqueP.style.color = "";
  // ataqueP.style.fontSize = "";
  // ataqueP.textContent = "";

  cartaParaMover.children[0].children[0].classList.remove("critico");
  cartaParaMover.children[0].children[2].classList.remove("critico");
  cartaParaMover.classList.remove("critico");
  varianteP.classList.remove("critico");
  cartaParaMover.children[3].children[1].classList.remove("critico");

  cartaParaMover.children[0].children[0].style.color = "";
  cartaParaMover.children[0].children[2].style.color = "";
  cartaParaMover.children[0].children[1].style.fontWeight = "";

  //DOM
  nomeP.innerHTML = baralho.nome
  cidadeP.innerHTML = baralho.cidade
  ataqueP.innerHTML = baralho.energia
  varianteP.innerHTML = baralho.variante
  seedP.innerHTML = baralho.seed
  arenaP.innerHTML = totalClicks + " CARTAS";
  placarP.innerHTML = totalPontos + " PONTOS";
  novoAtaquerP.innerHTML = baralho.pontoEspecial
  cargoP.innerHTML = baralho.cargo.toUpperCase()
  retratoP.style.backgroundImage = baralho.retrato
  cartaP.id = baralho.cargo
  
  // retratoP.style.display = "block";

  //colocar retrato
  
  //colocar cargo
  

  //CARTAS ESPECIAIS
  
  // } else if (novaCarta._especial === tenica) {
  //   cargoP.style.fontFamily = "Cormorant Upright";
  //   retratoP.style.backgroundImage = "url('pics/tenica.webp')";
  //   retratoP.style.backgroundSize = "139px 150px";
  //   nomeP.innerHTML = "";
  //   cidadeP.innerHTML = "";
  //   cargoP.style.fontSize = "2.5em";
  //   cargoP.style.fontWeight = "bolder";
  //   cargoP.innerHTML = "&nbsp; TÉNICA";
  //   cargoP.style.color = "black";
  //   retratoP.style.border = "2px double gold";
  //   ataqueP.style.color = "black";
  //   ataqueP.innerHTML = parseInt(ataqueP.innerHTML) * 90 + "👑";
  //   seedP.style.color = "black";

    // ataqueP.style.fontSize = "1.5em";
    // especialP.style.visibility = "hidden";

  // } else if (novaCarta._especial === bonusCartasMais) {
  //   retratoP.style.backgroundImage = "url('pics/clickretrato.webp')";
  //   retratoP.style.backgroundSize = "cover";
  //   nomeP.innerHTML = "";
  //   cidadeP.innerHTML = "";
  //   especialP.style.visibility = "hidden";
  //   cargoP.style.fontSize = "2.3em";
  //   cargoP.style.fontWeight = "bolder";
  //   cargoP.innerHTML = "CLICKS";
  //   cargoP.style.color = "gray";
  //   // retratoP.style.border = '2px double gold'
  //   ataqueP.style.color = "black";
  //   ataqueP.style.fontSize = "1.5em";
  //   // actionP.style.visibility = 'visible'
  //   ataqueP.textContent = parseInt(ataqueP.textContent) * 2 + 2 + "🔄";
  //   seedP.style.color = "black";
  // }

  //CARTAS VARIANTES
  // if (novaCarta._variante != "") {
  //   // actionP.style.visibility = 'visible'
  //   varianteP.style.fontFamily = "Righteous";
  //   varianteP.style.textShadow = "-2px 5px 5px #010101";
  //   varianteP.style.fontSize = "1.1em";

  //   if (novaCarta._variante === "farmacêutico") {
      // varianteP.innerHTML = "💊" + novaCarta._variante.toUpperCase() + "💊";
  //     cartaP.style.color = "white";
  //     cartaP.style.backgroundImage =
  //       'url("pics/variantes/varianteGandalf.gif")';
  //     cartaP.style.border = "3px white solid";
  //     varianteP.style.fontSize = "1em";
  //   } else if (novaCarta._variante === "bão") {
  //     varianteP.innerHTML =
  //       "👌 " + "AÔPA, " + novaCarta._variante.toUpperCase() + " 👌";
  //     cartaP.style.color = "orange";
  //     cartaP.style.backgroundImage = 'url("pics/variantes/varianteTuru.gif")';
  //     cartaP.style.border = "3px orange solid";
  //   } else if (novaCarta._variante === "apenas") {
  //     varianteP.innerHTML = "🤤 " + novaCarta._variante.toUpperCase() + " 🤤";
  //     cartaP.style.color = "wheat";
  //     cartaP.style.backgroundImage =
  //       'url("pics/variantes/varianteNefesto.gif")';
  //     cartaP.style.border = "3px wheat solid";
  //   } else if (novaCarta._variante === "fonte") {
  //     varianteP.innerHTML =
  //       "😖" + "COMO MUDA A " + novaCarta._variante.toUpperCase() + "😖";
  //     cartaP.style.color = "  white";

  //     cartaP.style.backgroundImage =
  //       'url("pics/variantes/varianteBlackao.gif")';
  //     cartaP.style.border = "3px white solid";
  //     varianteP.style.fontSize = "0.86em";
  //     // varianteP.style.textShadow = '-2px 5px 5px #ffffff'
  //   } else if (novaCarta._variante === "ixqueiro") {
  //     varianteP.innerHTML =
  //       "&#127940;" +
  //       "CHIQUEIRO, " +
  //       novaCarta._variante.toUpperCase() +
  //       "&#127940;";
  //     cartaP.style.color = " #d8fbb5";
  //     varianteP.style.fontSize = "1em";

  //     cartaP.style.backgroundImage =
  //       'url("pics/variantes/varianteAntonio.gif")';
  //     cartaP.style.border = "3px #d8fbb5 solid";
  //     varianteP.style.fontSize = "0.86em";
  //   } else if (novaCarta._variante === "abalo") {
  //     varianteP.innerHTML =
  //       "🎉" + "UM " + novaCarta._variante.toUpperCase() + "! 🎉";
  //     cartaP.style.color = "  #fbb5f2 ";

  //     cartaP.style.backgroundImage = 'url("pics/variantes/variantePedro.gif")';
  //     cartaP.style.border = "3px #fbb5f2 solid";
  //   } else if (novaCarta._variante === "grito") {
  //     varianteP.innerHTML = "📢AAAAAAAAAAHHH!!!!!📢";
  //     cartaP.style.color = "   #42b028   ";

  //     cartaP.style.backgroundImage = 'url("pics/variantes/varianteCurtas.gif")';
  //     cartaP.style.border = "3px  #25a406  solid";
  //     varianteP.style.fontSize = "0.86em";
  //   } else if (novaCarta._variante === "dia") {
  //     varianteP.innerHTML = "⛪ TODO DIA ISSO ⛪";
  //     cartaP.style.color = "   #27ebe2     ";

  //     cartaP.style.backgroundImage = 'url("pics/variantes/varianteTwelve.gif")';
  //     cartaP.style.border = "3px  #27ebe2   solid";
  //     varianteP.style.fontSize = "0.99em";
  //   } else if (novaCarta._variante === "quimico") {
  //     varianteP.innerHTML = "🐶 O PUGO 🐶";
  //     cartaP.style.color = "white";
  //     cartaP.style.backgroundImage = 'url("pics/variantes/varianteJunks.gif")';
  //     cartaP.style.border = "3px  white   solid";
  //   } else if (novaCarta._variante === "pêra") {
  //     varianteP.innerHTML = "🥛 LEITE COM PÊRA 🍐";
  //     cartaP.style.color = "white";
  //     cartaP.style.backgroundImage =
  //       'url("pics/variantes/varianteMurillo.gif")';
  //     cartaP.style.border = "3px  white   solid";
  //     varianteP.style.fontSize = "0.90em";
  //   } else {
  //   }
  // }

  DEBUG && console.log(novaCarta);
  
  // DEBUG && console.log(novaCarta._especial.nome);
}
// let input
// function colocarInput() {
//   input = getSeed.value;
//   // input = 13315754569994
// }

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
  cartaParaMover.classList.remove("critico");
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
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (cartaSuperCritica) {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 5 + "⚡";
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
  // VOLTAR A CONDICAO PRA (totalClicks > 0)
  if (totalClicks >= 0) {
    button.style.backgroundColor = "";
    button.innerHTML = "&#127381; NOVA CARTA &#127381;";
    // colocarInput();seedObj
    // seedObj = generateSeed(input);
    seedString = seedObj._seedString;
    // DEBUG && console.log("seedString no tudo ", seedString);

    escolherIntegrante();
    DEBUG && console.log(integrante);
    escolherCidade();
    // DEBUG && console.log(cidade);
    escolherCargo();
    // DEBUG && console.log("no tudo cargo", cargo);
    escolherVariante();
    escolherEspecial();
    escolherPoder();
    // DEBUG && console.log("no tudo especial", especial);
    pontoVariante();
    escolherPoder();
    colocarInfoNoWrap();
    critico();
    moverCartaMonark();
    clicks();
    blockInv();
  } else {
    button.style.backgroundColor = "red";
    button.innerHTML = "0 CARTAS";
    console.log(new Date().toUTCString());
    console.log(versao);
    // DEBUG && console.log(numeroDeCartas)
  }
}

function tudoParaTeste() {
  // VOLTAR A CONDICAO PRA (totalClicks > 0)

  // button.style.backgroundColor = "";
  // button.innerHTML = "&#127381; NOVA CARTA &#127381;";
  colocarInput();
  seedObj = generateSeed(input);
  seedString = seedObj._seedString;
  escolherIntegrante();
  escolherCidade();
  escolherCargo();
  escolherVariante();
  escolherEspecial();
  // pontoVariante();
  // escolherPoder();
  // colocarInfoNoWrap();
  // critico();
  // moverCartaMonark();
  //
  // clicks();
  // blockInv()
}

// let seedString = seedObj._seedString

function clicks() {
  if (!seedObj._isPutByPlayer) {
    totalClicks--;
  }

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

document.addEventListener("keydown", (event) =>{
  if(event.ctrlKey){

    resetarDeck()
  }
});
btnReset.addEventListener("click", resetarDeck);
