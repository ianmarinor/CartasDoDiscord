import { generateSeed } from "./generateSeed.js";
import { input } from "../script.js";

export let integrante = ""
export function escolherIntegrante() {
    let seedString = generateSeed(input).toString();
    console.log('integrante seed', seedString);
    if (
      seedString[1] == 1
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Gandalf");
    } else if (
      seedString[1] == 2
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Turu");
    } else if (
      seedString[1] == 3
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Nefesto");
    } else if (
      seedString[1] == 4
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Blackao");
    } else if (
      seedString[1] == 5
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Sr. Antonio");
    } else if (
      seedString[1] == 6
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Pedro");
    } else if (
      seedString[1] == 7
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Curtas");
    } else if (
      seedString[1] == 8
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Twelve");
    } else if (
      seedString[1] == 9
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Junks");
    } else if (
      seedString[1] == 0
      // &&
      // seedString[2] == 0
    ) {
      return (integrante = "Murillo");
    }
    
    // else if
    //     (
    //     // seedString[0] == 1  &&
    //     seedString[1]
    //     )
    //     {return integrante = 'Curtas'
    // } else
    //     {return integrante = 'SEM NOME'}
  }