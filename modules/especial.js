import { seedObj } from "../script.js";

export let especial = "";
export function escolherEspecial() {
    let seedString = seedObj._seedString;
  
  if (
    seedString[5] == 8 &&
    seedString[6] == 9 &&
    seedString[7] == 9 &&
    seedString[8] == 1 &&
    seedString[9] >= 4
  ) {
    return (especial = "especial-tenica");
  } else if (
    seedString[5] == 8 &&
    seedString[6] == 3 &&
    seedString[7] == 4 &&
    seedString[8] == 4
  ) {
    return (especial = "");
  } else if (
    seedString[5] == 8 &&
    seedString[6] == 1 &&
    seedString[7] == 7 &&
    seedString[8] >= 4
  ) {
    return (especial = "");
  } else if (seedString[5] == 8 && seedString[6] == 4 && seedString[7] == 2) {
    return (especial = "");
  } else if (seedString[5] == 8 && seedString[6] == 1 && seedString[7] <= 3) {
    return (especial = "");
  } 
  
  // else if (seedString[5] >= 6) 
  else if (seedString[5] == 8 && seedString[6] >= 8) 
  
  {
    return (especial = "carta-speaker");
  } else if (seedString[5] == 8 && seedString[6] <= 4) {
    return (especial = "especial-click");
  } else {
    return (especial = "");
  }
}