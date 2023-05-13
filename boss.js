import { gerarNumero, per, money, audioPlayer, ammo } from "./script.js";
import {
  triggerChuvaMonark,
  startGame2,
  rodadas,
  tudo,
  wCoolDown,
  placarArena,
  numCartas,
  mainOpaque,
} from "/script.js";
import {
  spawnMonark,
  spawnVitor,
  areObj,
  populateArena,
  areWakeUp,
  areFull,
} from "/arena.js";
import { spawnLiberdade, spawnTank, areNoEnemies, areEmpty } from "./arena.js";
import { testePool, missOne, imperio } from "./waves.js";

let bossHealthP = document.getElementById("hb");
let progressP = document.getElementById("progress");
let healthPointsP = document.getElementById("healthPoints");
let bossRoomP = document.getElementById("bossRoom");
let healthWrapP = document.querySelector(".bossHealthWrap");
let bossP = () => bossRoomP.children[0];
let pickMonark = document.getElementById("pickMonark");
let pickVelha = document.getElementById("pickVelha");
let protector = document.getElementById("protector");
let main = document.getElementById("main");
let testP = document.getElementById("test");
let countdownP = document.getElementById("countdown");
let bodyP = document.getElementsByTagName("body")[0];

let cartaBossMonark =
  '<div id="cartaBossMonark" class="bossAnimation" data-card="boss"></div>';

// CONSTRUTOR BOSSES

export function toMonark(_cartaObj, _despawnTime) {
  let carta = _cartaObj;
  let cartaP = _cartaObj._thisCardP;
  let cargo = _cartaObj._cargoP;

  if (!carta.isNormal) return;

  // if (cartaP.id == "monark") return;
  cartaP.style.backgroundImage = "none";
  cartaP.id = "monark";
  cartaP.style.border = "1px solid black";
  carta.isMonark = true;

  cargo.textContent = "monark 💩";

  carta.energia = 0;
  carta._cargo = "carta-monark";
  carta.dmgBoss = false;
  carta._canBeDeleted = false;
  carta._despawn = _despawnTime;
  let poopCHN = document.createElement("audio");
  audioPlayer("poop.mp3", false, poopCHN, 0.4);
  if (_despawnTime) return;
  carta._despawn = gerarNumero(2, 8);
}

class Boss {
  constructor(_health, _fullHealth, _name) {
    this.name = _name;
    this.health = _health;
    this.fullHealth = _fullHealth;
    this.percentHealth = 100;
    this.dmgTaken = 0;
    this._coolDown = false;
    this._gotHitLastRound = [false, 0];
    this._CHN = document.createElement("audio");
    this._audioPoder = "bossPower.mp3";
    this._audioHitDefault = "bossHit.mp3";
    this._cartaP = false;
    this._imageHit = false;
    this._imageUlt = false;
    this._image = false;
  }

  imageHit() {
    if (this._imageHitCoolDown) return;

    let img = this._imageHit[gerarNumero(0, this._imageHit.length - 1)];

    this._cartaP.style.backgroundImage = img;
    this._cartaP.style.border = "4px dashed red";
    this._cartaP.classList.remove("bossAnimation");
    this._imageHitCoolDown = true;

    setTimeout(() => {
      this._cartaP.style.backgroundImage = this._image;
      this._cartaP.style.border = "5px solid red";
      this._cartaP.classList.add("bossAnimation");
      this._imageHitCoolDown = false;
    }, 450);
  }

  dmg(n) {
    if (this._isUlting) return;
    this.health -= n;
    this.dmgTaken += n;

    let vol;
    if (n < 100) {
      vol = 0.2;
    } else if (n < 400) {
      vol = 0.3;
    } else {
      vol = 0.8;
    }

    this.antiSpam();
    this.imageHit();
    // audioPlayer(this._audioHitDefault, false, this._CHN, vol);

    if (per(5)) {
      let faixa = this._audioHit[gerarNumero(0, this._audioHit.length - 1)];

      audioPlayer(faixa, true, this._CHN);
    }
    this.percentHealth = (this.health / this.fullHealth) * 100;

    if (this.health <= 0) {
      this.health = 0;

      bossDead();
      // return animatebossHealth(n);

      //   return (bossHealthP.value = this.health);
    } else {
      //   return (bossHealthP.value = this.health);
      // return animatebossHealth(n);
    }
  }

  antiSpam() {
    let delay = gerarNumero(750, 1800);
    let chance = 13;

    if (false) {
      setTimeout(
        () => {
          let obj = populateArena();

          obj ? (obj.isInvisible = true) : 0;
        },

        delay
      );
    }
  }

