import {
  emptyObj,
  escolherIntegrante,
  gerarNumero,
  per,
  efeitoCura,
  efeitoDano,
  elimCardInv,
  invObj,
  hpPlayer,
  numCartas,
  money,
  rodadas,
  audioPlayer,
  wCoolDown,
  globalStats,
  timer,
  debug
} from "./script.js";
import {
  boss,
  spawnBoss,
  resetBoss,
  toMonark,
  wave,
  rDifficulty,
} from "./boss.js";
import {
  menosClickBlueprint,
  camaradaBlueprint,
  tankBlueprint,
  dogBlueprint,
  blueprintBuilder,
} from "./domCards.js";
import { start } from "./modules/seedFabricator.js";
// import { wavePool } from "./waves.js";

export const are = document.getElementById("are");
const secret = document.getElementById("test");
const placarInimigoDano = document.getElementById("placarInimigoDano");
const placarInimigoWrap = document.getElementById("placarInimigoWrap");
const smokeP = document.getElementById("smoke");

const empty0 = are.children[0];
const empty1 = are.children[1];
const empty2 = are.children[2];
const empty3 = are.children[3];
const empty4 = are.children[4];
const empty5 = are.children[5];
const empty6 = are.children[6];
const empty7 = are.children[7];
const empty8 = are.children[8];
const empty9 = are.children[9];

export let smokeOnInv = {
  status: false,
  weight: 0,

  coolDown() {
    let smokeTime = 18000;

    setTimeout(() => this.smoke(false), smokeTime);
  },

  smoke(_trigger, _weight) {
    if (_trigger == undefined) {
      return;
    }

    let weight = _weight;
    let appearing = false;
    let disappearing = false;

    if (_trigger === true && this.status === false) {
      this.status = undefined;
      smokeP.style.display = "block";

      let opacityValue = 10;
      appearing = true;

      let animationSmoke = setInterval(() => {
        if (opacityValue == 99 || disappearing) {
          clearInterval(animationSmoke);
          appearing = false;
          this.status = true;
          smokeP.style.opacity = "0." + opacityValue;
          this.weight = weight;
          this.coolDown();
        }

        smokeP.style.opacity = "0." + opacityValue;
        opacityValue++;
      }, 35);
    } else if (_trigger === false && this.status === true) {
      this.status = undefined;
      let opacityValue = 99;
      disappearing = true;

      let animationSmoke = setInterval(() => {
        if (opacityValue == 10 || appearing) {
          clearInterval(animationSmoke);
          disappearing = false;
          this.status = false;
          smokeP.style.opacity = "0." + opacityValue;
          smokeP.style.display = "none";
        }
        smokeP.style.opacity = "0." + opacityValue;
        opacityValue--;
      }, 35);
    }
  },
};

let arenaTarget = 0

export function chooseTargetArena() {
  let pool = [];

  
    areObj[arenaTarget]._exposto = false
  


  areObj.map((x) => {
    
      pool.push(x._targetPoint);
    
  });

  arenaTarget = pool.indexOf(Math.max(...pool));
  // console.log(pool);
  // console.log("target: ", arenaTarget);

  if(!areObj[arenaTarget].empty){
    areObj[arenaTarget]._exposto = true
  }
  
}

export function areDidHit(_dmgDealer) {
  return;
  if (_dmgDealer && _dmgDealer.cartaId == "sentry" && per(80)) return;

  setTimeout(() => arenaAtaque(), 920);
}

export function areWakeUp() {
  areObj.map((x) => {
    if (!x.empty && x.cartaId != "tank" && !x.miniBoss && !x.isInvisible) {
      x.readyToAttack = true;
    }
  });
}

export function arenaKill(){

  areObj.map(
    (x)=>{
      if(!x.empty){
        x.kill()
      }
    }
  )

}

export function areReveal() {
  areObj.map((x) => {
    if (x.isInvisible && !x.empty) {
      if (x._attackAtSpawn) {
        x.readyToAttack = true;
        console.log(x);
      }

      x.isInvisible = false;
    }
  });
  updatePlacarInimigo();
}

export function areNoEnemies() {
  return areObj.every((x) => x.empty);
}

export function areFull() {
  return areObj.every((x) => !x.empty);
}

export function areEmpty() {
  return areObj.every((x) => x.empty);
}

export function arenaAtaque() {
  //QUEM ESTIVER PRONTO, ATAQUE

  let prontosParaAtaque = [];

  //COLOCAR CARTAS QUE ATACAM EM UMA ARRAY
  areObj.map((x) => {
    if (x.empty || x.isInvisible) return;
    x.hasJustAttacked = false;
    if (x.readyToAttack) {
      prontosParaAtaque.push(x);
    }
  });

  //ATACAR COM DELAY

  if (prontosParaAtaque == 0) {
    fiquemProntos();
  } else {
    wCoolDown.set(true);

    let i = 0;

    let attackComDelay = setInterval(() => {
      if (i > prontosParaAtaque.length - 1) {
        clearInterval(attackComDelay);
        wCoolDown.set(false);
        fiquemProntos();
        return;
      }

      prontosParaAtaque[i].autoAtaque();

      i++;
    }, 350);
  }

  //FIQUEM PRONTOS, SE NAO ACABARAM DE ATACAR
  function fiquemProntos() {
    areObj.map((x) => {
      if (x.isInvisible) return;
      x.getReady();
    });
    updatePlacarInimigo();
  }

  // updatePlacarInimigo()
}

