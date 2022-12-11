import { seedObj } from "./seedFabricator.js";

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

export function escolherVariante() {
  let seedString = seedObj._seedString;

  if (seedString[3] == 6 && seedString[4] == 6 && seedString[5] == 6) {
    variante = variantes[seedString[6]];
    // console.log('variante: ', variante);
  } else {
    variante = "";
  }
}
