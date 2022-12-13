import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
let cidades = [
  "de Caxias do Sul",
  "de Itapira",
  "de Ubatuba",
  "de Sao Jose Dos Pinhais",
  "do Rio de Janeiro",
  "de Maringá",
  "de Itanhaém",
  "da Lapa",
  "de Jaraguá",
  "de Santo André",
];

export let cidade = "";

export function escolherCidade(teste) {

  if (!teste){
    seedString = seedObj._seedString;
 } else{
 seedString = teste}
  
  // console.log("seedObj da cidade ", seedString);

  cidade = cidades[seedString[2]];
  if (seedString[14] == 0) {
    cidade = "";
  }
  return cidade
}