export function progressBar(_value, _max, _bgColor, _progressColor) {
  let value = _value;
  let max = _max;

  let bgColor = _bgColor;
  let progressColor = _progressColor;

  !bgColor ? (bgColor = "") : 0;
  !progressColor ? (progressColor = "") : 0;

  let width = (value / max) * 100 + "%";

  let bar =
    `<div id="bgProgress" style=" background-color:` +
    bgColor +
    `" > <div id="progressBar" style=" width:` +
    width +
    `; background-color:` +
    progressColor +
    `   "> </div> </div>`;
  return bar;
}

export let areObj;

let hasPlayed = false;
export function arenaByRound() {
  hasPlayed = false;
}

export function updatePlacarInimigo(_audio) {
  return;
  let drumAu = "alertaDano.mp3";
  let mGAu = "alertaDano2.mp3";
  let placarAudioChannel = document.createElement("audio");
  let dmgTotal = 0;

  let efeitos = "";

  areObj.map((x) => {
    if (x._doesAttack && x.readyToAttack) {
      dmgTotal += x.dano;
    } else if (!x._doesAttack && x.readyToAttack) {
      // efeitos = efeitos + "<br>" + x.emoji;
      efeitos = efeitos + x.emoji;
    }
  });

  placarInimigoWrap.children[1].children[0].innerHTML = "";
  placarInimigoDano.children[0].textContent = dmgTotal;
  if (dmgTotal == 0 && efeitos == "") {
    placarInimigoDano.style.opacity = "0.2";
    placarInimigoDano.children[1].style.opacity = "0.6";
    placarInimigoDano.children[0].style.color = "wheat";
    placarInimigoWrap.style.backgroundColor = "green";
    placarInimigoWrap.style.opacity = "0.2";
    placarInimigoWrap.style.border = "solid 1px black";
    hasPlayed = false;
  } else if (dmgTotal < 20 && efeitos == "") {
    placarInimigoDano.style.opacity = "0.9";
    placarInimigoDano.children[1].style.opacity = "0.6";
    placarInimigoDano.children[0].style.color = "black";
    placarInimigoWrap.style.backgroundColor = "#dfa506";
    placarInimigoWrap.style.opacity = "0.9";
    placarInimigoWrap.style.border = "solid 2px black";

    if (hasPlayed || _audio === false) return;
    audioPlayer(drumAu, true, placarAudioChannel);
    hasPlayed = true;
  } else if (dmgTotal > 19 || efeitos != "") {
    placarInimigoWrap.style.backgroundColor = "red";
    placarInimigoWrap.style.opacity = "1";
    placarInimigoWrap.style.border = "solid 3px yellow";

    if (dmgTotal != 0) {
      placarInimigoDano.style.opacity = "1";
      placarInimigoDano.children[1].style.opacity = "1";
      placarInimigoDano.children[0].style.color = "wheat";
    } else {
      placarInimigoDano.style.opacity = "0.2";
      placarInimigoDano.children[1].style.opacity = "0.6";
      placarInimigoDano.children[0].style.color = "wheat";
    }
    if (efeitos != "") {
      placarInimigoWrap.children[1].children[0].innerHTML = efeitos;
    }
    if (hasPlayed || _audio === false) return;
    audioPlayer(mGAu, true, placarAudioChannel, 0.85);
    hasPlayed = true;
  }
}

class Inimigo {
  constructor(card) {
    //unique
    this.cartaId = card.cartaId;
    this.nome = card.nome;
    this.energia = card.energia;
    this.dano = card.dano;
    this.emoji = card.emoji;
    this.allyEmoji = card.allyEmoji;
    this.retrato = card.retrato;
    this.retrato2 = card.retrato2;
    this.cargo = card.cargo;
    this.hp = card.hp;
    this.hashp = true;
    this.maxHealth = card.maxHealth;
    this.attackChance = 15;
    this.isInvisible = false;

    //defaults
    this.empty = false;
    this._level = false;
    this._hasdmg = true;
    this._dead = false;
    this._place = false;
    this._thisCardP = false;
    this._cfgAdded = false;
    this._parent = false;
    this._defaultEmoji = "⚡";
    this._defaultEmojiDano = "💥";
    this._parentP = false;
    this._money = false;
    this._uber = false;
    this._doesAttack = true;
    this._attackAtSpawn = false;
    this._critico = false;
    this._canBeCritic = true;
    this._poderUsing = false;
    this._despawn = false;
    this._uber = false;

    this._rightCard = false;
    this._leftCard = false;
    this._fullHp = true;
    this._buff = 0;
    this._mit = 0;
    this._dmgTaken = 0;
    this._dmgDone = 0;
    this._totalHp = 0;
    this._hasUlti = false;
    this._exposto = false;
    this.tank = false;

    this.isPartOfWave = true;
    this._coolDownNatural = 35;
    this._targetPoint = 500;

    //audio
    this._CHN = document.createElement("audio");

    //DOM
    this._thisCardP = false;

    this._nomeP = false;
    this._cidadeP = false;
    this._retratoP = false;
    this._cargoP = false;

    this._energiaP = false;
    this._hpP = false;
    this._buttonP = false;
    this._seloP = false;
  }

  audioSpawn(_vol) {
    let vol;

    if (typeof _vol == "number") {
      vol = _vol;
    } else {
      vol = 1;
    }

    audioPlayer(this._audioSpawn, false, this._CHN, vol);
  }

  changeRetrato(img) {
    let retrato = this._thisCardP.children[1];
    retrato.style.backgroundImage = "url('pics/" + img + "')";
  }

