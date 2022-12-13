let DEBUG = false

import { seedObj } from "./seedFabricator.js";

import {cargo,
  escolherCargo,
  cargos,} from "./cargo.js";
import { variante} from "./variante.js";

let seedString = seedObj._seedString;
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

let enSC 
 function energiaSemCargo() {
  seedString = seedObj._seedString;
  return  Math.floor((parseInt(seedString[5]) + parseInt(seedString[0])) / 2 + 1); // 1 a 10
}
function energiaPeople(){
  seedString = seedObj._seedString;
  return  Math.floor((parseInt(seedString[0]) + parseInt(seedString[12])) / 2 + 11); // 11 a 20
}
function energiaGentleman() {
  seedString = seedObj._seedString;
  return  Math.floor((parseInt(seedString[12]) + parseInt(seedString[0])) / 2 + 21); // 21 a 30
}
  function energiaMonark() { return Math.floor(Math.random() * 2);}

  function  energiaNobre() {
    seedString = seedObj._seedString;
    return Math.floor((parseInt(seedString[11]) + parseInt(seedString[10])) / 2 + 31); // 31 a 40
}
  function  energiaLord() {
    seedString = seedObj._seedString;
    return Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 41); // 41 a 50
}
  function  energiaMinistro() {
    seedString = seedObj._seedString;
    return  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 51); //51 a 60
}
  function  energiaPrimeMinister() {
    seedString = seedObj._seedString;
    return Math.floor((parseInt(seedString[0]) + parseInt(seedString[10])) / 2 + 71); // 70 a 80
}
  function energiaRNGPremioMarino() {
    seedString = seedObj._seedString;
  return Math.floor((parseInt(seedString[0]) + parseInt(seedString[5])) / 2 + 121); // 121 a 130
}
export let pontoVarianteValor = 0;



export let energia 

export function escolherPoder() {

  console.log('seedObj: ', seedString);
  console.log('energia: ', energia);

  //VARIANTE
  if (variante.nome != "") {
    seedString = seedObj._seedString;
    (pontoVarianteValor = Math.floor(
      parseInt(seedString[0]) +1  * 1+ parseInt(seedString[1]) + 1 * 7 // 50 a 140
    ));
  } else {
    (pontoVarianteValor = 0);
  }
  console.log('pontoVarianteValor: ', pontoVarianteValor);


  //CARGOS

  if (cargo == semCargo) {
    
    return energia = {
      energiaTotal: energiaSemCargo() + pontoVarianteValor,
      bonusVariante: pontoVarianteValor
    }}

   if (cargo == people) {
    
      
    return energia = {
      energiaTotal: energiaPeople() + pontoVarianteValor,
      bonusVariante: pontoVarianteValor
    
  }} else if (cargo == gentleman) {
    return energia = {
      energiaTotal: energiaGentleman() + pontoVarianteValor,
      bonusVariante: pontoVarianteValor
    };
  } else if (cargo == monark) {
    return energia = {
      energiaTotal: energiaMonark(),
    };
  } else if (cargo == nobre) {
    return  (energia = {
      energiaTotal: energiaNobre() + pontoVarianteValor,
      bonusVariante: pontoVarianteValor
    });
  } else if (cargo == lord) {
    return (energia = {
      energiaTotal: energiaLord() + pontoVarianteValor,
      bonusVariante: pontoVarianteValor
    });
  } else if (cargo == ministro) {
    return (energia = {
      energiaTotal: energiaMinistro() + pontoVarianteValor,
      bonusVariante: pontoVarianteValor
    });
  } else if (cargo === primeMinister) {
    return (energia = {
      energiaTotal: energiaPrimeMinister() + pontoVarianteValor,
      bonusVariante: pontoVarianteValor
    });
  } else if (cargo === premioMarino) {
    return (energia = {
      energiaTotal: energiaRNGPremioMarino() + pontoVarianteValor,
      bonusVariante: pontoVarianteValor
    });
  } else {
   return energia = {
      energiaTotal: 0,
      bonusVariante: 0
  }
  console.log('energia: ', energia);
  
}}
