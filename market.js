// import { money, mainOpaque } from "./script.js";
// import { deck } from "./slotEspecial.js";
import {
  escolherEspecial,
  especiais,
  especial,
  Especial,
} from "./modules/especial.js";
import {
  areObj,
  spawnMonark,
  populateArena,
  updatePlacarInimigo,
  arenaByRound,
  arenaAtaque,
  smokeOnInv,
  areReveal,
  chooseTargetArena,
  spawnLiberdade,
  spawnVitor,
  arenaTick,
  arenaCoolDown,
} from "./arena.js";
import {
  snd,
  selectHandCard,
  naoAu,
  empty1,
  empty2,
  empty3,
  empty4,
  objToMao,
  emptyObj,
  money,
  ammo,
  audioPlayer,
  per,
  mainOpaque,
  invObj,
  maoObj,
} from "./script.js";
import { gerarNumero, teste } from "./script.js";

const secret = document.getElementById("test");
const inv = document.getElementById("inv");
let bodyP = document.getElementsByTagName("body")[0];
let moneyP = document.getElementById("store");
let popUpP = document.createElement("div");
let btnDisplay = document.getElementById("btnEspecial");
let deck = document.getElementById("slotEsp");
const mao = document.getElementById("mao");
const are = document.getElementById("are");

export let marketObj = {
  active: false,
  _canBeOpened: false,

  canBeOpened(_trigger) {
    this._canBeOpened = _trigger;
  },

  on(_trigger) {
    if (_trigger == undefined || _trigger === true) {
      this.active = true;
    } else {
      this.active = false;
    }
  },
};

export function openMarket() {
  popUpP.id = "market";
  bodyP.appendChild(popUpP);
  mainOpaque();
  console.log("ABRIU MERCADO");

  popUpP.appendChild(deck);
  // popUpP.appendChild(btnDisplay);
  deck.style.display = "grid";
  // btnDisplay.style.display = "flex";
  marketObj.on(true);
}

export function closeMarket() {
  popUpP.remove();
  marketObj.on(false);
  deck.style.display = "none";
  btnDisplay.style.display = "none";
  mainOpaque(false);
}

moneyP.addEventListener("click", openMarket);
document.addEventListener("keydown", (event) => {
  if (event.code == "KeyN") {
    if (!marketObj.active && marketObj._canBeOpened) {
      openMarket();
    } else {
      closeMarket();
    }
  }
});

export function blueprintEspecial(_id, _name, _photo) {
  let id = _id;
  let name = _name;
  let picture = _photo;

  let defaultBlueprint =
    '<div class="cartaEsp" id="' +
    id +
    '"> ' +
    '<div class="nameAndCidadeWrapperEsp">' +
    '<p class="nomeEsp">' +
    name +
    "</p>" +
    '<div class="varianteEsp"></div>' +
    '<p class="cidadeEsp"></p>' +
    '<div class="especialEsp"></div>' +
    "</div>" +
    '<div class="retratoEsp" style=" display: block; background-image: ' +
    picture +
    '; background-size: cover; "> <div class="mana-retrato" > </div>    </div>' +
    '<p class="cargoEsp"></p>' +
    '<div class="poderEsp">' +
    '<p class="ataqueEsp"></p>' +
    '<p class="novoAtaqueEsp"></p>' +
    '<p class="action"></p>' +
    "</div>" +
    '<p class="seedEsp"></p>' +
    '<p class="seloEsp"></p>' +
    '<p class="seedEsp2"></p>';

  return defaultBlueprint;
}

export let deckObj;

function inserirEspecialDomAndObject(blueprint, object, _where, _whereObject) {
  let position = _where;
  let positionObj = _whereObject;

  let num = 0;
  let slot = position.children[num];

  secret.innerHTML = blueprint;

  if (positionObj[num].empty) {
    position.replaceChild(secret.children[0], slot);
    positionObj[num] = Object.assign(new Especial(object), object);
    positionObj[num].onMountDefault();
    console.log(positionObj[num]);
    return positionObj[num];
  }
}

export let spawn = {
  tenica(_where) {
    spawnBluePrint(especiais.tenica, _where);
    return;
  },

  carta(obj,_where){
    spawnBluePrint(obj, _where);
  },

  cartaEspecial(_obj,_where){
    spawnBluePrint(especiais[_obj], _where);
  }
};

export function spawnBluePrint(_quem, _where) {
  let position = _where;

  let positionObj = () => {
    if (!position || position == mao) {
      return maoObj;
    }

    if (position == inv) {
      return invObj;
    }

    if (position == are) {
      return areObj;
    }

    if (position == deck) {
      return deckObj;
    }
  };

  if (!position) {
    position = mao;
  } else {
    position = _where;
  }

  console.log("TRYING TO SPAWN TENICA");
  let cartaObj = _quem;
  const cartaBluePrint = blueprintEspecial(
    cartaObj.cartaId,
    cartaObj.nome,
    cartaObj.retrato
  );
  console.log("cartaBluePrint: ", cartaBluePrint);
  inserirEspecialDomAndObject(cartaBluePrint, cartaObj, position, positionObj());
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyT") {
    spawn.cartaEspecial('tenica');   
  }
});

function Main() {
  deckObj = {
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
  };
}
window.addEventListener("load", Main);
