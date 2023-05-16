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
import {
  spawnLiberdade,
  spawnTank,
  areEnemiesFromWave,
  areEmpty,
} from "./arena.js";
import { missOne, imperio, campanhaTeste } from "./waves.js";
import { marketObj } from "./market.js";

let bossHealthP = document.getElementById("hb");
let progressP = document.getElementById("progress");
let healthPointsP = document.getElementById("healthPoints");
let bossRoomP = document.getElementById("bossRoom");
let healthWrapP = document.querySelector(".bossHealthWrap");
let bossP = () => bossRoomP.children[0];
let pickMonark = document.getElementById("pickMonark");
let pickVelha = document.getElementById("pickVelha");
let pickTeste = document.getElementById("pickTeste");
let protector = document.getElementById("protector");
let main = document.getElementById("main");
let testP = document.getElementById("test");
let countdownP = document.getElementById("countdown");
let bodyP = document.getElementsByTagName("body")[0];
// let playButtonP = document.getElementById("play-button")

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

  summon() {}

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
  mission: undefined,
  id: -1,
  enemies: undefined,
  enemiesSpawned: undefined,
  enemiesToGo: undefined,
  enemiesKilled: 0,
  waveLoaded: false,
  lastWave: false,
  overallEnemiesKilled: 0,
  overallEnemies: 0,
  progress: 0,
  enemiesLevel: false,
  timeBeforeNextWave: 5000,

  tick() {
    animatebossHealth();
    this.getProgress();
    this.run();
  },

  getProgress() {
    this.progress = (this.overallEnemiesKilled / this.overallEnemies) * 100;
  },

  setPool(_pool, _campain, _missionFromSave, _entireSave) {
    this.mission = _pool;
    this.campain = _campain;
    this.save = _entireSave

    this.missionFromSave = _missionFromSave

    this.id = this.missionFromSave.waveToPlay
  },

  startSpawning() {
    let waveObj = this.mission.waves[this.id];
    this.isSpawning = true;

    this.spawnTime[0] * 1000;
    this.spawnTime[1] * 1000;

    let spawnTimeMulti = [this.spawnTime[0] * 1000, this.spawnTime[1] * 1000];
    let time = gerarNumero(spawnTimeMulti[0], spawnTimeMulti[1]);

    this.summonTimeout = setTimeout(() => {
      if (waveObj.boss) {
        if (per(this.bossSpawnChance) && this.bossTotal && this.boss) {
          waveObj.boss[gerarNumero(0, waveObj.boss.length - 1)]();
          this.bossTotal--;
          this.isSpawning = false;
          console.log("BOSS ADICIONADO");
          return;
        }
      } else {
        console.log("NÃO TEM BOSS NESSA ONDA");
      }

      console.log("tempo de spawn", time);

      if (waveObj.supports && per(waveObj.chanceNotSupport)) {
        waveObj.supports[gerarNumero(0, waveObj.supports.length - 1)]();
      } else {
        waveObj.enemies[gerarNumero(0, waveObj.enemies.length - 1)]();
        this.enemiesSpawned++;
        this.enemiesToGo--;
      }

      this.isSpawning = false;
      console.log("INIMIGO ADICIONADO");
    }, time);
  },

  betweenWavesCoolDown() {
    console.log("COOL DOWN ANTES DA PROXIMA ONDA COMEÇADO");

    setTimeout(() => {
      this.getWave();
      console.log("COOL DOWN ANTES DA PROXIMA ONDA TERMINADO");
    }, this.timeBeforeNextWave);
  },

  // toda rodada essa função é chamada
  getWave() {
    // se a wave nao estiver carregada, carregue-a
    if (!this.waveLoaded) {
      //pega a wave da missao na memoria

      console.log(this.id);

      healthWrapP.classList.add("aparecer");

      this.overallEnemies = this.mission.totalNumOfEnemies;
      this.numOfWaves = this.mission.numOfWaves;

      let timeBeforeArr = this.mission.waves[this.id].timeBeforeNextWave;
      if (!timeBeforeArr) {
        timeBeforeArr = [10, 15];
      }

      this.timeBeforeNextWave =
        gerarNumero(timeBeforeArr[0], timeBeforeArr[1]) * 1000;

      this.spawnTime = this.mission.waves[this.id].spawnTime;
      if (!this.spawnTime) {
        this.spawnTime = [5, 15];
      }

      if (this.mission.waves[this.id].level) {
        this.enemiesLevel = this.mission.waves[this.id].level;
      } else {

        this.enemiesLevel = false
        console.log("!!!!! MISSAO ESTA SEM LEVEL !!!!!");
        console.log("|!!!!! MISSAO ESTA SEM LEVEL !!!!!|");
      }
      this.enemies = this.mission.waves[this.id].enemiesTotal;
      this.enemiesSpawned = 0;
      this.enemiesToGo = this.enemies;
      this.waveLoaded = true;
      this.enemiesKilled = 0;
      this.money = this.mission.waves[this.id].money;
      this.cards = this.mission.waves[this.id].cards;
      this.ammo = this.mission.waves[this.id].ammo;
      this.spawnChance = this.mission.waves[this.id].spawnChance;
      this.name = this.mission.waves[this.id].name;
      this.bannedCard = this.mission.waves[this.id].bannedCard;
      this.levelId = this.mission.levelId;

      if (this.mission.waves[this.id].boss) {
        this.boss = this.mission.waves[this.id].boss;
        this.bossTotal = this.mission.waves[this.id].bossTotal;
        this.bossLevel = this.mission.waves[this.id].bossLevel;
        this.bossSpawnChance = this.mission.waves[this.id].bossSpawnChance;
      }

      if (this.numOfWaves <= this.id + 1) {
        this.lastWave = true;
        console.log("THIS IS THE LASTWAVE");
      }
      console.log("ACABEI DE PEGAR UMA NOVA ONDA DA MISSAO COM getWave()");
      console.log("ONDA CARREGADA", this);

      wave.startSpawning();
    }
  },

  run() {
    if (this.isSpawning) {
      // console.log("MOB ESTA PRESTE A SPAWNAR");
      return;
    }

    if (!wave.waveLoaded) {
      // console.log("NAO TEM ONDA CARREGADA");
      return;
    }

    //se acabou a onda
    if (this.enemiesToGo <= 0) {
      if (areEnemiesFromWave()) {
        // console.log(" 0 mobs para spawnar, mas faltam mobs para matar ");
        return;
      }
      this.waveLoaded = false;

      // console.log("SPAWNEI TODOS OS MOBS");

      return;
      // se nao acabou a onda e tem espaço
    } else if (!areFull()) {
      this.startSpawning();
    } else {
      // console.log("NAO CONSEGUI ADICIONAR MOB");
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
      if (current + 1 <= 9) {
        console.log(current + 1);

        let proximaMissao = loadedCampain.levels[parseInt(current) + 1];
        
        if (proximaMissao) {
          proximaMissao.locked = false;
        }
        

        window.location.assign("index.html");
        // console.log(imperio);
      }
      localStorage.setItem("mySave", JSON.stringify(loadedCampain));
      console.log(" ----------- THERE IS SAVE ----------- ");
      console.log(JSON.parse(localStorage.getItem("mySave")));
      //  console.log(loadedCampain);
      console.log(" ----------- THERE IS SAVE ----------- ");
    });
  },

  popUpSuccess(absulute) {
    if (this.ended) return;

    let hasMobFromWave = areObj.some((x) => x.isPartOfWave);

    // popUpFimDoJogo
    if (this.lastWave && areEmpty() && this.enemiesToGo <= 0) {
      this.popUpVictory();
      this.ended = true;
      return;
    }

    // pop up que indica vitoria da wave
    if ((!hasMobFromWave && this.enemiesToGo <= 0 && !this.lastWave) || absulute) {
      mainOpaque();
      this.ended = true;
      // console.trace();

      // upload this wave checkpoint ot save
      let thisLevelInSave = loadedCampain.levels[parseInt(current)]
        this.id++
        thisLevelInSave.waveToPlay = this.id
        localStorage.setItem("mySave", JSON.stringify(loadedCampain))
      let popUpP = document.createElement("div");
      popUpP.id = "popup-success-wave";
      bodyP.appendChild(popUpP);

      let button = document.createElement("button");
      button.id = "popup-success-btn";
      popUpP.appendChild(button);
      button.addEventListener("click", () => {
        money.add(this.money);
        ammo.add(this.ammo);
        numCartas.add(this.cards);

        popUpP.remove();
        this.betweenWavesCoolDown();
        mainOpaque(false);
        this.ended = false;
        healthWrapP.classList.remove("aparecer");

        console.log("ONDA DEPOIS DO POPUP ABAIXO:");
        console.log(this);
      });

      let wavepassed = document.createElement("div");
      wavepassed.id = "popup-success-wavepassed";
      popUpP.appendChild(wavepassed);
      let onda = this.id ;
      wavepassed.innerHTML = "ONDA " + onda + " COMPLETADA";

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
      ammoP.innerHTML = "💧" + this.ammo;

      let cardsP = document.createElement("div");
      cardsP.id = "popup-success-cardsP";
      reward.appendChild(cardsP);
      cardsP.innerHTML = "🃏" + this.cards;
    }
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
      return;
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

      chance = 4;
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

  close() {
    closeMap();
  },
};

