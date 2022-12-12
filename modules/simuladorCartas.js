let DEBUG = false;

import { generateSeed } from "./seedFabricator.js";
import { escolherIntegrante, integrante } from "./integrante.js";
import { escolherCidade, cidade } from "./cidade.js";
import { cargo, escolherCargo, cargos } from "./cargo.js";
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
import { variante, escolherVariante } from "./variante.js";
import { especial, escolherEspecial, especiais } from "./especial.js";
let tenica = especiais.tenica;
let speaker = especiais.speaker;
let bonusCartasMais = especiais.bonusCartasMais;
let abelha = especiais.abelha;
let cartaNaoEspecial = especiais.cartaNaoEspecial;

let numeroDeSeeds = {
  seeds15Nums: 0,
};

let numTotais = {
  cartasTotais: 0,
  cartasNormais: 0,
  cartasEspeciais: 0,

  porc: {
    cartasNormaisPorc: 0,
    cartasEspeciaisPorc: 0,
  }

};

let numNormais = {
  cargos: {
    semCargo: 0,
    people: 0,
    gentleman: 0,
    nobre: 0,
    lord: 0,
    ministro: 0,
    primeMinister: 0,
    premioMarino: 0,
    monark: 0,
  },

  cargosPorc: {
    semCargo: 0,
    people: 0,
    gentleman: 0,
    nobre: 0,
    lord: 0,
    ministro: 0,
    primeMinister: 0,
    premioMarino: 0,
    monark: 0,
  },

  var: 0,
  varPorc: 0

};



let numEspeciais = {
  especiais: { tenica: 0, speaker: 0, bonusCartasMais: 0, abelha: 0 },

  especiaisPorc: {
    tenica: 0,
    speaker: 0,
    bonusCartasMais: 0,
    abelha: 0,
  },
};

let probabilidadeCartas = {
  normais:{
    semCargo: 0,
    people: 0,
    gentleman: 0,
    nobre: 0,
    lord: 0,
    ministro: 0,
    primeMinister: 0,
    premioMarino: 0,
    monark: 0,
  },
  especiais:{
    tenica: 0,
    speaker: 0,
    bonusCartasMais: 0,
    abelha: 0,
  },
  variantes: 0
}




function calcPorc(a, b) {
  return (a * 100) / b;
}

let seedObj;

function tudoParaTeste() {
  seedObj = generateSeed(false);
  // escolherIntegrante();
  escolherCidade();
  escolherCargo();
  escolherVariante();
  escolherEspecial();
}

tudoParaTeste();

let quantasCartas = 1000000;

