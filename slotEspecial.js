import { seedObj, seedRNG } from "./modules/seedFabricator.js";
import { escolherEspecial, especial } from "./modules/especial.js";
import {
  snd,
  selectHandCard,
  naoAu,
  empty1,
  empty2,
  empty3,
  empty4,
  objToMao,
  emptyObj,
  money,
  ammo,
  audioPlayer,
} from "/script.js";
import { gerarNumero, teste } from "./script.js";

let moneyP = document.getElementById("money");
let btnCampones = document.getElementById("btnCampones");
let btnCavalheiro = document.getElementById("btnCavalheiro");
let btnSangue = document.getElementById("btnSangue");
let btnRainha = document.getElementById("btnRainha");
let inv = document.getElementById("inv");

let precoCampones = 75;
let precoCavalheiro = 125;
let precoSangueAzul = 200;
let precoRainha = 2000;

let precoPrint = () => {
  let precoCamponesP = (btnCampones.innerHTML =
    "CAMPONES <br />" + precoCampones);
  let precoCavalheiroP = (btnCavalheiro.innerHTML =
    "CAVALHEIRO <br />" + precoCavalheiro);
  let precoSangueAzulP = (btnSangue.innerHTML =
    "SANGUE AZUL <br />" + precoSangueAzul);
  let precoRainhaP = (btnRainha.innerHTML = "RAINHA <br />" + precoRainha);
};

precoPrint();

let novaCarta = ["novaCarta.mp3"];

document.addEventListener("contextmenu", alerta);

function alerta() {
  return false;
}

// export function ativarBtn(){

//   setInterval(ativarBtn2, 500)
//

// }

export function ativarBtn() {
  //

  // ATIVAR CAMPO
  if (money.total >= precoCampones) {
    btnCampones.disabled = false;

    //
  } else {
    btnCampones.disabled = true;
    //
  }

  //ATIVAR CAVA
  if (money.total >= precoCavalheiro) {
    btnCavalheiro.disabled = false;

    //
  } else {
    btnCavalheiro.disabled = true;
    //
  }

  //ATIVAR SA
  if (money.total >= precoSangueAzul) {
    btnSangue.disabled = false;

    //
  } else {
    btnSangue.disabled = true;
    //
  }

  //ATIVAR RAINHA
  if (money.total >= precoRainha) {
    btnRainha.disabled = false;

    //
  } else {
    btnRainha.disabled = true;
    //
  }
}

let increasePrice = (x) => {
  // return 1

  let increaseRate = gerarNumero(30, 42);

  return Math.trunc(x / increaseRate);
};

function comprarCampones() {
  let audio = ["campones.wav", 0.3];
  if (money.total >= precoCampones) {
    colocarSlot(makeCampones(), 0);
    colocarSlot(makeCampones(), 1);
    colocarSlot(makeCampones(), 2);

    money.remove(precoCampones);
    ativarBtn();
    snd(audio);
    precoCampones += increasePrice(precoCampones);
    precoCampones >= 300 ? (precoCampones = 300) : false;
  }
  precoPrint();
}

function comprarCavalheiro() {
  let audio = ["campones.wav", 0.3];
  if (money.total >= precoCavalheiro) {
    colocarSlot(makeCavalheiro(), 0);
    colocarSlot(makeCavalheiro(), 1);
    colocarSlot(makeCavalheiro(), 2);

    money.remove(precoCavalheiro);

    ativarBtn();
    snd(audio);
    precoCavalheiro += increasePrice(precoCavalheiro);
    precoCavalheiro >= 500 ? (precoCavalheiro = 500) : false;
  }
  precoPrint();
}
function comprarSangue() {
  let audio = ["campones.wav", 0.3];
  if (money.total >= precoSangueAzul) {
    colocarSlot(makeSangueAzul(), 0);
    colocarSlot(makeSangueAzul(), 1);
    colocarSlot(makeSangueAzul(), 2);

    money.remove(precoSangueAzul);
    ativarBtn();
    snd(audio);
    precoSangueAzul += increasePrice(precoSangueAzul);
    precoSangueAzul >= 800 ? (precoSangueAzul = 800) : false;
  }
  precoPrint();
}
function comprarRainha() {
  let audio = ["campones.wav", 0.3];
  if (money.total >= precoRainha) {
    colocarSlot(makeRainha(), 0);
    colocarSlot(makeRainha(), 1);
    colocarSlot(makeRainha(), 2);

    money.remove(precoRainha);
    ativarBtn();
    snd(audio);
    precoRainha += increasePrice(precoRainha);
    precoRainha >= 8000 ? (precoRainha = 8000) : false;
  }
  precoPrint();
}

