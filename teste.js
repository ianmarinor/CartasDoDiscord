
let obj = {

    nome: 'ian'

}

function foo(){
    return obj
}

let arr = [

    
]


function bar(_obj){
    arr.push(_obj)

    return _obj
}
console.log( bar(foo()) );
console.log( arr );