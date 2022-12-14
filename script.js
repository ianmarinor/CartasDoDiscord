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
let cartaNotEspecial = especiais.notSpecial 

import { criticoTag, criticoCheck } from "./modules/critico.js";


// import { deletarCarta1, deletarCarta2, deletarCarta3, deletarCarta4, objCarta1, objCarta2,objCarta3,objCarta4  } from "./modules/limparInventario.js";


///////   ^^^^^^^^IMPORTS IMPORTS^^^^^^



////D O M
let button = document.getElementById("btn");
let inv = document.getElementById("inv");
let arenaP = document.querySelector(".arena");
let nomeP = document.getElementById("nome");
let cidadeP = document.getElementById("cidade");
let retratoP = document.getElementById("retrato");
let cargoP = document.getElementById("cargo");
let varianteP = document.getElementById("variante");
let actionP = document.getElementById("action");
let novoAtaqueP = document.getElementById("novoAtaque");
let placarP = document.querySelector(".placar");
let ataqueP = document.getElementById("ataque");
let seedP = document.getElementById("seed");
let cartaP = document.getElementById("carta");


//DOM INV
let deckOne = document.getElementById("inv1");
let deckTwo = document.getElementById("inv1");
let deckThree = document.getElementById("inv1");
let deckFour = document.getElementById("inv1");

let nome1 = document.getElementById("nome1");
let nome2 = document.getElementById("nome2");
let nome3 = document.getElementById("nome3");
let nome4 = document.getElementById("nome4");

let cidade1 = document.getElementById("cidade1");
let cidade2 = document.getElementById("cidade2");
let cidade3 = document.getElementById("cidade3");
let cidade4 = document.getElementById("cidade4");

let retrato1 = document.getElementById("retrato1");
let retrato2 = document.getElementById("retrato2");
let retrato3 = document.getElementById("retrato3");
let retrato4 = document.getElementById("retrato4");

let cargo1 = document.getElementById("cargo1");
let cargo2 = document.getElementById("cargo2");
let cargo3 = document.getElementById("cargo3");
let cargo4 = document.getElementById("cargo4");

let variante1 = document.getElementById("variante1");
let variante2 = document.getElementById("variante2");
let variante3 = document.getElementById("variante3")
let variante4 = document.getElementById("variante4");

let action1 = document.getElementById("action1");
let action2 = document.getElementById("action2");
let action3 = document.getElementById("action3");
let action4 = document.getElementById("action4");

let novoAtaque1 = document.getElementById("novoAtaque1");
let novoAtaque2 = document.getElementById("novoAtaque2");
let novoAtaque3 = document.getElementById("novoAtaque3");
let novoAtaque4 = document.getElementById("novoAtaque4");


let ataque1 = document.getElementById("ataque1");
let ataque2 = document.getElementById("ataque2");
let ataque3 = document.getElementById("ataque3");
let ataque4 = document.getElementById("ataque4");

let seed1 = document.getElementById("seed1");
let seed2 = document.getElementById("seed2");
let seed3 = document.getElementById("seed3")
let seed4 = document.getElementById("seed4");