  levelSetter(_level) {
    // let life = wave.progress
    // console.log(wave.enemiesLevel);

    if (boss) {
      this._level = gerarNumero(wave.enemiesLevel[0], wave.enemiesLevel[1]);
    } else {
      this._level = 1;
    }

    if(this.miniBoss){
     if(per(15)){
      this._level = 4 
     } else {
      this._level = gerarNumero(1,3)
     }
    }

    this.levelPrint();
  }

  levelCfg() {}

  cfgDefault() {
    if (this.miniBoss) {
      this.isPartOfWave = false;
    }
  }

  place() {
    this._parent = areObj;
    this._parentP = are;

    this._place = this._parent.indexOf(this);
    this._thisCardP = this._parentP.children[this._place];

    if (this._place > 0) {
      this._leftCard = this._place - 1;
    } else {
      this._leftCard = false;
    }

    if (this._place < 5) {
      this._rightCard = this._place + 1;
    } else {
      this._rightCard = false;
    }

    this._thisCardP = this._parentP.children[this._place];
    this._nomeP = this._thisCardP.children[0].children[0];
    this._cidadeP = this._thisCardP.children[0].children[1];
    this._retratoP = this._thisCardP.children[1];
    this._cargoP = this._thisCardP.children[2];

    this._energiaP = this._thisCardP.children[3].children[0];
    this._hpP = this._thisCardP.children[3].children[1];

    this._place = this._parent.indexOf(this);
    this._displayP = this._thisCardP.children[3];
    this._seloP = this._thisCardP.children[5];
    this._levelP = this._thisCardP.children[6];

    if (this._place > 0) {
      this._leftCard = this._parentP.children[this._place - 1];
      this._leftCardIndex = this._place - 1;
      this._leftObj = this._parent[this._place - 1];
    } else {
      this._leftCard = false;
      this._leftCardIndex = null;
      this._leftObj = false;
    }

    if (this._place < 5) {
      this._rightCard = this._parentP.children[this._place + 1];
      this._rightCardIndex = this._place + 1;
      this._rightObj = this._parent[this._place + 1];
    } else {
      this._rightCard = false;
      this._rightCardIndex = null;
      this._rightObj = false;
    }

    if (this._exposto) {
      this._seloP.textContent = "🎯";
    } else {
      this._seloP.textContent = "";
    }

    if (this._stunned) {
    }
  }

  setHp(n) {
    this.hp = n;
    this.maxHealth = n;
  }

  heal(n) {
    if (this.hp == this.maxHealth) return;

    if (n == 0) return;

    this.hp += n;
    efeitoCura(this);
    if (this.hp >= this.maxHealth) {
      this._fullHp = true;
      this.hp = this.maxHealth;
    }
    return true;
  }

  critico(trigger) {
    if (trigger == undefined || trigger) {
      if (!this._canBeCritic || this._critico || this._superCritico) return;
      this._critico = true;
      this.dano *= 2;
      this.energia *= 2;
    } else if (trigger == false) {
      this._critico = false;
      this.dano = Math.trunc(this.dano / 2);
      this.energia = Math.trunc(this.energia / 2);
    }
  }

  superCritico(trigger) {
    if (trigger) {
      if (this._superCritico || !this._canBeCritic) return;
      this._superCritico = true;
      this.dano *= 6;
    } else {
      this._superCritico = false;
      this.dano = Math.trunc(this.dano / 6);
    }
  }

  desinfectar() {
    if (!this.infected) return;
    //devolver styles
    this._thisCardP.style.backgroundColor = this.previousCartaBackgroundColor;
    this._thisCardP.style.backgroundImage = this.previousCartaBackgroundImage;
    this._cargoP.style.visibility = "visible";
    this._thisCardP.style.border = this.previousBorder;
    // tirar classes
    this._thisCardP.children[0].classList.remove("float");
    this._thisCardP.children[3].children[2].classList.remove("float");
    this._hpP.classList.remove("float");
    this._energiaP.classList.remove("float");
    //devolver obj values
    this.hp = this.previousHp;
    this.maxHealth = this.previousMaxHealth;
    this.dano = this.previousDano;
    this.energia = this.previousEnergia;

    this.infected = false;
  }

  didHit() {}

  dmg(n, absolute, _dmgDealer) {
    if (this.isInvisible && !absolute) return [0];

    efeitoDano(this);

    if (this._uber && !absolute) return [0];

    if (this.hashp == false) {
      this.kill();
      return;
    }

    this._fullHp = false;

    let danoRealRecebido;

    if (n > this.hp) {
      danoRealRecebido = this.hp;
      this._dmgTaken += this.hp;
    } else {
      danoRealRecebido = n;
      this._dmgTaken += n;
    }

    globalStats.totalDmgDelt += this._dmgTaken;

    this.hp -= n;

    let multiplicadorBossDano = 2.5;

    if (rDifficulty.value > 33) {
      multiplicadorBossDano = 3.5;
    }

    if (boss) {
      boss.dmg(Math.floor(danoRealRecebido / multiplicadorBossDano));
    }

    this._totalHp = this.hp;

    if (this._totalHp <= 0) {
      this.hp = 0;
      this.kill();
    }
    this.didHit(_dmgDealer);
    areDidHit(_dmgDealer);

    console.log();

    return [this._dmgTaken];
  }

  everyRound() {}

  getReady() {
    if (per(this.attackChance) && !this.hasJustAttacked) {
      this.readyToAttack = true;
    }
  }

  autoAtaque() {
    if (!this.isInvisible) {
      if (this._doesAttack) {
        this.primaryAttack();
      } else {
        this.poder();
        this.readyToAttack = false;
      }
    }
  }

