import { generateSeed } from "./modules/seedFabricator.js";
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
} from "./modules/especial.js";

import { aplicarEfeitos } from "./aplicarEfeito.js";

let versaoHTML = document.getElementById("versao");
let versao = "Alpha 1.4";
versaoHTML.innerHTML = versao;

function showVersion() {}

showVersion();

const totalNumOfSeeds = 9000000000000000 + 1000000000000000;
function seedRNG() {
  return Math.floor(Math.random() * totalNumOfSeeds);
}

// This function generates a seed or takes a seed as input
// the input will always be translated to the same seed if an integer
// if a string, it'll be converted

let input = "";

// ***********************
// LINK SEED TO ELEMENT
//**************************/

//integrante
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER
let integrante;
let cartaCustom;
let seedObj;
let seedString = "";
let cartaComSeedParaAdicionar;
function escolherIntegrante() {
  seedObj = generateSeed(input);
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
    return (integrante = "Curtas");
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
    return (cidade = "de Itanhaém");
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
  } else if (
    seedString[13] == 7
    && seedString[14] >= 4 && seedString[4] != 4
  ) {
    return (cargo = "carta-monark");
  } else if (seedString[14] >= 8) {
    return (cargo = "carta-people");
  } else {
    return (cargo = "carta-semcargo");
  }
}

let especial = "";
function escolherEspecial() {
  //
  if (
    seedString[5] == 9 &&
    seedString[6] == 9 &&
    seedString[7] == 9 &&
    seedString[8] == 1 &&
    seedString[9] == 4
  ) {
    return (especial = "especial-tenica");
  } else if (
    seedString[5] == 8
    // seedString[6] == 3 &&
    // seedString[7] == 8 &&
    // seedString[8] <= 4
  ) {
    return (especial = "premiomonark");
  } else if (
    seedString[5] == 7 &&
    seedString[6] == 1 &&
    seedString[7] == 7 &&
    seedString[8] >= 5
  ) {
    return (especial = "comunista");


  } 
  else if ( true == false
    // seedString[5] == 6 
    // && seedString[6] == 9 
    // && seedString[7] < 3
    ) {
    return (especial = "spy");
  } else if (seedString[5] == 6 && seedString[6] == 9 && seedString[7] > 2 && seedString[7] < 6 ) {
    return (especial = "abelha");
  }
  else if (seedString[5] == 6 && seedString[6] >= 9 && seedString[7] >5) {
    return (especial = "carta-speaker");




  } else if (seedString[5] == 3 && seedString[6] <= 4) {
    return (especial = "especial-click");

   } else if (seedString[5] == 3 && seedString[6] > 4) {
      return (especial = "-click");



  } else {
    return (especial = "");
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
    if (seedString[4] == 4) {
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
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[12])) / 2 + 21); // 11 a 20

let pontoPoderGentleman = () =>
  Math.floor((parseInt(seedString[12]) + parseInt(seedString[0])) / 2 + 41); // 21 a 30

let pontoPoderMonark = () => Math.floor(Math.random() * 2);

let pontoPoderNobre = () =>
  Math.floor((parseInt(seedString[11]) + parseInt(seedString[10])) / 2 + 61); // 31 a 40

let pontoPoderLord = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 81); // 41 a 50

let pontoPoderMinistro = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 111); //51 a 60

let pontoPoderPrimeMinister = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[10])) / 2 + 192); // 70 a 80

let pontoPoderRNGPremioMarino = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[5])) / 2 + 240); // 121 a 130