let carta1 = document.getElementById("empty1");
let carta2 = document.getElementById("empty2");
let carta3 = document.getElementById("empty3");
let carta4 = document.getElementById("empty4");

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
 
  if (especial == cartaNotEspecial) {
    baralho = {
      cartaId: cargo.nome,
      nome: integrante.nome,
      variante: variante.display,
      cidade: cidade,
      retrato: integrante.retrato,
      cargo: cargo.display,
      energia: energia.energiaTotal + integrante.emoji,
      energia2: energia.energiaTotal * criticoTag.multi + integrante.emoji,
      energiaObj: energia.energiaTotal * criticoTag.multi,
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
        cartaBorder: cargo.css.cartaBorder,
        energiaVisible: cargo.css.energiaVisible
      },
      cssVariante:{
        cartaColor: variante.css.cartaP_Color,
        cartaBG: variante.css.cartaP_BGImage,
        cartaBorder: variante.css.cartaP_Border,
        varianteFontSize: variante.css.varianteP_FontSize,
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
      energiaObj: especial.energia,
      poder: especial.poder,
      seed: seedObj._seedString,

      isCritico:{
        criticoNome: '',
        criticoVariante: '',
        criticoCidade:'',
        criticoCarta: '',
        criticoEnergia: '',
        criticoEnergia2: '',
        criticoEnergia2FontSize: especial.css.energia2,
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
        cartaBorder: especial.css.cartaBorder,
        energiaVisible: especial.css.energiaVisible
      },
      cssVariante:{
        cartaColor: '',
        cartaBG: '',
        cartaBorder: '',
        varianteFontSize: '',
      }

    };
  }

  //ESPECIAIS
  limpaCarta();
  //DOM
  //CARTA NORMAL


    cartaP.id = baralho.cartaId
    cartaP.style.border = baralho.cssVariante.cartaBorder

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
    // ataqueP.style.visibility = baralho.cssCarta.energiaVisible;
    ataqueP.style.visibility = baralho.cssCarta.energiaVisible

    novoAtaqueP.innerHTML = baralho.energia2
    novoAtaqueP.style.color = baralho.cssCarta.energia2Color;
    // novoAtaqueP.style.fontSize = '800px'
    // novoAtaqueP.style.fontSize = baralho.cssCarta.energia2FontSize;


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
    novoAtaqueP.className = baralho.isCritico.criticoEnergia2Critico;
    

    //variante 
    cartaP.style.color = baralho.cssVariante.cartaColor
    cartaP.style.backgroundImage = baralho.cssVariante.cartaBG
    varianteP.style.fontSize = baralho.cssVariante.varianteFontSize
    
  arenaP.innerHTML = totalClicks + " CARTAS";
  placarP.innerHTML = totalPontos + " PONTOS";

  DEBUG && console.log("baralho: ", baralho);
  DEBUG && console.log("criticoTag: ", criticoTag);
}

// let cloneBaralho;
let invEmpty

function limparDeck(){


 invEmpty =
  {
    cartaId: 'empty',
    nome: '',
    variante: '',
    cidade: '',
    retrato: '',
    cargo: '',
    energia: '',
    energia2: '',
    poder: '' ,
    seed: '',
    

    isCritico:{
      criticoNome: '',
      criticoVariante: '',
      criticoCidade: '',
      criticoCarta: '',
      criticoEnergia: '',
      criticoEnergia2: '',
      criticoEnergia2FontSize: '',
      criticoEnergia2Critico: ''
    },
    cssCarta:{
      cargoFontSize: '',
      cargoFontWeight: '',
      retratoBorder: '',
      energiaFontSize: '',
      retratoBGSize: '',
      energiaColor: '',
      energia2Color: '',
      energia2FontSize: '',
      cartaBorder: ''
    } 
  };

    
    

}



let cloneBaralho

function criarInvOne() {
  cloneBaralho = Object.assign({isEmpty: false}, baralho);
  DEBUG && console.log('cloneBaralho: ', cloneBaralho);

  // invTwo = Object.assign({isEmpty: true}, baralho);
  // invThree = Object.assign({isEmpty: true}, baralho);
  // invFour = Object.assign({isEmpty: true}, baralho);
}

// let cloneBaralho = {
//   seed: 123
// }
// let seedCarta1 = []
// let seedCarta2 = []
// let seedCarta3 = []
// let seedCarta4 = []

// let caixa

let seedDiferente
function checkSeedIgual(){

  seedDiferente = baralho.seed != objCarta1.seed && baralho.seed != objCarta2.seed && baralho.seed != objCarta3.seed && baralho.seed != objCarta4.seed
   
}