  primaryAttack() {
    this.ataque(this.dano);
    this.readyToAttack = false;
  }
  didKill() {}
  kill(absolute) {
    if (!this._parentP) return;

    this.didKill();

    if (!absolute) {
      money.add(this._money);
    }

    elimCardAre(this._thisCardP);
    this._dead = true;

    if (this.isPartOfWave) {
      wave.enemiesKilled++;
      wave.overallEnemiesKilled++;
    }

    

      // pop up victory
      wave.popUpSuccess();
    
  }

  ataque(dmg) {
    let dano;

    if (dmg) {
      dano = dmg;
    } else {
      dano = this.dano;
    }

    let invAllEmpty = invObj.every((x) => x.isInvisible == true);

    if (invAllEmpty) {
      hpPlayer.remove(dano);
    } else {
      //se houver  exposto
      if (invObj.some((x) => x._exposto && !x.isInvisible)) {
        for (let i = 0; i < 1000; i++) {
          let slot = gerarNumero(0, 5);

          if (invObj[slot]._exposto && !invObj[slot].isInvisible) {
            let vitima = invObj[slot];

            vitima.dmg(dano, false, this);

            this._dmgDone += dano;

            return true;
          }
        }

        //se houver tank
      } else if (invObj.some((x) => x.tank)) {
        for (let i = 0; i < 100; i++) {
          let slot = gerarNumero(0, 5);
          let carta = invObj[slot];

          if (carta.tank && !carta.isInvisible) {
            let vitima = invObj[slot];
            vitima.dmg(dano, false, this);
            this._dmgDone += dano;

            return true;
          }
        }

        //se houver especias
      } else if (invObj.some((x) => x.especial)) {
        for (let i = 0; i < 100; i++) {
          let slot = gerarNumero(0, 5);
          let carta = invObj[slot];

          if (carta.especial && !carta.isInvisible) {
            let vitima = invObj[slot];
            vitima.dmg(dano, false, this);
            this._dmgDone += dano;

            return true;
          }
        }

        // caso so normais
      } else {
        for (let i = 0; i < 100; i++) {
          let slot = gerarNumero(0, 5);
          let carta = invObj[slot];

          if (!carta.isInvisible) {
            let vitima = invObj[slot];
            vitima.dmg(dano, false, this);
            this._dmgDone += dano;

            return true;
          }
        }
      }
    }
  }

  defaultEveryRound() {
    this.desinfectar();

    if (this._despawn) {
      this._despawn--;
      this._despawn == 1 ? this.kill(true) : 0;
    }
  }

  print() {
    this.place();

    let parentP = this._parentP;

    let hp = this._hpP;
    let energia = parentP.children[this._place].children[3].children[0];
    let cargo = parentP.children[this._place].children[2];
    let moneyP = parentP.children[this._place].children[3].children[2];

    if (this.hashp === true) {
      this._totalHp = this.hp + this._buff;
      hp.textContent = this._totalHp + "❤️";
    }

    if (this._hasdmg === true && this.miniBoss) {
      energia.textContent = this.dano + "💚";
    } else if (this._hasdmg === true) {
      energia.textContent = this.dano + "💀";
    } else {
      energia.textContent = this.energia + this.emoji;
    }

    if (this.emojiHp) {
      hp.textContent = this.hp + this.emojiHp;
    }

    if (this.readyToAttack) {
      this._thisCardP.classList.add("critico");
    } else {
      this._thisCardP.classList.remove("critico");
    }

    if (this._coolDownNatural && !this.coolDownStarted && !this._dead) {
      this._coolDown = this._coolDownNatural;

      this.startCoolDown();
      this.coolDownStarted = true;
    }

    if (this._critico || this._superCritico) {
      energia.classList.add("critico");
    } else {
      energia.classList.remove("critico");
    }

    if (!this._levelCfgAdded) {
      this.levelSetter();
      this.levelCfg();
      this.levelPrint();
      this._levelCfgAdded = true;
    }

    if (!this._cfgDefaultAdded) {
      this.cfgDefault();
      this._cfgDefaultAdded = true;
    }

    if (!this._cfgAdded) {
      this.cfg();
      this._cfgAdded = true;
    }

    if (this.isInvisible) {
      this._thisCardP.style.opacity = "0.16";
    } else {
      this._thisCardP.style.opacity = "1";
    }

    this.tick ? this.tick() : 0;
  }

  startCoolDown() {
    let parentP = this._parentP;
    let moneyP = parentP.children[this._place].children[3].children[2];
    let drumAu = "alertaDano.mp3";
    let placarAudioChannel = document.createElement("audio");
    if (!this._coolDownNatural) return;

    let oneSec = 1000;
    let timer = setInterval(() => {
      if (this._coolDown > 4) {
        this.readyToAttack = false;
      } else {
        this.readyToAttack = true;
      }

      if (this._coolDown == 4) {
        audioPlayer(drumAu, true, placarAudioChannel);
      }
      if (this._coolDown <= 1) {
        this._coolDown = this._coolDownNatural;
        this.autoAtaque();
      }

      if (this._dead) {
        clearInterval(timer);
      }

      this._coolDown--;
      moneyP.textContent = this._coolDown;
    }, oneSec);
  }

  levelPrint() {
    let emojis = [
      "",
      "1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣",
      "🔟",
    ];

    this._levelP.textContent = emojis[this._level];
    // this._levelP.textContent = 'adfdadg'
  }

  targetPointSetter(_targetPoint) {

    if (per(50)) {
      this._targetPoint = _targetPoint + gerarNumero(0, 12);
    } else {
      this._targetPoint = _targetPoint - gerarNumero(0, 12);
    }

     if (this._targetPoint < 1) {
      this._targetPoint = 1;
    }



  }
}

