let DEBUG = true;
import { seedObj } from "./seedFabricator.js";
let seedString = seedObj._seedString;

let seed2 = seedString[2];
let seed3 = seedString[3];


export let cartaNaoEspecial;

export let raridades = {
  semRaridade: {
    nome: "semRaridade",
    rng: () => seedString[14] != 0,
  },

  rainha: {
    nome: "rainha",
    rng: () =>
      seedString[8] == 0 &&
      seedString[9] == 0 &&
      seedString[10] == 0 &&
      seedString[11] == 0 
      
  },

  sangueAzul: {
    nome: "sangue azul",
    rng: () => seedString[9] == 1 &&
    seedString[10] == 1
  },

  cavaleiro: {
    nome: "cavaleiro",
    rng: () => seedString[9] == 2,
    
  },

  campones: {
    nome: "campones",
    rng: () => seedString[11] > 4,
    
  },
};

// export let especiais = ['tenica', 'speaker', 'maisCartas', 'abelha']

export let especiais = {
  notSpecial: {
    cartaId: 'notSpecial',
    nome: "",
    raridade: "false",
    pontoEspecial: 0,
    energia: 0,
    poder: false,
    efeito: "",
    familia: "",
    descricao: "",
    emoji: "",
    retrato: "",
  },

  tenica: {
    cartaId: "especial-tenica",
    nome: "TÉNICA",
    raridade: raridades.rainha,
    pontoEspecial: "",
    energia: 0,
    poder: true,
    efeito: "",
    familia: "",
    descricao: "Prazer, <br> sou a Ténica",
    emoji: "👑",
    emojiEsp: "",
    retrato: "url('pics/tenica.webp')",
    
      
  },
    speaker: {
      cartaId: "carta-speaker",
      nome: "SPEAKER",
      raridade: raridades.cavaleiro,
      pontoEspecial: "",
      energia: 0,
      poder: true,
      efeito: "",
      familia: "",
      descricao: "MONARK BAN!",
      emoji: "&#9889;",
      emojiEsp: "",
      retrato: "url('pics/SPEAKER.webp')",
      
    },
      maisCartas: {
        cartaId: "especial-click",
        nome: "+ CARTAS +",
        raridade: raridades.campones,
        pontoEspecial: 0,
        energia: 0,
        poder: true,
        efeito: "",
        familia: "",
        descricao: "BONUS?",
        emojiEsp: "",
        emoji: "🃏",
        retrato: "url('pics/clickretrato.webp')",
      },

      menosCartas: {
        cartaId: "-click",
        nome: "- CARTAS -",
        raridade: raridades.campones,
        pontoEspecial: 0,
        energia: 0,
        poder: true,
        efeito: "",
        familia: "",
        descricao: "BONUS?",
        emojiEsp: "",
        emoji: "🃏",
        retrato: "url('pics/clickretrato.webp')",
      },

      abelha: {
        cartaId: "abelha",
        nome: "ABELHA",
        raridade: raridades.campones,
        pontoEspecial: "",
        energia: 0,
        poder: false,
        efeito: "",
        familia: "minecraft",
        descricao: "VOU MORRER!!!",
        emoji: "🐝",
        emojiEsp: "",
        retrato: "url('pics/retratoAbelha.webp')",
        retrato2: "url('pics/retratoAbelha.webp')",
      },
      blackaoCamarada: {
        cartaId: "comunista",
        nome: "BLACKAO COMUNISTA",
        raridade: raridades.sangueAzul,
        pontoEspecial: "",
        energia: 0,
        poder: true,
        efeito: "",
        familia: "",
        descricao: '',
        emoji: "☭",
        emojiEsp: "",
        retrato: "",
        retrato2: "",
      },
      premioMonark: {
        cartaId: "premiomonark",
        nome: "PREMIO MONARK",
        raridade: raridades.sangueAzul,
        pontoEspecial: "",
        energia: 0,
        poder: true,
        efeito: "",
        familia: "",
        descricao: "",
        emoji: "",
        emojiEsp: "",
        retrato: "",
        retrato2: "",
      },
      spy: {
        cartaId: "spy",
        nome: "SPY",
        raridade: raridades.cavaleiro,
        pontoEspecial: "",
        energia: 0,
        poder: true,
        efeito: "",
        familia: "",
        descricao: "",
        emoji: "",
        emojiEsp: "",
        retrato: "",
        retrato2: "",
      },
      estoicoTuru: {
        cartaId: "estoico",
        nome: "ESTOICO <br> TURU",
        raridade: raridades.campones,
        pontoEspecial: 0,
        energia: 0,
        poder: true,
        efeito: "",
        familia: "",
        descricao: "",
        emojiEsp: "",
        emoji: "🛡️",
        retrato: "url('pics/estoicoRetrato.jpg')",
      },
    }

console.log('ESPECAIISMAISCARTAS', especiais.menosCartas);
console.log('RARIDADES', raridades.campones);

export let especial = "";
let raridade = "";

