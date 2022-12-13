

function rng(){
    return Math.random()
}
let bar

function foo(){
    return bar = {
        poder: rng()
    }
}

foo()
console.log('bar: ', bar);


