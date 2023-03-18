import { gerarNumero, per, money, audioPlayer } from "./script.js";
import { triggerChuvaMonark, startGame2, rodadas, tudo } from "/script.js";
import { spawnMonark, areObj, populateArena, areWakeUp } from "/arena.js";
import { spawnTank } from "./arena.js";

let bossHealthP = document.getElementById("hb");
let progressP = document.getElementById("progress");
let healthPointsP = document.getElementById("healthPoints");
let bossRoomP = document.getElementById("bossRoom");
let healthWrapP = document.querySelector(".bossHealthWrap");
let bossP = () => bossRoomP.children[0];
let pickMonark = document.getElementById("pickMonark");
let protector = document.getElementById("protector");
let main = document.getElementById("main");
let testP = document.getElementById("test");

let cartaBossMonark =
  '<div id="cartaBossMonark" class="bossAnimation" data-card="boss"></div>';

// CONSTRUTOR BOSSES

export function toMonark(_cartaObj,_despawnTime) {
  let carta = _cartaObj;
  let cartaP = _cartaObj._thisCardP;
  let cargo = _cartaObj._cargoP;

  if (cartaP.id == "monark") return;

  cartaP.id = "monark";
  cartaP.style.border = "1px solid black";

  cargo.textContent = "monark 💩";

  carta.energia = 0;
  carta._cargo = "carta-monark";
  carta.dmgBoss = false;
  carta._canBeDeleted = false;
  if(_despawnTime) return
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
    this._audioHit = "bossHit.mp3";
  }

  dmg(n) {
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
    this.antiSpam()
    audioPlayer(this._audioHit, true, this._CHN, vol);
    this.percentHealth = (this.health / this.fullHealth) * 100;

    if (this.health <= 0) {
      this.health = 0;

      bossDead();
      return animatebossHealth(n);

      //   return (bossHealthP.value = this.health);
    } else {
      //   return (bossHealthP.value = this.health);
      return animatebossHealth(n);
    }
  }

  antiSpam() {
    let chance = 100 - this.percentHealth;

    
    console.log("chance: ", chance);

    if (!per(chance)) {
      console.log("********* AZAR *********");
      return;
    }

    if (per(80)) {
      populateArena(true);
      areWakeUp()
      console.log("********* POPULEI *********");
    } else {
      // this.ulti();
      this.chuvaDeMonark()
      console.log("********* VOU ULTAR *********");
      areWakeUp()
      
    }

    if(this.percentHealth < 33 && per(100)){

      spawnTank(false,true) 
      areWakeUp()
      console.log("********* taaaaaank!!!! *********");
    }


  }

  heal(n) {
    this.health += n;
    if (this.health > this.fullHealth) {
      this.health = this.fullHealth;
      animatebossHealth();
    }
    animatebossHealth();
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

// LISTA DE BOSSES

export let boss;

let probMonark;

function createMonark() {
  let bossClass = new Boss(15000, 15000, "monark");

  let monark = {
    _audioChuva: "trovao.mp3",
    carta() {
      bossRoomP.innerHTML = cartaBossMonark;
    },

    ulti() {
      let ultis = [
        this.chuvaDeMonark,
        this.liberdadeDeExpresao,
        this.vitorMetaforando,
      ];

      ultis[gerarNumero(0, 2)]();
    },

    chuvaDeMonark(absolute) {
      let chance = 0;

      let porcentagemVida = (this.health / this.fullHealth) * 10;
      chance += 10 - porcentagemVida;
      // chance += Math.trunc(rodadas / 50);
      // chance += Math.trunc(money.total / 700);

      if (chance > 100 || absolute) chance = 100;

      console.log("CHANCE CHUVA DE MONARK: ", chance);

      setTimeout(() => {
        if (this._coolDown) return;

        let canGo = per(chance);
        

        if (!canGo) return;

        console.log();

        this.treme(true);
        audioPlayer(this._audioPoder, true, this._CHN, 0.2);
        this.coolDown(15000 - chance * 100);
        setTimeout(() => {
          this.treme(false);

          for (let i = 0; i < 100; i++) {
            spawnMonark(true);
          }

          areObj.map((x) => {
            if (x.cartaId == "monark") {
              x.isInvisible = false;
              x.ataque();
              x.readyToAttack = true;
            }
          });
          audioPlayer(this._audioChuva, true, this._CHN, 0.1);
        }, gerarNumero(750, 3200));
      }, gerarNumero(120, 120));
    },

    vitorMetaforando() {
      console.log('******  metaforei ****');
    },

    liberdadeDeExpresao() {

      console.log('******  libertie ****');
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

pickMonark.addEventListener("click", chooseMonark);

let hasSpawned = false;

export function spawnBoss() {
  if (rodadas >= 10 && !hasSpawned) {
    if (chosenBoss == "monark") {
      createMonark();
    } else {
      return false;
    }

    healthPointsP.textContent = boss.health;
    healthWrapP.classList.add("aparecer");
    boss.carta();

    hasSpawned = true;
  }
  // healthWrapP.className = 'aparecer'
}

// spawnBoss()

function bossDead() {}

function animatebossHealth() {
  let style = (boss.health / boss.fullHealth) * 100 + "%";

  healthPointsP.textContent = boss.health;

  progressP.style.width = style;
}

let teclaDeckPronto = "KeyG";

document.addEventListener("keydown", (event) => {
  if (event.code == teclaDeckPronto) {
    //   deckPronto();
    location.reload();
  }
});
