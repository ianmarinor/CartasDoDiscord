let pai = "arr";
let mae = "arr2";

let obj1 = {
  foo: true,
  bar: 10,
  _place: false,
  parent: false,
  
};

let obj2 = {
  // foo: true,
  // bar: 10,
  _place: false,
  parent: false,
  
};

let terceiro = Object.assign(Object.create(obj1), obj2)

console.log(terceiro.foo);

terceiro.foo = 1

console.log(terceiro.foo);

