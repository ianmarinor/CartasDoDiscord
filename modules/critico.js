import { seedObj } from "./seedFabricator.js";
import { variante } from "./variante.js";

export let criticoTag;

export function criticoCheck() {
  let seedString = seedObj._seedString;

  if (seedString[1] == seedString[2]) {
    if (variante.nome != "" && seedString[1] == seedString[6]) {
        //ULTRACRITICO
       (criticoTag = {
        critico: false,
        superCritico: false,
        ultraCritico: true,
        multi: 6
      });
    } else {
        //CRITICO
       criticoTag = {critico: true, superCritico: false, ultraCritico: false, multi: 2};
    }
  } else if (variante.nome != "" && seedString[1] == seedString[6]) {
    //SUPERCRITICO
     (criticoTag = {
      critico: false,
      superCritico: true,
      ultraCritico: false,
      multi: 3
    });
  } else {
    //NAO CRITICO
    criticoTag = {critico: false, superCritico: false, ultraCritico: false, multi: 1};
  }
//   console.log('criticoTag: ', criticoTag);
//   console.log('variante.name: ', variante.nome);
    
}