export function escolherEspecial() {
  // if (!teste) {
  //   seedString = seedObj._seedString;
  // } else {
  //   seedString = teste;
  // }

  seedString = seedObj._seedString

 console.log('**SEEDSTRING NO MODULO**',seedString);

  seed2 = seedString[2];
  seed3 = seedString[3];

  


  // DEBUG && console.log("seedString no especial", seedString);
  // DEBUG && console.log("seedString no especial", seedString[14]);
  // DEBUG && console.log("seed3: ", seed3);

  if (!raridades.semRaridade.rng()) {
    //RAINHA
    if (raridades.rainha.rng()) {
      raridade = raridades.rainha;
      if (true) {
        tenicaEnergia();
        especial = especiais.tenica;
      }


      //SANGUE AZUL
    } else if (raridades.sangueAzul.rng()) {
      raridade = raridades.sangueAzul;
      
      if (seedString[12]> 4) {
        especial = especiais.premioMonark
      } else {
        especial = especiais.blackaoCamarada

      }

      // CAVALEIROS
    } else if (raridades.cavaleiro.rng()) {
      raridade = raridades.cavaleiro;
      DEBUG && console.log(raridades.cavaleiro.rng());
      if (seedString[12]> 2) {
        especial = especiais.speaker;
      } else {
        especial = especiais.spy;
      }



    } else {
      raridade = raridades.campones;

      //CAMPONESES
      if (seedString[12] < 4) {
        especial = especiais.menosCartas;
      } else if (seedString[12] > 5){
        especial = especiais.maisCartas;
      } else if (seedString[12] == 4){
        especial = especiais.abelha;
      } else {
        especial = especiais.estoicoTuru;
      }
    }
  } else {
    raridade = raridades.semRaridade;
    especial = especiais.notSpecial;
  }

  // DEBUG && console.log("TAMANHO SEED", seedObj._seedLength);
  DEBUG && console.log("raridade modulo", raridade);
  DEBUG && console.log("especial modulo", especial);
}

function constrEspecial() {}

// ENERGIAS

export function tenicaEnergia() {
  return (especiais.tenica.energia = parseInt(seed2) + parseInt(seed3) + 375);
}

export function pontoSpeaker() {
  if (parseInt(seed2) <= 3) {
    return (especiais.speaker.energia = 1);
  }
  if (parseInt(seed2) > 3 && parseInt(seed2) <= 6) {
    return (especiais.speaker.energia = 2);
  }
  if (parseInt(seed2) > 6 && parseInt(seed2) < 9) {
    return (especiais.speaker.energia = 3);
  }
  if (parseInt(seed2) == 9) {
    return (especiais.speaker.energia = 5);
  }
}

export function abelhaEnergia() {
  // de 183 a 235
  if (parseInt(seed2) < 5) {
    return (especiais.abelha.energia = parseInt(seed3) + 1 * 8 + 175);
  } else {
    return (especiais.abelha.energia = parseInt(seed3) + 1 * 10 + 145);
  }
}

// PONTOS ESPECIAIS

export function bonusCartasPE() {
  if (parseInt(seed2) == 0) {
    return parseInt(seed3) + 90
  }
  if (parseInt(seed2) == 1) {
    return parseInt(seed3) + 77
  }
  if (parseInt(seed2) > 1 && parseInt(seed2) <= 3) {
    return parseInt(seed3) + 52;
  }
  if (parseInt(seed2) >= 4 && parseInt(seed2) <= 6) {
    return parseInt(seed3) + 35;
  }
  if (parseInt(seed2) == 7) {
    return parseInt(seed3) + 23;
  }
  if (parseInt(seed2) == 8) {
    return parseInt(seed3) + 15;
  }
  if (parseInt(seed2) == 9) {
    return parseInt(seed3) + 4;
  }
}


export function abelhaDecrease() {
  return Math.floor(Math.random() * 20 + 5);
}

export function abelhaLowHp() {
  return Math.floor(Math.random() * 3 + 3);
}

export function abelhaDecreaseComTuru() {
  return Math.floor(Math.random() * 50 + 25);
}

let frasesAbelhaTuru = [
  "afff morri",
  " bane esse bosta",
  "pq tanto odio :(",
  "morri kk",
  "rip",
  "o fala bosta",
  "me matou de novo",
  "viva a 1.15",
  "removed herobrine",
];

export function frasesAbelha() {
  return frasesAbelhaTuru[Math.floor(Math.random() * 9 + 0)];
}

let frasesComunista = [
  "PAZ, PAO E TERRA",
  "HASTA LA REVOLUCION!",
  "UNI-VOS!",
  "PAZ ENTRE NOS, GUERRA AOS SENHORES",
  "ТОВАРИЩ!",
  "FORMADEORGANIZA",
  "ABAIXO À BURGUESIA!",
  "DEFINA COMUNISO, CAMARADA!",
  "TENHO NOJO DE BURGUES",
];

let valoresComunista = [333, 333, 333, 333, 666, 666, 999];
export function comunistaPE() {
  return valoresComunista[Math.floor(Math.random() * 7 + 0)];
}
export function frasesComuna() {
  return frasesComunista[Math.floor(Math.random() * frasesComunista.length)];
}
function premioMonark() {}
export let efeitoPremioMonark = {
  status: true,
  css: { nome: "premioMonark", imagem: "url('/pics/retratoPremioMonark.gif')" },
  rodadas: 0,
  efeito: premioMonark(),
};

// export function pontoSpeaker() {
//   return Math.floor(Math.random() * 4 + 1);
// }
