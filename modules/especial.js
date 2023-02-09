let DEBUG = false;
import { seedRNG } from "./seedFabricator.js";
// import { stringSeed } from "../slotEspecial.js";
let seedString = seedRNG()



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
      seedString[8] == 3  && seedString[14] == 0
      
  },

  sangueAzul: {
    nome: "sangue azul",
    rng: () => seedString[8] == 2
    && seedString[14] == 0
    
  },

  cavaleiro: {
    nome: "cavaleiro",
    rng: () => seedString[8] == 1 && seedString[14] == 0
    
  },

  campones: {
    nome: "campones",
    rng: () => seedString[8] == 0 && seedString[14] == 0
    
  },
};

// export let especiais = ['tenica', 'speaker', 'maisCartas', 'abelha']

let valoresComunista = [333, 666, 999];
export function comunistaPE() {
  if (seed2 <6){
    return valoresComunista[0] + "☭"
  } else if (seed2 < 9){
    return valoresComunista[1] + "☭"
  } else {
    return valoresComunista[2] + "☭"
  }
}

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
    cargo: "",
    // ataqueE:tenicaEnergia() + "👑"
    ataqueE: 1,
    novoAtaqueE: '0',

    nomeStyle:{
      fontSize: "",
      fontFamily: "Cormorant Upright",
      color: "",
     
    },

    retratoStyle:{
      border: "2px double gold",
      backgroundColor: ''
    },
    cargoStyle:{
      fontFamily: '',
      fontSize: ''
    },
    ataqueStyle:{
      color: 'black',
      fontSize: '',
      fontFamily:'',
      visibility: '',
    },
    novoAtaqueStyle:{
      color: '',
      fontSize: '',
      fontFamily:'',
      visibility: 'hidden',
    }


    
      
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
      novoAtaque: '',

      // ataqueE: pontoSpeaker() + "⚡"
      
      nomeStyle:{
        fontSize: "",
        fontFamily: "",
        color: "",
      },

      retratoStyle:{
        border: '2px dotted #18d742',
        backgroundColor: ''
      },
      
      cargoStyle:{
        fontFamily: '',
        fontSize: ''
      },
      ataqueStyle:{
        color: '',
        fontSize: '',
        fontFamily:'',
        visibility: '',
      },
      novoAtaqueStyle:{
        color: '',
        fontSize: '',
        fontFamily:'',
        visibility: 'hidden',
      }



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
        novoAtaque: '',

        // ataqueE: bonusCartasPE()
        nomeStyle:{
          fontSize: "",
          fontFamily: "",
          color: "",
        },

        retratoStyle:{
          border: '',
          backgroundColor: ''
        },cargoStyle:{
          fontFamily: '',
          fontSize: ''
        },
        ataqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: '',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'hidden',
        }
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
        novoAtaque: '',

        // ataqueE: bonusCartasPE()
        nomeStyle:{
          fontSize: "",
          fontFamily: "",
          color: "",
        },

        retratoStyle:{
          border: '',
          backgroundColor: ''
        },cargoStyle:{
          fontFamily: '',
          fontSize: ''
        },
        ataqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: '',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'hidden',
        }
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
        retrato: "url('pics/retratoAbelha.gif')",
        retrato2: "url('pics/retratoAbelha.webp')",
        cargo: "bzzzz....",
        ataqueE: 1,
        novoAtaque: '',

        nomeStyle:{
          fontSize: "180%",
          fontFamily: "minecraft",
          color: "#AAAAAA",
        },

        retratoStyle:{
          border: "2px solid #545251",
          backgroundColor: ''
        },cargoStyle:{
          fontFamily: '',
          fontSize: '170%'
        },
        ataqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: '',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'hidden',
        }

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
        descricao: '',
        emoji: "☭",
        emojiEsp: "",
        retrato: "url('pics/retratoCamarada.gif')",
        retrato2: "",
        cargo: "",
        ataqueE: '',
        novoAtaqueE: '',

        // ataqueE: comunistaPE() + "☭"
        nomeStyle:{
          fontSize: "140%",
          fontFamily: "blackao",
          color: "",
        },

        retratoStyle:{
          border: "2px solid #ff0000",
          backgroundColor: ''
        },cargoStyle:{
          fontFamily: '',
          fontSize: ''
        },
        ataqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'hidden',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'visible',
        }
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
        novoAtaque: '',


        nomeStyle:{
          fontSize: "",
          fontFamily: "premiomonark",
          color: "",
          efeito: 'float'
        },

        retratoStyle:{
          border: "4px solid black",
          backgroundColor: ''
        },cargoStyle:{
          fontFamily: '',
          fontSize: ''
        },
        ataqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'hidden',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'hidden',
        }

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
        novoAtaqueE: '⌚',



        nomeStyle:{
          fontSize: "210%",
          fontFamily: "tf2",
          color: "",
        },

        retratoStyle:{
          border: "2px solid #cf6a32",
          backgroundColor: "unset"
        },cargoStyle:{
          fontFamily: '',
          fontSize: ''
        },
        ataqueStyle:{
          color: '',
          fontSize: '140%',
          fontFamily:'tf2',
          visibility: '',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'visible',
        }
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

        // ataqueE: estoicoPE()
        ataqueE: '',
        
        novoAtaqueE: '',
        nomeStyle:{
          fontSize: "250%",
          fontFamily: "estoico",
          color: "",
        },

        retratoStyle:{
          border: "2px solid #cde2e0",
          backgroundColor: "unset"
        },

        cargoStyle:{
          fontFamily: '',
          fontSize: ''
        },
        ataqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'',
          visibility: 'hidden',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '150%',
          fontFamily:'estoico',
          visibility: 'visible',
        }
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
        cargo: '0%',
        retrato: "url('pics/retratoLucio.jpg')",

        // ataqueE: lucioPE()
        ataqueE: "1⚡",
        novoAtaqueE: '1',

        nomeStyle:{
          fontSize: "250%",
          fontFamily: "overwatch",
          color: "",
        },

        retratoStyle:{
          border: "2px solid #15b871",
          backgroundColor: ''
        }
        ,

        cargoStyle:{
          fontFamily: 'overwatch',
          fontSize: '250%'
        },
        ataqueStyle:{
          color: '',
          fontSize: '100%',
          fontFamily:'overwatch',
          visibility: '',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '120%',
          fontFamily:'overwatch',
          visibility: 'visible',
        }
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
        cargo: '4',
        retrato: "url('pics/retratoJhin.jpg')",

        // ataqueE: lucioPE()
        ataqueE: "4⚡",
        novoAtaqueE: '4💚',

        nomeStyle:{
          fontSize: "250%",
          fontFamily: "lol",
          color: "",
        },

        retratoStyle:{
          border: "2px solid #FFBC42",
          backgroundColor: ''
        }
        ,

        cargoStyle:{
          fontFamily: 'lol',
          fontSize: '250%'
        },
        ataqueStyle:{
          color: '',
          fontSize: '100%',
          fontFamily:'lol',
          visibility: '',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '120%',
          fontFamily:'lol',
          visibility: '',
        }
      },

      dva: {
        cartaId: "dva",
        nome: "D.Va",
        raridade: raridades.cavaleiro,
        pontoEspecial: 0,
        energia: 0,
        poder: true,
        efeito: "",
        familia: "overwatch",
        descricao: "",
        emojiEsp: "",
        emoji: "",
        cargo: '100%',
        retrato: "url('pics/dvaMecaRetrato.jpg')",

        // ataqueE: lucioPE()
        ataqueE: "1000⚡",
        novoAtaqueE: '',

        nomeStyle:{
          fontSize: "250%",
          fontFamily: "overwatch",
          color: "",
        },

        retratoStyle:{
          border: "2px solid #ee4bb5",
          backgroundColor: '',
          backgroundSize: 'cover'
        }
        ,

        cargoStyle:{
          fontFamily: 'overwatch',
          fontSize: '250%'
        },
        ataqueStyle:{
          color: '',
          fontSize: '100%',
          fontFamily:'overwatch',
          visibility: '',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '120%',
          fontFamily:'overwatch',
          visibility: 'visible',
        }
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
        novoAtaqueE: '10000💚',

        nomeStyle:{
          fontSize: "210%",
          fontFamily: "tf2",
          color: "",
        },

        retratoStyle:{
          border: "2px solid #cf6a32",
          backgroundColor: "unset"
        },
        cargoStyle:{
          fontFamily: 'tf2',
          fontSize: '200%',
          visibility: 'hidden'
        },
        ataqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'tf2',
          visibility: '',
        },
        novoAtaqueStyle:{
          color: '',
          fontSize: '',
          fontFamily:'tf2',
          visibility: 'visible',
        }
      }

    }

