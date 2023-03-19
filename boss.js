import { gerarNumero, per, money, audioPlayer } from "./script.js";
import { triggerChuvaMonark, startGame2, rodadas, tudo } from "/script.js";
import {
  spawnMonark,
  spawnVitor,
  areObj,
  populateArena,
  areWakeUp,
} from "/arena.js";
import { spawnLiberdade, spawnTank } from "./arena.js";

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

export function toMonark(_cartaObj, _despawnTime) {
  

      
      let carta = _cartaObj;
      let cartaP = _cartaObj._thisCardP;
      let cargo = _cartaObj._cargoP;
      
      if(!carta.isNormal) return

      if (cartaP.id == "monark") return;

      cartaP.id = "monark";
      cartaP.style.border = "1px solid black";

      cargo.textContent = "monark 💩";

      carta.energia = 0;
      carta._cargo = "carta-monark";
      carta.dmgBoss = false;
      carta._canBeDeleted = false;
      if (_despawnTime) return;
      carta._despawn = gerarNumero(2, 8);
      let poopCHN = document.createElement("audio");

      audioPlayer("poop.mp3", false, poopCHN, 0.4);
    
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

    console.log(this._cartaP);
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
    audioPlayer(this._audioHitDefault, false, this._CHN, vol);

    if (per(20)) {
      let faixa = this._audioHit[gerarNumero(0, this._audioHit.length - 1)];

      audioPlayer(faixa, true, this._CHN);
    }
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
      areWakeUp();
      console.log("********* POPULEI *********");
    } else {
      // this.ulti();
      this.ult();
      console.log("********* VOU ULTAR *********");
      areWakeUp();
    }

    if (this.percentHealth < 33 && per(100)) {
      spawnTank(false, true);
      areWakeUp();
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
        let sorteio = gerarNumero(0, 2);
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
      chance += 10 - porcentagemVida;

      if (chance > 100 || absolute) chance = 100;
      console.log("*** ULTI CHANCE ***", chance);

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

      console.log("-------------CHUVA DE MONARK----------------");

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
    },

    vitorMetaforando() {
      console.log("-------------METAFORANDO----------------");
      spawnVitor(true);
      let faixa =
        this._audioVitorSpawn[gerarNumero(0, this._audioVitorSpawn.length - 1)];
      audioPlayer(faixa, false, this._CHN);
    },

    liberdadeDeExpresao() {
      console.log("-------------liberdadeDeExpresao----------------");
      spawnLiberdade(true);
      let faixa =
        this._audioLiberdadeSpawn[gerarNumero(0, this._audioLiberdadeSpawn.length - 1)];
      audioPlayer(faixa, false, this._CHN,0.5);

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