function numeroDeCartasTeste() {
  for (let j = 0; j < quantasCartas; j++) {
    // tudoParaTeste();
    seedObj = generateSeed("");
    numTotais.cartasTotais++;
    // DEBUG && console.log(seedObj);

    // DEBUG && console.log(integrante);

    //SEPARAR SEED
    if (seedObj._seedLength >= 15) {
      numeroDeSeeds.seeds15Nums++;
    }

    //SEPARAR INTEGRANTE
    escolherIntegrante(seedObj._seedString);

    //SEPARAR CARGO
    escolherCargo(seedObj._seedString);
    DEBUG && console.log(cargo);

    // calcular cartas totais
    if (cargo == noCargo) {
      numTotais.cartasEspeciais++;
    } else {
      numTotais.cartasNormais++;
    }

    if (cargo == semCargo) {
      numNormais.cargos.semCargo++;
    }
    if (cargo == people) {
      numNormais.cargos.people++;
    }
    if (cargo == gentleman) {
      numNormais.cargos.gentleman++;
    }
    if (cargo == nobre) {
      numNormais.cargos.nobre++;
    }
    if (cargo == lord) {
      numNormais.cargos.lord++;
    }
    if (cargo == monark) {
      numNormais.cargos.monark++;
    }
    if (cargo == ministro) {
      numNormais.cargos.ministro++;
    }
    if (cargo == primeMinister) {
      numNormais.cargos.primeMinister++;
    }
    if (cargo == premioMarino) {
      numNormais.cargos.premioMarino++;
    }

    escolherVariante(seedObj._seedString)
    if(variante!=''){
      numNormais.var++
    }

    //SEPARAR ESPECIAL
    escolherEspecial(seedObj._seedString);
    // DEBUG && console.log(especial);
    if (especial == tenica) {
      numEspeciais.especiais.tenica++;
    }
    if (especial == speaker) {
      numEspeciais.especiais.speaker++;
    }
    if (especial == abelha) {
      numEspeciais.especiais.abelha++;
    }
    if (especial == bonusCartasMais) {
      numEspeciais.especiais.bonusCartasMais++;
    }
  }

  // CALCULO PORCENTAGENS
  numTotais.porc.cartasNormaisPorc =
    calcPorc(numTotais.cartasNormais, numTotais.cartasTotais)
      .toFixed(1) + "%";

  numTotais.porc.cartasEspeciaisPorc =
    calcPorc(numTotais.cartasEspeciais, numTotais.cartasTotais)
      .toFixed(1) + "%";

  numNormais.cargosPorc.semCargo = calcPorc(numNormais.cargos.semCargo , numTotais.cartasNormais).toFixed(0) + "%"

  numNormais.cargosPorc.people = calcPorc(numNormais.cargos.people , numTotais.cartasNormais).toFixed(0) + "%"

  numNormais.cargosPorc.gentleman = calcPorc(numNormais.cargos.gentleman , numTotais.cartasNormais).toFixed(0) + "%"

  numNormais.cargosPorc.nobre = calcPorc(numNormais.cargos.nobre , numTotais.cartasNormais).toFixed(0) + "%"

  numNormais.cargosPorc.lord = calcPorc(numNormais.cargos.lord , numTotais.cartasNormais).toFixed(1) + "%"

  numNormais.cargosPorc.ministro = calcPorc(numNormais.cargos.ministro , numTotais.cartasNormais).toFixed(1) + "%"

  numNormais.cargosPorc.primeMinister = calcPorc(numNormais.cargos.primeMinister , numTotais.cartasNormais).toFixed(3) + "%"

  numNormais.cargosPorc.premioMarino = calcPorc(numNormais.cargos.premioMarino , numTotais.cartasNormais).toFixed(3) + "%"

  numNormais.cargosPorc.monark = calcPorc(numNormais.cargos.monark , numTotais.cartasNormais).toFixed(1) + "%"


  // porc especiais

  numEspeciais.especiaisPorc.abelha =  calcPorc(numEspeciais.especiais.abelha , numTotais.cartasEspeciais).toFixed(2) + "%"

  numEspeciais.especiaisPorc.bonusCartasMais =  calcPorc(numEspeciais.especiais.bonusCartasMais , numTotais.cartasEspeciais).toFixed(1) + "%"

  numEspeciais.especiaisPorc.tenica =  calcPorc(numEspeciais.especiais.tenica , numTotais.cartasEspeciais).toFixed(3) + "%"

  numEspeciais.especiaisPorc.speaker =  calcPorc(numEspeciais.especiais.speaker , numTotais.cartasEspeciais).toFixed(1) + "%"

  // porc var
  numNormais.varPorc = calcPorc(numNormais.var,numTotais.cartasNormais).toFixed(2) + "%"

  // PROBABLIDADES GERAIS
  //NORMAIS CARGOS
  probabilidadeCartas.normais.semCargo = calcPorc(numNormais.cargos.semCargo , numTotais.cartasTotais).toFixed(0) + "%"

  probabilidadeCartas.normais.people = calcPorc(numNormais.cargos.people , numTotais.cartasTotais).toFixed(0) + "%"

  probabilidadeCartas.normais.gentleman = calcPorc(numNormais.cargos.gentleman , numTotais.cartasTotais).toFixed(0) + "%"

  probabilidadeCartas.normais.nobre = calcPorc(numNormais.cargos.nobre , numTotais.cartasTotais).toFixed(1) + "%"

  probabilidadeCartas.normais.lord = calcPorc(numNormais.cargos.lord , numTotais.cartasTotais).toFixed(1) + "%"

  probabilidadeCartas.normais.ministro = calcPorc(numNormais.cargos.ministro , numTotais.cartasTotais).toFixed(1) + "%"

  probabilidadeCartas.normais.primeMinister = calcPorc(numNormais.cargos.primeMinister , numTotais.cartasTotais).toFixed(3) + "%"

  probabilidadeCartas.normais.premioMarino = calcPorc(numNormais.cargos.premioMarino , numTotais.cartasTotais).toFixed(3) + "%"

  probabilidadeCartas.normais.monark = calcPorc(numNormais.cargos.monark , numTotais.cartasTotais).toFixed(1) + "%"


  //ESPECIAIS
  probabilidadeCartas.especiais.abelha =  calcPorc(numEspeciais.especiais.abelha , numTotais.cartasTotais).toFixed(3) + "%"
 
  probabilidadeCartas.especiais.tenica =  calcPorc(numEspeciais.especiais.tenica , numTotais.cartasTotais).toFixed(3) + "%"

  probabilidadeCartas.especiais.speaker =  calcPorc(numEspeciais.especiais.speaker , numTotais.cartasTotais).toFixed(3) + "%"

  probabilidadeCartas.especiais.bonusCartasMais =  calcPorc(numEspeciais.especiais.bonusCartasMais , numTotais.cartasTotais).toFixed(3) + "%"

  //variante
  probabilidadeCartas.variantes = calcPorc(numNormais.var,numTotais.cartasTotais).toFixed(2) + "%"

 

  console.log('!!!!!!! NAO ESQUECA DE DESLIGAR O SIMULADOR !!!!!!!!!!!');
  console.log('!!!!!!! NAO ESQUECA DE DESLIGAR O SIMULADOR !!!!!!!!!!!');
  console.log(variante);
  console.log("numTotais:", numTotais);
  console.log("numNormais:", numNormais);
  console.log('numEspeciais: ', numEspeciais);
  console.log('**PROBABILIDADE CARTAS**',probabilidadeCartas);
  console.log('!!!!!!! NAO ESQUECA DE DESLIGAR O SIMULADOR !!!!!!!!!!!');
  console.log('!!!!!!! NAO ESQUECA DE DESLIGAR O SIMULADOR !!!!!!!!!!!');
}

// numeroDeCartasTeste();
