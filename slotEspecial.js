import { seedObj, seedRNG } from "./modules/seedFabricator.js";
import { escolherEspecial, especial }from "./modules/especial.js";


let slotEsp = document.getElementById('slotEsp')
let btnEsp = document.getElementById('btnEsp')
let nomeE = document.getElementById('nomeEsp')
let varianteE = document.getElementById('varianteEsp')
let cidadeE = document.getElementById('cidadeEsp')
let retratoE = document.getElementById('retratoEsp')
let cargoE = document.getElementById('cargoEsp')
let poderE = document.getElementById('poderEsp')
let ataqueE = document.getElementById('ataqueEsp')
let novoAtaqueE = document.getElementById('novoAtaqueEsp')
let actionE = document.getElementById('actionEsp')

const cartaEsp = '<div id="cartaEsp">' +
'<div id="nameAndCidadeWrapperEsp">' +
  '<p id="nomeEsp"></p>' +
  '<div id="varianteEsp"></div>' +
  '<p id="cidadeEsp"></p>' +
  '<div id="especialEsp"></div>' +
'</div>' +
'<div id="retratoEsp"></div>' +
'<p id="cargoEsp"></p>' +
'<div id="poderEsp">' +
  '<p id="ataqueEsp"></p>' +
  '<p id="novoAtaqueEsp"></p>' +
  '<button id="actionEsp">PRESS</button>' +
'</div>'


let seedCampones 
let seedmakeCavalheiro
let seedmakeSangueAzul
let seedmakeRainha
export let stringSeed = seedRNG().toString()


function makeCampones(){
     stringSeed = seedRNG().toString()
    let arrSeed = stringSeed.split('')
    console.log('arrSeedCampones',arrSeed)
    let specialSeed = arrSeed
    specialSeed[0] = '1'
    specialSeed[8] = '0'
    specialSeed[14] = '0'


    console.log('specialSeedCampones',specialSeed)
    
     seedCampones = specialSeed.join('')
    console.log('seedCampones',seedCampones)

    return seedCampones
}



function makeCavalheiro(){
     stringSeed = seedRNG().toString()
    let arrSeed = stringSeed.split('')
    console.log('arrSeedmakeCavalheiro',arrSeed)
    let specialSeed = arrSeed
    specialSeed[0] = '1'
    specialSeed[8] = '1'
    specialSeed[14] = '0'


    console.log('specialSeedmakeCavalheiro',specialSeed)
    
    seedmakeCavalheiro = specialSeed.join('')
    console.log('seedmakeCavalheiro',seedmakeCavalheiro)

    return seedmakeCavalheiro
}


function makeSangueAzul(){
     stringSeed = seedRNG().toString()
    let arrSeed = stringSeed.split('')
    console.log('arrSeedmakeSangueAzul',arrSeed)
    let specialSeed = arrSeed
    specialSeed[0] = '1'
    specialSeed[8] = '2'
    specialSeed[14] = '0'


    console.log('specialSeedmakeSangueAzull',specialSeed)
    
    seedmakeSangueAzul = specialSeed.join('')
    console.log('seedmakeSangueAzul',seedmakeSangueAzul)

    return seedmakeSangueAzul
}

function makeRainha(){
     stringSeed = seedRNG().toString()
    let arrSeed = stringSeed.split('')
    console.log('arrSeedmakeRainha',arrSeed)
    let specialSeed = arrSeed
    specialSeed[0] = '1'
    specialSeed[8] = '3'
    specialSeed[14] = '0'


    console.log('specialSeedmakeRainha',specialSeed)
    
    seedmakeRainha = specialSeed.join('')
    console.log('seedmakeRainha',seedmakeRainha)

    return seedmakeRainha
}



function colocarSlot(){
    escolherEspecial(makeSangueAzul())
    console.log(especial)


    nomeE.classList.remove("float")

    slotEsp.children[0].id = especial.cartaId
    
    //NOME
    nomeE.innerHTML = especial.nome
    nomeE.classList.add(especial.nomeStyle.efeito);
    nomeE.style.fontSize = especial.nomeStyle.fontSize
    nomeE.style.fontFamily = especial.nomeStyle.fontFamily
    nomeE.style.color = especial.nomeStyle.color

    //RETRATO
    retratoE.style.backgroundImage  = especial.retrato
    retratoE.style.backgroundSize  = '100% 100%'
    retratoE.style.border  = especial.retratoStyle.border

    //CARGO
    cargoE.innerHTML = especial.cargo
    cargoE.style.fontFamily = especial.cargoStyle.fontFamily
    cargoE.style.fontSize = especial.cargoStyle.fontSize

    //ATAQUE
    ataqueE.innerHTML = especial.ataqueE 
    ataqueE.style.color = especial.ataqueStyle.color
    ataqueE.style.fontSize = especial.ataqueStyle.fontSize
    ataqueE.style.fontFamily =  especial.ataqueStyle.fontFamily
    ataqueE.style.visibility =  especial.ataqueStyle.visibility

    //ATAQUENOVO
    novoAtaqueE.innerHTML = especial.novoAtaqueE + especial.emoji
    novoAtaqueE.style.color = especial.novoAtaqueStyle.color
    novoAtaqueE.style.fontSize = especial.novoAtaqueStyle.fontSize
    novoAtaqueE.style.fontFamily =  especial.novoAtaqueStyle.fontFamily
    novoAtaqueE.style.visibility =  especial.novoAtaqueStyle.visibility

    //BOTAO

    //SEED

    




}



btnEsp.addEventListener('click', colocarSlot)

