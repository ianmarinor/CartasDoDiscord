let DEBUG = false;
import { seedRNG } from "./seedFabricator.js";
import { integrante } from "../integrante.js";
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
} from "../script.js";
import { boss } from "../boss.js";
import { areObj } from "../arena.js";
// import { stringSeed } from "../slotEspecial.js";
let seedString = seedRNG();

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

class Especial {
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
    this._poderUsing = false

    this._monarkFree = false;
    this._monarkReplaceble = true;
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
    this._canBeDeleted = true;
    this._canBeSold = true;
    this._everyRoundMao = false;
    this._requiredIntegrante = false;

    //DOM
    this._thisCardP = false;

    this._nomeP = false;
    this._retratoP = false;
    this._cargoP = false;

    this._energiaP = false;
    this._hpP = false;
    this._buttonP = false;
    this._seloP = false;
  }

  ult() {}

  place() {

    for (let i = 0; i < 3; i++) {
      if (this == slotEspObj[i]) {
        this._parent = slotEspObj
        this._parentP = slotEsp
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

    for (let i = 0; i < 4; i++) {
      if (this == maoObj[i]) {
        this._parent = maoObj;
        this._parentP = mao;
        break;
      }
    }
    // console.log(this._parent);
    this._place = this._parent.indexOf(this);

    this._thisCardP = this._parentP.children[this._place];
    this._nomeP = this._thisCardP.children[0].children[0];
    this._retratoP = this._thisCardP.children[1];
    this._cargoP = this._thisCardP.children[2];

    this._energiaP = this._thisCardP.children[3].children[0];
    this._hpP = this._thisCardP.children[3].children[1];
    this._buttonP = this._thisCardP.children[3].children[2];
    this._seloP = this._thisCardP.children[3].children[4];

   


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
  }

  buildUlt(n) {
    this.ulti += n;
    if (this.ulti >= 100) {
      this.ulti = 100;
      this._cargoP.classList.add("critico");
    }

    let ulti = inv.children[this._place].children[2];

    ulti.textContent = this.ulti + "%";
  }

  buildUltAuto() {
    if (this._hasUlti) {
      per(33) ? this.buildUlt(1) : false;
    }
  }

  areaAtack() {
    areObj.map((x) => {
      !x.isInvisible ? x.dmg(this.dano) : 0;
    });
  }

  ataque(dmg, ammO, _spread) {
    let dano;
    let ammoUsage;
    let spread = [false, false];

    //verifico se foi passada tag spread (se o ataque tera spread)
    //se sim, spread tera sua info
    _spread ? (spread = _spread) : false;

    console.log("spread: ", spread);

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

          console.log("danoSpread: ", danoSpread);

          if (left && !left.isInvisible) {
            left.dmg(danoSpread);
            console.log("leftDAMAGES: ", left);
            this._dmgDone += danoSpread;
          }

          if (right && !right.isInvisible) {
            right.dmg(danoSpread);
            console.log("rightDAMAGED: ", right);
            this._dmgDone += danoSpread;
          }
        }
      };
      // function verifica e identifica (colocando nas vars acima) os objetos left right
      // so verifica se houver tag spread true
      let checkLeftRight = (obj) => {
        spread[0] ? (left = obj._leftObj) : false;
        spread[0] ? (right = obj._rightObj) : false;

        console.log("left: ", left);
        console.log("right: ", right);
        ataqueSpread();
      };

      //se houver tank
      if (areObj.some((x) => x.tank && !x.isInvisible)) {
        for (let i = 0; i < 1000; i++) {
          let slot = gerarNumero(0, 9);

          if (areObj[slot].tank && !areObj[slot].isInvisible) {
            let vitima = areObj[slot];

            vitima.dmg(dano);

            classHit = "tank";
            checkLeftRight(vitima);

            // atacar por dano spread

            this._dmgDone += dano;

            return true;
          }
        }

        //se houver especias
      } else if (areObj.some((x) => x.especial && !x.isInvisible)) {
        for (let i = 0; i < 1000; i++) {
          let slot = gerarNumero(0, 9);

          if (areObj[slot].especial && !areObj[slot].isInvisible) {
            let vitima = areObj[slot];

            vitima.dmg(dano);

            classHit = "especial";
            checkLeftRight(vitima);
            this._dmgDone += dano;

            return true;
          }
        }

        // caso haja mini bosses
      } else if (areObj.some((x) => x.miniBoss && !x.isInvisible)) {
        for (let i = 0; i < 1000; i++) {
          let slot = gerarNumero(0, 9);

          if (areObj[slot].miniBoss && !areObj[slot].isInvisible) {
            let vitima = areObj[slot];

            vitima.dmg(dano);

            classHit = "miniBoss";
            checkLeftRight(vitima);
            this._dmgDone += dano;

            return true;
          }
        }

        // caso haja so normais
      } else {
        for (let i = 0; i < 1000; i++) {
          let slot = gerarNumero(0, 9);

          if (!areObj[slot].isInvisible) {
            let vitima = areObj[slot];

            vitima.dmg(dano);

            classHit = "normal";
            checkLeftRight(vitima);

            this._dmgDone += dano;

            return true;
          }
        }
      }
    } else if (boss) {
      boss.dmg(dano);
      this._dmgDone += dano;

      return true;
    }
  }

  setHp(n) {
    this.hp = n;
    this.maxHealth = n;
  }

  heal(n, _delay) {
    let delay;

    !_delay ? (delay = gerarNumero(450, 650)) : (delay = _delay);

    setTimeout(() => {
      if (this.hp == this.maxHealth || this._dead) return;

      if (n == 0) return;

      this.hp += n;
      efeitoCura(this);
      if (this.hp >= this.maxHealth) {
        this._fullHp = true;
        this.hp = this.maxHealth;
      }
      return true;
    }, delay);
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

  buffTank(n) {
    if (this._buff == 0) return n - 0;

    if (n <= this._buff) {
      this._buff -= n;
      this._mit += n;
      efeitoDano(this);
      return "tankei";
    } else {
      console.log("n: ", n);
      console.log("this.buff: ", this._buff);

      let change = Math.abs(this._buff - n);
      console.log("change: ", change);
      this.mit += this.buff;
      this.buff = 0;

      return change;
    }
  }

  dmg(n) {


    
    this._dmgTaken += n;

    if (this.hashp == false) {
      this.kill();
      return;
    }

    let resto = this.buffTank(n);
    if (resto == "tankei") return;

    this._fullHp = false;
    this.hp -= resto;

    this._totalHp = this.hp + this._buff;

    efeitoDano(this);
    if (this._totalHp <= 0) {
      this.hp = 0;
      this.kill();
    }
  }

  kill(absolute) {
    if (!this._parentP) return;

    if (this.cartaId == "tank" && !this.tankDead && !absolute) {
      this.tankToMoney();
      return;
    }

    if (this.cartaId == "creeper" && !this.exploding && !absolute) {
      this.explode();
      return;
    }

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

  defaultEveryRound() {
    this.buildUltAuto();
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

  print() {
    this.place();

    if (!this._defaultCfgAdded) {
      this.defaultCfg();
      this._defaultCfgAdded = true;
    }

    if (!this._cfgAdded) {
      this.cfg();
      this._cfgAdded = true;
    }

    let parentP = this._parentP;

    let hp = this._hpP;
    let energia = parentP.children[this._place].children[3].children[0];
    let ulti = parentP.children[this._place].children[2];
    let botao = this._parentP.children[this._place].children[3].children[2];

    if (this._hasUlti != false) {
      ulti.textContent = this.ulti + "%";
      this.ulti == 100
        ? (ulti.style.cursor = "pointer")
        : (ulti.style.cursor = "not-allowed");
    }

    if (this.dmgBoss) {
      energia.textContent = Math.trunc(this.energia) + this._defaultEmoji;
    } else if (this.dano) {
      energia.textContent = this.dano + this._defaultEmojiDano;
    } else {
      energia.textContent = this.energia + this.emoji;
    }

    if (this.hashp === true) {
      this._totalHp = this.hp + this._buff;
      hp.textContent = this._totalHp + "💚";
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

      if (ammo.total > 0 && !this._poderUsing) {
        this._buttonP.style.opacity = 1;
        this._buttonP.style.cursor = "pointer";
      } else {
        this._buttonP.style.opacity = 0.3;
        this._buttonP.style.cursor = "not-allowed";
      }
    } else {
      this._buttonP.innerHTML = "🔘";
    }
  }

  // this method will set dafaults for each card and will run only once
  cfg() {
    false;
  }

  defaultCfg() {
    //required cards
    this._requiredIntegrante
      ? (this._requiredIntegrante = integrante())
      : false;
  }

  requiredCardOnInv() {
    return invObj.some((x) => x._integrante == this._requiredIntegrante);
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
    hp: 700,
    hashp: true,
    maxHealth: 700,
    dmgBoss: false,
    tank: true,

    cfg() {
      let energia = gerarNumero(94, 156);
      this.energia = energia;
    },

    poder() {
      let varianteTenica = inv.children[this._place];
      let botao = varianteTenica.children[3].children[2];

      for (let j = 0; j < 6; j++) {
        let carta = invObj[j];

        if (carta.dmgBoss) {
          carta.energia = carta.energia + this.energia;
          this.giveAllyEmoji(carta);
        }
      }

      for (let j = 0; j < 4; j++) {
        let carta = maoObj[j];

        if (carta.dmgBoss) {
          carta.energia = carta.energia + this.energia;
          this.giveAllyEmoji(carta);
        }
      }

      this.changeEmojiToDefault();

      this.dmgBoss = true;

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
    cargo: "MONARK BAN!",
    ataqueE: 1,
    hp: 15,
    hashp: true,
    maxHealth: 15,
    dmgBoss: false,

    poder() {
      let varianteSpeaker = inv.children[this._place];
      let retratoVariante = varianteSpeaker.children[1];
      let speakerDorminfo = 'url("pics/speakerDormindo.jpg")';
      let descriptionSpeaker = varianteSpeaker.children[2];

      let multiSpeaker = () => {
        if (this.energia < 80) {
          return gerarNumero(1.9, 2.5, 1);
        } else {
          return gerarNumero(1.2, 1.5, 1);
        }
      };
      let multiplicador = multiSpeaker();

      let speakerSono = () => {
        let highRiskSleep = gerarNumero(110, 200);
        let caraCoroa = per(50);

        if (this.energia > highRiskSleep && caraCoroa) {
          this.dormindo = true;
        }
      };

      speakerSono();

      for (let j = 0; j < 10; j++) {
        //

        let vitima = areObj[j];
        if (areObj[j].cartaId != "monark" || vitima.isInvisible) continue;
        console.log(vitima);

        if (!this.dormindo) {
          this.energia = Math.trunc(this.energia * multiplicador);

          vitima.kill();

          let order = ["speaker" + gerarNumero(1, 2) + ".mp3", 0.3];
          snd(order);

          break;
        } else {
          retratoVariante.style.backgroundImage = speakerDorminfo;

          descriptionSpeaker.innerHTML = "durmi kkjk <br> &#128564; &#128564;";

          varianteSpeaker.children[3].children[2].style.visibility = "hidden";

          let speakerSleepAu = ["speakerSleep.mp3"];
          snd(speakerSleepAu);
          this.dmgBoss = true;
          this._invHiddenButton = true;
          break;
        }
      }
      this.print();
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
    nome: "+ CARTAS +",
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
    cfg() {
      this.energia = gerarNumero(25, 50);
    },

    tick() {
      this._parentP == inv
        ? (this._cargoP.textContent = this._requiredIntegrante.toUpperCase())
        : false;

      this.requiredCardOnInv()
        ? (this._invHiddenButton = false)
        : (this._invHiddenButton = true);
    },

    poder() {
      numCartas.add(this.energia);
      vendas.update(5);
      if (packP.children[0].id == "carta") {
        tudo();
      }
      this.kill();
    },

    // ataqueE: bonusCartasPE()
    nomeStyle: {
      fontSize: "",
      fontFamily: "",
      color: "",
    },

    retratoStyle: {
      border: "",
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

  menosCartas: {},

  abelha: {
    cartaId: "abelha",
    nome: "ABELHA",
    raridade: raridades.sangueAzul,
    _invHiddenButton: true,

    energia: 0,

    emoji: "",

    retrato: "url('pics/retratoAbelha.gif')",
    retrato2: "url('pics/retratoAbelha.webp')",
    cargo: "bzzzz....",
    dmgBoss: false,
    hp: 10,
    maxHealth: 10,
    hashp: true,
    dano: 9,

    tick() {
      let turuInField = () => {
        let inv = this._parentP;
        let i = this._place;

        if (!invObj.some((x) => x._integrante == "Turu")) {
          inv.children[i].className = "";
          inv.children[i].children[1].style.border = "2px solid #545251";
          inv.children[i].style.border = "";
          inv.children[i].style.color = "#ffd11a";

          return false;
        } else {
          inv.children[i].classList.add("critico");
          inv.children[i].children[1].style.border = "1px solid red";
          inv.children[i].style.border = "1px solid red";
          inv.children[i].style.color = "red";

          return true;
        }
      };

      let numOfBees = 0;

      invObj.map((x) => {
        x.cartaId == "abelha" ? numOfBees++ : false;
      });

      if (numOfBees > 0) {
        this.dano = 9 * numOfBees * numOfBees;
      }
    },

    everyRound() {
      let turuInField = () => {
        if (!invObj.some((x) => x._integrante == "Turu")) {
          return false;
        } else {
          return true;
        }
      };

      let numOfBees = 0;

      invObj.map((x) => {
        x.cartaId == "abelha" ? numOfBees++ : false;
      });

      let dmgRate = gerarNumero(1, 2);

      if (turuInField()) {
        dmgRate *= gerarNumero(5, 7);
      }

      if (numOfBees > 0) {
        this.dmg(dmgRate);
      }

      setTimeout(() => {
        this.ataque(false, 0);
      }, 100);
    },

    cfg() {},

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

  blackaoCamarada: {
    cartaId: "comunista",
    nome: "BLACKAO COMUNISTA",
    raridade: raridades.sangueAzul,

    energia: 0,

    emoji: "☭",
    allyEmoji: "☭",

    retrato: "url('pics/retratoCamarada.gif')",

    cargo: "",

    hp: 50,
    hashp: true,
    maxHealth: 50,
    dmgBoss: false,

    cfg() {
      if (this._cfgAdded) return;
      let x = [111, 222, 333];
      this.energia = x[gerarNumero(0, 2)];
      this._cfgAdded = true;
    },

    poder() {
      if (!invObj.some((x) => x._integrante == "Blackao")) return;
      if (invObj.some((x) => x._integrante == "Nefesto")) return;

      for (let i = 0; i < invObj.length; i++) {
        let aliado = invObj[i];
        let aliadoP = aliado._thisCardP;

        if (aliado.isNormal) {
          aliado.energia += this.energia;
          this.giveAllyEmoji(aliado);

          this.kill();
        }
      }
    },

    // ataqueE: comunistaPE() + "☭"
    nomeStyle: {
      fontSize: "140%",
      fontFamily: "blackao",
      color: "",
    },

    retratoStyle: {
      border: "2px solid #ff0000",
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
      visibility: "visible",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
      visibility: "visible",
    },
  },

  premioMonark: {
    cartaId: "premiomonark",
    nome: "PREMIO MONARK",
    raridade: raridades.sangueAzul,
    energia: 0,
    emoji: "",

    retrato: 'url("/pics/retratoPremioMonark.gif")',
    cargo: "",
    hp: 10,
    hashp: true,
    maxHealth: 20,
    dmgBoss: false,
    _requiredIntegrante: true,
    cfg() {},

    tick() {
      this.requiredCardOnInv()
        ? (this._invHiddenButton = false)
        : (this._invHiddenButton = true);
      this._parentP == inv
        ? (this._cargoP.textContent = this._requiredIntegrante.toUpperCase())
        : false;
    },

    poder() {
      function infectar() {
        areObj.map((x) => {
          if (x.empty) return;

          x.previousHp = x.hp;
          x.hp = 1;
          x.readyToAttack = false;
          x._money *= 2;
          x.infected = true;
          x._thisCardP.children[0].classList.add("float");
          x._thisCardP.children[2].classList.add("float");
          x._thisCardP.children[2].classList.add("float");
          x._hpP.classList.add("float");
          x._thisCardP.children[3].children[2].classList.add("float");
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
    emoji: "🗡️",
    emojiHp: "⌚",

    retrato: 'url("/pics/spyRetrato.webp")',
    cargo: "",
    hashp: false,
    hp: "",
    dmgBoss: false,
    hashp: false,
    clockReady: true,
    isInvisible: false,
    dano: 60,




    cfg() {
      // if (this._parentP != inv) return;
      let spy = this._thisCardP;
      let spyWatch = spy.children[3].children[1];
      let botao = spy.children[3].children[2];
      let retrato = spy.children[1];

      console.log(spy);

      spyWatch.addEventListener("click", () => invisWatch());

      let invisWatch = () => {
        let invis = () => {
          spy.className = "invisible";
          spyWatch.id = "invis";

          retrato.classname = "invisible";
          spy.children[0].className = "invis";

          this.energia = Math.trunc(this._dmgDone / 6);

          this._invHiddenButton = true;
          retrato.style.backgroundImage = 'url("/pics/spyRetrato3.gif")';

          let spyInvisAu = ["spyInvis.mp3", 0.2];
          snd(spyInvisAu);

          setTimeout(vis, gerarNumero(800, 7000));
          spyWatch.style.visibility = "hidden";

          this.clockReady = false;
          this.isInvisible = true;
          this._monarkFree = true;
          this.dmgBoss = true;
          this.changeEmojiToDefault();
        };

        let vis = () => {
          if (this._dead) return;

          spy.dataset.hashp = "false";
          spy.className = "visible";
          spyWatch.id = "vis";
          retrato.classList.remove("invisible");
          retrato.classList.add("visible");
          spy.children[0].className = "vis";
          this._invHiddenButton = false;
          retrato.style.backgroundImage = 'url("/pics/spyRetrato.webp")';
          this.energia = 60;

          let spyInvisAu = ["spyInvis.mp3", 0.3];
          snd(spyInvisAu);
          this.isInvisible = false;
          this._monarkFree = false;

          this.dmgBoss = false;
          this.setEmoji("🗡️");
        };

        if (this.clockReady) {
          invis();
        }
      };

      this._cfgAdded = true;
    },

    everyRound() {
      if (per(33) && !this.isInvisible) {
        this.clockReady = true;
        this._hpP.style.visibility = "visible";
      }
    },

    poder() {
      if (ammo.total <= 0) {
        return;
      }

      let spy = this._thisCardP;
      let retrato = spy.children[1];

      retrato.style.backgroundImage = 'url("/pics/spyRetrato2.gif")';

      this.ataque();

      let stabAu = ["stab.mp3", 0.3];
      snd(stabAu);

      if (gerarNumero(1, 3) == 2) {
        let spyAu = ["spy" + gerarNumero(1, 7) + ".mp3", 0.3];
        snd(spyAu);
      }
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
      fontSize: "140%",
      fontFamily: "tf2",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "",
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
    hp: 25,
    maxHealth: 25,
    hashp: true,
    _invHiddenButton: true,

    poder() {
      this.areaAtack();
      this.kill();
    },

    tick() {
      this.dano = this._dmgTaken + 1;

      let hasTuru = invObj.some((x) => x._cidade == "de Itapira");
      let hasItapira = invObj.some((x) => x._integrante == "Turu");

      if (hasTuru || hasItapira) {
        this._invHiddenButton = false;
      } else {
        this._invHiddenButton = true;
      }
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
    ulti: 100,

    hp: 10,
    maxHealth: 10,
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
      fontSize: "100%",
      fontFamily: "overwatch",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "overwatch",
      visibility: "visible",
    },

    everyRound() {
      if (!hpPlayer.isFull && per(50)) {
        hpPlayer.add(1);
        this.buildUlt(1);
      }

      invObj.map((x) => {

        let healValue = gerarNumero (1,3)

        if (x.hashp && per(75) && !x._fullHp) {
          x.heal(healValue);
          this.buildUlt(healValue);
        }
      });
    },

    ult() {
      if (this._parentP != inv) return;

      let buff = gerarNumero(125, 180);
      if (this.ulti != 100) return;

      invObj.map(function (x) {
        if (x.hashp) {
          x.addBuff(buff);
        }
      });
      this.ulti = 0;
      this._cargoP.classList.remove("critico");
    },

    poder() {

      if(this._poderUsing) return
      this._poderUsing = true
      let ultiRate = () => gerarNumero(0, 1);

      let ammo = 1;
      let tiros = 3

      let weapon = () => {

        if (this._dead) return;
        if (this.ataque(false, ammo)) {
          this.buildUlt(ultiRate());
        }

        tiros--
        ammo = 0
        if(tiros == 0 || this._dead) {
          clearInterval(multiShot)
          this._poderUsing = false
          return
        }
      };

      let multiShot = setInterval(() => {
        weapon();
      }, 300);

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
    dano: 0,
    hp: 10,
    hashp: true,
    maxHealth: 10,
    aim: "are",
    atirador: false,

    ult() {
      this.aim == "boss" ? (this.aim = "are") : (this.aim = "boss");
      console.log(this.aim);
    },

    tick() {
      this.aim == "boss"
        ? (this._cargoP.style.color = "red")
        : (this._cargoP.style.color = "#FFBC42");

        
          if (invObj.some((x) => x.atiradorJhin)) {
            this.atirador = true
          } else {
            this.atirador = false
          }
        
          if(this.atirador && this.tiros > 1){

            invObj.map(
              (x) => {
                x.atiradorJhin ? this.dano = x.energia * 4 : 0
              }
              )

          } else if (this.atirador && this.tiros == 1) {
            invObj.map(
              (x) => {
                x.atiradorJhin ? this.dano = x.energia * 8 : 0
              }
              )
          } else {
            this.dano = 4
          }


    },



    poder() {
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

        if (
          atirador._cargo != "carta-monark" &&
          nome == "Gandalf" &&
          checkTiros()
        ) {
          //se nao tiver atirador, escolha atirador

          

          if (!this.atirador) {
            atirador.statusEmoji = this.allyEmoji;
            atirador.atiradorJhin = true;

            let jhinEscolhaAu = ["jhinEscolha.mp3", 0.7];
            let ultiJhinAu = ["ultiJhin.mp3", 0.3];

            snd(jhinEscolhaAu);
            snd(ultiJhinAu);

            
            this.atirador = true
           

            break;
            //se tiver atirador
          } else {
            if (!boss) return;

            let playJhinAu = (n) => {
              let jhinAu = ["jhin" + gerarNumero(1, 9) + ".mp3", 0.4];

              if (gerarNumero(1, n) == 1) {
                setTimeout(function () {
                  snd(jhinAu);
                }, 800);
              }
            };

            if (checkTiros()) {
              if (tiros == 4) {
                let countAu = ["jhinConta1.mp3", 0.5];
                snd(countAu);
                // snd(hit);
                // somDeath(350);
                playJhinAu(3);
              }

              if (tiros == 3) {
                let countAu = ["jhinConta2.mp3", 0.5];
                snd(countAu);
                // snd(hit);
                // somDeath(350);
              }

              if (tiros == 2) {
                let countAu = ["jhinConta3.mp3", 0.5];
                snd(countAu);

                tirosString.classList.add("critico");
                // snd(hit);
                // somDeath(350);
              }

              //TIROS
              // TULTIMO TIRO MULTIPLICA POR 4
              if (tiros == 1) {
                this.aim == "boss"
                  ? boss.dmg(this.dano)
                  : this.ataque(false, false);

                atirador.statusEmoji = "";
                atirador.atiradorJhin = false;

                tirosString.textContent = "";
                this._invHiddenButton = true;

                let countAu = ["jhinConta4.mp3", 0.5];
                snd(countAu);
                // snd(hit);
                // somDeath(350);
                playJhinAu(1);
                elimCardInv(atiradorP);
                this.tiros--;
                this.kill();


              } else {
                this.aim == "boss"
                  ? boss.dmg(this.dano)
                  : this.ataque(false, false);
                elimCardInv(atiradorP);
                

                this.tiros--;
                tirosString.textContent = this.tiros;
              }

              break;
            }
          }
          break;
        }
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
    hp: 35,
    maxHealth: 35,
    hashp: true,
    _hasUlti: true,
    tank: true,
    requireAmmo: true,
    ult() {
      let dvaToMinidva = (energiaFromField) => {
        this._invHiddenButton = true;
        this.setHp(10);
        this.changeRetrato('url("/pics/dva.webp")');
        this.dmgBoss = true;
        this.ulti = 0;
        this._thisCardP.children[2].textContent = "";
        this.dano = 0;
        this._buff = 0;
        this.energia = 1 + Math.trunc(energiaFromField * 1.2);
        this._hasUlti = false;
        this.tank = false;
      };

      let ultiDmg = gerarNumero(500, 920);
      this.dano = ultiDmg;
      let energiaTotal = 0;

      invObj.map((x) => {
        if (x.dmgBoss) {
          x.dmg(this.dano);
          this._dmgDone += this.dano;
          if (x._dead) {
            energiaTotal += x.energia;
          }
        }
      });

      areObj.map((x) => {
        x.dmg(this.dano);
        this._dmgDone += this.dano;
      });

      if (boss) boss.dmg(this.dano);
      this._dmgDone += this.dano;

      dvaToMinidva(energiaTotal);
    },

    poder() {
      let ultiRate = () => gerarNumero(2, 5);

      if (this.ataque(false, undefined, [true, false])) {
        this.buildUlt(ultiRate());
      }
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
      fontSize: "130%",
      fontFamily: "overwatch",
      visibility: "",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "120%",
      fontFamily: "overwatch",
      visibility: "visible",
    },
  },

  tank: {
    cartaId: "tank",
    nome: "TANK",
    raridade: raridades.campones,
    _invHiddenButton: true,
    energia: 0,

    emoji: "💰",

    retrato: 'url("/pics/tankRetrato.jpg")',

    cargo: "",

    hp: 520,
    hashp: true,
    maxHealth: 300,
    dmgBoss: false,
    money: 0,

    tankToMoney() {
      this._thisCardP.id = "tf2Money";
      this._retratoP.style.backgroundImage = "url('pics/tankDeadRetrato.jpg')";
      this._nomeP.textContent = "MONEY";

      this._cargoP.style.visibility = "visible";

      this.money = gerarNumero(767, 1215);
      this._cargoP.innerHTML = this.money + "💰";

      this.hashp = false;
      this.hideHp();
      this.tankDead = true;
      this._invHiddenButton = false;
    },

    poder() {
      money.add(this.money);
      this.kill();
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
      fontFamily: "tf2",
      fontSize: "200%",
      visibility: "hidden",
    },
    ataqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "tf2",
      visibility: "hidden",
    },
    novoAtaqueStyle: {
      color: "",
      fontSize: "",
      fontFamily: "tf2",
      visibility: "visible",
    },
  },

  creeper: {
    cartaId: "creeper",
    nome: "CREEPER",
    raridade: raridades.campones,
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
      let dano = gerarNumero(70, 110);

      this.dano = dano;
    },

    everyRound() {
      if (this.exploding) return;

      let chance = per(4.5);

      if (chance) {
        this.explode();
      }
    },

    explode() {
      this.exploding = true;
      this.isInvisible = true;
      this._thisCardP.className = "piscar";

      setTimeout(() => {
        hpPlayer.remove(Math.trunc(this.dano / 4.5));

        if (this._leftCard) {
          if (this._leftObj._enemy) {
            this._leftObj.hp.remove(this.dano);
          } else {
            this._leftObj.dmg(this.dano);
          }
        }

        if (this._rightCard) {
          if (this._rightObj._enemy) {
            this._rightObj.hp.remove(this.dano);
          } else {
            this._rightObj.dmg(this.dano);
          }
        }

        if (this._parentP == mao) {
          if (this._place < 2) {
            invObj.map((x) => {
              if (x._place < 3) {
                if (x._enemy) {
                  x.hp.remove(this.dano);
                } else {
                  x.dmg(this.dano);
                }
              }
            });
          }

          if (this._place > 1) {
            invObj.map((x) => {
              if (x._place > 2) {
                if (x._enemy) {
                  x.hp.remove(this.dano);
                } else {
                  x.dmg(this.dano);
                }
              }
            });
          }
        }

        if (this._parentP == inv) {
          if (this._place < 3) {
            areObj.map((x) => {
              if (x._place < 5) {
                x.dmg(this.dano);
              }
            });
          }

          if (this._place > 2) {
            areObj.map((x) => {
              if (x._place > 4) {
                x.dmg(this.dano);
              }
            });
          }
        }

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
};

DEBUG && console.log("ESPECAIISMAISCARTAS", especiais.menosCartas);
DEBUG && console.log("RARIDADES", raridades.campones);

function objBinder(obj) {
  let newo = new Especial(obj);

  return Object.assign(newo, obj);
}

export let especial = "";

let raridade = "";

export function escolherEspecial(teste) {
  seedString = teste;
  // console.log("seedString: ", seedString);

  // seedString = seedObj._seedString

  DEBUG && console.log("**SEEDSTRING NO MODULO**", seedString);

  seed2 = seedString[2];
  seed3 = seedString[3];

  // DEBUG && console.log("seedString no especial", seedString);
  // DEBUG && console.log("seedString no especial", seedString[14]);
  // DEBUG && console.log("seed3: ", seed3);

  if (!raridades.semRaridade.rng()) {
    //RAINHA
    if (raridades.rainha.rng()) {
      raridade = raridades.rainha;
      if (true) {
        especial = objBinder(especiais.tenica);
        especial.ataqueE = tenicaEnergia();
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
        especial = objBinder(especiais.premioMonark);
      } else if (num == 3) {
        especial = objBinder(especiais.abelha);
      } else if (num == 4) {
        especial = objBinder(especiais.dva);
      }

      //CAVALEIRO
    } else if (raridades.cavaleiro.rng()) {
      raridade = raridades.cavaleiro;
      DEBUG && console.log(raridades.cavaleiro.rng());

      let num;

      num = gerarNumero(1, 3);

      if (!true) {
        especial = objBinder(especiais.jhin);
      } else if (num == 1) {
        especial = objBinder(especiais.speaker);
      } else if (num == 2) {
        especial = objBinder(especiais.jhin);
      } else if (num == 3) {
        especial = objBinder(especiais.spy);
      }

      //CAMPONESES
    } else {
      raridade = raridades.campones;

      let num;

      num = gerarNumero(1, 3);

      if (!true) {
        especial = objBinder(especiais.creeper);
      } else if (num == 1) {
        especial = objBinder(especiais.maisCartas);
        especial.ataqueE = bonusCartasPE() + "🃏";
      } else if (num == 2) {
        especial = objBinder(especiais.estoicoTuru);
      } else if (num == 3) {
        especial = objBinder(especiais.creeper);
      }
    }
  } else {
    raridade = raridades.semRaridade;
    especial = especiais.notSpecial;
  }

  // DEBUG && console.log("TAMANHO SEED", seedObj._seedLength);
  DEBUG && console.log("raridade modulo", raridade);
  DEBUG && console.log("especial modulo", especial);
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

function estoico() {}
function lucio() {}

export function estoicoPE() {
  return gerarNumero(5, 15) + "🛡️";
}

function tankCargo(emoji) {
  return gerarNumero(200, 350) + emoji;
}

// export function pontoSpeaker() {
//   return Math.floor(Math.random() * 4 + 1);
// }
