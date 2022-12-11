import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;
export let cartaNaoEspecial;

export let raridades = {
  semRaridade: {
    nome: "",
    rng: ()=> seedString[0] != 1
  },

  rainha: {
    nome: "rainha",
    rng: ()=>seedString[8] == 3 &&
    seedString[9] == 3 &&
    seedString[10] == 3 &&
    seedString[11] >= 3 &&
    seedString[0] == 1
  },

  sangueAzul: {
    nome: "sangue azul",
    rng:()=> seedString[8] == 3 &&
    seedString[9] == 3 &&
    seedString[10] == 3 &&
    seedString[0] == 1
  },

  cavaleiro: {
    nome: "cavaleiro",
    rng: ()=>seedString[8] == 3 && seedString[9] == 3 && seedString[0] == 1
  },

  campones: {
    nome: "campones",
    rng: ()=>seedString[0] == 1
  },
};
// export let especiais = ['tenica', 'speaker', 'bonusCartasMais', 'abelha']

export let especiais = {
  notSpecial: {
    nome: "",
    raridade: "",
    pontoEspecial: 0,
    energia: 0,
    poder: "",
    efeito: "",
    familia: "",
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
let raridade

export function escolherEspecial() {
  seedString = seedObj._seedString;
  // console.log("seedString no especial", seedString);
  // console.log("seedString no especial", seedString[0]);
  

  //RNG RARIDADES
  

  if (raridades.rainha.rng()) {
    raridade = raridades.rainha;
  } else if (raridades.sangueAzul.rng()) {
    raridade = raridades.sangueAzul;
  } else if (raridades.cavaleiro.rng()) {
    raridade = raridades.cavaleiro;
  } else if (raridades.campones.rng()) {
    raridade = raridades.campones;
  } else if (raridades.semRaridade.rng()){
    raridade = raridades.semRaridade;
  }
  // console.log('raridade modulo',raridade)

  // RAINHA ---------------------
  if (raridade == raridades.rainha) {
    //tenica
    especial = especiais.tenica;


    //SANGUE AZUL ---------------
  } else if (raridade == raridades.sangueAzul) {
    //abelha
    especial = especiais.abelha;

    //CAVALEIRO -----------------
  } else if (raridade == raridades.cavaleiro) {
    //speaker
    especial = especiais.speaker;


    //CAMPONES ---------------------
  } else if (raridade == raridades.campones) {
    //speaker
    especial = especiais.bonusCartasMais;

  } else {
    especial = especiais.notSpecial;
  }

  // console.log('especial modulo',especial)
}
