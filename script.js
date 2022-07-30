const totalNumOfSeeds = (999999999999 - 111111111111)
const seedRNG = Math.floor(Math.random() * totalNumOfSeeds)



// This function generates a seed or takes a seed as input
// the input will always be translated to the same seed if an integer
// if a string, it'll be converted
function generateSeed(input){
    //se a chave for LETRA!
     if (typeof input === 'string' && input.length < 12 && input != ''){
        let sum = 1
        for (let i = 0; i < input.length; i++){
                sum = sum + input[i].charCodeAt()   
        }
        return sum * input.length
    } else {
        return  seedRNG
    }
}

let seed = generateSeed()
// console.log('Seed: ', seed);


// generateSeed('a')





// ***********************
// LINK SEED TO ELEMENT
//**************************/

//integrante
let integrante = ''
function escolherIntegrante(generateSeed){
    let seedString = seed.toString()
    if (
        // seedString[0] == 0 && 
        seedString[1] == 0){
        return integrante = 'Gandalf'
    } else if 
    (
        // seedString[0] == 0 && 
        seedString[1] == 1)
        { return integrante = 'Turu'} 
        else if (
        // seedString[0] == 0 && 
        seedString[1] == 2) {
        return integrante = 'Nefesto'
    } else if (
        // seedString[0] == 0 && 
        seedString[1] == 3) {
        return integrante = 'Blackao'
    } else if (
        // seedString[0] == 0 && 
        seedString[1] == 4) {
        return integrante = 'Antonio'
    } else if (
        // seedString[0] == 0 && 
        seedString[1] == 5) {
        return integrante = 'Pedro'
    } else if (
        // seedString[0] == 1 && 
        seedString[1] == 6) {
        return integrante = 'Bispo'
    } else if (
        // seedString[0] == 0 && 
        seedString[1] == 7) {
        return integrante = 'Rafael'
    } else if (
        // seedString[0] == 0 && 
        seedString[1] == 8) {
        return integrante = 'Junks'
    } else if (
        // seedString[0] == 0 && 
        seedString[1] == 9) {
        return integrante = 'Kerscher'
    }
}
//cidade
let cidade = ''
function escolherCidade(generateSeed){
    let seedString = seed.toString()
    console.log('string', seedString[1])
    if (seedString[1] === 1){
        return cidade = 'Caxias do Sul'
    } else if (seedString[1] === 2){
        return cidade = 'Itapira'
    } else if (seedString[1] === 3) {
        return cidade = 'Ubatuba'
    } else if (seedString[1] === 4){
        return cidade = 'goiania'
    } else {
        cidade = 'fucniona cidade'
    }
    
}


console.log('seed: ', seed);
// console.log('seed: ', seed[0]);
console.log('generateSeed(): ', generateSeed());
escolherIntegrante()
// escolherCidade()
console.log('integrante: ' + integrante)
console.log('cidade ' + cidade)

// var idIntegrante = document.getElementById('integrante')
// var idSeed = document.getElementById('seed')

// idIntegrante.innerHTML = integrante
// idSeed.innerHTML = seed


// //cidade 
// let cidade = ''
// if (seed >= 33334  && seed <= 66666){
    
// }

// //frase 
// let frase = ''
// if (seed >= 66667  && seed <= 99991){
    
// }








