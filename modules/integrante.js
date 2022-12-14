// let DEBUG = false
let DEBUG = true

import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
export let integrantes = [
  {nome: "GANDALF", retrato: "url('pics/gandarfu.png')",emoji: "⚡", },
  {nome:"TURU", retrato: "url('pics/turu.webp')",emoji: "⚡", },
  {nome: "NEFESTO", retrato: "url('pics/nefesto.png')",emoji: "⚡", },
  {nome: "BLACKAO", retrato: "url('pics/blackao.jpeg')",emoji: "⚡", },
  {nome:"ANTONIO", retrato: "url('pics/antonio.png')",emoji: "⚡", },
  {nome: "PEDRO", retrato: "url('pics/pedro.png')",emoji: "⚡", },
  {nome: "CURTAS", retrato: "url('pics/curtas.png')",emoji: "⚡", },
  {nome: "TWELVE", retrato: "url('pics/twelve.png')",emoji: "⚡", },
  {nome: "JUNKS", retrato: "url('pics/junks.jpeg')",emoji: "⚡", },
  {nome: "MURILLO", retrato: "url('pics/murilo.jpeg')",emoji: "⚡", },
  {}
];

// let seedString
export let integrante;

export function escolherIntegrante(teste) {

  if (!teste){
     seedString = seedObj._seedString;
  } else{
  seedString = teste}

  DEBUG && console.log('seedObj do integrante ', seedString);
  DEBUG && console.log("seedObj do integrante ", seedObj);

  integrante = integrantes[seedString[1]];
  if (seedString[14] == 0) {
    integrante = {nome: ""}
  }
  return integrante
}
// buscarSeed()
