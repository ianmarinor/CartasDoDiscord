let DEBUG = false
// let DEBUG = true

import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
let variantes = [
  { nome: "Gandalf", display: "💊 FARMACEUTICO 💊"},
  { nome: "Turu", display: "👌 " + "AÔPA, BÃO 👌" },
  { nome: "Nefesto", display:"variante nefesto"},
  { nome: "Blackao", display: "😖" + "COMO MUDA A FONTE 😖" },
  { nome: "Sr. Antonio", display: 'variante anto' },
  { nome: "Pedro", display: "🎉" + "UM  ABALO ! 🎉" },
  { nome: "Curtas", display: "📢AAAAAAAAAAHHH!!!!📢" },
  { nome: "Twelve", display: "⛪ TODO DIA ISSO ⛪" },
  { nome: "Junks", display: "🐶 O PUGO 🐶" },
  { nome: "Murillo", display:"🥛 LEITE COM PÊRA 🍐"},
  { nome: "", display: "" },
];

export let variante = "";

export function escolherVariante(teste) {
  if (!teste) {
    seedString = seedObj._seedString;
  } else {
    seedString = teste;
  }

  if (seedString[3] == 6 && seedString[4] == 6 && seedString[5] == 6) {
    console.log('variante: ', variante);
   return  variante = variantes[seedString[6]];
  } else {
    DEBUG && console.log("variante modulo: ", variante);
    return variante = variantes[10];
  }

  
}
