let versaoHTML = document.getElementById("versao");
let versao = "Alpha 1.4";
versaoHTML.innerHTML = versao;
console.log(new Date().toUTCString());
console.log(versao);

let getSeed = document.getElementById("getseed");
let button = document.getElementById("btn");

let input = "";
function colocarInput() {
  input = getSeed.value;
  // input = 11111111331561567
}

const totalNumOfSeeds = 9000000000000000 + 1000000000000000;
function seedRNG() {
  return Math.floor(Math.random() * totalNumOfSeeds);
}

export function seed(seed, isReal, seedFalsa, isPutByPlayer) {
  return {
    _seed: seed,
    _seedString: seed.toString(),
    _isSeedReal: isReal,
    _seedFalsaInput: seedFalsa,
    _seedLength: seed.toString().length,
    _isPutByPlayer: isPutByPlayer,
  };
}

function generateSeed(input) {
  let seedReal =
    parseInt(input) >= 1000000000000000 &&
    parseInt(input) <= 1000000000000000000;
  //
  //
  //se for colocada um seed real
  if (input.length > 10) {
    if (seedReal) {
      // return parseInt(input);

      return seed(parseInt(input), true, "", true);

      // se for colocada uma seed falsa
    } else {
      if (input.length >= 3 && input.length <= 25) {
        let sum = 1;
        for (let i = 0; i < input.length; i++) {
          sum = sum + input[i].charCodeAt();
        }
        let constanteSeedFalsa = 516515615165159;
        let calculoSeedFalsa = sum * constanteSeedFalsa;

        return seed(calculoSeedFalsa, false, input, true);
      } else {
        return seed(seedRNG(), true, "", false);
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

      return seed(calculoSeedFalsa, false, input, true);
    } else {
      return seed(seedRNG(), true, "", false);
    }
  }
}

function start() {
  colocarInput();
  seedObj = generateSeed(input);
}

button.addEventListener("click", start);
export let seedObj = generateSeed(input);
console.log("seedObj no seedfab ", seedObj);
