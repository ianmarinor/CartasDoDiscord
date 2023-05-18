import { criarPopUp } from "./script.js";


import {
    especiais,
    especial,
    Especial,
    especialCoolDown,
    especialTick,
  } from "./modules/especial.js";

let deckSelectionP = document.getElementById('deck-selection')
let selection0 = document.getElementsByClassName('selection-pic')[0]
let displayGrid = document.getElementById('display-cards-selection')

export function openDeck() {
    
    
    // selection0.style.backgroundImage = 'url("pics/spyRetrato.webp")'
    // selection0.id = 'selection-0'
    


    let selectionArr = []

    for(let i = 1; i < 17; i ++){

        let op = document.createElement('div')

        op.className = 'selection-pic'
        selectionArr.push(op)
        displayGrid.appendChild(op)

        especiais
        console.log('especiais: ', especiais);
        // op.style.backgroundImage = especiais[i - 1].retrato

        if(i < 5){
            op.style.gridArea = i / i
        } else if ( i < 9){
            op.style.gridArea = i / i + 1
        } else if ( i < 13){
            op.style.gridArea = i / i + 2
        }  else if ( i < 17){
            op.style.gridArea = i / i + 3
        }




    }
console.log(selectionArr);
  criarPopUp(deckSelectionP, 'flex');


}