let pontoVarianteValor = 0;
function pontoVariante() {
  if (variante != "") {
    return (pontoVarianteValor = Math.floor(
      parseInt(seedString[0]) + parseInt(seedString[1]) + 25 * 5 // 125 a 215
    ));
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

function fabricaDeCarta(integrante, cidade, cargo, poder, variante, especial) {
  return {
    _integrante: integrante,
    _cidade: cidade,
    _cargo: cargo,
    _poder: poder,
    _variante: variante,
    _especial: especial,
  };
}

//*********************************************************** */
// escolherIntegrante()
// escolherCidade()
// escolherCargo()
// escolherPoder()

////D O M
let button = document.getElementById("btn");
let h1 = document.getElementsByTagName("h1")[0];
let mover = document.getElementById("mover");
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
let efeito1P = document.getElementById("efeito1");
let efeito2P = document.getElementById("efeito2");
let efeito3P = document.getElementById("efeito3");
let efeito4P = document.getElementById("efeito4");
//div poder
let ataqueP = document.querySelector(".ataque");
let defesaP = document.querySelector(".defesa");
let especialP = document.querySelector(".especial");

let seedP = document.querySelector(".seed");
let seloP = document.getElementById("selo");
//carta
let cartaP = document.getElementById("carta");
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

function colocarInfoNoWrap() {
  const novaCarta = fabricaDeCarta(
    integrante,
    cidade,
    cargo,
    poder,
    variante,
    especial
  );

  //LIMPAR A CARTA
  cartaP.style.backgroundImage = "";
  cartaP.style.border = "none";
  cartaP.style.color = "";
  nomeP.style.fontFamily = "";
  nomeP.style.fontSize = "24px";
  nomeP.style.color = "black";
  nomeP.className = "nome";
  nomeP.style.fontSize = "";
  nomeP.style.fontWeight = "";

  actionP.style.visibility = "hidden";
  ataqueP.style.textDecorationLine = "";
  ataqueP.style.fontWeight = "";
  ataqueP.style.fontFamily = "";
  ataqueP.style.visibility = "";
  ataqueP.innerHTML = "";
  novoAtaquerP.innerHTML = "";
  novoAtaquerP.style.fontSize = "";
  novoAtaquerP.style.fontFamily = "";
  retratoP.style.backgroundSize = "";
  cargoP.style.fontSize = "";
  cargoP.style.color = "";
  cargoP.style.fontWeight = "";
  cargoP.style.fontFamily = "";
  ataqueP.style.color = "";
  ataqueP.style.fontSize = "";
  ataqueP.textContent = "";

  seedP.style.color = "";

  cartaParaMover.children[0].children[0].classList.remove("critico");
  cartaParaMover.children[0].children[2].classList.remove("critico");
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
  varianteP.innerHTML = novaCarta._variante;
  especialP.innerHTML = novaCarta._especial;
  seedP.innerHTML = "&nbsp;" + seedString;

  if (seedObj._isMarket) {
    seloP.innerHTML = "💰";
  } else if (seedObj._isPutByPlayer) {
    seloP.innerHTML = "💬";
  } else {
    seloP.innerHTML = "🎲";
  }

  arenaP.innerHTML = totalClicks + " RODADAS";
  placarP.innerHTML = totalPontos + " ⚡";

  if (novaCarta._especial != "") {
    cartaP.id = novaCarta._especial;
  } else {
    cartaP.id = novaCarta._cargo;
  }

  retratoP.style.display = "block";

  //colocar retrato
  if (novaCarta._especial == "") {
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
    } else if (novaCarta._integrante === "Curtas") {
      retratoP.style.backgroundImage = "url('pics/curtas.png')";
    } else if (novaCarta._integrante === "Junks") {
      retratoP.style.backgroundImage = "url('pics/junks.jpeg')";
    } else if (novaCarta._integrante === "Twelve") {
      retratoP.style.backgroundImage = "url('pics/twelve.png')";
    } else {
      retratoP.style.backgroundImage = "";
    }
  }

  //colocar cargo
  if (novaCarta._especial == "") {
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
    } else if (novaCarta._cargo === "abelha") {
      cargoP.innerHTML = "ABELHA";
      retratoP.style.border = "2px solid brown";
    } else if (novaCarta._cargo === "comunista") {
      cargoP.innerHTML = "CAMARADA BLACKAO";
      retratoP.style.border = "2px solid RED";
    } else if (novaCarta._cargo === "premiomonark") {
      cargoP.innerHTML = "PREMIO MONARK";
      retratoP.style.border = "2px solid black";
    } else {
      true;
    }
  }

  //CARTAS ESPECIAIS
  if (novaCarta._especial === "carta-speaker") {
    retratoP.style.backgroundImage = "url('pics/speaker.webp')";
    nomeP.innerHTML = "&nbsp; SPEAKER";
    cidadeP.innerHTML = "";
    cargoP.innerHTML = "MONARK BAN!";
    retratoP.style.border = "2px dotted green";
    especialP.style.visibility = "hidden";
    // ataqueP.innerHTML =
    cartaP.style.border = "2px solid #18d742";
    Math.trunc(parseInt(ataqueP.innerHTML) / 3 + 1) + "&#9889;";
  } else if (novaCarta._especial === "especial-tenica") {
    cargoP.style.fontFamily = "Cormorant Upright";
    retratoP.style.backgroundImage = "url('pics/tenica.webp')";
    retratoP.style.backgroundSize = "139px 150px";
    nomeP.innerHTML = "";
    cidadeP.innerHTML = "";
    cargoP.style.fontSize = "2.5em";
    cargoP.style.fontWeight = "bolder";
    cargoP.innerHTML = "&nbsp; TÉNICA";
    cargoP.style.color = "black";
    retratoP.style.border = "2px double gold";
    ataqueP.style.color = "black";
    ataqueP.innerHTML = tenicaEnergia() + "👑";
    seedP.style.color = "black";

    ataqueP.style.fontSize = "1.5em";
    especialP.style.visibility = "hidden";

  } else if (novaCarta._especial === "especial-click") {
    retratoP.style.backgroundImage = "url('pics/clickretrato.webp')";
    retratoP.style.backgroundSize = "cover";
    nomeP.innerHTML = " + CARTAS +";
    nomeP.style.fontSize = "1.8em";
    nomeP.style.fontWeight = "bolder";
    nomeP.style.color = "red";
    cidadeP.innerHTML = "";
    especialP.style.visibility = "hidden";
    
    
    cargoP.innerHTML = ""
    
    // retratoP.style.border = '2px double gold'
    ataqueP.style.color = "black";
    ataqueP.style.fontSize = "1.5em";
    // actionP.style.visibility = 'visible'
    ataqueP.textContent = parseInt(ataqueP.textContent) * 2 + 2 + "🔄";
    seedP.style.color = "black";



  } else if (novaCarta._especial === "-click") {
    retratoP.style.backgroundImage = "url('pics/clickretrato.webp')";
    retratoP.style.backgroundSize = "cover";
    nomeP.innerHTML = " - CARTAS -";
    nomeP.style.fontSize = "1.8em";
    nomeP.style.fontWeight = "bolder";
    nomeP.style.color = "red";
    cidadeP.innerHTML = "";
    especialP.style.visibility = "hidden";
    
    
    cargoP.innerHTML = ""
    
    // retratoP.style.border = '2px double gold'
    ataqueP.style.color = "black";
    ataqueP.style.fontSize = "1.5em";
    // actionP.style.visibility = 'visible'
    ataqueP.textContent = parseInt(ataqueP.textContent) * 2 + 2 + "🔄";
    seedP.style.color = "black";



  } 
  
  else if (novaCarta._especial === "abelha") {
    retratoP.style.backgroundImage = "url('pics/retratoAbelha.gif')";
    retratoP.style.backgroundSize = "";
    retratoP.style.backgroundColor = "green";
    nomeP.innerHTML = "ABELHA";
    cidadeP.innerHTML = "";
    especialP.style.visibility = "hidden";
    cargoP.style.fontSize = "2.3em";
    cargoP.style.fontWeight = "bolder";
    cargoP.innerHTML = "bzzzz....";
    // cargoP.style.color = "black";
    retratoP.style.border = "2px solid #4d1a00";
    // ataqueP.style.color = "black";
    ataqueP.style.fontSize = "1.4em";
    ataqueP.style.fontWeight = "bold";
    // ataqueP.style.backgroundColor = "yellow";
    // actionP.style.visibility = 'visible'
    ataqueP.textContent = abelhaEnergia() + "🐝";
    // seedP.style.color = "yellow";
    cartaP.style.color = "#ffd11a";
    cartaP.style.border = "3px solid #4d1a00";
  } else if (novaCarta._especial === "comunista") {
    retratoP.style.backgroundImage =
      "url('https://i.kym-cdn.com/photos/images/original/000/960/056/27b.gif')";
    retratoP.style.backgroundSize = "";
    retratoP.style.backgroundColor = "green";
    nomeP.innerHTML = "CAMARADA BLACKAO <br> ★";
    nomeP.style.fontFamily = "blackao";
    cidadeP.innerHTML = "";
    cidadeP.style = "";
    especialP.style.visibility = "hidden";
    cargoP.style.fontSize = "2.3em";
    cargoP.style.fontFamily = "blackao";
    cargoP.style.fontWeight = "bolder";
    cargoP.innerHTML = "";
    // cargoP.style.color = "black";
    retratoP.style.border = "2px solid #ff0000";
    // ataqueP.style.color = "black";
    ataqueP.style.fontSize = "1.4em";
    novoAtaquerP.style.fontSize = "1.4em";
    novoAtaquerP.style.fontFamily = "blackao";
    novoAtaquerP.style.visibility = "visible";
    ataqueP.style.fontWeight = "bold";
    ataqueP.style.fontFamily = "blackao";
    // ataqueP.style.backgroundColor = "yellow";
    // actionP.style.visibility = 'visible'
    ataqueP.textContent = "";
    novoAtaquerP.textContent = comunistaPE() + "☭";
    // seedP.style.color = "yellow";
    cartaP.style.color = "#990000";
    cartaP.style.border = "2px solid red";
    seedP.style.color = "black";
  } else if (novaCarta._especial === "premiomonark") {
    retratoP.style.backgroundImage = 'url("/pics/retratoPremioMonark.gif")';
    retratoP.style.backgroundSize = "100% 100%";
    retratoP.style.backgroundColor = "#343436";
    nomeP.innerHTML = "PREMIO <br> MONARK";
    nomeP.style.fontFamily = "premiomonark";
    nomeP.style.fontSize = "2.3em";
    nomeP.className = "float";
    // nomeP.style.color = '#484340';
    cidadeP.innerHTML = "";
    cidadeP.style = "";
    especialP.style.visibility = "hidden";
    cargoP.style.fontSize = "";
    cargoP.style.fontFamily = "";
    cargoP.style.fontWeight = "";
    cargoP.innerHTML = "";
    // cargoP.style.color = "black";
    retratoP.style.border = "2px solid black";
    // ataqueP.style.color = "black";
    ataqueP.style.fontSize = "1.4em";
    novoAtaquerP.style.fontSize = "1.4em";
    novoAtaquerP.style.fontFamily = "premiomonark";
    ataqueP.style.fontWeight = "bold";
    ataqueP.style.fontFamily = "premiomonark";
    // ataqueP.style.backgroundColor = "yellow";
    // actionP.style.visibility = 'visible'
    ataqueP.textContent = 0;
    ataqueP.style.visibility = "hidden";
    novoAtaquerP.textContent = "";
    // seedP.style.color = "yellow";
    // cartaP.style.color = "#fff";
    cartaP.style.border = "2px solid black";
    seedP.style.color = "#343436";
  } else if (novaCarta._especial == "spy") {
    cartaP.style.color = "#cf6a32";
    retratoP.style.backgroundImage = 'url("/pics/spyRetrato.webp")';
    retratoP.style.backgroundSize = "100% 100%";
    retratoP.style.backgroundColor = "unset";
    nomeP.innerHTML = "SPY";
    nomeP.style.fontFamily = "tf2";
    nomeP.style.fontSize = "2.3em";
    nomeP.style.color = "white";
    cidadeP.innerHTML = "";
    cidadeP.style = "";
    especialP.style.visibility = "hidden";
    cargoP.style.fontSize = "";
    cargoP.style.fontFamily = "";
    cargoP.style.fontWeight = "";
    cargoP.innerHTML = "";
    retratoP.style.border = "2px solid #cf6a32";
    
    ataqueP.style.fontSize = "1.4em";
    ataqueP.textContent = "1⚡";
    novoAtaquerP.style.fontSize = "1.4em";
    novoAtaquerP.style.visibility = "hidden";
    novoAtaquerP.textContent = "⌚";
    ataqueP.style.fontWeight = "bold";
    ataqueP.style.fontFamily = "tf2";
    // ataqueP.textContent = 0;
    // ataqueP.style.visibility = "hidden";
    // novoAtaquerP.textContent = "";
    cartaP.style.border = "2px solid rgba(207, 106, 50, 1)";
    // cartaP.className = "invis";
  }

  //CARTAS VARIANTES
  if (novaCarta._variante != "") {
    // actionP.style.visibility = 'hidden'
    varianteP.style.fontFamily = "Righteous";
    varianteP.style.textShadow = "-2px 5px 5px #010101";
    varianteP.style.fontSize = "1.1em";

    if (novaCarta._variante === "farmacêutico") {
      varianteP.innerHTML = "💊" + novaCarta._variante.toUpperCase() + "💊";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteGandalf.gif")';
      cartaP.style.border = "3px white solid";
      varianteP.style.fontSize = "1em";
    } else if (novaCarta._variante === "bão") {
      varianteP.innerHTML =
        "👌 " + "AÔPA, " + novaCarta._variante.toUpperCase() + " 👌";
      cartaP.style.color = "orange";
      cartaP.style.backgroundImage = 'url("pics/variantes/varianteTuru.gif")';
      cartaP.style.border = "3px orange solid";
    } else if (novaCarta._variante === "apenas") {
      varianteP.innerHTML = "🤤 " + novaCarta._variante.toUpperCase() + " 🤤";
      cartaP.style.color = "wheat";
      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteNefesto.gif")';
      cartaP.style.border = "3px wheat solid";
    } else if (novaCarta._variante === "fonte") {
      varianteP.innerHTML =
        "😖" + "COMO MUDA A " + novaCarta._variante.toUpperCase() + "😖";
      cartaP.style.color = "  white";

      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteBlackao.gif")';
      cartaP.style.border = "3px white solid";
      varianteP.style.fontSize = "0.86em";
      // varianteP.style.textShadow = '-2px 5px 5px #ffffff'
    } else if (novaCarta._variante === "ixqueiro") {
      varianteP.innerHTML = "🍲 NEFEIIXTUU 🍲";
      cartaP.style.color = " #d8fbb5";
      varianteP.style.fontSize = "1em";

      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteAntonio.gif")';
      cartaP.style.border = "3px #d8fbb5 solid";
      varianteP.style.fontSize = "0.86em";
    } else if (novaCarta._variante === "abalo") {
      varianteP.innerHTML =
        "🎉" + "UM " + novaCarta._variante.toUpperCase() + "! 🎉";
      cartaP.style.color = "  #fbb5f2 ";

      cartaP.style.backgroundImage = 'url("pics/variantes/variantePedro.gif")';
      cartaP.style.border = "3px #fbb5f2 solid";
    } else if (novaCarta._variante === "grito") {
      varianteP.innerHTML = "📢AAAAAAAAAAHHH!!!!!📢";
      cartaP.style.color = "   #42b028   ";

      cartaP.style.backgroundImage = 'url("pics/variantes/varianteCurtas.gif")';
      cartaP.style.border = "3px  #25a406  solid";
      varianteP.style.fontSize = "0.86em";
    } else if (novaCarta._variante === "dia") {
      varianteP.innerHTML = "⛪ TODO DIA ISSO ⛪";
      cartaP.style.color = "   #27ebe2     ";

      cartaP.style.backgroundImage = 'url("pics/variantes/varianteTwelve.gif")';
      cartaP.style.border = "3px  #27ebe2   solid";
      varianteP.style.fontSize = "0.99em";
    } else if (novaCarta._variante === "quimico") {
      varianteP.innerHTML = "🛑 PARA DE FALAR 🛑";
      varianteP.style.fontSize = "0.86em";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage = 'url("pics/variantes/varianteJunks.gif")';
      cartaP.style.border = "3px  white   solid";
    } else if (novaCarta._variante === "pêra") {
      varianteP.innerHTML = "🥛 LEITE COM PÊRA 🍐";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteMurillo.gif")';
      cartaP.style.border = "3px  white   solid";
      varianteP.style.fontSize = "0.90em";
    } else {
    }
  }
}
export let rodadas = 0;
export let efeitos = {
  status: false,
  css: { nome: "", imagem: "" },
  rodadas: 0,
};

