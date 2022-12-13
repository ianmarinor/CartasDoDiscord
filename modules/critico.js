import { seedObj } from "./seedFabricator.js";
import { variante } from "./variante.js";

export let criticoTag;

export function criticoCheck() {
  let seedString = seedObj._seedString;

  if (seedString[1] == seedString[2]) {
    if (variante.nome != "" && seedString[1] == seedString[6]) {
        
       (criticoTag = {
        critico: false,
        superCritico: false,
        ultraCritico: true,
      });
    } else {
       criticoTag = {critico: true, superCritico: false, ultraCritico: false };
    }
  } else if (variante.nome != "" && seedString[1] == seedString[6]) {
     (criticoTag = {
      critico: false,
      superCritico: true,
      ultraCritico: false,
    });
  } else {
    criticoTag = {critico: false, superCritico: false, ultraCritico: false };
  }
  console.log('criticoTag: ', criticoTag);
  console.log('variante.name: ', variante.nome);
    
}
