const totalNumOfSeeds = (999999999999 - 111111111111)
function seedRNG(){
    return Math.floor(Math.random() * totalNumOfSeeds)
} 







// This function generates a seed or takes a seed as input
// the input will always be translated to the same seed if an integer
// if a string, it'll be converted
function generateSeed(input){
    //se a chave for LETRA!
     if (typeof input === 'string' && input.length < 20 && input.length >= 3){
        let sum = 1
        for (let i = 0; i < input.length; i++){
                sum = sum + input[i].charCodeAt()  
        }
        return sum * 27452900482
    } else if (typeof input === 'number'){
        return input
    }
    else {
        return  seedRNG()
    }
    
}



// generateSeed('')
// let seed = generateSeed()
// console.log('Seed: ', seed);


// generateSeed('a')





// ***********************
// LINK SEED TO ELEMENT
//**************************/

//integrante
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER
let integrante = ''
function escolherIntegrante(){
    let seedString = generateSeed().toString()
    console.log('seedString: ', seedString);
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
        return integrante = 'Sr. Antonio'
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
// THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER
let cidade = ''
function escolherCidade(){
    let seedString = generateSeed().toString()
    console.log('string cidade', seedString[1])
    if (
        // seedString[1] == 0 && 
        seedString[2] == 0){
        return cidade = 'de Caxias do Sul'
    } else if 
    (
        // seedString[1] == 0 && 
        seedString[2] == 1)
        { return cidade = 'de Itapira'} 
        else if (
        // seedString[1] == 0 && 
        seedString[2] == 2) {
        return cidade = 'de Ubatuba'
    } else if (
        // seedString[1] == 0 && 
        seedString[2] == 3) {
        return cidade = 'de Sao Jose Dos Pinhais'
    } else if (
        // seedString[1] == 0 && 
        seedString[2] == 4) {
        return cidade = 'do Rio de Janeiro'
    } else if (
        // seedString[1] == 0 && 
        seedString[2] == 5) {
        return cidade = 'de Maringá'
    } else if (
        // seedString[1] == 1 && 
        seedString[2] == 6) {
        return cidade = 'de Goiania'
    } else if (
        // seedString[1] == 0 && 
        seedString[2] == 7) {
        return cidade = 'da Lapa'
    } else if (
        // seedString[1] == 0 && 
        seedString[2] == 8) {
        return cidade = 'de Jaraguá'
    } else if (
        // seedString[1] == 0 && 
        seedString[2] == 9) {
        return cidade = 'de Curitiba'
    }  
}
//CARGO
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE A ROLE
let cargo = ''
function escolherCargo(){
    let seedString = generateSeed().toString()
    console.log('stringcargo', seedString[4])
    if (
        seedString[4] == 1 && seedString[5] == 2 && seedString[6] == 3 && seedString[7] == 4 && seedString[8] == 5)
        {return cargo = 'Premio Marino'
    } else if (
        seedString[5] >= 5 && seedString[6] == 3 && seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'Prime Minister'} 
        else if (
        seedString[6] == 5 && seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'Ministro'} 
        else if (
        seedString[6] >= 5 && seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'Lord'}
        else if (
        seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'Nobre'}
        else if (
        seedString[7] == 4 && seedString[8] == 1)
        { return cargo = 'Monark'}
        else if (
        seedString[7] >= 4 && seedString[8] == 5)
        { return cargo = 'Gentleman'}
        else if (
        seedString[7] >= 4 && seedString[8] >= 5)
        { return cargo = 'People'}
        else 
        { return cargo = 'Sem-cargo'}
}



//RNG DOS PONTES DE PODER
let pontoPoderEspecial = Math.floor(Math.random() * (5 - 1) + 1)
// console.log('pontoPoderEspecial: ', pontoPoderEspecial);
let pontoPoderSemCargo = Math.floor(Math.random() * 10)
let pontoPoderSemCargoD = Math.floor(Math.random() * 10)
// console.log('pontoPoderSemCargo: ', pontoPoderSemCargo);
let pontoPoderPeople = Math.floor(Math.random() * 20)
let pontoPoderPeopleD = Math.floor(Math.random() * 20)
// console.log('pontoPoderPeople: ', pontoPoderPeople);
let pontoPoderGentleman = Math.floor(Math.random() * (30 - 5) + 5)
let pontoPoderGentlemanD = Math.floor(Math.random() * (30 - 5) + 5)
let pontoPoderMonark = Math.floor(Math.random() * 5)
let pontoPoderMonarkD = Math.floor(Math.random() * 5)
let pontoPoderNobre = Math.floor(Math.random() * (40 - 15) +15)
let pontoPoderNobreD = Math.floor(Math.random() * (40 - 15) +15)
let pontoPoderLord = Math.floor(Math.random() * (35 - 10) + 10)
let pontoPoderLordD = Math.floor(Math.random() * (35 - 10) + 10)
// console.log('pontoPoderLord: ', pontoPoderLord);
let pontoPoderMinistro = Math.floor(Math.random() * (60 - 30) + 30)
let pontoPoderMinistroD = Math.floor(Math.random() * (60 - 30) + 30)
// console.log('pontoPoderMinistro: ', pontoPoderMinistro);
let pontoPoderPrimeMinister = Math.floor(Math.random() * (70 - 50) + 50)
let pontoPoderPrimeMinisterD = Math.floor(Math.random() * (70 - 50) + 50)
let pontoPoderRNGPremioMarino = Math.floor(Math.random() * (150 - 90) + 90)
let pontoPoderRNGPremioMarinoD = Math.floor(Math.random() * (150 - 90) + 90)
// console.log('pontoPoderRNGPremioMarino: ', pontoPoderRNGPremioMarino);




let poder = {}
function escolherPoder(){
    if(cargo === 'Sem-cargo'){
       return  poder = {
                _ataque: pontoPoderSemCargo,
                _defesa: pontoPoderSemCargoD,
                _especial: pontoPoderEspecial
       }
    } else if (cargo === 'People'){
        return  poder = {
                 _ataque: pontoPoderPeople,
                 _defesa: pontoPoderPeopleD,
                 _especial: pontoPoderEspecial
        }
     } else if (cargo === 'Gentleman'){
        return  poder = {
                 _ataque: pontoPoderGentleman,
                 _defesa: pontoPoderGentlemanD,
                 _especial: pontoPoderEspecial
        }
     } else if (cargo === 'Monark'){
        return  poder = {
                 _ataque: pontoPoderMonark,
                 _defesa: pontoPoderMonarkD,
                 _especial: pontoPoderEspecial
        }
     } else if (cargo === 'Nobre'){
        return  poder = {
                 _ataque: pontoPoderNobre,
                 _defesa: pontoPoderNobreD,
                 _especial: pontoPoderEspecial
        }
     } else if (cargo === 'Lord'){
        return  poder = {
                 _ataque: pontoPoderLord,
                 _defesa: pontoPoderLordD,
                 _especial: pontoPoderEspecial
        }
     } else if (cargo === 'Ministro'){
        return  poder = {
                 _ataque: pontoPoderMinistro,
                 _defesa: pontoPoderMinistroD,
                 _especial: pontoPoderEspecial
        }
     } else if (cargo === 'Prime Minister'){
        return  poder = {
                 _ataque: pontoPoderPrimeMinister,
                 _defesa: pontoPoderPrimeMinisterD,
                 _especial: pontoPoderEspecial
        }
     } else if (cargo === 'Premio Marino'){
        return  poder = {
                 _ataque: pontoPoderRNGPremioMarino,
                 _defesa: pontoPoderRNGPremioMarinoD,
                 _especial: pontoPoderEspecial
        }
     }
}


//************************************************ */

function fabricaDeCarta(integrante, cidade, cargo, poder){
    
    return{
    _integrante: integrante,
    _cidade: cidade,
    _cargo: cargo,
    _poder: poder,

 }
}

//*********************************************************** */
// escolherIntegrante()
// escolherCidade()
// escolherCargo()
// escolherPoder()

////D O M 
let button = document.getElementById('btn')
let h1 = document.getElementsByTagName('h1')[0]

let nomeP = document.querySelector('.nome')
let cidadeP = document.querySelector('.cidade')
let retratoP = document.querySelector('.retrato')
let cargoP = document.querySelector('.cargo')
//div poder
let ataqueP = document.querySelector('.ataque')
let defesaP = document.querySelector('.defesa')
let especialP = document.querySelector('.especial')

let seedP = document.querySelector('.seed')


function colocarInfoNoWrap(){

    const novaCarta = fabricaDeCarta(integrante, cidade, cargo, poder);

    nomeP.innerHTML = '&nbsp;' + novaCarta._integrante.toUpperCase()
    cargoP.innerHTML = '&nbsp;' + novaCarta._cargo.toUpperCase()
    cidadeP.innerHTML = '&nbsp;' +  novaCarta._cidade
    ataqueP.innerHTML =  '&nbsp;' + '&#9889;'  + novaCarta._poder._ataque
    defesaP.innerHTML = '&nbsp;' +  '&#128150;'+ novaCarta._poder._defesa
    especialP.innerHTML =  '&nbsp;' + '&#11088;' + novaCarta._poder._especial
    seedP.innerHTML = '&nbsp;' + generateSeed()
}


button.addEventListener('click', generateSeed)
button.addEventListener('click', escolherIntegrante)
button.addEventListener('click', escolherCidade)
button.addEventListener('click', escolherCargo)
button.addEventListener('click', escolherPoder)
button.addEventListener('click', colocarInfoNoWrap)



















