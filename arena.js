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
} from "./script.js";
import { boss, spawnBoss, resetBoss } from "./boss.js";
import {
  menosClickBlueprint,
  camaradaBlueprint,
  tankBlueprint,
} from "./domCards.js";
import { start } from "./modules/seedFabricator.js";
import { seedComprada } from "./modules/seedsCompradas.js";

export const are = document.getElementById("are");
const secret = document.getElementById("test");

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

export let areObj;

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
    this.isInvisible = true

    //defaults
    this.empty = false;
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
    this._attackAtSpawn = false
    this._critico = false

    this._rightCard = false;
    this._leftCard = false;
    this._fullHp = true;
    this._buff = 0;
    this._mit = 0;
    this._dmgTaken = 0;
    this._dmgDone = 0;
    this._totalHp = 0;
    this._hasUlti = false;

    //DOM
    this._thisCardP = false;

    this._nomeP = false;
    this._retratoP = false;
    this._cargoP = false;

    this._energiaP = false;
    this._hpP = false;
    this._buttonP = false;
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

    if (this._place < 9) {
      this._rightCard = this._place + 1;
    } else {
      this._rightCard = false;
    }

    this._thisCardP = this._parentP.children[this._place];
    this._nomeP = this._thisCardP.children[0].children[0];
    this._retratoP = this._thisCardP.children[1];
    this._cargoP = this._thisCardP.children[2];

    this._energiaP = this._thisCardP.children[3].children[0];
    this._hpP = this._thisCardP.children[3].children[1];

    this._place = this._parent.indexOf(this);

    if (this._place > 0) {
      this._leftCard = this._parentP.children[this._place - 1];
      this._leftCardIndex = this._place - 1;
      this._leftObj = this._parent[this._place - 1];
    } else {
      this._leftCard = false;
      this._leftCardIndex = null;
      this._leftObj = false;
    }

    if (this._place < 9) {
      this._rightCard = this._parentP.children[this._place + 1];
      this._rightCardIndex = this._place + 1;
      this._rightObj = this._parent[this._place + 1];
    } else {
      this._rightCard = false;
      this._rightCardIndex = null;
      this._rightObj = false;
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

  critico(trigger){

    if(trigger){

        if(this._critico || !this._hasdmg) return
        this._critico = true
        this.dano *= 2
     } else {
        this._critico = false
        this.dano = Math.trunc(this.dano / 2)
     } 



  }

  desinfectar(){
    
    
      if (!this.infected) return;

      this.hp = this.previousHp;
      this._money = Math.trunc(this._money / 2);
      this.infected = false;
      this._thisCardP.children[0].classList.remove("float");    
      this._thisCardP.children[2].classList.remove("float");
      this._hpP.classList.remove("float");
      x._thisCardP.children[3].children[2].classList.remove("float");
    

  }

  dmg(n) {
    console.trace();
    this._dmgTaken += n;

    if (this.hashp == false) {
      this.kill();
      return;
    }

    this._fullHp = false;

    this.hp -= n;
    this._totalHp = this.hp;

    efeitoDano(this);
    if (this._totalHp <= 0) {
      this.hp = 0;
      this.kill();
    }
  }

  everyRound() {}

  autoAtaque() {
    if (this.readyToAttack) {
      if (this._doesAttack) {
        this.ataque();
      } else {
        this.poder();
      }
    }

    if (per(this.attackChance)) {
      this.readyToAttack = true;
    }
  }

  kill(absolute) {
    if (!this._parentP) return;
    if (!absolute) {
      money.add(this._money);
    }

    elimCardAre(this._thisCardP);
    this._dead = true;
  }

  ataque(dano) {
    let invAllEmpty = invObj.every((x) => x.isInvisible == true);

    if (invAllEmpty) {
      hpPlayer.remove(this.dano);
      this.readyToAttack = false;
    } else {
      for (let i = 0; i < 1000; i++) {
        let slot = gerarNumero(0, 5);
        let vitima = invObj[slot];

        if (!vitima.empty) {
          this.readyToAttack = false;
          vitima.dmg(this.dano);

          break;
        }
      }
    }
  }

  defaultEveryRound() {

   per(33) && this.desinfectar()


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

    if (this._hasdmg === true) {
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

    if (this._money) {
      moneyP.textContent = this._money + "💰";
    }

    if(this._hasdmg){
        this._critico ? energia.classList.add('critico') : energia.classList.remove('critico')
    }

    if (!this._cfgAdded) {
        this.cfg();
        this._cfgAdded = true;
      }


      if(this.isInvisible){
        this._thisCardP.style.opacity = '0.16'
      } else {
        this._thisCardP.style.opacity = '1'
      }


  }

  cfg() {}
}

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
  _money: 10,
  _attackAtSpawn: false,

  hp: 5,
  maxHealth: 15,
  dano: 3,
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
  _money: 30,
  _doesAttack: false,
  _hasdmg: false,
  energia: -7,
  emoji: "🃏",
  hp: 30,
  maxHealth: 30,
  dano: false,
  attackChance: 7,

  poder() {
    numCartas.remove(Math.abs(this.energia));
    this.kill();
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
  _money: 30,
  _doesAttack: false,
  _hasdmg: false,
  energia: '',
  emoji: "☭",
  hp: 30,
  maxHealth: 30,
  dano: false,
  attackChance: 7,


cfg(){

    this._energiaP.classList.add('critico')
    console.log(this._energiaP.classList.value)
    console.log('+++++++++++++++++++++');
    this._cargoP.textContent = 'CRITICO PARA TODOS'
    this._cargoP.style.fontSize = '65%'
},

  poder() {
    areObj.map((x) => {
        
    x.critico &&  x.critico(true);
    });

    this.kill();
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
  _money: 300,
  _doesAttack: false,
  _hasdmg: false,
  energia: "",
  emoji: "",
  hp: 251,
  maxHealth: 250,
  dano: 130,
  attackChance: false,
  ulti: 0,

  cfg() {},

  everyRound() {
    if (this.ulti >= 100) return;

    let ultiRate = gerarNumero(1, 2);
    console.trace();
    this.ulti += ultiRate;
    this._cargoP.children[0].value = this.ulti;

    if (this.ulti >= 100) {
      this.readyToAttack = true;
    }
  },

  

  poder() {
    invObj.map((x) => {
      x.dmg(this.dano);
    });
    this.kill(true);
  },
};

export function spawnTank(n) {

    if(coolDown)return
  if (n) {
    if (per(n)) {
    } else {
      return;
    }
  }

  let slot = gerarNumero(0, 9);

  secret.innerHTML = tankBlueprint;

  if (areObj[slot].empty == true) {
    are.replaceChild(secret.children[0], are.children[slot]);
    areObj[slot] = Object.assign(new Inimigo(tank), tank);
    areObj[slot].print();
  }
}

export function spawnCamarada(n) {
    if(coolDown)return
  if (n) {
    if (per(n)) {
    } else {
      return;
    }
  }

  let slot = gerarNumero(0, 9);

  secret.innerHTML = camaradaBlueprint;

  if (areObj[slot].empty == true) {
    are.replaceChild(secret.children[0], are.children[slot]);
    areObj[slot] = Object.assign(new Inimigo(camarada), camarada);
  }
  coolDown = true
}

export function spawnMenosCartas(n) {

    if(coolDown)return

  if (n) {
    if (per(n)) {
    } else {
      return;
    }
  }

  let slot = gerarNumero(0, 9);

  secret.innerHTML = menosClickBlueprint;

  if (areObj[slot].empty == true) {
    are.replaceChild(secret.children[0], are.children[slot]);
    areObj[slot] = Object.assign(new Inimigo(menosCartas), menosCartas);
  }
  coolDown = true
}

export function spawnMonark(n) {

    if(coolDown)return

  if (n) {
    if (per(n)) {
    } else {
      return;
    }
  }

  start();

  let monarkNome = escolherIntegrante();
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
    "</div>";

  let slot = gerarNumero(0, 9);

  secret.innerHTML = monarkBluePrint;

  if (areObj[slot].empty == true) {
    are.replaceChild(secret.children[0], are.children[slot]);
    areObj[slot] = Object.assign(new Inimigo(monark), monark);
  }
  coolDown = true;
}
let coolDown = false;
document.addEventListener("keydown", (event) => {
  if (event.code == "KeyX") {
    spawnTank();
  }
});

function Main() {
  areObj = [
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
  ];

  return console.log("----------------- **LOADED** ---------------------");
}

export function populateArena() {
  if (!boss) return;
  coolDown = false;
  let chanceNormal = 83;

  if (per(chanceNormal)) {

    spawnMonark();
    

    
    
  } else {
    spawnMenosCartas(40);
    spawnCamarada(35);
    spawnTank(25);
  }
}

window.addEventListener("load", Main);