let efeitoVazio = { status: false, css: { nome: "", imagem: "" }, rodadas: 0 };

function colocarEfeito() {
  console.log("efeitos no objeto efeito", efeitos);
  efeito1P.style.backgroundImage = efeitos.css.imagem;

  if (efeitos.rodadas > 0) {
    console.log("eu rodo o efeito1");
    efeitos.rodadas--;
  } else {
    efeitos = efeitoVazio;
    console.log("tirei o efeito1");
  }

  console.log("efeitos no objeto efeito", efeitos);
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

let cartaParaMover = document.getElementById("pack").firstElementChild;
let copyCard = "";

function moverCarta() {
  let seedCopyCard = cartaParaMover.children[4].textContent;

  blockInv();

  copyCard = cartaParaMover.cloneNode(true);
  let cartaNotEspecial = copyCard.children[0].children[3].textContent == "";
  let customOff = getSeed.className == "customOff";
  let copyCardBotao = copyCard.children[3].children[2];
  let cartaNotMonark = copyCard.id != "carta-monark";

  let PodeMover =
    (!seedObj._isSeedReal && cartaNotEspecial && cartaNotMonark) ||
    (seedObj._isSeedReal && !seedObj._isPutByPlayer) ||
    seedObj._isMarket;

  let naoMoviAinda = !customOff || (customOff && !seedObj._isPutByPlayer);

  // copySeed = copy.getElementsByClassName('seed')
  // cardShrinker(copyCard)

  // if (PodeMover && naoMoviAinda) {
  if (true) {
    if (inv.children[0].id != "empty") {
      if (
        inv.children[0].children[4].textContent !=
        cartaParaMover.children[4].textContent
      ) {
        if (inv.children[1].id == "empty") {
          if (
            copyCard.children[0].children[3].textContent != "" &&
            copyCard.id != "abelha"
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
            copyCard.children[0].children[3].textContent != "" &&
            copyCard.id != "abelha"
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
            copyCard.children[0].children[3].textContent != "" &&
            copyCard.id != "abelha"
          ) {
            copyCard.children[3].children[2].style.visibility = "visible";
          }
          if (seedObj._isPutByPlayer) {
            getSeed.className = "customOff";
          }

          inv.replaceChild(copyCard, inv.children[3]);

          somaPontos();
          tudo();

          //se tiver cheio tenta colocar premio monark
        } else if (copyCard.id == "premiomonark") {
          for (let i = 0; i < 4; i++) {
            if (inv.children[i].id == "carta-monark") {
              inv.replaceChild(copyCard, inv.children[i]);
              copyCardBotao.style.visibility = "visible";
              somaPontos();
              tudo();
              break;
            }
          }

          console.log("copycard é PM e deck cheio");
        }
      }
    } else {
      // if (cartaParaMover.children[0].children[1].textContent != ''){
      //     copyCard.children[3].children[2].style.visibility = 'visible'
      // }
      if (
        copyCard.children[0].children[3].textContent != "" &&
        copyCard.id != "abelha"
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

  //

  if (seedObj._isPutByPlayer) {
    false;
  } else {
    if (copyCard.id === "carta-monark" ) {
      //
      if (
        inv.children[0].id == "spy" &&
        inv.children[0].className != "invisi"
      ) {
        inv.replaceChild(copyCard, inv.children[0]);
        somaPontos();
      } else if (
        inv.children[1].id == "spy" &&
        inv.children[1].className != "invisi"
      ) {
        inv.replaceChild(copyCard, inv.children[1]);
        somaPontos();
      } else if (
        inv.children[2].id == "spy" &&
        inv.children[2].className != "invisi"
      ) {
        inv.replaceChild(copyCard, inv.children[2]);
        somaPontos();
      } else if (
        inv.children[3].id == "spy" &&
        inv.children[3].className != "invisi"
      ) {
        inv.replaceChild(copyCard, inv.children[3]);
        somaPontos();

        //  INVENTARIO VAZIO
      } else if (
        inv.children[0].id === "empty" &&
        copyCard.id === "carta-monark"
      ) {
        inv.replaceChild(copyCard, inv.children[0]);
        somaPontos();
      } else if (
        inv.children[1].id === "empty" &&
        copyCard.id === "carta-monark" &&
        copyCardSeed != inv.children[0].children[4].textContent
      ) {
        inv.replaceChild(copyCard, inv.children[1]);
        somaPontos();
      } else if (
        inv.children[2].id === "empty" &&
        copyCard.id === "carta-monark" &&
        copyCardSeed != inv.children[1].children[4].textContent
      ) {
        inv.replaceChild(copyCard, inv.children[2]);
        somaPontos();
      } else if (
        inv.children[3].id === "empty" &&
        copyCard.id === "carta-monark" &&
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
    cartaParaMover.id != "carta-monark" &&
    cartaParaMover.id != "carta-speaker" &&
    cartaParaMover.children[0].children[3].textContent == ""
  ) {
    if (seedString[1] == "1" && seedString[3] == "0") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "farmacêutico") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }

    //turu
    if (seedString[1] == "2" && seedString[3] == "1") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "bão") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }
    //nefesto
    if (seedString[1] == "3" && seedString[3] == "2") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "apenas") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }
    //blackao
    if (seedString[1] == "4" && seedString[3] == "3") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "fonte") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }
    //antonio
    if (seedString[1] == "5" && seedString[3] == "4") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "ixqueiro") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }
    //pedro
    if (seedString[1] == "6" && seedString[3] == "5") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "abalo") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }
    //curtas
    if (seedString[1] == "7" && seedString[3] == "6") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "grito") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }
    //twelve
    if (seedString[1] == "8" && seedString[3] == "7") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "dia") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }
    //junks
    if (seedString[1] == "9" && seedString[3] == "8") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "quimico") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
      }
    }
    //murilo
    if (seedString[1] == "0" && seedString[3] == "9") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";
      poderNovo.style.visibility = 'visible'

      if (variante == "pêra") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
        poderNovo.style.visibility = 'visible'
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

        varianteClique.children[3].children[2].style.visibility = "hidden";
        button.style.backgroundColor = "";
        button.innerHTML = "&#127381; NOVA CARTA &#127381;";
        arenaP.innerHTML = totalClicks + " RODADAS";
        varianteClique.remove();
        inv.appendChild(document.createElement("div")).id = "empty";
      }

      function cartaMenosclique(e) {
        let varianteMenosClique = e.target.offsetParent;

        if(totalClicks>parseInt(varianteMenosClique.children[3].children[0].textContent)){

        
        totalClicks =
          totalClicks -
          parseInt(varianteMenosClique.children[3].children[0].textContent) +
          1;
        
        varianteMenosClique.children[3].children[2].style.visibility = "hidden";
        button.style.backgroundColor = "";
        button.innerHTML = "&#127381; NOVA CARTA &#127381;";
        arenaP.innerHTML = totalClicks + " RODADAS";
        varianteMenosClique.remove();
        inv.appendChild(document.createElement("div")).id = "empty";
      }}

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
          arenaP.innerHTML = totalClicks + " RODADAS";
        }

        let varianteTenica = e.target.offsetParent;

        varianteTenica.children[3].children[2].style.visibility = "hidden";

        let poderCartaPack = cartaParaMover.children[3].children[0];
        let poderNovoCartaPack = cartaParaMover.children[3].children[1];
        // tudo()

        if (
          cartaParaMover.id != "especial-click" &&
          inv.children[j].id != "-click" &&
          cartaParaMover.id != "especial-tenica"
        ) {
          if (poderNovoCartaPack.textContent != "") {
            poderNovoCartaPack.textContent =
              parseInt(poderNovoCartaPack.textContent) +
              parseInt(varianteTenica.children[3].children[0].textContent) +
              "👑";
            adicionarCLiquesTenica();
          } else {
            poderCartaPack.textContent =
              parseInt(poderCartaPack.textContent) +
              parseInt(varianteTenica.children[3].children[0].textContent) +
              "👑";
            adicionarCLiquesTenica();
          }
        }

        for (let j = 0; j < 4; j++) {
          if (
            inv.children[j].id != "especial-click" &&
            inv.children[j].id != "-click" &&
            inv.children[j].id != "empty" &&
            inv.children[j].id != "especial-tenica"
          ) {
            // se o poder novo for presente
            if (inv.children[j].children[3].children[1].textContent != "") {
              inv.children[j].children[3].children[1].textContent =
                parseInt(inv.children[j].children[3].children[1].textContent) +
                parseInt(varianteTenica.children[3].children[0].textContent) +
                "👑";
              adicionarCLiquesTenica();
            } else {
              inv.children[j].children[3].children[0].textContent =
                parseInt(inv.children[j].children[3].children[0].textContent) +
                parseInt(varianteTenica.children[3].children[0].textContent) +
                "👑";
              adicionarCLiquesTenica();
            }
          }
        }
        somaPontos();
      } //COMUNISTA
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
        let comunista = e.target.offsetParent;
        // comunista.children[3].children[2].style.visibility = "hidden";
        for (let k = 0; k < 4; k++) {
          if (inv.children[k].id == "carta-speaker") {
            comunista.children[3].children[2].style.visibility = "hidden";
            for (let j = 0; j < 4; j++) {
              if (
                inv.children[j].id != "especial-click" &&
                inv.children[j].id != "-click" &&
                inv.children[j].id != "empty" &&
                inv.children[j].id != "especial-tenica" &&
                inv.children[j].id != "abelha" &&
                inv.children[j].id != "comunista" &&
                inv.children[j].children[0].children[0].textContent !=
                  "NEFESTO" &&
                inv.children[j].id != "carta-monark"
              ) {
                console.log(j);

                let pontoComunista = comunista.children[3].children[1];

                let pontoEstatal = parseInt(pontoComunista.textContent) / 3;
                console.log("pontoEstatal: ", pontoEstatal);

                // se o poder novo for presente
                if (inv.children[j].children[3].children[1].textContent != "") {
                  //SE FOR BLACKAO, DUPLICA
                  if (
                    inv.children[j].children[0].children[0].textContent ==
                    "BLACKAO"
                  ) {
                    inv.children[j].children[3].children[1].textContent =
                      Math.floor(parseInt(
                        inv.children[j].children[3].children[1].textContent
                      ) +
                      parseInt(pontoEstatal) * 1.5) +
                      "☭";
                    inv.children[j].children[3].children[1].style.color = "red";
                    inv.children[j].children[2].innerHTML = frasesComuna();
                    inv.children[j].children[2].fontSize = "1em";
                    inv.children[j].children[2].style.color = "red";

                    somaPontos();
                  } else {
                    inv.children[j].children[3].children[1].textContent =
                      parseInt(
                        inv.children[j].children[3].children[1].textContent
                      ) +
                      parseInt(pontoEstatal) +
                      "☭";

                    somaPontos();
                  }
                } else {
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
                    inv.children[j].children[3].children[0].style.color = "red";
                    inv.children[j].children[2].innerHTML = frasesComuna();
                    inv.children[j].children[2].fontSize = "1em";
                    inv.children[j].children[2].style.color = "red";

                    somaPontos();
                  } else
                    inv.children[j].children[3].children[0].textContent =
                      parseInt(
                        inv.children[j].children[3].children[0].textContent
                      ) +
                      parseInt(pontoEstatal) +
                      "☭";

                  somaPontos();
                }
              }
            }
          }
        }
      } // premio monark
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

        if (efeitos.status == false && totalPontos < 250) {
          //coloca efeito
          efeitoPremioMonark.rodadas = 35;
          efeitos = efeitoPremioMonark;
          //apaga a carta
          totalClicks += 15;
          premioMonark.classList.add("vanish");
          premioMonarkBotao.style.visibility = "hidden";
          function eliminarPremioMonark() {
            premioMonark.remove();
            inv.appendChild(document.createElement("div")).id = "empty";
          }

          setTimeout(eliminarPremioMonark, 10000);

          tudo();
          console.log("PM adicionado aos efeitos");
          console.log("no event listener", efeitos);
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
        let spyPoder = spy.children[3].children[0];
        let spyWatch = spy.children[3].children[1];
        let botao = spy.children[3].children[2];
        let retrato = spy.children[1];
        console.log("spywatch", spyWatch);

        spyWatch.addEventListener("click", invis);
        function invis() {
          let bateria = 3;
          let atual = rodadas;
          let final;
          console.log("atual: ", atual);
          console.log("to invisivel");
          spy.className = "invisi";
          retrato.classList.add("invis");
          spy.children[0].className = "invis";

          spyWatch.style.visibility = "hidden";
          botao.style.visibility = "hidden";
          retrato.style.backgroundImage = 'url("/pics/spyRetrato3.gif")';
        }

        for (let i = 0; i < 4; i++) {
          if (inv.children[i].id == "carta-semcargo") {
            console.log("tem semcargo");
            let semcargo = inv.children[i];
            let poderSemcargo = semcargo.children[3].children[0];
            let poderNovoSemcargo = semcargo.children[3].children[1];
            let poderSpy = spy.children[3].children[0];

            //roubar o poder
            if (poderNovoSemcargo.textContent != "") {
              console.log("tem critico");
              poderSpy.textContent =
              (parseInt(poderNovoSemcargo.textContent)* 5)  +
                parseInt(poderSpy.textContent) +
                "⚡";
              semcargo.remove();
              inv.appendChild(document.createElement("div")).id = "empty";
              spyWatch.style.visibility = "visible";
              retrato.style.backgroundImage = 'url("/pics/spyRetrato2.gif")';
              somaPontos()
            } else {
              console.log("nao tem critico");
              poderSpy.textContent =
              (parseInt(poderSemcargo.textContent)* 5)  +
                parseInt(poderSpy.textContent) +
                "⚡";
              semcargo.remove();
              inv.appendChild(document.createElement("div")).id = "empty";
              spyWatch.style.visibility = "visible";
              retrato.style.backgroundImage = 'url("/pics/spyRetrato2.gif")';
              somaPontos()
            }

            break;
          }
        }
      }
    }
  }
}

