import { seedRNG, start } from "./seedFabricator.js";
import { integrante } from "../integrante.js";
import { cidade } from "../cidade.js";
import { slotEspObj, slotEsp } from "../slotEspecial.js";
import {
  snd,
  semCarta,
  per,
  gerarNumero,
  invObj,
  maoObj,
  money,
  colocarEfeito,
  cartaParaMover,
  hpPlayer,
  ammo,
  elimCardInv,
  elimCardMao,
  setEfeito,
  efeitos,
  efeitoDano,
  efeitoCura,
  vendas,
  tudo,
  numCartas,
  packP,
  novaCarta,
  rodadas,
  audioPlayer,
  mainOpaque,
} from "../script.js";
import { boss, wave } from "../boss.js";
import { areObj, smokeOnInv } from "../arena.js";

// import { stringSeed } from "../slotEspecial.js";
let seedString = seedRNG();

const mainP = document.getElementById("main");
const bodyP = document.getElementsByTagName("body")[0];

function progressBar(_value, _max, _bgColor, _progressColor, _isBarrier) {
  let value = _value;
  let max = _max;

  if (value > max) {
    value = max;
  }

  let bgColor = _bgColor;
  let progressColor = _progressColor;

  !bgColor ? (bgColor = "") : 0;
  !progressColor ? (progressColor = "") : 0;

  let width = (value / max) * 100 + "%";

  let bar =
    `<div id="bgProgressEsp" style=" background-color:` +
    bgColor +
    `" > <div id="progressBarEsp" style=" width:` +
    width +
    `; background-color:` +
    progressColor +
    `   "> </div> </div>`;

  if (_isBarrier) {
    bar += `<p style="display:inline;">🛡️</p>`;
  }

  return bar;
}

function efeitoDanoBarreira(carta) {
  let source = "shield";

  let faixa = source + gerarNumero(1, 3) + ".mp3";
  audioPlayer(faixa, false, carta._CHN, 0.5);
}

let seed2 = seedString[2];
let seed3 = seedString[3];

export let cartaNaoEspecial;

export let raridades = {
  semRaridade: {
    nome: "semRaridade",
    rng: () => seedString[14] != 0,
  },

  rainha: {
    nome: "rainha",
    resellPrice: 3500,
    rng: () =>
      // seedString[8] == 0 &&
      // seedString[9] == 0 &&
      // seedString[10] == 0 &&
      seedString[8] == 3 && seedString[14] == 0,
  },

  sangueAzul: {
    nome: "sangueAzul",
    rng: () => seedString[8] == 2 && seedString[14] == 0,
    resellPrice: 300,
  },

  cavaleiro: {
    nome: "cavaleiro",
    rng: () => seedString[8] == 1 && seedString[14] == 0,
    resellPrice: 150,
  },

  campones: {
    nome: "campones",
    rng: () => seedString[8] == 0 && seedString[14] == 0,
    resellPrice: 50,
  },
};

// export let especiais = ['tenica', 'speaker', 'maisCartas', 'abelha']

let valoresComunista = [111, 333, 666];
export function comunistaPE() {
  if (seed2 < 7) {
    return valoresComunista[0] + "☭";
  } else if (seed2 < 9) {
    return valoresComunista[1] + "☭";
  } else {
    return valoresComunista[2] + "☭";
  }
}


export class Especial {
  constructor(card) {
    //unique
    this.id = card.id;
    this.nome = card.nome;
    this.especial = true;
    this.raridade = card.raridade;
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
    this.dmgBoss = card.dmgBoss;
    this.requireAmmo = false;

    this.nomeStyle = card.nomeStyle;
    this.retratoStyle = card.retratoStyle;
    this.cargoStyle = card.cargoStyle;
    this.ataqueStyle = card.ataqueStyle;
    this.novoAtaqueStyle = card.novoAtaqueStyle;

    //defaults
    this._level = false;
    this._dead = false;
    this._place = false;
    this._invEventAdded = false;
    this._maoEventAdded = false;
    this._cfgAdded = false;
    this._parent = false;
    this._defaultEmoji = "⚡";
    this._defaultEmojiDano = "💥";
    this._parentP = false;
    this._invHiddenButton = false;
    this._maoHiddenButton = true;
    this._poderUsing = false;
    this._attacking = false;

    this._stunned = false;
    this._stunWeight = false;

    this._exposto = false;
    this._barreira = 0;
    this._monarkFree = false;
    this._monarkReplaceble = true;
    this._uber = false;
    this._rightCard = false;
    this._leftCard = false;
    this._totalHp = 0;
    this._fullHp = true;
    this._buff = 0;
    this._mit = 0;
    this._dmgTaken = 0;
    this._lastDmgTaken = 0;
    this._dmgDone = 0;
    this._healingDone = 0;
    this._hasUlti = false;
    this._canBeDeleted = true;
    this._canBeSold = true;
    this._everyRoundMao = false;
    this._requiredIntegrante = false;
    this._requiredIntegrante2 = false;
    this._targetPoint = 500;
    this._energiaDorment = undefined;

    //DOM
    this._thisCardP = false;

    this._nomeP = false;
    this._retratoP = false;
    this._cargoP = false;

    this._energiaP = false;
    this._hpP = false;
    this._buttonP = false;
    this._seloP = false;

    //AUDIO
    this._CHN = document.createElement("audio");
  }

  energiaPoderDefault() {
    if (this._energiaDorment === true) {
      this.dmgBoss = true;
      this.energiaDorment(false);
      console.log("Energy for Special activated");
    }

    this.energiaPoder();
  }
  energiaPoder() {}

  ult() {}


  tickDefault(){
    if(this._barrieraActive){

      this._targetPoint += 2000
    } else {
      this._targetPoint = this._targetPointNatural
    }

    this.tick()
  }

  place() {
    for (let i = 0; i < 3; i++) {
      if (this == slotEspObj[i]) {
        this._parent = slotEspObj;
        this._parentP = slotEsp;
        break;
      }
    }

    for (let i = 0; i < 6; i++) {
      if (this == invObj[i]) {
        this._parent = invObj;
        this._parentP = inv;
        break;
      }
    }

    for (let i = 0; i < 6; i++) {
      if (this == maoObj[i]) {
        this._parent = maoObj;
        this._parentP = mao;
        break;
      }
    }
    //
    this._place = this._parent.indexOf(this);

    this._thisCardP = this._parentP.children[this._place];
    this._nomeP = this._thisCardP.children[0].children[0];
    this._retratoP = this._thisCardP.children[1];
    this._cargoP = this._thisCardP.children[2];

    this._energiaP = this._thisCardP.children[3].children[0];

    this._hpP = this._thisCardP.children[3].children[1];

    this._displayP = this._thisCardP.children[3];

    this._buttonP = this._thisCardP.children[3].children[2];
    this._seedP = this._thisCardP.children[4];
    this._seloP = this._thisCardP.children[5];
    this._seedP2 = this._thisCardP.children[6];

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

    this.checkFullHp();
  }

  critico(trigger) {
    if (trigger == undefined || trigger) {
      if (!this._canBeCritic || this._critico || this._superCritico) return;
      this._critico = true;
      this.dano *= 2;
      this.energia *= 2;
    } else if (trigger == false) {
      if (!this._critico) return;
      this._critico = false;
      this.dano = Math.trunc(this.dano / 2);
      this.energia = Math.trunc(this.energia / 2);
    }
  }

  levelSetter() {
    let life;
    if (boss) {
      life = boss.percentHealth;
    } else {
      life = 100;
    }

    let levels = [
      [gerarNumero(76, 84), 1],
      [gerarNumero(56, 64), 2],
      [gerarNumero(34, 46), 3],
      [gerarNumero(14, 26), 4],
      [gerarNumero(0, 14), 5],
    ];

    for (const x of levels) {
      if (x[0] < life) {
        this._level = x[1];
        break;
      }
    }
  }

  targetPointSetter(_targetPoint, _onlySurface) {
    if (per(50)) {
      this._targetPoint = _targetPoint + gerarNumero(0, 12);
    } else {
      this._targetPoint = _targetPoint - gerarNumero(0, 12);
    }

    if (this._targetPoint < 1) {
      this._targetPoint = 1;
    }

    

    if (!_onlySurface) {
      this._targetPointNatural = this._targetPoint;
    }




  }

  setTotalHp() {
    this._totalHp = this.hp + this._buff;
  }

  checkFullHp() {
    this.hp == this.maxHealth ? (this._fullHp = true) : (this._fullHp = false);
  }

  buildUlt(n) {
    if (this.ulti >= 100) return;

    this.ulti += n;
    if (this.ulti >= 100) {
      this.ulti = 100;
      this._cargoP.classList.add("critico");

      if (this._audioUltiReadyFiles) {
        let faixa =
          this._sourceUltiReady +
          gerarNumero(1, this._audioUltiReadyFiles) +
          ".mp3";
        audioPlayer(faixa, true, this._CHN, 0.5);
      }
    }

    let ulti = inv.children[this._place].children[2];

    ulti.textContent = this.ulti + "%";
  }

