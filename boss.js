let bossHealthP = document.getElementById("hb");
let progressP = document.getElementById("progress");
let healthPointsP = document.getElementById("healthPoints");
let healthWrapP = document.querySelector(".bossHealthWrap");



// CONSTRUTOR BOSSES

class Boss {

    constructor(_health,_fullHealth){
        this.health = _health
        this.fullHealth = _fullHealth
        this.dmgTaken = 0
    }
    
    dmg(n){
        this.health  -= n
        this.dmgTaken += n

        if (this.health <= 0) {
            this.health = 0;
            
            bossDead();
            return animatebossHealth(n);
            
            //   return (bossHealthP.value = this.health);
        } else {
      //   return (bossHealthP.value = this.health);
            return animatebossHealth(n);
        }

    }

    heal(n){
        this.health  += n
        if (this.health > this.fullHealth){
            this.health = this.fullHealth
        } 
    }

    set(n) {
        this.health = n;
        
        return (bossHealthP.value = this.health);
    }
    
    setFull(n) {
        this.fullHealth = n;
        return (bossHealthP.max = this.fullHealth);
    }

    
}

// LISTA DE BOSSES 

export let boss
function createMonark(){

    let bossClass = new Boss(90000,90000)
    
    let monark = {
    
        fun(){
            console.log('fun');
        },
        juj(){
            console.log(7777777777);
        }
    }
    return  boss = Object.assign(bossClass, monark)
}    


export function resetBoss(){
    boss = {}
}

export function spawnBoss() 
{ 
    createMonark()
    healthPointsP.textContent = boss.health    
    healthWrapP.classList.add('aparecer')
    // healthWrapP.className = 'aparecer'

}

// spawnBoss()


function bossDead() {}



function animatebossHealth(plus) {
  if (plus === 0) return;

  let dano = Math.abs(plus);
  var stepTime = 10;

  let increment = 1;

  healthPointsP.textContent = boss.health;

  let x = 0;
  console.log(boss.dmgTaken);

  let style =
    Math.abs((boss.dmgTaken / boss.fullHealth) * 100 - 100) + "%";

    console.log(boss);

  console.log(style);
  progressP.style.width = style;
  console.log(window.getComputedStyle(progressP).width);

  //   let timer = setInterval(function () {

  //       x++

  //       if (x >= dano) {
  //
  //       clearInterval(timer);
  //       console.log(x);
  //       console.log(dano);
  //     }

  //   }, stepTime);
}