DEBUG && console.log('ESPECAIISMAISCARTAS', especiais.menosCartas);
DEBUG && console.log('RARIDADES', raridades.campones);

export let especial = "";
let raridade = "";

export function escolherEspecial(teste) {
  
    seedString = teste;
    console.log('seedString: ', seedString);

  // seedString = seedObj._seedString

  DEBUG && console.log('**SEEDSTRING NO MODULO**',seedString);

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
        especial.ataqueE = tenicaEnergia() 
      }


      //SANGUE AZUL

    } else if (raridades.sangueAzul.rng()) {
      raridade = raridades.sangueAzul;
      
      if(false){
        especial = especiais.lucio
        especial.novoAtaqueE = 200 + '💚'


      } else if (seedString[12]< 3) {
        especial = especiais.lucio
        especial.novoAtaqueE = lucioPE() 

      } else if (seedString[12]< 6){
         especial = especiais.premioMonark

      } else {
          especial = especiais.blackaoCamarada
          especial.novoAtaqueE = comunistaPE()

      }

      // CAVALEIROS
    } else if (raridades.cavaleiro.rng()) {
      raridade = raridades.cavaleiro;
      DEBUG && console.log(raridades.cavaleiro.rng());


      if(true){

        especial = especiais.dva
        

      } else if (seedString[12]< 4) {
         especial = especiais.speaker;
         especial.ataqueE = pontoSpeaker()
         
      } else if (seedString[12] > 5) {
        especial = especiais.jhin;

      } else if (seedString[12] == 4) {
        especial = especiais.spy;
      } else if (seedString[12] == 5
        ) {
        especial = especiais.dva;
      }



    } else {
      raridade = raridades.campones;

      //CAMPONESES

      if(false){
        
        especial = especiais.tank; 
        especial.cargo = tankCargo(especiais.tank.emoji)

      } else if (seedString[12] < 4) {
        especial = especiais.menosCartas;
        especial.ataqueE = bonusCartasPE() + '🃏'
      } else if (seedString[12] > 6){
         especial = especiais.maisCartas;
         especial.ataqueE = bonusCartasPE() + '🃏'
      } else if (seedString[12] == 4){
         especial = especiais.abelha;
         especial.ataqueE = abelhaEnergia() + '🐝'
      }  else if (seedString[12] == 5){
        especial = especiais.tank; 
        especial.cargo = tankCargo(especiais.tank.emoji)
       } else {
        especial = especiais.estoicoTuru;
        especial.novoAtaqueE = estoicoPE()
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
  let num = seed2 + seed3
  return (especiais.tenica.energia = parseInt(num )  + 275 + "👑");
}

export function pontoSpeaker() {
  if (parseInt(seed2) <= 3) {
    return (especiais.speaker.energia = 1 + '⚡');
  }
  if (parseInt(seed2) > 3 && parseInt(seed2) <= 6) {
    return (especiais.speaker.energia = 2) + '⚡';
  }
  if (parseInt(seed2) > 6 && parseInt(seed2) < 9) {
    return (especiais.speaker.energia = 3 + '⚡');
  }
  if (parseInt(seed2) == 9) {
    return (especiais.speaker.energia = 5 + '⚡');
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
    return parseInt(seed3) + 15
  }
  if (parseInt(seed2) == 1) {
    return parseInt(seed3) + 12
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

export let efeitoEstoico ={
  status: true,
  css: { nome: "estoico", imagem: "url('/pics/estoicoRetrato.jpg')" },
  rodadas: 0,
  efeito: estoico(),
}

export let lucioEfeito ={
  status: true,
  css: { nome: "lucio", imagem: "url('/pics/retratoLucio.jpg')" },
  rodadas: 0,
  efeito: lucio(),
}



function estoico() {}
function lucio() {}


export function estoicoPE(){
  if (parseInt(seed2) == 0) {
    return parseInt(seed3) + 2 + '🛡️'
  }
  if (parseInt(seed2) == 1) {
    return parseInt(seed3) + 2 + '🛡️'
  }
  if (parseInt(seed2) > 1 && parseInt(seed2) <= 3) {
    return parseInt(seed3) + 1 + '🛡️';
  }
  if (parseInt(seed2) >= 4 && parseInt(seed2) <= 6) {
    return parseInt(seed3) + 1 + '🛡️';
  }
  if (parseInt(seed2) == 7) {
    return parseInt(seed3) + 1 + '🛡️';
  }
  if (parseInt(seed2) == 8) {
    return parseInt(seed3) + 1 + '🛡️';
  }
  if (parseInt(seed2) == 9) {
    return parseInt(seed3) + 1 + '🛡️';
  }
}

export function lucioPE(){
  if (parseInt(seed3) < 2) {
    return parseInt(seed3) + 4 + "💚"
  } if (parseInt(seed3) > 7){

    return parseInt(seed3)  -1 + "💚" 
  }
  else {
    return parseInt(seed3) + 1 + "💚"
  }
  
}

function tankCargo(emoji){

  let num = seed2 + seed3
  console.log('***NUM*****',num);
  return parseInt(num) + 487 + emoji
}

// export function pontoSpeaker() {
//   return Math.floor(Math.random() * 4 + 1);
// }
