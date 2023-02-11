import { seedObj, seedRNG } from "./modules/seedFabricator.js";
import { escolherEspecial, especial } from "./modules/especial.js";
import  {snd, selectHandCard, naoAu, empty1, empty2, empty3, empty4}  from "/script.js"

let moneyP = document.getElementById("money");
let btnCampones = document.getElementById("btnCampones");
let btnCavalheiro = document.getElementById("btnCavalheiro");
let btnSangue = document.getElementById("btnSangue");
let btnRainha = document.getElementById("btnRainha");
let inv = document.getElementById("inv")
let precoCampones = 50;
let precoCavalheiro = 100;
let precoSangueAzul = 250;
let precoRainha = 1000;

function debug(){
   precoCampones = 1;
   precoCavalheiro = 1;
   precoSangueAzul = 1;
   precoRainha = 1;
}

// debug()

let novaCarta = ['novaCarta.mp3']

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
  if (parseInt(moneyP.textContent) >= precoCampones) {
    btnCampones.disabled = false;

    // 
  } else {
    btnCampones.disabled = true;
    // 
  }

  //ATIVAR CAVA
  if (parseInt(moneyP.textContent) >= precoCavalheiro) {
    btnCavalheiro.disabled = false;

    // 
  } else {
    btnCavalheiro.disabled = true;
    // 
  }

  //ATIVAR SA
  if (parseInt(moneyP.textContent) >= precoSangueAzul) {
    btnSangue.disabled = false;

    // 
  } else {
    btnSangue.disabled = true;
    // 
  }

  //ATIVAR RAINHA
  if (parseInt(moneyP.textContent) >= precoRainha) {
    btnRainha.disabled = false;

    // 
  } else {
    btnRainha.disabled = true;
    // 
  }
}

function comprarCampones() {
  let audio = ['campones.wav', 0.3]
  if (parseInt(moneyP.textContent) >= precoCampones) {
    colocarSlot(makeCampones());
    moneyP.textContent = parseInt(moneyP.textContent) - precoCampones;
    ativarBtn();
    snd(audio)
  }
}

function comprarCavalheiro() {
  let audio = ['campones.wav', 0.3]
  if (parseInt(moneyP.textContent) >= precoCavalheiro) {
    colocarSlot(makeCavalheiro());
    moneyP.textContent = parseInt(moneyP.textContent) - precoCavalheiro;
    ativarBtn();
    snd(audio)
  }
}
function comprarSangue() {
  let audio = ['campones.wav', 0.3]
  if (parseInt(moneyP.textContent) >= precoSangueAzul) {
    colocarSlot(makeSangueAzul());
    moneyP.textContent = parseInt(moneyP.textContent) - precoSangueAzul;
    ativarBtn();
    snd(audio)
  }
}
function comprarRainha() {
  let audio = ['campones.wav', 0.3]
  if (parseInt(moneyP.textContent) >= precoRainha) {
    colocarSlot(makeRainha());
    moneyP.textContent = parseInt(moneyP.textContent) - precoRainha;
    ativarBtn();
    snd(audio)
  }
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
  '<button class="actionEsp">PRESS</button>' +
  '<p class="seedEsp"></p>' +
  '<p class="seloEsp"></p>' +
  "</div>";

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

function colocarSlot(tipo) {
  

  btnCampones = document.getElementById("btnCampones");
  btnCavalheiro = document.getElementById("btnCavalheiro");
  btnSangue = document.getElementById("btnSangue");
  btnRainha = document.getElementById("btnRainha");

  let cartaEspecial = document.getElementById("slotEsp").children[0]
  let cartaE = slotEsp.querySelector(".cartaEsp");
  let btnEsp = document.getElementById("btnEsp");
  let nomeE = slotEsp.querySelector(".nomeEsp");
  // let nomeE = slotEsp.children[0].children[0]
  let retratoE = slotEsp.querySelector(".retratoEsp");
  let cargoE = slotEsp.querySelector(".cargoEsp");
  let poderE = slotEsp.querySelector(".poderEsp");
  let ataqueE = slotEsp.querySelector(".ataqueEsp");
  let novoAtaqueE = slotEsp.querySelector(".novoAtaqueEsp");
  let actionE = slotEsp.querySelector(".actionEsp");
  let seedEsp = slotEsp.querySelector(".seedEsp");

  escolherEspecial(tipo);
  

  nomeE.classList.remove("float");

  slotEsp.children[0].id = especial.cartaId;

  //PERSONALIZADO
  cartaEspecial.dataset.tier = especial.raridade.nome
  cartaEspecial.dataset.dmgboss = especial.dmgboss
  retratoE.style.visibility = "visible";
  
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
    cargoE.style.visibility = especial.cargoStyle.visibility
  }

  //ATAQUE
  ataqueE.innerHTML = especial.ataqueE;
  ataqueE.style.color = especial.ataqueStyle.color;
  ataqueE.style.fontSize = especial.ataqueStyle.fontSize;
  ataqueE.style.fontFamily = especial.ataqueStyle.fontFamily;
  ataqueE.style.visibility = especial.ataqueStyle.visibility;

  //ATAQUENOVO
  novoAtaqueE.innerHTML = especial.novoAtaqueE;
  novoAtaqueE.style.color = especial.novoAtaqueStyle.color;
  novoAtaqueE.style.fontSize = especial.novoAtaqueStyle.fontSize;
  novoAtaqueE.style.fontFamily = especial.novoAtaqueStyle.fontFamily;
  novoAtaqueE.style.visibility = especial.novoAtaqueStyle.visibility;

  //BOTAO

  //SEED
  seedEsp.innerHTML = seedEspecial;
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

function moverToCartaMao() {
  cartaEspecial = slotEsp.children[0];

  if (cartaEspecial.id && !myInterval) {
    mao.replaceChild(cartaEspecial, mao.children[0]);
    limparEsp();
    snd(novaCarta)
  }
}

export function moveToMao() {

  cartaEspecial = slotEsp.children[0]

  if (cartaEspecial.id && !myInterval){


    for (let i = 0; i < 6; i++) {
      if (mao.children[i].id == "mao" + i) {


        
        mao.replaceChild(cartaEspecial, mao.children[i])
        limparEsp()
        snd(novaCarta)

        if(cartaEspecial.id == 'premiomonark'){
          for(let i=0; i<4; i++){
            let isMonark = inv.children[i].id == 'carta-monark'
            let monark = inv.children[i]

            if(isMonark){
              if (monark == inv.children[0]) {
                inv.replaceChild(empty1, monark);
              } else if (monark == inv.children[1]) {
                inv.replaceChild(empty2, monark);
              } else if (monark == inv.children[2]) {
                inv.replaceChild(empty3, monark);
              } else if (monark == inv.children[3]) {
                inv.replaceChild(empty4, monark);
              }
              break
            }

          }
        }

        break;
      } else {
        
        // snd(naoAu)
      }
    }

    
  }
  
  selectHandCard();
}




export function limparEsp() {
  slotEsp.innerHTML = cartaEsp;
  ativarBtn();
}
