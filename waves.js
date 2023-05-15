import {
  spawnMenosCartas,
  spawnAwp,
  spawnCamarada,
  spawnDog,
  spawnLiberdade,
  spawnMonark,
  spawnSmoke,
  spawnTank,
  spawnVitor,
  spawnLux,
  spawnRouba,
} from "./arena.js";
import { teste } from "./script.js";

export let missOne = [];

class Campanha {
  constructor(_campanha) {}

  getNumberOfEnemies() {
    for (let i = 0; i < this.levels.length; i++) {
      let missão = this.levels[i];
      if (!missão.waves) continue;

      missão.totalNumOfEnemies = missão.waves.reduce(
        (sum, wave) => sum + wave.enemiesTotal,
        0
      );
    }
  }

  getNumberOfWaves() {
    for (let i = 0; i < this.levels.length; i++) {
      let missão = this.levels[i];

      if (!missão.waves) continue;
      missão.numOfWaves = missão.waves.length;
      missão.waves.map((x, i) => (x.id = i));
    }
  }

  getLevelId() {
    for (let i = 0; i < this.levels.length; i++) {
      let missão = this.levels[i];

      missão.levelId = i;
    }
  }

  start() {
    this.getNumberOfEnemies();
    this.getNumberOfWaves();
    this.getLevelId();
  }
}

export let campanhaTeste = {
  // header da **CAMPANHA**
  bgColor: "white",
  fontFamily: "lol",
  fontSize: "2em",
  campainId: 0,

  setMissionPics(_index) {
    return 'url("/pics/imperio/' + _index + '.png")';
  },

  // MISSÕES da campanha
  levels: [
    // missão 1
    {
      //   header da missão
      numOfWaves: 5,
      totalNumOfEnemies: 0,
      name: "BUONGIORNO",
      completed: false,
      locked: false,
      active: true,

      waves: [
        {
          enemiesTotal: 80,
          enemies: [spawnMonark],
          level: [1, 3],
          money: 200,
          ammo: 10,
          cards: 20,
          name: "CHUVA DE MONARK",
          spawnTime: [1, 3],
          timeBeforeNextWave: [25, 40],

        },
    
      ],
    },
  ],
};

