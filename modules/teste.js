// import { integrante } from "./integrante";


function rng(){
    return Math.random()
}
let bar

function foo(){
    return bar = {
        poder: rng()
    }
}

foo()
console.log('bar: ', bar);



let integrante = {a: 0, b:2}
let int

function obj(){
     int = {a: 111, b:2}

}

const tudo = {
    nome: obj()
}

console.log('integrante: ', tudo);
