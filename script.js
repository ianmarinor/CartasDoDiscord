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
     if (input.length > 9){
            if(parseInt(input) > 9){
            return parseInt(input)
            } else {
                   if(input.length >= 3 && input.length <= 25) {         
                            let sum = 1
                            for (let i = 0; i < input.length; i++){
                                    sum = sum + input[i].charCodeAt()  
                            }
                            return sum * 27452900482
            
                        }  else {
                            return  seedRNG()
                        }
                    }   
     } else {
        if(input.length >= 3 && input.length <= 25) {         
                 let sum = 1
                 for (let i = 0; i < input.length; i++){
                         sum = sum + input[i].charCodeAt()  
                 }
                 return sum * 27452900482
 
             }  else {
                 return  seedRNG()
             }
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
let seedString = ''
function escolherIntegrante(){ 
    seedString = generateSeed(input).toString()
    // console.log('integrante seed', seedString);
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
        {return integrante = 'Murillo'} 
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
// ******************************************************************
let cidade = ''
function escolherCidade(){
    // console.log('string cidade', seedString)
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
        return cidade = 'de Santo André'
    }
}
//CARGO
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE A ROLE
let cargo = ''
function escolherCargo(){
    // console.log('stringcargo', seedString)
    if (
        seedString[4] == 1 && seedString[5] == 2 && seedString[6] == 3 && seedString[7] == 4 && seedString[8] >= 5)
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
// let pontoPoderEspecial = () => Math.floor(Math.random() * (5 - 1) + 1)
let pontoPoderEspecial = () => parseInt((seedString[7]) / 2 + 1) 
// console.log('pontoPoderEspecial: ', pontoPoderEspecial);


let pontoPoderSemCargo = () =>  Math.floor((parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 1)
let pontoPoderSemCargoD = () => Math.floor((parseInt(seedString[2]) + parseInt(seedString[3])) / 2 + 1)
// let pontoPoderSemCargo = () => Math.floor(Math.random() * (10 - 1) + 1)
// let pontoPoderSemCargoD = () => Math.floor(Math.random() * (10 - 1) + 1)
// console.log('pontoPoderSemCargo: ', pontoPoderSemCargo);




let pontoPoderPeople = () => Math.floor((parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 5)
let pontoPoderPeopleD = () => Math.floor((parseInt(seedString[2]) + parseInt(seedString[3])) / 2 + 5)
// let pontoPoderPeople = () => Math.floor(Math.random() * (20 - 1) + 1)
// let pontoPoderPeopleD = () => Math.floor(Math.random() * (20 - 1) + 1) 
// console.log('pontoPoderPeople: ', pontoPoderPeople);



let pontoPoderGentleman = () => Math.floor((parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 9)
let pontoPoderGentlemanD = () => Math.floor((parseInt(seedString[2]) + parseInt(seedString[3])) / 2 + 9)
// let pontoPoderGentleman = () => Math.floor(Math.random() * (30 - 5) + 5)
// let pontoPoderGentlemanD = () => Math.floor(Math.random() * (30 - 5) + 5)


let pontoPoderMonark = () => Math.floor(Math.random() * 3)
let pontoPoderMonarkD = () => Math.floor(Math.random() * 3)


let pontoPoderNobre = () => Math.floor((parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 13)
let pontoPoderNobreD = () => Math.floor((parseInt(seedString[2]) + parseInt(seedString[3])) / 2 + 13)
// let pontoPoderNobre = () => Math.floor(Math.random() * (40 - 15) +15)
// let pontoPoderNobreD = () => Math.floor(Math.random() * (40 - 15) +15)


let pontoPoderLord = () => Math.floor((parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 17)
let pontoPoderLordD = () => Math.floor((parseInt(seedString[2]) + parseInt(seedString[3])) / 2 + 17)
// let pontoPoderLord = () => Math.floor(Math.random() * (35 - 10) + 10)
// let pontoPoderLordD = () =>Math.floor(Math.random() * (35 - 10) + 10)
// console.log('pontoPoderLord: ', pontoPoderLord);


let pontoPoderMinistro = () => Math.floor((parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 27)
let pontoPoderMinistroD = () => Math.floor((parseInt(seedString[2]) + parseInt(seedString[3])) / 2 + 27)
// let pontoPoderMinistro = () => Math.floor(Math.random() * (60 - 30) + 30)
// let pontoPoderMinistroD = () => Math.floor(Math.random() * (60 - 30) + 30)
// console.log('pontoPoderMinistro: ', pontoPoderMinistro);


let pontoPoderPrimeMinister = () => Math.floor((parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 36)
let pontoPoderPrimeMinisterD = () => Math.floor((parseInt(seedString[2]) + parseInt(seedString[3])) / 2 + 36)
// let pontoPoderPrimeMinister = () => Math.floor(Math.random() * (70 - 50) + 50)
// let pontoPoderPrimeMinisterD = () => Math.floor(Math.random() * (70 - 50) + 50)


let pontoPoderRNGPremioMarino = () => Math.floor((parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 66)
let pontoPoderRNGPremioMarinoD = () => Math.floor((parseInt(seedString[2]) + parseInt(seedString[3])) / 2 + 66)
// let pontoPoderRNGPremioMarino = () => Math.floor(Math.random() * (150 - 90) + 90)
// let pontoPoderRNGPremioMarinoD = () => Math.floor(Math.random() * (150 - 90) + 90)
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
                 _ataque: '🔨',
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
//pagin procura seed
let seedCheckInput = document.getElementById('seedcheckinput')
let seedCheckBtn = document.getElementById('seedcheckbtn')
let seedCheckPage = document.getElementById('seedcheck')


function colocarInfoNoWrap(){

    const novaCarta = fabricaDeCarta(integrante, cidade, cargo, poder);
    // console.log('novaCarta: ', novaCarta);


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
        cidadeP.innerHTML = ''
        
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

     else if (novaCarta._integrante === 'Murillo'){
        retratoP.style.backgroundImage = "url('pics/murilo.jpeg')"
    } else if (novaCarta._integrante === 'Pedro'){
        retratoP.style.backgroundImage = "url('pics/pedro.png')"
    } else if (novaCarta._integrante === 'Nefesto'){
        retratoP.style.backgroundImage = "url('pics/nefesto.png')"
    } else if (novaCarta._integrante === 'Sr. Antonio'){
        retratoP.style.backgroundImage = "url('pics/antonio.png')"
    } else if (novaCarta._integrante === 'Curtas'){
        retratoP.style.backgroundImage = "url('pics/curtas.png')"
    } else if (novaCarta._integrante === 'Junks'){
        retratoP.style.backgroundImage = "url('pics/junks.jpeg')"
    } else if (novaCarta._integrante === 'Twelve'){
        retratoP.style.backgroundImage = "url('pics/twelve.png')"
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
        cargoP.innerHTML = novaCarta._integrante.toUpperCase() + ' BAN!'
        retratoP.style.border = '2px dotted green'
    } else {
        true
    }
        
}




function colocarInput(){
    input = getSeed.value
    // input = 13315754569994
}

//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */



// function cardShrinker(cartaGrande){
//     cartaGrande.style.height = '49%'
//     cartaGrande.style.width = '38%'
//     // cartaGrande.style.fontSize = '10px'
//     // cartaGrande.children[1].style.backgroundSize = '139px 87px'

// }


let cartaParaMover = document.getElementById('pack').firstElementChild
let copyCard = ''

function moverCarta(){
    copyCard = cartaParaMover.cloneNode(true)
    // copySeed = copy.getElementsByClassName('seed')
    // cardShrinker(copyCard)
    if(parseInt(input) > 99999999){
        false
        // inv.style.backgroundColor = '#db4f4f'
    } else {
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
}








        






function moverCartaMonark(){

    copyCard = cartaParaMover.cloneNode(true)
    if(parseInt(input) > 99999999){
        false
        
    } else {
        if (inv.childElementCount < 4 &&  inv.children[0] === undefined && copyCard.id === 'carta-monark'){
            inv.appendChild(copyCard)
        } else if (inv.childElementCount < 4 &&  inv.children[0].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[1] === undefined && copyCard.id === 'carta-monark'){
            inv.appendChild(copyCard)
        } else if (inv.childElementCount < 4 &&  inv.children[1].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[2] === undefined && copyCard.id === 'carta-monark'){
            inv.appendChild(copyCard)
        } else if (inv.childElementCount < 4 &&  inv.children[2].children[4].textContent != cartaParaMover.children[4].textContent && inv.children[3] === undefined && copyCard.id === 'carta-monark'){
            inv.appendChild(copyCard)
            //substitui o monark com o homonimo
        }  else if (copyCard.id === 'carta-monark' && copyCard.children[0].children[0].textContent  === inv.children[0].children[0].children[0].textContent && inv.children[0].id != 'carta-monark'){

            inv.replaceChild(copyCard,inv.children[0])
            // inv.children[0].remove()
            // inv.appendChild(copyCard)
        } else if (copyCard.id === 'carta-monark' && copyCard.children[0].children[0].textContent  === inv.children[1].children[0].children[0].textContent && inv.children[1].id != 'carta-monark'){

            inv.replaceChild(copyCard,inv.children[1])
            // inv.children[1].remove()
            // inv.appendChild(copyCard)
        } else if (copyCard.id === 'carta-monark' && copyCard.children[0].children[0].textContent === inv.children[2].children[0].children[0].textContent && inv.children[2].id != 'carta-monark'){

            inv.replaceChild(copyCard,inv.children[2])
            // inv.children[2].remove()
            // inv.appendChild(copyCard)
        } else if (copyCard.id === 'carta-monark' && copyCard.children[0].children[0].textContent  === inv.children[3].children[0].children[0].textContent && inv.children[3].id != 'carta-monark'){
            
            inv.replaceChild(copyCard,inv.children[3])

            // inv.children[3].remove()
            // inv.appendChild(copyCard)
        }

    
    
    
    
    

    }
}

const cartaParaMoverNome = cartaParaMover.children[0].children[0].textContent
const cartaParaMoverCidade = cartaParaMover.children[0].children[1].textContent

function teste(){
    //nome
    cartaParaMover.children[0].children[1].style.color = ''
    //cidade
    cartaParaMover.children[0].children[0].style.color = ''
    //cidade negrito
    cartaParaMover.children[0].children[1].style.fontWeight = ''
    cartaParaMover.classList.remove('critico')
    //gandalf
    if (seedString[4] == '1' && seedString[2] == '0' ){
     cartaParaMover.classList.add('critico')
     cartaParaMover.children[0].children[0].style.color = 'red'
     cartaParaMover.children[0].children[1].style.color = 'red'
     cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     }
     //turu
     if (seedString[4] == '2' && seedString[2] == '1' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     }
     //nefesto
     if (seedString[4] == '3' && seedString[2] == '2' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     }
     //blackao
     if (seedString[4] == '4' && seedString[2] == '3' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     }
     //antonio
     if (seedString[4] == '5' && seedString[2] == '4' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     }
     //pedro
     if (seedString[4] == '6' && seedString[2] == '5' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     }
     //curtas
     if (seedString[4] == '7' && seedString[2] == '6' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     }
     //twelve
     if (seedString[4] == '8' && seedString[2] == '7' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     }
     //junks
     if (seedString[4] == '9' && seedString[2] == '8' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'

     }
     //murilo
     if (seedString[4] == '0' && seedString[2] == '9' ){
        cartaParaMover.classList.add('critico')
        cartaParaMover.children[0].children[0].style.color = 'red'
        cartaParaMover.children[0].children[1].style.color = 'red'
        cartaParaMover.children[0].children[1].style.fontWeight = 'bold'
     } 
   
   
   
   
   
   
   

}



/****************************************** */
// TIRAR CARTA DO INVENTARIO
// /******************************************** */

btnReset = document.getElementById('btnReset')

function deletarDeck(e){

    if (e.target.id != 'carta-monark' && e.target.parentElement.id != 'carta-monark' && e.target.parentElement.parentElement.id != 'carta-monark'){

        if( e.target.id != 'inv' && e.target.clientHeight === 291  ){
        e.target.remove()

        } else if (e.target.id != 'inv' && e.target.clientHeight != 291 && e.target.className != 'seed' ){

            if(e.target.parentElement.clientHeight === 291){
                e.target.parentElement.remove()
            }
            else{
                e.target.parentElement.parentElement.remove()
            }

        }
    }
    
}   

function resetarDeck(){
    cartaParaMover.classList.remove('critico')
    for (let i = 0; i < 4; i++){
        
        inv.removeChild(inv.children[0])
        
    }
    

}


/////// CRITICO 
    

        
      

   



function blockInv(){
    if(parseInt(input) > 99999999){
        
        inv.style.border = '3px dotted red'
    } else {
        inv.style.border = ''
    }
}

function tudo(){
    colocarInput()
    escolherIntegrante()
    escolherCidade()
    escolherCargo()
    escolherPoder()
    colocarInfoNoWrap()
    moverCartaMonark()
    teste()
    
    // inv.style.backgroundColor = ''
    
}






button.addEventListener('click', tudo)
button.addEventListener('click', blockInv)


cartaParaMover.addEventListener('click', moverCarta)
inv.addEventListener('click', deletarDeck)

btnReset.addEventListener('click', resetarDeck)
// btnReset.addEventListener('click', moverCartaMonark)
btnReset.addEventListener('click', tudo)




















