import { seedObj } from "./seedFabricator.js";

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

export function escolherCidade() {
  let seedString = seedObj._seedString;
  // console.log("seedObj da cidade ", seedString);

  cidade = cidades[seedString[2]];
  if (seedString[0] == 1) {
    cidade = "";
  }
}