  buildUltAuto() {
    if (this._hasUlti) {
      per(20) ? this.buildUlt(1) : false;
    }
  }

  areaAtack() {
    areObj.map((x) => {
      !x.isInvisible ? x.dmg(this.dano, false, this) : 0;
    });
  }

  exposto(_trigger) {
    if (_trigger == undefined || _trigger == true) {
      this._exposto = true;
    } else {
      this._exposto = false;
    }
  }

  ataque(dmg, ammO, _spread) {
    if (this.unableToAttack()) return;

    let dano;
    let ammoUsage;
    let spread = [false, false];

    //verifico se foi passada tag spread (se o ataque tera spread)
    //se sim, spread tera sua info
    _spread ? (spread = _spread) : false;

    if (dmg) {
      dano = dmg;
    } else {
      dano = this.dano;
    }

    if (ammO != undefined) {
      ammoUsage = ammO;

      if (ammo.total < ammoUsage) return;
    } else {
      ammoUsage = 1;
      if (ammo.total <= 0) return;
    }
    ammo.use(ammoUsage);

    // se nao estiver vazio ve quem ta dentro
    // caso esteja vai para o Boss
    if (areObj.some((x) => !x.isInvisible)) {
      let left;
      let classHit;
      let right;

      let ataqueSpread = () => {
        // se left ou right exisitirem
        // dano neles
        if (left || right) {
          let spreadBaseDmg = 3;

          classHit == "tank" ? (spreadBaseDmg = 6) : 0;
          if (classHit == "miniBoss") return;

          let danoSpread;

          spread[1]
            ? (danoSpread = spread[1])
            : (danoSpread = Math.trunc(dano / spreadBaseDmg));

          if (left && !left.isInvisible) {
            this._dmgDone += left.dmg(danoSpread, false, this)[0];
          }

          if (right && !right.isInvisible) {
            this._dmgDone += right.dmg(danoSpread, false, this);
          }
        }
      };
      // function verifica e identifica (colocando nas vars acima) os objetos left right
      // so verifica se houver tag spread true
      let checkLeftRight = (obj) => {
        spread[0] ? (left = obj._leftObj) : false;
        spread[0] ? (right = obj._rightObj) : false;

        ataqueSpread();
      };

      //se houver  exposto
      if (areObj.some((x) => x._exposto && !x.isInvisible)) {
        for (let i = 0; i < 1000; i++) {
          let slot = gerarNumero(0, 5);

          if (areObj[slot]._exposto && !areObj[slot].isInvisible) {
            let vitima = areObj[slot];

            this._dmgDone += vitima.dmg(dano, false, this)[0];

            checkLeftRight(vitima);

            // atacar por dano spread

            return [true, vitima];
          }
        }

        //se houver tank
      } else {
        false;
      }
    } else {
      return false;
    }
  }

  setHp(n) {
    this.hp = n;
    this.maxHealth = n;
  }

  heal(n, _delay) {
    let delay;

    !_delay ? (delay = gerarNumero(350, 650)) : (delay = _delay);

    setTimeout(() => {
      this.checkFullHp();
      if (this._fullHp || this._dead) return;

      if (n == 0) return;

      this.hp += n;
      efeitoCura(this);
      if (this.hp >= this.maxHealth) {
        this._fullHp = true;
        this.hp = this.maxHealth;
      }
      this.setTotalHp();
      this.lowHpWarning();
      return true;
    }, delay);
  }

  healthRestore() {
    this.setHp(this.maxHealth);
  }

  addBuff(n) {
    this._buff += n;
  }

  removeBuff(n) {
    this._buff -= n;

    if (this._buff <= 0) {
      this._buff = 0;
    }
  }

  unableToAttack() {
    let cantAttackCondition =
      this._stunned || this._dead || this._attackDisable;

    if (cantAttackCondition) {
      return true;
    } else {
      return false;
    }
  }

  coolDown(_time) {
    this._attackDisable = true;
    setTimeout(() => {
      this._attackDisable = false;
    }, _time);
  }

  useBarrier(_damage) {
    if (this._barreira > 0 && this._barrieraActive) {
      this._barreira -= _damage;
      efeitoDanoBarreira(this);
      this._mit += _damage;
      if (this._barreira <= 0) this._barreira = 0;

      return true;
    }

    return false;
  }

  didHit() {}

  dmg(n) {
    this.dmgReceived();
    if (this.isInvisible) return;
    if (this.useBarrier(n)) return;

    this._dmgTaken += n;
    this._lastDmgTaken = n;
    this.didHit();

    if (this.hashp == false) {
      efeitoDano(this);
      this.kill();
      return;
    }

    if (this._uber) return;

    this._buff -= n;
    if (this._buff > 0) {
      this.setTotalHp();
      return;
    }

    this.hp += this._buff;
    this._buff = 0;
    this.setTotalHp();
    this.lowHpWarning();
    efeitoDano(this);
    if (this._totalHp <= 0) {
      this.hp = 0;
      this.kill();
    }
  }

  dmgReceived() {}

  kill(absolute) {
    if (!this._parentP) return;

    if (this.cartaId == "creeper" && !this.exploding && !absolute) {
      this.explode();
      return;
    }

    this._CHN.pause();

    if (this._parentP == inv) {
      elimCardInv(inv.children[this._place]);
    } else {
      elimCardMao(mao.children[this._place]);
    }

    this._dead = true;
  }

  changeEmojiToDefault() {
    this.emoji = this._defaultEmoji;
  }

  setEmoji(x) {
    this.emoji = x;
  }

  giveAllyEmoji(ally) {
    if (ally.statusEmoji == false) {
      ally.statusEmoji = this.allyEmoji;
    }
  }

  // this function has 2 parameters
  // parent: is the location where to hide/show button. If empty has 'inv' as default
  // trigger: if empty will hide the button, if false will how the button

  changeRetrato(img) {
    let retrato = this._thisCardP.children[1];
    retrato.style.backgroundImage = img;
  }

  activateButtonForSpeaker(_cartaId, _arena) {
    let arena;
    if (_arena == undefined) {
      arena = areObj;
    } else {
      arena = _arena;
    }

    let cartaId = _cartaId;
    let matchingCards = arena.some(
      (x) => x.cartaId == cartaId && !x.isInvisible
    );

    let hasInvMonark = invObj.some((x) => x.isMonark && x._despawn > 1);

    if (matchingCards || hasInvMonark) {
      this._invHiddenButton = false;
      return true;
    } else {
      this._invHiddenButton = true;
      return false;
    }
  }

  disableButton(_trigger, _element) {
    let element;
    let opacity;
    let cursor;
    if (_element == undefined) {
      element = this._buttonP;
    } else {
      element = _element;
    }

    if (_trigger == undefined || _trigger == true) {
      opacity = "0.2";
      cursor = "not-allowed";
    } else {
      opacity = "1";
      cursor = "pointer";
    }

    element.style.opacity = opacity;
    element.style.cursor = cursor;
  }

  everyRoundDefault() {
    this.buildUltAuto();
  }

  energiaDorment(_trigger) {
    this._energiaDorment = _trigger;
  }

  stun(_stunnedCooldown) {
    if (this._stunned || this.isInvisible || this._uber ) return;

    this._stunned = true
    this.dmg(1)
    this._thisCardP.classList.add("stunned");

    this._targetPoint += 1200;
    this._stunnedCooldown = _stunnedCooldown;

    
  }

  removeStun(_absolute) {
    if (!this._stunned && this._stunnedCooldown <= 0) return;

    this._stunned = false;
    this._stunnedCooldown = 0;
    this._thisCardP.classList.remove("stunned");

    this.targetPointSetter(this._targetPointNatural, true);

    

    setTimeout(
      () => this._thisCardP.classList.add("unstunned"),

      1
    );

    setTimeout(() => this._thisCardP.classList.remove("unstunned"), 1000);
  }

  tick() {}

  //DOM METHODS

  hideHp(x) {
    if (x === false) {
      this._hpP.style.visibility = "visible";
    } else {
      this._hpP.style.visibility = "hidden";
    }
  }

  hide(_element, _trigger) {
    let element = _element;
    let trigger = _trigger;

    if (trigger == undefined || trigger === true) {
      element.style.visibility = "hidden";
    } else if (trigger === false) {
      element.style.visibility = "visible";
    }
  }

