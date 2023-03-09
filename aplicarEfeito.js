// import { efeitoPremioMonark } from './modules/especial';
import { efeitos, rodadas,somaPontos, snd, hpPlayer, elimCardInv, invObj } from "./script.js";


let inv = document.getElementById("inv");
let inv1 = document.getElementById("inv").firstChild;
let inv2 = document.getElementById("inv").firstChild;
let inv3 = document.getElementById("inv").firstChild;
let inv4 = document.getElementById("inv").firstChild;
let placarEnergia = document.querySelector(".placar");
let placarRodadas = document.querySelector(".arena");
let empty1 = inv.children[0];
let empty2 = inv.children[1];
let empty3 = inv.children[2];
let empty4 = inv.children[3];
let empty5 = inv.children[4];
let empty6 = inv.children[5];
let moneyP = document.getElementById('money')
// let placarRodadasNumero = parseInt(placarRodadas.textContent)

let nome1 = inv1.firstChild;


// let efeitos = {}

export function aplicarEfeitos() {
  // console.log(efeitos.efeito1.status);

  if (efeitos.status == true) {
    if (efeitos.css.nome == "premioMonark") {
      premioMonark();
    } else if (efeitos.css.nome == "estoico"){
      // estoico()
    } else if (efeitos.css.nome == "lucio")
    lucio()
  }
}

function premioMonark() {
  
  for (let i = 0; i < 6; i++) {


    if (invObj[i].id == 'monark' && !invObj[i].isInfected) {

      
      let monark = invObj[i]
      monark.isInfected = true

      function infectarMonark(){

        monark._canBeDeleted = true
        monark.infected = true
        if(monark._thisCardP.children[0].className != "float"){
          // moneyP.textContent = parseInt(moneyP.textContent) + bonusMonark
          hpPlayer.add(3)

          let premioMonarkElimAu = ['premioMonarkElim.mp3', 0.5]
        setTimeout(function(){
          snd(premioMonarkElimAu)
        }, 1000)
        }
      
      
      monark._thisCardP.children[0].className = "float";
      monark._thisCardP.style.backgroundColor = "black";
      monark._thisCardP.children[1].style.backgroundImage =
        'url("/pics/retratoPremioMonark.gif")';
      monark._thisCardP.children[1].style.backgroundSize = "100% 100%";
      monark._thisCardP.children[1].style.backgroundColor = "#343436";
      monark._thisCardP.children[1].style.fontFamily = "premiomonark";
      monark._thisCardP.children[1].style.border = "2px solid black";
      monark._thisCardP.style.color = "#343436";
      monark._thisCardP.style.border = "2px solid black";
      monark._thisCardP.children[2].innerHTML = "ADEUS...";
      monark._thisCardP.children[2].className = "float";
      monark._thisCardP.children[3].children[0].style.visibility = 'hidden';
      monark._thisCardP.classList.add('vanish')
        
        
      }
      


      function eliminarMonark(){

        
        if(monark.infected){

          monark.hp.monarkKill()
        }
        
      
      }

      

      setTimeout(infectarMonark, Math.floor(Math.random() * 150 +  250))


      setTimeout(eliminarMonark, 10000)
    } else {
      console.log('NAO TEM MONARK');
    }
  }
}

function lucio(){
  
  
}