function moverInvOne() {
  
  checkSeedIgual()

if(carta1.id == 'empty1' && seedDiferente || baralho.cartaId == 'monark'){

  carta1.id = cloneBaralho.cartaId
  carta1.style.border = cloneBaralho.cssCarta.cartaBorder
  
  nome1.innerHTML = cloneBaralho.nome
  variante1.innerHTML = cloneBaralho.variante;
  cidade1.innerHTML = cloneBaralho.cidade;
  
  retrato1.style.backgroundImage = cloneBaralho.retrato;
  retrato1.style.border = cloneBaralho.cssCarta.retratoBorder;
  
  cargo1.innerHTML = cloneBaralho.cargo + cargo.emoji;
  cargo1.style.fontSize = cloneBaralho.cssCarta.cargoFontSize;
  cargo1.style.fontWeight = cloneBaralho.cssCarta.cargoFontWeight;
  
  ataque1.innerHTML = cloneBaralho.energia 
  ataque1.style.color = cloneBaralho.cssCarta.energiaColor;
  ataque1.style.fontSize = cloneBaralho.cssCarta.energiaFontSize;
  ataque1.style.visibility = cloneBaralho.cssCarta.energiaVisible
  
  novoAtaque1.innerHTML = cloneBaralho.energia2
  novoAtaque1.style.color = cloneBaralho.cssCarta.energia2Color;
  
  novoAtaque1.style.fontSize = cloneBaralho.cssCarta.energia2FontSize;
  seed1.innerHTML = cloneBaralho.seed
  
  //critico
    carta1.className = cloneBaralho.isCritico.criticoCarta;
    nome1.className = cloneBaralho.isCritico.criticoNome;
    variante1.className = cloneBaralho.isCritico.criticoVariante;
    cidade1.className = cloneBaralho.isCritico.criticoCidade;
    ataque1.style.textDecorationLine = cloneBaralho.isCritico.criticoEnergia;
    novoAtaque1.style.visibility = cloneBaralho.isCritico.criticoEnergia2;
    novoAtaque1.style.fontSize = cloneBaralho.isCritico.criticoEnergia2FontSize;
    novoAtaque1.className = cloneBaralho.isCritico.criticoEnergia2Critico;
    carta1.style.border = cloneBaralho.cssVariante.cartaBorder


    //variante
    carta1.style.color = cloneBaralho.cssVariante.cartaColor
    carta1.style.backgroundImage = cloneBaralho.cssVariante.cartaBG
    variante1.style.fontSize = cloneBaralho.cssVariante.varianteFontSize
    if(cartaIsEspecial){
      action1.style.visibility = cloneBaralho.poder
    
    }
    objCarta1 = cloneBaralho
    
    
    tudo()
  }
}




