import { seedObj } from "../script.js";
let seedString
export let cartaNaoEspecial

export let raridades = {

  semRaridade: {
    nome: ''
  },

  rainha: {
    nome: 'rainha'
  },

  sangueAzul: {
    nome: 'sangue azul'
  },

  cavaleiro: {
    nome: 'cavaleiro'
  },

  campones: {
    nome: 'campones'
  },
} 
// export let especiais = ['tenica', 'speaker', 'bonusCartasMais', 'abelha']

export let especiais = {

  notSpecial: {
    nome: '',
    raridade: '',
    pontoEspecial: 0,
    energia: 0,
    poder: '',
    efeito: '',
    familia: ''
  },
  
    tenica: {
    nome: 'tenica',
    raridade: raridades.rainha,
    pontoEspecial: 0,
    energia: 0,
    poder: '',
    efeito: '',
    familia: ''
  },

  speaker: {
    nome: 'speaker',
    raridade: raridades.cavaleiro,
    pontoEspecial: 0,
    energia: 0,
    poder: '',
    efeito: '',
    familia: ''
  },


  bonusCartasMais: {
    nome: 'bonusCartasMais',
    raridade: raridades.campones,
    pontoEspecial: 0,
    energia: 0,
    poder: '',
    efeito: '',
    familia: ''
  },

  abelha: {
    nome:  'abelha',
    raridade: raridades.sangueAzul,
    pontoEspecial: 0,
    energia: 0,
    poder: '',
    efeito: '',
    familia: ''
  }

}


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
  let RNGRainha = seedString[8] == 3 && seedString[9] == 3 && seedString[10] == 3 && seedString[11] >= 3  && seedString[0] == 1
  let RNGSangueAzul = seedString[8] == 3 && seedString[9] == 3 && seedString[10] == 3 && seedString[0] == 1
  let RNGCavaleiro = seedString[8] == 3 && seedString[9] == 3  && seedString[0] == 1
  let RNGCampones =  seedString[0] == 1
  cartaNaoEspecial = seedString[0] == 0

    
  if(RNGRainha){
    raridade = raridades.rainha
  } else if (RNGSangueAzul){
    raridade = raridades.sangueAzul
  } else if (RNGCavaleiro){
    raridade = raridades.cavaleiro
  } else if (RNGCampones){
    raridade = raridades.campones
  } else {
    raridade = raridades.semRaridade
  }
  // console.log(raridade,'raridade modulo')



  // RAINHA
  if(raridade == raridades.rainha){
    //tenica
    especial = especiais.tenica


//SANGUE AZUL
  } else if (raridade == raridades.sangueAzul){
    //abelha
    especial = especiais.abelha

  //CAVALEIRO
  } else if(raridade == raridades.cavaleiro){
    //speaker 
    especial = especiais.speaker

  } else if(raridade == raridades.campones){
    //speaker 
    especial = especiais.bonusCartasMais
  
  } else {
    especial = especiais.notSpecial
  }

  console.log(especial,'especial modulo')
  }

