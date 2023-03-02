// let proto = {
    
//   _ulti: 0,
//   _hp: 100,
//   _arr: ['a','b'],

//   heal(n) {
//     this._hp += n;
//   },

//   useUlti() {
//     this._ulti = 0;
//   },
//   changeArr(x,y){
//     this._arr[x] = y
//   }
// };

// let per1 = {
//   _ulti: 10,
// };

// let per2 = {
//   _hp: 150,
// };



// let readyPer1 = Object.assign(Object.create(proto), per1)
// let readyPer2 = Object.assign( Object.create(proto), per2)

// // let lula = structuredClone(readyPer2)



// readyPer2.changeArr(0,22)

// console.log('proto: ', proto);
// console.log('readyPer1',readyPer1);
// console.log('readyPer2',readyPer2);
// // console.log('lula',lula);

// console.log(readyPer1._ulti === readyPer2._ulti);



class Proto {
    constructor (hp){
        this._hp = hp
        this._ulti = 100
        this._array = [333,666]
    }

    heal(n) {
            this._hp += n;
          }

     useUlti() {
                this._ulti = 0;
        }

    changeArr(){
        this._array.splice(0,1)
    }

}

let per1 = new Proto(150)
let per2 = new Proto(500)

// console.log(per1);
// console.log(per2);

per1.changeArr()


console.log(per1);
console.log(per2);
console.log(per1._ulti == per2._ulti);