function moverInvTwo() {

  checkSeedIgual()


    
  if(carta2.id == 'empty2' && seedDiferente || baralho.cartaId == 'monark'){

    carta2.id = cloneBaralho.cartaId
    carta2.style.border = cloneBaralho.cssCarta.cartaBorder
    
    nome2.innerHTML = cloneBaralho.nome
    variante2.innerHTML = cloneBaralho.variante;
    cidade2.innerHTML = cloneBaralho.cidade;
    
    retrato2.style.backgroundImage = cloneBaralho.retrato;
    retrato2.style.border = cloneBaralho.cssCarta.retratoBorder;
    
    cargo2.innerHTML = cloneBaralho.cargo + cargo.emoji;
    cargo2.style.fontSize = cloneBaralho.cssCarta.cargoFontSize;
    cargo2.style.fontWeight = cloneBaralho.cssCarta.cargoFontWeight;
    
    ataque2.innerHTML = cloneBaralho.energia 
    ataque2.style.color = cloneBaralho.cssCarta.energiaColor;
    ataque2.style.fontSize = cloneBaralho.cssCarta.energiaFontSize;
    ataque2.style.visibility = cloneBaralho.cssCarta.energiaVisible
    
    novoAtaque2.innerHTML = cloneBaralho.energia2
    novoAtaque2.style.color = cloneBaralho.cssCarta.energia2Color;
    
    novoAtaque2.style.fontSize = cloneBaralho.cssCarta.energia2FontSize;
    seed2.innerHTML = cloneBaralho.seed
    
    //critico
      carta2.className = cloneBaralho.isCritico.criticoCarta;
      nome2.className = cloneBaralho.isCritico.criticoNome;
      variante2.className = cloneBaralho.isCritico.criticoVariante;
      cidade2.className = cloneBaralho.isCritico.criticoCidade;
      ataque2.style.textDecorationLine = cloneBaralho.isCritico.criticoEnergia;
      novoAtaque2.style.visibility = cloneBaralho.isCritico.criticoEnergia2;
      novoAtaque2.style.fontSize = cloneBaralho.isCritico.criticoEnergia2FontSize;
      novoAtaque2.className = cloneBaralho.isCritico.criticoEnergia2Critico;

      //variante
    carta2.style.color = cloneBaralho.cssVariante.cartaColor
    carta2.style.backgroundImage = cloneBaralho.cssVariante.cartaBG
    variante2.style.fontSize = cloneBaralho.cssVariante.varianteFontSize
    carta2.style.border = cloneBaralho.cssVariante.cartaBorder
    if(cartaIsEspecial){
      action2.style.visibility = cloneBaralho.poder
    
    }

    objCarta2 = cloneBaralho

      tudo()
  }
}
function moverInvThree() {

  checkSeedIgual()
    
  if(carta3.id == 'empty3' && seedDiferente || baralho.cartaId == 'monark'){
    carta3.id = cloneBaralho.cartaId
    carta3.style.border = cloneBaralho.cssCarta.cartaBorder
    
    nome3.innerHTML = cloneBaralho.nome
    variante3.innerHTML = cloneBaralho.variante;
    cidade3.innerHTML = cloneBaralho.cidade;
    
    retrato3.style.backgroundImage = cloneBaralho.retrato;
    retrato3.style.border = cloneBaralho.cssCarta.retratoBorder;
    
    cargo3.innerHTML = cloneBaralho.cargo + cargo.emoji;
    cargo3.style.fontSize = cloneBaralho.cssCarta.cargoFontSize;
    cargo3.style.fontWeight = cloneBaralho.cssCarta.cargoFontWeight;
    
    ataque3.innerHTML = cloneBaralho.energia 
    ataque3.style.color = cloneBaralho.cssCarta.energiaColor;
    ataque3.style.fontSize = cloneBaralho.cssCarta.energiaFontSize;
    ataque3.style.visibility = cloneBaralho.cssCarta.energiaVisible
    
    novoAtaque3.innerHTML = cloneBaralho.energia2
    novoAtaque3.style.color = cloneBaralho.cssCarta.energia2Color;
    
    novoAtaque3.style.fontSize = cloneBaralho.cssCarta.energia2FontSize;
    seed3.innerHTML = cloneBaralho.seed
    
    //critico
      carta3.className = cloneBaralho.isCritico.criticoCarta;
      nome3.className = cloneBaralho.isCritico.criticoNome;
      variante3.className = cloneBaralho.isCritico.criticoVariante;
      cidade3.className = cloneBaralho.isCritico.criticoCidade;
      ataque3.style.textDecorationLine = cloneBaralho.isCritico.criticoEnergia;
      novoAtaque3.style.visibility = cloneBaralho.isCritico.criticoEnergia2;
      novoAtaque3.style.fontSize = cloneBaralho.isCritico.criticoEnergia2FontSize;
      novoAtaque3.className = cloneBaralho.isCritico.criticoEnergia2Critico;

      //variante
    carta3.style.color = cloneBaralho.cssVariante.cartaColor
    carta3.style.backgroundImage = cloneBaralho.cssVariante.cartaBG
    variante3.style.fontSize = cloneBaralho.cssVariante.varianteFontSize
    carta3.style.border = cloneBaralho.cssVariante.cartaBorder

    if(cartaIsEspecial){
      action3.style.visibility = cloneBaralho.poder
    
    }

    objCarta3 = cloneBaralho

      tudo()
  }
}
function moverInvFour() {

  checkSeedIgual()
    
  if(carta4.id == 'empty4' && seedDiferente || baralho.cartaId == 'monark'){

    carta4.id = cloneBaralho.cartaId
    carta4.style.border = cloneBaralho.cssCarta.cartaBorder
    
    nome4.innerHTML = cloneBaralho.nome
    variante4.innerHTML = cloneBaralho.variante;
    cidade4.innerHTML = cloneBaralho.cidade;
    
    retrato4.style.backgroundImage = cloneBaralho.retrato;
    retrato4.style.border = cloneBaralho.cssCarta.retratoBorder;
    
    cargo4.innerHTML = cloneBaralho.cargo + cargo.emoji;
    cargo4.style.fontSize = cloneBaralho.cssCarta.cargoFontSize;
    cargo4.style.fontWeight = cloneBaralho.cssCarta.cargoFontWeight;
    
    ataque4.innerHTML = cloneBaralho.energia 
    ataque4.style.color = cloneBaralho.cssCarta.energiaColor;
    ataque4.style.fontSize = cloneBaralho.cssCarta.energiaFontSize;
    ataque4.style.visibility = cloneBaralho.cssCarta.energiaVisible
    
    novoAtaque4.innerHTML = cloneBaralho.energia2
    novoAtaque4.style.color = cloneBaralho.cssCarta.energia2Color;
    
    novoAtaque4.style.fontSize = cloneBaralho.cssCarta.energia2FontSize;
    seed4.innerHTML = cloneBaralho.seed
    
    //critico
      carta4.className = cloneBaralho.isCritico.criticoCarta;
      nome4.className = cloneBaralho.isCritico.criticoNome;
      variante4.className = cloneBaralho.isCritico.criticoVariante;
      cidade4.className = cloneBaralho.isCritico.criticoCidade;
      ataque4.style.textDecorationLine = cloneBaralho.isCritico.criticoEnergia;
      novoAtaque4.style.visibility = cloneBaralho.isCritico.criticoEnergia2;
      novoAtaque4.style.fontSize = cloneBaralho.isCritico.criticoEnergia2FontSize;
      novoAtaque4.className = cloneBaralho.isCritico.criticoEnergia2Critico;

      //variante
    carta4.style.color = cloneBaralho.cssVariante.cartaColor
    carta4.style.backgroundImage = cloneBaralho.cssVariante.cartaBG
    variante4.style.fontSize = cloneBaralho.cssVariante.varianteFontSize
    carta4.style.border = cloneBaralho.cssVariante.cartaBorder

    objCarta4 = cloneBaralho

    if(cartaIsEspecial){
      action4.style.visibility = cloneBaralho.poder
    
    }

      tudo()
  }
}