// cfg() {}

export function elimCardAre(x) {
  let slot;

  if (x == are.children[0]) {
    are.replaceChild(empty0, x);
    slot = 0;
  } else if (x == are.children[1]) {
    are.replaceChild(empty1, x);
    slot = 1;
  } else if (x == are.children[2]) {
    are.replaceChild(empty2, x);
    slot = 2;
  } else if (x == are.children[3]) {
    are.replaceChild(empty3, x);
    slot = 3;
  } else if (x == are.children[4]) {
    are.replaceChild(empty4, x);
    slot = 4;
  } else if (x == are.children[5]) {
    are.replaceChild(empty5, x);
    slot = 5;
  } else if (x == are.children[6]) {
    are.replaceChild(empty6, x);
    slot = 6;
  } else if (x == are.children[7]) {
    are.replaceChild(empty7, x);
    slot = 7;
  } else if (x == are.children[8]) {
    are.replaceChild(empty8, x);
    slot = 8;
  } else if (x == are.children[9]) {
    are.replaceChild(empty9, x);
    slot = 9;
  }

  areObj[slot] = emptyObj;

  return slot;
}

let monark = {
  cartaId: "monark",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 3,
  _attackAtSpawn: true,
  _doesAttack: true,
  _despawn: 60,
  _audioSpawn: "monark.mp3",
  _CHN: document.createElement("audio"),
  hp: 10,
  maxHealth: 10,
  dano: 5,
  emoji: "💩",
  attackChance: 15,
  _coolDownNatural: 15,

  cfg() {
    audioPlayer(this._audioSpawn, true, this._CHN, 0.4);
    this.targetPointSetter(350);
  },

  tick() {},

  levelCfg() {
    this._despawnTime = gerarNumero(3, 8) * this._level;
    this.dano = gerarNumero(3, 4);

    this.dano *= this._level;
    this.setHp(this.hp * this._level);
    this.attackChance = this.attackChance * this._level;

    this._money = this._money * this._level;
  },

  everyRound() {

  },

  didKill() {
    this.poder();
  },

  poder() {
    let despawnTime;

    if (boss) {
      if (boss.percentHealth < 10) {
        despawnTime = gerarNumero(25, 50);
      } else if (boss.percentHealth < 25) {
        despawnTime = gerarNumero(18, 23);
      } else if (boss.percentHealth < 50) {
        despawnTime = gerarNumero(13, 18);
      } else if (boss.percentHealth < 75) {
        despawnTime = gerarNumero(8, 13);
      } else {
        despawnTime = false;
      }
    } else {
      despawnTime = false;
    }

    let temNormal = invObj.some((x) => x.isNormal);

    if (temNormal) {
      for (let i = 0; i < 99; i++) {
        let slot = invObj[gerarNumero(0, 5)];
        if (slot.isNormal && !slot.isMonark) {
          setTimeout(() => {
            toMonark(slot, this._despawnTime);
          }, 250);
          break;
        } else if (slot.isNormal && slot.isMonark) {
          slot._despawn += this._despawnTime;
          break;
        }
      }
    }
  },
};

let menosCartas = {
  cartaId: "-cartas",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 5,
  _doesAttack: false,
  _hasdmg: false,
  _audioSpawn: "menosCartas.wav",
  energia: "",
  emoji: "🃏",
  hp: 33,
  maxHealth: 33,
  dano: false,
  attackChance: 15,
  especial: true,
  _attackAtSpawn: false,

  levelCfg() {
    this.energia = gerarNumero(3, 8);

    this.energia *= this._level;
    this.setHp(this.hp * this._level);
    this.attackChance = this.attackChance * this._level;
    this._money = this._money * this._level;
  },

  cfg() {
    if (per(0.1)) {
      this._cargoP.textContent = "EVIL";
      this.energia = this.energia * 10;
      this.changeRetrato("menosCartasEvil.gif");
      this.attackChance = this.energia;
      this.setHp(this.energia * 2);
    }

    audioPlayer(this._audioSpawn, true, this._CHN, 0.1);
    this.targetPointSetter(445)
  },

  poder() {
    numCartas.remove(this.energia);
    this.ataque(1);
  },
};

let camarada = {
  cartaId: "camarada",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 10,
  _doesAttack: false,
  _hasdmg: false,
  _audioSpawn: "comunaShort.mp3",
  energia: "",
  emoji: "☭",
  hp: 50,
  maxHealth: 50,
  dano: false,
  attackChance: false,
  especial: true,
  _canBeCritic: false,
  _attackAtSpawn: true,
  _coolDownNatural: 7,

  levelCfg() {
    this.setHp(this.hp * this._level);
    this.attackChance = this.attackChance * this._level;

    this.healValue = gerarNumero(15, 35);

    this.healValue = this.healValue * this._level;
    this._money = this._money * this._level;
  },

  cfg() {
    this._energiaP.style.visibility = "hidden";

    let frases = [
      "ODIO DE CLASSE!!!",
      "MAIS MÉDICOS",
      "SAÚDE PARA TODOS!",
      "RESISTAM CAMARADAS!",
      "HASTA LA VICTORIA!",
    ];

    this._cargoP.innerHTML = frases[gerarNumero(0, frases.length - 1)];
    this._cargoP.style.fontSize = "65%";
    this.audioSpawn(0.5);
    this.targetPointSetter(550)
  },

  tick() {},

  poder() {
    let borderBlink = () => {
      this._thisCardP.style.border = "5px solid cyan";

      setTimeout(() => {
        this._thisCardP.style.border = "2px solid red";
      }, 850);
    };

    areObj.map((x) => {
      if (!x.empty) {
        x.heal(this.healValue);
      }
    });
    borderBlink();
  },
};

