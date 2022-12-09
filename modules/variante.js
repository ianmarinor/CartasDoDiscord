import { seedObj } from "../script.js";

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
];

export let variante = ""

export function escolherVariante() {

    let seedString = seedObj._seedString;

  if (seedString[4] == 4 && seedString[5] == 9 && seedString[6] == 0) {
    
    variante = variantes[seedString[7]];
    console.log('variante: ', variante);

  } else {
    variante = ""
  }
}
