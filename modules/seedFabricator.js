import {seedComprada} from './seedsCompradas.js'


let DEBUG = true

let versaoHTML = document.getElementById("versao");
let versao = "Alpha 1.6";
versaoHTML.innerHTML = versao;
console.log(new Date().toUTCString());
console.log(versao);



export let seedObj = {
  _seed: 0,
  _seedString: '',
  _isSeedReal: false,
  _seedFalsaInput: '',
  _seedLength: 0,
  _isPutByPlayer: false,
};



let getSeed = document.getElementById("getseed");
// let button = document.getElementById("btn");

let input = "";
function colocarInput() {
  input = getSeed.value;
  // input = 11111111331561567
}

const totalNumOfSeeds = 90000000000000000 + 2000000000000000000;
export function seedRNG() {
  return Math.floor(Math.random() * totalNumOfSeeds);
}

export function seed(seed, isReal, seedFalsa, isPutByPlayer,isMarket ) {
  return {
    _seed: seed,
    _seedString: seed.toString(),
    _isSeedReal: isReal,
    _seedFalsaInput: seedFalsa,
    _seedLength: seed.toString().length,
    _isPutByPlayer: isPutByPlayer,
    _isMarket: isMarket
  };
}



export function generateSeed(input) {
  let seedReal =
    parseInt(input) >= 1000000000000000 &&
    parseInt(input) <= 100000000000000000000;
  //
  //
  //se for colocada um seed real
if(seedComprada.includes(input)){

  return seed(parseInt(input), true, "", true, true)

} else if (input.length > 10) {
    if (seedReal) {
      // return parseInt(input);

      return seed(parseInt(input), true, "", true,false);

      // se for colocada uma seed falsa
    } else {
      if (input.length >= 3 && input.length <= 25) {
        let sum = 1;
        for (let i = 0; i < input.length; i++) {
          sum = sum + input[i].charCodeAt();
        }
        let constanteSeedFalsa = 716035615875159;
        let calculoSeedFalsa = sum * constanteSeedFalsa;

        return seed(calculoSeedFalsa, false, input, true,false);
      } else {
        return seed(seedRNG(), true, "", false,false);
      }
    }
  } else {
    if (input.length >= 3 && input.length <= 25) {
      let sum = 1;
      for (let i = 0; i < input.length; i++) {
        sum = sum + input[i].charCodeAt();
      }
      let constanteSeedFalsa = 516515615165159;
      let calculoSeedFalsa = sum * constanteSeedFalsa;

      return seed(calculoSeedFalsa, false, input, true,false);
    } else {
      return seed(seedRNG(), true, "", false,false);
    }
  }
  
}
// export let seedObj
export function start() {
  colocarInput();
   seedObj = generateSeed(input);
   console.log('seedObj: ', seedObj)
}

seedObj = generateSeed(input);
;

  // console.log(numeroDeCartas);


// button.addEventListener("click", start);
// window.onload = function(){
//   start()
// }