  summon() {
    // let delay = gerarNumero(750, 1800);
    // let chance
    // if(rDifficulty.value > 50){
    // chance = 5
    // } else {
    //   chance = 10
    // }
    // if (per(chance)) {
    //   setTimeout(
    //     () => {
    //       let obj =  populateArena()
    //       obj ? obj.isInvisible = true : 0
    //     },
    //     delay
    //   );
    // }
  }

  heal(n) {
    this.health += n;
    if (this.health > this.fullHealth) {
      this.health = this.fullHealth;
      // animatebossHealth();
    }
    // animatebossHealth();
  }

  set(n) {
    this.health = n;

    return (bossHealthP.value = this.health);
  }

  setFull(n) {
    this.fullHealth = n;
    return (bossHealthP.max = this.fullHealth);
  }

  stopAnimation(x) {
    if (x) {
      bossP().classList.remove("bossAnimation");
    } else {
      bossP().classList.add("bossAnimation");
    }
  }

  treme(x) {
    if (x) {
      bossP().classList.remove("bossAnimation");
      bossP().classList.add("critico");
    } else {
      bossP().classList.remove("critico");
      bossP().classList.add("bossAnimation");
    }
  }

  coolDown(n) {
    this._coolDown = true;

    setTimeout(() => {
      this._coolDown = false;
    }, n);
  }

  everyRoundDefault() {}
  everyRound() {
    this.everyRoundDefault();
  }
}



export let wave = {
  pool: undefined,
  id: 0,
  enemies: undefined,
  enemiesSpawned: undefined,
  enemiesToGo: undefined,
  enemiesKilled: 0,
  waveOn: false,
  lastWave: false,
  overallEnemiesKilled: 0,
  overallEnemies: 0,
  progress: 0,
  enemiesLevel: [],

  tick() {
    this.getProgress();
  },

  getProgress() {
    this.progress = (this.overallEnemiesKilled / this.overallEnemies) * 100;
  },

  setPool(_pool) {
    this.pool = _pool;
  },

  // toda rodada essa função é chamada
  getWave() {
    if (!boss) return;

    // se a wave estiver acontecendo
    if (this.waveOn) {
      this.run();

      // se a wave não estiver acontecendo chame uma wave do pool
    } else {
      //pega a wave do pol
      if (!areEmpty()) return;

      this.pool[0].start();

      this.overallEnemies = this.pool[0].totalNumOfEnemies;
      this.numOfWaves = this.pool[0].numOfWaves;
      this.id++;

      if (this.numOfWaves == this.id) {
        this.lastWave = true;
      }

      this.enemiesLevel = this.pool[this.id].level;
      this.enemies = this.pool[this.id].enemiesTotal;
      this.enemiesSpawned = 0;
      this.enemiesToGo = this.enemies;
      this.waveOn = true;
      this.enemiesKilled = 0;
      this.money = this.pool[this.id].money;
      this.cards = this.pool[this.id].cards;
      this.ammo = this.pool[this.id].ammo;
      this.spawnChance = this.pool[this.id].spawnChance;
      this.name = this.pool[this.id].name

      console.log(this);
    }
  },

  run() {
    //se acabou a onda
    if (this.enemiesToGo <= 0) {
      if (!areNoEnemies()) return;
      this.waveOn = false;

      console.log(this);
      console.log("WAVE ENDED");

      return;
      // se nao acabou a onda e tem espaço
    } else if (!areFull() && per(this.spawnChance)) {
      let waveObj = this.pool[this.id];

      waveObj.enemies[gerarNumero(0, waveObj.enemies.length - 1)]();
      this.enemiesSpawned++;
      this.enemiesToGo--;
      console.log(this);
      console.log("enemy added");
    } else {
      console.log(this);
      console.log("no space");
    }
  },

  popUpVictory() {
    mainOpaque();

    let popUpP = document.createElement("div");
    popUpP.id = "popup-victory";
    bodyP.appendChild(popUpP);

    let button = document.createElement("button");
    button.id = "popup-victory-btn";
    popUpP.appendChild(button);
    button.addEventListener("click", () => {

      if(current + 1 <= 9){
      
        console.log(current + 1);
        campanha.levels[ parseInt(current) + 1][0].locked = false
        // console.log(imperio);

      }
      localStorage.setItem("mySave", JSON.stringify(campanha))
      console.log(' ----------- THERE IS SAVE ----------- ');
     console.log(JSON.parse(localStorage.getItem('mySave')));
    //  console.log(campanha);
     console.log(' ----------- THERE IS SAVE ----------- ');
      window.location.assign('index.html')
      
    });

  },

  popUpSuccess() {
    if (this.lastWave) {
      this.popUpVictory();
      return;
    }

    // pop up que indica vitoria da wave
    mainOpaque();

    let popUpP = document.createElement("div");
    popUpP.id = "popup-success-wave";
    bodyP.appendChild(popUpP);

    let button = document.createElement("button");
    button.id = "popup-success-btn";
    popUpP.appendChild(button);
    button.addEventListener("click", () => {
      console.log(this);
      money.add(this.money);
      ammo.add(this.ammo);
      numCartas.add(this.cards);

      if (this.lastWave) {
        this.popUpVictory();
      } else {
        this.getWave();
        this.getWave();
      }

      popUpP.remove();
      mainOpaque(false);
    });

    let wavepassed = document.createElement("div");
    wavepassed.id = "popup-success-wavepassed";
    popUpP.appendChild(wavepassed);
    wavepassed.innerHTML = "ONDA " + this.id + " COMPLETADA";

    let reward = document.createElement("div");
    reward.id = "popup-success-reward";
    popUpP.appendChild(reward);
    // reward.innerHTML = 'ONDA ' + this.id+ ' COMPLETADA'

    let moneyP = document.createElement("div");
    moneyP.id = "popup-success-moneyP";
    reward.appendChild(moneyP);
    moneyP.innerHTML = "💰" + this.money;

    let ammoP = document.createElement("div");
    ammoP.id = "popup-success-ammoP";
    reward.appendChild(ammoP);
    ammoP.innerHTML = "⚔️" + this.ammo;

    let cardsP = document.createElement("div");
    cardsP.id = "popup-success-cardsP";
    reward.appendChild(cardsP);
    cardsP.innerHTML = "🃏" + this.cards;
  },
};