let tank = {
  cartaId: "tank",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 30,
  _doesAttack: false,
  _hasdmg: true,
  _audioSpawn: "tank.mp3",
  energia: "",
  emoji: "",
  hp: 300,
  maxHealth: 300,
  dano: 130,
  attackChance: false,
  ulti: 0,
  maxUlti: 50,
  tank: true,
  _CHN: document.createElement("audio"),
  _attackAtSpawn: false,
  _coolDownNatural: false,
  _doesAttack: true,

  levelCfg() {
    this.dano = gerarNumero(85, 97);

    this.dano *= this._level;
    this.setHp(this.hp * this._level);

    this.maxUlti = Math.trunc(this.maxUlti / this._level);
    this._money = this._money * this._level;
  },

  cfg() {
    this.audioSpawn(0.3);

    if (per(70)) {
      audioPlayer("tank/tankSpawn.mp3", false, this._CHN, 0.2);
    }
    this.targetPointSetter(700)
  },

  tick() {
    this._cargoP.innerHTML = progressBar(
      this.ulti,
      this.maxUlti,
      "gray",
      "#cf6a32"
    );

    if (this._coolDownNatural) {
      this._cargoP.innerHTML = progressBar(
        this.ulti,
        this.maxUlti,
        "gray",
        "red"
      );
    }

    if (!this.hasStartedWalking) {
      this.walk();
      this.hasStartedWalking = true;
    }
  },

  walk() {
    this.interval = setInterval(() => this.primaryAttack(), 2420);
  },

  primaryAttack() {
    if (this.ulti >= this.maxUlti) {
      this._coolDownNatural = 11;
      this._doesAttack = false;
      clearInterval(this.interval);

      if(!this._dead){

        audioPlayer("tank/tankUltReady.mp3", false, this._CHN, 0.3);
      }

      return;
    }

    let ultiRate = gerarNumero(2, 3);

    if (this.ulti - this.maxUlti <= 3) {
      ultiRate = 1;
    }

    this.ulti += ultiRate;

    if (this.ulti >= this.maxUlti) {
      this.ulti = this.maxUlti;
    }
  },

  poder() {
    console.log("kaboom");
    this.ataque();
    invObj.map((x) => {
      x.dmg(Math.trunc(this.dano / 5));
    });

    this.kill(true);

    console.trace();
  },
};

let dog = {
  cartaId: "dog",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 10,
  _attackAtSpawn: true,
  _doesAttack: true,
  _audioSpawn: "dog.mp3",
  attackChance: 15,
  isPartOfWave: false,
  hp: 50,
  maxHealth: 50,
  dano: 8,
  _coolDownNatural: 12,

  tick() {
    let vitor = areObj.some((x) => x.cartaId == "vitor");

    if (vitor) {
      this.vitor = true;
      // this.critico(true);
      this._thisCardP.style.backgroundImage = `linear-gradient(180deg,rgba(0, 0, 0, 0.9),rgba(12, 3, 30, 0.4),rgba(0, 0, 0, 0.7)),url('/pics/dogRetrato2.PNG')`;

      this._thisCardP.style.backgroundSize = "cover";
      this._nomeP.textContent = "DOG DO VITINHO";
    }
  },

  primaryAttack() {
    if (this.vitor) {
      this.ataque(this.dano);
      this.readyToAttack = false;
    } else {
      this.ataque();
      this.readyToAttack = false;
    }
  },

  levelCfg() {
    this._money = this._money * this._level;
    this.dano = gerarNumero(5, 8);

    this.dano *= this._level;
    this.setHp(this.hp * this._level);
    this.attackChance = this.attackChance * this._level;
  },

  cfg() {
    audioPlayer(this._audioSpawn, true, this._CHN, 0.1);
    this.targetPointSetter(300)
  },
};

let metaforando = {
  cartaId: "vitor",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 100,
  _attackAtSpawn: true,
  _doesAttack: false,
  _audioSpawn: "dog.mp3",
  attackChance: 0,
  hp: 500,
  maxHealth: 500,
  dano: 20,
  miniBoss: true,
  emoji: "🐕",

  levelCfg() {
    this.dano = gerarNumero(3, 6);

    this.dano *= this._level;
    this.setHp(this.hp * this._level);
  },

  cfg() {
    this._cargoP.style.fontSize = "80%";
    this._cargoP.style.marginTop = "8px";
    this._cargoP.style.marginBottom = "10px";
    this._cargoP.textContent = "METAFORANDO";
    this._cargoP.style.marginBottom = "0px";
    this._retratoP.style.height = "80%";

    this._displayP.children[1].style.visibility = "hidden";

    this._nomeP.style.margin = "20px  0px 5px";
    this.targetPointSetter(750)
  },

  tick() {
    this._nomeP.innerHTML = progressBar(this.hp, this.maxHealth, "gray", "red");
  },

  everyRound() {
    // this.didHit();
  },

  poder() {
    if (this._dead) return;

    hpPlayer.remove(this.dano);

    let dogsOnAre = areObj.some((x) => x.cartaId == "dog");

    if (!dogsOnAre) {
      spawnDog();
    } else {
      areObj.map((x) => {
        x.cartaId == "dog" ? x.heal(5) : 0;
      });
      spawnDog();
    }

    this.readyToAttack = false;
    // this._uber = false;
  },

  didHit() {
    return;
    let coolDownTreme = gerarNumero(1000, 2100);

    if (per(65) || this.readyToAttack) return;

    this.readyToAttack = true;
    // this._uber = true;

    setTimeout(() => this.poder(), coolDownTreme);
  },
};



