let DEBUG = false

import { seedObj } from "./seedFabricator.js";

let seedString = seedObj._seedString;

export let cargos = {
  premiomarino: {
    nome: "premiomarino",
    rng:() => seedString[8] == 0 &&
      seedString[9] == 3 &&
      seedString[10] == 4 &&
      seedString[11] == 5,

    
  },
    primeMinister: {
      nome: "primeminister",
      rng: () =>
        seedString[8] == 0 &&
        seedString[9] == 3 &&
        seedString[10] == 4 &&
        seedString[11] >= 8,
    },

    ministro: {
      nome: "ministro",
      rng: () =>
        seedString[8] == 0 && seedString[9] == 3 && seedString[10] >= 8,
    },

    monark: {
      nome: "monark",
      rng: () =>
        seedString[8] == 1 && seedString[9] >= 3,
    },

    lord: {
      nome: "lord",
      rng: () => seedString[8] == 0 && seedString[9] == 3,
    },

    nobre: {
      nome: "nobre",
      rng: () => seedString[8] == 0 && seedString[9] >= 8,
    },

    gentleman: {
      nome: "gentleman",
      rng: () => seedString[8] == 3,
    },

    people: {
      nome: "people",
      rng: () => seedString[8] >= 7,
    },

    semCargo: {
      nome: "semcargo",
      rng: false,
    },

    noCargo: {
      nome: "noCargo",
      rng: () => seedString[14] == 0         
    },
}




export let cargo = "";
export function escolherCargo(teste) {

  if (!teste){
    seedString = seedObj._seedString;
 } else{
 seedString = teste}
  
  // numeroDeCartas.CartasTotais++;
  // console.log("no modulo cargo", seedString);
  // cargos.showSeed()

  if(seedString[14] == 0){
    return cargo = cargos.noCargo;

  } else {
    //PREMIO MARINO - 0.01% - 1 EM 10K
   if (cargos.premiomarino.rng()) {
    // let teste =
    //   (numeroDeCartas.cartasNormais.premioMarino * 100) /
    //   numeroDeCartas.CartasTotais;
    cargo = cargos.premiomarino;
    // numeroDeCartas.cartasNormais.premioMarino++;
    // numeroDeCartas.porcentagemCartasNormais.premioMarino =
    //   teste.toFixed(3) + "%";
  }

  //PRIME MINISTER - 1 EM 5k - 0.02%
  else if (cargos.primeMinister.rng()) {
    cargo = cargos.primeMinister;
    // let teste =
    //   (numeroDeCartas.cartasNormais.primeMinister * 100) /
    //   numeroDeCartas.CartasTotais;
    // numeroDeCartas.cartasNormais.primeMinister++;
    // numeroDeCartas.porcentagemCartasNormais.primeMinister =
    //   teste.toFixed(3) + "%";
  }

  //MINISTER - 1 EM 500 - 0.2%
  else if (cargos.ministro.rng()) {
    cargo = cargos.ministro;

    // let teste =
    //   (numeroDeCartas.cartasNormais.ministro * 100) /
    //   numeroDeCartas.CartasTotais;
    // numeroDeCartas.cartasNormais.ministro++;
    // numeroDeCartas.porcentagemCartasNormais.ministro = teste.toFixed(2) + "%";
  }

  //MONARK - 1 EM ???
  else if (cargos.monark.rng()) {
    cargo = cargos.monark;
    // numeroDeCartas.cartasNormais.monark++;
    // numeroDeCartas.porcentagemCartasNormais.monark =
    //   Math.floor(
    //     (numeroDeCartas.cartasNormais.monark * 100) /
    //       numeroDeCartas.CartasTotais
    //   ) + "%";
  }

  //LORD - 1 EM 100 - 1%
  else if (cargos.lord.rng()) {
    cargo = cargos.lord;
    // let teste =
    //   (numeroDeCartas.cartasNormais.lord * 100) / numeroDeCartas.CartasTotais;
    // numeroDeCartas.cartasNormais.lord++;
    // numeroDeCartas.porcentagemCartasNormais.lord = teste.toFixed(2) + "%";
  }

  //NOBRE - 1 EM 50 - 2%
  else if (cargos.nobre.rng()) {
    // let teste =
    //   (numeroDeCartas.cartasNormais.nobre * 100) / numeroDeCartas.CartasTotais;
    cargo = cargos.nobre;
    // numeroDeCartas.cartasNormais.nobre++;
    // numeroDeCartas.porcentagemCartasNormais.nobre = teste.toFixed(1) + "%";
  }

  //GENTLEMAN - 1 EM 10 - 10%
  else if (cargos.gentleman.rng()) {
    cargo = cargos.gentleman;
    // numeroDeCartas.cartasNormais.gentleman++;
    // numeroDeCartas.porcentagemCartasNormais.gentleman =
    //   Math.floor(
    //     (numeroDeCartas.cartasNormais.gentleman * 100) /
    //       numeroDeCartas.CartasTotais
    //   ) + "%";
  }

  //PEOPLE - 1 EM 3 - 30%
  else if (cargos.people.rng()) {
    cargo = cargos.people;
    // numeroDeCartas.cartasNormais.people++;
    // numeroDeCartas.porcentagemCartasNormais.people =
    //   Math.floor(
    //     (numeroDeCartas.cartasNormais.people * 100) /
    //       numeroDeCartas.CartasTotais
    //   ) + "%";
  }
  

  //SEMCARGO  - 1 EM 2 - 50%
  else {
    cargo = cargos.semCargo;
    // console.log(cargo, 'no moduilo');

    // // numeroDeCartas.cartasNormais.semCargo++;
    // numeroDeCartas.porcentagemCartasNormais.semCargo =
    //   Math.floor(
    //     (numeroDeCartas.cartasNormais.semCargo * 100) /
    //       numeroDeCartas.CartasTotais
    //   ) + "%";
  }
  }

  
  // console.log("cargo no mod cargo", cargo);
}
