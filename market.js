import { money, mainOpaque } from "./script.js";
import { slotEsp } from "./slotEspecial.js";

let bodyP = document.getElementsByTagName('body')[0]
let moneyP = document.getElementById('store')
let popUpP = document.createElement("div");
let btnDisplay = document.getElementById('btnEspecial')

export let marketObj = {
    active: false,
    _canBeOpened: false,

    canBeOpened(_trigger){

      this._canBeOpened = _trigger

    },

    on(_trigger){

        if(_trigger == undefined || _trigger === true){
            this.active = true
        } else {
            this.active = false
        }
    }

}

export function openMarket(){

    popUpP.id = "market";
    bodyP.appendChild(popUpP);
    mainOpaque()
    console.log('ABRIU MERCADO');

    popUpP.appendChild(slotEsp)
    popUpP.appendChild(btnDisplay)
    slotEsp.style.display = 'flex'
    btnDisplay.style.display = 'flex'
    marketObj.on(true)
}

export function closeMarket(){
popUpP.remove()
marketObj.on(false)
slotEsp.style.display = 'none'
btnDisplay.style.display = 'none'
mainOpaque(false)
}

moneyP.addEventListener('click', openMarket)
document.addEventListener("keydown", (event) => {
    if (event.code == "KeyN") {
      if(!marketObj.active && marketObj._canBeOpened){
        openMarket()
      } else {
        closeMarket()
      }
    }
  });