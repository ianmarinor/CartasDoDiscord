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
  spawnRamattra,
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
      if (!missão.waveToPlay) {
        missão.waveToPlay = 0;
      }
    }
  }

  setDefaultWave() {
    for (let i = 0; i < this.levels.length; i++) {
      let missão = this.levels[i];
      // console.log(missão.waves);

      if (missão) {
        missão.waves.map((x) => {
          if (x.supports && !x.chanceNotSupport) {
            x.chanceNotSupport = 20;
          }
        });
      }
    }
  }

  start() {
    this.getNumberOfEnemies();
    this.getNumberOfWaves();
    this.getLevelId();
    this.setDefaultWave();
  }
}

export let campanhaTeste = {
  // header da **CAMPANHA**
  bgColor: "white",
  fontFamily: "lol",
  fontSize: "2em",
  campainId: 0,

  saveInfo:{
    gameVersion: 'Alpha 1.3',
    saveVersion: '1.0',
    
  },


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
          enemiesTotal: 2,
          enemies: [
            spawnCamarada,
            spawnTank,
            spawnAwp,
            spawnMonark,
            spawnMenosCartas,
            spawnLux,
            spawnRamattra,
          ],
          supports: [spawnSmoke, spawnRouba],
          level: [2, 4],
          money: 100,
          ammo: 10,
          cards: 50,
          spawnChance: 90,
          name: "FEIJOADA COMPLETA",

          boss: [spawnLiberdade, spawnVitor],
          bossTotal: 3,
          bossLevel: [1, 1],
          bossSpawnChance: 10,
          spawnTime: [1, 1],
          timeBeforeNextWave: [10, 12],
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

  saveInfo:{
    gameVersion: 'Alpha 1.3',
    saveVersion: '1.0',
    demoVersion: true,
  },

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
          enemiesTotal: 14,
          enemies: [
            spawnCamarada,
            spawnTank,
            spawnAwp,
            spawnMonark,
            spawnMenosCartas,
            spawnLux,
            spawnRamattra,
          ],
          boss: [],
          bossTotal: 0,
          level: [1, 1],
          bossLevel: [],
          money: 150,
          ammo: 10,
          cards: 25,
          spawnChance: 20,
          name: "GENESIS",
          spawnTime: [10, 15],
          timeBeforeNextWave: [8, 10],
        },

        {
          enemiesTotal: 12,
          enemies: [spawnAwp],
          supports: [spawnSmoke],
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
          level: [1, 2],

          boss: [spawnVitor, spawnLiberdade],
          bossTotal: 1,
          bossLevel: [1, 1],
          bossSpawnChance: 10,

          money: 150,
          ammo: 7,
          cards: 10,
          spawnChance: 100,
          name: "CHUVA DE MONARK",
          spawnTime: [1, 1.5],
          timeBeforeNextWave: [8, 10],
        },

        {
          enemiesTotal: 10,
          enemies: [spawnMenosCartas],
          supports: [spawnSmoke],
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
          spawnTime: [6, 10],
          timeBeforeNextWave: [2, 5],
        },

       

        {
          enemiesTotal: 24,
          enemies: [spawnCamarada],
          level: [1, 2],

          boss: [spawnLiberdade],
          bossTotal: 1,
          bossLevel: [1, 2],
          bossSpawnChance: 10,

          money: 200,
          ammo: 10,
          cards: 10,
          spawnChance: 90,
          name: "REVOLUÇÃO",
          spawnTime: [1, 4],
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
          enemiesTotal: 12,
          enemies: [spawnMenosCartas, spawnLux],
          supports: [spawnRouba],
          chanceNotSupport: 20,
          level: [1, 3],
          money: 50,
          ammo: 5,
          cards: 10,
          spawnChance: 2,
          name: "BEM-VINDO",
          spawnTime: [4, 8],
          timeBeforeNextWave: [10, 15],

          boss: [spawnLiberdade],
          bossTotal: 2,
          bossLevel: [1, 1],
          bossSpawnChance: 20,
        },

        {
          enemiesTotal: 24,
          enemies: [spawnRamattra, spawnCamarada],
          supports: [spawnRouba],
          chanceNotSupport: 50,
          level: [2, 4],
          money: 1,
          ammo: 1,
          cards: 1,
          spawnChance: 95,
          name: "BOSS",
          spawnTime: [4, 10],
          timeBeforeNextWave: [10, 11],
        },

        {
          enemiesTotal: 10,
          enemies: [spawnMenosCartas],
          supports: [spawnSmoke, spawnRouba],
          chanceNotSupport: 66,
          level: [1, 2],
          money: 50,
          ammo: 10,
          cards: 30,
          spawnChance: 5,
          name: "ASSALTO",
          spawnTime: [1, 6],
          timeBeforeNextWave: [2, 3],
        },

        {
          enemiesTotal: 36,
          enemies: [spawnMonark],
          level: [2, 4],
          money: 200,
          ammo: 15,
          cards: 50,
          name: "CHUVA DE MONARK",
          spawnTime: [1, 2],

          boss: [spawnVitor],
          bossTotal: 3,
          bossLevel: [1, 3],
          bossSpawnChance: 5,

          timeBeforeNextWave: [10, 15],
        },

        {
          enemiesTotal: 25,
          enemies: [spawnCamarada],
          level: [5, 5],
          money: 150,
          ammo: 15,
          cards: 50,
          spawnChance: 90,
          name: "MINI-BOSS",
          spawnTime: [4, 6],

          boss: [spawnLiberdade, spawnVitor],
          bossTotal: 5,
          bossLevel: [1, 2],
          bossSpawnChance: 20,
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
          enemiesTotal: 32,
          enemies: [
            spawnCamarada,
            spawnTank,
            spawnAwp,
            spawnMonark,
            spawnMenosCartas,
            spawnLux,
            spawnRamattra,
          ],
          supports: [spawnSmoke, spawnRouba],
          level: [2, 3],
          money: 200,
          ammo: 10,
          cards: 50,
          spawnChance: 90,
          name: "FEIJOADA COMPLETA",

          boss: [spawnLiberdade, spawnVitor],
          bossTotal: 3,
          bossLevel: [1, 1],
          bossSpawnChance: 10,
          spawnTime: [6, 8],
          timeBeforeNextWave: [15, 30],
        },

        {
          enemiesTotal: 48,
          enemies: [spawnMonark],
          level: [3, 5],
          money: 75,
          ammo: 1,
          cards: 1,
          name: "CHUVA DE MONARK",
          spawnTime: [0.5, 1.5],
          timeBeforeNextWave: [5, 6],
        },



        {
          enemiesTotal: 15,
          enemies: [spawnTank],
          level: [1, 3],
          money: 200,
          ammo: 15,
          cards: 10,
          name: "TANK YOU",
          spawnTime: [3, 10],
          timeBeforeNextWave: [5, 5],
        },

       


        {
          enemiesTotal: 18,
          enemies: [spawnRamattra, spawnLux, spawnMonark],
          supports: [spawnRouba],
          level: [1, 3],
          money: 500,
          ammo: 15,
          cards: 15,
          name: "TÁ FÁCIL?",
          spawnTime: [4, 8],
          timeBeforeNextWave: [30, 40],

          boss: [spawnLiberdade, spawnVitor],
          bossTotal: 3,
          bossLevel: [1, 3],
          bossSpawnChance: 10,
          timeBeforeNextWave: [15, 30],

        },

        {
          enemiesTotal: 24,
          enemies: [spawnCamarada],
          level: [2, 2],
          money: 500,
          ammo: 15,
          cards: 15,
          name: "REVOLUCÃO",
          spawnTime: [0.5, 1],
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
          enemiesTotal: 20,
          enemies: [spawnCamarada],
          supports: [spawnSmoke],
          chanceNotSupport: [33],
          level: [5, 5],
          money: 300,
          ammo: 20,
          cards: 50,
          name: "SIR NUKESALOT",
          spawnTime: [2,5],
          timeBeforeNextWave: [1, 5],

          boss: [spawnLiberdade],
          bossTotal: 99,
          bossLevel: [5, 5],
          bossSpawnChance: 33,
        },

        

        {
          enemiesTotal: 18,
          enemies: [spawnLux, spawnCamarada, spawnTank],
          level: [5, 5],
          money: 350,
          ammo: 30,
          cards: 50,
          name: "NO FIM DO TUNEL",
          spawnTime: [5, 12],
          timeBeforeNextWave: [10, 12],

        },


        {
          enemiesTotal: 24,
          enemies: [spawnSmoke, spawnTank],
          level: [5, 5],
          money: 350,
          ammo: 10,
          cards: 20,
          name: "SÃO PAULO",
          spawnTime: [5, 15],
          timeBeforeNextWave: [10, 12],

          boss: [spawnVitor],
          bossTotal: 5,
          bossLevel: [1, 1],
          bossSpawnChance: 50,

        },

        {
          enemiesTotal: 25,
          enemies: [spawnMonark],
          level: [3, 5],
          money: 200,
          ammo: 30,
          cards: 20,
          name: "PSEUDOCIÊNCIA",
          spawnTime: [10, 18],
          timeBeforeNextWave: [8, 10],

          boss: [spawnVitor],
          bossTotal: 30,
          bossLevel: [1, 2],
          bossSpawnChance: 50,
        },

        {
          enemiesTotal: 120,
          enemies: [spawnMonark],
          level: [5, 5],
          money: 75,
          ammo: 5,
          cards: 20,
          name: "CHUVA DE MONARK",
          spawnTime: [0.5,2.5],
          timeBeforeNextWave: [25, 40],
        },

        {
          enemiesTotal: 60,
          enemies: [spawnCamarada],
          level: [5, 5],
          money: 200,
          ammo: 10,
          cards: 20,
          name: "REVOLUÇÃO",
          spawnTime: [2, 3.5],
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
          enemiesTotal: 10,
          enemies: [spawnMenosCartas],
          supports: [spawnSmoke, spawnRouba],
          chanceNotSupport: 75,
          level: [5, 5],
          money: 50,
          ammo: 5,
          cards: 10,
          spawnChance: 2,
          name: "RAPIDINHA",
          spawnTime: [0.5, 1],
          timeBeforeNextWave: [3, 5],
        },


        {
          enemiesTotal: 18,
          enemies: [spawnAwp, spawnRamattra, spawnCamarada],
          level: [2, 3],
          money: 200,
          ammo: 15,
          cards: 50,
          name: "HARDCORE",
          spawnTime: [4, 8],

          boss: [spawnLiberdade, spawnVitor],
          bossTotal: 5,
          bossLevel: [1, 1],
          bossSpawnChance: 10,

          timeBeforeNextWave: [10, 15],
        },

        {
          enemiesTotal: 24,
          enemies: [spawnMenosCartas, spawnMonark],
          supports: [spawnRouba],
          chanceNotSupport: 85,
          level: [2, 4],
          money: 1,
          ammo: 1,
          cards: 1,
          spawnChance: 95,
          name: "SEM CARTAS",
          spawnTime: [0.5, 3],
          timeBeforeNextWave: [1, 2],
        },

        

        {
          enemiesTotal: 25,
          enemies: [spawnCamarada, spawnTank],
          level: [4, 5],
          money: 100,
          ammo: 15,
          cards: 25,
          spawnChance: 90,
          name: "REVOLUÇÃO DOS TANKS",
          spawnTime: [3, 7],

          boss: [spawnLiberdade],
          bossTotal: 4,
          bossLevel: [2, 3],
          bossSpawnChance: 10,
          timeBeforeNextWave: [3, 8],
        },

        {
          enemiesTotal: 32,
          enemies: [
            spawnCamarada,
            spawnTank,
            spawnAwp,
            spawnMonark,
            spawnMenosCartas,
            spawnLux,
            spawnRamattra,
          ],
          supports: [spawnSmoke, spawnRouba],
          chanceNotSupport: 50,
          level: [2, 4],
          money: 100,
          ammo: 10,
          cards: 50,
          spawnChance: 90,
          name: "FEIJOADA COMPLETA",

          boss: [spawnLiberdade, spawnVitor],
          bossTotal: 3,
          bossLevel: [1, 1],
          bossSpawnChance: 10,
          spawnTime: [3, 10],
          timeBeforeNextWave: [10, 12],
        },

        {
          enemiesTotal: 120,
          enemies: [spawnMonark],
          level: [4, 5],
          money: 75,
          ammo: 5,
          cards: 5,
          spawnChance: 80,
          name: "CHUVA DE MONARK",
          spawnTime: [0.5, 1],

          boss: [spawnVitor],
          bossTotal: 20,
          bossLevel: [1, 3],
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
      active: false,

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
      active: false,
      waves: [],
    },

    // NIVEL 8

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "TANK",
      completed: false,
      locked: true,
      active: false,
      waves: [],
    },

    // NIVEL 9

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "BRASIL",
      completed: false,
      locked: true,
      active: false,
      waves: [],
    },

    // NIVEL 10

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "RAINHA",
      completed: false,
      locked: true,
      active: false,

      waves: [],
    },
  ],
};

imperio = Object.assign(new Campanha(imperio), imperio);
campanhaTeste = Object.assign(new Campanha(campanhaTeste), campanhaTeste);
imperio.start();
campanhaTeste.start();
// console.log("imperioFinished: ", imperio);