  print() {
    this.place();

    if (!this._cfgDefaultAdded) {
      this.cfgDefault();
      this._cfgDefaultAdded = true;
    }

    if (!this._cfgAdded) {
      this.cfg();
      this._cfgAdded = true;
      //
    }

    //stunned
    if (this._stunned) {
    }

    let parentP = this._parentP;

    let hp = this._hpP;
    let energia = parentP.children[this._place].children[3].children[0];
    let ulti = parentP.children[this._place].children[2];
    let botao = this._parentP.children[this._place].children[3].children[2];

    if (this._hasUlti != false) {
      ulti.textContent = this.ulti + "%";
      this.ulti == 100 && !this.unableToAttack()
        ? (ulti.style.cursor = "pointer")
        : (ulti.style.cursor = "not-allowed");
    }

    if (this.dmgBoss || this._energiaDorment) {
      energia.textContent = Math.trunc(this.energia) + this._defaultEmoji;
    } else if (this.dano) {
      energia.textContent = this.dano + this._defaultEmojiDano;
    } else {
      energia.textContent = this.energia + this.emoji;
    }

    if (this.emojiHp) {
      hp.textContent = this.hp + this.emojiHp;
    }

    if (this._buff > 0) {
      hp.classList.add("critico");
    } else {
      hp.classList.remove("critico");
    }

    //butao

    if (this._parentP == inv) {
      this._invHiddenButton
        ? (botao.style.visibility = "hidden")
        : (botao.style.visibility = "visible");
    }

    if (this._parentP == mao) {
      this._maoHiddenButton
        ? (botao.style.visibility = "hidden")
        : (botao.style.visibility = "visible");
    }

    // stilo botao

    if (this.requireAmmo) {
      this._buttonP.innerHTML = "⚔️";

      if (ammo.total > 0 && !this.unableToAttack() && !this._poderUsing) {
        this._buttonP.style.opacity = 1;
        this._buttonP.style.cursor = "pointer";
      } else {
        this._buttonP.style.opacity = 0.3;
        this._buttonP.style.cursor = "not-allowed";
      }
    } else if (!this.unableToAttack()) {
      if (!this.customButtonEmoji) {
        this._buttonP.innerHTML = "🔘";
      }

      this._buttonP.style.opacity = 1;
      this._buttonP.style.cursor = "pointer";
    } else {
      if (!this.customButtonEmoji) {
        this._buttonP.innerHTML = "🔘";
      }

      this._buttonP.style.opacity = 0.3;
      this._buttonP.style.cursor = "not-allowed";
    }

    //estilo selo
    if (this._exposto) {
      this._seloP.textContent = "🎯";
    } else {
      this._seloP.textContent = "";
    }

    //estilo energia dorment
    if (this._energiaDorment) {
      this._energiaP.style.opacity = 0.5;
      this._energiaP.style.cursor = "pointer";
    } else if (this._energiaDorment === false) {
      this._energiaP.style.cursor = "default";
      this._energiaP.style.opacity = 1;
    }

    //warning low hp

    this.lowHpWarning();

    if (this._parentP == mao) {
      this.tickMao();
    }
  }

  ammoCheck() {
    if (ammo.total <= 0) {
      return false;
    } else {
      return true;
    }
  }
  tickMao() {}
  lowHpWarning() {
    if (!this.hashp) return;

    let inDanger = (this.hp / this.maxHealth) * 100 < 30;

    this.setTotalHp();

    if (!this.memoryStyle) {
      this.prevColor = this._hpP.style.color;
      this.memoryStyle = true;
    }

    if (inDanger) {
      this._hpP.style.color = "red";
      this._hpP.textContent = this._totalHp + "💔";
      this._hpP.classList.add("pulsar");

      this._seedP.classList.add("warning-card");
      this._seedP2.classList.add("warning-card");
      this._seedP.style.visibility = "visible";
      this._seedP2.style.visibility = "visible";

      if (!this.audioWarnedHealthLow && this._audioNeedHealingFiles) {
        let faixa =
          this._sourceNeedHealing +
          gerarNumero(1, this._audioNeedHealingFiles) +
          ".mp3";
        audioPlayer(faixa, true, this._CHN, 0.5);
        this.audioWarnedHealthLow = true;
      }
    } else {
      this._hpP.style.color = this.prevColor;
      this._hpP.textContent = this._totalHp + "💚";
      this._hpP.classList.remove("pulsar");
      this._seedP.classList.remove("warning-card");
      this._seedP2.classList.remove("warning-card");

      this._seedP.style.visibility = "hidden";
      this._seedP2.style.visibility = "hidden";

      this.audioWarnedHealthLow = false;
    }
  }

  // this method will set dafaults for each card and will run only once
  cfg() {
    false;
  }

  cfgDefault() {
    //required cards
    this._requiredIntegrante
      ? (this._requiredIntegrante = integrante())
      : false;

    this._requiredIntegrante2
      ? (this._requiredIntegrante2 = integrante())
      : false;

    this._requiredCidade ? (this._requiredCidade = cidade()) : false;

    this._requiredCidade2 ? (this._requiredCidade2 = cidade()) : false;

    if (this.hashp === true) {
      this._totalHp = this.hp + this._buff;
      this._hpP.textContent = this._totalHp + "💚";
    }

    this.levelSetter();
  }

  integranteRequiredCard() {
    let required1 = invObj.some(
      (x) => x._integrante == this._requiredIntegrante
    );
    let required2 = invObj.some(
      (x) => x._integrante == this._requiredIntegrante2
    );

    if (required1 || required2) {
      this._invHiddenButton = false;
    } else {
      this._invHiddenButton = true;
    }
  }
}

