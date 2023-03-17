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
  audioPlayer
} from "./script.js";
import { boss, spawnBoss, resetBoss, toMonark } from "./boss.js";
import {
  menosClickBlueprint,
  camaradaBlueprint,
  tankBlueprint,
  dogBlueprint,
} from "./domCards.js";
import { start } from "./modules/seedFabricator.js";
import { seedComprada } from "./modules/seedsCompradas.js";

export const are = document.getElementById("are");
const secret = document.getElementById("test");
const placarInimigoDano = document.getElementById("placarInimigoDano")
const placarInimigoWrap = document.getElementById("placarInimigoWrap")



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

let hasPlayed = false
export function arenaByRound(){
  hasPlayed = false
}

export function updatePlacarInimigo(){
  
  let drumAu = 'alertaDano.mp3'
  let mGAu = 'alertaDano2.mp3'
  let placarAudioChannel = document.createElement('audio')
  let dmgTotal = 0

  let efeitos = ''
  
  areObj.map( (x)=> {
    
    if(x._doesAttack && x.readyToAttack){
      dmgTotal += x.dano
    } else if(!x._doesAttack && x.readyToAttack){
      efeitos = efeitos + '<br>' + x.emoji
    }
  }
  )


 
  


  placarInimigoWrap.children[1].children[0].innerHTML = ''
  placarInimigoDano.children[0].textContent = dmgTotal
  if(dmgTotal == 0 && efeitos == ''){
    placarInimigoDano.style.opacity = '0.2'
    placarInimigoDano.children[1].style.opacity = '0.6'
    placarInimigoDano.children[0].style.color = 'wheat'
    placarInimigoWrap.style.backgroundColor = 'green'
    placarInimigoWrap.style.opacity = '0.2'
    placarInimigoWrap.style.border = 'solid 1px black'
    hasPlayed = false
     
    
  } else if (dmgTotal < 20 && efeitos == '' ) {

    
    placarInimigoDano.style.opacity = '0.9'
    placarInimigoDano.children[1].style.opacity = '0.6'
    placarInimigoDano.children[0].style.color = 'black'
    placarInimigoWrap.style.backgroundColor = '#dfa506'
    placarInimigoWrap.style.opacity = '0.9'
    placarInimigoWrap.style.border = 'solid 2px black'

    
    
    
    if(hasPlayed) return
    audioPlayer(drumAu,true,placarAudioChannel)
    hasPlayed = true
  } else if ( dmgTotal > 19 || efeitos != ''){
    
    placarInimigoWrap.style.backgroundColor = 'red'
    placarInimigoWrap.style.opacity = '1'
    placarInimigoWrap.style.border = 'solid 3px yellow'
    
    if(dmgTotal != 0){
      
      placarInimigoDano.style.opacity = '1'
      placarInimigoDano.children[1].style.opacity = '1'
      placarInimigoDano.children[0].style.color = 'wheat'
    } else {

      placarInimigoDano.style.opacity = '0.2'
    placarInimigoDano.children[1].style.opacity = '0.6'
    placarInimigoDano.children[0].style.color = 'wheat'


    }
    if(efeitos != ''){

      placarInimigoWrap.children[1].children[0].innerHTML = efeitos
    }
    if(hasPlayed) return
    audioPlayer(mGAu,true,placarAudioChannel,0.85)
    hasPlayed = true
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
    this.isInvisible = true;

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
    this._attackAtSpawn = false;
    this._critico = false;
    this._canBeCritic = true
    this._poderUsing = false
    this._despawn = false

    this._rightCard = false;
    this._leftCard = false;
    this._fullHp = true;
    this._buff = 0;
    this._mit = 0;
    this._dmgTaken = 0;
    this._dmgDone = 0;
    this._totalHp = 0;
    this._hasUlti = false;

    //audio
    this._CHN = document.createElement('audio')

   


    //DOM
    this._thisCardP = false;

    this._nomeP = false;
    this._retratoP = false;
    this._cargoP = false;

    this._energiaP = false;
    this._hpP = false;
    this._buttonP = false;
  }



  audioSpawn(_vol){

    let vol


    if(typeof  _vol == 'number'){
      vol = _vol
    } else {
      vol = 1
    }
    console.log('vol: ', vol);

    audioPlayer(this._audioSpawn,false,this._CHN, vol)

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

  critico(trigger) {
    if (trigger == undefined || trigger) {
      if (!this._canBeCritic || this._critico) return;
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
      if (this._critico || !this._canBeCritic ) return;
      this._critico = true;
      this.dano *= 3;
    } else {
      this._critico = false;
      this.dano = Math.trunc(this.dano / 3);
    }
  }


  desinfectar() {
    if (!this.infected) return;
    //devolver styles
    this._thisCardP.style.backgroundColor = this.previousCartaBackgroundColor
    this._thisCardP.style.backgroundImage = this.previousCartaBackgroundImage
    this._cargoP.style.visibility = 'visible'
    this._thisCardP.style.border = this.previousBorder
    // tirar classes
    this._thisCardP.children[0].classList.remove("float");
    this._thisCardP.children[3].children[2].classList.remove("float");
    this._hpP.classList.remove("float");
    this._energiaP.classList.remove("float");
    //devolver obj values
    this.hp = this.previousHp;
    this.maxHealth = this.previousMaxHealth
    this._money = Math.trunc(this._money / 2);
    this.dano = this.previousDano
    this.energia = this.previousEnergia

    this.infected = false;
  }

  dmg(n,absolute) {

    if(this.isInvisible && !absolute) return
    //
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
        this.primaryAttack();
      } else {
        this.poder();
        this.readyToAttack = false;
      }
    }

    

    if (per(this.attackChance)) {
      this.readyToAttack = true;
    }
  }

  primaryAttack(){
    this.ataque(this.dano)
  }

  kill(absolute) {
    if (!this._parentP) return;
    if (!absolute) {
      money.add(this._money);
    }

    elimCardAre(this._thisCardP);
    this._dead = true;
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
      this.readyToAttack = false;
    } else {









      //se houver  exposto
      if (invObj.some((x) => x._exposto && !x.isInvisible)) {
        for (let i = 0; i < 1000; i++) {
          let slot = gerarNumero(0, 5);

          if (invObj[slot]._exposto && !invObj[slot].isInvisible) {
            let vitima = invObj[slot];

            vitima.dmg(dano);

            

            this._dmgDone += dano;
            this.readyToAttack = false;
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
            vitima.dmg(dano);
            this._dmgDone += dano;
            this.readyToAttack = false;
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
            vitima.dmg(dano);
            this._dmgDone += dano;
            this.readyToAttack = false;
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
            vitima.dmg(dano);
            this._dmgDone += dano;
            this.readyToAttack = false;
            return true;
          }
        }
      }
    }
  }

  defaultEveryRound() {
     this.desinfectar();

     if(this._despawn){
      this._despawn--
      this._despawn == 1 ? this.kill(true) : 0
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

    if (this._critico) {
      
         energia.classList.add("critico")
        } else {
       energia.classList.remove("critico");

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
  _doesAttack: true,
  _despawn: 60,
  _audioSpawn: "monark.mp3",
  _CHN:  document.createElement('audio'),
  hp: 10,
  maxHealth: 10,
  dano: 5,
  emoji: '💩',


 





  
  cfg(){

    audioPlayer(this._audioSpawn, true, this._CHN, 0.4)

    this.dano = gerarNumero(3,7)
    this._despawn = Math.trunc(3 + (100 - chance) / 2)
  },

  everyRound(){

   this._doesAttack = true && per(20) ? this._doesAttack = false : this._doesAttack = true

  },

  poder(){

    let slot = invObj[gerarNumero(0,3)] 
    // let slot = invObj[0] 
    if(slot.isNormal){

      toMonark(slot)
    }

  }
  

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
  _audioSpawn: 'menosCartas.wav',
  energia: "",
  emoji: "🃏",
  hp: 30,
  maxHealth: 30,
  dano: false,
  attackChance: 10,
  especial: true,

  


  cfg() {
    this.energia = gerarNumero(3, 15);

    audioPlayer(this._audioSpawn,true,this._CHN, 0.1)
  },

  poder() {
    numCartas.remove(this.energia);
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
  _audioSpawn: 'comunaShort.mp3',
  energia: "",
  emoji: "☭",
  hp: 30,
  maxHealth: 30,
  dano: false,
  attackChance: 15,
  especial: true,
  _canBeCritic: false,

  cfg() {
    this._energiaP.classList.add("critico");
    this._energiaP.style.visibility  = 'hidden'
    
    this._cargoP.textContent = "ARMA E SAUDE PARA TODOS";
    this._cargoP.style.fontSize = "65%";
    this.audioSpawn(0.5)
  },

  poder() {

    let healAmount = gerarNumero(80,125)

    areObj.map((x) => {
      if(x.empty)return
      x.cartaId != 'camarada' ? x.readyToAttack = true : 0
      
      x.heal(healAmount)
    });

    boss && boss.heal(healAmount)



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
  _hasdmg: true,
  _audioSpawn: 'tank.mp3',
  energia: "",
  emoji: "",
  hp: 400,
  maxHealth: 400,
  dano: 130,
  attackChance: false,
  ulti: 0,
  tank: true,
  _CHN: document.createElement('audio'),

  cfg() {
    this.dano = gerarNumero(100,211)
    
    this.audioSpawn(0.2)
  },

  everyRound() {
    if (this.ulti >= 100) return;

    let ultiRate = gerarNumero(2, 4);

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
    hpPlayer.remove( Math.trunc( this.dano / 3 ) )
    this.kill(true);
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
  _money: 30,
  _attackAtSpawn: false,
  _doesAttack: true,
  _audioSpawn: 'dog.mp3',
  attackChance: 11,
  hp: 25,
  maxHealth: 25,
  dano: 20,

  cfg(){

    this.dano = gerarNumero(21,32)
    audioPlayer(this._audioSpawn,true,this._CHN, 0.1)
  },

  primaryAttack(){

    if(this._attacking) return

    this._attacking = true
    this.ataque()
    this.readyToAttack = true
    this.print()
    this.dano = Math.trunc (this.dano / 5)

    setTimeout ( 
      ()=> { if (this._dead) return 
        this.ataque()
        this._attacking = false
        this.dano = Math.trunc (this.dano * 5)
      },
    1000
    )

  },

  

};

export function spawnTank(n) {
  if (coolDown) return;

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
  if (coolDown) return;
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
  coolDown = true;
}

export function spawnMenosCartas(n) {
  if (coolDown) return;

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
  coolDown = true;
}

export function spawnDog(n) {
  if (coolDown) return;

  if (n) {
    if (per(n)) {
    } else {
      return;
    }
  }

  let slot = gerarNumero(0, 9);

  secret.innerHTML = dogBlueprint;

  if (areObj[slot].empty == true) {
    are.replaceChild(secret.children[0], are.children[slot]);
    areObj[slot] = Object.assign(new Inimigo(dog), dog);
  }
  coolDown = true;
}



export function spawnMonark(n) {
  if (coolDown && !n) return;
  

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

let mySrc = "trovao.mp3"

let monarkCHN = document.createElement('audio')
let ianCHN = document.createElement('audio')

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyX") {
    coolDown = false
    spawnDog()
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyC") {
    coolDown = false
    spawnMonark()
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyZ") {
    coolDown = false
    spawnCamarada()
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
  
  return;
}
let chance
export function populateArena() {

  let chanceNormal = 90;

  chance = 5
   if(boss){
    
    let porcentagemVida = Math.trunc(boss.health / boss.fullHealth * 100)
    chance += 100 - porcentagemVida

    chanceNormal -=  100 - porcentagemVida 
    
    
  }
  
  chance += Math.trunc(rodadas / 25)
  
  chance > 100 ? chance = 100 : 0
  chanceNormal < 40 ? chanceNormal = 40 : 0

  console.log( 'POPULATE CHANCE ', chance );
  console.log('chanceNormal: ', chanceNormal);
  if(!per(chance))return
  
  if (!boss) return;
  coolDown = false;

  if (per(chanceNormal)) {

    let normaisArr = [
      spawnMonark,
      spawnMenosCartas
    ]
    
    let arrLenght = normaisArr.length
    
    
    let rng =  () => normaisArr[gerarNumero(0,arrLenght - 1)]()
    rng()
  } else {
    
    
    let especiaisArr = [
      spawnTank,
      spawnCamarada,
      spawnDog
    ]

    let rng =  () => especiaisArr[gerarNumero(0,especiaisArr.length - 1)]()
    rng()

  }
}

window.addEventListener("load", Main);
