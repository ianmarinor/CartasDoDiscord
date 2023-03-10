class Human {
    constructor(){
        this.hair = true
    }
}
class Man extends Human {
    constructor (){
        super()
        this.penis = true
    }
}

let ian = new Man
console.log(ian);