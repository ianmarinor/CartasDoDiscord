
import { escolherCargo, escolherVariante,escolherPoder, pontoPoderSemCargo, pontoPoderPeople, pontoPoderGentleman, pontoPoderNobre, pontoPoderLord, pontoPoderMinistro, pontoPoderPrimeMinister, pontoPoderRNGPremioMarino } from "/script.js";

let semCargo = 0;

let people = 0;

let gentleman = 0;

let nobre = 0;

let lord = 0;

let ministro = 0;

let primeminister = 0;

let premiomarino = 0;

let variante = 0;

let champion = 50;

let num = 0;

let cargo 

let pontoVarianteValor

let poderTotal = 0




for (let i = 0; i < champion; i++) {

 cargo = escolherCargo(true)
 
 
 
 if ( cargo == "carta-semcargo") {
     semCargo += 1;
     // console.log('semCargo: ', semCargo);
     
    } else if (cargo == "carta-people") {
        people += 1;
        // console.log('people: ', people);
    } else if (cargo == "carta-gentleman") {
        gentleman += 1;
        // console.log('gentleman: ', gentleman);
    } else if (cargo == "carta-nobre") {
        nobre += 1;
        // console.log('nobre: ', nobre);
    } else if (cargo == "carta-lord") {
        lord += 1;
        // console.log('lord: ', lord);
    } else if (cargo == "carta-ministro") {
        ministro += 1;
        // console.log('ministro: ', ministro);
    } else if (cargo == "carta-primeminister") {
        primeminister += 1;
        // console.log('primeminister: ', primeminister);
    } else if (cargo == "carta-premiomarino") {
        premiomarino += 1;
        // console.log('premiomarino: ', premiomarino);
    }
    
    
    if (escolherVariante(true)) {

        variante++;
        
        pontoVarianteValor = 4
        
    } else {
        pontoVarianteValor = 1
    }
    
    let poder  = escolherPoder(cargo, pontoVarianteValor)

poderTotal += poder._ataque




}

// console.log(
//   "-------------------DE",
//   champion,
//   "CARTAS-----------------------------------"
// );
// console.log(
//   "-------------------CARTAS NORMAIS-----------------------------------"
// );

// console.log("semCargo: ", percentage(semCargo), "--", semCargo);
// console.log("people: ", percentage(people), "--", people);
// console.log("gentleman: ", percentage(gentleman), "--", gentleman);
// console.log("nobre: ", percentage(nobre), "--", nobre);
// console.log("lord: ", percentage(lord), "--", lord);
// console.log("ministro: ", percentage(ministro), "--", ministro);
// console.log("primeminister: ", percentage(primeminister), "--", primeminister);
// console.log("premiomarino: ", percentage(premiomarino), "--", premiomarino);

// console.log(
//   "-------------------VARIANTES----------------------------------------"
// );

// console.log("variante ", percentage(variante), "--", variante);

// console.log(
//     "-------------------PONTOS---------------------------------------"
//   );
//   console.log('poderTotal: ', poderTotal,);
// console.log(escolherVariante(true))
// console.log(escolherCargo(true))

function percentage(partialValue) {
  return ((100 * partialValue) / champion).toFixed(2) + "%";
}