let copyCardSeed;
let copyCardName;



function moverCartaMonar(){

  //Se a carta for monark
  if(baralho.cartaId == 'monark'){
    //e tiver vazio
    if(objCarta1.isEmpty == true){
      moverInvOne()
    }
   else if (objCarta2.isEmpty == true){
    moverInvTwo()
    } else if (objCarta3.isEmpty == true){
      moverInvThree()
      } else if (objCarta4.isEmpty == true){
        moverInvFour()
        // se tiver cheio

        } else if (objCarta1.nome == baralho.nome && objCarta1.Id != 'monark'){
          deletarCarta1()
          moverInvOne()
        } else if (objCarta2.nome == baralho.nome && objCarta2.Id != 'monark'){
          deletarCarta1()
          moverInvOne()
        } else if (objCarta3.nome == baralho.nome && objCarta3.Id != 'monark'){
          deletarCarta1()
          moverInvOne()
        } else if (objCarta4.nome == baralho.nome && objCarta4.Id != 'monark'){
          deletarCarta1()
          moverInvOne()
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

export let objCarta1 = {isEmpty: true,energiaObj:0,seed:0}
export let objCarta2 = {isEmpty: true,energiaObj:0,seed:0}
export let objCarta3 = {isEmpty: true,energiaObj:0,seed:0}
export let objCarta4 = {isEmpty: true,energiaObj:0,seed:0}



let emptyDel
let cartaDel
let nomeDel
let varianteDel
let cidadeDel
let retratoDel
let cargoDel
let ataqueDel
let energia2Del
let seedDel
let inV
let actionDel


function deletarCarta(){
    

  


    document.getElementById(inV).children[0].id = emptyDel
    document.getElementById(inV).children[0].style.border = ''
    document.getElementById(inV).children[0].style.backgroundImage = ''
    
    document.getElementById(nomeDel).innerHTML = ''
    document.getElementById(varianteDel).innerHTML = ''
    document.getElementById(cidadeDel).innerHTML = ''

    document.getElementById(retratoDel).style.backgroundImage = ''
    document.getElementById(retratoDel).style.border = ''

    document.getElementById(cargoDel).innerHTML = ''
    document.getElementById(cargoDel).style.fontSize = ''
    document.getElementById(cargoDel).style.fontWeight = ''

    document.getElementById(ataqueDel).innerHTML = ''
    document.getElementById(ataqueDel).style.color = ''
    document.getElementById(ataqueDel).style.fontSize = ''

    document.getElementById(energia2Del).innerHTML = ''
    document.getElementById(energia2Del).style.color = ''

    document.getElementById(seedDel).innerHTML = ''
    
    document.getElementById(inV).children[0].className = ''
    document.getElementById(nomeDel).className = ''
    document.getElementById(varianteDel).className = ''
    document.getElementById(cidadeDel).className = ''

    document.getElementById(ataqueDel).style.textDecorationLine = ''

    document.getElementById(energia2Del).style.visibility = ''
    document.getElementById(energia2Del).style.fontSize = ''
    document.getElementById(actionDel).style.visibility = 'hidden'
}







function deletarCarta1(){
    cartaDel = 'carta1'
     emptyDel = 'empty1'
     nomeDel = 'nome1'
     varianteDel = 'variante1'
     cidadeDel = 'cidade1'
     retratoDel = 'retrato1'
     cargoDel = 'cargo1'
    ataqueDel = 'ataque1'
    energia2Del = 'novoAtaque1'
    seedDel  =  'seed1'
    inV = 'inv1'
    actionDel = 'action1'
    
    objCarta1 = {energiaObj:0}
    somaPontos()
    deletarCarta() 
    
}    

function deletarCarta2(){
     cartaDel = 'carta2'
     emptyDel = 'empty2'
     nomeDel = 'nome2'
     varianteDel = 'variante2'
     cidadeDel = 'cidade2'
     retratoDel = 'retrato2'
     cargoDel = 'cargo2'
    ataqueDel = 'ataque2'
    energia2Del = 'novoAtaque2'
    seedDel  = 'seed2'
    inV = 'inv2'
    actionDel = 'action2'
    objCarta2 = {energiaObj:0}
    somaPontos()
    deletarCarta() 
}    

 function deletarCarta3(){
     cartaDel = 'carta3'
      emptyDel = 'empty3'
      nomeDel = 'nome3'
      varianteDel = 'variante3'
      cidadeDel = 'cidade3'
      retratoDel = 'retrato3'
      cargoDel = 'cargo3'
    ataqueDel = 'ataque3'
    energia2Del = 'novoAtaque3'
    seedDel    =  'seed3'
    inV = 'inv3'
    actionDel = 'action3'
    objCarta3 = {energiaObj:0}
    somaPontos()
    deletarCarta()  
}    
function deletarCarta4(){
      cartaDel = 'carta4'
       emptyDel = 'empty4'
       nomeDel = 'nome4'
       varianteDel = 'variante4'
       cidadeDel = 'cidade4'
       retratoDel = 'retrato4'
       cargoDel = 'cargo4'
    ataqueDel = 'ataque4'
    energia2Del = 'novoAtaque4'
    seedDel    =  'seed4'
    inV = 'inv4'
    actionDel = 'action4'
    objCarta4 = {energiaObj:0}
    somaPontos()
    deletarCarta()  
}    





function resetarDeck() {
  // getSeed.setAttribute("class", "");

  

  deletarCarta1()
  deletarCarta2()
  deletarCarta3()
  deletarCarta4()

  totalClicks = 50;
  somaPontos();
  tudo();
  totalPontos = 0
  // cartaCustom = input.length >= 3;

  // getSeed.className = "";
}

/////// CRITICO
// let getSeed = document.getElementById("getseed");
// function blockInv() {
//   // let cartaNotEspecial = copyCard.children[0].children[3].textContent == "";
//   let customOff = getSeed.className == "customOff";
//   // let cartaNotMonark = copyCard.id == monark;
//   let PodeMover =
//     (!seedObj._isSeedReal && cartaNotEspecial) ||
//     (!seedObj._isSeedReal && cartaNotMonark) ||
//     (seedObj._isSeedReal && !seedObj._isPutByPlayer);

//   if (!PodeMover || customOff) {
//     inv.style.border = "10px double red";
//   } else {
//     inv.style.border = "7px double green";
//   }
// }
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
let cartaIsEspecial
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
    // limparDeck()
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
    cartaIsEspecial = baralho.cidade == ''
    DEBUG && console.log('cartaIsEspecial: ', cartaIsEspecial);

    criarInvOne()
    moverCartaMonar()
    somaPontos()

    DEBUG && console.log("no tudo CRITICO-TAG", criticoTag);
    DEBUG && console.log("no tudo BARALHO", baralho);
    DEBUG && console.log("no tudo INVONE", cloneBaralho);
    
    DEBUG && console.log('objCarta1: ', objCarta1);
    DEBUG && console.log('objCarta2: ', objCarta2);
    DEBUG && console.log('objCarta3: ', objCarta3);
    DEBUG && console.log('objCarta4: ', objCarta4);
    
    console.log('totalPontos: ', totalPontos);
    ;
    // moverInvTwo();
    // moverInvThree();
    // moverInvFour();

    // moverCartaMonark();
    // blockInv();
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
  let ponto1 = 0;
  let ponto2 = 0;
  let ponto3 = 0;
  let ponto4 = 0;


  ponto1 = objCarta1.energiaObj
  console.log('ponto1: ', ponto1);
  ponto2 = objCarta2.energiaObj
  console.log('ponto2: ', ponto2);
  ponto3 = objCarta3.energiaObj
  console.log('ponto3: ', ponto3);
  ponto4 = objCarta4.energiaObj
  console.log('ponto4: ', ponto4);

  
  totalPontos = ponto1 + ponto2 + ponto3 + ponto4;
  placarP.innerHTML = totalPontos + " PONTOS";
 
}

button.addEventListener("click", tudo);

// button.addEventListener("click", numeroDeCartasTeste());

// button.addEventListener("click", blockInv);

// cartaParaMover.addEventListener("click", moverCarta);
// inv.addEventListener("click", deletarDeck);

// btnReset.addEventListener('click', moverCartaMonark)

document.addEventListener("keydown", (event) => {
  if (event.code == 'KeyR') {
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

// cartaParaMover.addEventListener("click", moverCarta);


document.addEventListener("keydown", (event)=>{
  
    if(event.code == teclaMoverSlot1){
      moverInvOne()
      ;
    }    
  }
  
)

document.addEventListener("keydown", (event)=>{
 
    if(event.code == teclaMoverSlot2){
      moverInvTwo()
      ;
    }    
  }
  
)

document.addEventListener("keydown", (event)=>{
  
    if(event.code == teclaMoverSlot3){
      moverInvThree()
      ;
    }    
  }
  
)

document.addEventListener("keydown", (event)=>{
  
    if(event.code == teclaMoverSlot4){
      moverInvFour()
      ;
    }    
  }
  
)

document.addEventListener("keydown", (event)=>{
  
    if(event.code == 'KeyX'){
      deletarCarta1()
      ;
    }    
  }
  
)

document.addEventListener("keydown", (event)=>{
  
    if(event.code == 'KeyX'){
      deletarCarta1()
      ;
    }    
  }
)

document.addEventListener("keydown", (event)=>{
  
    if(event.code == 'KeyC'){
      deletarCarta2()
      ;
    }    
  }
)

document.addEventListener("keydown", (event)=>{
  
    if(event.code == 'KeyV'){
      deletarCarta3()
      ;
    }    
  }
)
document.addEventListener("keydown", (event)=>{
  
    if(event.code == 'KeyB'){
      deletarCarta4()
      ;
    }    
  }
)