function closeMap() {
  popUpP.remove();
  mainOpaque(false);
  map.active = false;
}
let loadedCampain;

function openMap(_campain) {
  console.log("ABRIR O MAPA");

  
  loadedCampain = JSON.parse(localStorage.getItem("mySave"));
 
   
  map.active = true;
  popUpP.id = "map";
  // let missionWrapP = document.getElementById('missionsWrap')
  let mapP = document.getElementById("map");

  bodyP.appendChild(popUpP);
  mainOpaque();

  popUpP.style.backgroundColor = loadedCampain.bgColor;
  // console.log(missionWrapP);

  for (let i = 0; i < loadedCampain.levels.length; i++) {
    let index = i + 1;
    let slot = document.getElementById("mission-" + index);
    popUpP.appendChild(slot);

    slot.children[0].style.backgroundImage = _campain.setMissionPics(index);
    slot.children[0].style.width = "128px";
    slot.children[0].style.height = "128px";
    slot.children[0].style.marginTop = "8px";
    slot.children[0].style.marginBottom = "8px";
    slot.children[0].style.border = "1px solid" + loadedCampain.bgColor;
    slot.children[0].style.backgroundSize = "cover";

    slot.children[1].innerHTML = loadedCampain.levels[i].name;
    slot.children[1].style.fontFamily = loadedCampain.fontFamily;
    slot.children[1].style.fontSize = loadedCampain.fontSize;
    slot.style.display = "flex";

    if (loadedCampain.levels[i].locked) {
      slot.style.opacity = 0.6;
      slot.children[2].innerHTML = "🔒";
      // slot.style.cursor = 'default'
    } else {
      slot.style.opacity = 1;
      slot.children[2].innerHTML = "";
      // slot.style.cursor = 'pointer'
      slot.classList.add("selected");
    }

    if (!loadedCampain.levels[i].active) {
      slot.style.opacity = 0.3;
      slot.children[2].innerHTML = "❌";
      // slot.style.cursor = 'default'
    } 

    slot.addEventListener("click", () => {
      if (
        loadedCampain.levels[i].locked ||
        loadedCampain.levels[i].active == false
      )
        return;
      wave.setPool(_campain.levels[i], _campain, loadedCampain.levels[i],loadedCampain);
      chooseMonark();
      closeMap();
      current = i;
      console.log("CAMPAIN", _campain);
      console.log("SAVE", loadedCampain);
      marketObj.canBeOpened(true);
      bodyP.style.overflowY = "visible";
    });
    // console.log(_campain);
  }
}
let current;
pickMonark.addEventListener("click", () => {
  openMap(imperio);
});

