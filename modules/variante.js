import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
let variantes = [
  "farmacêutico",
  "bão",
  "fonte",
  "ixqueiro",
  "abalo",
  "grito",
  "dia",
  "quimico",
  "pêra",
  "",
];

export let variante = "";

export function escolherVariante(teste) {
  
  if (!teste){
    seedString = seedObj._seedString;
 } else{
  seedString = teste}

  if (seedString[3] == 6 && seedString[4] == 6 && seedString[5] == 6) {
    variante = variantes[seedString[6]];
    // console.log('variante: ', variante);
  } else {
    variante = "";
  }
}
