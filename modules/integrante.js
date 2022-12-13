// let DEBUG = false
let DEBUG = true

import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
export let integrantes = [
  {nome: "Gandalf", retrato: "url('pics/gandarfu.png')",emoji: "⚡", },
  {nome:"Turu", retrato: "url('pics/turu.webp')",emoji: "⚡", },
  {nome: "Nefesto", retrato: "url('pics/nefesto.png')",emoji: "⚡", },
  {nome: "Blackao", retrato: "url('pics/blackao.jpeg')",emoji: "⚡", },
  {nome:"Sr. Antonio", retrato: "url('pics/antonio.png')",emoji: "⚡", },
  {nome: "Pedro", retrato: "url('pics/pedro.png')",emoji: "⚡", },
  {nome: "Curtas", retrato: "url('pics/curtas.png')",emoji: "⚡", },
  {nome: "Twelve", retrato: "url('pics/twelve.png')",emoji: "⚡", },
  {nome: "Junks", retrato: "url('pics/junks.jpeg')",emoji: "⚡", },
  {nome: "Murillo", retrato: "url('pics/murilo.jpeg')",emoji: "⚡", },
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
