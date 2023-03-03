let DEBUG = false;
import { seedRNG } from "./seedFabricator.js";
import { slotEspObj, slotEsp } from "../slotEspecial.js";
import {
  snd,
  semCarta,
  per,
  gerarNumero,
  invObj,
  maoObj,
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
    resellPrice: 150
  },

  campones: {
    nome: "campones",
    rng: () => seedString[8] == 0 && seedString[14] == 0,
    resellPrice: 50
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
    this.cartaId = card.cartaId;
    this.nome = card.nome;
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

    this.nomeStyle = card.nomeStyle;
    this.retratoStyle = card.retratoStyle;
    this.cargoStyle = card.cargoStyle;
    this.ataqueStyle = card.ataqueStyle;
    this.novoAtaqueStyle = card.novoAtaqueStyle;

    //defaults
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
    this._thisCardP = false;
    this._monarkFree = false;
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
  }

  place() {
    if (this == slotEspObj) {
      this._parentP = slotEsp;
      this._parent = slotEspObj;
      this._place = 0;
      return;
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
  }

  buildUlt(n) {
    this.ulti += n;
    if (this.ulti > 100) {
      this.ulti = 100;
    }

    let ulti = inv.children[this._place].children[2];

    ulti.textContent = this.ulti + "%";
  }

  ataque(dmg, ammO) {
    let dano;
    let ammoUsage;

    if (dmg) {
      dano = dmg;
    } else {
      dano = this.dano;
    }

    if (ammO != undefined) {
      ammoUsage = ammO;

      if (ammo.total == 0) {
        return;
      }
    } else {
      ammoUsage = 1;
    }

    if (invObj.some((x) => x.id == "monark")) {
      for (let x of invObj) {
        if (x.id == "monark") {
          x.hp.remove(dano);

          ammo.use(ammoUsage);
          this._dmgDone += dano

          return true;
        }
      }
    } else if (invObj.some((x) => x.id == "miniBoss")) {
      console.log("TEM MINI BOSS");
      return true;
    } else if (boss) {
      boss.dmg(dano);
      this._dmgDone += dano
      ammo.use(ammoUsage);
      return true;
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
    efeitoCura(this._place);
    if (this.hp >= this.maxHealth) {
      this._fullHp = true;
      this.hp = this.maxHealth;
    }
    return true;
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
      efeitoDano(this._place);
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

    let resto = this.buffTank(n);
    if (resto == "tankei") return;

    this._fullHp = false;
    this.hp -= resto;

    this._totalHp = this.hp + this._buff;

    efeitoDano(this._place);
    if (this._totalHp <= 0) {
      this.kill();
    }
  }

  kill() {
    if (!this._parentP) return;
    if (this._parentP == inv) {
      elimCardInv(inv.children[this._place]);
    } else {
      elimCardMao(mao.children[this._place]);
    }
  }

  changeEmojiToDefault() {
    this.emoji = this._defaultEmoji;
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

  everyRound() {}

  tick() {}

  print() {
    this.place();

    if (!this._cfgAdded) {
      this.cfg();
      this._cfgAdded = true;
    }

    let parentP = this._parentP;

    let hp = parentP.children[this._place].children[3].children[1];
    let energia = parentP.children[this._place].children[3].children[0];
    let ulti = parentP.children[this._place].children[2];
    let botao = this._parentP.children[this._place].children[3].children[2];

    if (this._hasUlti != false) {
      ulti.textContent = this.ulti + "%";
    } else {
      ulti.textContent = "";
    }
    if (this.dmgBoss) {
      energia.textContent = Math.trunc(this.energia) + this._defaultEmoji;
    } else if (this.dano) {
      energia.textContent = this.dano + this._defaultEmojiDano;
    } else {
      energia.textContent = this.energia + this.emoji;
    }

    if (this.hashp) {
      this._totalHp = this.hp + this._buff;
      hp.textContent = this._totalHp + "💚";
    } else {
      hp.textContent = "";
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
  }

  // this method will set dafaults for each card
  cfg() {
    false;
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
    energia: 80,
    emoji: "👑",
    allyEmoji: "👑",
    retrato: "url('pics/tenica.webp')",
    cargo: "",
    hp: 700,
    hashp: true,
    maxHealth: 700,
    dmgBoss: false,

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
    emoji: false,
    retrato: "url('pics/SPEAKER.webp')",
    cargo: "MONARK BAN!",
    ataqueE: 1,
    hp: 50,
    hashp: true,
    maxHealth: 50,
    dmgBoss: true,

    poder() {
      let varianteSpeaker = inv.children[this._place];
      let retratoVariante = varianteSpeaker.children[1];
      let speakerDorminfo = 'url("pics/speakerDormindo.jpg")';
      let descriptionSpeaker = varianteSpeaker.children[2];

      let multiplicador = multiSpeaker();
      let pontoParaDormir = multiSpeakerSono();

      function multiSpeaker() {
        return gerarNumero(2.0, 2.7, 1);
      }
      function multiSpeakerSono() {
        return gerarNumero(90, 103);
      }

      for (let j = 0; j < 6; j++) {
        //

        if (invObj[j].id != "monark") continue;
        let vitima = invObj[j];
        console.log(vitima);
        if (this.energia < pontoParaDormir) {
          this.energia = Math.trunc(this.energia * multiplicador);

          vitima.hp.monarkKill();

          let order = ["speaker" + gerarNumero(1, 2) + ".mp3", 0.3];
          snd(order);

          break;
        } else {
          retratoVariante.style.backgroundImage = speakerDorminfo;

          descriptionSpeaker.innerHTML = "durmi kkjk <br> &#128564; &#128564;";

          varianteSpeaker.children[3].children[2].style.visibility = "hidden";

          let speakerSleepAu = ["speakerSleep.mp3"];
          snd(speakerSleepAu);
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

  menosCartas: {
    cartaId: "-click",
    nome: "- CARTAS -",
    raridade: raridades.campones,
    pontoEspecial: 0,
    energia: 0,
    poder: true,
    efeito: "",
    familia: "",
    descricao: "BONUS?",
    emojiEsp: "",
    emoji: "🃏",
    retrato: "url('pics/clickretrato.webp')",
    cargo: "",
    ataqueE: 1,
    novoAtaque: "",
    dmgboss: "false",

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
      visibility: "hidden",
    },
  },

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
    hp: 65,
    maxHealth: 65,
    hashp: true,
    dano: 12,

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
        this.dano = 12 * numOfBees * numOfBees 
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

      let dmgRate = Math.trunc(numOfBees * 2);

      if (turuInField()) {
        dmgRate *= gerarNumero(5, 7);
        console.log(88888888, dmgRate);
      }

      if (numOfBees > 0) {
        this.dmg(dmgRate);
      }
      
      setTimeout(() => {
        this.ataque(false, 0);
      }, 100);
    },

    cfg() {

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
    _maoHiddenButton: false,

    emoji: "",

    retrato: 'url("/pics/retratoPremioMonark.gif")',
    cargo: "",
    hp: 50,
    hashp: true,
    maxHealth: 50,
    dmgBoss: false,

    poder() {
      let premioMonark = this._parentP.children[this._place];

      if (this._parentP == inv) {
        if (efeitos.status == false) {
          //coloca efeito
          efeitoPremioMonark.rodadas = gerarNumero(10, 15);

          setEfeito(efeitoPremioMonark);

          //apaga a carta

          premioMonark.classList.add("vanish");
          this._invHiddenButton = true;

          setTimeout(() => this.kill(), 10000);

          let premioMonarkAu = ["premioMonark.mp3", 0.3];
          let premioMonarkElimAu = ["premioMonarkElim.mp3"];

          setTimeout(function () {
            snd(premioMonarkElimAu);
          }, 5000);

          snd(premioMonarkAu);
        }
      } else {
        let y = false;
        invObj.map((x) => {
          if (x.id == "monark" && !y) {
            let vitima = x;
            vitima.hp.monarkKill();
            this._maoHiddenButton = true;
            y = true;
          }
        });
      }
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
      fontFamily: "",
      fontSize: "",
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

    emoji: "",

    retrato: 'url("/pics/spyRetrato.webp")',
    cargo: "",

    hp: "⌚",
    dmgBoss: true,
    hashp: false,
    clockReady: true,
    isInvisible: false,
    damage: 60,

    cfg() {
      if (this._parentP != inv) return;

      let spy = this._thisCardP;
      let spyWatch = spy.children[3].children[1];
      let botao = spy.children[3].children[2];
      let retrato = spy.children[1];

      spyWatch.addEventListener("click", () => invisWatch());

      let invisWatch = () => {
        let invis = () => {
          spy.className = "invisible";
          spyWatch.id = "invis";

          retrato.classname = "invisible";
          spy.children[0].className = "invis";

          this._invHiddenButton = true;
          retrato.style.backgroundImage = 'url("/pics/spyRetrato3.gif")';

          let spyInvisAu = ["spyInvis.mp3", 0.2];
          snd(spyInvisAu);
          // snd(spyInvisLineAu);

          // to()
          setTimeout(vis, gerarNumero(800, 7000));
          spyWatch.style.visibility = "hidden";

          spy.dataset.hashp = "uber";

          this.clockReady = false;
          this.isInvisible = true;
          this._monarkFree = true;
        };

        let vis = () => {
          spy.dataset.hashp = "false";
          spy.className = "visible";
          spyWatch.id = "vis";
          retrato.classList.remove("invisible");
          retrato.classList.add("visible");
          spy.children[0].className = "vis";
          this._invHiddenButton = false;
          retrato.style.backgroundImage = 'url("/pics/spyRetrato.webp")';

          let spyInvisAu = ["spyInvis.mp3", 0.3];
          snd(spyInvisAu);
          this.isInvisible = false;
          this._monarkFree = false;
        };

        if (this.clockReady) {
          invis();
        }
      };

      this._cfgAdded = true;
    },

    poder() {
      let spy = this._thisCardP;
      let retrato = spy.children[1];

      for (let i = 0; i < invObj.length; i++) {
        if (this._rightCard != i && this._leftCard != i) {
          continue;
        }
        if (invObj[i].id == "monark") {
          let vitima = invObj[i];
          console.log(vitima);
          //roubar o poder
          console.log("iiiiiiii", i);
          this.energia += this.damage;

          vitima.hp.remove(this.damage);

          retrato.style.backgroundImage = 'url("/pics/spyRetrato2.gif")';

          let stabAu = ["stab.mp3", 0.3];
          snd(stabAu);

          if (gerarNumero(1, 3) == 2) {
            let spyAu = ["spy" + gerarNumero(1, 7) + ".mp3", 0.3];
            snd(spyAu);
          }

          break;
        }
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

    emoji: "🛡️",
    retrato: "url('pics/estoicoRetrato.jpg')",
    cargo: "",
    dmgBoss: false,

    hp: 10,
    maxHealth: 50,
    hashp: true,

    poder() {
      for (const x of invObj) {
        if (
          x._cidade == "de Itapira" &&
          x.cartaId != "carta-monark" &&
          efeitos.status == false
        ) {
          let itapira = x;
          let itapiraEnergia = x.energia;

          efeitoEstoico.rodadas = itapiraEnergia;
          setEfeito(efeitoEstoico);

          hpPlayer.remove(itapiraEnergia);

          this._invHiddenButton = true;

          itapira.kill();
          this.kill();

          let estoicoAu = ["estoico.mp3", 0.2];
          // sndEfeito(estoicoAu);
          break;
        }
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
      visibility: "hidden",
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

    emoji: "",
    cargo: "0%",
    retrato: "url('pics/retratoLucio.jpg')",
    dmgBoss: false,
    dano: 5,
    _hasUlti: true,
    ulti: 95,

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
      if (per(15) && !hpPlayer.isFull) {
        hpPlayer.add(5);
        this.buildUlt(5);
      }

      invObj.map((x) => {
        if (x.hashp && per(40) && !x._fullHp) {
          x.heal(1);
          this.buildUlt(1);
        }
      });
    },

    poder() {
      let ultiRate = () => gerarNumero(1, 4);

      for (let j = 0; j < 6; j++) {
        if (this.ulti < 100) {
          if (ammo.total == 0) {
            return;
          }

          if (this.ataque()) {
            this.buildUlt(ultiRate());
          }

          break;

          //se tiver ulti
        } else {
          hpPlayer.addBuff(200);

          invObj.map(function (x) {
            if (x.hashp) {
              x.addBuff(100);
            }
          });

          this.ulti = 0;
          break;
        }
      }
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

    poder() {
      let jhin = this._thisCardP;
      let tiros = this.tiros;
      let tirosString = jhin.children[2];

      //ESCOLHER ATIRADOS
      for (let j = 0; j < invObj.length; j++) {
        let atirador = invObj[j];
        let atiradorP = atirador._thisCardP;
        let nome = atirador._integrante;
        let atiradorCargo = atirador._cargo;
        let baralhoCargo = novaCarta._cargo;
        // let emojiAtirador = atirador.children[3].children[1];
        let energiaJhin = this.energia;
        // );
        // let energiaJhin = jhin.children[3].children[0];
        let energiaVitima = novaCarta.energia;
        // );
        // let butao = jhin.children[3].children[2];

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

          let naoTemAtirador = () => {
            if (invObj.some((x) => x.atiradorJhin)) {
              return false;
            } else {
              return true;
            }
          };

          if (naoTemAtirador()) {
            atirador.statusEmoji = this.allyEmoji;
            atirador.atiradorJhin = true;

            let jhinEscolhaAu = ["jhinEscolha.mp3", 0.7];
            let ultiJhinAu = ["ultiJhin.mp3", 0.3];

            snd(jhinEscolhaAu);
            snd(ultiJhinAu);

            this.dano = atirador.energia * 4;

            if (this.tiros == 1) {
              this.dano *= 2;
            }

            break;
            //se tiver atirador
          } else {
            if (ammo.total <= 0) return;

            let playJhinAu = (n) => {
              let jhinAu = ["jhin" + gerarNumero(1, 9) + ".mp3", 0.4];

              if (gerarNumero(1, n) == 1) {
                setTimeout(function () {
                  snd(jhinAu);
                }, 800);
              }
            };

            // if (tiros == 1 && atiradorCargo == baralhoCargo) {
            //   butao.style.visibility = "hidden";

            //   emojiAtirador.textContent = "";

            //   tirosString.classList.remove("critico");
            // }

            if (checkTiros() && numCartas.total >= 1) {
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

              // TULTIMO TIRO MULTIPLICA POR 4
              if (tiros == 1) {
                this.ataque(this.energia);

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
                this.energia = 4;
                this.kill();
              } else {
                this.ataque(this.energia);
                elimCardInv(atiradorP);
                this.energia = 4;

                this.tiros--;
                tirosString.textContent = this.tiros;
                console.log("tiros", tiros);
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
    ulti: 95,
    dano: 10,
    hp: 50,
    maxHealth: 50,
    hashp: true,
    _hasUlti: true,

    poder() {
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
      };

      let ultiRate = () => gerarNumero(5, 12);
      let ultiDmg = () => gerarNumero(500, 920);

      for (let j = 0; j < 6; j++) {
        if (this.ulti < 100) {
          if (ammo.total == 0) {
            return;
          }

          if (this.ataque()) {
            this.buildUlt(ultiRate());
          }

          if (this.ulti >= 100) {
            this.dano = ultiDmg();
          }

          break;

          //se tiver ulti
        } else {
          let energiaTotal = 0;

          invObj.map((x) => {
            if (x != this) {
              if (x.dmgBoss) {
                energiaTotal += x.energia;
              }

              if (x._enemy == true) {
                x.hp.remove(this.dano);
              } else {
                x.dmg(this.dano);
              }
            }
          });

          if (boss) boss.dmg(this.dano);

          dvaToMinidva(energiaTotal);

          break;
        }
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

    energia: 0,

    emoji: "💰",

    retrato: 'url("/pics/tankRetrato.jpg")',

    cargo: "",

    hp: 10000,
    hashp: true,
    maxHealth: 10000,
    dmgBoss: false,

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
      visibility: "",
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
      visibility: "",
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

      num = gerarNumero(1, 5);

      if (!true) {
        especial = objBinder(especiais.abelha);
      } else if (num == 1) {
        especial = objBinder(especiais.lucio);
      } else if (num == 2) {
        especial = objBinder(especiais.premioMonark);
      } else if (num == 3) {
        especial = objBinder(especiais.blackaoCamarada);
        especial.ataqueE = comunistaPE();
      } else if (num == 4) {
        especial = objBinder(especiais.abelha);
      } else if (num == 5) {
        especial = objBinder(especiais.dva);
      }

      //CAVALEIRO
    } else if (raridades.cavaleiro.rng()) {
      raridade = raridades.cavaleiro;
      DEBUG && console.log(raridades.cavaleiro.rng());

      let num;

      num = gerarNumero(1, 3);

      if (true) {
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

      num = gerarNumero(1, 4);

      if (true) {
        especial = objBinder(especiais.tank);
        especial.cargo = tankCargo(especiais.tank.emoji);
      } else if (false) {
        especial = objBinder(especiais.menosCartas);
        especial.ataqueE = bonusCartasPE() + "🃏";
      } else if (num == 1) {
        especial = objBinder(especiais.maisCartas);
        especial.ataqueE = bonusCartasPE() + "🃏";
      } else if (num == 2) {
        especial = objBinder(especiais.tank);
        especial.cargo = tankCargo(especiais.tank.emoji);
      } else if (num == 3) {
        especial = objBinder(especiais.estoicoTuru);
      } else if (num == 4) {
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
