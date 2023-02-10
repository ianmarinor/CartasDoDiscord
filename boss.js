import { triggerChuvaMonark, startGame2 } from "/script.js";

let bossHealthP = document.getElementById("hb");
let progressP = document.getElementById("progress");
let healthPointsP = document.getElementById("healthPoints");
let bossRoomP = document.getElementById("bossRoom");
let healthWrapP = document.querySelector(".bossHealthWrap");
let bossP = () => bossRoomP.children[0];
let pickMonark = document.getElementById("pickMonark");
let protector = document.getElementById("protector");
let main = document.getElementById("main");

let cartaBossMonark =
  '<div id="cartaBossMonark" class="bossAnimation" data-card="boss"></div>';

// CONSTRUTOR BOSSES

class Boss {
  constructor(_health, _fullHealth, _name) {
    this.name = _name;
    this.health = _health;
    this.fullHealth = _fullHealth;
    this.dmgTaken = 0;
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
    } 
    bossHealPage()
    console.log(this.health);
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
}

// LISTA DE BOSSES

export let boss;

let probMonark;
function probMonarkChuvaDeMonark() {
  console.log("juj");
}
function createMonark() {
  
  let bossClass = new Boss(2000, 2000, "monark");
  
  let monark = {
    carta() {
      bossRoomP.innerHTML = cartaBossMonark;
    },
    
    chuvaDeMonark(x) {
      triggerChuvaMonark(x);
    },
    
    
  };
  
  
  return (boss = Object.assign(bossClass, monark));
}

export function resetBoss() {
  boss = {};
}

let chosenBoss;

function startGame() {
  protector.style.display = "none";
  main.style.display = "grid";
  spawnBoss();
  startGame2();
}

function chooseMonark() {
  chosenBoss = "monark";
  startGame();
}

pickMonark.addEventListener("click", chooseMonark);

export function spawnBoss() {
  if (chosenBoss == "monark") {
    createMonark();
  } else {
    return false;
  }

  healthPointsP.textContent = boss.health;
  healthWrapP.classList.add("aparecer");
  boss.carta();
  console.log(boss);

  // healthWrapP.className = 'aparecer'
}

// spawnBoss()

function bossDead() {}

function animatebossHealth(plus) {
  if (plus === 0) return;

  let dano = Math.abs(plus);
  var stepTime = 10;

  let increment = 1;

  healthPointsP.textContent = boss.health;

  let x = 0;
  console.log(boss.dmgTaken);

  let style = Math.abs((boss.dmgTaken / boss.fullHealth) * 100 - 100) + "%";

  console.log(boss);

  console.log(style);
  progressP.style.width = style;
  console.log(window.getComputedStyle(progressP).width);

  //   let timer = setInterval(function () {

  //       x++

  //       if (x >= dano) {
  //
  //       clearInterval(timer);
  //       console.log(x);
  //       console.log(dano);
  //     }

  //   }, stepTime);
}

function bossHealPage(){
  healthPointsP.textContent = boss.health;
}

let teclaDeckPronto = "KeyG";

function deckPronto() {
  startGame();
}

document.addEventListener("keydown", (event) => {
  if (event.code == teclaDeckPronto) {
    
    //   deckPronto();
    location.reload()
    
  }
});
