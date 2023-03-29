





class PorbWeapon {
    constructor(_weaponName,_prob,_sellPrice){
        this.nameWeapon = _weaponName 
        this.precoCraft = 0.44
        this.prob = _prob
        this.sellPrice = _sellPrice

    }

    getSuitability(){

        let suit = (((this.prob * this.precoCraft) - this.sellPrice)* -1).toFixed(2)


        console.group()
        console.log(this.nameWeapon + ' -> ' + suit);
        console.groupEnd()
    }


}

//                                   nome          probabilidade craft    preço
const sharpDresser = new PorbWeapon('Sharp Dresser',     6 ,              3.44)
const napalmer = new PorbWeapon('Napalmer',6 , 3.88)
const awperHand = new PorbWeapon('Awper Hand',8 , 4.22)
const threeRunBlade = new PorbWeapon('Three Run Blade',12 , 2)
const quackenbirdth = new PorbWeapon('Quackenbirdth',3 , 2.11)


let weapons = [
    sharpDresser,
    napalmer,
    awperHand,
    threeRunBlade,
    quackenbirdth
]

for (const x of weapons) {
    x.getSuitability()
}

