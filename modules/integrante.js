import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
let integrantes = [
  {nome: "Gandalf", retrato: "url('pics/gandarfu.png')"},
  {nome:"Turu", retrato: "url('pics/turu.webp')"},
  {nome: "Nefesto", retrato: "url('pics/nefesto.png')"},
  {nome: "Blackao", retrato: "url('pics/blackao.jpeg')"},
  {nome:"Sr. Antonio", retrato: "url('pics/antonio.png')"},
  {nome: "Pedro", retrato: "url('pics/pedro.png')"},
  {nome: "Curtas", retrato: "url('pics/curtas.png')"},
  {nome: "Twelve", retrato: "url('pics/twelve.png')"},
  {nome: "Junks", retrato: "url('pics/junks.jpeg')"},
  {nome: "Murillo", retrato: "url('pics/murilo.jpeg')"},
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