// CAMPANHA IMPÉRIO
export let imperio = {
  // header da **CAMPANHA**
  bgColor: "#333f81",
  fontFamily: "imperio",
  fontSize: "2em",
  id: 1,

  setMissionPics(_index) {
    return 'url("/pics/imperio/' + _index + '.png")';
  },

  // MISSÕES da campanha
  levels: [
    // missão 1
    {
      //   header da missão
      numOfWaves: 5,
      totalNumOfEnemies: 0,
      name: "BUONGIORNO",
      completed: false,
      locked: false,
      active: true,

      waves: [
        {
          enemiesTotal: 6,
          enemies: [spawnMonark, spawnMenosCartas],
          boss: [],
          bossTotal: 0,
          level: [1, 1],
          bossLevel: [],
          money: 150,
          ammo: 10,
          cards: 25,
          spawnChance: 20,
          name: "GENESIS",
          spawnTime: [7, 15],
          timeBeforeNextWave: [8, 10],
        },

        {
          enemiesTotal: 12,
          enemies: [spawnAwp, spawnSmoke],
          boss: [],
          bossTotal: 0,
          bossLevel: [],
          level: [1, 1],
          money: 200,
          ammo: 10,
          cards: 50,
          spawnChance: 90,
          name: "EMBOSCADA",
          spawnTime: [3, 7],
          timeBeforeNextWave: [10, 12],
        },

        {
          enemiesTotal: 30,
          enemies: [spawnMonark],


          boss: [spawnVitor, spawnLiberdade],
          bossTotal: 1,
          bossLevel: [1, 1],
          bossSpawnChance: 10,


          money: 150,
          ammo: 7,
          cards: 10,
          spawnChance: 100,
          name: "CHUVA DE MONARK",
          spawnTime: [1, 2],
          timeBeforeNextWave: [8, 10],
        },

        {
          enemiesTotal: 10,
          enemies: [spawnMenosCartas, spawnSmoke],
          level: [4, 5],

          boss: [spawnLiberdade],
          bossTotal: 1,
          bossLevel: [1, 1],
          bossSpawnChance: 10,

          money: 50,
          ammo: 10,
          cards: 30,
          spawnChance: 5,
          name: "DESERTO",
          spawnTime: [6,10],
          timeBeforeNextWave: [2, 5],
        },

        {
          enemiesTotal: 10,
          enemies: [spawnMenosCartas, spawnSmoke, spawnRouba],
          level: [1, 2],
          money: 50,
          ammo: 10,
          cards: 30,
          spawnChance: 5,
          name: "ASSALTO",
          spawnTime: [1,6],
          timeBeforeNextWave: [2, 3],
        },


        {
          enemiesTotal: 118,
          enemies: [spawnCamarada],
          level: [1, 1],

          money: 200,
          ammo: 10,
          cards: 10,
          spawnChance: 90,
          name: "REVOLUÇÃO",
          spawnTime: [1, 5],
        },
      ],
    },

    // NIVEL 2
    {
      numOfWaves: 6,

      totalNumOfEnemies: 0,
      name: "ATOS",
      completed: false,
      locked: true,
      active: true,

      waves: [
        {
          enemiesTotal: 15,
          enemies: [spawnAwp, spawnCamarada],
          level: [2, 3],
          money: 200,
          ammo: 15,
          cards: 25,
          spawnChance: 20,
          name: "RAZORBACK",
          spawnTime: [5, 7],

          boss: [spawnLiberdade],
          bossTotal: 2,
          bossLevel: [1, 2],
          bossSpawnChance: 10,
          timeBeforeNextWave: [1, 3],
        },

        {
          enemiesTotal: 6,
          enemies: [spawnMenosCartas, spawnSmoke],
          level: [5, 5],
          money: 200,
          ammo: 15,
          cards: 25,
          spawnChance: 2,
          name: "DESERTO II",
          spawnTime: [6, 10],

          boss: [spawnLiberdade, spawnVitor],
          bossTotal: 4,
          bossLevel: [1, 1],
          bossSpawnChance: 5,
          timeBeforeNextWave: [11, 13],
        },

        {
          enemiesTotal: 12,
          enemies: [spawnMenosCartas, spawnCamarada],
          level: [4, 5],
          money: 50,
          ammo: 5,
          cards: 30,
          spawnChance: 95,
          name: "ROUBO",
          spawnTime: [2, 9],
          timeBeforeNextWave: [3, 8],
        },

        {
          enemiesTotal: 17,
          enemies: [spawnCamarada, spawnTank],
          level: [2, 2],
          money: 200,
          ammo: 10,
          cards: 10,
          spawnChance: 90,
          name: "REVOLUÇÃO DOS TANKS II",
          spawnTime: [3, 7],

          boss: [spawnLiberdade],
          bossTotal: 4,
          bossLevel: [1, 2],
          bossSpawnChance: 10,
          timeBeforeNextWave: [3, 8],
        },

        {
          enemiesTotal: 16,
          enemies: [
            spawnCamarada,
            spawnTank,
            spawnSmoke,
            spawnAwp,
            spawnMonark,
            spawnMenosCartas,
          ],
          level: [1, 3],
          money: 200,
          ammo: 10,
          cards: 10,
          spawnChance: 90,
          name: "FEIJOADA COMPLETA",

          boss: [spawnLiberdade, spawnVitor],
          bossTotal: 3,
          bossLevel: [1, 1],
          bossSpawnChance: 10,
          spawnTime: [7, 12],
          timeBeforeNextWave: [10, 12],
        },

        {
          enemiesTotal: 12,
          enemies: [spawnMonark],
          level: [1, 3],
          money: 75,
          ammo: 5,
          cards: 5,
          spawnChance: 80,
          name: "CHUVA DE MONARK II",
          spawnTime: [0.5, 5],
        },
      ],
    },

    // NIVEL 3

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "BRIGAS",
      completed: false,
      locked: true,
      active: true,

      waves: [
        {
          enemiesTotal: 18,
          enemies: [spawnMonark, spawnAwp, spawnCamarada],
          level: [1, 3],
          money: 20,
          ammo: 5,
          cards: 5,
          name: "FRENESIA",
          spawnTime: [1.5, 4.5],
          timeBeforeNextWave: [10, 12],
        },
       
        {
          enemiesTotal: 24,
          enemies: [spawnMonark],
          level: [2, 4],
          money: 150,
          ammo: 7,
          cards: 5,
          name: "CHUVA DE MONARK",
          spawnTime: [0.5, 1.5],
          timeBeforeNextWave: [5, 6],
        },

        {
          enemiesTotal: 6,
          enemies: [spawnTank],
          level: [1, 1],
          money: 150,
          ammo: 7,
          cards: 5,
          name: "TANK YOU",
          spawnTime: [3, 9],
          timeBeforeNextWave: [5, 5],
        },

        {
          enemiesTotal: 6,
          enemies: [spawnTank],
          level: [1, 1],
          money: 150,
          ammo: 7,
          cards: 5,
          name: "TANK YOU",
          spawnTime: [3, 9],
          timeBeforeNextWave: [5, 5],
        },

        {
          enemiesTotal: 30,
          enemies: [spawnTank, spawnCamarada, spawnSmoke],
          level: [2, 3],
          money: 500,
          ammo: 15,
          cards: 15,
          name: "TÁ FÁCIL?",
          spawnTime: [0.5, 6],
          timeBeforeNextWave: [5, 5],
        },

        {
          enemiesTotal: 18,
          enemies: [spawnCamarada],
          level: [1, 1],
          money: 500,
          ammo: 15,
          cards: 15,
          name: "REVOLUCÃO",
          spawnTime: [0.5, 6],
          timeBeforeNextWave: [5, 5],

          boss: [spawnLiberdade],
          bossTotal: 3,
          bossLevel: [1, 1],
          bossSpawnChance: 20,

        },


      ],
    },

    // NIVEL 4

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "MICROFONE",
      completed: false,
      locked: true,
      active: true,

      waves: [

        {
          enemiesTotal: 50,
          enemies: [spawnSmoke],
          level: [2, 5],
          money: 100,
          ammo: 10,
          cards: 5,
          name: "SIR NUKESALOT",
          spawnTime: [1.5, 2.5],
          timeBeforeNextWave: [1, 5],

          boss: [spawnLiberdade],
          bossTotal: 5,
          bossLevel: [1, 1],
          bossSpawnChance: 15,

        },

        {
          enemiesTotal: 12,
          enemies: [spawnSmoke, spawnTank],
          level: [2, 5],
          money: 350,
          ammo: 10,
          cards: 20,
          name: "SÃO PAULO",
          spawnTime: [3, 8],
          timeBeforeNextWave: [10, 12],


        },

        {
          enemiesTotal: 5,
          enemies: [spawnTank],
          level: [1, 3],
          money: 350,
          ammo: 30,
          cards: 50,
          name: "PEDRA",
          spawnTime: [3, 8],
          timeBeforeNextWave: [10, 12],

          boss: [spawnLiberdade],
          bossTotal: 5,
          bossLevel: [1, 1],
          bossSpawnChance: 50,

        },

        {
          enemiesTotal: 25,
          enemies: [spawnMonark],
          level: [1, 5],
          money: 200,
          ammo: 30,
          cards: 20,
          name: "PSEUDOCIÊNCIA",
          spawnTime: [3, 8],
          timeBeforeNextWave: [8, 10],

          boss: [spawnVitor],
          bossTotal: 3,
          bossLevel: [1, 1],
          bossSpawnChance: 33,

        },


        {
          enemiesTotal: 80,
          enemies: [spawnMonark],
          level: [1, 3],
          money: 200,
          ammo: 10,
          cards: 20,
          name: "CHUVA DE MONARK",
          spawnTime: [1, 3],
          timeBeforeNextWave: [25, 40],

        },

        {
          enemiesTotal: 48,
          enemies: [spawnCamarada],
          level: [2, 3],
          money: 200,
          ammo: 10,
          cards: 20,
          name: "REVOLUÇÃO",
          spawnTime: [1, 5],
          

        },


      ],
    },

    // NIVEL 5

    {
      numOfWaves: 5,

      totalNumOfEnemies: 0,
      name: "RISADA",
      completed: false,
      locked: true,
      active: true,
      waves: [

        {
          enemiesTotal: 30,
          enemies: [spawnMonark, spawnAwp],
          level: [3, 5],
          money: 5,
          ammo: 5,
          cards: 1,
          name: "LIBERDADE!",
          spawnTime: [5, 10],
          timeBeforeNextWave: [8, 10],

          boss: [spawnVitor, spawnLiberdade],
          bossTotal: 7,
          bossLevel: [1, 1],
          bossSpawnChance: 50,

        },


        {
          enemiesTotal: 23,
          enemies: [spawnAwp],
          level: [3, 5],
          money: 25,
          ammo: 1,
          cards: 5,
          name: "Mick Mundy",
          spawnTime: [2, 6],
          timeBeforeNextWave: [20, 35],

          boss: [ spawnLiberdade],
          bossTotal: 3,
          bossLevel: [1, 2],
          bossSpawnChance: 10,

        },

        {
          enemiesTotal: 40,
          enemies: [spawnCamarada, spawnTank],
          level: [3, 5],
          money: 10,
          ammo: 5,
          cards: 5,
          name: "REVOLUÇÃO DOS TANKS",
          spawnTime: [2, 12],
          timeBeforeNextWave: [8, 10],

          boss: [ spawnLiberdade],
          bossTotal: 10,
          bossLevel: [2, 3],
          bossSpawnChance: 10,

        },

        {
          enemiesTotal: 60,
          enemies: [spawnSmoke ],
          level: [4, 5],
          money: 15,
          ammo: 1,
          cards: 5,
          name: "UM TRUQUE...",
          spawnTime: [2, 8],
          timeBeforeNextWave: [8, 10],

          boss: [ spawnVitor],
          bossTotal: 15,
          bossLevel: [1, 2],
          bossSpawnChance: 40,

        },

        {
          enemiesTotal: 40,
          enemies: [spawnMonark, spawnCamarada, spawnTank, spawnMenosCartas, spawnSmoke, spawnAwp],
          level: [4, 5],
          money: 10,
          ammo: 1,
          cards: 1,
          name: "UMA FEIJOADA COMPLETA",
          spawnTime: [2, 8],
          timeBeforeNextWave: [15, 30],


          boss: [ spawnVitor, spawnLiberdade],
          bossTotal: 15,
          bossLevel: [1, 2],
          bossSpawnChance: 20,

        },


        {
          enemiesTotal: 40,
          enemies: [spawnSmoke, spawnAwp],
          level: [4, 5],
          money: 20,
          ammo: 1,
          cards: 3,
          name: "EMBOSCADA",
          spawnTime: [2, 10],
          timeBeforeNextWave: [15, 30],


          boss: [ spawnLiberdade],
          bossTotal: 8,
          bossLevel: [2, 4],
          bossSpawnChance: 33,

        },

        {
          enemiesTotal: 45,
          enemies: [spawnTank, spawnCamarada],
          level: [4, 5],
          money: 7,
          ammo: 4,
          cards: 1,
          name: "REVOLUÇÃO DOS TANKS",
          spawnTime: [2, 10],
          timeBeforeNextWave: [15, 30],


          boss: [spawnLiberdade],
          bossTotal: 10,
          bossLevel: [1, 2],
          bossSpawnChance: 50,

        },

        {
          enemiesTotal: 60,
          enemies: [spawnMonark],
          level: [5, 5],
          money: 50,
          ammo: 5,
          cards: 20,
          name: "CHUVA DE MONARK",
          spawnTime: [0.5, 1],
          


          boss: [spawnVitor],
          bossTotal: 4,
          bossLevel: [3, 5],
          bossSpawnChance: 10,

        },



      ],
    },

    // NIVEL 6

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "CAMINHO",
      completed: false,
      locked: true,

      waves: [
        {
          enemiesTotal: 15,
          enemies: [spawnCamarada],
          level: [5, 5],
          money: 7,
          ammo: 4,
          cards: 1,
          name: "DA RESISTÊNCIA",
          spawnTime: [5, 10],
          timeBeforeNextWave: [15, 30],


          boss: [spawnLiberdade],
          bossTotal: 15,
          bossLevel: [3, 5],
          bossSpawnChance: 50,

        },

        {
          enemiesTotal: 15,
          enemies: [spawnCamarada],
          level: [5, 5],
          money: 7,
          ammo: 4,
          cards: 1,
          name: "DA RESISTÊNCIA",
          spawnTime: [5, 10],
          timeBeforeNextWave: [15, 30],


          boss: [spawnLiberdade],
          bossTotal: 15,
          bossLevel: [3, 5],
          bossSpawnChance: 50,

        },


      ],
    },

    // NIVEL 7

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "FONES",
      completed: false,
      locked: true,
      waves: [],
    },

    // NIVEL 8

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "TANK",
      completed: false,
      locked: true,
      waves: [],
    },

    // NIVEL 9

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "BRASIL",
      completed: false,
      locked: true,
    },

    // NIVEL 10

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "RAINHA",
      completed: false,
      locked: true,

      waves: [],
    },
  ],
};

imperio = Object.assign(new Campanha(imperio), imperio);
campanhaTeste = Object.assign(new Campanha(campanhaTeste), campanhaTeste);
imperio.start();
campanhaTeste.start();
// console.log("imperioFinished: ", imperio);
