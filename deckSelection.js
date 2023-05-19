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
let buttonSelectionReady = document.getElementById('button-start-after-selection')

let btnRainha = document.getElementById("btn-rainha");
let btnSangueAzul = document.getElementById("btn-sangue-azul");
let btnCavaleiro = document.getElementById("btn-cavaleiro");
let btnCampones = document.getElementById("btn-campones");

btnRainha.addEventListener("click", () => escolherClasse("rainha"));
btnSangueAzul.addEventListener("click", () => escolherClasse("sangueAzul"));
btnCavaleiro.addEventListener("click", () => escolherClasse("cavaleiro"));
btnCampones.addEventListener("click", () => escolherClasse("campones"));
buttonSelectionReady.addEventListener("click", selectionCompleted)
export let selectedCardsdeckObj 


function selectionCompleted(){

  let allCardsSelected = selectedCardsdeckObj.every((x)=> !x.empty)

  if(!allCardsSelected)return
 sendSelectedCardsToMarket(selectedCardsdeckObj) 

 fecharPopUp('popUpStrong')


}


export function escolherClasse(_classe) {
  displayGrid.innerHTML = "";

  for (let i = 1; i < 17; i++) {
    let op = document.createElement("div");

    op.className = "selection-pic";
    displayGrid.appendChild(op);

   
    let foo = [];

    for (let j = 0; j < especiais.length; j++) {
      let carta = especiais[j];
      if (carta.raridade == _classe ) {
        foo.push(carta);
      } 
    }

    

    if(foo[i - 1]){
      let cartaEspecial = Object.assign(new Especial(foo[i - 1]), foo[i - 1]) 
        op.style.backgroundImage = cartaEspecial.retrato

        op.addEventListener('click',()=>{
          
            // cartaEspecial._selected = true
            cartaEspecial.selectMe()
            
          
        })

    } else {
        op.style.opacity = 0
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
}

export function openDeck() {
  criarPopUp(deckSelectionP, "flex", 'popUpStrong');
  //   escolherClasse();
}

export function tickDeckSelection(){

console.log();


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
  ]
}
window.addEventListener("load", Main);
