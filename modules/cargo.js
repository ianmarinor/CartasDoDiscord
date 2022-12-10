import { seedObj } from "../script.js";

export let numeroDeCartas = {
  cartasNormais: {
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

  porcentagemCartasNormais: {
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
  CartasTotais: 0
};



export let cargo = "";
export function escolherCargo() {
  let seedString = seedObj._seedString;
  numeroDeCartas.CartasTotais++

  //PREMIO MARINO - 0.01% - 1 EM 10K
  if (
    seedString[8] == 0 &&
    seedString[9] == 3 &&
    seedString[10] == 4 &&
    seedString[11] == 5
  ) {
    let teste = (numeroDeCartas.cartasNormais.premioMarino * 100) / numeroDeCartas.CartasTotais
    cargo = "carta-premiomarino";
    numeroDeCartas.cartasNormais.premioMarino++;
    numeroDeCartas.porcentagemCartasNormais.premioMarino = teste.toFixed(3) + "%";
      
  }
  

  //PRIME MINISTER - 1 EM 5k - 0.02%
  else if (
    seedString[8] == 0 &&
    seedString[9] == 3 &&
    seedString[10] == 4 &&
    seedString[11] >= 8
  ) {
    cargo = "carta-primeminister";
    let teste = (numeroDeCartas.cartasNormais.primeMinister * 100) / numeroDeCartas.CartasTotais
    numeroDeCartas.cartasNormais.primeMinister++;
    numeroDeCartas.porcentagemCartasNormais.primeMinister =
      teste.toFixed(3) + "%";
  }

  //MINISTER - 1 EM 500 - 0.2%
  else if (seedString[8] == 0 && seedString[9] == 3 && seedString[10] >= 8) {
    cargo = "carta-ministro";

let teste = (numeroDeCartas.cartasNormais.ministro * 100) / numeroDeCartas.CartasTotais 
    numeroDeCartas.cartasNormais.ministro++;
    numeroDeCartas.porcentagemCartasNormais.ministro = teste.toFixed(2) + "%";
      }

  //MONARK - 1 EM ???
  else if (seedString[8] == 1 && seedString[9] >= 3 && seedString[10] != 4) {
    cargo = "carta-monark";
    numeroDeCartas.cartasNormais.monark++;
    numeroDeCartas.porcentagemCartasNormais.monark =
      Math.floor((numeroDeCartas.cartasNormais.monark * 100) / numeroDeCartas.CartasTotais) + "%";
  }

  //LORD - 1 EM 100 - 1%
  else if (seedString[8] == 0 && seedString[9] == 3) {
    cargo = "carta-lord";
    let teste = (numeroDeCartas.cartasNormais.lord * 100) / numeroDeCartas.CartasTotais
    numeroDeCartas.cartasNormais.lord++;
    numeroDeCartas.porcentagemCartasNormais.lord =
      teste.toFixed(2) + '%'
  }

  //NOBRE - 1 EM 50 - 2%
  else if (seedString[8] == 0 && seedString[9] >= 8) {
    let teste = (numeroDeCartas.cartasNormais.nobre * 100) / numeroDeCartas.CartasTotais
    cargo = "carta-nobre";
    numeroDeCartas.cartasNormais.nobre++;
    numeroDeCartas.porcentagemCartasNormais.nobre =
    teste.toFixed(1) + '%' ;
  }

  //GENTLEMAN - 1 EM 10 - 10%
  else if (seedString[8] == 3) {
    cargo = "carta-gentleman";
    numeroDeCartas.cartasNormais.gentleman++;
    numeroDeCartas.porcentagemCartasNormais.gentleman =
      Math.floor((numeroDeCartas.cartasNormais.gentleman * 100) / numeroDeCartas.CartasTotais) + "%";
  }

  //PEOPLE - 1 EM 3 - 30% 
  else if (seedString[8] >= 7) {
    cargo = "carta-people";
    numeroDeCartas.cartasNormais.people++;
    numeroDeCartas.porcentagemCartasNormais.people =
      Math.floor((numeroDeCartas.cartasNormais.people * 100) / numeroDeCartas.CartasTotais) + "%";
  } else {
    cargo = "carta-semcargo";
    numeroDeCartas.cartasNormais.semCargo++;
    numeroDeCartas.porcentagemCartasNormais.semCargo =
      Math.floor((numeroDeCartas.cartasNormais.semCargo * 100) / numeroDeCartas.CartasTotais) + "%";
  }
}



