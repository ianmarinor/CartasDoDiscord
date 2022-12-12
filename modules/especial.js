let DEBUG = false;
import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
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
      seedString[9] == 0 &&
      seedString[10] == 1 
      && seedString[11] == 0
      
  },

  sangueAzul: {
    nome: "sangue azul",
    rng: () =>
      seedString[8] == 0 &&
      seedString[9] == 1 &&
      seedString[10] == 0 
      
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
    poder: "",
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

  DEBUG && console.log("seedString no especial", seedString);
  DEBUG && console.log("seedString no especial", seedString[14]);

  if (!raridades.semRaridade.rng()) {

    if (raridades.rainha.rng()) {
    raridade = raridades.rainha;

    if (true) {
      especial = especiais.tenica;
    }


  } else if (raridades.sangueAzul.rng()) {
    raridade = raridades.sangueAzul;

    if (true) {
      especial = especiais.abelha;
    }
  } else if (raridades.cavaleiro.rng()) {
    raridade = raridades.cavaleiro;
    DEBUG && console.log(raridades.cavaleiro.rng());

    if (true) {
      especial = especiais.speaker;
    }
  } else {
    raridade = raridades.campones;

    if (true) {
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