export let especiais = {
  notSpecial: {
    cartaId: "notSpecial",
    nome: "",
    raridade: "false",
    pontoEspecial: 0,
    energia: 0,
    poder: false,
    efeito: "",
    familia: "",
    descricao: "",
    emoji: "",
    retrato: "",
  },

  tenica: {
    cartaId: "especial-tenica",
    nome: "TÉNICA",
    raridade: raridades.rainha,
    energia: undefined,
    emoji: "👑",
    allyEmoji: "👑",
    retrato: "url('pics/tenica.webp')",
    cargo: "",
    hp: 250,
    hashp: true,
    maxHealth: 250,
    dmgBoss: false,
    tank: true,

    cfg() {
      let energia = gerarNumero(65, 82);
      this.energia = energia;
      this.targetPointSetter(770);
    },

    poder() {
      if (this.unableToAttack()) return;
      let varianteTenica = inv.children[this._place];
      let botao = varianteTenica.children[3].children[2];

      // buffa farms
      for (let j = 0; j < 6; j++) {
        let carta = invObj[j];

        if (carta.dmgBoss) {
          carta.energia = carta.energia + this.energia;
          this.giveAllyEmoji(carta);
        }
      }

      for (let j = 0; j < 6; j++) {
        let carta = maoObj[j];

        if (carta.dmgBoss) {
          carta.energia = carta.energia + this.energia;
          this.giveAllyEmoji(carta);
        }
      }

      // bufar especiais
      invObj.map((x) => {
        if (x._stunned) {
          x.removeStun(true);
        }

        if (x.hashp) {
          x.healthRestore();
        }

        if (x._cargo == "carta-monark") {
          x.energia = this.energia;
          x.dmgBoss = true;
          this.giveAllyEmoji(x);
        }

        if (x.cartaId == "sentry") {
          x.ammonition = x.ammonitionMax;
        }

        if (x._barreira != undefined) {
          x._barreira = x._barreiraMax;
          x._barrieraActive = true
        }

        smokeOnInv.smoke(false)

      });

      hpPlayer.add(50);
      ammo.add(10);
      numCartas.add(50);

      this.changeEmojiToDefault();

      // this.dmgBoss = true;

      this.energiaDorment(true);

      let tenicaAu = ["tenica.mp3"];
      snd(tenicaAu);
      this._invHiddenButton = true;
    },

    nomeStyle: {
      fontSize: "",
      fontFamily: "Cormorant Upright",
      color: "",
    },

    retratoStyle: {
      border: "2px double gold",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "black",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },

  speaker: {
    cartaId: "carta-speaker",
    nome: "SPEAKER",
    raridade: raridades.cavaleiro,
    energia: 1,
    emoji: " 😡",
    retrato: "url('pics/SPEAKER.webp')",
    cargo: "MONARK BAN! 🔨",
    ataqueE: 1,
    hp: 25,
    hashp: true,
    maxHealth: 25,
    dmgBoss: false,
    dormindo: false,
    _invHiddenButton: true,
    sonoCoolDown: undefined,
    sonoCoolDownInterval: undefined,

    cfg() {
      this.targetPointSetter(500);
    },

    energiaPoder() {
      if (this.dormindo) return;

      this.dormiu(true);
      console.log("CLICKEI PARA DORMIR");
    },

    tick() {
      if (this._energiaDorment === false && this.dormindo) {
        this.dmgBoss = true;
      }
      if (this.dormindo) {
        this.disableButton();
      } else {
        this.activateButtonForSpeaker("monark");
      }
    },

    dormiu(_trigger) {
      let sonoCoolDownStart = () => {
        this.sonoCoolDown = 10;

        this.sonoCoolDownInterval = setInterval(() => {
          if (this.sonoCoolDown <= 1 || this._dead) {
            clearInterval(this.sonoCoolDownInterval);
            this.dormiu(false);
          } else {
            this.sonoCoolDown--;
            descriptionSpeaker.innerHTML = this.sonoCoolDown + "&#128564;";

            console.log("DORMINDO");
          }
        }, 1000);
      };

      let coolDownTimer;

      let varianteSpeaker = this._thisCardP;
      let speakerDorminfo = 'url("pics/speakerDormindo.jpg")';
      let speakerNotSleepingPic = 'url("pics/SPEAKER.webp")';
      let descriptionSpeaker = varianteSpeaker.children[2];
      let speakerSleepAu = ["speakerSleep.mp3"];

      if (_trigger === true) {
        sonoCoolDownStart();

        this.dormindo = true;
        this.addBuff(25);
        this.targetPointSetter(1000);
        this.changeRetrato(speakerDorminfo);
        this.energiaDorment(true);
        this.dormindo = true;
        snd(speakerSleepAu);
        descriptionSpeaker.style.fontSize = "1.5em";
        descriptionSpeaker.innerHTML = this.sonoCoolDown + "&#128564;";
      } else if (_trigger === false) {
        clearInterval(this.sonoCoolDownInterval);
        this.dormindo = false;
        this.targetPointSetter(500);
        descriptionSpeaker.style.fontSize = "1em";
        descriptionSpeaker.innerHTML = "MONARK BAN! 🔨";
        this.changeRetrato(speakerNotSleepingPic);
        this.energiaDorment(false);
        this.dmgBoss = false;
      }
    },

    poder() {
      if (this.unableToAttack()) return;
      if (this.dormindo) return;

      this.coolDown(350);

      let speakerSono = () => {
        let highRiskSleep = gerarNumero(220, 500);
        let caraCoroa = per(90);
        let normalChance = per(15);

        if (this.energia > highRiskSleep && caraCoroa) {
          this.dormiu(true);
        } else if (normalChance && this.energia > 5) {
          this.dormiu(true);
        }
      };

      let order = ["speaker" + gerarNumero(1, 2) + ".mp3", 0.3];

      speakerSono();

      if (this.cleanArena() && !this.dormindo) {
        snd(order);
        return;
      }

      for (let j = 0; j < 10; j++) {
        let vitima = areObj[j];
        let matchingCards = areObj.some(
          (x) => x.cartaId == "monark" && !x.isInvisible
        );

        if (
          !matchingCards ||
          areObj[j].cartaId != "monark" ||
          vitima.isInvisible
        )
          continue;
        if (!this.dormindo) {
          this.energia += gerarNumero(8, 48);
          vitima.kill();

          snd(order);
          break;
        }
      }
    },

    cleanArena() {
      for (let i = 0; i < 100; i++) {
        let slot = gerarNumero(0, 5);
        let carta = invObj[slot];
        let monarkAlly = "carta-monark";

        if (carta._cargo == monarkAlly) {
          let despawn = carta._despawn;

          this.energia += despawn;
          carta.kill();
          console.log("ELIMINEI MONARK");
          return true;
        }
      }
    },

    nomeStyle: {
      fontSize: "",
      fontFamily: "",
      color: "",
    },

    retratoStyle: {
      border: "2px dotted #18d742",
      backgroundColor: "",
    },

    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },

  maisCartas: {
    cartaId: "especial-click",
    nome: "MAIS CARTAS",
    raridade: raridades.campones,

    energia: 15,

    emoji: "🃏",
    retrato: "url('pics/clickretrato.webp')",
    cargo: "",

    hp: 10,
    maxHealth: 10,
    hashp: true,
    dmgBoss: false,
    _requiredIntegrante: true,
    _invHiddenButton: true,
    _requiredCidade: true,
    cfg() {
      this.energia = gerarNumero(25, 50);

      this._nomeP.style.marginTop = "7px";
      // this._cargoP.style.visibility = "hidden";
      this.targetPointSetter(580);
    },

    tickMao() {
      if (!this.integranteShowed) {
        this.integranteShowed = true;
        this._cargoP.innerHTML = this._requiredIntegrante;
      }
    },

    tick() {
      let hasIntegrante = invObj.some(
        (x) => x._integrante == this._requiredIntegrante && !x.isMonark
      );

      if (hasIntegrante) {
        this._invHiddenButton = false;
        this._thisCardP.classList.add("critico");
        this.giveCard = true;
      } else {
        this._invHiddenButton = true;
        this._thisCardP.classList.remove("critico");
        this.giveCard = false;
      }
    },

    poder() {
      if (this.unableToAttack()) return;
      if (this.giveCard) {
        numCartas.add(this.energia);
        if (packP.children[0].id == "carta") {
          tudo();
        }
      }

      this.kill();
    },

    // ataqueE: bonusCartasPE()
    nomeStyle: {
      fontSize: "130%",
      fontFamily: "",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #dea710",

      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },

  maisAmmo: {
    cartaId: "maisAmmo",
    nome: "MAIS MANA",
    raridade: raridades.campones,

    energia: 15,

    emoji: "💧",
    retrato: "url('pics/maisAmmoRetrato.gif')",
    cargo: "",

    hp: 10,
    maxHealth: 10,
    hashp: true,
    dmgBoss: false,
    _requiredIntegrante: true,
    _invHiddenButton: true,
    cfg() {
      this.energia = gerarNumero(2, 7);

      this._nomeP.style.marginTop = "7px";
      this.targetPointSetter(570);
    },

    tickMao() {
      if (!this.integranteShowed) {
        this.integranteShowed = true;
        this._cargoP.innerHTML = this._requiredIntegrante;
      }
    },

    tick() {
      let hasIntegrante = invObj.some(
        (x) => x._integrante == this._requiredIntegrante && !x.isMonark
      );

      if (hasIntegrante) {
        this._invHiddenButton = false;
        this._thisCardP.classList.add("critico");
        this.giveCard = true;
      } else {
        this._invHiddenButton = true;
        this._thisCardP.classList.remove("critico");
        this.giveCard = false;
      }
    },

    poder() {
      if (this.unableToAttack()) return;
      if (this.giveCard) {
        ammo.add(this.energia);
      }

      this.kill();
    },

    // ataqueE: bonusCartasPE()
    nomeStyle: {
      fontSize: "130%",
      fontFamily: "",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #0000ff",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },

  abelha: {
    cartaId: "abelha",
    nome: "ABELHA",
    raridade: raridades.sangueAzul,
    _invHiddenButton: false,

    energia: 0,

    emoji: "",

    retrato: "url('pics/retratoAbelha.gif')",
    retrato2: "url('pics/retratoAbelha.webp')",
    cargo: "bzzzz....",
    dmgBoss: false,
    hp: 10,
    maxHealth: 10,
    hashp: true,
    dano: 15,

    cfg() {
      let _dano = gerarNumero(24, 30);
      this.dano = _dano;
      this.onlyReadDmg = _dano;
      this.targetPointSetter(100);
    },

    tick() {
      // if (this.buffAdded) {
      // } else {
      //   this.buffAdded = true;
      //   this.addBuff(15);
      // }

      if (this._dead) {
        clearInterval(this.attackInterval);
        return;
      }
      if (this._dead) {
        clearInterval(this.poisonInterval);
        return;
      }

      let numOfBees = 0;

      invObj.map((x) => {
        x.cartaId == "abelha" ? numOfBees++ : false;
      });

      if (numOfBees > 0) {
        this.dano = this.onlyReadDmg * numOfBees;
      }

      this._numOfBees = 0;
      invObj.map((x) => {
        x.cartaId == "abelha" ? this._numOfBees++ : false;
      });
    },

    poison(trigger) {
      let turuInField = () => {
        if (!invObj.some((x) => x._integrante == "Turu")) {
          return false;
        } else {
          return true;
        }
      };

      let poisonDmg = 1;

      if (turuInField()) {
        poisonDmg = 8;
      }

      let timer = 1200;

      this.poisonInterval = setInterval(() => {
        if (this._dead || trigger === false) {
          clearInterval(this.poisonInterval);
          return;
        }

        this.dmg(poisonDmg);
      }, timer);
    },

    poder() {
      if (this.unableToAttack()) return;
      let timer = 1200;

      if (this._attacking || this._dead) {
        clearInterval(this.attackInterval);
        this._attacking = false;
        return;
      }

      this.poison();

      this._invHiddenButton = true;
      this.ataque(this.dano);

      this.attackInterval = setInterval(() => {
        this._attacking = true;

        if (this._dead) {
          clearInterval(this.attackInterval);
          return;
        }

        this.ataque(this.dano, 0);
      }, timer);
    },

    nomeStyle: {
      fontSize: "180%",
      fontFamily: "minecraft",
      color: "#AAAAAA",
    },

    retratoStyle: {
      border: "2px solid #545251",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "170%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },

    // ataqueE: abelhaEnergia() + "🐝"
  },


  premioMonark: {
    cartaId: "premiomonark",
    nome: "PREMIO MONARK",
    raridade: raridades.sangueAzul,
    energia: 0,
    emoji: "",

    retrato: 'url("/pics/retratoPremioMonark.gif")',
    cargo: "",
    hp: 70,
    hashp: true,
    maxHealth: 10,
    dmgBoss: false,
    _requiredIntegrante: true,
    _requiredIntegrante2: true,
    _invHiddenButton: true,
    cfg() {
      this.targetPointSetter(200);
    },

    tick() {
      this.integranteRequiredCard();
    },

    tickMao() {
      this._cargoP.innerHTML =
        this._requiredIntegrante.toUpperCase() +
        "<br>" +
        this._requiredIntegrante2.toUpperCase();
    },

    poder() {
      if (this.unableToAttack()) return;
      function infectar() {
        areObj.map((x) => {
          if (x.empty || x.isInvisible) return;

          //salvar style
          x.previousCartaBackgroundColor = x._thisCardP.style.backgroundColor;
          x.previousCartaBackgroundImage = x._thisCardP.style.backgroundImage;
          x.previousHp = x.hp;
          x.previousMaxHealth = x.maxHealth;
          x.previousBorder = x._thisCardP.style.border;
          x.previousDano = x.dano;
          x.previousEnergia = x.energia;

          //tirar style
          x._thisCardP.style.backgroundColor = "black";
          x._thisCardP.style.backgroundImage = "none";
          x._cargoP.style.visibility = "hidden";
          x._thisCardP.style.border = "1px solid grey";

          x._thisCardP.children[0].classList.add("float");
          x._thisCardP.children[3].children[2].classList.add("float");
          x._hpP.classList.add("float");
          x._energiaP.classList.add("float");

          //tirar obj values
          x.hp = 1;
          x.maxHealth = 1;
          x.dano = 1;
          x.energia = 1;

          x.critico(false);
          x.readyToAttack = false;
          x.infected = true;
        });
      }

      infectar();
      this.kill();
    },

    nomeStyle: {
      fontSize: "",
      fontFamily: "premiomonark",
      color: "",
      efeito: "float",
    },

    retratoStyle: {
      border: "4px solid black",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "premiomonark",
      fontSize: "",
      class: "float",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
    novoAtaqueStyle: {
      color: "#77777b",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },

  spy: {
    cartaId: "spy",
    nome: "SPY",
    raridade: raridades.cavaleiro,
    energia: 1,
    requireAmmo: true,
    emoji: "💥",
    emojiHp: "",
    ulti: 0,
    retrato: 'url("/pics/spyRetrato.webp")',
    cargo: "",
    hashp: false,
    hp: 3,
    maxHealth: 3,
    dmgBoss: false,
    hashp: true,
    clockReady: true,
    isInvisible: false,
    dano: undefined,
    clockToVis: false,

    cfg() {
      this.dano = gerarNumero(180, 240);
      this._nomeP.style.marginTop = "5px";

      if (per(0.1)) {
        this.dano = gerarNumero(520, 760);
        this.retrato = 'url("/pics/spyRareRetrato.PNG")';
        this.changeRetrato(this.retrato);

        this._retratoP.style.border = "3px solid lime";
        this._thisCardP.style.border = "3px solid lime";
      }

      if (false) {
        this.dano = gerarNumero(11000, 15000);
        this.setHp(999);
      }

      this._cargoP.textContent = "⌚";
      this._cargoP.style.fontSize = "2em";

      this.targetPointSetter(758);
    },

    tick() {
      if (this.clockReady || this.clockToVis) {
        this._cargoP.style.cursor = "pointer";
        this._cargoP.style.opacity = "1";
      } else {
        this._cargoP.style.cursor = "not-allowed";
        this._cargoP.style.opacity = "0.1";
      }
    },

    didHit() {
      if (this.clockReady && !this.isInvisible) {
        console.log("ativar relogio");
        this._uber = true;
        this.hasBeenHit = true;
        this.ult();
      }
    },

    ult() {
      if (this.unableToAttack()) return;
      let spy = this._thisCardP;
      let spyWatch = this._cargoP;
      let botao = spy.children[3].children[2];
      let retrato = spy.children[1];

      let invisWatch = () => {
        let invis = () => {
          spy.className = "invisible";
          spyWatch.id = "invis";

          retrato.classname = "invisible";
          spy.children[0].className = "invis";

          // this._energiaP.textContent = this.energia;

          this._invHiddenButton = true;

          retrato.style.backgroundImage = 'url("/pics/spyRetrato3.gif")';

          let spyInvisAu = ["deadRing.mp3", 0.3];
          snd(spyInvisAu);

          this.clockToVis = true;
          this.clockReady = false;
          this.isInvisible = true;
          this._monarkFree = true;
          this.hasBeenHit = false;
          // this.dmgBoss = true;
          this.changeEmojiToDefault();
          this.exposto(false);
        };

        let vis = () => {
          if (this._dead) return;

          spy.className = "visible";
          spyWatch.id = "vis";
          retrato.classList.remove("invisible");
          retrato.classList.add("visible");
          spy.children[0].className = "vis";
          this._invHiddenButton = false;
          retrato.style.backgroundImage = this.retrato;
          // this._energiaP = this.dano;

          let spyInvisAu = ["spyInvis.mp3", 0.3];
          snd(spyInvisAu);
          this.isInvisible = false;
          this._monarkFree = false;

          this.clockToVis = false;
          this.clockReady = false;
          this._uber = false;
          // this.dmgBoss = false;
          this.setEmoji(this._defaultEmojiDano);
          this.exposto();
        };

        if (this.clockReady && this.hasBeenHit && !this.unableToAttack()) {
          invis();
        } else if (this.isInvisible && !this.unableToAttack()) {
          vis();
        }
      };

      invisWatch();
    },

    vis() {
      setTimeout(() => {
        let spy = this._thisCardP;
        let spyWatch = this._cargoP;
        let retrato = spy.children[1];

        if (this._dead) return;

        spy.className = "visible";
        spyWatch.id = "vis";
        retrato.classList.remove("invisible");
        retrato.classList.add("visible");
        spy.children[0].className = "vis";
        this._invHiddenButton = false;
        retrato.style.backgroundImage = 'url("/pics/spyRetrato.webp")';
        this._energiaP = this.dano;

        let spyInvisAu = ["spyInvis.mp3", 0.3];
        snd(spyInvisAu);
        this.isInvisible = false;
        this._monarkFree = false;

        this.clockToVis = false;
        this.clockReady = false;
        this._uber = false;
        this.dmgBoss = false;
        this.setEmoji(this._defaultEmojiDano);
        this.exposto();
      }, 450);
    },

    everyRound() {
      // para recarregar
      if (per(33) && !this.isInvisible) {
        this.clockReady = true;
        //para acabar invisibilidade
      } else if (per(20) && this.isInvisible) {
        this.vis();
      }
    },

    poder() {
      if (this.unableToAttack()) return;

      if (ammo.total <= 0) {
        return;
      }

      let spy = this._thisCardP;
      let retrato = spy.children[1];

      retrato.style.backgroundImage = 'url("/pics/spyRetrato2.gif")';

      this.ataque() ? (this.energia += gerarNumero(3, 5)) : 0;

      let stabAu = ["stab.mp3", 0.1];
      snd(stabAu);

      if (gerarNumero(1, 3) == 2) {
        let spyAu = ["spy" + gerarNumero(1, 7) + ".mp3", 0.2];
        snd(spyAu);
      }

      this.coolDown(550);
    },

    nomeStyle: {
      fontSize: "210%",
      fontFamily: "tf2",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #cf6a32",
      backgroundColor: "unset",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "tf2",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "tf2",
      visibility: "visible",
    },
  },

  estoicoTuru: {
    cartaId: "estoico",
    nome: "ESTOICO <br> TURU",
    raridade: raridades.campones,
    pontoEspecial: 0,
    energia: 0,
    tank: true,
    emoji: "",
    retrato: "url('pics/estoicoRetrato.jpg')",
    cargo: "",
    dmgBoss: false,
    dano: 1,
    hp: 80,
    maxHealth: 80,
    hashp: true,
    dmgEstoico: 0,

    cfg() {
      this.targetPointSetter(660);
    },

    poder() {
      if (this.unableToAttack()) return;

      this.ataque(this.dano, 0, [true, this.dano]);

      this.dano = 1;
    },

    didHit() {
      this.dano += this._lastDmgTaken;
    },

    tick() {
      if (!this.buffAdded) {
        this.addBuff(20);
        this.buffAdded = true;
      }

      if (this.dano <= 1) {
        this._attackDisable = true;
      } else {
        this._attackDisable = false;
      }

      let hasTuruInInv = invObj.map((x) => {
        if (x.Turu && !x.hasHelpedEstoico) {
          this.addBuff(20);
          x.hasHelpedEstoico = true;
        }
      });
    },

    nomeStyle: {
      fontSize: "250%",
      fontFamily: "estoico",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #cde2e0",
      backgroundColor: "unset",
    },

    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "150%",
      fontFamily: "estoico",
      visibility: "visible",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "150%",
      fontFamily: "estoico",
      visibility: "visible",
    },
  },

  lucio: {
    cartaId: "lucio",
    nome: "LÚCIO",
    raridade: raridades.sangueAzul,

    energia: 1,
    requireAmmo: true,
    emoji: "",
    cargo: "0%",
    retrato: "url('pics/retratoLucio.jpg')",
    dmgBoss: false,
    dano: 4,
    _hasUlti: true,
    ulti: 0,

    hp: 15,
    maxHealth: 15,
    hashp: true,

    nomeStyle: {
      fontSize: "250%",
      fontFamily: "overwatch",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #15b871",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "overwatch",
      fontSize: "250%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "150%",
      fontFamily: "overwatch",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "150%",
      fontFamily: "overwatch",
      visibility: "visible",
    },

    tick() {
      if (this.startedBoost) return;

      let prevBorder = this._thisCardP.style.border;

      let borderBlink = () => {
        this._thisCardP.style.border = "5px solid cyan";

        setTimeout(() => {
          this._thisCardP.style.border = prevBorder;
        }, 850);
      };

      this.startedBoost = true;
      this.healingBoostInterval = setInterval(() => {
        if (!this._dead) {
          console.log("LUCIO curou");
          this.healingBoost();
          borderBlink();
        } else {
          clearInterval(this.healingBoostInterval);
          this.startedBoost = false;
        }
      }, this.healingBoostCoolDown);
    },

    cfg() {
      this.healingBoostCoolDown = 2000;
      this.dano = 12;
      this.targetPointSetter(320);
    },

    healingBoost() {
      this.healValue = 7;
      this.healPlayerValue = 2

      invObj.map((x) => {
        if (x.hashp && !x._fullHp) {
          x.heal(this.healValue);
          this.buildUlt(this.healValue);
          this._healingDone += this.healValue;
        }
      });
      
        hpPlayer.add(this.healPlayerValue);
        // this._healingDone += this.healValue;
        
      this.heal(this.healValue * 2);
    },

    ult() {
      if (this._parentP != inv) return;

      let buff = 210
      if (this.ulti != 100 || this.unableToAttack()) return;

      invObj.map(function (x) {
        if (x.hashp) {
          x.addBuff(buff);
        }
      });
      this.ulti = 0;
      this._cargoP.classList.remove("critico");





    },

    poder() {
      if (this.unableToAttack() || this._poderUsing || !this.ammoCheck())
        return;

      this._poderUsing = true;

      let ultiRate = () => gerarNumero(0, 2);

      let ammo = 1;
      let tiros = 3;

      let weapon = () => {
        if (this._dead) return;
        this._poderUsing = true;
        if (this.ataque(false, ammo)) {
          this.buildUlt(ultiRate());
        }

        tiros--;
        ammo = 0;
        if (tiros == 0 || this._dead) {
          clearInterval(multiShot);
          this._poderUsing = false;
          return;
        }
      };

      let multiShot = setInterval(() => {
        weapon();
      }, 220);
    },
  },

  jhin: {
    cartaId: "jhin",
    nome: "JHIN",
    raridade: raridades.cavaleiro,

    energia: 4,

    emoji: "💥",
    allyEmoji: "💢",
    cargo: "4",
    retrato: "url('pics/retratoJhin.jpg')",
    dmgboss: false,
    tiros: 4,
    dano: 4,
    hp: 10,
    hashp: true,
    maxHealth: 10,
    aim: "are",
    atirador: false,

    tick() {
      this.setDmg();
    },

    cfg() {
      this.targetPointSetter(650);
    },

    setDmg() {
      this.dano = 4;

      let somaEnergia = 0;

      invObj.map((x) => {
        if (x.Gandalf && x.dmgBoss) {
          somaEnergia += x.energia * 2;
        } else if (x.dmgBoss) {
          somaEnergia += x.energia;
        }
      });

      this.dano += somaEnergia;
      if (this.tiros == 1) {
        this.dano *= 4;
      }
    },

    poder() {
      if (this.unableToAttack()) {
        console.log(this + " NOT ABLE TO ATTACK");
        return;
      }

      let jhin = this._thisCardP;
      let tiros = this.tiros;
      let tirosString = jhin.children[2];

      //ESCOLHER ATIRADOS
      for (let j = 0; j < invObj.length; j++) {
        let atirador = invObj[j];
        let atiradorP = atirador._thisCardP;
        let nome = atirador._integrante;

        let checkTiros = () => {
          if (this.tiros >= 1) {
            return true;
          } else {
            return false;
          }
        };

        let playJhinAu = (n) => {
          let jhinAu = ["jhin" + gerarNumero(1, 9) + ".mp3", 0.2];

          if (gerarNumero(1, n) == 1) {
            setTimeout(function () {
              snd(jhinAu);
            }, 800);
          }
        };

        if (checkTiros()) {
          if (tiros == 4) {
            let countAu = ["jhinConta1.mp3", 0.2];
            snd(countAu);

            playJhinAu(3);
          }

          if (tiros == 3) {
            let countAu = ["jhinConta2.mp3", 0.2];
            snd(countAu);
          }

          if (tiros == 2) {
            let countAu = ["jhinConta3.mp3", 0.2];
            snd(countAu);

            tirosString.classList.add("critico");
          }

          //TIROS
          // TULTIMO TIRO MULTIPLICA POR 4
          if (tiros == 1) {
            tirosString.textContent = "";
            this._invHiddenButton = true;

            let countAu = ["jhinConta4.mp3", 0.2];
            snd(countAu);

            this.ataque(this.dano, 0);
            console.log("DANO DO JHIN " + this.dano);
            playJhinAu(1);
            this.tiros--;
            this.kill();
          } else {
            this.tiros--;
            tirosString.textContent = this.tiros;
            this.ataque(this.dano, 0);

            console.log("DANO DO JHIN " + this.dano);
          }

          this._attackDisable = true;
          setTimeout((x) => {
            this._attackDisable = false;
          }, 1200);

          let cardComEnergia = [];

          invObj.map((x) => {
            if (x.dmgBoss) {
              cardComEnergia.push(x);
            }
          });

          let cartaMaxima = Math.max(...cardComEnergia.map((x) => x.energia));

          for (let i = 0; i < 6; i++) {
            let x = invObj[i];

            if (x.energia && x.dmgBoss && x.energia == cartaMaxima && per(0)) {
              x.kill();

              return;
            }
          }

          // invObj.map((x) => {

          // });

          break;
        }

        break;
      }
    },

    nomeStyle: {
      fontSize: "250%",
      fontFamily: "lol",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #FFBC42",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "lol",
      fontSize: "250%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "100%",
      fontFamily: "lol",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "lol",
      visibility: "",
    },
  },

  dva: {
    cartaId: "dva",
    nome: "D.Va",
    raridade: raridades.sangueAzul,
    energia: 10,
    emoji: "",
    cargo: "0%",
    retrato: "url('pics/dvaMecaRetrato.jpg')",
    dmgBoss: false,
    ulti: 0,
    dano: 10,
    hp: 100,
    maxHealth: 100,
    hashp: true,
    _hasUlti: true,
    tank: true,
    requireAmmo: true,

    //AUDIO FILES
    _audioChosenFiles: 5,
    _sourceChosen: "dva/chosen",

    _audioUltingFiles: 2,
    _sourceUlting: "dva/ulting",

    _audioUltiReadyFiles: 2,
    _sourceUltiReady: "dva/ultiReady",

    _audioAttackingFiles: 10,
    _sourceAttacking: "dva/attacking",

    _audioNeedHealingFiles: 2,
    _sourceNeedHealing: "dva/needHealing",

    tick() {},

    cfg() {
      this.dano = gerarNumero(38, 55);
      this.targetPointSetter(680);
    },

    ult() {
      if (this.ulti != 100 || this.unableToAttack()) return;

      let dvaToMinidva = () => {
        this.setHp(10);
        this.changeRetrato('url("/pics/dva.webp")');
        // this.dmgBoss = true;
        this.energiaDorment(true);
        this._stunned = false;
        this._thisCardP.children[2].textContent = "";
        this.dano = 0;
        this._buff = 0;
        this.energia = 1 + this._dmgTaken;
        this._hasUlti = false;
        this.tank = false;
        this._thisCardP.classList.remove("piscar");
        this.targetPointSetter(400);
      };

      this._invHiddenButton = true;
      this._uber = true;
      this.targetPointSetter(1);
      this._ulting = true;
      this.ulti = 0;
      this._cargoP.classList.remove("critico");
      this.changeRetrato('url("/pics/dvaUlting.gif")');
      this._retratoP.style.backgroundSize = "100% 100%";
      let faixa =
        this._sourceUlting + gerarNumero(1, this._audioUltingFiles) + ".mp3";
      audioPlayer(faixa, true, this._CHN, 0.5);
      this._thisCardP.classList.add("piscar");

      let ultiDmg = this.dano * 50;
      this.dano = ultiDmg;

      setTimeout(
        () => {
          if (this._dead) return;

          areObj.map((x) => {
            x.dmg(this.dano, false, this);
            this._dmgDone += this.dano;
          });

          this._dmgDone += this.dano;

          dvaToMinidva();
        },

        2700
      );
    },

    poder() {
      if (this.unableToAttack()) return;

      if (this._ulting) return;

      let ultiRate = () => gerarNumero(2, 9);

      if (this.ataque(false, undefined, [true, false])) {
        this.buildUlt(ultiRate());

        if (per(20)) {
          let faixa =
            this._sourceAttacking +
            gerarNumero(1, this._audioAttackingFiles) +
            ".mp3";
          audioPlayer(faixa, true, this._CHN, 0.5);
        }
      }
      this.coolDown(650);
    },

    nomeStyle: {
      fontSize: "250%",
      fontFamily: "overwatch",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #ee4bb5",
      backgroundColor: "",
      backgroundSize: "cover",
    },
    cargoStyle: {
      fontFamily: "overwatch",
      fontSize: "250%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "150%",
      fontFamily: "overwatch",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "150%",
      fontFamily: "overwatch",
      visibility: "visible",
    },
  },

  creeper: {
    cartaId: "creeper",
    nome: "CREEPER",
    raridade: raridades.cavaleiro,
    energia: 0,
    emoji: "",
    retrato: "url('pics/retratoCreeper.png')",
    cargo: "",
    dmgBoss: false,
    _canBeDeleted: false,
    hashp: false,
    _everyRoundMao: true,
    _invHiddenButton: true,
    _canBeSold: false,
    dano: undefined,
    exploding: false,
    _monarkReplaceble: false,

    cfg() {
      let dano = gerarNumero(40, 85);

      this.dano = dano;
      this.targetPointSetter(790);
    },

    everyRound() {
      if (this.exploding || this._parentP != inv) return;

      let chance = per(3.5);

      if (chance) {
        this.explode();
      }
    },

    explode() {
      audioPlayer("creeper.mp3", false, this._CHN, 0.6);
      if (this._dead) {
        this._CHN.pause();
        return;
      }

      this.exploding = true;
      this.isInvisible = true;
      this._thisCardP.className = "piscar";

      setTimeout(() => {
        if (this._dead) {
          this._CHN.pause();
          return;
        }
        hpPlayer.remove(Math.trunc(this.dano / 3));

        this.areaAtack();

        this.kill();
      }, 2600);
    },

    nomeStyle: {
      fontSize: "180%",
      fontFamily: "minecraft",
      color: "#555555",
    },

    retratoStyle: {
      border: "2px solid #164d0d",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "170%",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },

    // ataqueE: abelhaEnergia() + "🐝"
  },

  cabeca: {
    cartaId: "cabeca",
    nome: "CURTAS HEAD",
    raridade: raridades.campones,
    energia: 0,
    emoji: "",
    retrato: "url('pics/cabecaRetrato.png')",
    cargo: "",
    dmgBoss: false,
    _invHiddenButton: true,
    hashp: true,
    hp: 5,
    maxHealth: 5,
    dano: undefined,
    _barreira: 50,
    _barrieraActive: true,

    cfg() {
      this._barreiraMax = this._barreira;

      this._cargoP.style.marginTop = "20px";
      this._cargoP.style.fontSize = "1.30em";
      this._nomeP.style.margin = "20px 0px 15px";

      this._nomeP.style.textShadow = "-3px 6px 14px rgba(22,48,52,0.51)";

      this._cargoP.innerHTML = progressBar(
        this._barreira,
        this._barreiraMax,
        "grey",
        "#ffffff",
        true
      );

      this.targetPointSetter(750);
    },

    tick() {

      this._cargoP.innerHTML = progressBar(
        this._barreira,
        this._barreiraMax,
        undefined,
        undefined,
        true
      );

      if (this._barreira > 0 && !this.unableToAttack()) {
        
        this._barrieraActive = true
      } else {
        this._barrieraActive = false

      }

      if(this._barrieraActive){

        this._cargoP.style.visibility = "visible";

      } else {
        this._cargoP.style.visibility = "hidden";
      }



    },

    everyRound() {},

    nomeStyle: {
      fontSize: "180%",
      fontFamily: "cabeca",
      color: "#2457b6",
    },

    retratoStyle: {
      border: "2px solid #044dde",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "170%",
      visibility: "visible",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "hidden",
    },
    novoAtaqueStyle: {
      color: "#b0bfed",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },

  sapato: {
    cartaId: "sapato",
    nome: "SAPATO",
    raridade: raridades.campones,
    energia: 0,
    emoji: "",
    retrato: "url('/pics/sapatoRetrato.webp')",
    cargo: "",
    dmgBoss: false,
    hashp: true,
    hp: 12,
    maxHealth: 12,
    dano: 12,
    _invHiddenButton: false,
    numOfTwelves: 0,
    customButtonEmoji: true,
    requireAmmo: false,

    //AUDIO FILES
    _audioDespawnFiles: 4,
    _sourceDespawn: "sapato/sapato",

    tick() {
      invObj.map((x) => {
        if (x.Twelve && !x.isMonark && !x.hasHelpedSapato) {
         
            this.addBuff(12);
            this.heal(12);
          

          x.hasHelpedSapato = true;
        }
      });
    },

    cfg() {
      this._nomeP.style.marginTop = "10px";
      this.targetPointSetter(310);
    },

    everyRound() {},

    poder() {
      if (this.unableToAttack()) return;

      this.ataque(this.dano, 0);

      this.dano += 24;
      if (this.dano > 1200) {
        this.dano = 1200;
      }

      this.dmg(5);
      this.coolDown(350);
    },

    nomeStyle: {
      fontSize: "180%",
      fontFamily: "julia",
      color: "cyan",
    },

    retratoStyle: {
      border: "2px solid cyan",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "170%",
      visibility: "visible",
    },
    ataqueStyle: {
      color: "cyan",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
    novoAtaqueStyle: {
      color: "cyan",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },

  totem: {
    cartaId: "sapato",
    nome: "SAPATO",
    raridade: raridades.campones,
    energia: 0,
    emoji: "",
    retrato: "url('/pics/sapatoRetrato.webp')",
    cargo: "",
    dmgBoss: false,
    hashp: true,
    hp: 12,
    maxHealth: 12,
    dano: 12,
    _invHiddenButton: false,
    numOfTwelves: 0,
    customButtonEmoji: true,
    requireAmmo: false,

    //AUDIO FILES
    _audioDespawnFiles: 4,
    _sourceDespawn: "totem/sapato",

    tick() {
     
    },

    cfg() {
      
    },

    everyRound() {},

    poder() {
      
    },

    nomeStyle: {
      fontSize: "180%",
      fontFamily: "julia",
      color: "cyan",
    },

    retratoStyle: {
      border: "2px solid cyan",
      backgroundColor: "",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "170%",
      visibility: "visible",
    },
    ataqueStyle: {
      color: "cyan",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
    novoAtaqueStyle: {
      color: "cyan",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },


  sentry: {
    cartaId: "sentry",
    nome: "SENTRY <br> GUN",
    raridade: raridades.cavaleiro,
    energia: 1,
    requireAmmo: true,
    emoji: "💥",
    emojiHp: "",
    ulti: 0,
    retrato: 'url("/pics/sentryRetrato.PNG")',
    cargo: "",
    hp: 40,
    maxHealth: 40,
    dmgBoss: false,
    hashp: true,

    dano: undefined,

    ammonition: 80,
    ammonitionMax: undefined,

    active: false,

    cfg() {
      this.dano = gerarNumero(8, 12);

      this._nomeP.style.marginTop = "5px";

      this.ammonitionMax = this.ammonition;

      this._cargoP.innerHTML =
        progressBar(this.ammonition, this.ammonitionMax, "grey", "#cf6a32") +
        `<img width="25" height="25" src="/pics/ammo.PNG" style='display:inline; margin-right: 5px'>`;

      this._cargoP.style.opacity = "0";

      // this.selfHealing();
      this.targetPointSetter(675);
    },

    tick() {
      this._cargoP.innerHTML =
        progressBar(this.ammonition, this.ammonitionMax, "grey", "#cf6a32") +
        `<img width="25" height="25" src="/pics/ammo.PNG" style='display:inline; margin-right: 5px'>`;

      this._cargoP.style.opacity = "1";

      if (this.active) {
        this._poderUsing = true;
        this._thisCardP.classList.add("critico");
      } else {
        this._poderUsing = false;
        this._thisCardP.classList.remove("critico");
      }

      this.ammonition < 0 ? (this.ammonition = 0) : 0;
    },

    ult() {},

    selfHealing() {
      return;
      let time = 780;
      let healAmount = 12;

      let autoHeal = setInterval(() => {
        if (this._dead) {
          clearInterval(autoHeal);
        }
        if (this.active) {
          this.heal(healAmount);
        }
      }, time);
    },

    everyRound() {
      if (this.ammonition != this.ammonitionMax) {
        this.ammonition += gerarNumero(3, 6);
        this.ammonition > this.ammonitionMax
          ? (this.ammonition = this.ammonitionMax)
          : 0;
      }
    },

    rocket() {
      let rocketDmg = this.dano * gerarNumero(10, 25);

      this.ataque(rocketDmg, 0, [true]);
    },

    tiro() {
      let rocketLaunchCount = 0;

      let launchRocket = () => {
        this.rocket();
        this.ammonition -= gerarNumero(8, 12);
        rocketLaunchCount = 0;
      };

      let fireSpeed = 175;

      let tiros = setInterval(() => {
        let noEnemy = areObj.every((x) => x.isInvisible);

        if (this.ammonition <= 0 || noEnemy || this.unableToAttack()) {
          this.active = false;
          clearInterval(tiros);
          return;
        }

        rocketLaunchCount == gerarNumero(12, 15) ? launchRocket() : 0;

        this.active = true;
        // console.log("piu");
        this.ataque(this.dano, 0);
        this.ammonition--;
        rocketLaunchCount++;
      }, fireSpeed);
    },

    poder() {
      if (
        ammo.total <= 0 ||
        this.active ||
        this.unableToAttack() ||
        this.ammonition <= 0
      ) {
        return;
      }

      ammo.use(1);

      this.tiro();
    },

    nomeStyle: {
      fontSize: "150%",
      fontFamily: "tf2",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #cf6a32",
      backgroundColor: "unset",
    },
    cargoStyle: {
      fontFamily: "",
      fontSize: "",
    },
    ataqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "tf2",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "tf2",
      visibility: "visible",
    },
  },
};

function objBinder(obj) {
  let newo = new Especial(obj);

  return Object.assign(newo, obj);
}

export let especial = "";

let raridade = "";

export function escolherEspecial(teste) {
  seedString = teste;

  seed2 = seedString[2];
  seed3 = seedString[3];

  if (!raridades.semRaridade.rng()) {
    //RAINHA
    if (raridades.rainha.rng()) {
      raridade = raridades.rainha;

      let num;

      num = gerarNumero(1, 2);

      if (num == 1) {
        especial = objBinder(especiais.tenica);
      } else if (num == 2) {
        especial = objBinder(especiais.premioMonark);
      }

      //SANGUE AZUL
    } else if (raridades.sangueAzul.rng()) {
      raridade = raridades.sangueAzul;

      let num;

      num = gerarNumero(1, 4);

  

      if (!true) {
        especial = objBinder(especiais.dva);
      } else if (num == 1) {
        especial = objBinder(especiais.lucio);
      } else if (num == 2) {
        especial = objBinder(especiais.dva);
      } else if (num == 3) {
        especial = objBinder(especiais.spy);
      } else if (num == 4) {
        especial = objBinder(especiais.sentry);
      }

      //CAVALEIRO
    } else if (raridades.cavaleiro.rng()) {
      raridade = raridades.cavaleiro;

      let num;

      num = gerarNumero(1, 6);

      if (!true) {
        especial = objBinder(especiais.sapato);
      } else if (num == 1) {
        especial = objBinder(especiais.speaker);
      } else if (num == 2) {
        especial = objBinder(especiais.estoicoTuru);
      } else if (num == 3) {
        especial = objBinder(especiais.abelha);
      } else if (num == 4) {
        especial = objBinder(especiais.sapato);
      } else if (num == 5) {
        especial = objBinder(especiais.jhin);
      } else if (num == 6) {
        especial = objBinder(especiais.creeper);
      }

      //CAMPONESES
    } else {
      raridade = raridades.campones;

      let num;

      num = gerarNumero(1, 3);

      if (num == 1) {
        especial = objBinder(especiais.maisCartas);
      } else if (num == 2) {
        especial = objBinder(especiais.maisAmmo);
      } else if (num == 3) {
        especial = objBinder(especiais.cabeca);
      }
    }
  } else {
    raridade = raridades.semRaridade;
    especial = especiais.notSpecial;
  }
}

function constrEspecial() {}

// ENERGIAS

export function tenicaEnergia() {
  return gerarNumero(55, 90) + "👑";
}

export function pontoSpeaker() {
  if (parseInt(seed2) <= 3) {
    return (especiais.speaker.energia = 1 + "⚡");
  }
  if (parseInt(seed2) > 3 && parseInt(seed2) <= 6) {
    return (especiais.speaker.energia = 2) + "⚡";
  }
  if (parseInt(seed2) > 6 && parseInt(seed2) < 9) {
    return (especiais.speaker.energia = 3 + "⚡");
  }
  if (parseInt(seed2) == 9) {
    return (especiais.speaker.energia = 5 + "⚡");
  }
}

export function abelhaEnergia() {
  // de 183 a 235
  return gerarNumero(100, 280);
}

// PONTOS ESPECIAIS

export function bonusCartasPE() {
  if (parseInt(seed2) == 0) {
    return parseInt(seed3) + 15;
  }
  if (parseInt(seed2) == 1) {
    return parseInt(seed3) + 12;
  }
  if (parseInt(seed2) > 1 && parseInt(seed2) <= 3) {
    return parseInt(seed3) + 10;
  }
  if (parseInt(seed2) >= 4 && parseInt(seed2) <= 6) {
    return parseInt(seed3) + 9;
  }
  if (parseInt(seed2) == 7) {
    return parseInt(seed3) + 8;
  }
  if (parseInt(seed2) == 8) {
    return parseInt(seed3) + 7;
  }
  if (parseInt(seed2) == 9) {
    return parseInt(seed3) + 6;
  }
}

export function abelhaHardDecrease() {
  return gerarNumero(4, 5);
}

export function abelhaDecrease() {
  return Math.floor(Math.random() * 20 + 5);
}

export function abelhaLowHp() {
  return Math.floor(Math.random() * 3 + 3);
}

export function abelhaDecreaseComTuru() {
  return Math.floor(Math.random() * 50 + 25);
}

function preBuiltUltimate() {
  return gerarNumero(0, 35);
}

let frasesAbelhaTuru = [
  "afff morri",
  " bane esse bosta",
  "pq tanto odio :(",
  "morri kk",
  "rip",
  "o fala bosta",
  "me matou de novo",
  "viva a 1.15",
  "removed herobrine",
];

export function frasesAbelha() {
  return frasesAbelhaTuru[Math.floor(Math.random() * 9 + 0)];
}

let frasesComunista = [
  "PAZ, PAO E TERRA",
  "HASTA LA REVOLUCION!",
  "UNI-VOS!",
  "PAZ ENTRE NOS, GUERRA AOS SENHORES",
  "ТОВАРИЩ!",
  "FORMADEORGANIZA",
  "ABAIXO À BURGUESIA!",
  "DEFINA COMUNISO, CAMARADA!",
  "TENHO NOJO DE BURGUES",
];

export function frasesComuna() {
  return frasesComunista[Math.floor(Math.random() * frasesComunista.length)];
}
function premioMonark() {}
export let efeitoPremioMonark = {
  status: true,
  css: { nome: "premioMonark", imagem: "url('/pics/retratoPremioMonark.gif')" },
  rodadas: 0,
  efeito: premioMonark(),
};

export let efeitoEstoico = {
  status: true,
  css: { nome: "estoico", imagem: "url('/pics/estoicoRetrato.jpg')" },
  rodadas: 0,
  efeito: estoico(),
};

export let lucioEfeito = {
  status: true,
  css: { nome: "lucio", imagem: "url('/pics/retratoLucio.jpg')" },
  rodadas: 0,
  efeito: lucio(),
};

export function especialCoolDown() {

  invObj.map(
    (x)=>{

      if(x._stunnedCooldown > 0){
        x._stunnedCooldown --
      } else {
        if(!x.empty && x._stunned)
        x.removeStun()
      }



    }
  )

}

export function especialTick() {
  
}

function estoico() {}
function lucio() {}

export function estoicoPE() {
  return gerarNumero(5, 15) + "🛡️";
}

function tankCargo(emoji) {
  return gerarNumero(200, 350) + emoji;
}

function Main() {}

window.addEventListener("load", Main);

// export function pontoSpeaker() {
//   return Math.floor(Math.random() * 4 + 1);
// }
