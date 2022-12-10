import { seedObj } from "../script.js";
let seedString

let raridades = ['rainha', 'sangue azul','cavaleiro','campones'] 
export let especiais = ['tenica', 'speaker', 'bonusCartasMais', 'abelha']
export let cartaNaoEspecial = ''

let cartasRainha = [especiais[0]]
let cartasSangueAzul = [especiais[3]]
let cartasCavaleiro = [especiais[1]]
let cartasCampones = [especiais[2]]

// //RNG RARIDADES
// let RNGRainha = seedString[8] == 3 && seedString[9] == 3 && seedString[10] == 3 && seedString[11] >= 3 
// let RNGSangueAzul = seedString[8] == 3 && seedString[9] == 3 && seedString[10] == 3 
// let RNGCavaleiro = seedString[8] == 3 && seedString[9] == 3  

//RNG ESPECIAIS
let RNG 

let raridade 
export let especial = "";



export function escolherEspecial() {
  seedString = seedObj._seedString;
  //RNG RARIDADES
  let RNGRainha = seedString[8] == 3 && seedString[9] == 3 && seedString[10] == 3 && seedString[11] >= 3 
  let RNGSangueAzul = seedString[8] == 3 && seedString[9] == 3 && seedString[10] == 3 
  let RNGCavaleiro = seedString[8] == 3 && seedString[9] == 3  

    
  if(RNGRainha){
    raridade = raridades[0]
  } else if (RNGSangueAzul){
    raridade = raridades[1]
  } else if (RNGCavaleiro){
    raridade = raridades[2]
  } else {
    raridade = raridades[3]
  }
  console.log(raridade,'raridade modulo')

  // RAINHA
  if(raridade == raridades[0]){
    //tenica
    especial = cartasRainha[0]


//SANGUE AZUL
  } else if (raridade == raridades[1]){
    //abelha
    especial = cartasSangueAzul[0]

  //CAVALEIRO
  } else if(raridade == raridades[2]){
    //speaker 
    especial = cartasCavaleiro[0]

  } else if(raridade == raridades[3]){
    //speaker 
    especial = cartasCampones[0]
  console.log(especial,'especial modulo')
  }
  }

