
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
arr[1] = obj

console.log(arr);

arr[1].place()



