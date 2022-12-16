// import { efeitoPremioMonark } from './modules/especial';
import {efeitos , rodadas } from './script.js'



let inv = document.getElementById("inv");
let inv1 = document.getElementById("inv").firstChild;
let inv2 = document.getElementById("inv").firstChild;
let inv3 = document.getElementById("inv").firstChild;
let inv4 = document.getElementById("inv").firstChild;
let placarEnergia = document.querySelector(".placar");
let placarRodadas = document.querySelector(".arena");
// let placarRodadasNumero = parseInt(placarRodadas.textContent)

let nome1 = inv1.firstChild

// let efeitos = {}

export function aplicarEfeitos(){

    for (const key in efeitos) {
        
        
        }
    }


function premioMonark(){
    let limite = 10
    let atual
    if(limite != atual){
        placarRodadas.innerHTML +=  51
        atual++
    } else {
        console.log('cabou o efeito');
    }
    
}