export let rDifficulty = {
  value: 0,

  update() {
    if (!boss) return;
    this.value = 100 - boss.percentHealth;
    //
  },
};

// LISTA DE BOSSES

export let boss;

function createMonark() {
  let bossClass = new Boss(15000, 15000, "monark");

  let monark = {
    _audioChuva: "trovao.mp3",
    _audioSpawn: ["monarkSpawn.mp3", "monarkSpawn1.mp3"],
    _audioHit: ["monarkHit.mp3", "monarkHit1.mp3"],
    _audioUlt: ["monarkUlt.mp3"],
    _audioVitorSpawn: ["vitorSpawn.mp3", "vitorSpawn1.mp3"],
    _audioLiberdadeSpawn: ["/liberdade/liberdadeSpawn.mp3"],
    _image: 'url("pics/monark/1.PNG")',
    _imageHit: [
      'url("pics/monark/hit1.PNG")',
      'url("pics/monark/hit2.PNG")',
      'url("pics/monark/hit3.PNG")',
      'url("pics/monark/hit4.PNG")',
    ],
    _imageUlt: 'url("pics/monark/ult1.PNG")',
    carta() {
      bossRoomP.innerHTML = cartaBossMonark;
    },

    ult(absolute) {
      let ultis = () => {
        let sorteio = gerarNumero(1, 2);
        // let sorteio = 1

        if (sorteio == 0) {
          this.chuvaDeMonark();
        } else if (sorteio == 1) {
          this.liberdadeDeExpresao();
        } else {
          this.vitorMetaforando();
        }
      };

      let chance = 1;

      let porcentagemVida = (this.health / this.fullHealth) * 10;
      chance = wave.progress;

      if (chance > 15 || absolute) chance = 15;
      console.log("chance: ", chance);


      chance = 4
      if (this._coolDown || this.hasTriggeredUlti) return;
      if (!per(chance)) return;

      let delayUltAfterRound = gerarNumero(5000, 12000);

      //debug

      let timeShaking = gerarNumero(1100, 3200);
      this.hasTriggeredUlti = true;

      // DELAY TO START SHAKING
      setTimeout(() => {
        this.treme(true);
        audioPlayer(this._audioPoder, true, this._CHN, 0.2);
        this.coolDown(15000 - chance * 100);
        this._cartaP.style.backgroundImage = this._imageUlt;
        this._isUlting = true;

        // SHAKING DELAY
        setTimeout(() => {
          this.treme(false);
          this.hasTriggeredUlti = false;
          this._cartaP.style.backgroundImage = this._image;
          this._isUlting = false;

          //debug
          ultis();
        }, timeShaking);
      }, delayUltAfterRound);
    },

    chuvaDeMonark() {
      for (let i = 0; i < 100; i++) {
        spawnMonark(true);
      }
      let notAttacked = true;
      areObj.map((x) => {
        if (x.cartaId == "monark") {
          x.isInvisible = false;
          x.poder();
          x.readyToAttack = true;

          if (notAttacked) {
            x.ataque(gerarNumero(50, 120));
            notAttacked = false;
          }
        }
      });

      audioPlayer(this._audioChuva, true, this._CHN, 0.1);
    },

    vitorMetaforando() {
      spawnVitor(true);
      let faixa =
        this._audioVitorSpawn[gerarNumero(0, this._audioVitorSpawn.length - 1)];
      audioPlayer(faixa, false, this._CHN);
    },

    liberdadeDeExpresao() {
      spawnLiberdade(true);
      let faixa =
        this._audioLiberdadeSpawn[
          gerarNumero(0, this._audioLiberdadeSpawn.length - 1)
        ];
      audioPlayer(faixa, false, this._CHN, 0.5);
    },
  };

  return (boss = Object.assign(bossClass, monark));
}

