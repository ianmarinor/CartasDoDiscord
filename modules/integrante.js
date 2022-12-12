import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
let integrantes = [
  {nome: "Gandalf"},
  {nome:"Turu"},
  {nome: "Nefesto"},
  {nome: "Blackao"},
  {nome:"Sr. Antonio"},
  {nome: "Pedro"},
  {nome: "Curtas"},
  {nome: "Twelve"},
  {nome: "Junks"},
  {nome: "Murillo"},
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
