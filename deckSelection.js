import { criarPopUp, emptyObj, fecharPopUp } from "./script.js";

import {
  especiais,
  especial,
  Especial,
  especialCoolDown,
  especialTick,
} from "./modules/especial.js";
import { deckObj, sendSelectedCardsToMarket } from "./market.js";

let deckSelectionP = document.getElementById("deck-selection");
let selection0 = document.getElementsByClassName("selection-pic")[0];
let displayGrid = document.getElementById("display-cards-selection");
let selectedCards = document.getElementById("selected-cards");
let buttonSelectionReady = document.getElementById(
  "button-start-after-selection"
);
const deck = document.getElementById("slotEsp");

let btnRainha = document.getElementById("btn-rainha");
let btnSangueAzul = document.getElementById("btn-sangue-azul");
let btnCavaleiro = document.getElementById("btn-cavaleiro");
let btnCampones = document.getElementById("btn-campones");

btnRainha.addEventListener("click", () => escolherClasse("rainha"));
btnSangueAzul.addEventListener("click", () => escolherClasse("sangueAzul"));
btnCavaleiro.addEventListener("click", () => escolherClasse("cavaleiro"));
btnCampones.addEventListener("click", () => escolherClasse("campones"));
buttonSelectionReady.addEventListener("click", selectionCompleted);
export let selectedCardsdeckObj;

let allCardsSelected = () => selectedCardsdeckObj.every((x) => !x.empty);

function selectionCompleted() {
  if (!allCardsSelected()) return;
  // sendSelectedCardsToMarket(selectedCardsdeckObj);

  selectedCardsdeckObj.map((x)=>{
    x.putInDeck()
  })


  deck.children[0].classList.add('rainha-market')
  deck.children[1].classList.add('sangue-azul-market-1')
  deck.children[2].classList.add('sangue-azul-market-2')
  deck.children[3].classList.add('cavaleiro-market-1')
  deck.children[4].classList.add('cavaleiro-market-2')
  deck.children[5].classList.add('campones-market-1')
  deck.children[6].classList.add('campones-market-2')
  fecharPopUp("popUpStrong");


}

let cardapioRainha = [];
let cardapioSangueAzul = [];
let cardapioCavaleiro = [];
let cardapioCampones = [];

export function escolherClasse(_classe) {
  displayGrid.innerHTML = "";

  for (let i = 1; i < 17; i++) {
    let op = document.createElement("div");

    op.className = "selection-pic";
    displayGrid.appendChild(op);

    let foo = [];

    for (let j = 0; j < especiais.length; j++) {
      let carta = especiais[j];
      if (carta.raridade == _classe) {
        foo.push(carta);
      }
    }

    if (foo[i - 1]) {
      let cartaEspecial = Object.assign(new Especial(foo[i - 1]), foo[i - 1]);

      if (_classe == "rainha") {
        cardapioRainha.push(cartaEspecial);
      }
      if (_classe == "sangueAzul") {
        cardapioSangueAzul.push(cartaEspecial);
      }
      if (_classe == "cavaleiro") {
        cardapioCavaleiro.push(cartaEspecial);
      }
      if (_classe == "campones") {
        cardapioCampones.push(cartaEspecial);
      }

      op.style.backgroundImage = cartaEspecial.retrato;
      op.dataset.cartaId = cartaEspecial.cartaId;

      op.addEventListener("click", () => {
        // cartaEspecial._selected = true
        cartaEspecial.selectMe();
        // foo[i - 1]._selected = true;
        // op.style.opacity = 0.4;
      });
    } else {
      op.style.opacity = 0;
      op.dataset.cartaId = "none";
    }

    if (i < 5) {
      op.style.gridArea = i / i;
    } else if (i < 9) {
      op.style.gridArea = i / i + 1;
    } else if (i < 13) {
      op.style.gridArea = i / i + 2;
    } else if (i < 17) {
      op.style.gridArea = i / i + 3;
    }
  }

  console.group("CARDAPIO");
  console.log(cardapioRainha);
  console.log(cardapioSangueAzul);
  console.log(cardapioCavaleiro);
  console.log(cardapioCampones);
  console.groupEnd();
}

export function openDeck() {
  criarPopUp(deckSelectionP, "flex", "popUpStrong");
  //   escolherClasse();
}

let activateStartButton = () => {
  if (allCardsSelected()) {
    buttonSelectionReady.className = "btn-selection-active";
  } else {
    buttonSelectionReady.className = "btn-selection-inactive";
  }

  // uma rainha selecionada
  if (selectedCards.children[0].id != "") {
    btnRainha.className = "btn-selection-inactive";
  } else {
    btnRainha.className = "btn-selection-active";
  }

  //sangue azul selecionado

  if (
    selectedCards.children[1].id != "" &&
    selectedCards.children[2].id != ""
  ) {
    btnSangueAzul.className = "btn-selection-inactive";
  } else {
    btnSangueAzul.className = "btn-selection-active";
  }

  //cavaleiro selecionado

  if (
    selectedCards.children[3].id != "" &&
    selectedCards.children[4].id != ""
  ) {
    btnCavaleiro.className = "btn-selection-inactive";
  } else {
    btnCavaleiro.className = "btn-selection-active";
  }

  //campones selecionado

  if (
    selectedCards.children[5].id != "" &&
    selectedCards.children[6].id != ""
  ) {
    btnCampones.className = "btn-selection-inactive";
  } else {
    btnCampones.className = "btn-selection-active";
  }



};

let activateRetratos = () => {
  let mosaico = document.getElementById("display-cards-selection");

  if (!mosaico) return;

  if (!mosaico.children[0]) {
    return;
  }

  for (let i = 0; i < 10; i++) {
    let op = mosaico.children[i];

    if (
      op.dataset.cartaId == selectedCardsdeckObj[0].cartaId ||
      op.dataset.cartaId == selectedCardsdeckObj[1].cartaId ||
      op.dataset.cartaId == selectedCardsdeckObj[2].cartaId ||
      op.dataset.cartaId == selectedCardsdeckObj[3].cartaId ||
      op.dataset.cartaId == selectedCardsdeckObj[4].cartaId ||
      op.dataset.cartaId == selectedCardsdeckObj[5].cartaId ||
      op.dataset.cartaId == selectedCardsdeckObj[6].cartaId
    ) {
      // op.style.opacity = 0.3;
      op.classList.add("btn-selection-inactive");
      op.classList.remove("btn-selection-active");
    } else if (op.dataset.cartaId == "none") {
      op.style.opacity = 0;
    } else {
      op.classList.remove("btn-selection-inactive");
      op.classList.add("btn-selection-active");
      // op.style.opacity = 1;
    }

    if (allCardsSelected()) {
      if (op.dataset.cartaId != "none") {
        op.style.opacity = 0.3;
      }
    }
  }
};

export function tickDeckSelection() {
  // console.log();
  activateStartButton();
  activateRetratos();
}

function Main() {
  selectedCardsdeckObj = [
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
    emptyObj,
  ];
}
window.addEventListener("load", Main);