export function resetBoss() {
  boss = {};
}

let chosenBoss;
let countDownSpawnBoss = 10;

function startGame() {
  spawnBoss();

  protector.style.display = "none";
  main.style.display = "grid";
  testP.style.display = "block";
  startGame2();
}

function chooseMonark() {
  chosenBoss = "monark";
  startGame();
}
let popUpP = document.createElement("div");

export let map = {
  active: false,

  close(){
    closeMap()
  }

}

function closeMap(){
  popUpP.remove()
  mainOpaque(false)
  map.active = false
}
let campanha
function openMap(_mission) {
 
  if(JSON.parse(localStorage.getItem('mySave'))){
     campanha = JSON.parse(localStorage.getItem('mySave'))
     console.log(' ----------- THERE IS SAVE ----------- ');
     console.log(JSON.parse(localStorage.getItem('mySave')));
     console.log(' ----------- THERE IS SAVE ----------- ');

  } else {
     campanha = _mission
     console.log(' NO SAVE ');

  }


  map.active = true
  popUpP.id = "map";
  // let missionWrapP = document.getElementById('missionsWrap')
  let mapP = document.getElementById("map");

  bodyP.appendChild(popUpP);
  mainOpaque();

  popUpP.style.backgroundColor = campanha.bgColor;
  // console.log(missionWrapP);

  for (let i = 0; i < 10; i++) {
    let index = i + 1;
    let slot = document.getElementById("mission-" + index);
    popUpP.appendChild(slot);

    slot.children[0].style.backgroundImage = _mission.setMissionPics(index)
    slot.children[0].style.width = '128px'
    slot.children[0].style.height = '128px'
    slot.children[0].style.marginTop = '8px'
    slot.children[0].style.marginBottom = '8px'
    slot.children[0].style.border = '1px solid' + campanha.bgColor
    slot.children[0].style.backgroundSize = 'cover' 
    
    slot.children[1].innerHTML = campanha.levels[i][0].name
    slot.children[1].style.fontFamily = campanha.fontFamily
    slot.children[1].style.fontSize = campanha.fontSize

    if(campanha.levels[i][0].locked){
      slot.style.opacity = 0.6
      slot.children[2].innerHTML = '🔒'
      // slot.style.cursor = 'default'
    } else {
      slot.style.opacity = 1
      slot.children[2].innerHTML = ''
      // slot.style.cursor = 'pointer'
      slot.classList.add('selected')
    }

    slot.addEventListener('click',()=>{

      if(campanha.levels[i][0].locked || campanha.levels[i][0].active == false )return
      wave.setPool(_mission.levels[i])
      chooseMonark()
      closeMap()
      current = i
      console.log('current: ', current);

      


    })
    // console.log(_mission);
  }
}
let current
pickMonark.addEventListener("click", () => {
  openMap(imperio);
});

// pickVelha.addEventListener("click", chooseMonark);

let hasSpawned = false;

export function spawnBoss() {
  if (rodadas >= 10 && !hasSpawned) {
    if (chosenBoss == "monark") {
      createMonark();
    } else {
      return false;
    }

    // healthPointsP.textContent = wave.enemiesToGo;
    healthWrapP.classList.add("aparecer");
    boss.carta();

    hasSpawned = true;
    audioPlayer(
      boss._audioSpawn[gerarNumero(0, boss._audioSpawn.length - 1)],
      true,
      boss._CHN
    );

    boss._cartaP = bossRoomP.children[0];
  }
  // healthWrapP.className = 'aparecer'
}

// spawnBoss()

function bossDead() {}

let waveNameP = document.getElementById('wave-name')
export function animatebossHealth() {
  if (!boss) return;
  let style = Math.abs((wave.enemiesKilled / wave.enemies) * 100 - 100) + "%";
  // console.log('style: ', style);


  waveNameP.textContent = wave.name
  healthPointsP.textContent = "ONDA " + wave.id + " DE " + wave.numOfWaves;

  progressP.style.width = style;
}

let teclaDeckPronto = "KeyG";

document.addEventListener("keydown", (event) => {
  if (event.code == teclaDeckPronto) {
    //   deckPronto();
    location.reload();
  }
});