let temTuru;
let ab = 3;

function abelha() {
  for (let i = 0; i < 4; i++) {
    if (inv.children[i].id != "empty") {
      // console.log(inv.children[i].children[0].children[0].textContent);

      if (inv.children[i].id == "abelha") {
        inv.children[i].className = "";
        inv.children[i].children[1].style.border = "2px solid #4d1a00";
        inv.children[i].style.border = "";
        inv.children[i].style.color = "#ffd11a";

        let pontoAbelha = inv.children[i].children[3].children[0];

        if (parseInt(pontoAbelha.textContent) <= 0) {
          inv.children[i].className = "";

          inv.children[i].remove();
          inv.appendChild(document.createElement("div")).id = "empty";
          somaPontos();
        } else if (
          parseInt(pontoAbelha.textContent) <= 60 &&
          parseInt(pontoAbelha.textContent) > 15
        ) {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) - abelhaLowHp() + "🐝";
          somaPontos();
        } else if (parseInt(pontoAbelha.textContent) <= 15) {
          pontoAbelha.textContent = parseInt(pontoAbelha.textContent) - 1;
        } else {
          pontoAbelha.textContent =
            parseInt(pontoAbelha.textContent) - abelhaDecrease() + "🐝";
          somaPontos();
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
              } else {
                if (inv.children[i].id == "abelha") {
                  inv.children[i].children[1].style.backgroundImage =
                    "url('pics/abelhaMorrendo.jpg')";
                  inv.children[i].children[2].innerHTML = frasesAbelha();
                  inv.children[i].children[2].style.fontSize = "1em";
                }
                pontoAbelha.textContent = 0 + "☠";

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

let btnReset = document.getElementById("btnReset");

let empty = document.createElement("div");
empty.id = "empty";

document.addEventListener("keydown", (event) => {
  if (event.code == "Digit1") {
    deleteInvOne(0);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code == "Digit2") {
    deleteInvOne(1);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code == "Digit3") {
    deleteInvOne(2);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code == "Digit4") {
    deleteInvOne(3);
  }
});

function deleteInvOne(a) {
  if (inv.children[a].id != "carta-monark") {
    inv.children[a].remove();
    inv.appendChild(document.createElement("div")).id = "empty";
    somaPontos();
  }
}


function deletarDeck(e) {
  // 1.0Se a carta nao for Monark
  if (
    e.target.className == "retrato" ||
    e.target.className == "retrato invis"
  ) {
    //

    if (e.target.offsetParent.id != "carta-monark" || e.target.offsetParent.id  == "carta-monark"&& e.target.offsetParent.className == 'vanish') {
      e.target.offsetParent.remove();
      inv.appendChild(document.createElement("div")).id = "empty";
      somaPontos();
    }
  }
}

function resetarDeck() {
  getSeed.setAttribute("class", "");
  1;

  efeitos = efeitoVazio;

  // let empty = document.createElement('div').id = "empty"
  let empty0 = document.createElement("div");
  let empty1 = document.createElement("div");
  let empty2 = document.createElement("div");
  let empty3 = document.createElement("div");
  rodadas = 0;
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
  cartaCustom = input.length >= 3;

  getSeed.className = "";
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

  if (!PodeMover || customOff) {
    inv.style.border = "10px double red";
  } else {
    inv.style.border = "7px double green";
  }
}
let totalClicks = 50;

function tudo() {
  // VOLTAR A CONDICAO PRA (totalClicks > 0)
  if (totalClicks > 0) {
    button.style.backgroundColor = "";
    button.innerHTML = "&#127381; NOVA CARTA &#127381;";
    colocarInput();
    escolherIntegrante();
    escolherCidade();
    escolherCargo();
    escolherVariante();
    escolherEspecial();
    pontoVariante();
    escolherPoder();
    colocarInfoNoWrap();
    critico();
    moverCartaMonark();
    console.log(seedObj);
    clicks();
    console.log(aumentou);
    abelha();
    colocarEfeito();
    // aplicarEfeitos();
    blockInv();
    console.log("rodadas: ", rodadas);
    // if(totalClicks == 1){button.style.backgroundColor = "red"
    // button.innerHTML = "0 CARTAS";}
  } else {
    showVersion();
    button.style.backgroundColor = "red";
    button.innerHTML = "0 CARTAS";
  }
}
let aumentou = false;
function clicks() {
  if (!seedObj._isPutByPlayer) {
    totalClicks--;
    rodadas++;
    aumentou = true;

    arenaP.innerHTML = totalClicks + " RODADAS";
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

  // inv 0
  if (
    inv.children[0].id != "empty" &&
    inv.children[0].children[0].children[3].textContent != "especial-click" &&
    inv.children[0].children[0].children[3].textContent != "-click" &&
    inv.children[0].id != "comunista"
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[0].children[3].children[1].textContent != "" && inv.children[0].id != "spy") {
      ponto0 = parseInt(inv.children[0].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto0 = parseInt(inv.children[0].children[3].children[0].textContent);
    }
  }

  // inv 1
  if (
    inv.children[1].id != "empty" &&
    inv.children[1].children[0].children[3].textContent != "especial-click" &&
    inv.children[1].children[0].children[3].textContent != "-click" &&
    inv.children[1].id != "comunista"
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[1].children[3].children[1].textContent != "" && inv.children[1].id != "spy") {
      ponto1 = parseInt(inv.children[1].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto1 = parseInt(inv.children[1].children[3].children[0].textContent);
    }
  }

  // inv 2
  if (
    inv.children[2].id != "empty" &&
    inv.children[2].children[0].children[3].textContent != "especial-click" &&
    inv.children[2].children[0].children[3].textContent != "-click" &&
    inv.children[2].id != "comunista"
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[2].children[3].children[1].textContent != "" && inv.children[2].id != "spy") {
      ponto2 = parseInt(inv.children[2].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto2 = parseInt(inv.children[2].children[3].children[0].textContent);
    }
  }

  // inv 3
  if (
    inv.children[3].id != "empty" &&
    inv.children[3].children[0].children[3].textContent != "especial-click" &&
    inv.children[3].children[0].children[3].textContent != "-click" &&
    inv.children[3].id != "comunista"
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[3].children[3].children[1].textContent != "" && inv.children[3].id != "spy") {
      ponto3 = parseInt(inv.children[3].children[3].children[1].textContent);
      
      // se nao, pegue o poder velho
    } else {
      ponto3 = parseInt(inv.children[3].children[3].children[0].textContent);
      
    }
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
    tudo();
    blockInv();
  }
});

// BIND MOVER COM TECLA
let teclaMoverCarta = "Space";

cartaParaMover.addEventListener("click", moverCarta);
document.addEventListener("keydown", (event) => {
  if (copyCard) {
    if (event.code == teclaMoverCarta) {
      moverCarta();
    }
  }
});

inv.addEventListener("click", deletarDeck);

// btnReset.addEventListener('click', moverCartaMonark)

btnReset.addEventListener("click", resetarDeck);

// DECK COMECA COM 4 CARTAS
let teclaDeckPronto = "KeyG";
function deckPronto() {
  resetarDeck();
  moverCarta();
  moverCarta();
  moverCarta();
  moverCarta();
  totalClicks += 5;
  rodadas = 0;
  console.log("rodadas: ", rodadas);
  arenaP.innerHTML = totalClicks + " CARTAS";
}

document.addEventListener("keydown", (event) => {
  if (event.code == teclaDeckPronto) {
    // setTimeout(deckPronto, 600)
    deckPronto();
  }
});

// começa so com 2 cartas

// document.addEventListener("keydown", (event)=>{

//   if(event.code == 'KeyQ'){

//     resetarDeck()
//     moverCarta()
//     moverCarta()

//     arenaP.innerHTML = totalClicks + " CARTAS";

// }
// })

// q adiciona todas as cartas

// document.addEventListener("keydown", (event)=>{

//   if(event.code == 'KeyQ'){

//     resetarDeck()
//     moverCarta()
//     moverCarta()
//     moverCarta()
//     moverCarta()
//     getSeed.className = 'customOff'
//     blockInv()

// }
// })

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyR") {
    resetarDeck();
  }
});

document.getElementById("G").addEventListener("click", deckPronto);

window.onload = (event) => {
  tudo();
};

// setInterval(()=>arenaP.innerHTML = totalClicks + " CARTAS", 100)
11;
