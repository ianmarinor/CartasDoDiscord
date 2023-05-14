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
          enemiesTotal: 6,
          enemies: [spawnMonark, spawnMenosCartas],
          level: [1, 1],
          money: 150,
          ammo: 5,
          cards: 10,
          spawnChance: 20,
          name: "GENESIS",
        },

        {
          enemiesTotal: 12,
          enemies: [spawnAwp, spawnSmoke],
          level: [1, 2],
          money: 100,
          ammo: 5,
          cards: 5,
          spawnChance: 90,
          name: "EMBOSCADA",
        },

        {
          enemiesTotal: 60,
          enemies: [spawnMonark],
          level: [1, 5],
          money: 75,
          ammo: 1,
          cards: 5,
          spawnChance: 100,
          name: "CHUVA DE MONARK",
        },

        {
          enemiesTotal: 15,
          enemies: [spawnMenosCartas, spawnSmoke],
          level: [5, 5],
          money: 200,
          ammo: 15,
          cards: 25,
          spawnChance: 5,
          name: "DESERTO",
        },

        {
          enemiesTotal: 20,
          enemies: [spawnCamarada, spawnTank],
          level: [2, 4],
          money: 200,
          ammo: 10,
          cards: 10,
          spawnChance: 90,
          name: "REVOLUÇÃO DOS TANKS",
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
        },

        {
          enemiesTotal: 30,
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
imperio.start();
// console.log("imperioFinished: ", imperio);
