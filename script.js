const totalNumOfSeeds = (99999999999999 - 11111111111111)
function seedRNG(){
    return Math.floor(Math.random() * totalNumOfSeeds)
} 







// This function generates a seed or takes a seed as input
// the input will always be translated to the same seed if an integer
// if a string, it'll be converted
let input = ''
function generateSeed(input){
    //se a chave for LETRA!
     if (typeof input === 'string' && input.length < 20 && input.length >= 3){
        let sum = 1
        for (let i = 0; i < input.length; i++){
                sum = sum + input[i].charCodeAt()  
        }
        return sum * 27452900482
    } else if (typeof input === 'number' && input > 9999999){
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
    seedString = generateSeed(input).toString()
    console.log('integrante seed', seedString);
    if (
        seedString[4] == 1 
        // && 
        // seedString[1] == 0
        )
        {return integrante = 'Gandalf'
    } else if 
        (
        seedString[4] == 2 
        // && 
        // seedString[1] == 0
        )
        { return integrante = 'Turu'} 
        else if 
        (
        seedString[4] == 3 
        // && 
        // seedString[1] == 0
        ) 
        {return integrante = 'Nefesto'
    } else if 
        (
        seedString[4]== 4 
        // && 
        // seedString[1] == 0
        ) 
        {return integrante = 'Blackao'
    } else if 
        (
        seedString[4] == 5 
        // && 
        // seedString[1] == 0
        ) 
        {return integrante = 'Sr. Antonio'
    } else if 
        (
        seedString[4] == 6 
        // && 
        // seedString[1] == 0
        ) 
        {return integrante = 'Pedro'
    } else if 
        (
        seedString[4] == 7 
        // && 
        // seedString[1] == 0
        ) 
        {return integrante = 'Curtas'
    } else if 
        (
        seedString[4] == 8 
        // && 
        // seedString[1] == 0
        ) 
        {return integrante = 'Twelve'
    } else if 
        (
        seedString[4] == 9 
        // && 
        // seedString[1] == 0
        ) 
        {return integrante = 'Junks'
    } else if 
        (
        seedString[4] == 0 
        // &&
        // seedString[1] == 0
        ) 
        {return integrante = 'Kerscher'} 
        // else if 
    //     (
    //     // seedString[0] == 1  && 
    //     seedString[1]
    //     ) 
    //     {return integrante = 'Curtas'
    // } else 
    //     {return integrante = 'SEM NOME'}
}
//cidade
// THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER
let cidade = ''
function escolherCidade(){
    seedString = generateSeed(input).toString()
    console.log('string cidade', seedString)
    if (
        // seedString[1] == 0 && 
        seedString[2] == 0){
        return cidade = 'de Caxias do Sul'
    } 
    else if 
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
        // seedString[1] == 0 && 
        seedString[2] == 6) {
        return cidade = 'de Itanhaém'
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
    seedString = generateSeed(input).toString()
    console.log('stringcargo', seedString)
    if (
        seedString[4] == 1 && seedString[5] == 2 && seedString[6] == 3 && seedString[7] == 4 && seedString[8] == 5)
        {return cargo = 'carta-premiomarino'
        } else if (
        seedString[5] >= 5 && seedString[6] == 3 && seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'carta-primeminister'}
        else if (
        seedString[0] < 5 && seedString[6] == 5 && seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'carta-speaker'}
        else if (
        seedString[6] == 5 && seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'carta-ministro'} 
        else if (
        seedString[6] >= 5 && seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'carta-lord'}
        else if (
        seedString[7] == 4 && seedString[8] == 5)
        { return cargo = 'carta-nobre'}
        else if (
        seedString[7] == 4 && seedString[8] == 1)
        { return cargo = 'carta-monark'}
        else if (
        seedString[7] >= 4 && seedString[8] == 5)
        { return cargo = 'carta-gentleman'}
        else if (
        seedString[7] >= 4 && seedString[8] >= 5)
        { return cargo = 'carta-people'}
        else 
        { return cargo = 'carta-semcargo'}
}



//RNG DOS PONTES DE PODER
let pontoPoderEspecial = () => Math.floor(Math.random() * (5 - 1) + 1)

console.log('pontoPoderEspecial: ', pontoPoderEspecial);
let pontoPoderSemCargo = () => Math.floor(Math.random() * (10 - 1) + 1)
let pontoPoderSemCargoD = () => Math.floor(Math.random() * (10 - 1) + 1)
// console.log('pontoPoderSemCargo: ', pontoPoderSemCargo);
let pontoPoderPeople = () => Math.floor(Math.random() * (20 - 1) + 1)
let pontoPoderPeopleD = () => Math.floor(Math.random() * (20 - 1) + 1)
// console.log('pontoPoderPeople: ', pontoPoderPeople);
let pontoPoderGentleman = () => Math.floor(Math.random() * (30 - 5) + 5)
let pontoPoderGentlemanD = () => Math.floor(Math.random() * (30 - 5) + 5)
let pontoPoderMonark = () => Math.floor(Math.random() * 3)
let pontoPoderMonarkD = () => Math.floor(Math.random() * 3)
let pontoPoderNobre = () => Math.floor(Math.random() * (40 - 15) +15)
let pontoPoderNobreD = () => Math.floor(Math.random() * (40 - 15) +15)
let pontoPoderLord = () => Math.floor(Math.random() * (35 - 10) + 10)
let pontoPoderLordD = () =>Math.floor(Math.random() * (35 - 10) + 10)
// console.log('pontoPoderLord: ', pontoPoderLord);
let pontoPoderMinistro = () => Math.floor(Math.random() * (60 - 30) + 30)
let pontoPoderMinistroD = () => Math.floor(Math.random() * (60 - 30) + 30)
// console.log('pontoPoderMinistro: ', pontoPoderMinistro);
let pontoPoderPrimeMinister = () => Math.floor(Math.random() * (70 - 50) + 50)
let pontoPoderPrimeMinisterD = () => Math.floor(Math.random() * (70 - 50) + 50)
let pontoPoderRNGPremioMarino = () => Math.floor(Math.random() * (150 - 90) + 90)
let pontoPoderRNGPremioMarinoD = () => Math.floor(Math.random() * (150 - 90) + 90)
// console.log('pontoPoderRNGPremioMarino: ', pontoPoderRNGPremioMarino);




let poder = {}
function escolherPoder(){
    if(cargo === 'carta-semcargo'){
       return  poder = {
                _ataque: pontoPoderSemCargo(),
                _defesa: pontoPoderSemCargoD(),
                _especial: pontoPoderEspecial()
       }
    } else if (cargo === 'carta-people'){
        return  poder = {
                 _ataque: pontoPoderPeople(),
                 _defesa: pontoPoderPeopleD(),
                 _especial: pontoPoderEspecial()
        }
     } else if (cargo === 'carta-gentleman'){
        return  poder = {
                 _ataque: pontoPoderGentleman(),
                 _defesa: pontoPoderGentlemanD(),
                 _especial: pontoPoderEspecial()
        }
     } else if (cargo === 'carta-monark'){
        return  poder = {
                 _ataque: pontoPoderMonark(),
                 _defesa: pontoPoderMonarkD(),
                 _especial: 0
        }
     } else if (cargo === 'carta-nobre'){
        return  poder = {
                 _ataque: pontoPoderNobre(),
                 _defesa: pontoPoderNobreD(),
                 _especial: pontoPoderEspecial()
        }
     } else if (cargo === 'carta-lord'){
        return  poder = {
                 _ataque: pontoPoderLord(),
                 _defesa: pontoPoderLordD(),
                 _especial: pontoPoderEspecial()
        }
     } else if (cargo === 'carta-ministro'){
        return  poder = {
                 _ataque: pontoPoderMinistro(),
                 _defesa: pontoPoderMinistroD(),
                 _especial: pontoPoderEspecial()
        }
     } else if (cargo === 'carta-primeminister'){
        return  poder = {
                 _ataque: pontoPoderPrimeMinister(),
                 _defesa: pontoPoderPrimeMinisterD(),
                 _especial: pontoPoderEspecial()
        }
     } else if (cargo === 'carta-premiomarino'){
        return  poder = {
                 _ataque: pontoPoderRNGPremioMarino(),
                 _defesa: pontoPoderRNGPremioMarinoD(),
                 _especial: pontoPoderEspecial()
        }
     } else if (cargo === 'carta-speaker'){
        return  poder = {
                 _ataque: 'ORDER!!',
                 _defesa: pontoPoderRNGPremioMarinoD(),
                 _especial: '20'
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
let mover = document.getElementById('mover')
let inv = document.getElementById('inv')

let nomeP = document.querySelector('.nome')
let cidadeP = document.querySelector('.cidade')
let retratoP = document.querySelector('.retrato')
let cargoP = document.querySelector('.cargo')
//div poder
let ataqueP = document.querySelector('.ataque')
let defesaP = document.querySelector('.defesa')
let especialP = document.querySelector('.especial')

let seedP = document.querySelector('.seed')
//carta
let cartaP = document.getElementById('carta')
// input da seed cliente
// let coloqueSuaSeed = document.getElementById('seed').value
//wrap
let wrap = document.getElementsByClassName('wrap')[0]
//input
let getSeed = document.getElementById('getseed')


function colocarInfoNoWrap(){

    const novaCarta = fabricaDeCarta(integrante, cidade, cargo, poder);

    //DOM
    nomeP.innerHTML = '&nbsp;' + novaCarta._integrante.toUpperCase()
    cidadeP.innerHTML = '&nbsp;' +  novaCarta._cidade
    ataqueP.innerHTML =  '&nbsp;' + '&#9889;'  + novaCarta._poder._ataque
    defesaP.innerHTML = '&nbsp;' +  '&#128150;'+ novaCarta._poder._defesa
    especialP.innerHTML =  '&nbsp;' + '&#11088;' + novaCarta._poder._especial
    seedP.innerHTML = '&nbsp;' + seedString
    cartaP.id = novaCarta._cargo

    retratoP.style.display = "block"

    //CARTAS ESPECIAIS 
    if (novaCarta._cargo === 'carta-speaker'){
        nomeP.innerHTML = '&nbsp; SPEAKER'  
        cidadeP.innerHTML = '&nbsp; PARLAMENTO'
        
    }


    //colocar retrato
     if (novaCarta._cargo === 'carta-speaker'){
        retratoP.style.backgroundImage = "url('pics/speaker.webp')"
    } else if (novaCarta._integrante === 'Turu'){
        retratoP.style.backgroundImage = "url('pics/turu.webp')"
    } else if (novaCarta._integrante === 'Blackao'){
        retratoP.style.backgroundImage = "url('pics/blackao.jpeg')"

    } else if (novaCarta._integrante === 'Gandalf'){
        retratoP.style.backgroundImage = "url('pics/gandarfu.png')"
    } 

     else if (novaCarta._integrante === 'Kerscher'){
        retratoP.style.backgroundImage = "url('pics/kerscher.png')"
    } else if (novaCarta._integrante === 'Pedro'){
        retratoP.style.backgroundImage = "url('pics/pedro.png')"
    } else if (novaCarta._integrante === 'Nefesto'){
        retratoP.style.backgroundImage = "url('pics/nefesto.png')"
    } else if (novaCarta._integrante === 'Sr. Antonio'){
        retratoP.style.backgroundImage = "url('pics/antonio.png')"
    }
    else {

        retratoP.style.backgroundImage = ""
    }
    
     //colocar cargo
    if (novaCarta._cargo === 'carta-semcargo'){
        cargoP.innerHTML = '&nbsp;' + 'sem cargo'.toUpperCase()
        retratoP.style.border = ''

    } else if (novaCarta._cargo === 'carta-people'){
        cargoP.innerHTML = '&nbsp;' + 'people'.toUpperCase()
        retratoP.style.border = ''

    } else if (novaCarta._cargo === 'carta-gentleman'){
        cargoP.innerHTML = '&nbsp;' + 'gentleman'.toUpperCase()
        retratoP.style.border = ''

    } else if (novaCarta._cargo === 'carta-ministro'){
        cargoP.innerHTML = '&nbsp;' + 'ministro'.toUpperCase() + '👨‍⚖️'
        retratoP.style.border = ''

    } else if (novaCarta._cargo === 'carta-lord'){
        cargoP.innerHTML = '&nbsp;' + 'lord'.toUpperCase() + '👑'
        retratoP.style.border = ''

    } else if (novaCarta._cargo === 'carta-nobre'){
        cargoP.innerHTML = '&nbsp;' + 'nobre'.toUpperCase() + '💙'
        retratoP.style.border = ''

    } else if (novaCarta._cargo === 'carta-primeminister'){
        cargoP.innerHTML = '&nbsp;' + 'prime minister'.toUpperCase() + '💪'
        cargoP.style.backgroundImage = 'pics/wrapPremioMarino.webp'
        retratoP.style.border = ''
        
    } else if (novaCarta._cargo === 'carta-premiomarino'){
        cargoP.innerHTML = '&nbsp;' + '&#127942; premio marino &#127942;'.toUpperCase()
        retratoP.style.border = ''
    } else if (novaCarta._cargo === 'carta-monark'){
        cargoP.innerHTML = '&nbsp;' + 'monark' + '&#128169;'
        retratoP.style.border = ''
    }  else if (novaCarta._cargo === 'carta-speaker'){
        cargoP.innerHTML = novaCarta._integrante.toUpperCase() + ' BANIDO! <BR> 🔨'
        retratoP.style.border = '2px dotted green'
    } else {
        true
    }
        
}



function colocarInput(){
    // input = 1111111111111
    input =  getSeed.value
}

//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */

let cartaParaMover = document.querySelectorAll('div')[1]
let copyCard = ''
let copySeed = ''


function cardShrinker(cartaGrande){
    cartaGrande.style.height = '295px'
    cartaGrande.style.width = '190px'
    cartaGrande.style.fontSize = '10px'
    cartaGrande.children[1].style.backgroundSize = '139px 87px'

}

function moverCarta(){

    copyCard = cartaParaMover.cloneNode(true)
    // copySeed = copy.getElementsByClassName('seed')
    cardShrinker(copyCard)
    if (inv.childElementCount < 4 &&  inv.children[0] === undefined){
        inv.appendChild(copyCard)
    } else if (inv.childElementCount < 4 &&  inv.children[0].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[1] === undefined){
        inv.appendChild(copyCard)
    } else if (inv.childElementCount < 4 &&  inv.children[1].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[2] === undefined){
        inv.appendChild(copyCard)
    } else if (inv.childElementCount < 4 &&  inv.children[2].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[3] === undefined){
        inv.appendChild(copyCard)
    }  
}

function moverCartaMonark(){

    copyCard = cartaParaMover.cloneNode(true)
    // copySeed = copy.getElementsByClassName('seed')
    cardShrinker(copyCard)
    if (inv.childElementCount < 4 &&  inv.children[0] === undefined && copyCard.id === 'carta-monark'){
        inv.appendChild(copyCard)
    } else if (inv.childElementCount < 4 &&  inv.children[0].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[1] === undefined && copyCard.id === 'carta-monark'){
        inv.appendChild(copyCard)
    } else if (inv.childElementCount < 4 &&  inv.children[1].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[2] === undefined && copyCard.id === 'carta-monark'){
        inv.appendChild(copyCard)
    } else if (inv.childElementCount < 4 &&  inv.children[2].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[3] === undefined && copyCard.id === 'carta-monark'){
        inv.appendChild(copyCard)
    }  


}


/****************************************** */
// TIRAR CARTA DO INVENTARIO
// /******************************************** */

btnReset = document.getElementById('btnReset')

function deletarDeck(e){

    if(e.target.id != 'carta-monark'){
    inv.removeChild(e.target)
    }
    
    
    
}   

function resetarDeck(){

    for (let i = 0; i < 4; i++){
        
        inv.removeChild(inv.children[0])
    }
}
    




button.addEventListener('click', colocarInput)
button.addEventListener('click', escolherIntegrante)
button.addEventListener('click', escolherCidade)
button.addEventListener('click', escolherCargo)
button.addEventListener('click', escolherPoder)
button.addEventListener('click', colocarInfoNoWrap)
button.addEventListener('click', moverCartaMonark)
mover.addEventListener('click', moverCarta)
inv.addEventListener('click', deletarDeck)
btnReset.addEventListener('click', resetarDeck)


















