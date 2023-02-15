let DEBUG = false;
import { seedRNG } from "./seedFabricator.js";
// import { stringSeed } from "../slotEspecial.js";
let seedString = seedRNG();

function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
      // seedString[8] == 0 &&
      // seedString[9] == 0 &&
      // seedString[10] == 0 &&
      seedString[8] == 3 && seedString[14] == 0,
  },

  sangueAzul: {
    nome: "sangueAzul",
    rng: () => seedString[8] == 2 && seedString[14] == 0,
  },

  cavaleiro: {
    nome: "cavaleiro",
    rng: () => seedString[8] == 1 && seedString[14] == 0,
  },

  campones: {
    nome: "campones",
    rng: () => seedString[8] == 0 && seedString[14] == 0,
  },
};

// export let especiais = ['tenica', 'speaker', 'maisCartas', 'abelha']

let valoresComunista = [111, 333, 666];
export function comunistaPE() {
  if (seed2 < 7) {
    return valoresComunista[0] + "☭";
  } else if (seed2 < 9) {
    return valoresComunista[1] + "☭";
  } else {
    return valoresComunista[2] + "☭";
  }
}

export let especiais = {
  notSpecial: {
    cartaId: "notSpecial",
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
    cargo: "",
    // ataqueE:tenicaEnergia() + "👑"
    ataqueE: 1,
    novoAtaqueE: "0",
    dmgboss: "false",

    nomeStyle: {
      fontSize: "",
      fontFamily: "Cormorant Upright",
      color: "",
    },

    retratoStyle: {
      border: "2px double gold",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "black",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
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
    cargo: "MONARK BAN!",
    ataqueE: 1,
    novoAtaque: "4💚",
    dmgboss: "true",

    // ataqueE: pontoSpeaker() + "⚡"

    nomeStyle: {
      fontSize: "",
      fontFamily: "",
      color: "",
    },

    retratoStyle: {
      border: "2px dotted #18d742",
      backgroundColor: "",
    },

    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
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
    cargo: "",
    ataqueE: 1,
    novoAtaque: "",
    dmgboss: "false",

    // ataqueE: bonusCartasPE()
    nomeStyle: {
      fontSize: "",
      fontFamily: "",
      color: "",
    },

    retratoStyle: {
      border: "",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
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
    cargo: "",
    ataqueE: 1,
    novoAtaque: "",
    dmgboss: "false",

    // ataqueE: bonusCartasPE()
    nomeStyle: {
      fontSize: "",
      fontFamily: "",
      color: "",
    },

    retratoStyle: {
      border: "",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
  },

  abelha: {
    cartaId: "abelha",
    nome: "ABELHA",
    raridade: raridades.sangueAzul,
    pontoEspecial: "",
    energia: 0,
    poder: false,
    efeito: "",
    familia: "minecraft",
    descricao: "VOU MORRER!!!",
    emoji: "🐝",
    emojiEsp: "",
    retrato: "url('pics/retratoAbelha.gif')",
    retrato2: "url('pics/retratoAbelha.webp')",
    cargo: "bzzzz....",
    ataqueE: 1,
    novoAtaque: "",
    dmgboss: "false",

    nomeStyle: {
      fontSize: "180%",
      fontFamily: "minecraft",
      color: "#AAAAAA",
    },

    retratoStyle: {
      border: "2px solid #545251",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "170%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },

    // ataqueE: abelhaEnergia() + "🐝"
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
    descricao: "",
    emoji: "☭",
    emojiEsp: "",
    retrato: "url('pics/retratoCamarada.gif')",
    retrato2: "",
    cargo: "",
    ataqueE: "",
    novoAtaqueE: "",
    dmgboss: "false",

    // ataqueE: comunistaPE() + "☭"
    nomeStyle: {
      fontSize: "140%",
      fontFamily: "blackao",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #ff0000",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
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
    retrato: 'url("/pics/retratoPremioMonark.gif")',
    retrato2: "",
    cargo: "",
    ataqueE: 1,
    novoAtaque: "",
    dmgboss: "false",

    nomeStyle: {
      fontSize: "",
      fontFamily: "premiomonark",
      color: "",
      efeito: "float",
    },

    retratoStyle: {
      border: "4px solid black",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
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
    retrato: 'url("/pics/spyRetrato.webp")',
    retrato2: "",
    cargo: "",
    ataqueE: "1⚡",
    novoAtaqueE: "⌚",
    dmgboss: "true",

    nomeStyle: {
      fontSize: "210%",
      fontFamily: "tf2",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #cf6a32",
      backgroundColor: "unset",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "140%",
      fontFamily: "tf2",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
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
    cargo: "",
    dmgboss: "false",

    // ataqueE: estoicoPE()
    ataqueE: "🛡️",

    novoAtaqueE: "4💚",
    nomeStyle: {
      fontSize: "250%",
      fontFamily: "estoico",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #cde2e0",
      backgroundColor: "unset",
    },

    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "150%",
      fontFamily: "estoico",
      visibility: "visible",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "150%",
      fontFamily: "estoico",
      visibility: "visible",
    },
  },

  lucio: {
    cartaId: "lucio",
    nome: "LÚCIO",
    raridade: raridades.sangueAzul,
    pontoEspecial: 0,
    energia: 0,
    poder: true,
    efeito: "",
    familia: "overwatch",
    descricao: "",
    emojiEsp: "",
    emoji: "💚",
    cargo: "100%",
    retrato: "url('pics/retratoLucio.jpg')",
    dmgboss: "true",

    // ataqueE: lucioPE()
    ataqueE: "1⚡",
    novoAtaqueE: "1",

    nomeStyle: {
      fontSize: "250%",
      fontFamily: "overwatch",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #15b871",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "overwatch",
      fontSize: "250%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "100%",
      fontFamily: "overwatch",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "overwatch",
      visibility: "visible",
    },
  },

  jhin: {
    cartaId: "jhin",
    nome: "JHIN",
    raridade: raridades.cavaleiro,
    pontoEspecial: 0,
    energia: 4,
    poder: true,
    efeito: "",
    familia: "League Of Legends",
    descricao: "",
    emojiEsp: "",
    emoji: "",
    cargo: "4",
    retrato: "url('pics/retratoJhin.jpg')",
    dmgboss: "true",

    // ataqueE: lucioPE()
    ataqueE: "4⚡",
    novoAtaqueE: "10💚",

    nomeStyle: {
      fontSize: "250%",
      fontFamily: "lol",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #FFBC42",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "lol",
      fontSize: "250%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "100%",
      fontFamily: "lol",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "lol",
      visibility: "",
    },
  },

  dva: {
    cartaId: "dva",
    nome: "D.Va",
    raridade: raridades.sangueAzul,
    pontoEspecial: 0,
    energia: 0,
    poder: true,
    efeito: "",
    familia: "overwatch",
    descricao: "",
    emojiEsp: "",
    emoji: "",
    cargo: "0%",
    retrato: "url('pics/dvaMecaRetrato.jpg')",
    dmgboss: "true",

    // ataqueE: lucioPE()
    ataqueE: "1⚡",
    novoAtaqueE: "50💚",

    nomeStyle: {
      fontSize: "250%",
      fontFamily: "overwatch",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #ee4bb5",
      backgroundColor: "",
      backgroundSize: "cover",
    },
    cargoStyle: {
      fontFamily: "overwatch",
      fontSize: "250%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "130%",
      fontFamily: "overwatch",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "overwatch",
      visibility: "visible",
    },
  },

  tank: {
    cartaId: "tank",
    nome: "TANK",
    raridade: raridades.campones,
    pontoEspecial: "",
    energia: 0,
    poder: false,
    efeito: "",
    familia: "tf2",
    descricao: "",
    emoji: "💰",
    emojiEsp: "",
    retrato: 'url("/pics/tankRetrato.jpg")',
    retrato2: "",
    cargo: "",
    ataqueE: "1⚡",
    novoAtaqueE: "10000💚",
    dmgboss: "true",

    nomeStyle: {
      fontSize: "210%",
      fontFamily: "tf2",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #cf6a32",
      backgroundColor: "unset",
    },
    cargoStyle: {
      fontFamily: "tf2",
      fontSize: "200%",
      visibility: "hidden",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "tf2",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "tf2",
      visibility: "visible",
    },
  },


  creeper: {
    cartaId: "creeper",
    nome: "CREEPER",
    raridade: raridades.campones,
    pontoEspecial: "",
    energia: 0,
    poder: false,
    efeito: "",
    familia: "minecraft",
    descricao: "",
    emoji: "",
    emojiEsp: "",
    retrato: "url('pics/retratoCreeper.png')",
    retrato2: "",
    cargo: "",
    ataqueE: '',
    novoAtaque: "",
    dmgboss: "false",
    canbedeleted: 'false',

    nomeStyle: {
      fontSize: "180%",
      fontFamily: "minecraft",
      color: "#555555",
    },

    retratoStyle: {
      border: "2px solid #164d0d",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "170%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },

    // ataqueE: abelhaEnergia() + "🐝"
  },




};

DEBUG && console.log("ESPECAIISMAISCARTAS", especiais.menosCartas);
DEBUG && console.log("RARIDADES", raridades.campones);

export let especial = "";
let raridade = "";

export function escolherEspecial(teste) {
  seedString = teste;
  console.log("seedString: ", seedString);

  // seedString = seedObj._seedString

  DEBUG && console.log("**SEEDSTRING NO MODULO**", seedString);

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
        especial = especiais.tenica;
        especial.ataqueE = tenicaEnergia();
      }

      //SANGUE AZUL
    } else if (raridades.sangueAzul.rng()) {
      raridade = raridades.sangueAzul;


      let num

       num = gerarNumero(1, 5);

      if (false) {
        especial = especiais.lucio;
        especial.novoAtaqueE = 200 + "💚";

      } else if (num == 1 ) {
        especial = especiais.lucio;
        especial.novoAtaqueE = lucioPE();
        especial.cargo = preBuiltUltimate() + '%'
        console.log("LUCIOOOOOOO");

      } else if (num == 2 ) {
        especial = especiais.premioMonark;
        console.log("PREMIOMONARK");

      } else if (num == 3 ) {
        especial = especiais.blackaoCamarada;
        especial.novoAtaqueE = comunistaPE();
        console.log("CAMARADA");

      } else if (num == 4 ) {
        especial = especiais.abelha;
        especial.ataqueE = abelhaEnergia() + "🐝";

      } else if (num == 5 ) {
        especial = especiais.dva;
        especial.cargo = preBuiltUltimate() + '%'
        
      }






    } else if (raridades.cavaleiro.rng()) {
      raridade = raridades.cavaleiro;
      DEBUG && console.log(raridades.cavaleiro.rng());

      let num

       num = gerarNumero(1, 3);


      if (false) {
        especial = especiais.spy;
      } else if (num == 1) {
        especial = especiais.speaker;
        especial.ataqueE = pontoSpeaker();
      } else if (num == 2) {
        especial = especiais.jhin;
      } else if (num == 3) {
        especial = especiais.spy;
      }
    } else {
      raridade = raridades.campones;


      let num

       num = gerarNumero(1, 4);

      //CAMPONESES

      if (true) {
        especial = especiais.creeper

      } else if (false) {
        especial = especiais.menosCartas;
        especial.ataqueE = bonusCartasPE() + "🃏";

      } else if (num == 1) {
        especial = especiais.maisCartas;
        especial.ataqueE = bonusCartasPE() + "🃏";
      } else if (num == 2) {
        especial = especiais.tank;
        especial.cargo = tankCargo(especiais.tank.emoji);
      } else if (num == 3){
        especial = especiais.estoicoTuru;
      } else if (num == 4){
        especial = especiais.creeper
        
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
  return gerarNumero(55, 90) + "👑";
}

export function pontoSpeaker() {
  if (parseInt(seed2) <= 3) {
    return (especiais.speaker.energia = 1 + "⚡");
  }
  if (parseInt(seed2) > 3 && parseInt(seed2) <= 6) {
    return (especiais.speaker.energia = 2) + "⚡";
  }
  if (parseInt(seed2) > 6 && parseInt(seed2) < 9) {
    return (especiais.speaker.energia = 3 + "⚡");
  }
  if (parseInt(seed2) == 9) {
    return (especiais.speaker.energia = 5 + "⚡");
  }
}

export function abelhaEnergia() {
  // de 183 a 235
  return gerarNumero(100, 280);
}

// PONTOS ESPECIAIS

export function bonusCartasPE() {
  if (parseInt(seed2) == 0) {
    return parseInt(seed3) + 15;
  }
  if (parseInt(seed2) == 1) {
    return parseInt(seed3) + 12;
  }
  if (parseInt(seed2) > 1 && parseInt(seed2) <= 3) {
    return parseInt(seed3) + 10;
  }
  if (parseInt(seed2) >= 4 && parseInt(seed2) <= 6) {
    return parseInt(seed3) + 9;
  }
  if (parseInt(seed2) == 7) {
    return parseInt(seed3) + 8;
  }
  if (parseInt(seed2) == 8) {
    return parseInt(seed3) + 7;
  }
  if (parseInt(seed2) == 9) {
    return parseInt(seed3) + 6;
  }
}

export function abelhaHardDecrease() {
  return gerarNumero(4, 5);
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


function preBuiltUltimate(){
  return gerarNumero(0,35)
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

export let efeitoEstoico = {
  status: true,
  css: { nome: "estoico", imagem: "url('/pics/estoicoRetrato.jpg')" },
  rodadas: 0,
  efeito: estoico(),
};

export let lucioEfeito = {
  status: true,
  css: { nome: "lucio", imagem: "url('/pics/retratoLucio.jpg')" },
  rodadas: 0,
  efeito: lucio(),
};

function estoico() {}
function lucio() {}

export function estoicoPE() {
 
  return gerarNumero(5,15) + "🛡️"


}

export function lucioPE() {
 return gerarNumero(20,35) + '💚'
}

function tankCargo(emoji) {
  
  
  return gerarNumero(200, 350)+ emoji;
}

// export function pontoSpeaker() {
//   return Math.floor(Math.random() * 4 + 1);
// }