let liberdade = {
  cartaId: "liberdade",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 100,
  _attackAtSpawn: true,
  _doesAttack: false,
  _audioSpawn: "",
  attackChance: 0,
  hp: 1000,
  maxHealth: 1000,
  dano: 0,
  miniBoss: true,
  emoji: "",

  tick() {
    let healthBar = this._nomeP.children[0];

    healthBar.max = this.maxHealth;
    healthBar.value = this._dmgTaken;
  },

  levelCfg() {
    this.dano = gerarNumero(2, 5);

    this.dano *= this._level;
    this.setHp(this.hp * this._level);
  },

  cfg() {
    this._cargoP.style.fontSize = "80%";
    this._cargoP.style.marginTop = "14px";
    this._cargoP.style.marginBottom = "10px";
    this._cargoP.textContent = "LIBERDADE DE EXPRESSÃO";
    this._cargoP.style.marginBottom = "0px";
    this._retratoP.style.height = "80%";

    this._nomeP.style.margin = "30px  0px 5px";
    this._hpP.style.visibility = "hidden";
    this.targetPointSetter(850)
  },

  tick() {
    this._nomeP.innerHTML = progressBar(this.hp, this.maxHealth, "gray", "red");
  },

  poder() {
    if (this._dead) return;

    hpPlayer.remove(this.dano);

    // areWakeUp();
    this.readyToAttack = false;
    // this._uber = false;
  },

  didHit(_dmgDealer) {
    return;
    if (_dmgDealer.cartaId == "sentry" && per(85)) return;
    let coolDownTreme = gerarNumero(1000, 2100);
    if (per(60) || this.readyToAttack) return;

    this.readyToAttack = true;
    // this._uber = true;

    setTimeout(() => this.poder(), coolDownTreme);
  },

  everyRound() {
    // this.didHit();
  },
};
let smoke = {
  cartaId: "smokeCard",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 5,
  _attackAtSpawn: false,
  _doesAttack: false,
  _audioSpawn: "",
  attackChance: 15,
  hp: 21,
  maxHealth: 21,
  dano: 1,
  especial: true,
  emoji: "🌫️",
  smokeWeight: 2,
  _coolDownNatural: 6,

  tick() {},

  levelCfg() {
    this.dano *= this._level;

    this.setHp(this.hp * this._level);
  },

  cfg() {
    this.smokeWeight = gerarNumero(1, 4);
    this._retratoP.style.border = "1px solid #de9b35";
    this._nomeP.style.marginTop = "6px";
    this.targetPointSetter(200)
  },

  tick() {},

  poder() {
    if (smokeOnInv.status == true || smokeOnInv.status == undefined) return;
    smokeOnInv.smoke(true, this.smokeWeight);
    setTimeout(() => {
      this.kill();
    }, 250);
  },
};

let awp = {
  cartaId: "awp",
  _place: false,
  _parentP: false,
  _parent: false,
  _thisCardP: false,
  _leftCard: false,
  _rightCard: false,
  _enemy: true,
  _canBeDeleted: false,
  _cfgAdded: false,
  _money: 15,
  _attackAtSpawn: true,
  _doesAttack: true,
  _audioSpawn: "",
  attackChance: 10,
  hp: 10,
  maxHealth: 10,
  dano: 35,
  emoji: "",
  asiimov: false,
  _coolDownNatural: 15,
  tick() {},

  levelCfg() {
    if (per(0.2)) {
      this.asiimov = true;
    }

    this.dano = gerarNumero(30, 40);

    if (this.asiimov) {
      this.dano = gerarNumero(200, 300);
      this.setHp(50);
    }

    this.dano *= this._level;
    this.setHp(this.hp * this._level);
  },

  cfg() {
    this._retratoP.style.border = "1px solid #de9b35";
    if (this.asiimov) {
      this._retratoP.style.backgroundImage = "url('/pics/awpAsiimov.png')";
      this._thisCardP.style.backgroundImage = "url('/pics/asiimovFundo.jpg')";
      this._thisCardP.style.backgroundImage = "url('/pics/asiimovFundo.jpg')";
      this._thisCardP.style.border = "2px solid red";
      this._retratoP.style.border = "1px solid red";
      this._nomeP.innerHTML = "AWP <br> REDLINE";
    }
    this._retratoP.style.backgroundSize = "100% 100%";
    this._nomeP.style.marginTop = "6px";
    this.targetPointSetter(175)
  },

  tick() {},

  poder() {},
};

export function spawnTank() {
  return inserirInimigoDomAndObject(tankBlueprint, tank);
}

export function spawnCamarada(n) {
  return inserirInimigoDomAndObject(camaradaBlueprint, camarada);
}

export function spawnMenosCartas(n) {
  return inserirInimigoDomAndObject(menosClickBlueprint, menosCartas);
}

export function spawnDog(n) {
  if (n) {
    if (per(n)) {
    } else {
      return;
    }
  }

  return inserirInimigoDomAndObject(dogBlueprint, dog);
}

export function spawnVitor() {
  return inserirmMiniBossDomAndObject(
    blueprintBuilder("vitor", "METAFORANDO", "url('pics/vitorRetrato.jpeg')"),
    metaforando
  );
}

export function spawnLiberdade() {
  return inserirmMiniBossDomAndObject(
    blueprintBuilder(
      "liberdade",
      "LIBERDADE DE <br>EXPRESSÃO",
      "url('pics/liberdadeRetrato.PNG')"
    ),
    liberdade
  );
}

