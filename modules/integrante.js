import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
let integrantes = [
  "Gandalf",
  "Turu",
  "Nefesto",
  "Blackao",
  "Sr. Antonio",
  "Pedro",
  "Curtas",
  "Twelve",
  "Junks",
  "Murillo",
];

// let seedString
export let integrante;

export function escolherIntegrante(teste) {

  if (!teste){
     seedString = seedObj._seedString;
  } else{
  seedString = teste}

  // console.log('seedObj do integrante ', seedString);
  // console.log("seedObj do integrante ", seedObj);

  integrante = integrantes[seedString[1]];
  if (seedString[14] == 0) {
    integrante = "";
  }
}
// buscarSeed()
