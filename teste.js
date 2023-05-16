class Campanha {
  constructor(_Campanha) {}

  getnumberOfEnemies() {
    let somaDosInimigos = 0;

    // para cada **MISSÃO**
    for (let i = 0; i < this.levels.length; i++) {
      let missão = this.levels[i];

      missão.numberOfEnemies = missão.waves.reduce(
        (sum, wave) => sum + wave.enemies,

        0
      );
    }
  }
}

let foo = {
  bgColor: "red",

  levels: [
    {
      // criar metodo aqui
      numberOfEnemies: undefined,
      waves: [
        { enemies: 1 },
        { enemies: 3 },
        { enemies: 5 },
        { enemies: 1 },
        { enemies: 1 },
        { enemies: 1 },
        { enemies: 1 },
      ],
    },

    {
      numberOfEnemies: undefined,
      waves: [
        { enemies: 45 },
        { enemies: 3 },
        { enemies: 5 },
        { enemies: 10 },
        { enemies: 1 },
        { enemies: 1 },
        { enemies: 60 },
      ],
    },
  ],
};

foo = {
  maria: 25
}

let _saveInfo = {

  saveInfo: {
    builtVersion: 1,
    saveVersion: 1.5,
  }
  
};


let save = Object.assign(foo,_saveInfo)
// console.log(save);
