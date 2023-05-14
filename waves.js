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
  start() {
    this.getNumberOfEnemies();
    this.getNumberOfWaves();
  }
}

export let campanhaTeste = {
  // header da **CAMPANHA**
  bgColor: "white",
  fontFamily: "lol",
  fontSize: "2em",

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
          enemiesTotal: 15,
          enemies: [spawnMonark, spawnMenosCartas],
          level: [1, 1],

          boss:[spawnLiberdade],
          bossTotal: 1,
          bossLevel: [4,5],
          bossSpawnChance: 50,

          money: 150,
          ammo: 5,
          cards: 10,
          spawnChance: 20,
          name: "GENESIS",
          timeBeforeNextWave: [5, 7],
          spawnTime: [0.5, 1],
        },

        {
          enemiesTotal: 3,
          enemies: [spawnAwp, spawnSmoke],
          level: [1, 1],
          money: 100,
          ammo: 5,
          cards: 5,
          spawnChance: 90,
          name: "EMBOSCADA",
          timeBeforeNextWave: [10, 11],
          spawnTime: [2, 2],
        },

        {
          enemiesTotal: 3,
          enemies: [spawnMonark],
          level: [1, 5],
          money: 75,
          ammo: 1,
          cards: 5,
          spawnChance: 100,
          name: "CHUVA DE MONARK",
          timeBeforeNextWave: [5, 7],
          spawnTime: [0.5, 3],
        },
        {
          enemiesTotal: 3,
          enemies: [spawnMonark],
          level: [1, 5],
          money: 75,
          ammo: 1,
          cards: 5,
          spawnChance: 100,
          name: "CHUVA DE MONARK",
          timeBeforeNextWave: [5, 7],
          spawnTime: [0.5,1.5],
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
          enemiesTotal: 18,
          enemies: [spawnMonark, spawnTank, spawnMenosCartas],
          boss:[],
          bossTotal: 0,
          level: [1, 1],
          bossLevel: [],
          money: 150,
          ammo: 5,
          cards: 10,
          spawnChance: 20,
          name: "GENESIS",
          spawnTime: [7, 13],
          timeBeforeNextWave: [7, 12],
        },

        {
          enemiesTotal: 12,
          enemies: [spawnAwp, spawnSmoke],
          boss:[],
          bossTotal: 0,
          bossLevel: [],
          level: [1, 1],
          money: 100,
          ammo: 5,
          cards: 5,
          spawnChance: 90,
          name: "EMBOSCADA",
          spawnTime: [3, 8],
          timeBeforeNextWave: [2, 7],
        },

        {
          enemiesTotal: 30,
          enemies: [spawnMonark],
          boss:[],
          bossTotal: 0,
          bossLevel: [],
          level: [1, 2],
          money: 75,
          ammo: 1,
          cards: 5,
          spawnChance: 100,
          name: "CHUVA DE MONARK",
          spawnTime: [0.5, 4],
          timeBeforeNextWave: [20, 40],
        },

        {
          enemiesTotal: 6,
          enemies: [spawnMenosCartas, spawnSmoke],
          level: [5, 5],
          
          boss:[spawnLiberdade],
          bossTotal: 3,
          bossLevel: [1,1],
          bossSpawnChance: 20,

          money: 200,
          ammo: 15,
          cards: 25,
          spawnChance: 5,
          name: "DESERTO",
          spawnTime: [15, 30],
          timeBeforeNextWave: [3, 7],
        },

        {
          enemiesTotal: 30,
          enemies: [spawnCamarada, spawnTank],
          level: [1, 3],

          boss:[spawnVitor],
          bossTotal: 1,
          bossLevel: [1,1],
          bossSpawnChance: 10,

          money: 200,
          ammo: 10,
          cards: 10,
          spawnChance: 90,
          name: "REVOLUÇÃO DOS TANKS",
          spawnTime: [2.5, 9],
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
          level: [5, 5],
          money: 200,
          ammo: 15,
          cards: 25,
          spawnChance: 20,
          name: "RAZORBACK",
          spawnTime: [5, 10],

          boss:[spawnLiberdade],
          bossTotal: 2,
          bossLevel: [1,2],
          bossSpawnChance: 10,
          timeBeforeNextWave: [1, 3],
        },

        {
          enemiesTotal: 15,
          enemies: [spawnMenosCartas, spawnSmoke],
          level: [5, 5],
          money: 200,
          ammo: 15,
          cards: 25,
          spawnChance: 2,
          name: "DESERTO II",
          spawnTime: [3, 6],

          boss:[spawnLiberdade, spawnVitor],
          bossTotal: 4,
          bossLevel: [1,1],
          bossSpawnChance: 5,
          timeBeforeNextWave: [11, 13],
        },

        {
          enemiesTotal: 18,
          enemies: [spawnMenosCartas, spawnCamarada],
          level: [3, 4],
          money: 50,
          ammo: 5,
          cards: 30,
          spawnChance: 95,
          name: "ROUBO",
          spawnTime: [5, 12],
          timeBeforeNextWave: [3,20],
        },

        {
          enemiesTotal: 25,
          enemies: [spawnCamarada, spawnTank],
          level: [3, 3],
          money: 200,
          ammo: 10,
          cards: 10,
          spawnChance: 90,
          name: "REVOLUÇÃO DOS TANKS II",
          spawnTime: [3, 13],

          boss:[spawnLiberdade],
          bossTotal: 4,
          bossLevel: [1,2],
          bossSpawnChance: 10,
          timeBeforeNextWave: [30,90],
        },

        {
          enemiesTotal: 40,
          enemies: [
            spawnCamarada,
            spawnTank,
            spawnSmoke,
            spawnAwp,
            spawnMonark,
            spawnMenosCartas,
          ],
          level: [2, 5],
          money: 200,
          ammo: 10,
          cards: 10,
          spawnChance: 90,
          name: "FEIJOADA COMPLETA",

          boss:[spawnLiberdade,spawnVitor],
          bossTotal: 3,
          bossLevel: [1,1],
          bossSpawnChance: 10,
          spawnTime: [7, 20],
          timeBeforeNextWave: [30,35],

        },

        {
          enemiesTotal: 70,
          enemies: [spawnMonark],
          level: [4, 5],
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
      active: false,

      waves: [],
    },

    // NIVEL 4

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "MICROFONE",
      completed: false,
      locked: true,

      waves: [],
    },

    // NIVEL 5

    {
      numOfWaves: 5,

      totalNumOfEnemies: 0,
      name: "RISADA",
      completed: false,
      locked: true,

      waves: [],
    },

    // NIVEL 6

    {
      numOfWaves: 0,

      totalNumOfEnemies: 0,
      name: "CAMINHO",
      completed: false,
      locked: true,

      waves: [],
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
campanhaTeste.start()
// console.log("imperioFinished: ", imperio);
