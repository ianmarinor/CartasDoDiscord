import { seedObj, seedRNG } from "./modules/seedFabricator.js";
import { escolherEspecial, especial }from "./modules/especial.js";




const cartaEsp = '<div class="cartaEsp">' +
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
  '<p class="seedEsp"></p>' +
    '<p class="seloEsp"></p>' +
'</div>'


let seedCampones 
let seedmakeCavalheiro
let seedmakeSangueAzul
let seedmakeRainha

let seedEspecial
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
     seedEspecial = seedCampones
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
    seedEspecial = seedmakeCavalheiro
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
    seedEspecial = seedmakeSangueAzul
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
    seedEspecial = seedmakeRainha
    console.log('seedmakeRainha',seedmakeRainha)

    return seedmakeRainha
}



function colocarSlot(tipo){

    console.log('chamou*********');

let btnCampones = document.getElementById('btnCampones')
let btnCavalheiro = document.getElementById('btnCavalheiro')
let btnSangue = document.getElementById('btnSangue')
let btnRainha = document.getElementById('btnRainha')



let cartaE = slotEsp.querySelector('.cartaEsp')
let btnEsp = document.getElementById('btnEsp')
let nomeE = slotEsp.querySelector('.nomeEsp')
// let nomeE = slotEsp.children[0].children[0]
let retratoE = slotEsp.querySelector('.retratoEsp')
let cargoE = slotEsp.querySelector('.cargoEsp')
let poderE = slotEsp.querySelector('.poderEsp')
let ataqueE = slotEsp.querySelector('.ataqueEsp')
let novoAtaqueE = slotEsp.querySelector('.novoAtaqueEsp')
let actionE = slotEsp.querySelector('.actionEsp')
let seedEsp = slotEsp.querySelector('.seedEsp')





    escolherEspecial(tipo)
    console.log(especial)


    nomeE.classList.remove("float")

    slotEsp.children[0].id = especial.cartaId

    retratoE.style.visibility = 'visible'
    console.log(slotEsp.querySelector('.nomeEsp'));
    //NOME
    // nomeE.className = ''
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
    novoAtaqueE.innerHTML = especial.novoAtaqueE 
    novoAtaqueE.style.color = especial.novoAtaqueStyle.color
    novoAtaqueE.style.fontSize = especial.novoAtaqueStyle.fontSize
    novoAtaqueE.style.fontFamily =  especial.novoAtaqueStyle.fontFamily
    novoAtaqueE.style.visibility =  especial.novoAtaqueStyle.visibility

    //BOTAO

    //SEED
    seedEsp.innerHTML = seedEspecial
    




}



btnCampones.addEventListener('click',function() {
    colocarSlot(makeCampones());
} )
btnCavalheiro.addEventListener('click',function() {
    colocarSlot(makeCavalheiro());
} )
btnSangue.addEventListener('click',function() {
    colocarSlot(makeSangueAzul()) ;
} )
btnRainha.addEventListener('click',function() {
    colocarSlot(makeRainha());
} )



// btnEsp.addEventListener('click', sorteio)



let myInterval
slotEsp.addEventListener('click', moverToCartaMao)
let cartaEspecial

function moverToCartaMao() {
    
    cartaEspecial = slotEsp.children[0]

    if(cartaEspecial.id && !myInterval){

        mao.replaceChild(cartaEspecial, mao.children[0]);
        slotEsp.innerHTML = cartaEsp
    }

  }


function sorteio(juj,tempo){
    if(!myInterval){

        colocarSlot(juj())
        myInterval = setInterval(function() {
            colocarSlot(juj());
        }, tempo)
    } else{
        clearInterval(myInterval)
        myInterval = 0
    }
   
    
}

