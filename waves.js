import { spawnMenosCartas, spawnAwp,spawnCamarada,spawnDog,spawnLiberdade,spawnMonark,spawnSmoke,spawnTank,spawnVitor } from "./arena.js"


export let wavePool = [

    {
        numOfWaves: 5
    

    },

    {
        id: 1,
        enemiesTotal: 6,
        enemies: [
            spawnMonark
        ],
        money: 50,
        ammo: 5,
        cards: 10,
    },

    {
        id: 2,
        enemiesTotal: 12,
        enemies: [
            spawnAwp,
            spawnMonark,
            spawnCamarada
        ],
        money: 75,
        ammo: 10,
        cards: 10,
    },

    {
        id: 3,
        enemiesTotal: 10,
        enemies: [
            spawnAwp,
            spawnTank
        ],
        money: 200,
        ammo: 10,
        cards: 10,
    },

    {
        id: 4,
        enemiesTotal: 20,
        enemies: [
            spawnDog,
            spawnMonark,
            spawnCamarada,
            spawnMenosCartas,
            spawnAwp
        ],
        money: 200,
        ammo: 10,
        cards: 10,
    },

    {
        id: 5,
        enemiesTotal: 50,
        enemies: [
            spawnCamarada,
            spawnTank
        ],
        money: 200,
        ammo: 10,
        cards: 10,
    },


    
]





