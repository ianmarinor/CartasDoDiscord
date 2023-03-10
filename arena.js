import { emptyObj, escolherIntegrante, gerarNumero, per,efeitoCura, efeitoDano, elimCardInv } from './script.js';
import {  start } from "./modules/seedFabricator.js";
import { seedComprada } from './modules/seedsCompradas.js';


export const are = document.getElementById('are')
const secret = document.getElementById("test");

const empty0 = are.children[0]
const empty1 = are.children[1]
const empty2 = are.children[2]
const empty3 =are.children[3]
const empty4 =are.children[4]
const empty5 =are.children[5]
const empty6 = are.children[6]
const empty7 =are.children[7]
const empty8 = are.children[8]
const empty9 =are.children[9]


export let areObj



class Inimigo {
    constructor(card){

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
    this.hashp = card.hashp;
    this.maxHealth = card.maxHealth;


    //defaults
    this._dead = false
    this._place = false;
    this._thisCardP = false
    this._cfgAdded = false;
    this._parent = false;
    this._defaultEmoji = "⚡";
    this._defaultEmojiDano = "💥";
    this._parentP = false;
    

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


    //DOM
    this._thisCardP = false;

    this._nomeP = false
    this._retratoP = false
    this._cargoP = false
    
    this._energiaP = false
    this._hpP = false
    this._buttonP = false

    }

    place() {

        if (!this._cfgAdded) {
          this.cfg();
          this._cfgAdded = true;
        }
       
        this._parent = areObj
        this._parentP = are
  
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
        this._nomeP =  this._thisCardP.children[0].children[0];
        this._retratoP = this._thisCardP.children[1]
        this._cargoP  = this._thisCardP.children[2];

        this._energiaP = this._thisCardP.children[3].children[0]
        this._hpP = this._thisCardP.children[3].children[1]
        
        this._place = this._parent.indexOf(this);

        if (this._place > 0) {
            this._leftCard = this._parentP.children[this._place- 1];
            this._leftCardIndex = this._place - 1;
            this._leftObj = this._parent[this._place - 1]
          } else {
            this._leftCard = false;
            this._leftCardIndex = null
            this._leftObj = false
          }
      
          if (this._place < 9) {
            this._rightCard = this._parentP.children[this._place+1]
            this._rightCardIndex = this._place+1
            this._rightObj = this._parent[this._place + 1]
          } else {
            this._rightCard = false;
            this._rightCardIndex = null
            this._rightObj = false
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

      dmg(n) {
        this._dmgTaken += n;
    
        if(this.hashp == false){
          this.kill()
          return
        }
    
        this._fullHp = false;

        this.hp -= n;
        this._totalHp = this.hp
    
        efeitoDano(this);
        if (this._totalHp <= 0) {
          this.hp = 0
          this.kill();
        }
      }


      kill(absolute) {
        if (!this._parentP) return;
    
        elimCardAre(this._thisCardP)
        this._dead = true

      }



      cfg(){

      }
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
    _rightCard:false,
    _enemy: true,
    _canBeDeleted: false,
    _cfgAdded: false,

    hp: 5,
    maxHealth: 15,
    dano: 3,


    

}

function spawnMonark(){
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
    '<div class="poder">' +
    '<p class="ataque"></p>' +
    '<p class="novoAtaque">30❤️</p>' +
    '<button class="action" style="visibility: hidden;">PRESS</button>' +
    "</div>" +
    '<p class="seed"></p>' +
    "</div>";

    let slot = gerarNumero(0,9)

    secret.innerHTML = monarkBluePrint
    console.log(secret);
    are.replaceChild(secret.children[0] ,are.children[slot])
    areObj[slot] = new Inimigo(monark)
    areObj[slot].place()

    setTimeout(areObj[slot].heal(10),1000)
    setTimeout( ()=>  areObj[slot].kill() ,2000)
    
    
    console.log(areObj);
    

}

document.addEventListener("keydown", (event) => {
    if (event.code == "KeyX") {
        spawnMonark();
    }
  });



function Main(){
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
     
      


return console.log('----------------- **LOADED** ---------------------');
}

window.addEventListener('load', Main)