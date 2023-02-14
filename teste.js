


class Boss {
    constructor(_health,_fullHealth){
        this.health = _health
        this.fullHealth = _fullHealth
    }
    

    dmg(n){
        this.health  -= n
    }
    heal(n){
        this.health  += n
    }

}


// let monarkBoss = new Boss(2000, 2000)

// console.log('monarkBoss: ', monarkBoss);
// monarkBoss.dmg(1000)
// console.log('monarkBoss: ', monarkBoss);

let monarkBoss
function createMonark(){

    let boss = new Boss(2000,2000)
    
    let monark = {
    
        fun(){
            console.log('fun');
        },
        juj(){
            console.log(7777777777);
        }
    }
    return  monarkBoss = Object.assign(boss, monark)
}


function spawnBoss(boss){

    console.log('vida', boss.health);
    console.log('vida', boss.fullHealth);

}




createMonark()
// console.log(monarkBoss);
// console.log(spawnBoss(createMonark()));



console.log(true);

function gerarNumero(min, max, decimals) {

    if(decimals){
        return (Math.random() * (max - min ) + min).toFixed(decimals) ;

    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);

    }

  }

console.log(gerarNumero(2.0, 2.5, 1));