const cartaEsp =
  '<div class="cartaEsp" data-card="especial" data-tankdead="false" data-dmgboss="" data-tier="" > ' +
  '<div class="nameAndCidadeWrapperEsp">' +
  '<p class="nomeEsp"></p>' +
  '<div class="varianteEsp"></div>' +
  '<p class="cidadeEsp"></p>' +
  '<div class="especialEsp"></div>' +
  "</div>" +
  '<div class="retratoEsp"></div>' +
  '<p class="cargoEsp"></p>' +
  '<div class="poderEsp">' +
  '<p class="ataqueEsp"></p>' +
  '<p class="novoAtaqueEsp"></p>' +
  '<div class="action">🔘</div>' +
  "</div>" +
  '<p class="seedEsp"></p>' +
  '<p class="seloEsp"></p>' +
  '<p class="seedEsp2"></p>';

let seedCampones;
let seedmakeCavalheiro;
let seedmakeSangueAzul;
let seedmakeRainha;

let seedEspecial;
export let stringSeed = seedRNG().toString();

function makeCampones() {
  stringSeed = seedRNG().toString();
  let arrSeed = stringSeed.split("");

  let specialSeed = arrSeed;
  specialSeed[0] = "1";
  specialSeed[8] = "0";
  specialSeed[14] = "0";

  seedCampones = specialSeed.join("");
  seedEspecial = seedCampones;

  ativarBtn();
  return seedCampones;
}

function makeCavalheiro() {
  stringSeed = seedRNG().toString();
  let arrSeed = stringSeed.split("");

  let specialSeed = arrSeed;
  specialSeed[0] = "1";
  specialSeed[8] = "1";
  specialSeed[14] = "0";

  seedmakeCavalheiro = specialSeed.join("");
  seedEspecial = seedmakeCavalheiro;

  return seedmakeCavalheiro;
}

function makeSangueAzul() {
  stringSeed = seedRNG().toString();
  let arrSeed = stringSeed.split("");

  let specialSeed = arrSeed;
  specialSeed[0] = "1";
  specialSeed[8] = "2";
  specialSeed[14] = "0";

  seedmakeSangueAzul = specialSeed.join("");
  seedEspecial = seedmakeSangueAzul;

  return seedmakeSangueAzul;
}

function makeRainha() {
  stringSeed = seedRNG().toString();
  let arrSeed = stringSeed.split("");

  let specialSeed = arrSeed;
  specialSeed[0] = "1";
  specialSeed[8] = "3";
  specialSeed[14] = "0";

  seedmakeRainha = specialSeed.join("");
  seedEspecial = seedmakeRainha;

  return seedmakeRainha;
}
export let slotEspObj;
function Main() {
  slotEspObj = [emptyObj, emptyObj, emptyObj];
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyO") {
    
  }
});

export let slotEsp = document.getElementById("slotEsp");

function colocarSlot(tipo, _slot) {
  let slot = _slot;

  if(slotEspObj[slot]._bought) return

  btnCampones = document.getElementById("btnCampones");
  btnCavalheiro = document.getElementById("btnCavalheiro");
  btnSangue = document.getElementById("btnSangue");
  btnRainha = document.getElementById("btnRainha");

  let cartaEspecial = document.getElementById("slotEsp").children[slot];

  let nomeE = slotEsp.querySelectorAll(".nomeEsp")[slot];
  let retratoE = slotEsp.querySelectorAll(".retratoEsp")[slot];
  let cargoE = slotEsp.querySelectorAll(".cargoEsp")[slot];
  let ataqueE = slotEsp.querySelectorAll(".ataqueEsp")[slot];
  let novoAtaqueE = slotEsp.querySelectorAll(".novoAtaqueEsp")[slot];
  let seedEsp = slotEsp.querySelectorAll(".seedEsp")[slot];

  escolherEspecial(tipo);

  nomeE.classList.remove("float");
  cargoE.classList.remove("float");
  nomeE.style.margin = 0
  cargoE.style.margin = 0
  slotEsp.children[slot].id = especial.cartaId;

  //PERSONALIZADO
  // 

  retratoE.style.visibility = "visible";

  if (especial.canbedeleted) {
    cartaEspecial.dataset.canbedeleted = especial.canbedeleted;
  } else {
    cartaEspecial.dataset.canbedeleted = "true";
  }

  if (especial.hashp) {
    cartaEspecial.dataset.hashp = especial.hashp;
  } else {
    cartaEspecial.dataset.hashp = "true";
  }

  //NOME
  // nomeE.className = ''
  nomeE.innerHTML = especial.nome;
  nomeE.classList.add(especial.nomeStyle.efeito);
  nomeE.style.fontSize = especial.nomeStyle.fontSize;
  nomeE.style.fontFamily = especial.nomeStyle.fontFamily;
  nomeE.style.color = especial.nomeStyle.color;

  //RETRATO
  retratoE.style.backgroundImage = especial.retrato;
  retratoE.style.border = especial.retratoStyle.border;
  if (especial.retratoStyle.backgroundSize) {
    retratoE.style.backgroundSize = especial.retratoStyle.backgroundSize;
  } else {
    retratoE.style.backgroundSize = "100% 100%";
  }

  //CARGO
  cargoE.innerHTML = especial.cargo;
  cargoE.style.fontFamily = especial.cargoStyle.fontFamily;
  cargoE.style.fontSize = especial.cargoStyle.fontSize;
  if (especial.cargoStyle.visibility) {
    cargoE.style.visibility = especial.cargoStyle.visibility;
  }

  especial.cargoStyle.class
    ? cargoE.classList.add(especial.cargoStyle.class)
    : false;

  //ATAQUE

  ataqueE.style.color = especial.ataqueStyle.color;
  ataqueE.style.fontSize = especial.ataqueStyle.fontSize;
  ataqueE.style.fontFamily = especial.ataqueStyle.fontFamily;
  ataqueE.style.visibility = especial.ataqueStyle.visibility;

  //ATAQUENOVO

  novoAtaqueE.style.color = especial.novoAtaqueStyle.color;
  novoAtaqueE.style.fontSize = especial.novoAtaqueStyle.fontSize;
  novoAtaqueE.style.fontFamily = especial.novoAtaqueStyle.fontFamily;
  novoAtaqueE.style.visibility = especial.novoAtaqueStyle.visibility;

  //BOTAO

  //SEED
  // seedEsp.innerHTML = seedEspecial;

  slotEspObj[slot] = especial;

  especial.print();
  // 

  cartaEspecial.style.opacity = "0.5";
}

