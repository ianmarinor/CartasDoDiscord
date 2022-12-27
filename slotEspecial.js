import { seedObj, seedRNG } from "./modules/seedFabricator.js";
import { escolherEspecial, especial }from "./modules/especial.js";


let slotEsp = document.getElementById('cartaEsp')
let btnEsp = document.getElementById('btnEsp')

const cartaEsp = '<div id="cartaEsp">' +
'<div class="nameAndCidadeWrapperEsp">' +
  '<p class="nomeEsp"></p>' +
  '<div class="varianteEsp"></div>' +
  '<p class="cidadeEsp"></p>' +
  '<div class="especialEsp"></div>' +
'</div>' +
'<div class="retratoEsp"></div>' +
'<p class="cargoEsp"></p>' +
'<div class="poderEsp">' +
  '<p class="ataqueEsp"></p>' +
  '<p class="novoAtaqueEsp"></p>' +
  '<button class="actionEsp">PRESS</button>' +
'</div>'



function makeCampones(){
    let stringSeed = seedRNG().toString()
    let arrSeed = stringSeed.split('')
    console.log('arrSeedCampones',arrSeed)
    let specialSeed = arrSeed
    specialSeed[0] = '1'
    specialSeed[8] = '0'
    specialSeed[14] = '0'


    console.log('specialSeedCampones',specialSeed)
    
    let seedCampones = specialSeed.join('')
    console.log('seedCampones',seedCampones)

    return seedCampones
}



function makeCavalheiro(){
    let stringSeed = seedRNG().toString()
    let arrSeed = stringSeed.split('')
    console.log('arrSeedmakeCavalheiro',arrSeed)
    let specialSeed = arrSeed
    specialSeed[0] = '1'
    specialSeed[8] = '1'
    specialSeed[14] = '0'


    console.log('specialSeedmakeCavalheiro',specialSeed)
    
    let seedmakeCavalheiro = specialSeed.join('')
    console.log('seedmakeCavalheiro',seedmakeCavalheiro)

    return seedmakeCavalheiro
}


function makeSangueAzul(){
    let stringSeed = seedRNG().toString()
    let arrSeed = stringSeed.split('')
    console.log('arrSeedmakeSangueAzul',arrSeed)
    let specialSeed = arrSeed
    specialSeed[0] = '1'
    specialSeed[8] = '2'
    specialSeed[14] = '0'


    console.log('specialSeedmakeSangueAzull',specialSeed)
    
    let seedmakeSangueAzul = specialSeed.join('')
    console.log('seedmakeSangueAzul',seedmakeSangueAzul)

    return seedmakeSangueAzul
}

function makeRainha(){
    let stringSeed = seedRNG().toString()
    let arrSeed = stringSeed.split('')
    console.log('arrSeedmakeRainha',arrSeed)
    let specialSeed = arrSeed
    specialSeed[0] = '1'
    specialSeed[8] = '3'
    specialSeed[14] = '0'


    console.log('specialSeedmakeRainha',specialSeed)
    
    let seedmakeRainha = specialSeed.join('')
    console.log('seedmakeRainha',seedmakeRainha)

    return seedmakeRainha
}



function colocarSlot(){
    escolherEspecial(makeRainha())
    console.log(especial)
}

btnEsp.addEventListener('click', colocarSlot)

