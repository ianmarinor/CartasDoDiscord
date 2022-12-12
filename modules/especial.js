let DEBUG = true;
import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;


let seed2 = seedString[2]
let seed3 = seedString[3]



export let cartaNaoEspecial;

export let raridades = {
  semRaridade: {
    nome: "semRaridade",
    rng: () => seedString[14] != 0
  },

  rainha: {
    nome: "rainha",
    rng: () =>
      seedString[8] == 1 &&
      seedString[9] == 6 &&
      seedString[10] == 1 
      && seedString[11] == 0
      
  },

  sangueAzul: {
    nome: "sangue azul",
    rng: () =>
      
      seedString[9] == 1 
      // seedString[10] == 0 
      
  },

  cavaleiro: {
    nome: "cavaleiro",
    rng: () => seedString[9] >= 7
    // rng: ()=>seedString[14] == 1
  },

  campones: {
    nome: "campones",
    rng: () => seedString[11] > 2 
    // && seedString[8] >=3
    // rng: ()=>seedString[8] == 3 && seedString[9] == 3 && seedString[14] == 1
  },
};

// export let especiais = ['tenica', 'speaker', 'bonusCartasMais', 'abelha']

export let especiais = {
  notSpecial: {
    nome: "",
    raridade: false,
    pontoEspecial: 0,
    energia: 0,
    poder: false,
    efeito: false,
    familia: false,
  },

  tenica: {
    nome: "tenica",
    raridade: raridades.rainha,
    pontoEspecial: 0,
    energia: 0,
    poder: 0,
    efeito: "",
    familia: "",
  },

  speaker: {
    nome: "speaker",
    raridade: raridades.cavaleiro,
    pontoEspecial: 0,
    energia: 0,
    poder: "",
    efeito: "",
    familia: "",
  },

  bonusCartasMais: {
    nome: "bonusCartasMais",
    raridade: raridades.campones,
    pontoEspecial: 0,
    energia: 0,
    poder: "",
    efeito: "",
    familia: "",
  },

  abelha: {
    nome: "abelha",
    raridade: raridades.sangueAzul,
    pontoEspecial: 0,
    energia: 0,
    poder: "",
    efeito: "",
    familia: "",
  },
};

export let especial = "";
let raridade = "";

export function escolherEspecial(teste) {
  if (!teste) {
    seedString = seedObj._seedString;
  } else {
    seedString = teste;
  }
  seed2 = seedString[2]
  seed3 = seedString[3] 

  DEBUG && console.log("seedString no especial", seedString);
  DEBUG && console.log("seedString no especial", seedString[14]);
  DEBUG && console.log('seed3: ', seed3);

  if (!raridades.semRaridade.rng()) {

    if (raridades.rainha.rng()) {
    raridade = raridades.rainha;

    if (true) {
      tenicaEnergia()
      especial = especiais.tenica;
    }


  } else if (raridades.sangueAzul.rng()) {
    raridade = raridades.sangueAzul;

    if (true) {
      abelhaPE()
      especial = especiais.abelha;
    }
  } else if (raridades.cavaleiro.rng()) {
    raridade = raridades.cavaleiro;
    DEBUG && console.log(raridades.cavaleiro.rng());

    if (true) {
      speakerEnergia()
      especial = especiais.speaker;
    }
  } else {
    raridade = raridades.campones;

    if (true) {
      bonusCartasPE()
      especial = especiais.bonusCartasMais;
      
    }
  } 
  
}else{
  raridade = raridades.semRaridade
  especial = especiais.notSpecial
}

  DEBUG && console.log("TAMANHO SEED", seedObj._seedLength);
  DEBUG && console.log("raridade modulo", raridade);
  DEBUG && console.log("especial modulo", especial);
}

// ENERGIAS
      
  function tenicaEnergia(){
    return especiais.tenica.energia =  parseInt(seed2) + parseInt(seed3) + 475
  }

  function speakerEnergia(){
    if (parseInt(seed2) <= 3){
      return especiais.speaker.energia = 1
    }
    if (parseInt(seed2) > 3 && parseInt(seed2) <= 6){
      return especiais.speaker.energia = 2
    }
    if (parseInt(seed2) > 6 && parseInt(seed2) <9){
      return especiais.speaker.energia = 3
    } 
    if (parseInt(seed2) == 9){
      return especiais.speaker.energia = 5
    }
  }

  function abelhaPE(){
    // de 183 a 235
    if(parseInt(seed2) < 5){
      return especiais.abelha.pontoEspecial =  parseInt(seed3) + 1 * 8 + 175
    } else {
      return especiais.abelha.pontoEspecial =  parseInt(seed3) + 1 * 10 + 145
    }
  }

// PONTOS ESPECIAIS

  function bonusCartasPE(){

    if (parseInt(seed2) == 0){
      return especiais.bonusCartasMais.pontoEspecial = parseInt(seed3) + 90
    } if (parseInt(seed2) == 1){
      return especiais.bonusCartasMais.pontoEspecial = parseInt(seed3) + 77
    } if (parseInt(seed2) >1 && parseInt(seed2) <= 3){
      return especiais.bonusCartasMais.pontoEspecial = parseInt(seed3) + 52
    } if (parseInt(seed2) >=4 && parseInt(seed2) <= 6){
      return especiais.bonusCartasMais.pontoEspecial = parseInt(seed3) + 35
    } if (parseInt(seed2) ==7){
      return especiais.bonusCartasMais.pontoEspecial = parseInt(seed3) + 23
    } if (parseInt(seed2) == 8){
      return especiais.bonusCartasMais.pontoEspecial = parseInt(seed3) + 15
    } if (parseInt(seed2) ==9){
      return especiais.bonusCartasMais.pontoEspecial = parseInt(seed3) + 4
    }


  }


