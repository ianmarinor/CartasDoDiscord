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

// MISSÃO IMPÉRIO
export let imperio = {
  bgColor: "#333f81",
  fontFamily: 'imperio',
  fontSize: '2em',

  setMissionPics(_index) {
    return 'url("/pics/imperio/' + _index + '.png")';
  },

  

  levels: [
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'BUONGIORNO',
        completed: false,
        locked: false,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemiesTotal: 2,
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 100,
      },

      {
        id: 2,
        enemiesTotal: 2,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 100,
      },

      {
        id: 3,
        enemiesTotal: 2,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 100,
      },

      {
        id: 4,
        enemiesTotal: 2,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 100,
      },

      {
        id: 5,
        enemiesTotal: 2,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 100,
      },
    ],
    // NIVEL 2
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'ATOS',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
    // NIVEL 3
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'BRIGAS',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
    // NIVEL 4
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'MICROFONE',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
    // NIVEL 5
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'RISADA',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
    // NIVEL 6
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'CAMINHO',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
    // NIVEL 7
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'FONES',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
    // NIVEL 8
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'TANK',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
    // NIVEL 9
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'BRASIL',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
    // NIVEL 10
    [
      {
        notWave: true,
        numOfWaves: 5,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'RAINHA',
        completed: false,
        locked: true,

        getNumOfEnemies() {
          missOne.map((x) => {
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
        enemies: [spawnMonark, spawnMenosCartas, spawnCamarada],
        level: [1, 1],
        money: 50,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
      },

      {
        id: 2,
        enemiesTotal: 3,
        enemies: [spawnTank],
        level: [1, 3],
        money: 75,
        ammo: 10,
        cards: 15,
        spawnChance: 50,
      },

      {
        id: 3,
        enemiesTotal: 10,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 33,
      },

      {
        id: 4,
        enemiesTotal: 20,
        enemies: [spawnMonark],
        level: [1, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 80,
      },

      {
        id: 5,
        enemiesTotal: 18,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 60,
      },
    ],
  ],
};

export let testePool = [
  {
    notWave: true,
    numOfWaves: 5,
    progress: 0,
    totalNumOfEnemies: 0,

    getNumOfEnemies() {
      testePool.map((x) => {
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
    enemiesTotal: 60,
    enemies: [
      spawnMonark,
      spawnMenosCartas,
      spawnCamarada,
      spawnAwp,
      spawnDog,
      spawnTank,
      spawnVitor,
      spawnLiberdade,
    ],
    level: [1, 1],
    money: 50,
    ammo: 5,
    cards: 10,
    spawnChance: 100,
  },
];
