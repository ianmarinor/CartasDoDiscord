const totalNumOfSeeds = 99991
const seedRNG = Math.floor(Math.random() * totalNumOfSeeds)

// This function generates a seed or takes a seed as input
// the input will always be translated to the same seed if an integer
// if a string, it'll be converted
function generateSeed(input){
     if (typeof input === 'string' && input.length < 6 && input != ''){
        let sum = 1
        for (let i = 0; i < input.length; i++){
                sum = sum + input[i].charCodeAt()   
        }
        return sum * input.length
    } else if (typeof input === 'number' && input <= totalNumOfSeeds){
        if (input < 0){
            return input * -1
        }
        return input
    } else {
        return seedRNG
    }
}

// generateSeed('a')
// console.log(generateSeed(''));


// ***********************
// LINK SEED TO ELEMENT
//**************************/

//city
var seed = generateSeed('ian')
console.log(seed)



