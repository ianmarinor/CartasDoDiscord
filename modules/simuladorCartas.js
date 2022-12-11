import { generateSeed } from "./seedFabricator.js";
import { escolherIntegrante, integrante } from "./integrante.js";
import { escolherCidade, cidade } from "./cidade.js";
import { cargo, escolherCargo, cargos } from "./cargo.js";
let premioMarino = cargos.premiomarino;
let primeMinister = cargos.primeMinister;
let ministro = cargos.ministro;
let monark = cargos.monark;
let lord = cargos.lord;
let nobre = cargos.nobre;
let gentleman = cargos.gentleman;
let people = cargos.people;
let semCargo = cargos.semCargo;
let noCargo = cargos.noCargo;
import { variante, escolherVariante } from "./variante.js";
import { especial, escolherEspecial, especiais } from "./especial.js";
let tenica = especiais.tenica;
let speaker = especiais.speaker;
let bonusCartasMais = especiais.bonusCartasMais;
let abelha = especiais.abelha;
let cartaNaoEspecial = especiais.cartaNaoEspecial;



let numeroDeCartas = {
    cartasTotais: 0,
    cartasPorcEspeciais:0,
    cartasPorcNormais: 0,
  
    cartasNormais: {
      cartasNormaisTotais: 0,
  
      cargos: {
        semCargo: 0,
        people: 0,
        gentleman: 0,
        nobre: 0,
        lord: 0,
        ministro: 0,
        primeMinister: 0,
        premioMarino: 0,
        monark: 0,
      },
    
    porcentagemCartasNormais: {
      semCargo: 0,
      people: 0,
      gentleman: 0,
      nobre: 0,
      lord: 0,
      ministro: 0,
      primeMinister: 0,
      premioMarino: 0,
      monark: 0,
    }
  },
    cartaEspeciais: {
  
      cartaEspeciaisTotais:0,
  
    especiais: {
      tenica: 0,
      speaker: 0,
      bonusCartasMais: 0,
      abelha: 0,
    },
    cartaEspeciaisPorcentagens: {
      tenica: 0,
      speaker: 0,
      bonusCartasMais: 0,
      abelha: 0,
    },
    somarCartasEspeciais(){
        this.especiais.tenica + this.especiais.speaker + this.especiais.bonusCartasMais + this.especiais.abelha
    },
  }
  }

let seedObj;

function tudoParaTeste() {
  seedObj = generateSeed(false);
  // escolherIntegrante();
  escolherCidade();
  escolherCargo();
  escolherVariante();
  escolherEspecial();
}

tudoParaTeste();

let quantasCartas = 1000000;




