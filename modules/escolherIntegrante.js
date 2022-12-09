import {seedObj} from '../script.js'

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
export let integrante

export function escolherIntegrante() {
  

  let seedString =  seedObj._seedString
  console.log('seedObj do integrante ', seedObj);
  



  integrante = integrantes[seedString[1]]
}

