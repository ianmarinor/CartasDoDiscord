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
        active: true,

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
        enemies: [spawnMonark, spawnMenosCartas],
        level: [1, 1],
        money: 150,
        ammo: 5,
        cards: 10,
        spawnChance: 20,
        name: 'GENESIS'
      },

      {
        id: 2,
        enemiesTotal: 12,
        enemies: [spawnAwp, spawnSmoke],
        level: [1, 2],
        money: 100,
        ammo: 5,
        cards: 5,
        spawnChance: 90,
        name: 'EMBOSCADA'
      },

      {
        id: 3,
        enemiesTotal: 60,
        enemies: [spawnMonark],
        level: [1, 5],
        money: 75,
        ammo: 1,
        cards: 5,
        spawnChance: 100,
        name: 'CHUVA DE MONARK'
      },

      {
        id: 4,
        enemiesTotal: 15,
        enemies: [spawnMenosCartas, spawnSmoke],
        level: [5, 5],
        money: 200,
        ammo: 15,
        cards: 25,
        spawnChance: 5,
        name: 'DESERTO'
      },


      {
        id: 5,
        enemiesTotal: 20,
        enemies: [spawnCamarada, spawnTank],
        level: [2, 4],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 90,
        name: 'REVOLUÇÃO DOS TANKS'
      },
    ],
    // NIVEL 2
    [
      {
        notWave: true,
        numOfWaves: 6,
        progress: 0,
        totalNumOfEnemies: 0,
        name: 'ATOS',
        completed: false,
        locked: true,
        active: true,

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
        enemiesTotal: 15,
        enemies: [spawnAwp, spawnCamarada],
        level: [5, 5],
        money: 200,
        ammo: 15,
        cards: 25,
        spawnChance: 2,
        name: 'RAZORBACK'
      },

      

      {
        id: 2,
        enemiesTotal: 15,
        enemies: [spawnMenosCartas, spawnSmoke],
        level: [5, 5],
        money: 200,
        ammo: 15,
        cards: 25,
        spawnChance: 2,
        name: 'DESERTO II'
      },

      {
        id: 3,
        enemiesTotal: 18,
        enemies: [spawnMenosCartas, spawnCamarada],
        level: [3, 4],
        money: 50,
        ammo: 5,
        cards: 30,
        spawnChance: 95,
        name: 'ROUBO'
      },

      {
        id: 4,
        enemiesTotal: 25,
        enemies: [spawnCamarada, spawnTank],
        level: [3, 3],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 90,
        name: 'REVOLUÇÃO DOS TANKS II'
      },

      {
        id: 5,
        enemiesTotal: 30,
        enemies: [spawnCamarada, spawnTank, spawnSmoke, spawnAwp, spawnMonark, spawnMenosCartas],
        level: [2, 5],
        money: 200,
        ammo: 10,
        cards: 10,
        spawnChance: 90,
        name: 'FEIJOADA COMPLETA'
      },

      {
        id: 6,
        enemiesTotal: 70,
        enemies: [spawnMonark],
        level: [4, 5],
        money: 75,
        ammo: 5,
        cards: 5,
        spawnChance: 80,
        name: 'CHUVA DE MONARK II'
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
        active: false,
        

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
        enemiesTotal: 40,
        enemies: [spawnMenosCartas],
        level: [3, 4],
        money: 100,
        ammo: 5,
        cards: 20,
        spawnChance: 95,
        name: 'ROUBO II'
      },

      {
        id: 2,
        enemiesTotal: 40,
        enemies: [spawnSmoke,spawnSmoke,spawnCamarada,spawnMonark],
        level: [1, 3],
        money: 100,
        ammo: 5,
        cards: 20,
        spawnChance: 50,
        name: 'NEBLINA'
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
