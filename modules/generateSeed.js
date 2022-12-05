

const totalNumOfSeeds = 999999999999999999 - 11111111111111111;
function seedRNG() {
  return Math.floor(Math.random() * totalNumOfSeeds);
}

// This function generates a seed or takes a seed as input
// the input will always be translated to the same seed if an integer
// if a string, it'll be converted

export function generateSeed(input) {
    
  //se a chave for LETRA!
  if (input.length > 9) {
    if (parseInt(input) > 9) {
      return parseInt(input);
    } else {
      if (input.length >= 3 && input.length <= 25) {
        let sum = 1;
        for (let i = 0; i < input.length; i++) {
          sum = sum * input[i].charCodeAt();
        }
        return sum * 516515615165159;
      } else {
        return seedRNG();
      }
    }
  } else {
    if (input.length >= 3 && input.length <= 25) {
      let sum = 1;
      for (let i = 0; i < input.length; i++) {
        sum = sum + input[i].charCodeAt();
      }
      return sum * 516515615165159;
    } else {
      return seedRNG();
    }
  }
}