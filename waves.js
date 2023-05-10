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

export let wavePool = [
  {
    notWave: true,
    numOfWaves: 5,
    progress: 0,
    totalNumOfEnemies: 0,

    getNumOfEnemies() {
      wavePool.map((x) => {
        if (!x.notWave) {
          this.totalNumOfEnemies += x.enemiesTotal;
        }
      });
    },

    start() {
      this.getNumOfEnemies();
    },
  },


  {
    id: 1,
    enemiesTotal: 6,
    enemies: [spawnMonark],
    level: [1,1],
    money: 50,
    ammo: 5,
    cards: 10,
    spawnChance: 33,
  },


  {
    id: 2,
    enemiesTotal: 6,
    enemies: [spawnAwp],
    level: [1,1],
    money: 75,
    ammo: 10,
    cards: 10,
    spawnChance: 70,
  },

  {
    id: 3,
    enemiesTotal: 10,
    enemies: [spawnAwp, spawnMenosCartas],
    level: [1,2],
    money: 200,
    ammo: 10,
    cards: 10,
    spawnChance: 20,
  },

  {
    id: 4,
    enemiesTotal: 35,
    enemies: [spawnMonark],
    level: [1,5],
    money: 200,
    ammo: 10,
    cards: 10,
    spawnChance: 90,
  },

  {
    id: 5,
    enemiesTotal: 8,
    enemies: [spawnCamarada, spawnTank],
    level: [2,4],
    money: 200,
    ammo: 10,
    cards: 10,
    spawnChance: 60,
  },
];