pickTeste.addEventListener("click", () => {
  openMap(campanhaTeste);
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
    // healthWrapP.classList.add("aparecer");
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

let waveNameP = document.getElementById("wave-name");
export function animatebossHealth() {
  if (!wave.waveLoaded) {
    return;
  }

  let style = Math.abs((wave.enemiesKilled / wave.enemies) * 100 - 100) + "%";
  // console.log('style: ', style);

  waveNameP.textContent = wave.name;
  let waveNum = wave.id + 1;

  healthPointsP.textContent = "ONDA " + waveNum + " DE " + wave.numOfWaves;

  progressP.style.width = style;
}

let teclaDeckPronto = "KeyG";

document.addEventListener("keydown", (event) => {
  if (event.code == teclaDeckPronto) {
    //   deckPronto();
    location.reload();
  }
});

function patch() {
  let save = JSON.parse(localStorage.getItem("mySave"));

  if (!save) return;
  
console.log(save);

  if(!save.saveInfo){
    localStorage.setItem("mySave", JSON.stringify(imperio));
    console.log('---SAVE OBSOLETO---');
    console.log('---RESETANDO SAVE---');
  } else {
    localStorage.setItem("mySave", JSON.stringify(save));
    console.log('---SAVE UP TO DATE---');
  }


  

  
}

window.onload = (event) => {
  patch();
};
