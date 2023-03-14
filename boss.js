import { gerarNumero, per, money } from "./script.js";
import { triggerChuvaMonark, startGame2, rodadas } from "/script.js";
import { spawnMonark, areObj } from "/arena.js";

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

class Boss {
  constructor(_health, _fullHealth, _name) {
    this.name = _name;
    this.health = _health;
    this.fullHealth = _fullHealth;
    this.dmgTaken = 0;
    this._coolDown = false;
    this._gotHitLastRound = [false, 0];
  }

  dmg(n) {
    this.health -= n;
    this.dmgTaken += n;

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
    carta() {
      bossRoomP.innerHTML = cartaBossMonark;
    },

    chuvaDeMonark() {
      let chance = 1;

      let porcentagemVida = Math.trunc((this.health / this.fullHealth) * 100);
      chance += 100 - porcentagemVida;
      // chance += Math.trunc(rodadas / 50);
      // chance += Math.trunc(money.total / 700);

      if (chance > 100) chance = 100;

      console.log("CHANCE CHUVA DE MONARK: ", chance);

      setInterval(() => {
        if (this._coolDown) return;

        if (!per(chance)) return;

        this.treme(true);
        this.coolDown(5000);
        setTimeout(() => {
          this.treme(false);

          for (let i = 0; i < 100; i++) {
            spawnMonark();
          }

          areObj.map((x) => {
            if (x.cartaId == "monark") {
              x.isInvisible = false;
              x.ataque()
              x.readyToAttack = true;
            }
          });
        }, gerarNumero(750, 3200));
      }, gerarNumero(3120, 15000));
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