export function spawnSmoke() {
  return inserirInimigoDomAndObject(
    blueprintBuilder("smokeCard", "SMOKE", "url('pics/smokeRetrato.PNG')"),
    smoke
  );
}

export function spawnAwp() {
  return inserirInimigoDomAndObject(
    blueprintBuilder("awp", "AWP", "url('pics/awpRetrato.PNG')"),
    awp
  );
}

export function spawnMonark(n) {
  start();

  let monarkNome = escolherIntegrante()[0];
  let monarkFoto;

  if (monarkNome === "Turu") {
    monarkFoto = "url('pics/turu.webp')";
  } else if (monarkNome == "Blackao") {
    monarkFoto = "url('pics/blackao.jpeg')";
  } else if (monarkNome == "Gandalf") {
    monarkFoto = "url('pics/gandarfu.png')";
  } else if (monarkNome == "Murillo") {
    monarkFoto = "url('pics/murilo.jpeg')";
  } else if (monarkNome == "Pedro") {
    monarkFoto = "url('pics/pedro.png')";
  } else if (monarkNome == "Nefesto") {
    monarkFoto = "url('pics/nefesto.png')";
  } else if (monarkNome == "Antonio") {
    monarkFoto = "url('pics/antonio.png')";
  } else if (monarkNome == "Diuks Bay") {
    monarkFoto = "url('pics/cesarino.png')";
  } else if (monarkNome == "Junks") {
    monarkFoto = "url('pics/junks.jpeg')";
  } else if (monarkNome == "Twelve") {
    monarkFoto = "url('pics/twelve.png')";
  } else {
    monarkFoto = "";
  }

  let monarkBluePrint =
    '<div id="carta-monark" class="monark">' +
    '<div class="nameAndCidadeWrapper">' +
    '<p class="nome-inimigo">' +
    monarkNome.toUpperCase() +
    "</p>" +
    "</div>" +
    '<div class="retrato" style="display: block; background-image: ' +
    monarkFoto +
    '"></div>' +
    '<p class="cargo">&nbsp;monark💩</p>' +
    '<div class="poder-inimigo">' +
    '<p class="ataque"></p>' +
    '<p class="novoAtaque"></p>' +
    '<p class="action-inimigo" ></p>' +
    "</div>" +
    '<p class="seed"></p>' +
    '<p class="seloAre"></p>' +
    '<p class="levelAre"></p>' +
    "</div>";

  return inserirInimigoDomAndObject(monarkBluePrint, monark);
}

function inserirInimigoDomAndObject(blueprint, object) {
  for (let i = 0; i < 100; i++) {
    // aqui
    let slot = gerarNumero(0, 5);
    secret.innerHTML = blueprint;

    if (areObj[slot].empty == true) {
      are.replaceChild(secret.children[0], are.children[slot]);
      areObj[slot] = Object.assign(new Inimigo(object), object);

      return areObj[slot];
    } else {
      // return false;
    }
  }
}

function inserirmMiniBossDomAndObject(blueprint, object) {
  for (let i = 0; i < 100; i++) {
    //aqui
    let slot = gerarNumero(0, 5);
    secret.innerHTML = blueprint;

    let thereIsEmpty = areObj.some((x) => x.empty);

    if (thereIsEmpty) {
      if (areObj[slot].empty) {
        are.replaceChild(secret.children[0], are.children[slot]);

        areObj[slot] = Object.assign(new Inimigo(object), object);
        if (per(20) && areObj[slot]._attackAtSpawn) {
          // areObj[slot].readyToAttack = true;
        }

        return areObj[slot];
      }
    } else {
      if (!areObj[slot].miniBoss) {
        are.replaceChild(secret.children[0], are.children[slot]);

        areObj[slot].kill();
        areObj[slot] = Object.assign(new Inimigo(object), object);
        if (per(20) && areObj[slot]._attackAtSpawn) {
          // areObj[slot].readyToAttack = true;
        }

        return areObj[slot];
      } else {
        // are.replaceChild(secret.children[0], are.children[slot]);
        // areObj[slot] = Object.assign(new Inimigo(object), object);
        // if (per(20) && areObj[slot]._attackAtSpawn) {
        //   // areObj[slot].readyToAttack = true;
        // }
        // return areObj[slot];
      }
    }
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyX") {
    // console.log(wavePool);
    // wavePool[0].enemies[gerarNumero(0 , 1)]();
    // wave.popUpSuccess();
    console.log("wave: ", areNoEnemies());
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyC") {
    // spawnLiberdade();
    console.log("spawnLiberdade(): ", spawnMonark());
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyZ") {
    // spawnTank();
    console.log("spawnTank();: ", chooseTargetArena());
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyK") {
    if(debug.on){
      arenaKill()
      console.log('killl arena');
    }
    
  }
});

function Main() {
  // aqui
  areObj = [emptyObj, emptyObj, emptyObj, emptyObj, emptyObj, emptyObj];

  return;
}

export function populateArena() {
  let chanceNormal = 80;

  if (per(chanceNormal)) {
    let normaisArr = [spawnMonark, spawnDog, spawnTank, spawnAwp];

    let arrLenght = normaisArr.length;

    let rng = () => normaisArr[gerarNumero(0, arrLenght - 1)]();
    return rng();
  } else {
    let especiaisArr = [spawnCamarada, spawnMenosCartas, spawnSmoke];

    let rng = () => especiaisArr[gerarNumero(0, especiaisArr.length - 1)]();
    return rng();
  }
}

window.addEventListener("load", Main);