btnCampones.addEventListener("click", function () {
  comprarCampones();
});
btnCavalheiro.addEventListener("click", function () {
  comprarCavalheiro();
});
btnSangue.addEventListener("click", function () {
  comprarSangue();
});
btnRainha.addEventListener("click", function () {
  comprarRainha();
});

// btnEsp.addEventListener('click', sorteio)

let myInterval;
slotEsp.addEventListener("click", moveToMao);
let cartaEspecial;

function moveToMao(e) {

  
  if(e.target.id == 'slotEsp') return

  if(e.target.parentElement.id == 'slotEsp'){
    
    cartaEspecial = e.target
  } else {
    cartaEspecial = e.target.offsetParent;
  }


  let obj;
  cartaEspecial == slotEsp.children[0] ? (obj = 0) : 0;
  cartaEspecial == slotEsp.children[1] ? (obj = 1) : 0;
  cartaEspecial == slotEsp.children[2] ? (obj = 2) : 0;

  let cardObj = slotEspObj[obj];

  if (!cardObj._bought) {
    cardObj._bought = true;
    cartaEspecial.style.opacity = "1";
    limparEsp(obj);
    
    return;
  }

 

  // cartaEspecial = slotEsp.children[0].cloneNode(true)

  

  if (cartaEspecial.id && !myInterval && cardObj._bought) {
    for (let i = 5; i > -1; i--) {
      if (mao.children[i].id == "mao" + i) {
        
        snd(novaCarta);
        
        objToMao(i, slotEspObj[obj]);
        
        if ((slotEspObj[obj].raridade.nome == "sangueAzul")) {
          ammo.add(1);
        }

        limparEsp(null,obj)
        mao.replaceChild(cartaEspecial, mao.children[i]);
        

        // AUDIO SELECAO
        if (slotEspObj[obj]._audioChosenFiles) {
          let carta = slotEspObj[obj];
          if (carta._dead) return;
          
          let faixa =
          carta._sourceChosen +
          gerarNumero(1, carta._audioChosenFiles) +
          ".mp3";
          audioPlayer(faixa, true, carta._CHN, 0.5);
        }

        

        break;
      } else {
        
      }
    }
  }

  selectHandCard();
}

export function limparEsp(notDelet,YesDelet) {
  teste.innerHTML = cartaEsp;
  let emptyEspP0 = teste.children[0].cloneNode(true);
  let emptyEspP1 = teste.children[0].cloneNode(true);
  let emptyEspP2 = teste.children[0].cloneNode(true);

  

  let slots = [
    () => {
      
      // 
      slotEsp.replaceChild(emptyEspP0, slotEsp.children[0]);
    },


    () => {
      
      
      // 
      slotEsp.replaceChild(emptyEspP1, slotEsp.children[1]);
    },


    () => {
      
      
      // 
      slotEsp.replaceChild(emptyEspP2, slotEsp.children[2]);
    },
  ];

  

    for(let i=0;i<3;i++){
  
      

        if(i == YesDelet){
          
          slots[i]()
          slotEspObj[i] = emptyObj
          
    
        }
      

      

        if(i != notDelet && notDelet != null && !slotEspObj[i]._bought){
          slots[i]()
          slotEspObj[i] = emptyObj
    
        }
      
    }
  
    // if(YesDelet){
    //   slots[0]()
    //   slotEspObj[0] = emptyObj
    //   
    // }
  

  // slotEsp.replaceChild(emptyEspP0, slotEsp.children[0]);
  // slotEsp.replaceChild(emptyEspP1, slotEsp.children[1]);
  // slotEsp.replaceChild(emptyEspP2, slotEsp.children[2]);

  

  ativarBtn();
}

window.addEventListener("load", Main);
