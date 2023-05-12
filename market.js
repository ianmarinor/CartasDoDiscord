import { money, mainOpaque } from "./script.js";
import { slotEsp } from "./slotEspecial.js";

let bodyP = document.getElementsByTagName('body')[0]
let moneyP = document.getElementById('store')
let popUpP = document.createElement("div");

export let marketObj = {
    active: false,

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
    slotEsp.style.display = 'flex'
    marketObj.on(true)
}

export function closeMarket(){
popUpP.remove()
marketObj.on(false)
slotEsp.style.display = 'none'
mainOpaque(false)
}

moneyP.addEventListener('click', openMarket)
document.addEventListener("keydown", (event) => {
    if (event.code == "KeyN") {
      if(!marketObj.active){
        openMarket()
      } else {
        closeMarket()
      }
    }
  });