
let obj = {
    foo: true,
    bar: 10,
    _place: false,
    place(){

       console.log(  this._place = arr.indexOf(this) ); 

    }

}

let arr =[



]

// let mama = Object.create(obj) 
let mama = obj

arr[0] = mama
arr[1] = Object.create(obj) 


arr[1].bar = 5

// console.log(arr[0].bar);


// arr.map((x) => console.log(x.place()))


function loop(x,y,b){

    for(let i=0;i<x;i++){
        y()
        b
    }

}

loop(4, function(){

    console.log(1);
    


}, )