function numeroDeCartasTeste() {
  for (let j = 0; j < quantasCartas; j++) {
    // tudoParaTeste();
    seedObj = generateSeed("");
    // console.log(seedObj);

    // console.log(integrante);

    //SEPARAR INTEGRANTE
    escolherIntegrante(seedObj._seedString);
    if (integrante != "") {
      numeroDeCartas.cartasNormais.cartasNormaisTotais++;
    }
    numeroDeCartas.cartasTotais++;

    //SEPARAR CARGO
    escolherCargo(seedObj._seedString);
    // console.log(cargo);
    if (cargo == semCargo) {
      numeroDeCartas.cartasNormais.cargos.semCargo++;
    }
    if (cargo == people) {
      numeroDeCartas.cartasNormais.cargos.people++;
    }
    if (cargo == gentleman) {
      numeroDeCartas.cartasNormais.cargos.gentleman++;
    }
    if (cargo == nobre) {
      numeroDeCartas.cartasNormais.cargos.nobre++;
    }
    if (cargo == lord) {
      numeroDeCartas.cartasNormais.cargos.lord++;
    }
    if (cargo == monark) {
      numeroDeCartas.cartasNormais.cargos.monark++;
    }
    if (cargo == ministro) {
      numeroDeCartas.cartasNormais.cargos.ministro++;
      
    }
    if (cargo == primeMinister) {
      numeroDeCartas.cartasNormais.cargos.primeMinister++;
    }
    if (cargo == premioMarino) {
      numeroDeCartas.cartasNormais.cargos.premioMarino++;
    }

    
    let teste =
        (numeroDeCartas.cartasNormais.cargos.semCargo * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.semCargo =
        teste.toFixed(0) + "%";

        let teste1 =
        (numeroDeCartas.cartasNormais.cargos.people * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.people =
        teste1.toFixed(0) + "%";
        let teste2 =
        (numeroDeCartas.cartasNormais.cargos.gentleman * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.gentleman =
        teste2.toFixed(1) + "%";
        let teste3 =
        (numeroDeCartas.cartasNormais.cargos.nobre * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.nobre =
        teste3.toFixed(2) + "%";
        let teste4 =
        (numeroDeCartas.cartasNormais.cargos.lord * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.lord =
        teste4.toFixed(2) + "%";
        let teste5 =
        (numeroDeCartas.cartasNormais.cargos.monark * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.monark =
        teste5.toFixed(2) + "%";
        let teste7 =
        (numeroDeCartas.cartasNormais.cargos.primeMinister * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.primeMinister =
        teste7.toFixed(3) + "%"  
        let teste8 =
        (numeroDeCartas.cartasNormais.cargos.ministro * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.ministro =
        teste8.toFixed(3) + "%";
        let teste9 =
        (numeroDeCartas.cartasNormais.cargos.premioMarino * 100) /
        numeroDeCartas.cartasNormais.cartasNormaisTotais
        numeroDeCartas.cartasNormais.porcentagemCartasNormais.premioMarino =
        teste9.toFixed(3) + "%";

        //SEPARAR ESPECIAL
        escolherEspecial(seedObj._seedString);
        // console.log(especial);
        if (especial == tenica){
            numeroDeCartas.cartaEspeciais.especiais.tenica++
        }
        if (especial == speaker){
            numeroDeCartas.cartaEspeciais.especiais.speaker++
        }
        if (especial == abelha){
            numeroDeCartas.cartaEspeciais.especiais.abelha++
        }
        if (especial == bonusCartasMais){
            numeroDeCartas.cartaEspeciais.especiais.bonusCartasMais++
        }
        numeroDeCartas.cartaEspeciais.cartaEspeciaisTotais = 
        numeroDeCartas.cartaEspeciais.especiais.bonusCartasMais +
        numeroDeCartas.cartaEspeciais.especiais.abelha +
        numeroDeCartas.cartaEspeciais.especiais.speaker + 
        numeroDeCartas.cartaEspeciais.especiais.tenica

        let porcetnage = (numeroDeCartas.cartaEspeciais.especiais.tenica * 100) /
        numeroDeCartas.cartaEspeciais.cartaEspeciaisTotais

        numeroDeCartas.cartaEspeciais.cartaEspeciaisPorcentagens.tenica =
        porcetnage.toFixed(3) + "%";
        


        let porcetnageaaa = (numeroDeCartas.cartaEspeciais.especiais.bonusCartasMais * 100) /
        numeroDeCartas.cartaEspeciais.cartaEspeciaisTotais

        numeroDeCartas.cartaEspeciais.cartaEspeciaisPorcentagens.bonusCartasMais =
        porcetnageaaa.toFixed(0) + "%";


        let porcetnageaaaa = (numeroDeCartas.cartaEspeciais.especiais.speaker * 100) /
        numeroDeCartas.cartaEspeciais.cartaEspeciaisTotais

        numeroDeCartas.cartaEspeciais.cartaEspeciaisPorcentagens.speaker =
        porcetnageaaaa.toFixed(3) + "%";

        let pora = (numeroDeCartas.cartaEspeciais.especiais.abelha * 100) /
        (numeroDeCartas.cartaEspeciais.cartaEspeciaisTotais)

        numeroDeCartas.cartaEspeciais.cartaEspeciaisPorcentagens.abelha =
        pora.toFixed(3) + "%"; 


       numeroDeCartas.cartasPorcNormais = (numeroDeCartas.cartasNormais.cartasNormaisTotais * 100 / numeroDeCartas.cartasTotais).toFixed(1) + '%'
       numeroDeCartas.cartasPorcEspeciais = (numeroDeCartas.cartaEspeciais.cartaEspeciaisTotais * 100 / numeroDeCartas.cartasTotais).toFixed(1) + '%'




    }

    
}




numeroDeCartasTeste();

console.log(numeroDeCartas);
console.log(numeroDeCartas.cartasNormais);
console.log(numeroDeCartas.cartaEspeciais);
console.log(numeroDeCartas.cartaEspeciais.somarCartasEspeciais());
