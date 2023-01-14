// import { efeitoPremioMonark } from './modules/especial';
import { efeitos, rodadas,somaPontos } from "./script.js";


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
      estoico()
    } else if (efeitos.css.nome == "lucio")
    lucio()
  }
}

function premioMonark() {
  let bonusMonark = 50
  for (let i = 0; i < 4; i++) {
    if (inv.children[i].id != "empty" && inv.children[i].id == "carta-monark") {

      
      let monark = inv.children[i];

      function infectarMonark(){

        if(monark.children[0].className != "float"){
          moneyP.textContent = parseInt(moneyP.textContent) + bonusMonark
        }
      
      
      monark.children[0].className = "float";
      monark.style.backgroundColor = "black";
      monark.children[1].style.backgroundImage =
        'url("/pics/retratoPremioMonark.gif")';
      monark.children[1].style.backgroundSize = "100% 100%";
      monark.children[1].style.backgroundColor = "#343436";
      monark.children[1].style.fontFamily = "premiomonark";
      monark.children[1].style.border = "2px solid black";
      monark.style.color = "#343436";
      monark.style.border = "2px solid black";
      monark.children[2].innerHTML = "ADEUS...";
      monark.children[2].className = "float";
      monark.children[3].children[0].style.visibility = 'hidden';
      monark.classList.add('vanish')
      

      }
      


      function eliminarMonark(){

        

        if(monark == inv.children[0]){
          inv.replaceChild(empty1,monark);

        } else if(monark == inv.children[1]){
          inv.replaceChild(empty2,monark);

        } else if(monark == inv.children[2]){
          inv.replaceChild(empty3,monark);

        } else if(monark == inv.children[3]){
          inv.replaceChild(empty4,monark);
        }

        
        somaPontos()
      }

      

      setTimeout(infectarMonark, Math.floor(Math.random() * 150 +  250))


      setTimeout(eliminarMonark, 10000)
    }
  }
}

function lucio(){
  
  
}